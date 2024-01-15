import React, { Component } from 'react'

export default class FormDemo extends Component {
   state = {userName: 'şeyma', city: 'İzmir'}
   onChangeHandler = (event) => {
      // this.setState({userName:event.target.value})
      let name = event.target.name;
      let value = event.target.value;
      this.setState({[name]:value})

   }
   onSubmitHandler = (ev) => {
      ev.preventDefault();
      alert(this.state.userName)
   }
  render() {
    return (
      <div>
         <form onSubmit={this.onSubmitHandler}>
            <input name='userName' onChange={this.onChangeHandler} type='text'/>
            <h3>User name is {this.state.userName}</h3>



            <input name='city' onChange={this.onChangeHandler} type='text'/>
            <h3>the City is {this.state.city}</h3>

            <input type='submit' value='submit'/>
         </form>
      </div>
    )
  }
}
