// Import React Packages.
import { useState } from 'react'
import './App.css'

// Import Components
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// Reusable hours+minutes field (used for durations AND clock times).
function TimeField({ title, hoursMax, value, onChange, idPrefix, className = '' }) {
  return (
    <div className={`field-block ${className}`}>
      <h3>{title}</h3>
      <div className='hours-select-div'>
        <div className='hours-row'>
          <p>Hours:</p>
          <select
            className="time-select"
            id={`${idPrefix}-hours`}
            value={value.hours}
            onChange={(e) => onChange({ ...value, hours: e.target.value })}
          >
            <option value="">Hrs</option>
            {[...Array(hoursMax)].map((_, i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>

        <div className='hours-row'>
          <p>Minutes:</p>
          <select
            className="time-select"
            id={`${idPrefix}-minutes`}
            value={value.minutes}
            onChange={(e) => onChange({ ...value, minutes: e.target.value })}
          >
            <option value="">Min</option>
            {[...Array(60)].map((_, i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

// Reusable single-number field (used for miles).
function MilesField({ title, value, onChange, idPrefix }) {
  return (
    <div className='field-block'>
      <h3>{title}</h3>
      <div className='hours-row'>
        <p>Miles:</p>
        <input
          type="number"
          min="0"
          className="miles-input"
          id={idPrefix}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}

function App() {

  // Date for the whole entry.
  const [startDate, setStartDate] = useState(new Date())

  // Duration-type fields (hours capped lower since they're spans of a shift).
  const [rest, setRest] = useState({ hours: '', minutes: '' })
  const [workTime, setWorkTime] = useState({ hours: '', minutes: '' })
  const [driveTime, setDriveTime] = useState({ hours: '', minutes: '' })

  // Clock-type fields (hours go 0-23 since they're a time of day).
  const [cardIn, setCardIn] = useState({ hours: '', minutes: '' })
  const [cardOut, setCardOut] = useState({ hours: '', minutes: '' })
  const [startTime, setStartTime] = useState({ hours: '', minutes: '' })
  const [finishTime, setFinishTime] = useState({ hours: '', minutes: '' })

  // Miles fields.
  const [startMiles, setStartMiles] = useState('')
  const [finishMiles, setFinishMiles] = useState('')

  return (
    <>
    <div className='content-div'>
      <div className='title' id='title-div'>
        <h1>Tracky</h1>
      </div>

      <div className='top' id='top-div'>
        <h1>Enter Information</h1>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          calendarStartDay={1}
          className='top-div-dateselector'
        />

      <div className='fields-grid'>
        <TimeField title="Card In" hoursMax={24} value={cardIn} onChange={setCardIn} idPrefix="card-in" />
        <TimeField title="Card Out" hoursMax={24} value={cardOut} onChange={setCardOut} idPrefix="card-out" />

        <TimeField title="Start Time" hoursMax={24} value={startTime} onChange={setStartTime} idPrefix="start-time" />
        <MilesField title="Start Miles" value={startMiles} onChange={setStartMiles} idPrefix="start-miles" />

        <TimeField title="Finish Time" hoursMax={24} value={finishTime} onChange={setFinishTime} idPrefix="finish-time" />
        <MilesField title="Finish Miles" value={finishMiles} onChange={setFinishMiles} idPrefix="finish-miles" />

        <TimeField title="Work Time" hoursMax={25} value={workTime} onChange={setWorkTime} idPrefix="work-time" />
        <TimeField title="Drive Time" hoursMax={25} value={driveTime} onChange={setDriveTime} idPrefix="drive-time" />

        <TimeField title="Rest" hoursMax={13} value={rest} onChange={setRest} idPrefix="rest" className="full-width" />
      </div>
        <button type="submit" className="submit-button">Submit</button>
      </div>

      <div className='middle' id='middle-div'>
        <h1>Average Hours</h1>
      </div>

      <div className='bottom' id='bottom-div'>
        <h1>History</h1>
      </div>
    </div>
    </>
  )
}

export default App