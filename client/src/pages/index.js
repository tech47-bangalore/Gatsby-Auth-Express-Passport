import React, { Component } from 'react';
import { css } from 'react-emotion';

const topnav=css`
    background: #000099;
    overflow: hidden;
    height:68px;
    
`

const buttonposition=css`
    float:right;
    margin:21px 35px 35px;
`
const formborder=css`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
`
class Logincontrol extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false, name:""};
}

handleLoginClick() {
    this.setState({ isLoggedIn: true });
}

handleLogoutClick() {
    this.setState({ isLoggedIn: false });
}
fetchData = (event) => {
  event.preventDefault();

  console.log('Fetchdata called');



  const userdata = {
      name:this.state.name,
      password: event.target.pswrd.value
  };

  /*fetch('http://localhost:3000/login', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(userdata)
  })
      .then(res => res.json())
      .then(json => console.log(json));*/
      this.handleLoginClick();
      console.log(userdata);
}


  render() {
    const isLoggedIn = this.state.isLoggedIn;
        return (

              (isLoggedIn && this.state.name !=="")?(
                <LogoutButton handleLogoutClick={this.handleLogoutClick} name ={this.state.name}/>
               ):
                (<div>
                    <nav className={topnav}>
                    <button className={buttonposition}>Login</button>
                    </nav>
                    <form  className={formborder} onSubmit={this.fetchData}>
                        <label>Name </label>
                    <input type="text" placeholder="Enter Username" name="uname" value={this.state.name} onChange= {(event) => {this.setState({ name:event.target.value})} } required></input>
                    <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" name="pswrd" required></input>
                    </div>
                <   input type="submit" value="Login" />
                    </form>   
                </div>
                
                
                
               ))
  }
}


function LogoutButton( props){
  return((
    <div>
        <nav className={topnav}>
        <button className={buttonposition} onClick={props.handleLogoutClick}>Logout</button>
        </nav>
    <div>
      <h1>Welcome {props.name }</h1>
      <button onClick={props.handleLogoutClick} >Logout</button>
      </div>
    </div>             )
  )
}


export default Logincontrol;


