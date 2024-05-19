import React from 'react'
import { Link } from 'react-router-dom'

const ResultButton = ({sendData}) => {
    return (
        <div className='py-5 absolute bottom-16'>
            <button
                className='px-4 py-3 rounded-full bg-black text-[#FFD23F] font-bold'
                onClick={sendData}
            ><Link to={'/result'}>Get Results</Link></button>
        </div>
    )
}

export default ResultButton