import React from 'react'
import {BrowserRouter,Routes,Route} from 
'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Details from './pages/Details'

const App = () => {
  return (
    <BrowserRouter>
<Routes>
 <Route path='/' element={<Layout/>}>
 <Route index element={<Home/>}/>
 <Route path='/:slug' element={<Details/>}/>
 </Route>
</Routes>
    </BrowserRouter>
  )
}

export default App