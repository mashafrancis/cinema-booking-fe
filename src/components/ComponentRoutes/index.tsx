import * as React from 'react';
import { ComponentRoutesProps } from '@components/ComponentRoutes/interfaces';
import HomePage from '@pages/HomePage';
import SingleMoviePage from "@pages/SingleMoviePage";

export const ComponentRoutes: ComponentRoutesProps[] = [
  { component: HomePage },
  { component: SingleMoviePage },
  { component: SingleMoviePage },
];
