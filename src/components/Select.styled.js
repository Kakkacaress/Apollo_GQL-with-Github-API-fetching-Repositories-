// import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Select = styled.select`
  // border: 1px solid cyan;
  option{
    background-color: red;
    width: 100px;
    :first-child {
     color: yellow;
    }
  }
`;
Select.PropTypes = {

};

export default Select;