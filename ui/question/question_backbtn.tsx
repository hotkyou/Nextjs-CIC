'use client';

import Image from 'next/image';
import styled from 'styled-components';
import Button__border from '../button/button-border';

export default function QuestionBackbtn() {
  return (
    <>
      <div className="m-5 w-48">
        <Back href="/">
          <Image
            src="/arrow_back.svg"
            width={12}
            height={42}
            alt="logo"
            className="mr-2"
          />
          <p>前の質問に戻る</p>
        </Back>
        <Border__bottom className="m-auto" />
      </div>
    </>
  );
}

const Back = styled.a`
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

const Border__bottom = styled.div`
  width: 75%;
  height: 2px;
  background: linear-gradient(
    -90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
`;
