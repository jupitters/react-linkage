import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import { Toaster } from 'react-hot-toast'
import DashboardLayout from './components/dashboard/DashboardLayout'
import LoginPage from './components/LoginPage'
import { getApps } from './utils/helper'

function App() {
  const CurrentApp = getApps();

  return (
       // eslint-disable-next-line react-hooks/static-components
       <CurrentApp /> 
  )
}

export default App
