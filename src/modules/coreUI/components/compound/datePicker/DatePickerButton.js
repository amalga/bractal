// import React, { Component } from 'react';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Row, Column } from '~/modules/coreUI/components/layouts/helpers/LinearLayout';

// import Spacer from '~/modules/coreUI/components/layouts/helpers/Spacer';
// import Icon from '~/modules/coreUI/components/basic/Icon';

// const getBorderColor = (props, forceFocusMode) => {
//   if (forceFocusMode || props.actAsInFocus) {
//     return props.theme.colors.primary;
//   }

//   return props.theme.inputs.borderColor;
// };

// const DropdownIconContainer = styled(Column)`
//   position: absolute;
//   top: 0px;
//   bottom: 0px;
//   right: ${props => props.dropIconDistanceFromRight || props.theme.paddings.xLarge}px;  

//   justify-content: center;
  
//   cursor: pointer;

//   i {
//     line-height: 1;
//     font-size: 8px;

//     color: ${props => getBorderColor(props)};
//   }
// `;

// const Button = styled.button`
//   display: flex;
//   position: relative;  
//   overflow: hidden;
//   width: 100%;
//   height: ${props => props.theme.paddings.xxxxxLarge + 4}px;

//   align-items: center;

//   font-size: ${props => props.fontSize || props.theme.inputs.fontSize}px;

//   color: ${props => (props.label ? props.theme.inputs.color : props.theme.inputs.placeholderColor)};
//   background-color: white;

//   padding-left: ${props => props.theme.paddings.large}px;
//   padding-right: ${props => props.theme.paddings.large}px;
//   white-space: nowrap;

//   text-align: left;
//   text-overflow: ellipsis; 

//   outline: none;
//   border: solid ${props => props.theme.inputs.borderWidth}px ${props => getBorderColor(props)};
//   border-radius:${props => props.theme.inputs.radius}px;
//   border-top-right-radius:${props => props.rightBorderRadius || props.theme.inputs.radius};
//   border-bottom-right-radius:${props => props.rightBorderRadius || props.theme.inputs.radius};
  
//   cursor: pointer;   

//   img {
//     width: 20px;
//     height: 20px;

//     margin-top: 1px;
//     margin-left: -2px;
//     margin-right: 2px;

//     border-radius: 50%;    
//   }

//   &:focus {
//     border: solid ${props => props.theme.inputs.borderWidth}px ${props => getBorderColor(props, true)};
//   }

//   &:focus i {
//     color: ${props => getBorderColor(props, true)};
//   }
// `;

// const ButtonContainer = styled(Row)`
//   position: relative;  
//   width:${props => (props.width ? props.width : '100%')};  

//   align-items: stretch;
// `;


// class DatePickerButton extends Component {
//   state = {  }
//   render() { 
//     return ( 

//      );
//   }
// }
 
// export default DatePickerButton;
