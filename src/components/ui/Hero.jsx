import React from "react";
import Image from "next/image";
import hero from "../../../public/images/hero-image.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-175 md:h-155 w-full md:w-7xl lg:w-12xl xl:w-full sm:aspect-square md:aspect-video overflow-hidden">
      <Image
        src={hero}
        alt="Diary Spark Hero"
        sizes="(max-w-768-px) 100vw"
        loading="eager"
        className="absolute h-full w-full md:w-7xl lg:w-full lg:object-fill sm:object-cover md:object-fill"
      />

      <div className="absolute h-full w-full text-center items-center px-10 md:px-24 bg-white/30 backdrop-blur-xs lg:text-left lg:w-[50%] lg:py-10 xl:py-32 lg:pl-14 lg:pr-32 lg:bg-white/30 lg:backdrop-blur-lg lg:rounded-r-full">
        <h1 className="text-3xl font-display font-bold mt-80 md:mt-64 md:text-5xl lg:mt-20 text-primary">
          &apos; Your Space to Reflect, Grow, and Be Yourself &apos;
        </h1>
        <p className="md:text-xl mt-7 md:mt-3 text-secondary dark:text-secondary">
          Take Time to reflect, set meaningful goals, and work toward becoming
          your best self in an environment built to feel simple, encouraging and
          personal.
        </p>
        <div className="flex justify-center lg:justify-start md:flex mt-5 gap-3 md:flex-row">
          <Button
            variant=""
            className="h-8 py-1 px-3 text-lg w-28 rounded-full cursor-pointer"
          >
            Quizzes
          </Button>
          <Button
            variant="outline"
            className="h-8 py-1 px-3 dark:text-black text-lg w-28 rounded-full cursor-pointer"
          >
            Blogs
          </Button>
          <Button
            variant=""
            className="h-8 py-1 px-3 text-lg w-28 rounded-full cursor-pointer"
          >
            Quest
          </Button>
        </div>
      </div>
    </section>
  );
}
