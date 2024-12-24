import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useState } from "react";
import reactsecurestorage from "react-secure-storage";
import onSubmit from "./onsubmit";

export default function SignInCard() {
  const [isShowingPassword, setShowingPassword] = useState<boolean>();
  const { register, handleSubmit } = useForm();
  const [errorMsg, setErrorMessage] = useState<string>();

  const submitHandler = (values: any) => {
    onSubmit(values)
      .then((result) => {
        if (result.userJWT) {
          reactsecurestorage.setItem("userToken", result.userJWT);
          window.location.href = "/";
        } else {
          setErrorMessage("Unexpected Error.");
        }
      })
      .catch((err) => {
        setErrorMessage("Unexpected Error");
      });
    return false;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Sign into your to post and share music.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-col">
        <form
          className="flex flex-col gap-y-5"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="gap-y-2">
            <div className="flex-col">
              <Label>Username</Label>
              <Input type="text" {...register("username")} required />
            </div>
            <div className="flex-col">
              <Label>Password</Label>
              <div className="flex">
                <Input
                  type={isShowingPassword ? "text" : "password"}
                  {...register("password")}
                  required
                />
                <Button
                  type="button"
                  onClick={() => setShowingPassword(!isShowingPassword)}
                >
                  <Eye />
                </Button>
              </div>
            </div>
          </div>
          <Button type="submit">Sign In</Button>
          {errorMsg && errorMsg}
        </form>
      </CardContent>
    </Card>
  );
}
