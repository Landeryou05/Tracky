// Import React Packages.
import { useState } from 'react'
import './App.css'

// Import Components
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function App() {

  // Rememeber state for date entered by user.
  const [startDate, setStartDate] = useState(new Date())

  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')

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

        <div className='hours-select-div'>
          <div className='select-row'>
            <p>Hours:</p>
            <select className="time-select" id="hour-select" value={hours} onChange={(e) => setHours(e.target.value)}>
              <option value="">Hours</option>
              {[...Array(13)].map((_, i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          <div className='select-row'>
            <p>Minutes:</p>
            <select className="time-select" id="minute-select" value={minutes} onChange={(e) => setMinutes(e.target.value)}>
              <option value="">Minutes</option>
              {[...Array(60)].map((_, i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="submit-button">Submit</button>
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
