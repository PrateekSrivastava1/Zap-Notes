import React from 'react';
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
import Sc from "./images/Screenshot.png";
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
        backgroundImage: `url(${Sc})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'left',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInSide(props) {
    const classes = useStyles();
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

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
                        Sign in
          </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="text"
                            value={email}
                            label="Email Address"
                            autoComplete="email"
                            autoFocus 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>{emailError}</p>
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="text"
                            value={password}
                            label="Password"
                            autoFocus 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p>{passwordError}</p>
                        <div>
                           { hasAccount ? (
                               <>
                               <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleLogin}
                                >Sign In</Button>
                               <p>
                                     Don't have an account ?
                                     <span onClick={() => setHasAccount(!hasAccount)} >Sign Up</span> 
                                 </p>
                               </>
                           ) : (
                            <>
                            <Button
                             type="submit"
                             fullWidth
                             variant="contained"
                             color="primary"
                             className={classes.submit} 
                             onClick={handleSignup}
                             >Sign Up</Button>
                             <p>
                                     Have an account ?
                                     <span onClick={() => setHasAccount(!hasAccount)} >Sign In</span> 
                                 </p>
                            </>
                           )}
                        </div>
                        <Box mt={5}>
                            {/* <Copyright /> */}
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
