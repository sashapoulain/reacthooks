import React, { Component } from 'react'

export default class FormDemo extends Component {
   state = {userName: 'şeyma'}
   onChangeHandler = (event) => {
      this.setState({userName:event.target.value})
   }
  render() {
    return (
      <div>
         <form>
            <input onChange={this.onChangeHandler} type='text'/>
            <h3>User name is {this.state.userName}</h3>
         </form>
      </div>
    )
  }
}
