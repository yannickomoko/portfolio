import PageLayout from "@/components/pagelayout"; 
import { FiDownload } from "react-icons/fi";
export default function About() {
  return (
     <PageLayout title="me" prefixe="about">
       <div className="text-white font-bold uppercase text-3xl mt-5">
          <h1>Personal infos</h1>
       </div>
       <div className="mt-3 grid grid-cols-2 gap-4">
            <div className="mt-3 grid grid-cols-2 gap-4">
                <div className="text-white flex space-x-4">
                  <label className="text-gray-500">FirtName :</label>
                  <h3 className="font-semibold text-[15px]">Yannick</h3> 
                </div>
                <div className="text-white flex space-x-4">
                <label className="text-gray-500">LastName :</label>
                  <h3 className="font-semibold text-[15px]">Omoko</h3>  
                </div>
                <div className="text-white flex space-x-4">
                  <label className="text-gray-500">Age :</label>
                  <h3 className="font-semibold text-[15px]">35 years</h3> 
                </div>
                <div className="text-white flex space-x-4">
                <label className="text-gray-500">Nationaly :</label>
                  <h3 className="font-semibold text-[15px]">Camerounian</h3>  
                </div>
                <div className="text-white flex space-x-4">
                  <label className="text-gray-500">Freelance :</label>
                  <h3 className="font-semibold text-[15px]">Available</h3> 
                </div>
                <div className="text-white flex space-x-4">
                <label className="text-gray-500">Email :</label>
                  <h3 className="font-semibold text-[15px]">oambiana@gmail.com</h3> 
                </div>
                <div className="text-white flex space-x-4">
                  <label className="text-gray-500">Phone :</label>
                  <h3 className="font-semibold text-[15px]">699053526 / 677049783</h3> 
                </div>
                <div className="text-white flex space-x-4">
                <label className="text-gray-500">Languages :</label>
                  <h3 className="font-semibold text-[15px]">French, English</h3>
                </div>
                <div className="text-white flex space-x-4">
                  <label className="text-gray-500">Skype :</label>
                  <h3 className="font-semibold text-[15px]">yannick.omoko</h3> 
                </div>
                <div className="text-white flex space-x-4">
                <label className="text-gray-500">Address :</label>
                  <h3 className="font-semibold text-[15px]">Bonamoussadi</h3> 
                </div>
            </div>
              <div className="mt-3 grid grid-cols-2 gap-4">
                  <div className="text-white rounded h-32 flex p-3 space-x-4 border border-gray-600">
                    <label className="text-red-500 font-bold text-[35px]">9+</label>
                    <h3 className="text-[20px] uppercase p-5 m-5 font-light">years of experience</h3>
                  </div>
                  <div className="text-white rounded h-32 flex p-3 space-x-4 border border-gray-600">
                    <label className="text-red-500 font-bold text-[35px]">105+</label>
                    <h3 className="text-[20px] uppercase p-5 m-5 font-light">completed projects</h3>
                  </div>
                  <div className="text-white rounded h-32 flex p-3 space-x-4 border border-gray-600">
                    <label className="text-red-500 font-bold text-[35px]">85+</label>
                    <h3 className="text-[20px] uppercase p-5 m-5 font-light">happy customers</h3>
                  </div>
                  <div className="text-white rounded h-32 flex p-3 space-x-4 border border-gray-600">
                    <label className="text-red-500 font-bold text-[35px]">15+</label>
                    <h3 className="text-[20px] uppercase p-5 m-5 font-light">awards won</h3>
                  </div>
              </div>
       </div>
       

       <div className="mt-4 grid grid-cols-2">
                  <h3 className="text-white uppercase text-center">my skills</h3>
              </div>
      
     </PageLayout>
  );
}
