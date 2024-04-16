import styled from 'styled-components';
const setBgColor = (props) => {
  if (props.useronline) {
    return 'green'
  } else {
    return 'red'
  }
}
export const StyledFriendsList = styled.li`
padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  color: black;
  width: 300px;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
    & span::before {
      content: "";
      display: block;
      background: ${props =>
        props.useronline === "true" ? "green" : "red"};
      border-radius: 50%;
      width: 20px;
      height: 20px;
    }
`;

