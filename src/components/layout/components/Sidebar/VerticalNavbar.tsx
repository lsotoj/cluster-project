import { useState } from "react";
import {
  FaHospitalAlt,
  FaCashRegister,
  FaPeopleArrows,
  FaChartBar,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdWidgets, MdOutlineFingerprint } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";

export const VerticalNavbar = () => {
  const [open, setOpen] = useState(true);

  const categories = [
    {
      name: "Registro",
      Icon: <FaCashRegister />,
      id: new Date().getTime(),
      gap: false,
      path: "registro",
    },
    {
      name: "Alumnos",
      Icon: <FaPeopleArrows />,
      id: new Date().getTime(),
      gap: false,
      path: "sign",
    },
    {
      name: "Gráficas",
      Icon: <FaChartBar />,
      id: new Date().getTime(),
      gap: true,
      path: "statistics",
    },
    {
      name: "Notas",
      Icon: <FiCheckCircle />,
      id: new Date().getTime(),
      gap: true,
      path: "registro",
    },
    {
      name: "Asignaciones",
      Icon: <MdWidgets />,
      id: new Date().getTime(),
      gap: false,
      path: "registro",
    },
    {
      name: "Control de Acceso",
      Icon: <MdOutlineFingerprint />,
      id: new Date().getTime(),
      gap: true,
      path: "registro",
    },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-7 h-7 absolute cursor-pointer -right-3 top-9 border-2 border-dark-purple 
          rounded-full bg-white 
          ${open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
      <div className="flex gap-x-4 items-center">
        <FaHospitalAlt
          color="white"
          size="3em"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-300
            ${!open && "scale-0"} `}
        >
          Cluster
        </h1>
      </div>
      <ul className="text-white pt-6">
        {categories.map((category, n) => (
          <li
            key={n}
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
              category.gap ? "mt-9" : "mt-2"
            } `}
          >
            <Link to={category.path} className="flex items-center gap-x-4">
              {category.Icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {category.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
