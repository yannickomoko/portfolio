import PageLayout from "@/components/pagelayout";
import { useState } from "react";
import { BsDashSquareDotted } from "react-icons/bs";
import data from "../data/data";

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  return (
    <PageLayout title="Portfolio" prefixe="My">
      <div className="flex flex-wrap px-10">
        {data.map((port) => (
          <div className="w-1/3 p-5">
            <div className="grid place-items-center cursor-pointer h-60 text-center text-2xl text-white rounded-lg uppercase hover:bg-site-theme-primary-color">
              <a onClick={() => setShowModal(true)}>
                <img src={port.img} alt={port.title} className="h-full" />
                <span className="font-bold">{port.title}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center bg-black-w-o-800 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-600 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-bold uppercase text-site-theme-primary-color">
                      test
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves! They're slowed down by their perception of
                      themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </>
      ) : null}
    </PageLayout>
  );
}
