"use client";

import Input from "../frontend/Input";
import Button from "../frontend/Button";
import { useFormStatus } from "react-dom";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { pending } = useFormStatus();
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e8lw70k",
        "template_ocqunum",
        form.current!,
        "cXqHbP6YoiH_kX0dL"
      )
      .then((result) => {
        console.log(result.text);
        form.current?.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="lg:py-24 py-16" id="contact">
      <div className="w-[90%] mx-auto max-w-[1450px]">
        <div className="grid md:grid-cols-12 gridc1 items-center gap-[30px]">
          <div className="md:col-span-6">
            <img
              className="h-auto max-w-full"
              src="contact.png"
              alt="contact image"
            />
          </div>
          <div className="md:col-span-6 bg-gray-50/50">
            <div>
              <div className="rounded-md shadow p-6 w-full">
                <h2 className="mb-6 items-center text-center text-4xl font-extrabold leading-normal">
                  Contact{" "}
                  <span className="text-purple-600 font-extrabold">Us</span>
                </h2>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col gap-5"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <label htmlFor="name">
                      Name
                      <Input
                        id="name"
                        placeHolder="Your Name"
                        name="user_name"
                      />
                    </label>
                    <label htmlFor="email">
                      Email
                      <Input
                        id="email"
                        placeHolder="Your Email"
                        name="user_email"
                      />
                    </label>
                  </div>
                  <label htmlFor="subject">
                    Subject
                    <Input id="subject" placeHolder="Subject" name="subject" />
                  </label>
                  <label htmlFor="message">
                    Description
                    <Input
                      isTextArea
                      name="user_message"
                      id="message"
                      placeHolder="Your Message"
                    />
                  </label>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
