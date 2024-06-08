import { useEffect,useState } from "react";
import './App.css'

function App() {
  const [data, setData] = useState<string>("hiii");
  useEffect(()=>{
    setData("world");
  },[]);

  return (
   <> 
      <div>
        {data}
      </div>
      </>
  );
}
 export default App     
