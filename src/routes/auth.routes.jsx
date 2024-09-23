import { Routes, Route, Navigate } from 'react-router-dom';

import { LogIn } from '../pages/LogIn';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes() {
  const user = localStorage.getItem("@rocketmovies:user");
  
  return(
    <Routes>
      <Route path='/' element={<LogIn/>} />
      <Route path='/signUp' element={<SignUp/>} />

      { !user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  )
}