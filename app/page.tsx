'use client';
import {
  Button,
  Button__border,
  Button__border_link,
  Button_bg,
  Button_link,
} from '@/ui/button/button';
import FlexCenter from '@/ui/center';
import External from '@/ui/external';
import Image from 'next/image';
import styled from 'styled-components';

const StartView = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    125deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
`;
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 15vh;
  @media (max-height: 700px) {
    padding-top: 4vh;
  }
`;

export default function Home() {
  let flag;
  flag = false;
  return (
    <>
      {flag === true ? (
        <StartView>
          <figure>
            <Image
              src="/logo-white.svg"
              alt="equal logo"
              width={200}
              height={200}
            />
          </figure>
        </StartView>
      ) : (
        <Container>
          <div className="flex flex-col items-center ">
            <FlexCenter>
              <Image
                className="mb-10 mt-6"
                src="/logo-black.svg"
                width={150}
                height={150}
                alt="logo"
              />
            </FlexCenter>
            {/*  */}
            <FlexCenter className="flex-col">
              <Button_link href="/create_account">新規登録</Button_link>
              <Button_bg>
                <Button__border_link href="/login">
                  ログイン
                </Button__border_link>
              </Button_bg>
            </FlexCenter>
          </div>
          <External />
        </Container>
      )}
    </>
  );
}
