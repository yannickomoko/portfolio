import routes from "../routes/routes";
export default function Navbar(){
    return(
        <div className="flex p-10 gap-3 bg-black min-h-screen items-center justify-center">
            <div className="flex flex-col justify-between">
                <ul className="space-y-3">
                {routes.sidebar.map((side) => (
                    <li
                    activeClassName="bg-red-600"
                    className="text-white 
                        text-[25px] 
                        rounded-3xl
                        bg-gray-600
                        hover:bg-red-700
                        hover:w-44
                        hover:rounded-3xl
                        transaction-all duration-300 ease-linear
                        p-5
                        h-16
                        w-16
                        "
                    >
                    <a href={side.path}>{side.icon}</a>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}