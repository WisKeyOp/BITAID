"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { userDetailsContext } from "@/context/userDetailsContext";

export type userDetails = {
  name: string;
  email: string;
  credits: number;
};

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
 const { user, isSignedIn, isLoaded } = useUser();
  const [userDetail, setUserDetail] = useState<userDetails|null>(null);

 
  const createNewUser = async () => {
   try {
      const result = await axios.post("/api/users");
      console.log("User created/fetched:", result.data);
      setUserDetail(result.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }; 

  useEffect(() => {
    if (isLoaded && isSignedIn && !userDetail) {
      createNewUser();
    }
  }, [isLoaded, isSignedIn, user, userDetail]);


  return (
    <div>
      <userDetailsContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </userDetailsContext.Provider>
    </div>
  );
};

export default Provider;
