import symptoms from "../data/symptom";

import React from 'react'

const SymptomSkeleton = () => {
    return (
        <div className='max-h-[200px] lg:max-h-[300px] w-3/5 mt-2 rounded-xl py-2 overflow-y-scroll font-firacode font-medium flex flex-wrap gap-2'>
            {
                symptoms.map(item => {
                    return <div
                        key={item.id}
                        className='px-3 py-2 h-fit w-fit cursor-pointer rounded-md font-semibold bg-black/20 capitalize flex items-center gap-3 '>
                        <span
                            className='text-transparent'>{item.symptom}</span>
                    </div>
                })
            }
        </div>
    )
}

export default SymptomSkeleton