import { useContext } from "react";
import { AuthContext } from "../Context/ContextComponent";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const location = useLocation()
    console.log(location);

    const {user,loading} = useContext(AuthContext)
    
    if(loading)return <div className="flex justify-center items-center h-full w-full">
        <progress className="progress w-56"></progress>
    </div>

    if(!user) return <Navigate state={location.pathname} to='/login' replace></Navigate>

    return children
};

export default PrivateRoutes;