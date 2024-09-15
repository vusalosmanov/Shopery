import About from "../page/About";
import Blog from "../page/Blog";
import Contact from "../page/Contact";
import Home from "../page/Home";
import ClientRoot from "../page/mainRoot";
import Shop from "../page/Shop/Shope";
import SignIn from "../page/SignIn";
import SignUp from "../page/SignUp";
import WishList from "../page/WishList";

export const ROUTER=[{
    path:"/",
    element:<ClientRoot/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:"shop",
            element:<Shop/>
        },
        {
            path:"contact",
            element:<Contact/>
        },
        {
            path:"about",
            element:<About/>
        },
        {
            path:"blog",
            element:<Blog/>
        },
        {
            path:"signIn",
            element:<SignIn/>
        },
        {
            path:"signUp",
            element:<SignUp/>
        },
        {
            path:"/",
            element:<HomePage01/>
        },
        {
            path:"wishList",
            element:<WishList/>
        }
        

    ]
    
    
}]