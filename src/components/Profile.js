import React from 'react';
import _get from 'lodash/get';
import { shallowEqual, useSelector } from 'react-redux';

import FormRedux from './FormRedux';

const Profile = () => {
  const formVal = useSelector(
    (state) => _get(state.form, 'formRedux.values', {}),
    shallowEqual
  );

  console.log('formVal', formVal);

  const handleSubmit = (value) => {
    console.log('data form redux', value);
  }
  return (
    <>
    <h1>Redux form</h1>
      <FormRedux onSubmit={handleSubmit} />
    </>
  );

};

export default Profile;