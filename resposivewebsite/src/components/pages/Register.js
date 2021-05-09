import React from 'react';
import {useFormik} from "formik";
import * as yup from "yup";
import { firstname, surname, email, level  } from "../../utils/validation";
import {getData} from '../../services/getData'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { useHistory } from "react-router-dom";



const validationSchema = yup.object({
  firstname,
  surname,
  email,
  level
});



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://mk0digitallearn7ttjx.kinstacdn.com/wp-content/uploads/2018/01/online-education.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // color: 'f2f2f2'
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      surname: "",
      email: "",
      level: ""
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("values", values);
      try {
        const result = await getData(
          "https://opna.herokuapp.com/subscriber/create/",
          values
        );
        console.log(result?.data);
        formik.handleReset();
        history.push("/")
      } catch ({ response }) {
        if (response) {
          console.log(response.data.non_field_errors[0]);
        } else {
          console.log("Something went wrong!");
        }
      }
  },
  })

  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Subscribe
          </Typography>
          <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="Name"
              name="firstname"
              autoComplete="firstname"
              autoFocus
              value={formik.values.firstname}
              onChange={formik.handleChange}
              error={formik.touched.firstname && Boolean(formik.errors.firstname)}
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="surname"
              label="Surname"
              name="surname"
              autoComplete="surname"
              autoFocus
              value={formik.values.surname}
              onChange={formik.handleChange}
              error={formik.touched.surname && Boolean(formik.errors.surname)}
              helperText={formik.touched.surname && formik.errors.surname}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
               {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="level"
              label="Level"
              name="level"
              autoComplete="level"
              autoFocus
              value={formik.values.level}
              onChange={formik.handleChange}
              error={formik.touched.level && Boolean(formik.errors.level)}
              helperText={formik.touched.level && formik.errors.level}
            /> */}
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="age"
              label="Age"
              type="age"
              id="age"
              autoComplete="current-age"
            /> */}
            
            
            <FormControl  
            fullWidth 
            className={classes.formControl}
            
            >
              <InputLabel  htmlFor="grouped-select">Level</InputLabel>
              <Select defaultValue="" id="level" name="level"
              value={formik.values.level}
              onChange={formik.handleChange}
              error={formik.touched.level && Boolean(formik.errors.level)}
              helperText={formik.touched.level && formik.errors.level}
              >
                
                <MenuItem value="A1">A1</MenuItem>
                <MenuItem value="A2">A2</MenuItem>
                <MenuItem value="B1">B1</MenuItem>
                <MenuItem value="B2">B2</MenuItem>
                <MenuItem value="C1">C1</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
            >
              Subscribe
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}