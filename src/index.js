import ReactDOM from 'react-dom/client';
import F1component from './Communication/F1';
import {Router,Route} from 'react-router-dom';
import ContactComponent from './Routing/Home';
import LoginComponent from './Routing/Login';
import RegisterComponent from './Routing/Register';
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <h2>Jai Shree Rama Om Namah Shivaya</h2>
  <F1component></F1component>
  <Router>
    <Route path='/contact' element={<ContactComponent></ContactComponent>}></Route>
    <Route path='/login' element={<LoginComponent></LoginComponent>}></Route>
    <Route path='/register' element={<RegisterComponent></RegisterComponent>}></Route>
  </Router>
  {/* <ParentComponent></ParentComponent> */}
  {/* <UseStateComponent></UseStateComponent> */}
  {/* <UseRefHook></UseRefHook> */}
  {/* <CounterWithoutEffect>22</CounterWithoutEffect> */}
  {/* <LstatecleComponent></LifeCycleComponent> */}
  {/* <KeyComponent></KeyComponent> */}
  {/* <ImageComponent></ImageComponent>
  <App></App> */}
  {/* <UseStateComponent></UseStateComponent> */}
   {/* <EventComponent></EventComponent> */}
{/*   
     <App></App>
     <ClassComponent></ClassComponent> */}
  </>
    
)