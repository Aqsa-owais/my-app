"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function About() {
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageClick = () => {
    setLoading(true);
    setImageLoaded(false);
    setTimeout(() => {
      setLoading(false);
      setImageLoaded(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-green-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-black mb-4">About Me</h1>

      {loading ? (
        <div className="flex items-center justify-center">
          <p className="text-lg text-black">Loading image...</p>
        </div>
      ) : (
        <div onClick={handleImageClick} className="cursor-pointer">
          {imageLoaded ? (
            <Image
              src="/images/loadingimage"  // <-- Correct path to the image
              alt="About Image"
              width={500}
              height={300}
              className="border border-black rounded-xl mb-6"
            />
          ) : (
            <p className="text-lg text-black">Click the image to load it.</p>
          )}
        </div>
      )}

      <p className="mb-8">Hello! I am Aqsa. I am a passionate developer.</p>
    </div>
  );
}
