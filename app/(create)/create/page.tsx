import CreateForm from "../components/CreateForm";

const page = () => {
  return (
    <div className="max-w-[1450px] w-[90%] mx-auto">
      <div className="w-full mt-5 text-center">
        <h1 className="md:text-6xl text-4xl font-extrabold capitalize mb-1">
          Post new <span className="text-purple-500">Job</span>
        </h1>
        <span className="w-full text-center font-semibold capitalize">Currently a lot of woman is seeking for a job with flexible working hours</span>
      </div>
      <CreateForm />
    </div>
  );
};

export default page;
