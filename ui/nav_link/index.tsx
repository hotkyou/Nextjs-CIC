import NavLink from '@/ui/nav_link/navlink';
import NavLink_now from '@/ui/nav_link/navlink_now';
import Image from 'next/image';
import styled from 'styled-components';

export const Navlink_all = styled.div`
  width: 100%;
  height: auto;
  padding: 12px 32px;
  font-size: 12px;
  display: flex;

  align-items: flex-start;
  justify-content: space-around;
`;

export const Border = styled.div`
  width: 34px;
  height: 2px;
  background: linear-gradient(
    -90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
`;

export const NavItem = styled.div`
  dsiplay: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Navlink() {
  return (
    <>
      <Navlink_all>
        <NavItem>
          <NavLink className="mb-2">1</NavLink>
          {/* <NavLink_now className="mb-2">
            <Image src="/check.svg" width={34} height={34} alt="完了" />
          </NavLink_now> */}
          <p className="opacity-60">基本情報</p>
        </NavItem>
        <NavItem>
          <NavLink className="mb-2">2</NavLink>
          <p>本人認証</p>
        </NavItem>
        <NavItem>
          <NavLink className="mb-2">3</NavLink>
          <p>事前診断</p>
        </NavItem>
        <NavItem>
          <NavLink className="mb-2">4</NavLink>
          <p>診断確認</p>
        </NavItem>
      </Navlink_all>
    </>
  );
}
