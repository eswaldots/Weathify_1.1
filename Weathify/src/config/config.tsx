import {Outlet, Route, Routes, Link as NLink} from "react-router-dom";
import Preview from "../preview.tsx";
import {
    Card,
    Image,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Link, CardFooter, Button
} from "@nextui-org/react";
import React from "react";
import NButton from "./NButton.tsx";
export default function Cfg() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        'Weather',
        'Paths',
        'Themes',
    ]
    return(
        <main id={'main'} className={'flex flex-col justify-center items-center h-svh justify-items-left dark bg-[#222020] text-white'}>
            <Card className={'flex flex-col h-[90%] w-[500px] border-0 bg-[#32302D] overflow-y-scroll'}>
                <Navbar className={'bg-[#32302D] bg-opacity-75'} isBlurred={true} isMenuOpen={isMenuOpen}><NavbarContent className={''}>
                        <NavbarBrand className={'items-left'}>
                            <NLink to={"/"}>
                                <Button isIconOnly={true} className={'bg-[#32302D] h-10 font-normal'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                                    </svg>
                                </Button></NLink>
                            <Image className={'size-20'} alt='logo' src={'../public/logo.png'}></Image>
                            <h1 className={'text-4xl font-light'}>W E A T H I F Y</h1>
                        </NavbarBrand>
                    </NavbarContent>
                </Navbar>
                <Outlet />
            </Card>



        </main>)
}