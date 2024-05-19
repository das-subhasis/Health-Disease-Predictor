import React, { useContext, useEffect, useState } from 'react'
import { patient } from '../assets/images/images'
import { InputField, SuggestionBox, SelectedSymptoms, ResultButton } from '../components/components'
import { DiseaseContext } from '../context/DiseaseContext'

const Checkup = () => {
  const [query, setQuery] = useState('')
  const [showSuggestion, setShowSuggestion] = useState(false)
  const {result, setResult, selected, setSelected} = useContext(DiseaseContext)

  useEffect(() =>{
    const resetSelected = () => setSelected([])
    resetSelected()
  }, [])
  
  const updateQuery = (e) => { setQuery(e.target.value) }
  const resetQuery = (e) => { setQuery('') }
  const showSuggestionBox = () => { setShowSuggestion(!showSuggestion) }
  const updateSelected = (symptom) => {
    if (!selected.some((item) => item.id === symptom.id)) {
      setSelected([...selected, symptom])
      setQuery('')
    }
  }
  const removeSelectedSymptom = (symptom) => {
    setSelected(selected.filter((item) => item.id !== symptom.id))
  }

  const sendData = async () => {
    console.log('inside sendData')
    const symptomsList = selected.map(item => { return item.symptom })
    const data = await fetch('http://localhost:5000/predict', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(symptomsList)
    })
    const result = await data.json()
    setResult(result)
  }
  
  return (
    <>
      <div className='font-poppins '>
        <div className='container w-full h-[600px] mx-auto flex items-center'>
          <div className='w-full h-full flex items-center'>
            <div className='relative flex-1 h-full mt-20 px-12'>
              <h1 className='text-4xl w-4/5'>Tell Us Your Symptoms: <br /> Let's Decode Your Health Puzzle!!</h1>
              <InputField
                query={query}
                updateQuery={updateQuery}
                showSuggestionBox={showSuggestionBox}
                resetQuery={resetQuery}
              />
              <SuggestionBox
                query={query}
                updateSelected={updateSelected}
              />
              <SelectedSymptoms
                selected={selected}
                removeSelectedSymptom={removeSelectedSymptom}
              />
              <ResultButton sendData={sendData} />
            </div>
            <span className='h-full absolute top-0 right-0 -z-20'><img src={patient} alt="" className='w-fit h-full' /></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkup