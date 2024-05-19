import React, { useContext } from 'react'
import { DiseaseContext } from '../context/DiseaseContext'
import {intro} from '../assets/images/images'

const Result = () => {
    const {selected, result} = useContext(DiseaseContext)
    console.log(result)
    return (
        <div className='font-poppins px-16 py-10'>
            <div className='container mx-auto w-full h-[510px] relative'>
                <div className='w-full '>
                    <h1 className='text-3xl font-bold'>Your Health Diagnosis Results:</h1>
                </div>
                <div className='flex flex-col justify-center w-full py-5 gap-4'>
                    <div className='flex flex-col justify-center gap-2'>
                        <span className='text-xl font-bold'>Selected Symptoms:</span>
                        <p className='flex items-center gap-2'>{selected.map(item => <span key={item.id}>{item.symptom}</span> )}</p>
                    </div>
                    <div className='flex flex-col justify-center gap-2'>
                        <div className='text-xl font-bold'>Results:</div>
                        <div><span className='text-lg font-medium'>Diagnosed:</span> {result.disease}</div>
                        <div><span className='text-lg font-medium'>Probability:</span> {result.Probability.toFixed(2)}%</div>
                    </div>
                </div>
                <div>
                    <img src={intro} alt="" className='absolute top-0 right-0'/>
                </div>
            </div>
        </div>
    )
}

export default Result