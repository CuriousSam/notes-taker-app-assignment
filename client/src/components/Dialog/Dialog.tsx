import CloseIcon from '@mui/icons-material/Close';
import { DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { ReactNode } from 'react';
import { DialogueCloseIcon, StyledDialog } from './Dialog.styled';

type Props = {
  open: boolean;
  handleClose: () => void;
  children?: ReactNode;
  dialogActions?: ReactNode;
  title?: ReactNode;
};

const Dialog = ({
  title,
  open,
  handleClose,
  children,
  dialogActions,
}: Props) => {
  return (
    <StyledDialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ m: 0, p: 2 }} id='dialog-title'>
        {title}
      </DialogTitle>
      <DialogueCloseIcon aria-label='close' onClick={handleClose}>
        <CloseIcon />
      </DialogueCloseIcon>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        {dialogActions ? (
          dialogActions
        ) : (
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        )}
      </DialogActions>
    </StyledDialog>
  );
};

export default Dialog;
