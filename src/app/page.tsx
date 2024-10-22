import Link from "next/link";
export default function Home() {
  return (
    <div className="relative">
      <img
        src="https://getwallpapers.com/wallpaper/full/2/9/7/494243.jpg"
        alt="burger-image"
        className="w-screen h-100"
        id="img"
      />
      <h1 className="absolute top-20 left-0 text-6xl " id="content">
      Welcome to our Resturent
      </h1>
      <p id="contents" className="absolute top-20 left-0 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex maiores nam? Reprehenderit itaque praesentium asperiores harum impedit! Repellat, dolorum!</p>
      <button className="absolute top-0 left-96 text-4xl" id="btn">Order Now</button>
    </div>
  );
}
