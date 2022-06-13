import PageLayout from "@/components/pagelayout";
import Sidebar from "@/components/sidebar";
import {
  FaPhone,
  FaAddressBook,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <PageLayout title="touch" prefixe="get in">
      <div className="flex flex-wrap px-10">
        <div className="w-1/3 p-5">
          <span className="text-2xl font-bold uppercase text-white">
            dont be shoy !
          </span>
          <p className="text-white text-lg mt-6">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="mt-10">
            <div className="flex">
              <FaAddressBook className="bg-red-800 text-4xl p-1 rounded" />
              <h3 className="uppercase font-thin text-white ml-4">
                Address point
              </h3>
              <p className="text-white font-semibold">
                B.P 143 Logbessou, Douala - Cameroun
              </p>
            </div>
            <div className="mt-8">
              <div className="flex">
                <FiMail className="bg-red-800 text-4xl p-1 rounded" />
                <h3 className="uppercase font-thin text-white ml-4">Mail me</h3>
                <p className="text-white font-semibold ml-8">
                  oambiana@gmail.com
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex">
                <FiPhone className="bg-red-800 text-4xl p-1 rounded" />
                <h3 className="uppercase font-thin text-white ml-4">Call me</h3>
                <p className="text-white font-semibold ml-8">
                  237 699053526 / 237 677049783
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <FaFacebook className="bg-red-600 text-4xl p-2 rounded-full text-white cursor-pointer " />
              <FaTwitter className="rounded-full bg-red-600 text-white text-4xl p-2 cursor-pointer" />
              <FaLinkedin className="rounded-full bg-red-600 text-white text-4xl p-2 cursor-pointer" />
              <FaInstagram className="rounded-full bg-red-600 text-white text-4xl p-2 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-1/3 p-10">
          <div className="flex flex-wrap">
            <div className="md:flex items-center">
              <div className="md:w-96 flex flex-col">
                <input
                  tabindex="0"
                  arial-label="Please input name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 m-2 focus:oultine-none mt-4 bg-gray-600 rounded-full placeholder-gray-300 uppercase"
                  placeholder="Your name"
                />
              </div>
              <div className="md:w-96 flex flex-col md:ml-6 md:mt-0 mt-4">
                <input
                  tabindex="0"
                  arial-label="your email address"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 m-2 focus:oultine-none mt-4 bg-gray-600 rounded-full placeholder-gray-300 uppercase"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-4">
              <div className="md:w-96 flex flex-col">
                <input
                  tabindex="0"
                  arial-label="Please input name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 m-2 focus:oultine-none mt-4 bg-gray-600 rounded-full placeholder-gray-300 uppercase"
                  placeholder="Your subject"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-6">
                <textarea
                  tabindex="0"
                  aria-label="leave a message"
                  role="textbox"
                  cols={82}
                  type="name"
                  placeholder="Your Message"
                  class="h-36 text-base leading-none text-gray-900 p-3 m-2 focus:oultine-none mt-4 bg-gray-600 rounded-lg placeholder-gray-300 uppercase resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-start w-full ml-3">
              <button class="mt-9 text-base font-semibold leading-none uppercase text-white py-4 px-10 rounded-full border-red-600 hover:bg-red-700 border focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none">
                send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
