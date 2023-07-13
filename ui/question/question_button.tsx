'use client';

import styled from 'styled-components';

export const Checkbox = styled.input.attrs({
  type: 'radio',
  name: 'choice',
})`
  cursor: pointer;
  width: 158px;
  height: 38px;
  appearance: none;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  &::before,
  &::after {
    content: '';
    width: 22px;
    height: 22px;
    display: block;
    position: absolute;
    top: 8.5px;
    left: 12px;

  }
  &::before {
    border: dashed 2px #8ad8d4;
    border-radius: 50%;
    background: #fff;
  }
  &::after {
    width: 22px;
    height: 12px;
    opacity: 0;
    top:9px;
    left:0px
    outline:solid 2px skyblue;
    transform: rotate(-45deg);
    border-left: solid 3px #8ad8d4;
    border-bottom: solid 3px #8ad8d4;
  }
  &:checked::before {
    border: none;
  }
  &:checked::after {
    opacity: 1;
  }
`;

export default Checkbox;
