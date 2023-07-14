'use client';
import styled from 'styled-components';
import { Green } from '../color/color';

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
export const CheckBtn = styled.input.attrs({
  type: 'radio',
  name: 'choice',
})`
  cursor: pointer;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  appearance: none;
  position: relative;
  border: dashed 2px ${Green};
  z-index: 2;
  &:checked {
    border: none;
    background: ${Green};
  }
  &::after {
    content: '';
    width: 22px;
    height: 14px;
    display: block;
    position: absolute;
    top: 10px;
    left: 10px;
    transform: rotate(-45deg);
    border-left: solid 3px #fff;
    border-bottom: solid 3px #fff;
    opacity: 0;
  }
  &:checked::after {
    opacity: 1;
  }
`;

export const QuestionTitle = styled.h2`
  line-height: 50px;
  background: linear-gradient(
    -90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  color: transparent;
  -webkit-background-clip: text;
  font-size: 20px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.6rem;
  margin-bottom: 20px;
`;

export const Slider = styled.input.attrs({
  type: 'range',
  min: 0,
  max: 6,
})`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  &::-webkit-slider-runnable-track {
    background: #ebebeb;
    height: 3px;
    border-radius: 3px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 20px;
    width: 20px;
    margin-top: -8px; /* 位置調整 */
    background-color: #d3eceb;
    border: solid 2px #8ad8d4;

    border-radius: 50%;
  }

  /* Track: Firefox */
  input[type='range']::-moz-range-track {
    background: #ebebeb;
    height: 3px;
    border-radius: 3px;
  }

  /* Thumb: Firefox */
  input[type='range']::-moz-range-thumb {
    border: none;
    height: 20px;
    width: 20px;
    background-color: #4cabe2;
    border-radius: 50%;
  }
`;

export const Back = styled.a`
  width: 182px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    display: inline-block;
    background: linear-gradient(
      -90deg,
      rgba(244, 188, 247, 1) 0%,
      rgba(154, 229, 225, 1) 100%
    );
    color: transparent;
    -webkit-background-clip: text;
    font-size: 20px;
    text-align: center;
    font-size: 12px;
  }
`;
export const Border__bottom = styled.div`
  width: 75%;
  height: 2px;
  background: linear-gradient(
    -90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
`;

export const Button__border = styled.div`
  background: #fff;
  width: 158px;
  height: 38px;
  position: absolute;
  left: 2px;
  line-height: 38px;
  text-align: center;
  border-radius: 25px;
  color: #8ad8d4;
`;

export const Button = styled.div`
  // ボタンの背景
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  width: 154px;
  height: 40px;
  width: 162px;
  height: 42px;
  border-radius: 25px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 24px;
`;

export const Button_bg = styled.div`
  width: 162px;
  height: 42px;
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;
