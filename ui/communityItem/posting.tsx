// 投稿

'useclient';

import Image from 'next/image';
import Comment from './comment';

export default function Posting() {
  return (
    <>
      <div className="p-2">
        <figure>{/* ここにアイコン */}</figure>
        <p>user-name-sample</p>
      </div>
      <div className="ml-auto w-80 text-gray-400">
        <figure>
          <Image
            src="/sample-img.jpg"
            width={333}
            height={190}
            alt="サンプル画像"
            className="rounded-lg object-cover"
          />
        </figure>
        <p className="mb-6 text-sm">
          サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
        </p>
        <Comment />
      </div>
    </>
  );
}
