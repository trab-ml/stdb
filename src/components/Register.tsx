import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), 'false, failed'], 'Passwords must match'),
});

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register: FC = () => {
  const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="form-container">
      <h1>Sign up</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SignupSchema}>
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="form-field">
              <Field name="firstName" as={TextField} label="First Name" variant="outlined" fullWidth />
              <ErrorMessage name="firstName">{(msg) => <div className="error">{msg}</div>}</ErrorMessage>
            </div>
            <div className="form-field">
              <Field name="lastName" as={TextField} label="Last Name" variant="outlined" fullWidth />
              <ErrorMessage name="lastName">{(msg) => <div className="error">{msg}</div>}</ErrorMessage>
            </div>
            <div className="form-field">
              <Field name="email" as={TextField} label="Email" variant="outlined" fullWidth />
              <ErrorMessage name="email">{(msg) => <div className="error">{msg}</div>}</ErrorMessage>
            </div>
            <div className="form-field">
              <Field name="password" as={TextField} label="Password" variant="outlined" type="password" fullWidth />
              <ErrorMessage name="password">{(msg) => <div className="error">{msg}</div>}</ErrorMessage>
            </div>
            <div className="form-field">
              <Field
                name="confirmPassword"
                as={TextField}
                label="Confirm Password"
                variant="outlined"
                type="password"
                fullWidth
              />
              <ErrorMessage name="confirmPassword">
                {(msg) => <div className="error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-field">
              <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Sign Up'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;