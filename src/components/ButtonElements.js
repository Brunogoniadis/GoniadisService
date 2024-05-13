import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 2px;

  background: var(--color-primary);
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? 'var(--color-dark)' : 'var(--color-white)')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ dark }) => (dark ? 'var(--color-white)' : 'var(--color-white)')};

    background: ${({ primary }) => (primary ? 'var(--color-secondary)' : 'var(--color-secondary)')};
  }
`;
