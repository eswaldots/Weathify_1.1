import {Button, Link as NLink} from "@nextui-org/react";
import {Link} from "react-router-dom";
import React from "react";


export default function NButton({dir, text, icon}) {
    return (
        <>
            <Link to={dir}>
            <Button
                    className={'bg-transparent w-[200px] justify-start text-white text-lg hover:bg-[#32302D]'}>{icon}{text}
</Button>
            </Link>
        </>
    )
}