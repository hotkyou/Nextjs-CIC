// 外部アカウント
'use client';
import styled from 'styled-components';
import FlexCenter from './center';
import Image from 'next/image';

const Externaltab = styled.div`
  width: 100%;
  height: 240px;
  padding-top: 20px;
  text-align: center;
  border-radius: 45px 45px 0px 0px;
  background: linear-gradient(
    135deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  position: absolute;
  bottom: 0px;
`;

const Externalaccount = styled.button`
  width: 162px;
  height: 36px;
  background: #fff;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #333;
  font-weight: bold;
`;

export default function External() {
  return (
    <>
      <Externaltab>
        <p className="font-bold text-white">外部アカウントで新規登録</p>
        <FlexCenter className="flex-col">
          <div className="mb-4 mt-6">
            <Externalaccount>
              <Image
                src="/twitter-logo.svg"
                alt="twitter logo"
                width={22}
                height={22}
              />
              <Image
                src="/twitter-text.svg"
                alt="twitter"
                width={45}
                height={22}
              />
            </Externalaccount>
          </div>
          <div>
            <Externalaccount>
              <Image
                src="/google-logo.svg"
                alt="google logo"
                width={22}
                height={22}
              />

              <Image
                src="/google-text.svg"
                alt="google"
                width={45}
                height={22}
              />
            </Externalaccount>
          </div>
        </FlexCenter>
      </Externaltab>
    </>
  );
}
