import React from "react";
import { Card, Button, Label, TextInput } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";
export const Signup = () => {
  function showToast() {
    toast.success("logged in successfully");
  }
  return (
    <div>
      <Toaster />
      <Card className="w-[400px] h-[450px]">
        <form className="flex  flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>

          <Button type="submit" onClick={showToast}>
            Register
          </Button>
          <div className="flex justify-end items-end mt-7">
            <p>
              already have an account?,{" "}
              <a href="/signup" className="font-bold">
                login
              </a>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
};
