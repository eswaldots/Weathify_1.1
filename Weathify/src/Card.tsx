import './App.css'
import Bottom from './humidity-wind.tsx'
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";
function Weather({weatherData}) {

    return (
        <>
            <Card className={'flex flex-col items-center bg-[#32302D] h-[90%] mt-[22px] min-w-72 max-w-96'}>
                <div className={'flex justify-center text-center mt-4'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-8 opacity-40 text-[#eb9951]">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                    </svg>
                    <span className={'font-light font-sans text-2xl'}>
                            {weatherData.name}
                        </span>
                </div>
                <div className={'flex flex-col text-center items-center'}>
                <img alt={'Weather'} className={' size-48'} src={'/src/icons/01d.svg'}/>
                    <strong className={'text-6xl'}>{weatherData.main && Math.round((weatherData.main.temp) - 273)}ºC</strong>
                    <span className={'text-2xl'} >{weatherData.weather && weatherData.weather[0].description.replace(/^\w/, (c) => c.toUpperCase())}</span>
                    <div className={'flex flex-row mt-8 gap-x-4'}>
                        <Bottom icon={<svg className={'size-10 mt-1.5 mr-2 opacity-40'}
                                           xmlns="http://www.w3.org/2000/svg"
                                           viewBox="0 0 512 512">
                            <path fill="#ffffff"
                                  d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/>
                        </svg>} head={'WIND SPEED'} unit={weatherData.main && weatherData.wind.speed} val={'Km/h'}></Bottom>
                        <Bottom icon={<svg className={'size-11 mt-1.5 mr-2 opacity-40'} xmlns="http://www.w3.org/2000/svg"
                                           viewBox="0 0 576 512">
                            <path fill="#ffffff"
                                  d="M224 0c38.6 0 71.9 22.8 87.2 55.7C325.7 41.1 345.8 32 368 32c38.7 0 71 27.5 78.4 64H448c35.3 0 64 28.7 64 64s-28.7 64-64 64H128c-35.3 0-64-28.7-64-64s28.7-64 64-64c0-53 43-96 96-96zM140.6 292.3l-48 80c-6.8 11.4-21.6 15-32.9 8.2s-15.1-21.6-8.2-32.9l48-80c6.8-11.4 21.6-15.1 32.9-8.2s15.1 21.6 8.2 32.9zm327.8-32.9c11.4 6.8 15 21.6 8.2 32.9l-48 80c-6.8 11.4-21.6 15-32.9 8.2s-15-21.6-8.2-32.9l48-80c6.8-11.4 21.6-15.1 32.9-8.2zM252.6 292.3l-48 80c-6.8 11.4-21.6 15-32.9 8.2s-15.1-21.6-8.2-32.9l48-80c6.8-11.4 21.6-15.1 32.9-8.2s15.1 21.6 8.2 32.9zm103.8-32.9c11.4 6.8 15 21.6 8.2 32.9l-48 80c-6.8 11.4-21.6 15-32.9 8.2s-15.1-21.6-8.2-32.9l48-80c6.8-11.4 21.6-15.1 32.9-8.2zM306.5 421.9C329 437.4 356.5 448 384 448c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 501.7 417 512 384 512c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 437.2 165.1 448 192 448c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/>
                        </svg>} head={'HUMIDITY'} unit={weatherData.main && weatherData.main.humidity} val={'%'}></Bottom>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Weather
