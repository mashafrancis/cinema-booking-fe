import * as React from 'react';

interface IProps {
  children: React.ReactNode;
}

const ComponentContext = React.createContext({
  selectedIndex: 0,
  setSelectedIndex: (_selectedIndex: number) => {},
  setOpenSnack: (_open: boolean) => {},
  openSnack: false,
  handleClose: (e: any) => {},
  setSnackMessage: (_message: string) => {},
  snackMessage: ''
});

const ComponentProvider = ({ children, ...props }: IProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [openSnack, setOpenSnack] = React.useState<boolean>(false);
  const [snackMessage, setSnackMessage] = React.useState<string>('');

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };

  return (
    <ComponentContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
        openSnack,
        setOpenSnack,
        handleClose,
        snackMessage,
        setSnackMessage,
        ...props,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

const ComponentConsumer = ComponentContext.Consumer;
export { ComponentProvider, ComponentConsumer, ComponentContext };
