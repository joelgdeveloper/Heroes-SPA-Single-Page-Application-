import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';



export const AppRouter = () => {
  return (
    <>

        <Routes>
            
            <Route path="login" element={<LoginPage />} />
            
            <Route path='/Heroes-SPA-Single-Page-Application-/' element={<HeroesRoutes />} />
            <Route path="/Heroes-SPA-Single-Page-Application-/*" element={ <HeroesRoutes />} />
            
            

        </Routes>
    
    </>
  )
}
