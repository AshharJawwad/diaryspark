"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogOut, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => setIsOpen(!isOpen);

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
      <div className="flex justify-center gap-1.5 lg:p-2 lg:bg-white/70 lg:backdrop-blur-xs lg:rounded-full lg:min-w-38">
        <Button className="bg-primary font-mono text-sm cursor-pointer">
          Login/Register
        </Button>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              onClick={toggleSheet}
              size="icon"
              className="lg:hidden top-4 left-4 z-40 rounded-lg shadow-sm bg-background border-neutral-200 dark:border-neutral-800"
              aria-label="Open Navigation Sidebar"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-72 p-0 flex -z-40 flex-col justify-between bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800"
          >
            <div className="flex flex-col lg:hidden">
              {/* Header Section */}
              <SheetHeader className="p-6 border-b border-neutral-100 dark:border-neutral-800 text-left">
                <SheetTitle className="text-xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                  <span className="h-7 w-7 rounded-md bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-sm">
                    A
                  </span>
                  Acme Inc
                </SheetTitle>
                <SheetDescription className="text-xs text-neutral-500 dark:text-neutral-400">
                  Navigation & workspace controls
                </SheetDescription>
              </SheetHeader>

              {/* Navigation Items */}
              <nav className="p-4 space-y-1">
                <SheetClose onClick={toggleSheet} asChild>
                  <X />
                </SheetClose>
              </nav>
            </div>

            {/* User Profile Footer */}
            <div className="p-4 border-t border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center gap-3 px-3 py-2 mb-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/50">
                <div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center font-semibold text-xs text-neutral-700 dark:text-neutral-200">
                  JD
                </div>
                <div className="flex-1 overflow-hidden text-left">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                    John Doe
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                    john@example.com
                  </p>
                </div>
              </div>

              <SheetClose asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/30 gap-3"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log Out</span>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
