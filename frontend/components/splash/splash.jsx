import React, {useState} from 'react';

const Splash = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPhoneSubmit, setPhoneSubmit] = useState(false);

  
  const handleSubmit =  (e) => {
    e.preventDefault()
    setPhoneSubmit(true)
  }

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
    showPhoneSubmit ? setPhoneSubmit(false) : null
  }

  const phoneSubmitPopUp = showPhoneSubmit ? (
      phoneNumber.length === 10 ? <div>
        <div>You've submitted your phone number!</div>
        <div onClick={(e) => setPhoneSubmit(false)}>X</div>
      </div> : <div>Please submit a valid number</div>
  ) : null;

  return (
    <div className='splash'>
      <div className='splash-section one'>
        <nav className='splash-auth'>
          <button className='splash-signin'>SIGN IN</button>
          <button className='splash-signup'>CREATE AN ACCOUNT</button>
        </nav>
        <div className='splash-1'>
          <div className='splash-1-left'>
            <img src="" alt="logo" />
            <h1>Discover and share your favorite beer.</h1>
            <form onSubmit={(e) => handleSubmit(e)} action="">
              <input
                className='phone-number-input'
                onChange={(e) => handleChange(e)}
                placeholder='(999) 999-9999'
                type="text"
                value={phoneNumber} />
              <button>SEND LINK</button>
            </form>
            {phoneSubmitPopUp}
          </div>
          <div className='splash-1-right'>
            <img src={window.triplePhones} alt="triple phones" />
          </div>
        </div>
      </div>
      <div className='splash-section two'>
        <div>search bar</div>
        <div className='image-blurbs'>
          <div className='image-blurb-left'>
            <img src="" alt="left-image" />
            <h4>CHECK IN AND RATE BEER</h4>
            <p>Keep track of what you've tried and what you thought of it by checking in a beer and rating it.</p>
          </div>
          <div className='image-blurb-right'>
            <img src="" alt="right-image" />
            <h4>DRINK NEW BEERS, UNLOCK BADGES</h4>
            <p>Expand your palate by trying new & different beer styles and unlock achievements along the way.</p>
          </div>
        </div>
      </div>
      <div className='splash-section three'>
        <p>splash-three</p>
      </div>
      <div className='splash-section four'>
        <p>splash-four</p>
      </div>
      <div className='splash-section five'>
        <p>splash-five</p>
      </div>
      <div className='splash-section six'>
        <p>splash-six</p>
      </div>
    </div>
  )
}

export default Splash;