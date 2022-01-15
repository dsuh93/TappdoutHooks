import React from 'react';
import { connect } from 'react-redux';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      showPhoneSubmit: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ showPhoneSubmit: true })
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ phoneNumber: e.target.value })
  }


  render() {
    let { phoneNumber } = this.state;
    return (
      <div className='splash'>
        <div className='splash-section 1'>
          <nav className='splash-auth'>
            <button className='splash-signin'>SIGN IN</button>
            <button className='splash-signup'>CREATE AN ACCOUNT</button>
          </nav>
          <div className='splash-1-1'>
            <div>
              <img src="" alt="logo" />
              <h1>Discover and share your favorite beer.</h1>
              <form onSubmit={(e) => this.handleSubmit(e)} action="">
                <input onChange={(e) => this.handleChange(e)} type="text" value={phoneNumber} />
                <button>SEND LINK</button>
              </form>
            </div>
            <div></div>
          </div>
        </div>
        <div className='splash-section 2'>
          <p>splash-2</p>
        </div>
        <div className='splash-section 3'>
          <p>splash-3</p>
        </div>
        <div className='splash-section 4'>
          <p>splash-4</p>
        </div>
        <div className='splash-section 5'>
          <p>splash-5</p>
        </div>
        <div className='splash-section 6'>
          <p>splash-6</p>
        </div>
      </div>
    )
  }
}

const mSTP = (state, ownProps) => {

  return {}
}
const mDTP = (dispatch, ownProps) => {

  return {}
}



export default connect(mSTP, mDTP)(Splash)