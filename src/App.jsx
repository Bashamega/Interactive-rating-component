"use client"
import './style/master.sass'
import React, {useState} from 'react'
function App() {
 const [buttonSelected, setselect] = useState(0);
 const [review, setreview] = useState(true)
 const buttonclick = (e)=>{
    setselect(e.target.id.split('button').pop())
 }
 const submit = ()=>{
  if(buttonSelected !== 0){
    setreview(false)
  }
 }
 return(
  <main>
    {review?(
      <section>
        <img src="icon-star.svg" id='icon' alt='icon'></img>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>
        <div id='reviews'>
          <button id='button1' onClick={(e)=>buttonclick(e)}>
            1
          </button>
          <button id='button2' onClick={(e)=>buttonclick(e)}>
            2
          </button>
          <button id='button3' onClick={(e)=>buttonclick(e)}>
            3
          </button>
          <button id='button4' onClick={(e)=>buttonclick(e)}>
            4
          </button>
          <button id='button5' onClick={(e)=>buttonclick(e)}>
            5
          </button>
        </div>
        <button id='submit' onClick={submit}>Submit</button>
      </section>
    ):(
      <section id='thankyou'>
        <img src='illustration-thank-you.svg' alt='thank you'></img>
        <div id="review">
        
        You selected {buttonSelected} out of 5 Thank you! 
        </div>
        <h2>Thank you !</h2>

        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </section>
    )}
    
  
    
  </main>
 )
}

export default App
