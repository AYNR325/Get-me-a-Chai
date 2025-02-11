import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center h-[40vh] text-white">
        <div className="font-bold flex  gap-1 md:text-5xl justify-center items-center text-3xl ">
          Buy Me a Chai
          <span className="text-6xl">
            ☕
            {/* <img className="invertImg" src="/tea.gif" width={88} alt="" /> */}
          </span>
        </div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start now! 🚀
        </p>
        <div>
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start Here ✨
            </button>
          </Link>
          <Link href="/about">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Read More 📖
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">
          Your Fans can buy you a Chai{" "}
        </h2>
        <div className="flex flex-col md:flex-row gap-7 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/man.gif"
              alt=""
            />
            <p className="font-bold text-center">Fans want to help 🤝</p>
            <p className="text-center">
              Your fans are available to support you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold text-center">Fans want to contribute 💰</p>
            <p className="text-center">
              Your fans are willing to contribute financially
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/group.gif"
              alt=""
            />
            <p className="font-bold text-center">Fans want to collaborate 🤝</p>
            <p className="text-center">
              Your fans are ready to collaborate with you
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div>
        <div className="text-white container mx-auto pb-20 pt-14 px-10">
          <h2 className="text-3xl font-bold text-center mb-14">
            Learn More About Us 📚
          </h2>
          <p className="text-center mb-6 md:w-1/2 md:mx-auto ">
            We are a dedicated team of creators and developers who believe in
            the power of community support. Our platform allows creators to
            receive funding from their fans and followers, enabling them to
            continue doing what they love.
          </p>
          <p className="text-center md:w-1/2 md:mx-auto">
            Whether you are a musician, artist, writer, or any other type of
            creator, our platform is designed to help you connect with your
            audience and receive the support you need. Join us today and start
            your journey towards achieving your creative goals! 🌟
          </p>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container flex justify-between mx-auto p-4 ">
        <h2 className="text-xl font-bold text-center text-slate-300">
          Connect with me 🌐
        </h2>
        <div className="flex justify-center gap-7">
          <Link href="https://github.com/AYNR325"><span className="bg-white">
            <img src="/github.png" alt="GitHub" width={35} className="bg-white rounded-full" /></span>
          </Link>
          <Link href="https://www.linkedin.com/in/ayush-rokade-972940310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img src="/linkedin.png" alt="LinkedIn" width={35} />
          </Link>
          <Link href="mailto:ayushnr35@gmail.com">
            <img src="/gmail.png" alt="Gmail" width={35} />
          </Link>
        </div>
      </div>
    </>
  );
}
