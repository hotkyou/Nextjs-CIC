'use client';
import styled from 'styled-components';
import Checkbox from './question_button';

const Button__border = styled.div`
  background: #fff;
  width: 158px;
  height: 38px;
  position: absolute;
  left: 2px;
  line-height: 38px;
  text-align: center;
  border-radius: 25px;
  color: #8ad8d4;
`;

const Button = styled.div`
  // ボタンの背景
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  width: 154px;
  height: 40px;
  width: 162px;
  height: 42px;
  border-radius: 25px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Button_bg = styled.div`
  width: 162px;
  height: 42px;
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export default function QuestionChoiceBtn() {
  return (
    <>
      <form>
        <Button className="checkbox">
          <Checkbox defaultChecked />
          <Button__border></Button__border>
        </Button>

        <Button className="checkbox">
          <Checkbox />
          <Button__border></Button__border>
        </Button>
      </form>
    </>
  );
}

// border: dashed 2px #8ad8d4;
