'use client';
import { Button } from '@/ui/button/button';
import { Input_L, Label } from '@/ui/createAccount/formItem';
import { useState } from 'react';
import CreateGroup from "@/ui/communityItem/newUserRegister"; //グループ作成のコンテナ
export default function register() {
const [formData, setFormData] = useState({ name: ''})

  const data = {

    User_Name: formData.name,
    Spesialist_Bool:0
  };

  const sendFormData = async () => {
    try {
      const response = await fetch('http://localhost:3000/createcomunityuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        // リクエストが成功した場合の処理
        console.log('送信おk サーバーからのリスポンス：', responseData);
        // リクエストが成功した場合の処理
        console.log('データが正常に送信されました');
        //　/commに遷移
        window.location.href = '/comm';
      } else {
        // リクエストが失敗した場合の処理
        console.error('データの送信に失敗しました');
      }
    } catch (error) {
      // エラーハンドリング
      console.error('通信エラー:', error);
    }
  };
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
    sendFormData();
  };


    return (
      <>
        <CreateGroup></CreateGroup>
        <form  onSubmit={handleSubmit} className="mx-auto mt-6 flex w-60 flex-col items-center">
        <div className="mb-6 w-full">

          <Input_L type="name" name="name" value={formData.name} onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, name: e.target.value })}  key="name-input" placeholder="ユーザーネーム" />
        </div>


        <Button type ="submit">ログイン</Button>
      </form>
  
      </>
    );
  }