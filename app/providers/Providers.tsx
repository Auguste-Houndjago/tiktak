"use client"

import { Toaster } from "@/components/ui/toaster"
import { getAuthedUser } from "@/services/auth"
import useAuth from "@/stores/auth"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { useEffect } from "react"


type Props = {
  children: React.ReactNode
}

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!
export default function Providers(props: Props) {

  const { children } = props
  const setAuth = useAuth(state => state.setAuth)

  useEffect(() => {

    getAuthedUser().then(user => {
      if (!user) return;

    })
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientId}  >
      <Toaster />
      {children}
    </GoogleOAuthProvider>
  )
}
