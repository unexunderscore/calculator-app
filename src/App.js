import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [number, setNumber] = useState('');

  const [checked, setChecked] = useState(() => {
    // getting stored value

      const saved = localStorage.getItem("checked");
      const initialValue = JSON.parse(saved);
      if(initialValue == null){
        return true;
      }
      return initialValue;

  });;

  const [theme, setTheme] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("theme");
    const initialValue = JSON.parse(saved);
    return initialValue || 'first';
  });;


  useEffect(() => {
    // storing last used theme
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

 useEffect(() => {
    // storing last used switch
    localStorage.setItem('checked', JSON.stringify(checked));
  }, [checked]);


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

  function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }

  const calcMath = () => {

     let inputStack = number;

      if(inputStack.includes('x') || inputStack.includes('++') || inputStack.includes('//') || inputStack.includes('..') || inputStack === '--' || inputStack === '+' 
      || inputStack === '*' || inputStack === '/' || inputStack === '-' || inputStack === '.'){
        setNumber('Malformed expression');
      } else {

     let result = parse(inputStack);
     setNumber(result);
    }
}




  return (
    
    <div className="App" data-theme={theme}>
        <div className='calc-layout'>
          {/* TITLE + SWITCH */}
          <div className='title-theme'>
              <div className='calc-title'>calc</div>
                <div className='theme-switch'>
                  <div className='themeTitle'>
                    theme
                  </div>
                  <div className='radioContainer'>

                    <input type="radio" id={`firstTheme`} value={1} name='tss'
                    onChange={(e) => setChecked(e.target.checked)}
                    onClick={() => setTheme('first')}
                    />
                    <label
                      className="firstTheme"
                      htmlFor={`firstTheme`}
                    >1</label>
                     <input type="radio" id={`secondTheme`} value={2} name='tss'
                     onChange={(e) => setChecked(e.target.checked)}
                     onClick={() => setTheme('second')}
                     />
                    <label
                      className="secondTheme"
                      htmlFor={`secondTheme`}
                    >2</label>
                     <input type="radio" id={`thirdTheme`} value={3} name='tss'
                     onChange={(e) => setChecked(e.target.checked)}
                     onClick={() => setTheme('third')}
                     
                     />
                    <label
                      className="thirdTheme"
                      htmlFor={`thirdTheme`}
                    >3</label>
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
             onClick={() => setNumber(number+'*')}
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
