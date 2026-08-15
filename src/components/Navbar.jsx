"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Accessibility, LogOut, Menu, Settings, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="flex font-body fixed h-12 w-full z-40 justify-between px-2 bg-white shadow-md lg:border-none lg:justify-around items-center sm:px-2 sm:z-40 lg:px-5 lg:z-30 ">
      {/* Logo Area */}
      <div className="text-center lg:p-2 lg:rounded-full lg:w-44">
        <h2 className="text-2xl font-display font-extrabold">DiarySpark</h2>
      </div>

      {/* Navigation Area */}
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:p-2 lg:rounded-full">
        <Link href="/" className="mx-3 text-lg cursor-pointer">
          Home
        </Link>
        <Link
          href="/blog"
          className="mx-3 text-lg cursor-pointer"
        >
          Blog
        </Link>
        <Link
          href="/quiz"
          className="mx-3 text-lg cursor-pointer"
        >
          Quiz
        </Link>
        <Link
          href="/challenge"
          className="mx-3 text-lg cursor-pointer"
        >
          Quest
        </Link>
      </div>

      {/* Login Button & Mobile Navigation Area */}
      <div className="flex items-center justify-center gap-2 lg:rounded-full lg:min-w-38">
        <Button className="h-8 text-lg cursor-pointer rounded-full py-1 px-3">
          Login
        </Button>
        
        <ModeToggle />

        {/* Mobile Navigation */}
        <div className="items-center lg:hidden">
          <Sheet>
            <SheetTrigger
              className="border items-center p-1 rounded-md"
              aschild="true"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="">
                <SheetTitle className="font-display text-3xl font-extrabold">
                  DiarySpark
                </SheetTitle>
                <SheetDescription className="flex flex-col font-body font-semibold text-lg gap-y-2 mt-16 p-3 border-b">
                  <Link
                    href="/"
                    className="mx-3 sm:text-center md:text-start font-bold sm:text-lg md:text-xl w-full rounded-md p-2 cursor-pointer"
                  >
                    Home
                  </Link>
                  <Link
                    href="/blog"
                    className="mx-3 sm:text-center md:text-start font-bold sm:text-lg md:text-xl w-full rounded-md p-2 cursor-pointer"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/quiz"
                    className="mx-3 sm:text-center md:text-start font-bold sm:text-lg md:text-xl w-full rounded-md p-2 cursor-pointer"
                  >
                    Quiz
                  </Link>
                  <Link
                    href="/challenge"
                    className="mx-3 sm:text-center md:text-start font-bold sm:text-lg md:text-xl w-full rounded-md p-2 cursor-pointer"
                  >
                    Quest
                  </Link>
                </SheetDescription>
                <div className="flex flex-col mt-36 pr-3 border-b">
                  <h2 className="font-extrabold font-display text-3xl">Accessibility</h2>
                  <div className="flex gap-2 w-full mt-5 mb-3">
                    <Button variant="outline" className="w-1/3 h-10">
                      <Accessibility className="w-10 h-10" />
                    </Button>
                    <Button className="w-1/3 h-10">
                      <Settings className="w-10 h-10" />
                    </Button>
                    <Button variant="outline" className="w-1/3 h-10">
                      <Settings className="w-10 h-10" />
                    </Button>
                  </div>
                  <div className="flex gap-2 w-full mt-3 mb-7">
                    <Button variant="outline" className="w-1/3 h-10">
                      <Accessibility className="w-10 h-10" />
                    </Button>
                    <Button className="w-1/3 h-10">
                      <Settings className="w-10 h-10" />
                    </Button>
                    <Button variant="outline" className="w-1/3 h-10">
                      <Settings className="w-10 h-10" />
                    </Button>
                  </div>
                </div>
              </SheetHeader>
              <SheetFooter className="font-body">
                <div className="flex flex-col gap-y-3">
                  <Button className="w-full h-10 text-lg font-semibold rounded-full">
                    Login
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-10 text-lg font-semibold rounded-full"
                  >
                    Register
                  </Button>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
