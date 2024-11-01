import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError(); 
    // console.log(err);

    return (
        <div className="error-page m-5 flex flex-col items-center">
            <h1 className="text-4xl font-palanquin font-bold">Oooopps!!!</h1>
            <h2 className="text-2xl font-mono font-semibold pt-4">Something Went Wrong😥</h2>
            <h1 className="text-4xl font-mono font-semibold pt-4">{err.status}: {err.statusText}</h1>
        </div>
    )
};

export default Error;