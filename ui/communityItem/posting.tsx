// 投稿

'useclient';

import Image from 'next/image';
import Comment from './comment';
import { S_Circle } from '../Community/icon_s';

export default function Posting() {
  return (
    <>
      <div className=''>
        <div className="p-2 flex">
          <figure>
            {/* ここにアイコン */}
            <S_Circle>
              <Image
                src="/comm/test_icon2.svg"
                width={30}
                height={30}
                alt="サンプル画像"
                className="rounded-lg object-cover m-50"
              >
              </Image>
            </S_Circle>
          </figure>
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
      </div>
    </>
  );
}
