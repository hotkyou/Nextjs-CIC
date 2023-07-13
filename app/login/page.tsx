import { Button_link } from '@/ui/button/button';
import { Input_L, Label } from '@/ui/createAccount/formItem';

export default function Login() {
  return (
    <>
      <form className="mx-auto mt-6 flex w-60 flex-col items-center">
        <div className="mb-6 w-full">
          <Label>電話番号</Label>
          <Input_L type="tel" name="tel" placeholder="電話番号" />
        </div>

        <div className="mb-6 w-full">
          <Label>パスワード</Label>
          <div>
            <Input_L type="password" name="password" placeholder="パスワード" />
          </div>
        </div>
        <Button_link href="/comm">ログイン</Button_link>
      </form>
    </>
  );
}
