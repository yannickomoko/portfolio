import PageLayout from "@/components/pagelayout";
import Sidebar from "@/components/sidebar";
import { FaAdversal } from "react-icons/fa";

export default function Contact() {
  return (
     <PageLayout title="touch" prefixe="get in">
       <div className="flex flex-wrap">
          <div className="w-1/3">
            <span className="text-2xl font-bold uppercase text-white">
              dont be shoy !
            </span>
            <p className="text-white text-lg mt-6">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>
          <div className="w-1/2 p-10">
              <div className="flex flex-wrap">
                <form action="">
                    <div className="">
                      <input
                        type="text"
                        className="text-white rounded-full p-5 h-4 w-60 uppercase bg-gray-600"
                        placeholder="your name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="text-white rounded-full h-10 p-5 w-60 uppercase bg-gray-600"
                        placeholder="your Email"
                      />
                    </div>
                    {/* <div className="mt-6">
                      <textarea className="bg-gray-600 rounded text-white"></textarea>
                    </div> */}
                </form>
              </div>
          </div>
        </div>
     </PageLayout>
  );
}
