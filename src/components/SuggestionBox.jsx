import React from 'react'
import symptoms from '../data/symptom'

const SuggestionBox = ({query, updateSelected}) => {
    console.log(query)
    return (
        <div className={query.trim() !== '' ? `absolute h-fit max-h-[200px] lg:max-h-[300px] w-[49%] md:w-[55%] bg-white mt-2 rounded-xl px-2 py-2 ring-1 ring-[#151515] shadow-xl overflow-y-scroll divide-y-[2px] font-firacode font-medium divide-[#151515]` : 'hidden'}>
            {
                symptoms
                    .filter(item => {
                        return item.symptom.toLowerCase() === '' ? item.symptom : item.symptom.includes(query)
                    })
                    .map(item => {
                        return <div
                            key={item.id}
                            className='px-2 py-2 hover:bg-slate-50  cursor-pointer capitalize'
                            onClick={() => updateSelected(item)}>
                            {item.symptom}
                        </div>
                        // border-b-[1px] border-[#151515]
                    })
            }
        </div>
    )
}

export default SuggestionBox