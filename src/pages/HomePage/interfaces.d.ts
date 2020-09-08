export interface HomePageProps {
  loginUser: (user) => Promise<any>
  registerUser: (user) => Promise<any>
  isLoading: boolean
}

export interface HomePageState {
  fields: {
    [key: string]: string | number | any
  };
  isLoading: boolean;
  isValid: boolean;
  focused: boolean;
  errors: any;
  showPassword?: boolean;
  password?: string;
  email?: string;
  name?: string;
  value: number;
}
