import React from 'react';
import Devops from '../App';

const devops = {
  path: '/:workspace/clusters/:cluster/devops/:devops',
  // element: <Devops />,
  children: [
    {
      index: true,
      element: <Devops />,
    },
    {
      path: '*',
      element: <Devops />,
    },
  ],
};

export default [devops];
