import React from 'react';
import Navbar from './Components/Navbar';
import './Mainpage.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import RPF from './RPF';
import Pragati from './Pragati';
import MeritCum from './Merit-cum';
import Natschemes from './Natschemes';
import Fishermen from './Fishermen';
import Disability from './Disability';
import NCS from './NCS';
import PMJJBY from './PMJJBY';
import CSSS from './CSSS';
import Logout from './Components/Pages/Logout';
import EditDetails from './EditDetails';
import Home from './Components/Pages/Home';
import Stateschemes from './Stateschemes'
import Camps from './Components/camps/Camps'
import Log from './Components/Pages/Log'
import Register from './Components/Pages/Register'
import Boundedlabour from './Bondedlabour'
import TnDiffAble from './TnDiffAble'
import RIMCDehradun from './RIMCDehradun'
import TnDiffNB from './TnDiffNB'

function Mainpage() {
  return (
    <div className='App'>
    <BrowserRouter >
    
        <Navbar/>
        <Routes>
        <Route path='/' element={<Log/>} />
        <Route  path='/Log' element={<Log/>}/>
       <Route  path='/Register' element={<Register/>}/> 
        <Route path='/Home' element={<Home/>} />
        <Route path='/Natschemes' element={<Natschemes/>} />
        <Route path='/Stateschemes' element={<Stateschemes/>}/>
        <Route path='/Pragati' element={<Pragati/>}/>
        <Route path='/MeritCum' element={<MeritCum/>}/>
        <Route path='/RPF' element={<RPF/>}/>
        <Route path='/Fishermen' element={<Fishermen/>}/>
        <Route path='/RPF' element={<RPF/>}/>
        <Route path='/CSSS' element={<CSSS/>}/>
        <Route path='/Disability' element={<Disability/>}/>
        <Route path='/Camps' element={<Camps/>} />
        <Route path='/EditDetails' element={<EditDetails/>}/>
        <Route path='/NCS' element={<NCS/>}/>
        <Route path='/PMJJBY' element={<PMJJBY/>}/>
        <Route path='/TnDiffAble'  element={<TnDiffAble/>}/>
        <Route path='/Bondedlabour'  element={<Boundedlabour/>}/>
        <Route path='/RIMCDehradun'  element={<RIMCDehradun/>}/>
        <Route path='/TnDiffNB'  element={<TnDiffNB/>}/>
        <Route path='/Logout' element={<Logout/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}
export default Mainpage;
