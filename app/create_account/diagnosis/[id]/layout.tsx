import {
  Back,
  Border__bottom,
  QuestionTitle,
} from '@/ui/question/questuin.style';
import { Button_link } from '@/ui/button/button';
import Image from 'next/image';

export default function StyleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    id: number;
  };
}) {
  const id = params.id;

  return (
    <>
      <div className="mx-auto my-28 flex w-72  flex-col items-center ">
        {children}
      </div>
      <div style={{ marginTop: '12vh' }}>
        {params.id == 3 ? (
          <Button_link href="/create_account/completion">次の質問</Button_link>
        ) : (
          <Button_link href={`${Number(id) + 1}`}>次の質問</Button_link>
        )}
        <div className="mx-auto mt-7 h-10 w-48 ">
          <Back href={`${Number(id) - 1}`}>
            <Image src="/arrow_back.svg" width={12} height={42} alt="logo" />
            <p className="ml-4">前の質問に戻る</p>
          </Back>

          <Border__bottom className="m-auto" />
        </div>
      </div>
    </>
  );
}
