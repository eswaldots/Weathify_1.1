function Bottom({icon, head, unit, val}) {
    return(
        <div className='flex'>
            {icon}
            <div className={'flex flex-col text-left'}>
            <p className={'-mb-1 text-sm text-gray-400'}>{head}</p>
                <strong className={'text-gray-400 text-center text-sm font-normal'}>
                    <strong className={'text-2xl font-bold text-white mr-1'}>{unit}</strong>{val}</strong>
            </div>
        </div>
    )
}

export default Bottom