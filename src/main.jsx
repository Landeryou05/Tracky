// React Packages
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Imported Packages
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.js'
import { useState } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
