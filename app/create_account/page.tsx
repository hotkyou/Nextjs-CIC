'use client';
import Form from '@/ui/form';
import { NavItem, Navlink_all } from '@/ui/nav_link';
import NavLink from '@/ui/nav_link/navlink';

export default function NewAccount() {
  return (
    <>
      <Navlink_all>
        <NavItem>
          <NavLink className="mb-2">1</NavLink>
          <p>基本情報</p>
        </NavItem>
        <NavItem className="opacity-50">
          <NavLink className="mb-2">2</NavLink>
          <p>事前診断</p>
        </NavItem>
        <NavItem className="opacity-50">
          <NavLink className="mb-2">3</NavLink>
          <p>診断結果</p>
        </NavItem>
        <NavItem className="opacity-50">
          <NavLink className="mb-2">4</NavLink>
          <p>登録完了</p>
        </NavItem>
      </Navlink_all>
      <Form />
    </>
  );
}
