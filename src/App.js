import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from './features/dataSlice'

const App = () => {

   const dispatch = useDispatch()
   const {data} = useSelector((state) =>state.covidData);
  const getCovidData = ()=>{
      dispatch(getData())
  }

  useEffect(()=>{
    console.log(data, "data")
})
  return (
    <div className='container'>
       <article>
       <button className='btn' onClick={getCovidData}>Click to display Covid Data</button>
        <div>
           <div>
              <h2>TotalSamplesTested: {data?.totalSamplesTested}</h2>
              <h2>TotalConfirmed cases: {data?.totalConfirmedCases}</h2>
              <h2>Total active cases: {data?.totalActiveCases}</h2>
              <h2>discharged: {data?.discharged}</h2>
              <h2>Death: {data?.death}</h2>
           </div>
           {data &&  <table id="data">
            <tr>
              <th>State</th>
              <th>Cases on Admission</th>
              <th>Confirmed cases</th>
              <th>Discharged</th>
              <th>Death</th>
            </tr>
            {data?.states?.map((item)=>{
              const {state, casesOnAdmission, confirmedCases,discharged, death} = item
              return <tr>
                    <td>{state}</td>
                   <td>{casesOnAdmission}</td>
                    <td>{confirmedCases}</td>
                   <td>{discharged}</td>
                    <td>{death}</td>
              </tr>
            })}
          </table> }                
         </div>
       </article>
    </div>
  )
}

export default App
