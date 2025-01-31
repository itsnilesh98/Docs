import React from "react";

function Background() {
  return (
    <div className="fixed z-[2] w-full h-screen ">
      <div className="absolute top-[5%] w-full flex justify-center text-3xl text-zinc-600 font-semibold">
        Documents
      </div>
      <h1 className="absolute text-[13vw] top-1/2 left-1/2 -translate-x-[50%] font-semibold text-zinc-900 -translate-y-[50%] leading-none tracking-tighter">
        DOCS
      </h1>
    </div>
  );
}

export default Background;
