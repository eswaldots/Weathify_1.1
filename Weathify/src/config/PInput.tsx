import {Button, Card, Input} from '@nextui-org/react'
import {isFileServingAllowed} from "vite";
import {useRef, useState} from "react";
import zz from '../main.tsx'
export default function PInput({w}) {
    const [color, setColor] = useState('bg-gray-700')
    const handleClick = async () => {
        zz(w)
        setColor('bg-emerald-700')
    };
    return (
        <>
            <Card className={'w-28 border-0 max-h-10 shadow-none ' + color + ' hover:bg-gray-900'}>
                {''}
                <Button name="file-input"
                       id="file-input" type={'text'}
                       onClick={handleClick}
                       className={'w-36 opacity-0 rounded-none'}/>

            </Card>
        </>
    )
}