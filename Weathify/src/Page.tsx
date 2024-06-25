import {NextUIProvider} from "@nextui-org/react";
import Weather from "./Card.tsx";
import Preview from "./preview.tsx";
import React from "react";
import {Route, Routes} from "react-router-dom";
export default function Page() {
    return (
    <>
            <NextUIProvider>
                <main id={'main'} className={'grid grid-cols-3 gap-4 h-svh justify-items-left dark bg-[#222020] text-white'}>
                    <div className={'ml-[15px]'}>
                        <Weather City={'Caracas'}></Weather>
                    </div>
                    <div className={'col-start-2 col-span-12 mr-[15px]'}>
                        <Preview/>
                    </div>
                </main>
            </NextUIProvider>
    </>
    )
}