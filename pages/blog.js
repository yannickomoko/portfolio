import PageLayout from "@/components/pagelayout"; 
import blog from "../data/blog";

export default function Blog() {
  return (
    <PageLayout prefixe="my" title="Blog">
      <div className="flex flex-wrap px-10">
        {blog.map((ged) => (
          <div className="w-1/3 p-5">
              <div className="">
                <img src={ged.img} className="rounded" />
              </div>
              <div className="divide-x-2 h-2 bg-site-theme-primary-color"></div>
              <div className="text-center text-lg text-white bg-gray-700 py-5 rounded">
                <h1 className="text-2xl font-bold cursor-pointer">{ged.title}</h1>
                <p className="mt-3">
                  {ged.desc}.
                </p>
              </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
