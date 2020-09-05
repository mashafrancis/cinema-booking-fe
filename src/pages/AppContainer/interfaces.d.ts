import * as React from 'react';
import { History } from 'history';

export interface AppContainerProps {
  history?: History;
  component?: React.ReactNode;
}

export interface AppContainerState {
  selectedIndex: number;
  error: any;
  isLoading: boolean;
}
