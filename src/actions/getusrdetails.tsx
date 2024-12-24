"use server";

import jwt from "jsonwebtoken";

export default async function getUserDetails(token: string) {
  try {
    const userDetails = jwt.verify(token, "NUGGET");
    return userDetails;
  } catch (error) {
    console.error(error);
    return { error: error };
  }
}
