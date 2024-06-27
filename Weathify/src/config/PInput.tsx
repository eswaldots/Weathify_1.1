import {Button, Card, Input} from '@nextui-org/react'
import {isFileServingAllowed} from "vite";
const ipc = require('electron').ipcRenderer;
import {useRef, useState} from "react";


export default function PInput() {
    const [inputValue, setInputValue] = useState('');
    function zz(event) {
        ipc.send('open-file-dialog-for-file')
    }

    return (
        <>
            <Card for={'file-input'} className={'w-28 border-0 max-h-10 overflow-x-scroll shadow-none bg-gray-700 hover:bg-gray-900'}>
                {inputValue}
                <input name="file-input" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                       id="file-input" type={'text'}
                       onClick={zz}
                       className={'w-36 opacity-0'}/>

            </Card>
        </>
    )
}