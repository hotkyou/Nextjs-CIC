'use client';
import Image from 'next/image';
import styled from 'styled-components';

const Good = styled.input.attrs({ type: 'radio', name: 'good' })`
  appearance: none;
  &::before {
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    background: url('/good.svg') no-repeat;
  }
  &:checked::before {
    background: url('/isGood.svg') no-repeat;
  }
`;
const Bad = styled.input.attrs({ type: 'radio', name: 'good' })`
  appearance: none;
  &::before {
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    background: url('/bad.svg') no-repeat;
  }
  &:checked::before {
    background: url('/isBad.svg') no-repeat;
  }
`;

export default function Evaluation() {
  return (
    <>
      <div className="ml-4 flex">
        <Good />
        <Bad className="ml-2" />
      </div>
    </>
  );
}
