'use server'
import jwt from "jsonwebtoken"
import { createUser, getUserById } from "../user"
import { cookies } from "next/headers"


const privateKeY = process.env.NEXT_PUBLIC_JWT_SECRET ||  ""
export type Decoded ={
    email: string
    name: string 
    picture: string
    sub: string
        // _id: string
        // _type:string
}

export async function auth(credential: string){

    const decoded = jwt.decode(credential)
    if (!decoded) return

    const user = await createUser(decoded as Decoded)

    if (!user) {
        return
    }

    const token = jwt.sign({ _id :user._id  },  privateKeY, {expiresIn:"30d"})


    const maxAge = 60 * 60 * 60 * 24 * 30 //30 days



   await ( await cookies()).set({name:"auth_token", value:token , maxAge}) 
   console.log(decoded)


   return user
}

export async function getAuthedUser(){
const id =  await getAuthedUserId()

if (!id) {
    return
} 
const user = await getUserById(id)
 return user
}

export async function getAuthedUserId(){
    const token = (await cookies()).get("auth_token")?.value 

    if(!token) return 
    const decoded = jwt.verify(token , privateKeY) as { _id : string }
    return decoded._id

}

export async function removeAuthedUserCookie (){
(await cookies()).delete("auth_token")
}