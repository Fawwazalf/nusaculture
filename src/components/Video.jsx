"use client";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="w-[85%] h-[70%]">
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://youtu.be/Ox5X9Yzuik8?si=D_jCcge6Njt62p82"
        controls={true}
        playing={false}
      />
    </div>
  );
};

export default Video;
