// import Comment from "@/ui/communityItem/comment"; ×使わない(コメント追加のコンテナ)
import Posting from "@/ui/communityItem/posting";
// import Evaluation from "@/ui/communityItem/evaluation"　×使わない（いいねのコンテナ）
import CreateGroup from "@/ui/communityItem/craete_group"; //グループ作成のコンテナ
import NavLink from "@/ui/nav_link/navlink";
import Image from "next/image";
import { Inder } from "next/font/google";
import Icon_size from "@/ui/Community/icon_s";
import Comment from "@/ui/communityItem/comment";
import NavigationBar from "@/ui/navigation-bar";
import { Button } from "@/ui/button/button";
import { FlexCenter_L, FlexCenter_S, FlexSquare } from "@/ui/Community/circle";

// import icon_S
// import icon_M
// import icon_Message

export default function Comm() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="text-3xl pt-3 pl-0">
          ＜
        </div>

        <div className="text-3xl h-6 pt-3">
          コミュニティ
        </div>
      </div>

      

      <div className=' relative w-36 h-36 '>
        <FlexCenter_L>
          <FlexSquare>
          </FlexSquare>
        </FlexCenter_L>

        <FlexCenter_S>
          <Image
            src="/comm/test_icon01.svg"
            alt="comm_message_icon"
            width={35}
            height={35}
          />
        </FlexCenter_S>


        <div className="mt-80 text-center">
          <Button className=" text-center px-4 py-2">
            アカウント作成
          </Button>
        </div>


        <div className="fixed bottom-0 w-full">
          <NavigationBar />
        </div>

      </div>
    </>
      );
}
