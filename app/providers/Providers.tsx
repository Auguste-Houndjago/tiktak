"use client";

import { getAuthedUser } from "@/services/auth";
import React, { useEffect } from "react";
import useAuth from "@/stores/auth";
import { Toaster } from "@/components/ui/toaster";
import { gapi } from "gapi-script";

type Props = {
  children: React.ReactNode;
};

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;

export default function Providers(props: Props) {
  const { children } = props;
  const setAuth = useAuth((state) => state.setAuth);

  const initializeGapi = () => {
    gapi.client.init({
      clientId: clientId,
      scope: "email profile",
    }).then(() => {
      console.log('Google API initialized successfully');
    }).catch((error:any) => {
      console.error('Error initializing Google API:', error);
    });
  };

  useEffect(() => {
    // Load and init google api scripts
    gapi.load("client:auth2", initializeGapi);
  }, []);

  useEffect(() => {
    getAuthedUser().then((user) => {
      if (!user) return;
      setAuth(user);
    }).catch((error: Error) => {
      console.error('Error fetching authenticated user:', error);
    });
  }, [setAuth]);

  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
