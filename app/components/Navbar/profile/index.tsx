"use client"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar"
import {GoogleLogin} from "@react-oauth/google"
import { auth } from "@/services/auth"
import { useState } from "react"

export default function Profile() {

const [isLoggeding, setIsLoggeding] = useState();

 const onSuccess = async (res:{ credential? : string})=>{


if (res.credential) {

   return  await auth(res.credential)
    // console.log(res.credential)
}


 }

  return (

    <>
{
    isLoggeding ? (
<div className="flex items-center gap-5">
        index 
        <div className="flex items-center gap-3" >
            <Link href={"/user/$user.id"} className=" text-neutral-400 font-semibold hover:underline">
            Capitaine stuart 
            </Link>

            <Avatar  className="w-8 h-8">
<AvatarImage src="/profile.jpeg" />
<AvatarFallback>
    P S
</AvatarFallback>
            </Avatar>

        </div>
        
    </div>
    ) :(
<GoogleLogin onSuccess={res => onSuccess(res) } onError={()=> console.error("Someting went wrong ")} />
    )}
    
    </>

  )
}


//private nework 

// 07488742