import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout";
import { ErrorPage, Sign, Register, Statistics } from "@/screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "sign",
        element: <Sign />,
      },
      {
        path: "registro",
        element: <Register />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
    ],
  },
]);
