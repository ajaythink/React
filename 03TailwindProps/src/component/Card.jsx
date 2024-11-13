// import React from 'react';

// eslint-disable-next-line react/prop-types
function Card({ username="Default", btnText = "Click me" }) {
  // console.log("props", props);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-4">
      <img
        src="https://plus.unsplash.com/premium_photo-1663933534712-fc5cffc627f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="z-0 h-full w-full rounded-md object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          adipisci explicabo dolore molestiae, assumenda in?
        </p>
        <button className="mt-2 inline-flex cursor-poiter items-center text-sm font-semibold bg-gray-600 text-white">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
