import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
 

export default function Sidebar ({isOpen, toggle} : {isOpen: boolean, toggle: () => void}) {
    return(
        <div className={`fixed top-0 left-0 h-full transition-all shadow-xl duration-300 ease-in-out rounded-r-xl bg-white ${isOpen ? "w-32 md:w-64" : "w-10 md:w-20"} `}>
            {/* Button Toggle */}
            <div className="flex items-center">
                <button onClick={toggle} className="rounded-xl px-1 py-5 md:px-6">
                    <FontAwesomeIcon icon={isOpen? faXmark : faBars } className="text-sm md:text-xl text-gray-500"/>
                </button>
            </div>
        </div>
    )
}