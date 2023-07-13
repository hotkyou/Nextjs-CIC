import Image from 'next/image';
import styled from 'styled-components';


// const Transparent = styled.input.attrs({
//   type: 'text',
//   name: 'name',
//   placeholder: 'グループを検索'

// })
// `outline:none;
//   width: 254px;
//   height: 36px;
//   border-radius:30px;
// `;

export default function Group() {
  return (
    <>
      <h1>グループ</h1>
      <div id='pink' className='flex items-center w-64 h-9 border-2 border-solid rounded-3xl'>
        <Image
          src="/search.svg"
          alt="magn glassifying"
          width={24}
          height={24}
        />
      </div >
      {/* <Transparent></Transparent> */}
    </>
  );
}
