'use client'
import styled from "styled-components";
import Image from 'next/image';

export const circle = styled.div`
    //丸いアイコン
    display: flex;  
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #8AD8D4;
`;

export const S_Circle = styled.div`
    //小さい丸い形
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    
`;

export const M_Circle = styled.div`
    //小さい丸い形
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #D9D9D9; 
`;
 
export const Small_square = styled.div`
    //小さい四角形
    width: 35px;
    height: 35px;
    background-color: #8AD8D4;
`;

export const Font = styled.p`
    //文字
    height: 30px;
    font-size: 12px;
    font-weight: bold;
    color: #C8C8C8;
    text-align: center;
`;


export default function Icon_size() {
    return (
        <>
            <a className=" ml-6 text-center mt-1">
                <Image
                    src="/+.svg"
                    alt="magn glassifying"
                    width={52}
                    height={52}
                />
                <Font className=" mt-1">新規作成</Font>
            </a>
            <a className=" ml-6 text-center mt-1">
                <Image
                    src="/comm/test_icon3.svg"
                    alt="magn glassifying"
                    width={52}
                    height={52}
                />
                <Font className=" mt-1">official</Font>
            </a>
            <a className=" ml-6 text-center mt-1">
                <Image
                    src="/comm/test_icon2.svg"
                    alt="magn glassifying"
                    width={52}
                    height={52}
                />
                <Font className=" mt-1">group-1</Font>
            </a>
            <a className=" ml-6 text-center mt-1">
                <Image
                    src="/comm/test_icon4.svg"
                    alt="magn glassifying"
                    width={52}
                    height={52}
                />
                <Font className=" mt-1">group-1</Font>
            </a>
        </>
    );
}