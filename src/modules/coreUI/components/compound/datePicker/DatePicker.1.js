import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Row } from '~/modules/coreUI/components/layouts/helpers/LinearLayout';
// import Spacer from '~/modules/coreUI/components/layouts/helpers/Spacer';

import SelectButton from '~/modules/coreUI/components/basic/select/CustomSelectButton';

import DateDropdown from './DateDropdown';

const RelativePosition = styled(Row)`
  width: ${props => props.width || '100%'};

  position:relative;

  box-sizing: border-box;
`;

class DatePicker extends Component {
  // dateValue: null,
  state = {
    inputValue: null,
    dropdownShown: false,

  }

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
      // dateValue,
      dropdownShown,
      inputValue,
    } = this.state;

    return (
      <React.Fragment>
        <RelativePosition centerAligned width={width}>
          <SelectButton
            ref={(ref) => { this.buttonRef = ref; }}
            actAsInFocus={dropdownShown}
            onMouseDown={this.toggleDropdown}
            inputValue={inputValue}
            placeholder="select date"
          />
          <DateDropdown
            ref={(ref) => { this.dateRef = ref; }}
          />
        </RelativePosition>
      </React.Fragment>
    );
  }
}

DatePicker.defaultProps = {
  placeholder: 'Select date',
  selectButtonRatio: 30,
};

DatePicker.propTypes = PropTypes.shape({
  width: PropTypes.string,
  showInput: PropTypes.bool.isRequired,
  selectButtonRatio: PropTypes.string,
}).isRequired;

export default DatePicker;
