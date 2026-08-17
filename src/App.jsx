import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './App.css'

function App() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <>
      <div className='title' id='title-div'>
        <h1>
          Tracky
        </h1>
      </div>

      <div className='top' id='top-div'>
        <h1>
          Date Select
        </h1>
        <DatePicker 
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        calendarStartDay={1}/>
      </div>

      <div className='middle' id='middle-div'>
        <h1>
          Summary of Average Hours
        </h1>
      </div>

      <div className='bottom' id='bottom-div'>
        <h1>
          Recent Changes
        </h1>
      </div>
    </>
  )
}

export default App
