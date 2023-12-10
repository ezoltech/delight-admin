import React from "react";
import { Card, Button, Label, TextInput } from "flowbite-react";
const Login = () => {
  return (
    <div>
      {/* <Card className="w-[400px] h-[450px]">
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

          <Button type="submit">Login</Button>
          <div className="flex justify-end items-end mt-7">
            <p>
              don't you have an account?,{" "}
              <a href="/signup" className="font-bold">
                signup
              </a>
            </p>
          </div>
        </form>
      </Card> */}
      <h2>hello login</h2>
    </div>
  );
};

export default Login;
