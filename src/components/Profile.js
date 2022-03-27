import React from 'react';
import FormRedux from './FormRedux';

const Profile = () => {
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