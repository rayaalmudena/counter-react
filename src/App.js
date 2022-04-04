import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App text-white">
      <CounterBox />
    </div>
  );
}

function CounterBox() {

  function updateValue(value) {
    // setCounter(() => {
    //   const newColor = counter + +value > 0 ? 'green' : ' red';
    //   newColor = counter + +value == 0 ? 'grey';
    //   setCounterColor(newColor);
    //   return counter + +value;
    // })

    console.log(value);
    let num = number+(+value)
    setNumber(num);
    if (num>0){
      setColor("green");
    }else if(num<0){
      setColor("red");
    }else{
      setColor("grey");
    }
  }


  const [color, setColor] = useState("grey");
  const [number, setNumber] = useState(0);
  // TODO: Devuelveme el JSX esperado
  return (
    <div className="row max-height align-items-center">
        <div className="col-10 mx-auto col-md-6 text-center main-container p-5">
            <h1 className="text-uppercase">counter</h1>
            <h1 id="counter" className="counter" style={{"color":color}}>{number}</h1>
            <div className="btn-container d-flex justify-content-around flex-wrap">
            <Button text="lower 5" value="-5" updateValue={updateValue} />
            <Button text="lower count" value="-1" updateValue={updateValue} />
            <Button text="add count" value="1" updateValue={updateValue} />
            <Button text="add 5" value="5" updateValue={updateValue} />
            </div>
        </div>
    </div>    
    );
}

function Button(props) {

  function handleClick() {
    props.updateValue(props.value);
  }

  // TODO: Devuelveme un botón configurado según los requisitos
  return (<button onClick={handleClick} className="btn counterBtn prevBtn text-uppercase m-2">{props.text}</button>);
  //return (<button onClick={() => { props.updateValue(props.value); }} className="btn counterBtn prevBtn text-uppercase m-2">{props.text}</button>);

}

export default App;
