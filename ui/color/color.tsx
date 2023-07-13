'use client';
import styled from 'styled-components';

export const Green = '#8AD8D4';

// グリーンからピンクのグラデーション
export const Bg_GP =
  'background: linear-gradient(-90deg,rgba(244, 188, 247, 1) 0%,rgba(154, 229, 225, 1) 100%);';
export const Bg_div_GP = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    -90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
`;

// ピンクからグリーンのグラデーション
export const Bg_PG =
  'background: linear-gradient(90deg,rgba(244, 188, 247, 1) 0%,rgba(154, 229, 225, 1) 100%);';
export const Bg_div_PG = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
`;

// グラデーションのテキスト
// export const GradTxt =
//   ' background: linear-gradient(90deg,rgba(244, 188, 247, 1) 0%,rgba(154, 229, 225, 1) 100%);color: transparent;-webkit-background-clip: text;';

export const GradTxt = styled.p`
  '
  width:auto;
  height:200px;
  background: linear-gradient(
    -90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  color: transparent;

  // -webkit-background-clip: text;
  `;
