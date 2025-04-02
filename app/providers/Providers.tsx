"use client";

import { getAuthedUser } from "@/services/auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import useAuth from "@/stores/auth";
import { Toaster } from "@/components/ui/toaster";

type Props = {
  children: React.ReactNode;
};

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID! || "";

export default function Providers({ children }: Props) {
  const setAuth = useAuth((state) => state.setAuth);

  useEffect(() => {
    const initializeGapi = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "email profile",
      }).then(() => {
        console.log("Google API initialized successfully");
      }).catch((error:any) => {
        console.error("Error initializing Google API:", error);
      });
    };

    gapi.load("client:auth2", initializeGapi);
  }, []);

  useEffect(() => {
    getAuthedUser().then((user) => {
      if (user) {
        setAuth(user);
      }
    });
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Toaster />
      {children}
    </GoogleOAuthProvider>
  );
}