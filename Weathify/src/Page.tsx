import {NextUIProvider} from "@nextui-org/react";
import Weather from "./Card.tsx";
import Preview from "./preview.tsx";
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
export default function Page() {
        const data = JSON.parse(localStorage.getItem('city'))
        let location = (data.city)
        console.log(location)

    const [datas, setDatas] = useState([]);
    useEffect( () => {
        const loadData = async () => await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location = 'Andorra'}&appid=c216a7f2ab7928be3cb213c759306147`)
            .then(response => response.json())
            .then(dataw => {
                setDatas(dataw)
            })
        const interval = setInterval(() => {
            loadData();
        }, 1000)
        return () => clearInterval(interval)
    })
    console.log(datas)
    return (
    <>
            <NextUIProvider>
                <main id={'main'} className={'grid grid-cols-3 gap-4 h-svh justify-items-left dark bg-[#222020] text-white'}>
                    <div className={'ml-[15px]'}>
                        <Weather weatherData={datas}></Weather>
                    </div>
                    <div className={'col-start-2 col-span-12 mr-[15px]'}>
                        <Preview/>
                    </div>
                </main>
            </NextUIProvider>
    </>
    )
}