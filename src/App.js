import './App.css';

function App() {
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
          
         <input className='output-layout' type="text" value={'hey'} />
        </div>
         {/* ^^^^^^^^^ */}


        {/* BUTTONS LAYOUT */}
        <div className='buttons-layout'>

            <div className="btn-grid">
             <div className='num-btn'>7</div>
             <div className='num-btn'>8</div>
             <div className='num-btn'>9</div>
             <div className='del-btn'>
               <div>del</div></div>
          
         
             <div className='num-btn'>4</div>
             <div className='num-btn'>5</div>
             <div className='num-btn'>6</div>
             <div className='num-btn'>+</div>
          
          
             <div className='num-btn'>1</div>
             <div className='num-btn'>2</div>
             <div className='num-btn'>3</div>
             <div className='num-btn'>-</div>
          
          
             <div className='num-btn'>.</div>
             <div className='num-btn'>0</div>
             <div className='num-btn'>/</div>
             <div className='num-btn'>x</div>
          
             </div>

          <div className='row-btns'>
            <button className='reset-btn'>Reset</button>
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
