import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class FormDemo2 extends Component {
   state = { email: '', password: '', city: '', description: '' }

   handleChange = (event) => {
      let name = event.target.name
      let value = event.target.value
      this.setState({ [name]: value })
   }

   handleSubmit = (event) => {
      event.preventDefault();
      alert(`${this.state.city}, ${this.state.email}
      `)
      
   }
   render() {
      return (
         <div>
            <Form onSubmit={this.handleSubmit}>
               <FormGroup>
                  <Label for='email'>Email</Label>
                  <Input type='email' name='email' id='email' placeholder='enter email' onChange={this.handleChange} />
               </FormGroup>

               <FormGroup>
                  <Label for='password'>Password</Label>
                  <Input type='password' name='password' id='password' placeholder='enter password' onChange={this.handleChange} />
               </FormGroup>

               <FormGroup>
                  <Label for='description'>Description</Label>
                  <Input type='textarea' name='description' id='description' placeholder='enter description' onChange={this.handleChange} />
               </FormGroup>

               <FormGroup>
                  <Label for='city'>City</Label>
                  <Input type='select' name='city' id='city' onChange={this.handleChange}>
                     <option>İzmir</option>
                     <option>Trabzon</option>
                     <option>Çanakkale</option>
                     <option>Hatay</option>
                     <option>Diyarbakır</option>
                  </Input>
               </FormGroup>
               <Button type='submit'>Save</Button>
            </Form>
         </div>
      )
   }
}
