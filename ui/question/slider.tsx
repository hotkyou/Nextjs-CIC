'use client';

import styled from 'styled-components';

const Slider = styled.input.attrs({
  type: 'range',
  min: 0,
  max: 6,
})`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  width: 224px;
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
    border: solid 3px #8ad8d4;

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

export default Slider;
