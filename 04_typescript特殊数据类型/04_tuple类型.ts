function useState(state:any) {
  let currentState = state;
  
  const changeState = (newState:any) => {
    currentState = newState;
  }

  const tuple:[any,(state:any) => void] = [currentState,changeState]
  return tuple;
}

const [counter,setCounter] = useState(10);
console.log(counter);

setCounter(1000);
console.log(counter);


