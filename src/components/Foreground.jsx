import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      des: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".4mb",
      close: true,
      tag: {
        isOpen: true,
        tagColor: "green",
      },
    },
    {
      des: "You can hold and drag me!!",
      fileSize: ".4mb",
      close: false,
      tag: {
        isOpen: true,
        tagColor: "yellow",
      },
    },
    {
      des: " Card 1",
      fileSize: ".4mb",
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
