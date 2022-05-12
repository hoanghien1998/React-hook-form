import React from 'react'
import { Field, reduxForm } from 'redux-form'

let renderCount = 0;
const FormRedux = ({ handleSubmit }) => {

  renderCount ++ ;
  console.log('render redux-form', renderCount);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <div>
          <Field name="name" component="input" type="text" placeholder="Name"/>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'formRedux'
})(FormRedux)
