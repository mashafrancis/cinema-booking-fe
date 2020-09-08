import * as React from 'react';

// components
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';

// interfaces
import {ModalProps} from '@components/Modal/interfaces';

// styles
import './Modal.scss'

const Modal = (props: ModalProps): JSX.Element => {
  const {
    isModalOpen,
    renderContent,
    fullScreen,
    onClose,
    renderHeader,
    submitButtonName,
    onSubmit,
    onDismiss,
  } = props;

  return (
    <Dialog
      open={isModalOpen}
      fullScreen={fullScreen}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title">
        <div className="headline-3 modal-header">
          {renderHeader()}
        </div>
      </DialogTitle>
      <DialogContent>
        {renderContent()}
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onDismiss}>Dismiss</Button>
        <button
          className="mdc-button big-round-corner-button mdc-button--raised"
          onClick={onSubmit}>
            <span className="mdc-button__label">
              {submitButtonName}
            </span>
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
