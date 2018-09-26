import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Row } from '~/modules/coreUI/components/layouts/helpers/LinearLayout';
// import Spacer from '~/modules/coreUI/components/layouts/helpers/Spacer';

import CustomSelectButton from '~/modules/coreUI/components/basic/select/CustomSelectButton';

import DateDropdown from './DateDropdown';

const RelativePosition = styled(Row)`
  width: ${props => props.width || '100%'};

  position:relative;

  box-sizing: border-box;
`;

class DatePicker extends Component {
  // dateValue: null,

  onDropdownShown = () => {
    this.setState({
      dropdownShown: true,
    });
  }
  onDropdownHidden = () => {
    this.setState({
      dropdownShown: false,
    });
  }

  showDropdown = () => {
    this.dateRef.show();
  }

  hideDropdown = () => {
    this.dateRef.hide();
  }

  toggleDropdown = () => {
    this.dateRef.toggle();
  }

  render() {
    const {
      width,
      // options,
      // showInput,
      // placeholder,
      // selectButtonRatio,
      // theme,
    } = this.props;

    const {
      dateValue,
      dropdownShown,
    } = this.state;

    return (
      <React.Fragment>
        <RelativePosition centerAligned width={width}>
          <CustomSelectButton
            ref={(ref) => { this.buttonRef = ref; }}
            actAsInFocus={dropdownShown}
            onMouseDown={this.toggleDropdown}
            inputValue={dateValue}
            placeholder="select date"
          />
          <DateDropdown
            ref={(ref) => { this.dateRef = ref; }}
            dateValue={dateValue}
          />
        </RelativePosition>
      </React.Fragment>
    );
  }
}

DatePicker.defaultProps = {
  placeholder: 'Select date',
  selectButtonRatio: 30,
  dateValue: new Date(),
};

DatePicker.propTypes = PropTypes.shape({
  width: PropTypes.string,
  showInput: PropTypes.bool.isRequired,
  selectButtonRatio: PropTypes.string,
  placeholder: PropTypes.string,
  dateValue: PropTypes.dateValue,
}).isRequired;


DatePicker.defaultProps = {
  placeholder: 'Select',
  selectButtonRatio: 30,
};

export default DatePicker;
