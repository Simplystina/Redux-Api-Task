import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from './features/dataSlice'

const App = () => {

   const dispatch = useDispatch()
   const {isLoading, data} = useSelector((state) =>state.covidData);
  const getCovidData = ()=>{
      dispatch(getData())
  }
  return (
    <div className='container'>
       <button className='btn' onClick={getCovidData}>Click to display Covid Data</button>
    </div>
  )
}

export default App
