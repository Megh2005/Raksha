import Image from "next/image";

const Sponsors = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1450px] w-[90%] mx-auto text-4xl">
        <div className="w-full text-center">
          <h2 className="text-4xl font-extrabold">
            More Than{" "}
            <span className="text-purple-600 font-extrabold">
              Ten Recruiters
            </span>{" "}
            Are Live Here
          </h2>
        </div>

        <div className="flex justify-between items-center mt-5 flex-wrap gap-10">
          <Image
            src={"/airbnb.png"}
            alt="Airbnb logo"
            width={144}
            height={144}
          />
          <Image
            src={"/Discord.png"}
            alt="Discord logo"
            width={144}
            height={144}
          />
          <Image src={"/Slack.png"} alt="Slack logo" width={144} height={144} />
          <Image
            src={"/Capitalone.png"}
            alt="CapitalOne logo"
            width={144}
            height={144}
          />
          <Image
            src={"/Dropbox.png"}
            alt="DropBox logo"
            width={144}
            height={144}
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
