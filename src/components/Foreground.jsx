import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      des: " Labon ko.mp3",
      fileSize: "8.4mb",
      close: true,
      tag: {
        isOpen: true,
        tagColor: "green",
      },
    },
    {
      des: "Apt Apt!!.mp3",
      fileSize: "6.4mb",
      close: true,
      tag: {
        isOpen: true,
        tagColor: "yellow",
      },
    },
    {
      des: " Ishq.mp3",
      fileSize: "9.4mb",
      close: true,
      tag: {
        isOpen: true,
        tagColor: "yellow",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed z-[3] w-full h-screen py-8 px-2 flex gap-10 flex-wrap flex-shrink-0 "
    >
      {data.map((item, index) => {
        return <Card key={index} data={item} reference={ref} />;
      })}
    </div>
  );
}

export default Foreground;
