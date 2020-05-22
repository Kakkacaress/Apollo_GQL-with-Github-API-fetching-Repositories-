import styled from 'styled-components';
import propTypes from 'prop-types';
const Button = styled.button`;
 background-color: gold;
 padding: 10px;
 width: auto;
 border-radius: 10px;
color: ${props => props.txtColor}
`;
Button.propTypes = {
    onClick: propTypes.func.isRequired,
    txtColor: propTypes.string
};

Button.defaultProps = {
 onClick: ()=> null,
 txtColor: 'red'
};

export default Button