import * as React from 'react';

interface IProps {
  target: React.InputHTMLAttributes<any>;
}

export const useFormInput = (initialValue: any) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = ({ target, ...props }: IProps) => setValue(target.value);

  return {
    value,
    onChange: handleChange,
  };
};
