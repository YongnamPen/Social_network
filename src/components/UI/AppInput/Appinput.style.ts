import styled from "styled-components";

export const SAppInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid var(--disabled-bgc);
  background-color: transparent;

  &:last-child {
    margin-bottom: 40px;
  }

  &:is(:hover, :focus) {
    border-color: var(--prime-color);
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin: 10px 0;
  `;