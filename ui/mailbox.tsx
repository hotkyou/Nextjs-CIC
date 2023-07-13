'use client';

import styled from 'styled-components';
import { Bg_PG, Green } from './color/color';
import { log } from 'console';

// お知らせ一覧のコンテナ
const Notice = styled.div`
  width: 292px;
  height: 400px;
  border: solid 3px ${Green};
  border-radius: 12px;
  margin: 0 auto;
  padding: 20px;
`;

// お知らせ一覧のタイトル
const NoticeListName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    width: 80px;
    color: #888;
    text-align: center;
  }

  .now {
    color: ${Green};
    font-weight: bold;
    border-bottom: solid 2px ${Green};
  }
`;
const NoticeListInput = styled.input.attrs({
  type: 'radio',
  name: 'notice',
})`
  width: 80px;
  height: 20px;
  appearance: none;
  position: relative;
  &:checked::before {
    border-bottom: solid 2px ${Green};
  }
  &::before {
    content: '';
    width: 100%;
    font-size: 14px;
    height: 22px;
    display: block;
  }
`;

// お知らせ一覧のアイテム
const MailItem = styled.div`
  width: 100%;
  height: 57px;
  border-bottom: solid 2px ${Green};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 20.5px;
    right: 0;
    width: 16px;
    height: 16px;
    background: ${Green};
    border-radius: 50%;
  }
`;
const MailItem_read = styled.div`
  width: 100%;
  height: 57px;
  border-bottom: solid 1px #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  position: relative;
`;

export default function Mailbox() {
  return (
    <>
      <Notice>
        <NoticeListName>
          <div className="flex flex-col">
            <label className="absolute w-20 text-center">運営</label>
            <NoticeListInput defaultChecked />
          </div>
          <div className="flex flex-col">
            <label className="absolute w-20 text-center">スペース</label>
            <NoticeListInput />
          </div>
        </NoticeListName>
        <MailItem className="m-auto">
          <p className="text-sm">運営からのお知らせ</p>
          <time className="text-xs text-gray-400">12時間前</time>
        </MailItem>
        <MailItem className="m-auto">
          <p className="text-sm">運営からのお知らせ</p>
          <time className="text-xs text-gray-400">12時間前</time>
        </MailItem>
        {/* 以下既読 */}
        <MailItem_read className="m-auto opacity-50">
          <p className="text-sm">運営からのお知らせ</p>
          <time className="text-xs text-gray-400">2日前</time>
        </MailItem_read>
        <MailItem_read className="m-auto opacity-50">
          <p className="text-sm">運営からのお知らせ</p>
          <time className="text-xs text-gray-400">4日前</time>
        </MailItem_read>
      </Notice>
    </>
  );
}
