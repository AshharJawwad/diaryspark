import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex fixed h-16 w-full justify-between pl-2 bg-white/70 backdrop-blur-xs border-b lg:border-none md:bg-white/70 md:backdrop-blur-xs lg:backdrop-blur-none lg:justify-around items-center sm:px-2 sm:z-40 lg:px-5 lg:z-30 lg:bg-transparent">
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
      <div className="flex justify-center px-0 lg:p-2 lg:bg-white/70 lg:backdrop-blur-xs lg:rounded-full min-w-38">
        <Button className="bg-primary font-mono text-sm cursor-pointer">
          Login/Register
        </Button>
      </div>
    </nav>
  );
}
