import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './App.css'

function App() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <>
    <div className='content-div'>
      <div className='title' id='title-div'>
        <h1>
          Tracky
        </h1>
      </div>

      <div className='top' id='top-div'>
        <h1>
          Select Date
        </h1>
        <DatePicker 
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        calendarStartDay={1}
        className='top-div-dateselector'/>
      </div>

      <div className='middle' id='middle-div'>
        <h1>
          Average Hours
        </h1>
      </div>

      <div className='bottom' id='bottom-div'>
        <h1>
          History
        </h1>
      </div>
    </div>
    </>
  )
}

export default App
