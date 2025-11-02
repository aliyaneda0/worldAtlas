import { Outlet } from "react-router"
import { Footers } from "../UI/Footers"
import { Headers } from "../UI/Headers"

export const AppLayout = () => {
    return(
        <>
            <Headers/>
            <Outlet />
            <Footers/>
        </>
    )
}