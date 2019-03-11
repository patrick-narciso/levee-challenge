import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const buttonProps = { width: String };
const ButtonCustom = styled(Button, buttonProps)`
  width: ${props => props.width};
  color: #00c662 !important;
  border-color: #00c662 !important;
`;

export default ButtonCustom;