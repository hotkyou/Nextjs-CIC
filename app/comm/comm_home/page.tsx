import Posting from "@/ui/communityItem/posting";
import NavigationBar from "@/ui/navigation-bar";
import NavLink from "@/ui/nav_link/navlink";
import NavLink_now from "@/ui/nav_link/navlink_now";
import Image from "next/image";
import Icon_size, { M_Circle, S_Circle } from "@/ui/Community/icon_s";
import HomeHeader from "@/ui/home-head";
import styled from "styled-components";


export default function comm_home() {
  return (
    <>
      <div className="mb-16 mt-48 ">

        <div className="border-2 top-0 fixed w-full bg-white">
          <div className=" flex border h-24">

            <HomeHeader/>

          </div>

          <div className=" flex border h-20">
            <Icon_size />
          </div>
        </div>

        <Posting></Posting>
        <Posting></Posting>
        <Posting></Posting>
        <Posting></Posting>
      </div>


      <div className="bottom-0 fixed w-full">
        <NavigationBar />
      </div>

    

      <NavLink className="bottom-24 right-8 fixed w-full">
        <Image
          src="/comm/comm_add_messege.svg"
          alt="comm_message_icon"
          width={25}
          height={25}
          className=" m-1"
        />
      </NavLink>





    </>
  );
}
