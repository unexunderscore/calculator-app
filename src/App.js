import './App.css';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState('0');

  const handleDell = () => {
    let lastNumber = (number.length)-1
    let newNumber = ''
    for(let i=0; i<lastNumber; i++){
      newNumber += number[i];
    }
    setNumber(newNumber);
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
          
         <input className='output-layout' type="text" value={number}/>
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
             <div className='del-btn'>
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
            <button className='eq-btn'>=</button>
          </div>

        </div>
        {/* ^^^^^^^^^ */}

        </div>
        {/* CALC LAYOUT END */}
    </div>
  );
}

export default App;
