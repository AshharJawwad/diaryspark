import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex fixed h-16 w-full justify-around items-center px-5 bg-amber-400 m-0">
      {/* Logo Area */}
      <div className="text-center bg-white/70 backdrop-blur-md p-2 rounded-full w-44">
        <h2 className="text-2xl font-extrabold font-mono">DiarySpark</h2>
      </div>

      {/* Navigation Area */}
      <div className="hidden lg:block items-center justify-center bg-white/70 backdrop-blur-md p-2 rounded-full">
        <Link href="/" className="mx-3 font-mono text-lg cursor-pointer">
          Home
        </Link>
        <Link href="/blog" className="mx-3 font-mono text-lg cursor-pointer">
          Blog
        </Link>
        <Link href="/quiz" className="mx-3 font-mono text-lg cursor-pointer">
          Quiz
        </Link>
        <Link
          href="/challenge"
          className="mx-3 font-mono text-lg cursor-pointer"
        >
          Challenge
        </Link>
      </div>

      {/* Login Button & Mobile Navigation Area */}
      <div className="flex justify-center p-2 bg-white/70 backdrop-blur-md rounded-full min-w-38">
        <Button className="hidden md:block bg-primary font-mono text-sm cursor-pointer">
          Login/Register
        </Button>
      </div>
    </nav>
  );
}
