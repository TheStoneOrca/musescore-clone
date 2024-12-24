"use server";

import SignUp from "@/actions/signup";

export default async function onSubmit(formValues: any) {
  const result = await SignUp(formValues);

  if (result.error || !result.userJWT) {
    throw new Error();
  } else {
    return { userJWT: result.userJWT };
  }
}
