'use client';

import { Back, TitleSpace, TitleText } from '@/ui/common/title';
import Navlink, { NavItem, Navlink_all } from '@/ui/nav_link';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TitleSpace>
        <Back href="/">
          <Image src="/arrow_back.svg" width={24} height={24} alt="logo" />
        </Back>
        <TitleText>ログイン</TitleText>
      </TitleSpace>
      {children}
    </>
  );
}
