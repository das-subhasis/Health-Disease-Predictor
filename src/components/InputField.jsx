import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const InputField = ({query, updateQuery, resetQuery}) => {
    return (
        <span className='relative w-fit h-fit'>
            <input
                type="text"
                value={query}
                placeholder='Search symptoms'
                className='mt-5 w-3/5 outline-none ring-1 ring-black px-5 pr-10 py-2 rounded-md'
                onChange={updateQuery}
            />
            {
                query.trim() !== '' ? <button onClick={resetQuery}><CloseIcon className='absolute top-0 right-2' /></button> : ''
            }
        </span>
    )
}

export default InputField