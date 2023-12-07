import React from "react";
import { Card, Button, Checkbox, Label, TextInput } from "flowbite-react";
export const Login = () => {
  return (
    <div>
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
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Register</Button>
          <div className="flex justify-end items-end mt-7">
            <p>
              don't you have an account?,{" "}
              <a href="/login" className="font-bold">
                register
              </a>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
};
