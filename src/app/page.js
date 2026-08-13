import Image from "next/image";
import hero from "../../public/images/hero-image.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="font-body mt-16">
      {/* Hero Section */}
      <section className="relative h-175 md:h-155 w-full sm:aspect-square md:aspect-video overflow-hidden">
        <Image
          src={hero}
          alt="Diary Spark Hero"
          sizes="(max-w-768-px) 100vw"
          loading="eager"
          className="absolute h-full w-full lg:object-fill sm:object-cover md:object-fill"
        />

        <div className="absolute h-full w-full text-center items-center px-10 md:px-24 bg-white/30 backdrop-blur-xs lg:text-left lg:w-[50%] lg:py-32 lg:pl-14 lg:pr-32 lg:bg-white/30 lg:backdrop-blur-lg lg:rounded-r-full">
          <h1 className="text-3xl font-display font-bold mt-80 md:mt-64 md:text-5xl lg:mt-20 text-primary">
            Read Blogs, Learn from Quizzes, and Take on Challanges
          </h1>
          <p className="md:text-xl mt-7 md:mt-3 text-secondary-foreground">
            Try everything in from anywhere in the world with or without
            internet, Grow yourself with extensive knowledge and explore
          </p>
          <div className="flex justify-center lg:justify-start md:flex mt-5 gap-3 md:flex-row">
            <Button className="h-8 py-1 px-3 text-lg font-semibold w-28 cursor-pointer">
              Quizzes
            </Button>
            <Button className="h-8 py-1 px-3 text-lg font-semibold w-28 cursor-pointer">
              Blogs
            </Button>
            <Button className="h-8 py-1 px-3 text-lg font-semibold w-32 cursor-pointer">
              Challenges
            </Button>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="min-h-96 w-full mt-3 items-center justify-center bg-amber-600"></section>
    </main>
  );
}
