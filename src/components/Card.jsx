import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

function Card({ data, reference }) {
  const [isClosed, setIsClosed] = useState(data.close);
  const [tagOpen, setTagOpen] = useState(data.tag.isOpen);
  const handleIconClick = () => {
    // Toggle the icon state
    setIsClosed((prevState) => !prevState);
    setTagOpen((prevState) => !prevState);
  };
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      className=" relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="leading-tight py-4">{data.des}</p>
      <footer className="absolute bottom-0 left-0 w-full ">
        <div className="flex items-center justify-between mb-3 py-3 px-8 mb-3">
          <h1>{data.fileSize}</h1>
          <span
            className="flex items-center justify-center w-7 h-7 bg-zinc-600 rounded-full"
            onClick={handleIconClick}
          >
            {isClosed ? (
              <IoClose handleIconClick />
            ) : (
              <GoDownload size=".8em" color="#fff" />
            )}
          </span>
        </div>
        {tagOpen && (
          <div className="tag w-full bg-green-700 left-0 p-4 flex items-center justify-center font-semibold">
            <h3 className="">Download Now</h3>
          </div>
        )}
      </footer>
    </motion.div>
  );
}

export default Card;
