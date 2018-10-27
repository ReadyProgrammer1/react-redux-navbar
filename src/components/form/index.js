import React, { Component } from 'react'
import FormField from '../form-field'
import store from '../../config/store'

class Form extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
  }

  handleChange = (e, attr) => {
    this.setState({
      [attr]: e.target.value,
    })
  }

  handleRegister = (e) => {
    e.preventDefault()
    store.dispatch({
      type: 'REGISTER_GUEST',
      payload: {
          guest: this.state.fullName
      }
    })
    //alert(`Thank you ${this.state.fullName} for registering with us!`)
  }

  render() {
    const {fullName, email, password } = this.state

    return <form style={{marginLeft: '100px', marginTop: '50px'}}>
      <h1>Registration (persist user)</h1>
      <FormField 
        attr='fullName'
        type='text'
        label='Full name'
        value={fullName}
        handleChange={this.handleChange}
      />

      <FormField 
        attr='email'
        type='text'
        label='Email'
        value={email}
        handleChange={this.handleChange}
      />
      
      <FormField 
        attr='password'
        type='password'
        label='Password'
        value={password}
        handleChange={this.handleChange}
      />

      <div>
        <button onClick={(e) => this.handleRegister(e)}>Sign up!</button>
      </div>
    </form>
  }
}

export default Form

