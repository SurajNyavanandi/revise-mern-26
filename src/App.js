import Student from './StudentComponent';

let v1="Jai Shree Rama";
let v2="Om Namah Shivaya";
const age=26;
let a1=[26,25,11,10,4,6,78,true,"Jai Shree Rama","Om Namah Shivaya"];
let a2=["Orange","Apple","Banana","Grapes","Mango","Pineapple"];
let obj={
  name:"Jai Shree Rama",
  age:26
}

function f1(){
  return "String from function";
}

function App(){
  return (
    <>
       <h4>React App</h4>
       <h4> {v1}{v2}</h4>
       <h4>Age:{age}</h4>
       <h4>function :{f1()}</h4>
       <h4>Array:{a1}</h4>
       <p>Array: {a1.map((item,index)=><span key={index}>{index}:{item} </span>)}</p>
       <p>Array: {a1.map((item,index)=> <span key={index}>{item},{index}</span>)}</p>
       <p>Object: {JSON.stringify(obj)}</p>
       <h4>Fruits list</h4>
       <ul>
        {a2.map((item,index)=>
           <li key={index}>{index}-{item}</li>
        )}
       </ul>
       <label className="label-class" htmlFor="name" style={{color:'Blue',fontSize:'16px'}}>Enter Name :</label>
       <input type="text" placeholder="Enter name :" minLength={3} maxLength={6} /><br/>
       <label htmlFor="age">Age :</label>
       <input type="number" placeholder="Enter age :"/>
       
       <h4>Student Component</h4>
       <Student></Student>
       <Student></Student>
       <Student></Student>
       
    </>
  )
};

export default App;
