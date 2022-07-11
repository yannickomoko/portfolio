import PageLayout from "@/components/pagelayout"; 
import { CircularProgressbar } from "react-circular-progressbar";
import { FiDownload } from "react-icons/fi";
import { AiFillHtml5 } from "react-icons/ai";


const pourcentqge = 60;

export default function About() {
  return (
     <PageLayout title="me" prefixe="about">
        <div className="text-white font-bold uppercase text-3xl mt-5 ml-24">
            <h1>Personal infos</h1>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-4 px-24">
            <div className="mt-3 grid grid-cols-2 gap-4">
                <div className="text-white flex">
                  <label className="text-gray-500">FirtName : </label>
                  <h3 className="font-semibold text-[15px] ml-2">Yannick</h3> 
                </div>
                <div className="text-white flex">
                <label className="text-gray-500">LastName : </label>
                  <h3 className="font-semibold text-[15px] ml-2">Omoko</h3>  
                </div>
                <div className="text-white flex">
                  <label className="text-gray-500">Age : </label>
                  <h3 className="font-semibold text-[15px] ml-2">35 years</h3> 
                </div>
                <div className="text-white flex">
                <label className="text-gray-500">Nationaly : </label>
                  <h3 className="font-semibold text-[15px] ml-2">Camerounian</h3>  
                </div>
                <div className="text-white flex">
                  <label className="text-gray-500">Freelance : </label>
                  <h3 className="font-semibold text-[15px] ml-2">Available</h3> 
                </div>
                <div className="text-white flex">
                <label className="text-gray-500">Email : </label>
                  <h3 className="font-semibold text-[15px] ml-2">oambiana@gmail.com</h3> 
                </div>
                <div className="text-white flex">
                  <label className="text-gray-500">Phone : </label>
                  <h3 className="font-semibold text-[15px] ml-2">699053526 / 677049783</h3> 
                </div>
                <div className="text-white flex">
                <label className="text-gray-500">Languages : </label>
                  <h3 className="font-semibold text-[15px] ml-2">French, English</h3>
                </div>
                <div className="text-white flex">
                  <label className="text-gray-500">Skype : </label>
                  <h3 className="font-semibold text-[15px] ml-2">yannick.omoko</h3> 
                </div>
                <div className="text-white flex">
                <label className="text-gray-500">Address : </label>
                  <h3 className="font-semibold text-[15px] ml-2">Bonamoussadi</h3> 
                </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-4">
                <div className="text-white rounded h-32 flex p-3 space-x-4 border border-gray-600">
                  <label className="text-red-500 font-bold text-[35px]">7+</label>
                  <h3 className="text-[20px] uppercase p-5 m-5 font-light">years of experience</h3>
                </div>
                <div className="text-white rounded h-32 flex p-3 space-x-4 border border-gray-600">
                  <label className="text-red-500 font-bold text-[35px]">65+</label>
                  <h3 className="text-[20px] uppercase p-5 m-5 font-light">completed projects</h3>
                </div>
                <div className="text-white rounded h-32 flex p-3 space-x-4 border border-gray-600">
                  <label className="text-red-500 font-bold text-[35px]">85+</label>
                  <h3 className="text-[20px] uppercase p-5 m-5 font-light">happy customers</h3>
                </div>
                <div className="text-white rounded h-32 flex p-3 space-x-4 border border-gray-600">
                  <label className="text-red-500 font-bold text-[35px]">10+</label>
                  <h3 className="text-[20px] uppercase p-5 m-5 font-light">awards won</h3>
                </div>
            </div>
            <div className="flex justify-start w-full">
              <button class="mt-5 text-base font-semibold leading-none uppercase text-white py-4 px-10 rounded-full border-red-600 hover:bg-red-700 border focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none">
                Download CV
              </button>
            </div>
        </div>
        <h3 className="text-white uppercase text-[35px] font-bold text-center">my skills</h3>
        <div className="grid gap-x-8 gap-y-4 grid-cols-4 px-24 justify-center mt-10">
           <div className="flex flex-col justify-center items-center">
              First block
              <div className="flex justify-center items-center">
                  <AiFillHtml5 className="w-10 h-10 bg-yellow-700 text-gray-100 shadow-xl" />
                  <h2 className="text-xl text-gray-100 font-semibold uppercase">HML5</h2>
              </div>
           </div>
          {/* <div className="rounded-full w-full p-10 border-8 border-gray-700 border-r-red-700">02</div>
          <div className="rounded-full w-full p-10 border-8 border-gray-700 border-r-red-700">02</div>
          <div className="rounded-full w-full p-10 border-8 border-gray-700 border-r-red-700">02</div>
          <div className="rounded-full w-full p-10 border-8 border-gray-700 border-r-red-700">02</div>
          <div className="rounded-full w-full p-10 border-8 border-gray-700 border-r-red-700">02</div>
          <div className="rounded-full w-full p-10 border-8 border-gray-700 border-r-red-700">02</div>
          <div className="rounded-full w-full p-10 border-8 border-gray-700 border-r-red-700">02</div> */}
        </div>
        <h3 className="text-white uppercase text-[35px] font-bold text-center mt-10">Experience & Education</h3>
     </PageLayout>
  );
}
