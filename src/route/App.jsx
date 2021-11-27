import React from 'react'
import { Layout } from '../container/Layout/Layout'
import { Main } from '../container/Main/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Artist } from '../Page/Artist'
export const App = () => {
    return (
        <BrowserRouter>
            <Layout>
               <Routes>
                   <Route path='/' element={<Main />}/>
                   <Route path='/music' element={<Artist />} />
               </Routes>
            </Layout>
        </BrowserRouter>
  
    )
}
