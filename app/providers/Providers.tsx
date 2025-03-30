"use client"

import { GoogleOAuthProvider } from "@react-oauth/google"


type Props ={
    children: React.ReactNode
}
export default function Providers(props: Props) {

    const {children} = props
    const clientId  = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID! 
  return (
<GoogleOAuthProvider clientId={clientId}  > {children} </GoogleOAuthProvider>
  )
}
