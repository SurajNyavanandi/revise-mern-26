import ReactDOM from 'react-dom/client';
import {BrowserRouter,Form,Route, Routes} from 'react-router-dom';
import ContactComponent from './Routing/Contact';
import LoginComponent from './Routing/Login';
import RegisterComponent from './Routing/Register';
import HomeComponent from './Routing/Home';
import HttpComponent from './Http/Http';
import FormComponent from './Form/Form';
import Form2Component from './Form/Form2';
import FormComponent3 from './Form/Form3';
import UseStateComponent from './Advance/UseState';
import ParentComponent from './Advance/Parent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Parent from './Advance/ReactMemo';
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
             <Route path="/form2" element={<Form2Component></Form2Component>}></Route>
             <Route path="/form3" element={<FormComponent3></FormComponent3>}></Route>
             <Route path="/usestate" element={<UseStateComponent></UseStateComponent>}></Route>
             <Route path="/useeffect" element={<ParentComponent></ParentComponent>}></Route>
             <Route path="/usememo" element={<Parent></Parent>}></Route>
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