import {Input} from "@nextui-org/input";
import Paths from './Paths.tsx'
import {Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import PInput from "./PInput.tsx";
import React from "react";
import {useState} from "react";
export default function City({files}) {
        let [inputValue, setInputValue] = useState('');
    function zzz() {
        let city = { city: inputValue }
            localStorage.setItem('city', JSON.stringify(city));
        localStorage.setItem('paths', JSON.stringify(files))
        console.log(localStorage.getItem('paths'))
    }
    return (
        <div className={'flex flex-col m-4 mt-2'}>
            <strong className={'text-2xl font-normal  opacity-100'}>City</strong>
                <div className={'flex flex-row gap-4'}>
                    <Input id='city' value={inputValue} onChange={(e) => setInputValue(e.target.value)} name='size' size={'md'} placeholder={'Enter your city'} css={{$$inputColor: "#161515"}}
                           className={'w-60 mt-3 text-lg'}/>
                </div>
                <strong className={'text-2xl font-normal mt-3 opacity-100'}>Paths</strong>
                <span
                    className={'text-md font-light mt-1 opacity-60'}>Configure the images for each type of weather</span>
                <Table className={'mt-3'} aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>WEATHER</TableColumn>
                        <TableColumn>DAY PATHS</TableColumn>
                        <TableColumn>NIGHT PATHS</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>Clear sky</TableCell>
                            <TableCell><PInput w={'Clear sky day'}/></TableCell>
                            <TableCell><PInput w={'Clear sky night'}/></TableCell>
                        </TableRow>
                        <TableRow key="2">
                            <TableCell>Few clouds</TableCell>
                            <TableCell><PInput/></TableCell>
                            <TableCell><PInput/></TableCell>
                        </TableRow>
                        <TableRow key="3">
                            <TableCell>Scattered clouds</TableCell>
                            <TableCell><PInput/></TableCell>
                            <TableCell><PInput/></TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>Broken clouds</TableCell>
                            <TableCell><PInput/></TableCell>
                            <TableCell><PInput/></TableCell>
                        </TableRow>
                        <TableRow key="5">
                            <TableCell>Shower rain</TableCell>
                            <TableCell><PInput/></TableCell>
                            <TableCell><PInput/></TableCell>
                        </TableRow>
                        <TableRow key="6">
                            <TableCell>Rain</TableCell>
                            <TableCell><PInput/></TableCell>
                            <TableCell><PInput/></TableCell>
                        </TableRow>
                        <TableRow key="7">
                            <TableCell>Thunderstorm</TableCell>
                            <TableCell><PInput/></TableCell>
                            <TableCell><PInput/></TableCell>
                        </TableRow>
                        <TableRow key="8">
                            <TableCell>Snow</TableCell>
                            <TableCell><PInput/></TableCell>
                            <TableCell><PInput/></TableCell>
                        </TableRow>
                        <TableRow key="9">
                            <TableCell>Mist</TableCell>
                            <TableCell><PInput/></TableCell>
                            <TableCell><PInput/></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button
                    type={'submit'} onPress={zzz} className={'bg-[#eb9951] h-10 w-20 mt-4 font-normal place-self-end'}>Save</Button>
        </div>
    )
}