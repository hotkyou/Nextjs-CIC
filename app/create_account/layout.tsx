'use client';

import { Back, TitleSpace, TitleText } from '@/ui/common/title';
import Navlink, { NavItem, Navlink_all } from '@/ui/nav_link';
import Image from 'next/image';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    userInfo: string;
  };
}) {
  return (
    <>
      {/* <TitleSpace>
        <Back href="/">
          <Image src="/arrow_back.svg" width={24} height={24} alt="logo" />
        </Back>
        <TitleText>{params.userInfo}</TitleText>
      </TitleSpace> */}
      {children}
    </>
  );
}
