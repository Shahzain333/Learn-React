import React from "react";

function Card({channel, btnText="View profile"}) {
  // console.log("Props", props)
  //console.log(props.channel);
  // console.log(channel);
  return (

    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1728327510783-f143af9a5197?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="z-0 h-full w-full rounded-md object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{channel}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ispum dolor sit amet consectetur adipsicing elit, Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
          {/* {btnText || "View profile"} Readaility issue*/}
          {btnText}
        </button>

      </div>
      
    </div>
  );
}

export default Card;
