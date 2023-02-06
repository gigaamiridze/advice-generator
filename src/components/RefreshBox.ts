import styled from 'styled-components';

const RefreshBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 47%);

  @media (max-width: 375px) {
    transform: translate(-50%, 38%);
  }
`;

export default RefreshBox;