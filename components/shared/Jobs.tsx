"use client";
import { useState } from "react";
import useJobStore from "@/store/useJobStore";
import JobCard from "./JobCard";
import Button from "../frontend/Button";
const Jobs = () => {
  const { filteredJobs } = useJobStore();
  const [visibleJobs, setvisibleJobs] = useState(6);
  const jobsIncrement = 3;

  const handleShowMore = () => {
    setvisibleJobs((prev) => prev + jobsIncrement);
  };
  return (
    <div id="jobs" className="py-10 w-full ">
      <div className="w-full text-center mb-10 text-4xl font-extrabold capitalize">
        <h2>
          Available <span className="text-purple-700 font-extrabold">Jobs</span>
        </h2>
      </div>

      {filteredJobs.length < 1 ? (
        <div className="w-full text-center">
          <h1 className="text-2xl text-red-600">No Jobs Found</h1>
          <span className="text-sm capitalize">Check back later</span>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 w-[90%] mx-auto max-w-[1400px]">
          {filteredJobs.slice(0, visibleJobs).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {filteredJobs.length > visibleJobs && (
        <div className="text-center mt-10 text-sm">
          <Button onClick={handleShowMore}>Load More</Button>
        </div>
      )}
    </div>
  );
};

export default Jobs;
