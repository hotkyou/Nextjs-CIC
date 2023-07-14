import QuestionChoiceBtn from '@/ui/question/question_choicebtn';
import {
  Button,
  Button__border,
  CheckBtn,
  Checkbox,
  QuestionTitle,
  Slider,
} from '@/ui/question/questuin.style';

export default function Question({ params }: { params: { id: number } }) {
  if (params.id == 1) {
    return (
      <>
        <QuestionTitle>Q{params.id}.生まれた時の戸籍上の性別は？</QuestionTitle>
        <Button className="checkbox">
          <Checkbox defaultChecked />
          <Button__border>男性</Button__border>
        </Button>
        <Button className="checkbox">
          <Checkbox />
          <Button__border>女性</Button__border>
        </Button>
      </>
    );
  } else if (params.id == 2) {
    return (
      <>
        <QuestionTitle>
          Q{params.id}.この直線上であなたのこころの性を表すとしたら？
        </QuestionTitle>
        <div className="w-full ">
          <div className="w-ful flex items-center justify-between">
            <p style={{ color: '#8ad8d4' }}>男性</p>
            <p style={{ color: '#8ad8d4' }}>女性</p>
          </div>
          <div className="m-auto w-56">
            <Slider />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <QuestionTitle>Q{params.id}.性行為したいと思ったことがない</QuestionTitle>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex-2  flex h-24 w-32 flex-col items-center">
          <CheckBtn defaultChecked />
          <label style={{ color: '#8AD8D4', fontSize: '8px' }}>
            当てはまる
          </label>
        </div>
        <div className="flex h-24 w-28 flex-col items-center">
          <CheckBtn />
          <label
            style={{ color: '#8AD8D4', fontSize: '8px', textAlign: 'center' }}
          >
            どちらかというとあてはまる
          </label>
        </div>

        <div className="flex h-24 w-16 flex-col items-center">
          <CheckBtn />
          <label
            style={{ color: '#8AD8D4', fontSize: '8px', textAlign: 'center' }}
          >
            どちらかというと当てはまらない
          </label>
        </div>
        <div className="flex h-24 w-16 flex-col items-center">
          <CheckBtn />
          <label
            style={{ color: '#8AD8D4', fontSize: '8px', textAlign: 'center' }}
          >
            どちらとも言えない
          </label>
        </div>
        <div className="flex h-24 w-16 flex-col items-center">
          <CheckBtn />
          <label
            style={{ color: '#8AD8D4', fontSize: '8px', textAlign: 'center' }}
          >
            あてはまらない
          </label>
        </div>
      </div>
    </>
  );
}
