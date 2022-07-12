import PageLayout from "@/components/pagelayout";

export default function Accueil() {
  return (
    <PageLayout>
      <div className="flex p-10 bg-black gap-3 items-center space-x-20">
        <div className="flex flex-col">
          <img
            src="/images/yann.jpg"
            alt="Yannick omoko"
            className="w-[900px] object-cover rounded-lg"
          />
        </div>
        <div className="space-y-1">
          <h1 className="text-[50px] font-bold text-site-theme-primary-color uppercase">
            i'm yannick omoko. <br />{" "}
            <span className="text-white">Senior developer frontend</span>
          </h1>
          <p className="text-white text-lg">
            I'm a Camerounian based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
        </div> 
      </div>
    </PageLayout>
  );
}
