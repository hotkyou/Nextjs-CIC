'use client';

import styled from 'styled-components';

const CreateUserName = styled.div`
  width: 211px;
  height: 37px;
  outline: none;
  position: relative;
  &::before,
  &::after {
    content: '';
    display: block;
  }
  &:before {
    width: 18px;
    height: 18px;
    background: url('/close.svg');
    position: absolute;
    top: 0;
    right: 0;
  }
  &::after {
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(244, 188, 247, 1) 0%,
      rgba(154, 229, 225, 1) 100%
    );
  }
`;

const GroupeBg = styled.div`
  width: 320px;
  height: 148px;
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  border-radius: 10px;
`;
const GroupeWhite = styled.textarea`
  width: 315px;
  height: 143px;
  position: absolute;
  top: 2px;
  left: 2px;
  outline: none;
  border-radius: 10px;
  background: #fff;
  padding: 8px;
`;

const Tag = styled.div`
  width: 315px;
  height: 143px;
  position: absolute;
  top: 2px;
  left: 2px;
  outline: none;
  padding: 16px;
  border-radius: 10px;
  background: #fff;
`;

const Text = styled.label`
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  color: transparent;
  -webkit-background-clip: text;
`;

export default function CreateGroup() {
  return (
    <>
      <form className="m-auto w-80">
        <div className=" flex  items-center justify-between border border-solid border-red-500">
          <figure className="h-16 w-16 rounded-full bg-blue-300"></figure>
          <CreateUserName>
            <input
              type="text"
              name="create_user"
              className="w-full pl-3 pr-5 outline-none"
              placeholder="sample-name"
            />
          </CreateUserName>
        </div>
        <div className="my-6">
          <label>グループの説明</label>
          <GroupeBg>
            <GroupeWhite
              name="group-detail"
              placeholder="グループの説明がここに入ります"
            />
          </GroupeBg>
        </div>
        <GroupeBg>
          {/* グラデーションの処理がfigcaptionになっているため修正が必要 */}
          <label className="absolute bottom-32 left-6 z-10 bg-white px-4 py-1">
            <Text>タグ</Text>
          </label>
          <Tag>#タグ01</Tag>
        </GroupeBg>
        <p className="text-red-400">
          タグを設定することによってグループを簡単に見つけることができます。
        </p>
      </form>
    </>
  );
}
