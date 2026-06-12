import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import scrollDownAnimation from "../assets/scrollDown.lottie";
import { LightRays } from "@/components/ui/light-rays";

function Hero() {
  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden flex items-center justify-center mb-12">
      <LightRays />

      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold">Welcome to My Portfolio!</h1>

          <p className="mt-4 text-xl text-gray-600 font-light">
            I'm Josue, a passionate software developer with a knack for creating
            innovative solutions.
          </p>
        </div>

        <div className="mt-20 p-5 bottom-0 absolute">
          <DotLottieReact src={scrollDownAnimation} autoplay loop />
        </div>
      </div>
    </div>
  );
}

export default Hero;
