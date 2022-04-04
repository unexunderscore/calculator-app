import './App.css';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState('');

  

  const handleDell = () => {
    let newNumber = '';
    let lengthOfNumber = (number.length)-1;
    
      if(lengthOfNumber<0){
        lengthOfNumber = 0;
      } else {
        for(let i=0; i<lengthOfNumber; i++){
          newNumber += number[i];
        }
      }
    
    setNumber(newNumber);
  }
 

  const calcMath = () => {

  let result = '';

  let inputStack = number;
  let inputPart =  '';

  let number1 = '';
  let numberFirstIndex = '';

  let number2 = '';
  let numberSecondIndex = '0';

  let operatorIndex = 0;
  let operationCounter = 0;

  let number3 = '';
  let numberThirdIndex = 0;

  
  

 console.log("Kezdéskor: " + inputStack);
 if(inputStack.includes('x')){
      for(let i=0; i<inputStack.length; i++){
        if(inputStack[i]=='x'){
          console.log("Find x operator at " + i + " index");
          operatorIndex = i;
          
          //  SELECT FIRST NUMBER
          for(let j=operatorIndex; j>=0; j--){
            if(inputStack[j] == 'x' || inputStack[j] == '/' || inputStack[j] == '' || inputStack[j] == '+'){
              numberFirstIndex = j+1;
            } else numberFirstIndex = j;
          }

          number1 = inputStack.slice(numberFirstIndex, operatorIndex);
          number1 = parseFloat(number1);
          console.log("First number '*' : " + number1);


          //  SELECT SECOND NUMBER
          for(let k=operatorIndex+1; k<=inputStack.length-1; k++){
            if((inputStack[k] == 'x' || inputStack[k] == '/' || inputStack[k] == '' || inputStack[k] == '+') && operationCounter == 0){
                numberSecondIndex = k-1;
                operationCounter++;
            } else numberSecondIndex = k;}
          
          
          number2 = inputStack.slice(operatorIndex+1, numberSecondIndex+1);
          number2 = parseFloat(number2);

          console.log("Second number '*' : " + number2);
          number3 = number1 * number2;


          //console.log("Szeletelés előtt: " + inputStack);
          inputPart = (number1 + 'x' + number2);
          inputStack = inputStack.replace(inputPart, number3);
          //console.log("Szeletelés után: " + inputStack);

          // Setting everything back to null
          operationCounter = 0;
          operatorIndex = '';
          number1 = '';
          numberFirstIndex = '';
          number2 = '';
          numberSecondIndex = '';
    } 
  }
}

  if(inputStack.includes('/')){
    for(let i=0; i<inputStack.length; i++){
    if(inputStack[i]=='/'){
      console.log("Find / operator at " + i + " index");
      operatorIndex = i;
      
      //  SELECT FIRST NUMBER
      for(let j=operatorIndex; j>=0; j--){
        if(inputStack[j] == 'x' || inputStack[j] == '/' || inputStack[j] == '' || inputStack[j] == '+'){
          numberFirstIndex = j+1;
        } else numberFirstIndex = j;
      }

      number1 = inputStack.slice(numberFirstIndex, operatorIndex);
      number1 = parseFloat(number1);
      console.log("First number '/' : " + number1);


      //  SELECT SECOND NUMBER
      for(let k=operatorIndex+1; k<=inputStack.length-1; k++){
        if((inputStack[k] == 'x' || inputStack[k] == '/' || inputStack[k] == '' || inputStack[k] == '+') && operationCounter == 0){
            numberSecondIndex = k-1;
            operationCounter++;
        } else numberSecondIndex = k;}
      
     
      number2 = inputStack.slice(operatorIndex+1, numberSecondIndex+1);
      number2 = parseFloat(number2);
      console.log("Second number '/' : " + number2);

      

      number3 = (number1 / number2);


      //console.log("Szeletelés előtt: " + inputStack);
      inputPart = (number1 + '/' + number2);
      inputStack = inputStack.replace(inputPart, number3);
      //console.log("Szeletelés után: " + inputStack);

      // Setting everything back to null
      operationCounter = 0;
      operatorIndex = '';
      number1 = '';
      numberFirstIndex = '';
      number2 = '';
      numberSecondIndex = '';

      }
    } 
  }

  if(inputStack.includes('+')){
    for(let i=0; i<inputStack.length; i++){
    if(inputStack[i]=='+'){
      console.log("Find + operator at " + i + " index");
      operatorIndex = i;
      
      //  SELECT FIRST NUMBER
      for(let j=operatorIndex; j>=0; j--){
        if(inputStack[j] == 'x' || inputStack[j] == '/' || inputStack[j] == '' || inputStack[j] == '+'){
          numberFirstIndex = j+1;
        } else numberFirstIndex = j;
      }

      number1 = inputStack.slice(numberFirstIndex, operatorIndex);
      number1 = parseFloat(number1);
      console.log("First number '+' : " + number1);
     

      //  SELECT SECOND NUMBER
      for(let k=operatorIndex+1; k<=inputStack.length-1; k++){
        if((inputStack[k] == 'x' || inputStack[k] == '/' || inputStack[k] == '' || inputStack[k] == '+') && operationCounter == 0){
            numberSecondIndex = k-1;
            operationCounter++;
        } else numberSecondIndex = k;}
      
     
      number2 = inputStack.slice(operatorIndex+1, numberSecondIndex+1);
      number2 = parseFloat(number2);
      console.log("Second number '+' : " + number2);


      number3 = (number1 + number2);

      //console.log("Szeletelés előtt: " + inputStack);
      inputPart = (number1 + '+' + number2);
      inputStack = inputStack.replace(inputPart, number3);
      //console.log("Szeletelés után: " + inputStack);

      // Setting everything back to null
      operationCounter = 0;
      operatorIndex = '';
      number1 = '';
      numberFirstIndex = '';
      number2 = '';
      numberSecondIndex = '';

      }
    }
  }


  if(inputStack.includes('-')){
    for(let i=0; i<inputStack.length; i++){
    if(inputStack[i]=='-'){
      console.log("Find - operator at " + i + " index");
      operatorIndex = i;
      
      //  SELECT FIRST NUMBER
      for(let j=operatorIndex; j>=0; j--){
        if(inputStack[j] == 'x' || inputStack[j] == '/' || inputStack[j] == '' || inputStack[j] == '+'){
          numberFirstIndex = j+1;
        } else numberFirstIndex = j;
      }

      number1 = inputStack.slice(numberFirstIndex, operatorIndex);
      number1 = parseFloat(number1);
      console.log("First number '-' : " + number1);
     

      //  SELECT SECOND NUMBER
      for(let k=operatorIndex+1; k<=inputStack.length-1; k++){
        if((inputStack[k] == 'x' || inputStack[k] == '/' || inputStack[k] == '' || inputStack[k] == '+') && operationCounter == 0){
            numberSecondIndex = k-1;
            operationCounter++;
        } else numberSecondIndex = k;}
      
     
      number2 = inputStack.slice(operatorIndex+1, numberSecondIndex+1);
      number2 = parseFloat(number2);
      console.log("Second number '-' : " + number2);


      number3 = (number1 - number2);

      //console.log("Szeletelés előtt: " + inputStack);
      inputPart = (number1 + '-' + number2);
      inputStack = inputStack.replace(inputPart, number3);
      //console.log("Szeletelés után: " + inputStack);

      // Setting everything back to null
      operationCounter = 0;
      operatorIndex = '';
      number1 = '';
      numberFirstIndex = '';
      number2 = '';
      numberSecondIndex = '';

      }
    }
  }

  result = number3; 
  console.log('Result: '+ result)
  setNumber(result);
}












  return (
    <div className="App">
        <div className='calc-layout'>
          {/* TITLE + SWITCH */}
          <div className='title-theme'>
              <div className='calc-title'>calc</div>
                <div className='theme-switch'>
                  <div>
                    theme
                  </div>
                  <div>
                    input switch
                  </div>
                </div>
          </div>
          {/* ^^^^^^^^^ */}

        {/* SCREEN OUTPUT */}
        <div >
          
         <input className='output-layout' type="text" value={number}
         onChange={e => setNumber(e.target.value)}
         />
        </div>
         {/* ^^^^^^^^^ */}


        {/* BUTTONS LAYOUT */}
        <div className='buttons-layout'>

            <div className="btn-grid">
             <div className='num-btn'
             onClick={() => setNumber(number+'7')}
             >7</div>
             <div className='num-btn'
             onClick={() => setNumber(number+'8')}
             >8</div>
             <div className='num-btn'
             onClick={() => setNumber(number+'9')}
             >9</div>
             <div className='del-btn'
              onClick={handleDell}>
               <div
              onClick={handleDell}
               >del</div></div>
          
         
             <div className='num-btn'
             onClick={() => setNumber(number+'4')}
             >4</div>
             <div className='num-btn'
             onClick={() => setNumber(number+'5')}
             >5</div>
             <div className='num-btn'
             onClick={() => setNumber(number+'6')}
             >6</div>
             <div className='num-btn'
             onClick={() => setNumber(number+'+')}
             >+</div>
          
          
             <div className='num-btn'
             onClick={() => setNumber(number+'1')}
             >1</div>
             <div className='num-btn'
             onClick={() => setNumber(number+'2')}
             >2</div>
             <div className='num-btn'
             onClick={() => setNumber(number+'3')}
             >3</div>
             <div className='num-btn'
             onClick={() => setNumber(number+'-')}
             >-</div>
          
          
             <div className='num-btn'
             onClick={() => setNumber(number+'.')}
             >.</div>
             <div className='num-btn'
             onClick={() => setNumber(number+'0')}
             >0</div>
             <div className='num-btn'
             onClick={() => setNumber(number+'/')}
             >/</div>
             <div className='num-btn'
             onClick={() => setNumber(number+'x')}
             >x</div>
          
             </div>

          <div className='row-btns'>
            <button className='reset-btn'
            onClick={() => setNumber('')}
            >Reset</button>
            <button className='eq-btn'
            onClick={calcMath}
            >=</button>
          </div>

        </div>
        {/* ^^^^^^^^^ */}

        </div>
        {/* CALC LAYOUT END */}
    </div>
  );
}

export default App;
