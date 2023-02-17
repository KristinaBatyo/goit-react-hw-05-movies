import {Outlet, useParams } from "react-router-dom";


export const MovieDetailsPage = () => {
    const params = useParams();
    console.log(params)

    return (
        <div>
            
            {/* Now showing product with id - {productId} */}
        <Outlet />
        </div>
        
    );
    
}