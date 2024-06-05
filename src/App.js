import logo from './logo.svg';
import './App.css';

function App() {
//   const student1 ={
//     name:"raju",
//     age:20,
//     rollno: 90,
//   };
//     const student2={
//       name:"raju",
//       age:40,
//       rollno:80, 
    
//   };
//   if(student1.name=== student2.name){
//     console.log("hello world");
//   }else{
//     console.log("unknown");
//   }
// const fun1= ()=>{
//   let num1=9
//   let num2=10
//   let num3=10+9
//   console.log(num3)
// };
// if(student1.name===student2.name){
//   fun1();
// }
// const arr1 = [1,2,3,4,5,6];
// for (let item of arr1){
//   console.log(item);
// }
// const people = [
//   {name: "vishal", age: 32},
//   {name: "rahul", age: 40},
//   ];
//   for(const person of people){
//     console.log(`name: ${person.name}, age: ${person.age}`);
//   }
//   const student = [
//     {name: "vishal", age: 32},
//     {name: "rahul", age: 40},
//   ];
//   student.forEach((person) => {
//     console.log(`name: ${person.name}, age: ${person.age}`); 
//   });

// const people = [
//   {name: "vishal", age: 32},
//   {name: "rahul", age: 40},
//   ];
//   for(const person of people){
//     console.log(`name: ${person.name}, age: ${person.age}`);
//   }
//   const student = [
//     {name: "vishal", age: 32},
//     {name: "rahul", age: 40},
//   ];
//   student.forEach((person) => {
//     console.log(`name: ${person.name}, age: ${person.age}`); 
//   });
  // const employee= {
  //   name: "vishal",
  //   age:90,
  //   occupation: "labour"
  // };
  // for(const key in employee){
  //   if (employee.hasOwnproperty(key)){
  //     console.log(`${key}: ${employee[key]}`);
  //   }
  // } ;
  // const  employees = [
  // {name: "vishal", age: 40, salary: 10},
  // {name: "parth", age: 90, salary: 50},
  // {name: "shivam", age: 50, salary: 20}   
  // ];
  // const mappedEmployees = employees.map((item)=>{
  //   console.log("item",item);
  //   return{
  //     ... item,
  //     salary: item.salary+100,
  //   };
  // },[]);
  // console.log("employees",employees);
  //  const  employee = [
  //   {name: "vishal", age: 40, salary: 10,category:" mobile"},
  //   {name: "parth", age: 90, salary: 50,category: "cloth"},
  //   {name: "shivam", age: 50, salary: 20,category: "laptop"},   
  //   ];
  //   const filteredEmployee = employee.filter((item)=>{
  //     return item.category==="mobile";
  //   });
  //   console.log("filteredemployee",filteredEmployee);
    const  employee = [
      {id:100, name: "vishal", age: 40, salary: 10,category:" mobile" },
      {id: 200,name: "parth", age: 90, salary: 50,category: "cloth"},
      {id: 500,name: "shivam", age: 50, salary: 20,category: "laptop" },   
      ];
      

      
      const foundEmployee = employee.find((item) => {
        return item.id === 200;
      });
      console.log(foundEmployee)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
