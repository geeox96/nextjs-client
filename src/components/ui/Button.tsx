import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  loading?: boolean;
  type?: 'green' | 'blue';
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
}

const Button: FC<Props> = ({
  children,
  loading,
  type = 'blue',
  onClick,
  width = 100,
  height = 35,
  fontSize = 15,
}) => {
  useEffect(() => {
    if (loading && onClick) {
      setTimeout(() => {
        onClick();
      }, 3000);
    }
  }, [loading]);

  return (
    <Container
      className={`${type} ${loading ? 'loading' : ''}`}
      onClick={!loading ? onClick : () => {}}
      style={{ width, height, fontSize }}
    >
      {loading && (
        <Loader>
          <span />
          <span />
          <span />
          <span />
        </Loader>
      )}
      {children}
    </Container>
  );
};

export default Button;

const Container = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #c3eaee;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;

  &.green {
    background: url('/images/partials/green-button.jpg') no-repeat center
      center/cover;
  }

  &.blue {
    background: url('/images/partials/button.jpg') no-repeat center center/cover;
  }

  &.loading {
    opacity: 0.7;
    cursor: wait;
  }

  &:hover {
    filter: brightness(1.1);
  }
`;

const Loader = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  overflow: hidden;

  span {
    position: absolute;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, white);
    animation: slide_top 1s linear infinite;
  }

  span:nth-child(2) {
    right: 0;
    top: -100%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, transparent, white);
    animation: slide_right 1s linear infinite;
    animation-delay: 0.25s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 1px;
    background: linear-gradient(270deg, transparent, white);
    animation: slide_bottom 1s linear infinite;
    animation-delay: 0.5s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(360deg, transparent, white);
    animation: slide_left 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes slide_top {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  @keyframes slide_right {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  @keyframes slide_bottom {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  @keyframes slide_left {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;
