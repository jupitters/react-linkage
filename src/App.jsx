import './App.css'

import { getApps } from './utils/helper'

function App() {
  const CurrentApp = getApps();

  return (
       // eslint-disable-next-line react-hooks/static-components
       <CurrentApp /> 
  )
}

export default App
