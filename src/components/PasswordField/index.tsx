import * as React from 'react';

// third party apps
import FormField from '@components/FormField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import * as zxcvbn from 'zxcvbn';

// interfaces
import {
  PasswordFieldProps,
  PasswordFieldState
} from '@components/PasswordField/interfaces';

// styles
import '@components/PasswordField/PasswordField.scss';

class PasswordField extends React.Component<PasswordFieldProps, PasswordFieldState> {
  private readonly minStrength: number;
  private readonly thresholdLength: number;

  constructor(props: Readonly<PasswordFieldProps>) {
    super(props);
    this.state = {
      password: '',
      strength: 0,
      isPasswordHidden: true,
    };
    const {
      minStrength = 3,
      thresholdLength = 7,
    } = props;
    this.minStrength = typeof minStrength === 'number' ? Math.max(Math.min(minStrength, 4), 0) : 3;
    this.thresholdLength = typeof thresholdLength === 'number' ? Math.max(thresholdLength, 7) : 7;
  }

  validatePasswordStrong = (value: string | any[]) => {
    if (value.length <= this.thresholdLength) {
      throw new Error('Password is short');
    }
    if (zxcvbn(value as string).score < this.minStrength) {
      throw new Error('Password is weak');
    }
  }

  stateChanged = (state: { value: any; }) => {
    this.setState({
      password: state.value,
      strength: zxcvbn(state.value).score,
    }, () => this.props.onStateChanged(state));
  }

  toggleHidePassword = () => this.setState(prevState => ({
    ...prevState,
    isPasswordHidden: !prevState.isPasswordHidden,
  }))

  render() {
    const {isPasswordHidden} = this.state;

    return (
      <FormField
        id="password"
        labelText="Password"
        type={isPasswordHidden ? 'password' : 'text'}
        onLeadingIconSelect={this.toggleHidePassword}
        onStateChanged={this.stateChanged}
        leadingIcon={isPasswordHidden ? <VisibilityIcon/> : <VisibilityOffIcon/>}
        aria-describedby="password-helper-text"
        required
        validator={this.validatePasswordStrong}
      />
    );
  }
}

export default PasswordField;
