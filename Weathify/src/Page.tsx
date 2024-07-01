import {Button, Link, NextUIProvider} from "@nextui-org/react";
import Weather from "./Card.tsx";
import Preview from "./preview.tsx";
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
export default function Page() {
    var locate;
    const [loaded, setLoaded] = useState(false)
    const data = JSON.parse(localStorage.getItem('city'))
    if (!data) {
    }
    else {
        locate = (data['city'])
    }
    const [datas, setDatas] = useState([]);
    useEffect( () => {
        const loadData = () => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locate}&appid=c216a7f2ab7928be3cb213c759306147`)
            .then(response => response.json())
            .then(dataw => {
                setDatas(dataw)
                localStorage.setItem('weather', JSON.stringify(dataw.weather[0].icon))
                console.log(dataw)
            })
        if (!loaded) {
            loadData();
            setLoaded(true)
        }
        const interval = setInterval(() => {
            loadData();
        }, 100000)
        return () => clearInterval(interval)
    })
    return (
    <>
            <NextUIProvider>
                <main id={'main'} className={'grid gap-4 h-svh justify-center w-svh dark bg-[#222020] text-white'}>
                    <div className={''}>
                        <Weather weatherData={datas}></Weather>
                    </div>
                    <Button href={'/config/city'} as={Link} isIconOnly id={'cfg'} className={'absolute bg-[#32302D] text-[#eb9951] right-0 bottom-0 m-4'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"/>
                        </svg>
                    </Button>
                </main>
            </NextUIProvider>
    </>
    )
}