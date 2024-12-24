"use client";

import { useEffect, useState } from "react";
import reactsecurestorage from "react-secure-storage";
import getUserDetails from "@/actions/getusrdetails";

type UserDetails = {
  isReady: boolean;
  isError: boolean;
  isSignedIn: boolean;
  user: object | null;
};

const useUser = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    isError: false,
    isReady: false,
    isSignedIn: false,
    user: null,
  });

  useEffect(() => {
    try {
      if (reactsecurestorage.getItem("userToken") != null) {
        getUserDetails(reactsecurestorage.getItem("userToken") as string).then(
          (res) => {
            setUserDetails({
              isError: true,
              isReady: true,
              isSignedIn: true,
              user: res as any,
            });
          }
        );
      } else {
        setUserDetails({
          isError: true,
          isReady: true,
          isSignedIn: false,
          user: null,
        });
      }
    } catch (error) {
      console.error(error);
      setUserDetails({
        isError: true,
        isReady: true,
        isSignedIn: false,
        user: null,
      });
    }
  }, []);

  return userDetails;
};

export default useUser;
