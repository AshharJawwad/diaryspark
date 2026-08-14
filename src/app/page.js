import Image from "next/image";
import hero from "../../public/images/hero-image.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-body mt-12">
      {/* Hero Section */}
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
          <p className="md:text-xl mt-7 md:mt-3 text-secondary-foreground">
            Take Time to reflect, set meaningful goals, and work toward becoming
            your best self in an environment built to feel simple, encouraging
            and personal.
          </p>
          <div className="flex justify-center lg:justify-start md:flex mt-5 gap-3 md:flex-row">
            <Button
              variant="secondary"
              className="h-8 py-1 px-3 text-lg w-28 rounded-full cursor-pointer"
            >
              Quizzes
            </Button>
            <Button
              variant="outline"
              className="h-8 py-1 px-3 text-lg w-28 rounded-full cursor-pointer"
            >
              Blogs
            </Button>
            <Button
              variant="secondary"
              className="h-8 py-1 px-3 text-lg w-28 rounded-full cursor-pointer"
            >
              Quest
            </Button>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="min-h-96 w-108 md:w-7xl mx-auto mt-5 pt-5 pb-5 items-center justify-center">
        <div className="w-103 md:w-4xl lg:w-6xl min-h-96 p-3 shadow-md mx-auto mb-7 rounded-lg">
          <h1 className="font-display font-semibold text-2xl pb-3 border-b">
            New Blogs
          </h1>
        </div>
        <div className="w-103 md:w-4xl lg:w-6xl min-h-88 p-3 shadow-md mx-auto mb-7 rounded-lg">
          <h1 className="font-display font-semibold text-2xl pb-3 border-b">
            New Quizzes
          </h1>
        </div>
        <div className="w-103 md:w-4xl lg:w-6xl min-h-88 p-3 shadow-md mx-auto rounded-lg">
          <h1 className="font-display font-semibold text-2xl pb-3 border-b">
            New Quests
          </h1>
        </div>
      </section>
    </div>
  );
}
