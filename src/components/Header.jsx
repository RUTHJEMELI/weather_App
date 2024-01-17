import React from 'react'

const Header = () => {
    let greetings = ''
    const date = new Date()
    const time = date.getHours()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    

    if (time < 12) {
        greetings = 'Good morning! Explore the weather with us'
        
    } else if (time > 12 && time < 15) {
        greetings ='Good afternoon! Explore the weather with us'
    }
    else if (time > 15) {
        greetings = 'Good evening! Explore the weather with us today'

    } else {
        greetings = 'Lets enjoy the noon weather together'
    }

  return (
      <div className='flex justify-end pr-16'>
          <div className='flex flex-col font-semibold text-xl'>
              <span>{greetings}</span>
              <span>{formattedDate }</span>
          </div>
          
    </div>
  )
}

export default Header