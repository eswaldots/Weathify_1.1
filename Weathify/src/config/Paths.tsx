import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import PInput from './PInput.tsx'
export default function Paths() {
    function getPath() {

    }
    return (
        <>
            <div className={'flex flex-col m-4 h-[90%] overflow-hidden'}>
                <strong className={'text-2xl font-extralight mt-1 opacity-100'}>Paths</strong>
                <span className={'opacity-60'}>Configure the images for each type of weather</span>
                <form >
                <Table className={'mt-4 min-h-[40%] max-h-[60%]'} aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>WEATHER</TableColumn>
                        <TableColumn>DAY PATHS</TableColumn>
                        <TableColumn>NIGHT PATHS</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>Clear sky</TableCell>
                            <TableCell><PInput/></TableCell>
                            <TableCell><PInput/></TableCell>
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
                </form>
            </div>
        </>
    )
}