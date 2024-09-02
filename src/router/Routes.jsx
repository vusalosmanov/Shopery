import About from "../page/About";
import Blog from "../page/Blog";
import Contact from "../page/Contact";
import Home from "../page/Home";
import HomePage01 from "../page/HomePage01";
import HomePage02 from "../page/HomePage02";
import HomePage03 from "../page/HomePage03";
import HomePage04 from "../page/HomePage04";
import ClientRoot from "../page/mainRoot";
import Pages from "../page/Pages";
import Shop from "../page/Shop";
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
            path:"pages",
            element:<Pages/>
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
            path:"home2",
            element:<HomePage02/>
        },
        {
            path:"home3",
            element:<HomePage03/>
        },
        {
            path:"home4",
            element:<HomePage04/>
        },
        {
            path:"wishList",
            element:<WishList/>
        }
        

    ]
    
    
}]