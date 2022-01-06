import PageLayout from "@/components/pagelayout"; 
import { FiDownload } from "react-icons/fi";
export default function About() {
  return (
     <PageLayout title="me" prefixe="about">
       <div className="text-white font-bold uppercase text-3xl mt-5">
          <h1>Personal infos</h1>
       </div>
       <div className="mt-3">
          <div className="text-white flex p-3">
            <label className="text-gray-500">FirtName :</label>
            <h3 className="ml-2 font-semibold text-[15px]">Yannick</h3> 
            <label className="text-gray-500">LastName :</label>
            <h3 className="ml-2 font-semibold text-[15px]">Omoko</h3> 
          </div>
          <div className="text-white flex p-3">
            <label className="text-gray-500">Age :</label>
            <h3 className="ml-2 font-semibold text-[15px]">35 years</h3> 
            <label className="text-gray-500">Nationaly :</label>
            <h3 className="ml-2 font-semibold text-[15px]">Camerounian</h3> 
          </div>
          <div className="text-white flex p-3">
            <label className="text-gray-500">Freelance :</label>
            <h3 className="ml-2 font-semibold text-[15px]">Available</h3> 
            <label className="text-gray-500">Email :</label>
            <h3 className="ml-2 font-semibold text-[15px]">oambiana@gmail.com</h3> 
          </div>
          <div className="text-white flex p-3">
            <label className="text-gray-500">Phone :</label>
            <h3 className="ml-2 font-semibold text-[15px]">699053526 / 677049783</h3> 
            <label className="text-gray-500">Languages :</label>
            <h3 className="ml-2 font-semibold text-[15px]">French, English</h3> 
          </div>
          <div className="text-white flex p-3">
            <label className="text-gray-500">Skype :</label>
            <h3 className="ml-2 font-semibold text-[15px]">yannick.omoko</h3> 
            <label className="text-gray-500">Address :</label>
            <h3 className="ml-2 font-semibold text-[15px]">Bonamoussadi</h3> 
          </div>
       </div>
     </PageLayout>
  );
}
