import React from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import createToast from './ToastFactory';
import AlertTypes from './AlertTypes';
import ToastMessage from './ToastMessage';

const slidein = keyframes`
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;
const slideout = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
`;

const ToastStyle = styled.div`
.Toastify__toast-container {
  z-index: 9999;
  position: fixed;
  width: 100%;
  ${props => !props.topFullWidth && `
    display: flex;
    justify-content: flex-end;
    bottom: 0;
  `}
  box-sizing: border-box;
  color: ${props => props.theme.colors.named.white};
  opacity: ${props => props.opacity || '0.85'};
  animation-duration: 1s;
  animation-name: ${slidein};
}

.Toastify__toast.exit {
  animation-duration: 1s;
  animation-name: ${slideout};
}

.Toastify__toast {
  position: relative;
  min-height: ${props => 5 * props.theme.new.spacer}px;
  padding: ${props => props.theme.new.paddings.xSmall}px;
  ${props => !props.topFullWidth && `
    margin: ${2 * props.theme.new.spacer}px;
  `}
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
}

.Toastify__toast-body {
  margin: auto ${props => props.theme.new.paddings.medium}px;
  flex: 1;
  font-size: ${props => props.fontSize || props.theme.new.fonts.sizes.md}px;
}
.Toastify__close-button {
  display: flex;
  position: relative;
  align-self: flex-start;
  color: ${props => props.theme.colors.named.white};
  font-weight: bold;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  font-size: ${props => 1.2 * props.fontSize || 18}px;
}
.Toastify__close-button:hover, .Toastify__close-button:focus {
  opacity: 1;
}

.Toastify__toast--default {
  background: ${props => props.color || props.theme.new.alertTypes.colors.default};
}
.Toastify__toast--info {
  background: ${props => props.color || props.theme.new.alertTypes.colors.info};
}
.Toastify__toast--success {
  background: ${props => props.color || props.theme.new.alertTypes.colors.success};
}
.Toastify__toast--warning {
  background: ${props => props.color || props.theme.new.alertTypes.colors.warning};
}
.Toastify__toast--error {
  background: ${props => props.color || props.theme.new.alertTypes.colors.error};
}
`;
// TODO Sarah test acceptance of component in props to have alert content
const AlertToast = (props) => {
  const alertData = {
    messageText: props.messageText,
    type: props.type,
    icon: props.icon,
    buttonText: props.buttonText,
    buttonAction: props.buttonAction,
    color: props.color,
    fontSize: props.fontSize,
  };
  createToast(alertData, props.component || ToastMessage);

  return (
    <ToastStyle
      topFullWidth={props.topFullWidth}
      color={props.color}
      fontSize={props.fontSize}
      opacity={props.opacity}
    >
      <ToastContainer
        autoClose={props.autoClose}
        newestOnTop={false}
        closeOnClick={false}
        hideProgressBar
        draggable={false}
      />
    </ToastStyle>
  );
};

AlertToast.propTypes = PropTypes.shape({
  messageText: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(AlertTypes)),
  autoClose: PropTypes.oneOfType([Number, Boolean]),
  icon: PropTypes.shape,
  buttonText: PropTypes.string,
  buttonAction: PropTypes.func,
}).isRequired;

export default AlertToast;