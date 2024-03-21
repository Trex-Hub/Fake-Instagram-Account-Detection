// StyledSpan.js
import styled from '@emotion/styled';

const StyledSpan = styled.span`
  font-size: 1.6rem;
  background-color: #7F7EFF;
  color: whitesmoke;
  padding-right: 1rem;
  padding-left: 1rem;
  border-radius: 3px;
  margin-left: 0; /* Default margin-left */
  margin-top: 0; /* Default margin-top */
  
  /* Media queries for responsive margin-left and margin-top */
  @media screen and (min-width: 40em) {
    margin-left: 4rem; /* Adjusted margin-left for medium devices */
  }
  
  @media screen and (min-width: 64em) {
    margin-left: 6rem; /* Adjusted margin-left for large devices */
  }

  @media screen and (max-width: 40em) {
    margin-top: 1rem; /* Adjusted margin-top for small devices */
  }
`;

export default StyledSpan;
