import styled from "styled-components";

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.warning};
  margin-left: 20px;
  font-weight: ${({ theme }) => theme.bold};
`;

export default ErrorMessage;
