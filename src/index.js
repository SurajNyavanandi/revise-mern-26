import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginContextProvider from './26R/context/LoginContextProvider';
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
import UseCallbackComponent from './Advance/UseCallback';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseMemoComponent from './Advance/UseMemo';
import Parent1 from './26/Parent1';
import ClassLifeCycle from './26/Class';
import UseStatee from './26R/useStatee';
import UseEffect from './26R/useEffect';
import Sample from './26R/context/Sample';
import UseRefComponent from './26R/useRef';
import UseExampleComponent from './26R/useExample';
import NewRef from './26R/newRef';
import UseReducerComponent from './26R/UseReducer';
import UseMemoAndCallback from './26R/UseMemoAndCallback';
import Hooks from './26F/Hooks';
import Parent from './26S/Parent';
import Dashboard from './26S/Dashboard';
import Login from './26S/Login';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <LoginContextProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<HomeComponent />} />
        <Route path='/contact/:name?' element={<ContactComponent />} />
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
        <Route path="/http" element={<HttpComponent />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="/form2" element={<Form2Component />} />
        <Route path="/form3" element={<FormComponent3 />} />
        <Route path="/usestate" element={<UseStateComponent />} />
        <Route path="/useeffect" element={<ParentComponent />} />
        <Route path="/usememo" element={<Parent />} />
        <Route path="/usecallback" element={<UseCallbackComponent />} />
        <Route path="/usememo2" element={<UseMemoComponent />} />
        <Route path="/usereducer" element={<UseReducerComponent />} />
        <Route path="/useredux" element={<UseReducerComponent />} />
        <Route path="/provider" element={<Parent1 />} />
        <Route path="/class" element={<ClassLifeCycle />} />
        <Route path="/usestatee" element={<UseStatee />} />
        <Route path="/useeff" element={<UseEffect />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/reff" element={<UseRefComponent />} />
        <Route path="/usexam" element={<UseExampleComponent/>}/> */}
        {/* <Route path="/newref" element={<NewRef />} /> */}
        {/* <Route path="/usereducer" element={<UseReducerComponent />} />
        <Route path="/add" element={<UseMemoAndCallback/>}/> */}
        {/* <Route path="/hooks" element={<Hooks></Hooks>}/> */}
        <Route path="/parent/:id" element={<Parent/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/app" element={<App />} />
        <Route path='*' element={<HomeComponent />} />
      </Routes>
    </BrowserRouter>
  </LoginContextProvider>
);