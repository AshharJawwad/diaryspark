import React from "react";

const Header = () => {
  return (
    <div className="flex w-full h-12 justify-between pb-0.5 items-center m-auto bg-amber-700">
      <div className="w-4 h-4 pl-4">
        <img
          src="/"
          alt="Diary_Spark"
          className="w-4 h-4 mt-0.5 rounded-sm"
        ></img>
      </div>
      <div className="h-7 pr-4 text-white items-center flex gap-4">
        <div className="w-8 h-8 p-1 rounded-full bg-amber-400 text-center">
          S
        </div>
        <button className="border-none pl-3 pr-3 w-34 h-8 text-center mt-0.5 rounded-full bg-red-400">
          SingIn/Regester
        </button>
      </div>
    </div>
  );
};

export default Header;
