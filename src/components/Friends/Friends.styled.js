import styled from 'styled-components';


export const StyledIsOnline = styled.p`
color: ${({status})=>{
if (status === 'true') {
  return 'green'
} else  {
  return 'red'
}
}};
`

export const StyledFriendsList = styled.li`
padding: 20px;
  background-color: #fff;
  border-radius: 5px;
    border: 1px solid black;
  color: black;
  width: 150px;
  margin-bottom: 10px;
  display: flex;
    flex-direction: column;
  gap: 10px;
  align-items: center;
`;