import routes from "../routes/routes";
import ThemeSwitch from "./theme";

export default function PageLayout({ title, prefixe,  ...rest}) {
  return (
    <div className="flex p-10 gap-3 bg-black min-h-screen">
      <div className="container mx-auto">
        <div className="text-[50px] text-white text-center font-extrabold uppercase">
          <h1>
            {prefixe} <span className="text-red-500">{title}</span>
          </h1>
        </div>
        <main>
          {rest.children}
        </main>
      </div>
      <div className="mt-36 absolute right-6">
      <ul className="space-y-3 flex flex-col items-end">
        {routes.sidebar.map((side) => (
          <li
            activeClassName={`bg-red-600`}
            className="text-white 
                text-[25px] 
                rounded-full
                bg-gray-600
                hover:bg-red-700
                hover:w-48
                transaction duration-500 ease-linear
                p-5
                h-16
                w-16
                "
          >
            <a href={side.path} className="flex items-center justify-end gap-2 overflow-hidden">
              <span className="text-[20px] truncate uppercase">{side.name}</span>
              <span>{side.icon}</span>
              </a>
          </li>
        ))}
      </ul>
      </div>
      <ThemeSwitch />
    </div>
  );
}
