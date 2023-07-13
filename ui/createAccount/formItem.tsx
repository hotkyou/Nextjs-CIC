'use client';
import styled from 'styled-components';

// label
export const Label = styled.label`
  color: #878787;
  font-size: 16px;
`;

// inputのdiv
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// inputのサイズ
export const Input_S = styled.input.attrs({
  required: true,
})`
  width: 70px;
  padding: 4px;
  border-bottom: solid 1px #cecece;
  border-radius: 0px;
  outline: none;

  color: #cecece;
`;
export const Input_M = styled.input.attrs({
  required: true,
})`
  width: 109px;
  padding: 4px;
  border-bottom: solid 1px #cecece;
  border-radius: 0px;
  outline: none;

  color: #cecece;
`;
export const Input_L = styled.input.attrs({
  required: true,
})`
  width: 100%;

  padding: 4px;
  border-bottom: solid 1px #cecece;
  border-radius: 0px;
  outline: none;

  color: #cecece;
`;
