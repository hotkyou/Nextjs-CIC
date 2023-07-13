'use client';
import FlexCenter from '@/ui/center';
import { GradTxt } from '@/ui/color/color';
import { TitleText } from '@/ui/common/title';
import { NavItem, Navlink_all } from '@/ui/nav_link';
import NavLink from '@/ui/nav_link/navlink';
import NavLink_now from '@/ui/nav_link/navlink_now';
import Image from 'next/image';

export default function DiagnosisStart() {
  return (
    <>
      <div>
        <Navlink_all>
          <NavItem>
            <NavLink_now className="mb-2">
              <Image src="/check.svg" width={34} height={34} alt="完了" />
            </NavLink_now>
            <p>基本情報</p>
          </NavItem>
          <NavItem>
            <NavLink_now className="mb-2">
              <Image src="/check.svg" width={34} height={34} alt="完了" />
            </NavLink_now>
            <p>事前診断</p>
          </NavItem>
          <NavItem>
            <NavLink_now className="mb-2">
              <Image src="/check.svg" width={34} height={34} alt="完了" />
            </NavLink_now>
            <p>診断結果</p>
          </NavItem>
          <NavItem>
            <NavLink className="mb-2">4</NavLink>
            <p>登録完了</p>
          </NavItem>
        </Navlink_all>
        <TitleText>ご登録ありがとうございます</TitleText>
      </div>
    </>
  );
}
