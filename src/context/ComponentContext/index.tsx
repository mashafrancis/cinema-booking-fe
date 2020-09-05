import * as React from 'react';

interface IProps {
  children: React.ReactNode;
}

const ComponentContext = React.createContext({
  selectedIndex: 0,
  setSelectedIndex: (_selectedIndex: number) => {},
});

const ComponentProvider = ({ children, ...props }: IProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ComponentContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
        ...props,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

const ComponentConsumer = ComponentContext.Consumer;
export { ComponentProvider, ComponentConsumer, ComponentContext };
