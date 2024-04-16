import styled from 'styled-components';

export const TrasactionHistoryItemStyled = styled.tr`
  td {
    background: ${props => {
      const newProps = props.index + 1;
      return newProps % 2 !== 0
        ? '#fff'
        : 'rgba(234,235,236,0.93)'
    }};
    color: #86898d;
    padding: 20px 100px;
    text-align: center;
  }
`
