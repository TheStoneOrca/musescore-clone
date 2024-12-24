"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function SignIn(data: {
  username: string;
  password: string;
}) {
  try {
    const prisma = new PrismaClient();
    const checkUser = await prisma.users.findFirst({
      where: { username: data.username },
    });

    if (checkUser) {
      const isPasswordCorrect = await bcrypt.compare(
        data.password,
        checkUser.password
      );
      if (isPasswordCorrect) {
        const userJWT = jwt.sign(checkUser, "NUGGET");
        return { Success: 200, userJWT: userJWT };
      } else {
        return { Error: 401 };
      }
    } else {
      return { error: 404 };
    }
  } catch (error) {
    console.error(error);
    return { Error: 500 };
  }
}
