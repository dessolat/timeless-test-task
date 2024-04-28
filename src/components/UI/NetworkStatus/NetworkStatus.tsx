import cl from './NetworkStatus.module.scss';

import clsx from 'clsx';

type Props = {
  isLoading: boolean;
  error: string | null;
};

const NetworkStatus = ({ isLoading, error }: Props) => {
  const classes = clsx({
    [cl.loading]: isLoading,
    [cl.error]: error && !isLoading
  });

  return <p className={classes}>{isLoading ? 'Loading...' : error ? error : ''}</p>;
};

export default NetworkStatus;
