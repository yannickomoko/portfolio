import routes from "../routes/routes";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between">
      <ul className="space-y-3 flex flex-col items-end">
        {routes.sidebar.map((side) => (
          <li
            activeClassName="bg-red-600"
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
              <span className="text-base truncate">{side.name}</span>
              <span>{side.icon}</span>
              </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
