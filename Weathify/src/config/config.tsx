import {Outlet, Route, Routes} from "react-router-dom";
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
        <main id={'main'} className={'flex flex-col justify-center items-center gap-4 h-svh justify-items-left dark bg-[#222020] text-white'}>
            <Card className={'flex flex-col h-[90%] w-[500px] border-0 bg-[#32302D] overflow-hidden'}>
                <Navbar   className={'items-center overflow-hidden bg-[#1C1A19]'}  isBordered
                            isMenuOpen={isMenuOpen}
                            onMenuOpenChange={setIsMenuOpen}>
                    <NavbarMenu className={'left-[27.2%] max-h-96 mt-4 rounded-xl py-4 gap-y-0.5 bg-[#1C1A19] w-[500px] overflow-hidden'}>
                        <NButton
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                   stroke="currentColor" className="size-6 opacity-40">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
                        </svg>} text={'Weather'} dir={'city'}/>
                        <NButton icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor" className="size-6 opacity-40">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"/>
                        </svg>
                        } text={'Paths'} dir={'paths'}
                        />
                        <NButton icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor" className="size-6 opacity-40">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
                        </svg>
                        } text={'Themes'} dir={'theme'}/>
                    </NavbarMenu>
                    <NavbarContent className={'gap-1'}>
                        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
                        <NavbarBrand>
                            <Image className={'size-20'} alt='logo' src={'../public/logo.png'}></Image>
                            <h1 className={'text-4xl font-light'}>W E A T H I F Y</h1>
                        </NavbarBrand>
                    </NavbarContent>
                </Navbar>
                <CardFooter
                    className={'flex flex-row-reverse justify-start gap-4 absolute h-12 bottom-0 border-1 border-[#1C1A19]'}><Button
                    className={'bg-[#eb9951] h-8 font-medium'}>Save </Button>
                    <Button className={' bg-[#32302D] h-8 font-medium'}>Return </Button></CardFooter>
                <Outlet />
            </Card>
        </main>)
}