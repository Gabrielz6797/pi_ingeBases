import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

export const AccountProfileDetails = ({user, ...props}) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: user.Email,
      firstName: user.FirstName,
      surname: user.LastName,
      secondSurname: user.LastName2,
      identification: user.Identification,
      phone: user.Phone,
      country: user.Country,
      state: user.State,
      city: user.City,
      address: user.Address,
      zipCode: user.ZipCode,
      password: ''
    },
    validationSchema: Yup.object({
      phone: Yup
        .string()
        .min(8)
        .max(8)
        .required(
          'Phone number is required'),
      country: Yup
        .string()
        .max(20),
      state: Yup
        .string()
        .max(50),
      city: Yup
        .string()
        .max(50),
      address: Yup
        .string()
        .max(255),
      zipCode: Yup
        .string()
        .max(5, 'Zip Code is a 5 digits number')
        .min(5, 'Zip Code is a 5 digits number'),
      password: Yup
        .string()
        .max(255)
        .min(8, 'Password must be at least 8 characters long'),
    }),
    onSubmit: values => {
      var data = {
        Identification: user.Identification,
        Email: values.email,
        Password: values.password,
        Country: values.country,
        State: values.state,
        City: values.city,
        ZipCode: values.zipCode,
        Address: values.address,
        Phone: values.phone
      };
      // alert(JSON.stringify(data, null, 2));
      axios.put('https://localhost:7150/api/account', data).then((response) => {
        alert("User data updated successfully");
        router.push('/account');
      });
    }
  });

  return (
    <form
      // autoComplete="off"
      // noValidate
      // {...props}
      onSubmit={formik.handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="Edit your profile."
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              {/* <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="FirstName"
                onChange={handleChange}
                required
                value={user.FirstName}
                variant="outlined"
              /> */}
              <TextField
                fullWidth
                label="First Name"
                margin="none"
                value={formik.values.firstName}
                disabled={true}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Surname"
                margin="none"
                value={formik.values.surname}
                disabled={true}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Secon Surname"
                margin="none"
                value={formik.values.secondSurname}
                disabled={true}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              {/* <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="none"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                variant="outlined"
              /> */}
              <TextField
                fullWidth
                label="Email"
                margin="none"
                value={formik.values.email}
                disabled={true}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.password && formik.errors.password)}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="Change Password"
                margin="none"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                fullWidth
                helperText={formik.touched.phone && formik.errors.phone}
                label="Phone"
                margin="none"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.country && formik.errors.country)}
                fullWidth
                helperText={formik.touched.country && formik.errors.country}
                label="Country"
                margin="none"
                name="country"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.country}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              {/* <TextField
                error={Boolean(formik.touched.state && formik.errors.state)}
                fullWidth
                helperText={formik.touched.state && formik.errors.state}
                label="Select State"
                name="State"
                onChange={formik.handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={formik.values.state}
                variant="outlined"
              > 
              {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              */}
              <TextField
                error={Boolean(formik.touched.state && formik.errors.state)}
                fullWidth
                helperText={formik.touched.state && formik.errors.state}
                label="State"
                margin="none"
                name="state"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.state}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.city && formik.errors.city)}
                fullWidth
                helperText={formik.touched.city && formik.errors.city}
                label="City"
                margin="none"
                name="city"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.city}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.zipCode && formik.errors.zipCode)}
                fullWidth
                helperText={formik.touched.zipCode && formik.errors.zipCode}
                label="Zip Code"
                margin="none"
                name="zipCode"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.zipCode}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.address && formik.errors.address)}
                fullWidth
                helperText={formik.touched.address && formik.errors.address}
                label="Address"
                margin="none"
                name="address"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.address}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            disabled={formik.isSubmitting}
            type="submit"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};