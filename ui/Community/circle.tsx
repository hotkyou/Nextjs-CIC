'use client';

import styled from 'styled-components';
import Image from 'next/image';

const Filelabel = styled.label`
    background: url("/comm_photo.svg") no-repeat;
    border: solid 1px #8AD8D4;
    z-index: 10;
`;

const File = styled.input.attrs({
    type: 'file',
    name: 'file',

})`
    display: none;`;
  
export const FlexCenter_S = styled.div`
    //丸い形_S_size;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    background-color: #8AD8D4;
    bottom: 7px;
    right: 11px;
    border-radius: 50%;
`;

export const FlexCenter_L = styled.div`
    //丸い形_L_size
    display: flex;
    justify-content: center;
    align-items: center;
    width: 136px;
    height: 136px;
    background: linear-gradient(
        90deg,
        rgba(244, 188, 247, 1) 0%,
        rgba(154, 229, 225, 1) 100%
    );
    border-radius: 50%;
    margin: auto;
`;

export const Small_Circle = styled.div`
    //小さい丸い形
    display: flex;
    justify-content: center;
    align-items: center;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #FAFAFA;
`;

export const FlexSquare = styled.figure`
    //四角形の写真を入れる
    display: flex;
    justify-content: center;
    align-items: center;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #FAFAFA;
    text-align: center;
    position: absolute;
`;



export default function Flexusericon() {
    return (
        <>
            <div className=' relative w-36 h-36 '>
                <FlexCenter_L>
                    <FlexSquare>
                        <Image
                            src="/comm_person.svg"
                            alt="magn glassifying"
                            width={56}
                            height={56}
                        />
                    </FlexSquare>
                </FlexCenter_L>


                <FlexCenter_S>
                    <Filelabel></Filelabel>
                    <File />
                    {/* onClick={() => {}} */}

                </FlexCenter_S>
            </div>
        </>
    );
}