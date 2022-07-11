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
            <div className="grid place-items-center h-60 text-center text-2xl text-white rounded-lg uppercase hover:bg-red-500">
              <a href="">
                <img src={port.img} alt={port.title} className="h-full" onClick={()=> setShowModal(true)} />
                <span className="font-bold">{port.title}</span>  
              </a>
            </div>
          </div>
        ))}
      </div>
      {showModal ? (
        <>
          <div className="flex">
            <h3 className=" font-bold uppercase text-2xl text-red-600">test</h3>
          </div>
        </>
      ) : null }
    </PageLayout>
  );
}

const DetailPortfolio = ()=> {
  return(
    <>
      
    </>
  )
}
