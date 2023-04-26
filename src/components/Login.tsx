import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ display: 'flex', flexDirection: isMobileView ? 'column' : 'row', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1, mr: isMobileView ? 0 : 2 }}>
              <Field
                name="email"
                as={TextField}
                label="Email Address"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Box>
            <Box sx={{ flexGrow: 1, mr: isMobileView ? 0 : 2 }}>
              <Field
                name="password"
                type="password"
                as={TextField}
                label="Password"
                fullWidth
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Sign In
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
