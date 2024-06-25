import {Input} from "@nextui-org/input";

export default function City() {
    return (
        <div className={'flex flex-col m-4'}>
            <strong className={'text-2xl font-medium'}>Weather</strong>
            <strong className={'text-lg font-normal mt-1'}>City</strong>
            <div className={'flex flex-row gap-4'}>
                <Input size={'sm'} placeholder={'Enter your city'} className={'w-60 mt-1'}/>
            </div>
        </div>
    )
}