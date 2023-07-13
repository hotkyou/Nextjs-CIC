'use client';
import Image from 'next/image';
import styled from 'styled-components';

const NavImg = styled.figure`
  width: 60px;
  height: 45px;
  font-size: 8px;
  color: #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spot_figcaption = styled.figcaption`
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  color: transparent;
  -webkit-background-clip: text;
`;

export default function NavigationBar() {
  return (
    <>
      <div
        className="
      absolute bottom-0 flex h-16 w-full justify-around  pt-2"
      >
        <NavImg>
          <Image
            src="/nav_matching.svg"
            alt="マッチング"
            width={25}
            height={25}
          />
          <figcaption>マッチング</figcaption>
        </NavImg>
        <NavImg>
          <Image
            src="/nav_community.svg"
            alt="マッチング"
            width={25}
            height={25}
          />
          <Spot_figcaption>コミュニティ</Spot_figcaption>
        </NavImg>
        <NavImg>
          <Image src="/nav_space.svg" alt="マッチング" width={25} height={25} />
          <figcaption>スペース</figcaption>
        </NavImg>
      </div>
    </>
  );
}
