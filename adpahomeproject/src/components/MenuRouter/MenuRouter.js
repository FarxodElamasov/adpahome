import React from "react";
import Home from "../Home/Home";
import Create from "../Create/Create";
import ProductList from "../Product/Product";
import Users from "../Users/Users";
import Icons from "../icons/routerIcons"



const MenuRouter = [
    {
        title: "Home",
        path: "/",
        element: <Home />
    },
    {
        title: "Product create",
        path: "/productcreate",
        element: <Create />
    },
    {
        title: "Product list",
        path: "/list",
        element: <ProductList />
    },
    {
        title: "User info",
        path: "/users",
        element: <Users />
    },
].map((el) => {
    return {
        ...el,
        icon: Icons(el.path)
    }
})



export default MenuRouter