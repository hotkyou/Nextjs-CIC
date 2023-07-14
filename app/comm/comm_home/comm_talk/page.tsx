import Icon_size, { S_Circle } from "@/ui/Community/icon_s";
import { Button, Button_min } from "@/ui/button/button";
import { Bg_div_GP } from "@/ui/color/color";
import Image from "next/image";
import styled from "styled-components";

// const Serch = styled.input.attrs({
//   type: 'text',
//   placeholder: 'テキスト入力',
// })

export default function comm_talk() {
  return (
    <>
      <div className="flex">
        <div className=" py-4 px-4">
          ✕
        </div>

        <div className=" py-4 mr-10">
          <Button_min>投稿する</Button_min>
        </div>
      </div>

      <div className=" flex">
        <S_Circle>
          <Image
            src="/comm/test_icon01.svg"
            alt="comm_message_icon"
            width={35}
            height={35}
          />

        </S_Circle>

        <textarea className=" mx-5 h-36 w-80 pb-10 pt-2"
        name="group-detail"
        placeholder="テキストを入力"
        />
        
      </div>
    </>
  );
}
