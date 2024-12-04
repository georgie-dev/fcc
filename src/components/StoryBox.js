import React from "react";
import { IoPlay } from "react-icons/io5";

const StoryBox = ({ data }) => {
  return (
    <div className="rounded-md h-48 md:h-60 lg:h-80 relative">
      <img
        alt="snap story"
        src={data.image}
        className="w-full h-full object-fill rounded-lg"
      />
      <div className=" rounded-full w-6 h-6 flex text-gray-200 items-center justify-center bg-zinc-700 absolute top-2 right-2 text-xs">
        {data.number}
      </div>
      <div className="bg-white absolute bottom-2 m-auto left-0 right-0 w-fit rounded-2xl flex font-semibold items-center gap-1 px-2 py-[2px] text-sm text-zinc-600">
        <IoPlay />
        <small className="font-bold">{Number(data.plays).toLocaleString()}</small>
      </div>
    </div>
  );
};

export default StoryBox;
