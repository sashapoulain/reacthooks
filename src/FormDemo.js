import React, { Component } from 'react'

export default class FormDemo extends Component {
   state = {userName: 'şeyma'}
   onChangeHandler = (event) => {
      this.setState({userName:event.target.value})
   }
   onSubmitHandler = (ev) => {
      ev.preventDefault();
      alert(this.state.userName)
   }
  render() {
    return (
      <div>
         <form onSubmit={this.onSubmitHandler}>
            <input onChange={this.onChangeHandler} type='text'/>
            <h3>User name is {this.state.userName}</h3>
            <input type='submit' value='submit'/>
         </form>
      </div>
    )
  }
}
