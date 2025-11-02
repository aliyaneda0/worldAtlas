import { NavLink, useRouteError } from "react-router"

export const ErrorPage = () =>{

    const error = useRouteError();
    console.log(error);
    return(
        <>
            <h1>Error Occurred</h1>
            {error && <p>{error.data}</p>}
            <NavLink to = "/">Go to Home Page</NavLink>
        </>
    )
}