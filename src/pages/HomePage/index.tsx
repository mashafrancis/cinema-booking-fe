// react library
import * as React from 'react';

// third party apps
import {AppBar, Box, Button, Tab, Tabs, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import SearchInput from '@components/SearchBox';

// styles
import './HomePage.scss';

// images
import google from '../../assets/images/google.svg';
import HomeHeader from "@components/HomeHeader";
import Modal from "@components/Modal";
import {connect} from "react-redux";
import {loginUser, registerUser} from "../../store/modules/auth";
import User from "../../store/modules/auth/interfaces";
import EmailField from "@components/EmailField";
import PasswordField from "@components/PasswordField";
import {HomePageProps, HomePageState} from "@pages/HomePage/interfaces";
import FormField from "@components/FormField";
import FaceIcon from '@material-ui/icons/Face';
import {ComponentContext} from "@context/ComponentContext";
import {authService} from "@utils/auth";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    zIndex: 100,
  },
  icon: {
    width: '20px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const HomePage = (props: HomePageProps): JSX.Element => {
  const componentContext = React.useContext(ComponentContext);
  const [state, setState] = React.useState<HomePageState>({
    fields: {},
    isLoading: false,
    isValid: true,
    focused: false,
    errors: [],
    showPassword: false,
    value: 0
  });
  const [isAuthModalOpen, showAuthModal] = React.useState<boolean>(false);
  const classes = useStyles();

  const {setOpenSnack, setSnackMessage} = componentContext;

  const handleAuthModal = () => showAuthModal(prevState => !prevState)

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setState({...state, value: newValue});
  };

  const handleInputChange = (e: { value: any; name: any; }) => {
    const {value, name} = e;
    setState({
      ...state,
      [name]: value,
    });
  };

  const fieldStateChanged = (field: keyof HomePageState) => (state: any) => {
    setState({...state, [field]: state.errors.length === 0});
  };

  const handleRegisterLogin = (event: any) => {
    event.preventDefault();
    const {email, password, value} = state;
    const user = {
      name,
      email,
      password,
      strategy: 'local'
    };

    value === 0
      ?
      props.registerUser(user).then(() => {
        setSnackMessage('Account added successfully');
        setOpenSnack(true);
        setState({...state, value: 1})
      })
      :
      props.loginUser(user).then(() => {
        setSnackMessage('Login successfully');
        setOpenSnack(true);
        showAuthModal(false);
      })
  }

  const AuthForm = () => (
    <form className={classes.form} noValidate>
      {state.value === 0 && <FormField
        id="name"
        labelText="Name"
        type="text"
        leadingIcon={<FaceIcon/>}
        aria-describedby="name-helper-text"
        placeholder="Enter Username"
        onStateChanged={(e: any) => {
          fieldStateChanged('name');
          handleInputChange(e);
        }}
        required
      />}
      <EmailField
        id="email"
        label="email"
        placeholder="Enter Email Address"
        onStateChanged={(e: any) => {
          fieldStateChanged('email');
          handleInputChange(e);
        }}
        required
      />
      <PasswordField
        id="password"
        label="password"
        type="password"
        aria-describedby="password-helper-text"
        onStateChanged={(e: any) => {
          fieldStateChanged('password');
          handleInputChange(e);
        }}
        required
        placeholder="Enter Password"
      />
    </form>
  )

  const a11yProps = (index: any) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const ModalHeader = () => (
    <>
      <AppBar position="static">
        <Tabs value={state.value} onChange={handleTabChange}>
          <Tab label="Register" {...a11yProps(0)} />
          <Tab label="Login" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
    </>
  )

  const ModalContent = () => (
    <>
      <TabPanel value={state.value} index={0}>
        {AuthForm()}
      </TabPanel>
      <TabPanel value={state.value} index={1}>
        {AuthForm()}
      </TabPanel>
    </>
  )

  const AuthModal = () => (
    <Modal
      isModalOpen={isAuthModalOpen}
      renderHeader={() => ModalHeader()}
      renderContent={() => ModalContent()}
      onClose={handleAuthModal}
      submitButtonName={state.value === 0 ? "Register" : "Login"}
      onSubmit={handleRegisterLogin}
      onDismiss={handleAuthModal}
    />
  )

  const handleGoogleLogin = () => window.location.replace(process.env.SOCIAL_AUTH_URL as string);
  const handleLogout = () => {
    authService.logoutUser()
    window.location.reload()
  }

  const renderLoginButton = (): JSX.Element => {
    return (
      authService.isAuthenticated() ?
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleLogout}
        >
          Logout
        </Button> :
        <>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleAuthModal}
          >
            Login / Register
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<img className={classes.icon} src={google} alt="logo"/>}
            onClick={handleGoogleLogin}
          >
            Login with Google
          </Button>
        </>
    )
  };

  return (
    <>
      <div className="cover">
        {<HomeHeader button={renderLoginButton()}/>}
        <section id="hero">
          <div className="hero-container">
            <div className="hero-info" data-testid="home-page">
              <h1>Search and book your movie</h1>
              <SearchInput/>
            </div>
          </div>
        </section>
      </div>
      {AuthModal()}
    </>
  );
};

export const mapStateToProps = (state: any) => ({
  isLoading: state.auth.isLoading
})

export const mapDispatchToProps = (dispatch: any) => ({
  registerUser: (user: User) => dispatch(registerUser(user)),
  loginUser: (user: User) => dispatch(loginUser(user))
})

export default connect(null, mapDispatchToProps)(HomePage)
