import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      return <div> Unauthorized </div>;
    }
    if (error.status === 403) {
      return <div> Forbidden </div>;
    }
    if (error.status === 404) {
      return <div>Página no encontrada</div>;
    }
  }

  return (
    <div className="flex flex-col h-screen  justify-center items-center ">
      <h1 className="text-2xl font-semibold">Oops!</h1>
      <p>Lo siento, ocurrió un error inesperado.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
};
