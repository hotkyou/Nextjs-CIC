'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Title = styled.h2`
  width: 100px;
  height: 50px;
  line-height: 50px;
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
const Back = styled.a`
  position: absolute;
  top: 20%;
  left: 16px;
  height: 30px;
`;

const Navhead = styled.div`
  position: relative;
`;

export default function Head() {
  return (
    <>
      <Navhead>
        <Back href="/">
          <Image src="/arrow_back.svg" width={24} height={24} alt="logo" />
        </Back>
        <Title>{/* ここに項目名を書く */}</Title>
      </Navhead>
    </>
  );
}
