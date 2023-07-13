// ボタン
'use client';

import styled from 'styled-components';

export const Button = styled.button`
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  width: 162px;
  height: 42px;
  border-radius: 25px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin: 0 auto;
  text-align: center;
`;
export const Button_link = styled.a`
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  width: 162px;
  height: 42px;
  display: block;
  border-radius: 25px;
  color: #fff;
  line-height: 42px;
  font-weight: bold;
  font-size: 14px;
  margin: 16px auto;
  text-align: center;
`;

export const Button_bg = styled.div`
  width: 162px;
  height: 42px;
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin: auto;
  text-align: center;
`;
export const Button__border = styled.button`
  background: #fff;
  width: 158px;
  height: 38px;
  border-radius: 25px;
  color: #8ad8d4;
  font-weight: bold;
  font-size: 14px;
  margin: auto;
  text-align: center;
`;

export const Button__border_link = styled.a`
  background: #fff;
  width: 158px;
  height: 38px;
  line-height: 38px;
  border-radius: 25px;
  color: #8ad8d4;
  font-weight: bold;
  font-size: 14px;
  margin: auto;
  text-align: center;
`;
