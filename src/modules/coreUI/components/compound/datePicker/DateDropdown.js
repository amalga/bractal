import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import DatePickerHeader from './DatePickerHeader';

const DropdownContainer = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const Dropdown = styled.div`
  width: 300px;
  height: 350px;
  visibility: visible;
  transform: scaleY(1);
  z-index: 10;  

  left: 0%;

  position: absolute;
  margin-top: 31px; 
  
  background-color: ${props => props.theme.colors.named.white};
  border: solid ${props => props.theme.inputs.borderWidth}px ${props => props.theme.inputs.borderColor};

  box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
`;

const Arrow = styled.div`
  content: "";
  height: 11px;
  width: 11px;
  background: white;
  position: absolute;

  top: 48px;
  left: 50px;
  
  transform: rotate(134deg);
  border-left:  solid ${props => props.theme.inputs.borderWidth}px ${props => props.theme.inputs.borderColor};
  border-bottom: solid ${props => props.theme.inputs.borderWidth}px ${props => props.theme.inputs.borderColor};
  z-index: 1000;
`;

class DateDropdown extends Component {
  // state = {
  //   visible: false,
  //   months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //   days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  //   toDay: new Date(),
  //   selectedDate: this.props.selectedDate,
  //   currentMonth: months[selectedDate.getMonth() + 1],
  //   currentYear: selectedDate.getYear(),
  // };
  state = {
    visible: false,
  };

  onBlur = () => {
    setTimeout(() => this.hide(), 300);
  }
  isShowHideAllowable = () => {
    const currTime = (new Date()).getTime();
    const HAND_OFF_PERIOD = 200;
    let allowed = false;
    if (!this.lastShowHideEventTimestamp) {
      this.lastShowHideEventTimestamp = 0;
    }
    if (currTime - this.lastShowHideEventTimestamp > HAND_OFF_PERIOD) {
      allowed = true;
    }
    // Store timestamp of the show/Hide, to implement
    // handoff checks to handle various corner cases
    // And not handled as state, to have immediate effect
    this.lastShowHideEventTimestamp = currTime;

    return allowed;
  }
  show = () => {
    if (!this.isShowHideAllowable()) {
      return;
    }
    this.setState({
      visible: true,
    });
    if (this.props.onDropdownShown) {
      this.props.onDropdownShown();
    }
  }
  hide = () => {
    if (!this.isShowHideAllowable()) {
      return;
    }
    this.setState({
      visible: false,
    });

    if (this.props.onDropdownHidden) {
      this.props.onDropdownHidden();
    }
  }
  toggle = () => {
    if (this.state.visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  render() {
    const { selectedDate } = this.props;
    // const { visible, months, days, thisDay, selectedDate, currentMonth } = this.state;
    const { visible } = this.state;

    return (
      <DropdownContainer visible={visible}>
        <Arrow />
        <Dropdown >
          <DatePickerHeader />
          <h1 value={selectedDate}>asjdbasu</h1>
        </Dropdown>
      </DropdownContainer>
    );
  }
}

DateDropdown.defaultProps = {
  onDropdownShown: null,
  onDropdownHidden: null,
  selectedDate: null,
};

DateDropdown.propTypes = {
  selectedDate: PropTypes.string,
  // onItemSelected: PropTypes.func.isRequired,
  onDropdownShown: PropTypes.func,
  onDropdownHidden: PropTypes.func,
};
export default DateDropdown;
