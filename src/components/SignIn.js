import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

const SignIn = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6).required(),
  });
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className='my-4 font-weight-bold .display-4'>Sign In</h1>
          <Form>
            <TextField label='Email' name='email' type='email' />
            <TextField label='password' name='password' type='password' />

            <button className='btn btn-dark mt-3' type='submit'>
              Login
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignIn;
