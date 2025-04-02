"use client";

import { getAuthedUser } from "@/services/auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useEffect } from "react";
import useAuth from "@/stores/auth";
import { Toaster } from "@/components/ui/toaster";

type Props = {
  children: React.ReactNode;
};

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;

export default function Providers(props: Props) {
  const { children } = props;
  const setAuth = useAuth((state) => state.setAuth);

  useEffect(() => {
    getAuthedUser().then((user) => {
      if (!user) return;
      setAuth(user);
    }).catch((error: Error) => {
      console.error('Error fetching authenticated user:', error);
    });
  }, [setAuth]);

  return (
    <GoogleOAuthProvider 
      clientId={clientId}
      onScriptLoadError={() => console.error('Google Script Load Error')}
      onScriptLoadSuccess={() => console.log('Google Script Loaded Successfully')}
    >
      <Toaster />
      {children}
    </GoogleOAuthProvider>
  );
}
