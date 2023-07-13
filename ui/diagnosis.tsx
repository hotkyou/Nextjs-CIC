'use client';
import styled from 'styled-components';

const Bg = styled.div`
  width: 292px;
  height: 232px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 12px;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  color: #8ad8d4;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export default function Diagnosis() {
  return (
    <Bg>
      <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-white">
        <h2 className="mb-6 font-bold">セクシュアリティ</h2>
        <p className="text-xs">
          この診断ではあなたのセクシュアリティ。 <br />
          こころの性・ふるまう性
          <br />
          性的指向・恋愛指向 <br />
          の4つから「あなたの性のあり方」を <br />
          明らかにします。
        </p>
      </div>
    </Bg>
  );
}
