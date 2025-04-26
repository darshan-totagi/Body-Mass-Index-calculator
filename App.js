
import './App.css';
import { useState } from 'react';


function App() {
  const [weight, setWeight] = useState(0);
  const[height,setHeight]=useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');


  //logic
  let calbmi=(e)=>{

    e.preventDefault();

    
    if(weight===0 || height===0){
      alert("please enetr valid height and weight");
    }
    else{
      let bmi=(weight/(height*height))*703
      setBmi(bmi.toFixed(1))

      if(bmi<2200){
        setMessage("you are underweight")
      }
      else if(bmi>=2200 && bmi<3000){
        setMessage("you are healthy weight");
      }

      else{
        setMessage("you are overweight")
      }
    }

  }

  //reload
  let reload=()=>{
    window.location.reload();
  }

  
  return (
    <div className="App">
      <div className="container">
        
        <form onSubmit={calbmi}>
        <h2>BMI calculator</h2>
          <div>
            <label>
              weight(lbs)
            </label>
            <input type="text" placeholder="enter weight value" value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
          </div>

          <div>
            <label>
              height(in)
            </label>
            <input type="text" placeholder="enter height value" value={height} onChange={(e)=>setHeight(e.target.value)}></input>
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
          </div>
          <div className="center">
            <h3>your bmi is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
