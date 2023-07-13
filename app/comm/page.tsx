// import Comment from "@/ui/communityItem/comment"; ×使わない(コメント追加のコンテナ)
import Posting from "@/ui/communityItem/posting";
// import Evaluation from "@/ui/communityItem/evaluation"　×使わない（いいねのコンテナ）
import CreateGroup from "@/ui/communityItem/craete_group"; //グループ作成のコンテナ
import NavLink from "@/ui/nav_link/navlink";
import Image from "next/image";
import { Inder } from "next/font/google";
import Icon_size from "@/ui/Community/icon_s";
import Comment from "@/ui/communityItem/comment";

// import icon_S
// import icon_M
// import icon_Message

export default function Comm() {
  return (
    <>
    
      <div>
        <Icon_size></Icon_size>
      </div>
      <NavLink></NavLink>
      <h1>コミュニティ アカウント作成</h1>
      <div className="">
        <span className="h-6 w-9">
          ✕
        </span>
        <span className="h-6 w-9 top-0 right-5">
          作成
        </span>
      </div>


      <Posting></Posting>
      <CreateGroup></CreateGroup>
      
      <div className=" bg-red-400">
        <Image
          src="/comm/comm_add_messege.svg"
          alt="comm_message_icon"
          width={30}
          height={30}
        />
      </div>

      <div className=" text-3xl">
        ✕
      </div>
      
      <div className=" text-3xl h-6 ">
        作成
      </div>
      
      {/* <Posting></Posting> */}
      <CreateGroup></CreateGroup>

    </>
  );
}