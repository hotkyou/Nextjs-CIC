'use client';
import Image from 'next/image';
import Evaluation from './evaluation';
import styled from 'styled-components';

const AddComment = styled.form.attrs({
  onsubmit: 'return false',
})`
  width: 292px;
  border-bottom: solid 2px #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    background: url('/comment.svg');
  }
  p {
    color: #b9b9b9;
    font-size: 12px;
  }
`;

export default function Comment() {
  return (
    <>
      <AddComment className="m-auto">
        <input className="ml-6 p-1 outline-none" placeholder="コメントを追加" />
        <Evaluation />
      </AddComment>
    </>
  );
}
