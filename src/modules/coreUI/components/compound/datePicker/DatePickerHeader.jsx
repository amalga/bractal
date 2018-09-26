import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import RoundIcon from '~/modules/coreUI/components/basic/RoundIconButton';

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;

  background-color: ${props => props.theme.colors.named.white};
  border-bottom: solid ${props => props.theme.inputs.borderWidth}px ${props => props.theme.inputs.borderColor};
`;

const DatePickerHeader = ({
  month, year, onPrevClick, onNextClick,
}) => {

  return (
    <React.Fragment>
      <HeaderContainer>
        <RoundIcon
          iconName="far fa-chevron-left"
          onClick={onPrevClick}
        />
        <p>{month} {year}</p>
        <RoundIcon
          iconName="far fa-chevron-right"
          onClick={onNextClick}
        />
      </HeaderContainer>
    </React.Fragment>
  );
};

DatePickerHeader.PropTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
};

export default DatePickerHeader;
