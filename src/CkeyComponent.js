import Student from './StudentComponent';
//Note use syntax for key as key={} dont use as key=""
let a1=[26,9,6,6,6,6,3,5,0,0,9];
let users=[
    {id:1,name:"Jai Shree Rama",age:26,friend:"Om Namah Shivaya"},
    {id:2,name:"Shree Shiva",age:52,friend:"Jai Shree Rama"},
    {id:3,name:"Shree Krishna",age:78,friend:"Shree Hanuma"},
    {id:4,name:"Shree Hanuma",age:104,friend:"Shree Krishna"},
    {id:5,name:"Shree Ayyappa",age:130,friend:"Shree Vinayaka"},
    {id:6,name:"Shree Vinayaka",age:156,friend:"Shree Ayyappa"}
]
function KeyComponent(){
    return (<>
          <ul>
            {a1.map((item,index)=><li key={index}>{item}</li>)}
          </ul>
            <ul>
            {a1.map((item,index)=><li key={index}>{item}</li>)}
          </ul>
         <ul>
            {users.map((item)=><Student key="id" name={item.name} age={item.age} friend={item.friend}></Student>)}
         </ul>
         <ul>
            {users.map((item)=><Student key={item.id} name={item.name} age={item.age} friend={item.friend}></Student>)}
         </ul>
    </>)
};
export default KeyComponent;