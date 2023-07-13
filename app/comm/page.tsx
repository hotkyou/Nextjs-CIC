// import Comment from "@/ui/communityItem/comment"; ×使わない(コメント追加のコンテナ)
import Posting from "@/ui/communityItem/posting";
// import Evaluation from "@/ui/communityItem/evaluation"　×使わない（いいねのコンテナ）
import CreateGroup from "@/ui/communityItem/craete_group"; //グループ作成のコンテナ

// import icon_S
// import icon_M
// import icon_Message

export default function Comm() {
  return (
    <>
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
