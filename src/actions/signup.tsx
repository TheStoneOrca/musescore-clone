"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function SignUp(data: {
  username: string;
  password: string;
  email: string;
}) {
  try {
    const prisma = new PrismaClient();
    const checkUser = await prisma.users.findFirst({
      where: { username: data.username },
    });

    if (checkUser) {
      return { error: 401 };
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await prisma.users.create({
      data: {
        username: data.username,
        password: hashedPassword,
        email: data.email,
        role: "user",
        avatarimg: "",
        bio: "",
        isPlus: false,
      },
    });

    const newUserToken = jwt.sign(newUser, "NUGGET");
    return { Success: 200, userJWT: newUserToken };
  } catch (error) {
    console.error(error);
    return { Error: 500 };
  }
}
