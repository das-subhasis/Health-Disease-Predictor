import React from 'react'
import SymptomSkeleton from './SymptomSkeleton'
import CloseIcon from '@mui/icons-material/Close';

const SelectedSymptoms = ({selected, removeSelectedSymptom}) => {
    return (
        selected.length > 0 ?
            <div className='max-h-[300px] lg:max-h-[300px] w-3/5 mt-2 rounded-xl py-2 overflow-y-scroll font-firacode font-medium flex flex-wrap gap-2'>
                {
                    selected.map(item => {
                        return <div
                            key={item.id}
                            className='px-3 py-2 h-fit w-fit cursor-pointer rounded-md font-semibold bg-black/20 capitalize flex items-center gap-3'>
                            <span>{item.symptom}</span>
                            <button
                                onClick={() => removeSelectedSymptom(item)}
                            ><CloseIcon /></button>
                        </div>
                    })
                }
            </div>
            :
            <SymptomSkeleton />
    )
}

export default SelectedSymptoms