import * as React from 'react';

// third party apps
import FormField from '@components/FormField';
import EmailIcon from '@material-ui/icons/Email';
import { validate } from 'isemail';

// interfaces
import { EmailFieldProps } from '@components/EmailField/interfaces';

const EmailField: React.FunctionComponent<EmailFieldProps> = (props) => {
  const { type, validator, ...restProps } = props;

  const validateEmail = (value: any) => {
    if (!validate(value)) {
      throw new Error('Email is invalid');
    }
  };

  return (
    <FormField
      labelText="Email"
      type="text"
      leadingIcon={<EmailIcon />}
      aria-describedby="email-helper-text"
      required
      validator={validateEmail}
      {...restProps}
    />
  );
};

export default EmailField;
