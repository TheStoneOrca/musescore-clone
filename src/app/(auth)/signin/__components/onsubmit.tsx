"use server";

import SignIn from "@/actions/signin";

export default async function onSubmit(formValues: any) {
  const result = await SignIn(formValues);

  if (result.error || !result.userJWT) {
    return { Error: 404 };
  } else {
    return { userJWT: result.userJWT };
  }
}
