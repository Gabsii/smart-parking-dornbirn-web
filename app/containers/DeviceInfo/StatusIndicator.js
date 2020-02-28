import styled from 'styled-components';

const DeviceStatus = styled.span`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;

  background-color: ${props => (props.isParked ? '#c1352e' : '#09ae41')};
`;

export default DeviceStatus;
