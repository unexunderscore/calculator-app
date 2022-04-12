import './App.css';
import { useState, useEffect, useRef } from 'react';


function useKey(key, cb) {
  const callbackRef = useRef(cb);

    useEffect(() => {
      callbackRef.current = cb;
    });

    useEffect(() => {
      function handle(event){
        if (event.code === key) {
          callbackRef.current(event);
        }
      }
      document.addEventListener("keydown", handle);
      return () => document.removeEventListener("keydown", handle);
    }, [key]);

}

function App() {

  const [number, setNumber] = useState('');

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
     const regExtext = /[a-zA-Z]/g;
    
      if(regExtext.test(inputStack) || inputStack.includes('--') || inputStack.includes('x') || inputStack.includes('++') || inputStack.includes('//') || inputStack.includes('..') || inputStack === '--' || inputStack === '+' 
      || inputStack === '*' || inputStack === '/' || inputStack === '-' || inputStack === '.'){
        setNumber('Malformed expression');
      } else {

     let result = parse(inputStack);
    setNumber(result);
     
    }
}

    const getTheme = () => JSON.parse(localStorage.getItem("theme"));
    console.log(localStorage.getItem("theme"));

    useKey("Enter", calcMath)
    useKey("NumpadEnter", calcMath)
    
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
                  
                  <div className='radioContainer switchContainer'>

                    <input type="radio" id={`firstTheme`} value="first" name='tss'
                    defaultChecked={getTheme() === "first"}
        
                    onClick={() => setTheme('first')}
                    />
                    <label
                      className="firstTheme"
                      htmlFor={`firstTheme`}
                    >1</label>
                    
                     <input type="radio" id={`secondTheme`} value="second" name='tss'
                     defaultChecked={getTheme() ==="second"}
                 
                     onClick={() => setTheme('second') }
                     
                     />
                    <label
                      className="secondTheme"
                      htmlFor={`secondTheme`}
                    >2</label>
                     <input type="radio" id={`thirdTheme`} value="third" name='tss'
                     defaultChecked={getTheme() === "third"}
                    
                     onClick={() => setTheme('third')}
                     />
                    <label
                      className="thirdTheme"
                      htmlFor={`thirdTheme`}
                    >3</label>
                    <span className="slider"></span>
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
            <button 
            type="submit"
            className='eq-btn'
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
