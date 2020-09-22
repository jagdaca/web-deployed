import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  margin: 4px 2px;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #0074d9;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;

export const DeleteButton = styled(Button)`
  
  padding: 0.2rem 1rem;
  background: #8B0000;
`;

export const UpdateButton = styled(DeleteButton)`
  background: #9400D3;
`;