import React from "react";
import CountdownTimer from "../components/ui/CountdownTimer";
import LeaderboardTable from "../components/ui/LeaderboardTable";
import { FaBolt, FaPlaneDeparture } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

const LeaderboardPage: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center bg-[#090118] min-h-screen py-10  ">
      <div className="relative   self-start">

        <div className="absolute hidden md:block  h-[202px] w-[177px] bg-[#9A59BA] rounded-[100%]  -top-[15rem] -left-[4rem] rotate-[45deg] blur-[120px] -z-100"></div>
      </div>
      <div className="relative  self-start">


        <div className="absolute hidden md:block  h-[702px] w-[87px] bg-[#9A59BA] rounded-[100%]  top-[19rem] -left-[4rem] rotate-[45deg] blur-[120px] -z-11"></div>
      </div>
      <div className="relative  self-end">

        <div className="absolute hidden md:block  h-[1102px] w-[177px] bg-[#9A59BA] rounded-[100%]  -top-[20rem] -left-[4rem] rotate-[deg] blur-[150px] -z-100"></div>
      </div>
      {/* Page Heading */}
      <div className="text-center mt-10 ">
        <h4 className="font-light text-[#C4C4C4] text-lg font-light font-editorial-new">Leaderboard</h4>
        <h1 className="font-bold text-[40px] text-white">
          The latest ranking from our DAO
        </h1>
        <h3 className="text-[#94969C]">
          The latest perk for top governance holders and NFT staking.
        </h3>
      </div>

      {/* Leaderboard Boost Section */}
      <div style={{backgroundImage:'linear-gradient(to right, #3C1B51 , #090118)'}} className="w-[75%] z-20 bg-[] mx-auto flex flex-row justify-between border-[2px] border-[#C787E6] rounded-lg mt-[50px] p-2">
        <div className="pt-4">
          <h5 className="text-white text-lg font-semibold ">Leaderboard Boost:</h5>
          <div className="flex items-center gap-2 mt-2">
            <FaBolt className="text-blue-400 text-lg" />
            <h4
              className="text-transparent bg-clip-text text-lg font-semibold"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #27CBFF, #FFFFFFFF, #27CBFF,rgb(240, 238, 241), #FFFFFFFF)",
              }}
            >
              Governance Multiplier
            </h4>
            <span className="flex flex-row justify-between bg-blue-500 text-white text-sm px-[6px] py-[2px] rounded-2xl  gap-[2px]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #015570, #22C5F9)",
              }}>
              <FaBolt className="text-white text-sm mt-[5px]" />1.0x
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaBolt className="text-purple-400 text-lg" />
            <h4
              className="text-transparent bg-clip-text text-lg font-semibold"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #C69BF9, #FFFFFFFF, #C69BF9, #C69BF9)",
              }}
            >
              NFT Multiplier
            </h4>
            <span className="flex flex-row justify-between bg-purple-500 text-white text-sm px-[6px] py-[1.5px] rounded-2xl  gap-[2px]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #3B1A51, #853BB7)",
              }}>
              <FaBolt className="text-white text-sm mt-[5px]" />1%
            </span>
          </div>
          <p className="text-[#C4C4C4] mt-2 text-sm pt-4">
            Improve your ranking with governance activities on Realms staking and <br /> multipliers rewards from NFT staking.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <CountdownTimer targetDate="2025-02-10T00:00:00Z" />

        </div>
      </div>


      {/* Rewards Section */}
      <div className="w-[75%] z-20 mx-auto flex flex-row justify-between border-2 border-[#BDECC333] rounded-lg mt-[20px] p-8 bg-[#061E1EBA] ">
        <div>
          <h5 className="text-[#BDECC3] font-semibold text-lg flex items-center gap-2">
            <FaPlaneDeparture className="text-blue-300 text-xl " />
            Top 5: Free Trip to ThailandDAO
          </h5>
          <h4 className="text-white text-lg mt-1 flex items-center gap-2">
            <MdEmojiEvents className="text-red-400 text-xl" />
            Top 50: VIP Event and Parties
          </h4>
        </div>



        <img src="island.png" alt="" className="w-[82px] h-[82px] border-2 border-[#BDEBC3] rounded-full flex items-center justify-center " />
      </div>


      {/* Leaderboard Table */}
      <LeaderboardTable />
      <div className="absolute bottom-0  self-start h-[0px] overflow-x-visible  w-[00px]">
        <div className="relative  h-full self-start">

        <div className="absolute  hidden md:block  h-[402px] w-[37px] bg-[#9A59BA] rounded-[100%]  -bottom-[4rem] left-[rem] rotate-[deg] blur-[150px] -z-100"></div>
        <div className="absolute  hidden md:block  h-[50px] w-[157px] bg-[#9A59BA] rounded-[100%]  bottom-0 left-[rem]  blur-[150px] -z-100"></div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
