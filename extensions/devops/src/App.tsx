import * as React from 'react';
import WujieReact from 'wujie-react';
import { useLocation } from 'react-router-dom';

const Devops = () => {
  const location = useLocation();
  const url = `//${window.location.host}/consolev3${location.pathname}${location.search}`;
  // @ts-ignore
  return <WujieReact width="100%" height="100%" name="consolev3" url={url} sync={false} />;
};

export default Devops;
