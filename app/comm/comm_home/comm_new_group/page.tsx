import CreateGroup from "@/ui/communityItem/craete_group";

export default function comm_new_group() {
  return (
    <>
      <div className="flex">
        <div className=" py-4 px-4">
          ✕
        </div>

        <div className=" py-4 mr-10">
          作成
        </div>
      </div>

      <CreateGroup></CreateGroup>

    </>
  );
}
