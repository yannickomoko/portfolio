import PageLayout from "@/components/pagelayout"; 
import data from "../data/data";

export default function Portfolio() {
  return (
    <PageLayout title="Portfolio" prefixe="My">
      <div className="flex flex-wrap">
          {data.map((port) => (
          <div className="w-1/3 p-2">
            <div className="grid place-items-center h-60 text-center text-2xl text-white rounded-lg uppercase hover:bg-red-500">
             <img src={port.img} alt={port.title} className="h-full" />
             <span className="font-bold">{port.title}</span>  
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
