import { useContext, useRef } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { theme } = useContext(MovieContext);

  //for email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = form.current;
    emailjs
      .sendForm(
        "service_0rs2a24",
        "template_jssy5l1",
        formData,
        "qoFjmC7X7s0MvTZ24"
      )
      .then(
        (result) => {
          alert("sent");
          //clear the form
          formData["user_name"].value = "";
          formData["user_email"].value = "";
          formData["message"].value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className={`${
        theme === "dark" ? "text-white" : "text-gray-600"
      } body-font relative`}
    >
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1
            className={` ${
              theme === "dark" ? "text-white" : "text-gray-600"
            }}sm:text-3xl text-2xl font-medium title-font mb-3`}
          >
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            If you want to connect with me, you can send me an email.
          </p>
        </div>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="lg:w-1/2 md:w-2/3 mx-auto"
        >
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  HTMLfor="name"
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-600"
                  }leading-7 text-sm `}
                >
                  Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  HTMLfor="email"
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-600"
                  }leading-7 text-sm `}
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  HTMLfor="message"
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-600"
                  }leading-7 text-sm `}
                >
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                className={`flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ${
                  theme === "dark"
                    ? "text-white bg-black hover:bg-slate-800"
                    : " "
                } `}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
