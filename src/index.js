import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import ContactComponent from './Routing/Contact';
import LoginComponent from './Routing/Login';
import RegisterComponent from './Routing/Register';
import HomeComponent from './Routing/Home';
import HttpComponent from './Http/Http';
import FormComponent from './Form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>

  {/* <F1component></F1component> */}
  <BrowserRouter>
    {/* <h2>Jai Shree Rama Om Namah Shivaya</h2> */}
              <Routes>
              <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
             <Route path='/contact/:name?' element={<ContactComponent></ContactComponent>}></Route>
             <Route path='/login' element={<LoginComponent></LoginComponent>}></Route>
             <Route path='/register' element={<RegisterComponent></RegisterComponent>}></Route>
             <Route path="/http" element={<HttpComponent></HttpComponent>}></Route>
             <Route path="/form" element={<FormComponent></FormComponent>}></Route>
             <Route path='*' element={<HomeComponent></HomeComponent>}></Route>

  </Routes>
  </BrowserRouter>

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