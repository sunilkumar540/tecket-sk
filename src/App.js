import logo from './logo.svg';
import './App.css';

function App() {
  const student1 ={
    name:"raju",
    age:20,
    rollno: 90,
  };
    const student2={
      name:"raju",
      age:40,
      rollno:80  
    
  };
  if(student1.name=== student2.name){
    console.log("hello world");
  }else{
    console.log("unknown");
  }
const fun1= ()=>{
  let num1=9
  let num2=10
  let num3=10+9
  console.log(num3)
};
if(student1.name===student2.name){
  fun1();
}

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
