'use client';

import styled from 'styled-components';
import { Pseudoelement } from '@/ui/pseudoelement';
import { Bg_PG } from '../color/color';

// タイトルの表示エリア
export const TitleSpace = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  position: relative;
`;

// 項目
export const TitleText = styled.h2`
  width: auto;
  line-height: 100%;
  background: linear-gradient(
    -90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  color: transparent;
  -webkit-background-clip: text;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
`;
export const Back = styled.a`
  position: absolute;
  top: 20%;
  left: 16px;
  height: 30px;
`;

// 検索バー
export const TitleSerchWrap = styled.div`
  position: relative;
  width: 254px;
  height: 35px;
  font-size: 12px;
  display: flex;
  &::before {
    ${Pseudoelement}
    width:25px;
    height: 25px;
    z-index: 20;
    position: absolute;
    top: 6px;
    left: 10px;
    background: url('/search.svg');
  }
`;
export const TitleSerchInput = styled.input.attrs({
  type: 'text',
  placeholder: 'グループを検索',
})`
    background: #fff;
    width: 250px;
    height: 31px;
    position: absolute;
    top: 2px;
    left: 2px;
    outline: none;
    border-radius: 25px;
    padding-left: 40px;
    padding-right: 8px
    font-size: 12px;
    border:solid 2px skyblue;
  `;
