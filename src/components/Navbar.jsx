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

export default function Navbar() {
  return (
    <nav className="flex fixed h-16 w-full justify-between px-2 bg-white/70 backdrop-blur-xs border-b lg:border-none md:bg-white/70 md:backdrop-blur-xs lg:backdrop-blur-none lg:justify-around items-center sm:px-2 sm:z-40 lg:px-5 lg:z-30 lg:bg-transparent">
      {/* Logo Area */}
      <div className="text-center lg:bg-white/70 lg:backdrop-blur-xs lg:p-2 lg:rounded-full lg:w-44">
        <h2 className="text-2xl font-extrabold font-mono">DiarySpark</h2>
      </div>

      {/* Navigation Area */}
      <div className="hidden sm:bg-none sm:backdrop-blur-none lg:flex lg:items-center lg:justify-center lg:bg-white/70 lg:backdrop-blur-xs lg:p-2 lg:rounded-full">
        <Link
          href="/"
          className="mx-3 font-mono font-semibold text-lg cursor-pointer"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="mx-3 font-mono font-semibold text-lg cursor-pointer"
        >
          Blog
        </Link>
        <Link
          href="/quiz"
          className="mx-3 font-mono font-semibold text-lg cursor-pointer"
        >
          Quiz
        </Link>
        <Link
          href="/challenge"
          className="mx-3 font-mono font-semibold text-lg cursor-pointer"
        >
          Challenge
        </Link>
      </div>

      {/* Login Button & Mobile Navigation Area */}
      <div className="flex justify-center gap-2 lg:p-2 lg:bg-white/70 lg:backdrop-blur-xs lg:rounded-full lg:min-w-38">
        <Button className="bg-primary font-mono text-sm cursor-pointer">
          Login/Register
        </Button>

        {/* Mobile Navigation */}
        <div className="items-center lg:hidden">
          <Sheet>
            <SheetTrigger
              className="border items-center p-1 rounded-md"
              aschild
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="border-b">
                <SheetTitle className="font-sans text-3xl font-extrabold">DiarySpark</SheetTitle>
                <SheetDescription className="flex flex-col gap-y-2 mt-16 p-3">
                  <Link
                    href="/"
                    className="mx-3 font-mono sm:text-center md:text-start font-semibold sm:text-lg md:text-xl w-full rounded-md p-2 cursor-pointer"
                  >
                    Home
                  </Link>
                  <Link
                    href="/blog"
                    className="mx-3 font-mono sm:text-center md:text-start font-semibold sm:text-lg md:text-xl w-full rounded-md p-2 cursor-pointer"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/quiz"
                    className="mx-3 font-mono sm:text-center md:text-start font-semibold sm:text-lg md:text-xl w-full rounded-md p-2 cursor-pointer"
                  >
                    Quiz
                  </Link>
                  <Link
                    href="/challenge"
                    className="mx-3 font-mono sm:text-center md:text-start font-semibold sm:text-lg md:text-xl w-full rounded-md p-2 cursor-pointer"
                  >
                    Challenge
                  </Link>
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col mt-80 px-5 border-b">
                <h1 className="font-extrabold font-sans text-3xl">Quixk Settings</h1>
                <div className="flex gap-3 w-1/3 mt-5 mb-7">
                  <Button variant="outline" className="w-full h-10"><Accessibility className="w-10 h-10" /></Button>
                  <Button className="w-full h-10"><Settings className="w-10 h-10" /></Button>
                </div>
              </div>
              <SheetFooter>
                <div className="flex flex-col gap-y-3">
                  <Button className="w-full h-10 font-mono text-lg font-semibold">Login</Button>
                  <Button variant="outline" className="w-full h-10 font-mono text-lg font-semibold">Register</Button>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
