import MuiAlert, { AlertColor } from '@mui/material/Alert';
import MuiAlertTitle from '@mui/material/AlertTitle';
import { ReactNode } from 'react';

type Props = {
  severity: AlertColor | undefined;
  title: ReactNode;
  description: ReactNode;
};

const Alert = ({ severity, title, description }: Props) => {
  return (
    <MuiAlert sx={{ mt: 2 }} severity={severity}>
      <MuiAlertTitle>{title}</MuiAlertTitle>
      {description}
    </MuiAlert>
  );
};

export default Alert;
