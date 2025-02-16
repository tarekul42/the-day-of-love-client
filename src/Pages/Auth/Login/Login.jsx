import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="mx-auto w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="password">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardDescription>
              Welcome back! Log in to access your account and continue where you left off.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
            <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email here" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="current">Password</Label>
                <Input id="current" type="password" placeholder="Give a unique password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardDescription>
              Create your account to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
            <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Enter your name here" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email here" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="current">Password</Label>
                <Input id="current" type="password" placeholder="Give a unique password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirm">Confirm password</Label>
                <Input id="confirm" type="password" placeholder="Re-type your given password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Sign Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      {/* my custom divider */}
      <div className="flex mx-auto items-center my-4 w-[400px]">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="mx-auto text-center w-[400px]">

      <div className="flex justify-between">
      <Button>Continue with Google</Button>
      <Button>Continue with Github</Button>
      </div>
      </div>
    </div>
  );
};

export default Login;
