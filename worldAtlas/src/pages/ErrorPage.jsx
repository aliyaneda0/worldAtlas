import { NavLink, useRouteError } from "react-router"

export const ErrorPage = () =>{

    const error = useRouteError();
    console.log(error);
    return(
        <>
           <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl font-bold text-center text-white mt-20">Oops!</h1>
                {error && <p className="text-center text-white mt-4">{error.data}</p>}
                <NavLink to = "/" className="text-center text-blue-400 mt-6 block">Go to Home Page</NavLink>
           </div>
        </>
    )
}