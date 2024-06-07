import { jobType } from "@/types/jobTypes";
import SearchForm from "./SearchForm"
interface HeroProps {
  jobs: jobType[];
}

const Hero = ({jobs}:HeroProps) => {
  return (
    <div
      id="home"
      className="bg-[url('/hero.png')] h-screen relative w-full bg-cover mt-[-70px]"
    >
      <div className="flex flex-col h-full items-center justify-center pt-[80px] gap-20 w-[90%] mx-auto max-w-[1450px]">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-extrabold text-black">
            Empowering The{" "}
            <span className="text-purple-600 font-extrabold">
              Modern India{" "}
            </span>
            By Empowering The
            <span className="text-purple-600 font-extrabold"> Women</span>
          </h1>
          <span className="font-medium text-xl line-clamp-3">Going Beyond The Parda & Coming To The Modernity To Connect-Network-Empower</span>
        </div>
        <SearchForm jobs={jobs} />
      </div>
    </div>
  );
}

export default Hero