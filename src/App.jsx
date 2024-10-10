import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/auth/login'
import { Authorized } from './views/authorized'
import { ApplicationViews } from './views/applicationViews'
import { Register } from './components/auth/register'
import { Route, Routes } from 'react-router-dom'


export const App = () => {
  const [count, setCount] = useState(0)

  return (

    // <div className='container'>
    //   <CalendarApp />
    // </div>

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};

