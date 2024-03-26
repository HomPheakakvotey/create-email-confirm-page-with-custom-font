import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

export const MenuList = [
    {
        name : "DashBoard",
        path : "/dashboard",
        icon : HiChartPie
    },
    {
        name : "Setting",
        path : "/setting",
        icon : HiTable
    },
    {
        name : "Inbox",
        path : "/inbox",
        icon : HiInbox
    },
    {
        name : "User",
        path : "/user",
        icon : HiUser
    },
    {
        name : "Product",
        path : "/product",
        icon : HiShoppingBag
    },
    {
        name : "SignIn",
        path : "/signin",
        icon : HiArrowSmRight
    },
    {
        name : "SignUp",
        path : "/signup",
        icon : HiViewBoards
    }
]