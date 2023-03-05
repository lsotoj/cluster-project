import { FaCashRegister, FaPeopleArrows, FaChartBar } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdWidgets, MdOutlineFingerprint } from "react-icons/md";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { VerticalNavbar } from "./components/layout/components/Sidebar";
import { router } from "./routes";

function App() {
  const categories = [
    {
      name: "Registro",
      Icon: <FaCashRegister />,
      id: new Date().getTime(),
      gap: false,
    },
    {
      name: "Alumnos",
      Icon: <FaPeopleArrows />,
      id: new Date().getTime(),
      gap: false,
    },
    {
      name: "Gráficas",
      Icon: <FaChartBar />,
      id: new Date().getTime(),
      gap: true,
    },
    {
      name: "Notas",
      Icon: <FiCheckCircle />,
      id: new Date().getTime(),
      gap: true,
    },
    {
      name: "Asignaciones",
      Icon: <MdWidgets />,
      id: new Date().getTime(),
      gap: false,
    },
    {
      name: "Control de Acceso",
      Icon: <MdOutlineFingerprint />,
      id: new Date().getTime(),
      gap: true,
    },
  ];

  return (
    <div className="flex">
      <VerticalNavbar />

      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>HomePage</h1>
      </div>
    </div>
  );
}

export default App;
