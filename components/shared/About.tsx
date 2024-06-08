import Image from "next/image";

const About = () => {
  return (
    <div className="py-8 bg-gray-50/50 mt-2" id="about">
      <div className="w-[90%] mx-auto max-w-[1450px]">
        <h2 className="w-full text-center mb-6 text-4xl font-extrabold capitalize">
          About{" "}
        <span className="text-purple-600 font-extrabold">Us</span>
        </h2>

        <div className="mt-5 w-full flex flex-col justify-center items-center">
          <p className="leading-loose text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            quasi sed tempora sequi nemo ipsa non rerum, quaerat ratione
            reprehenderit vitae nobis animi impedit. Eos reiciendis nisi
            adipisci? In, optio! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Illum odio et magnam tempora quod voluptatibus
            nihil, modi doloremque laborum iusto ducimus nulla ad eligendi
            architecto totam quaerat repellendus fugit fugiat. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Possimus sint tempora
            voluptas sed consequuntur delectus, excepturi cupiditate nam
            doloribus provident atque id eligendi iure reiciendis vitae
            voluptatem nesciunt perferendis assumenda.
          </p>
          <Image
            src={"/logo.png"}
            width={300}
            height={300}
            alt="raksha logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
