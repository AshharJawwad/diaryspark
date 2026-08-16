import React from "react";

export function MainContent() {
  return (
    <section className="min-h-96 w-108 md:w-7xl mx-auto mt-5 mb-3 pt-5 pb-5 items-center justify-center bg-muted dark:bg-muted rounded-lg">
      <div className="w-103 md:w-4xl lg:w-6xl min-h-96 p-3 shadow-md mx-auto mb-7 bg-white dark:bg-background rounded-lg">
        <h1 className="font-display font-semibold text-2xl pb-3 border-b">
          New Blogs
        </h1>
      </div>
      <div className="w-103 md:w-4xl lg:w-6xl min-h-88 p-3 shadow-md mx-auto mb-7 bg-white dark:bg-background rounded-lg">
        <h1 className="font-display font-semibold text-2xl pb-3 border-b">
          New Quizzes
        </h1>
      </div>
      <div className="w-103 md:w-4xl lg:w-6xl min-h-88 p-3 shadow-md mx-auto bg-white dark:bg-background rounded-lg">
        <h1 className="font-display font-semibold text-2xl pb-3 border-b">
          New Quests
        </h1>
      </div>
    </section>
  );
}
