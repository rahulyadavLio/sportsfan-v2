import svgPaths from "./svg-7wb2qfyrdi";
import imgImageLiveMatch from "./792bb0f1b722ca941fc81a79346de440c744571e.png";
import imgImageExpert from "./cbf3da193f4d3ded07f7fd0951d0dc9f987c672b.png";

function Container() {
  return (
    <div className="absolute bg-[#161616] h-[61px] left-0 top-[320.25px] w-[371px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1a1a1a] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container1() {
  return <div className="absolute h-[365.75px] left-0 top-[381.25px] w-[371px]" data-name="Container" />;
}

function ImageLiveMatch() {
  return (
    <div className="absolute h-[214.25px] left-0 top-0 w-[371px]" data-name="Image (Live Match)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageLiveMatch} />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-1/4 right-[16.67%] top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
            <path d="M2 2L30 20L2 38V2Z" fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[16777200px] shrink-0 size-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] content-stretch flex h-[214.25px] items-center justify-center left-0 px-[137.5px] top-0 w-[371px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function ImageExpert() {
  return (
    <div className="absolute left-0 size-[92px] top-0" data-name="Image (Expert)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageExpert} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[16px] not-italic text-[12px] text-white top-[-0.25px] whitespace-nowrap">Harsha</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(0,0,0,0.9)] h-[24px] items-start left-0 pt-[4px] px-[8px] to-[rgba(0,0,0,0)] top-[68px] w-[92px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute border-2 border-[#c9115f] border-solid left-[263px] overflow-clip rounded-[100px] size-[96px] top-[106.25px]" data-name="Container">
      <ImageExpert />
      <Container6 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p38532b20} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 8.5V4.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 8.5V2.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 8.5V7" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#c9115f] h-[28px] left-[12px] rounded-[16777200px] top-[174.25px] w-[176.586px]" data-name="Container">
      <Icon1 />
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[28px] not-italic text-[12px] text-white top-[7px] whitespace-nowrap">Live Prediction • 00:19</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-black h-[214.25px] left-0 top-[106px] w-[371px]" data-name="Container">
      <ImageLiveMatch />
      <Container3 />
      <Container5 />
      <Container7 />
    </div>
  );
}

function IplWatchAlongPlayer() {
  return (
    <div className="absolute bg-[#0a0a0a] h-[1098px] left-[2px] top-[2px] w-[371px]" data-name="IPLWatchAlongPlayer">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 13.3333">
            <path d={svgPaths.p37c3e100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M12.5 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container11() {
  return <div className="bg-white relative rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[-3px] not-italic text-[12px] text-white top-0 whitespace-nowrap">LIVE</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#fb2c36] h-[28px] relative rounded-[16777200px] shrink-0 w-[65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
        <Container11 />
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Harsha Bhogle</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[175.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container10 />
        <Text1 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.5%_66.67%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_62.5%_37.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_12.5%_8.33%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[56.29%_35.75%_27.13%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35861 4.9836">
            <path d={svgPaths.p159ed400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.13%_35.79%_56.29%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35027 4.9836">
            <path d={svgPaths.p93d600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-w-px relative rounded-[16777200px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] relative size-full">
          <Button />
          <Container9 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[25.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#e60000] text-[12px] top-px whitespace-nowrap">RCB</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px] whitespace-nowrap">156/3</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">(15.2 ov)</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[28px] relative shrink-0 w-[147.773px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text2 />
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">(20 ov)</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px] whitespace-nowrap">158/4</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#007cfd] text-[12px] top-px whitespace-nowrap">MI</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[28px] relative shrink-0 w-[128.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text5 />
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#161616] h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1a1a1a] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[9px] px-[20px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function IplWatchAlongPlayer1() {
  return (
    <div className="absolute bg-[rgba(10,10,10,0.95)] content-stretch flex flex-col items-start left-[2px] pb-px top-[2px] w-[371px]" data-name="IPLWatchAlongPlayer">
      <div aria-hidden="true" className="absolute border-[#1a1a1a] border-b border-solid inset-0 pointer-events-none" />
      <Container8 />
      <Container13 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#c9115f] h-[32px] relative rounded-[20px] shrink-0 w-[92px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">{` Prediction`}</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#222] h-[32px] relative rounded-[20px] shrink-0 w-[88px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Flash Quiz</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#222] h-[32px] relative rounded-[20px] shrink-0 w-[79px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Live Chat</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#222] h-[32px] relative rounded-[20px] shrink-0 w-[96px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Emoji Storm</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-start left-[14px] overflow-clip top-[340px] w-[448px]" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Live Predictions</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[134.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon4 />
        <Heading />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p13058e80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b81ea80} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3b3a5000} id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">12.8k</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[16px] relative shrink-0 w-[45.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon5 />
        <Text8 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#161616] h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1a1a1a] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[20px] relative size-full">
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="flex-[239.117_0_0] h-[20px] min-w-px relative" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Will RCB win this match?</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_25_2723)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_25_2723">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#c9115f] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">2:45</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[rgba(201,17,95,0.15)] h-[23px] relative rounded-[16777200px] shrink-0 w-[53.883px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
        <Icon6 />
        <Text9 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[23px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-[rgba(201,17,95,0.2)] h-[44px] left-px top-px w-[203.313px]" data-name="Container" />;
}

function Container30() {
  return <div className="bg-[#c9115f] relative rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text10() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Yes</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container30 />
        <Text10 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[34.5px] not-italic text-[#808080] text-[12px] text-center top-px whitespace-nowrap">8,542 votes</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33.336px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[17.5px] not-italic text-[#c9115f] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">68%</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1977ee80} id="Vector" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3471a100} id="Vector_2" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[20px] relative shrink-0 w-[139.914px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text11 />
        <Text12 />
        <Icon7 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-px px-[16px] top-px w-[299px]" data-name="Container">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(201,17,95,0.05)] h-[46px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container27 />
        <Container28 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9115f] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container32() {
  return <div className="absolute bg-[#2a2a2a] h-[44px] left-px top-px w-[95.68px]" data-name="Container" />;
}

function Text13() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[9.5px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">No</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[33.5px] not-italic text-[#808080] text-[12px] text-center top-px whitespace-nowrap">4,012 votes</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">32%</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-[111.016px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text14 />
        <Text15 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-px px-[16px] top-px w-[299px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#1a1a1a] h-[46px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container32 />
        <Container33 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-start relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p13058e80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p3b81ea80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p3b3a5000} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] top-px whitespace-nowrap">12,554 predictions</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[16px] relative shrink-0 w-[121.195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon8 />
        <Text16 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[116.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#10b981] text-[12px] top-px whitespace-nowrap">✓ Your vote counted</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[25px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-solid border-t inset-0 pointer-events-none" />
      <Container37 />
      <Text17 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#161616] h-[206px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container24 />
        <Container26 />
        <Container36 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="flex-[240.867_0_0] h-[20px] min-w-px relative" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Next wicket in how many overs?</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_25_2723)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_25_2723">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#c9115f] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">5:12</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[rgba(201,17,95,0.15)] h-[23px] relative rounded-[10px] shrink-0 w-[52.133px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
        <Icon9 />
        <Text18 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[23px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return <div className="absolute bg-[rgba(201,17,95,0.2)] h-[44px] left-px top-px w-[125.578px]" data-name="Container" />;
}

function Container45() {
  return <div className="bg-[#c9115f] relative rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text19() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[32px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">0-2 overs</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[20px] relative shrink-0 w-[79.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container45 />
        <Text19 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16px] relative shrink-0 w-[68.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[34.5px] not-italic text-[#808080] text-[12px] text-center top-px whitespace-nowrap">3,245 votes</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16.5px] not-italic text-[#c9115f] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">42%</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1977ee80} id="Vector" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3471a100} id="Vector_2" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text20 />
        <Text21 />
        <Icon10 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-px px-[16px] top-px w-[299px]" data-name="Container">
      <Container44 />
      <Container46 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[rgba(201,17,95,0.05)] h-[46px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container42 />
        <Container43 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9115f] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container47() {
  return <div className="absolute bg-[#2a2a2a] h-[44px] left-px top-px w-[110.625px]" data-name="Container" />;
}

function Text22() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[32px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">3-5 overs</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[20px] relative shrink-0 w-[63.703px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text22 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[33.5px] not-italic text-[#808080] text-[12px] text-center top-px whitespace-nowrap">2,891 votes</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[31.883px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">37%</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[20px] relative shrink-0 w-[110.758px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text23 />
        <Text24 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-px px-[16px] top-px w-[299px]" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#1a1a1a] h-[46px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container47 />
        <Container48 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container51() {
  return <div className="absolute bg-[#2a2a2a] h-[44px] left-px top-px w-[62.789px]" data-name="Container" />;
}

function Text25() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[29px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">6+ overs</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text25 />
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[33.5px] not-italic text-[#808080] text-[12px] text-center top-px whitespace-nowrap">1,634 votes</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[30.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[15px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">21%</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.164px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text26 />
        <Text27 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-px px-[16px] top-px w-[299px]" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#1a1a1a] h-[46px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container51 />
        <Container52 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[154px] items-start relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p13058e80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p3b81ea80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p3b3a5000} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text28() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] top-px whitespace-nowrap">7,770 predictions</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[16px] relative shrink-0 w-[112.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon11 />
        <Text28 />
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[16px] relative shrink-0 w-[116.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#10b981] text-[12px] top-px whitespace-nowrap">✓ Your vote counted</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[25px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-solid border-t inset-0 pointer-events-none" />
      <Container56 />
      <Text29 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#161616] h-[260px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container39 />
        <Container41 />
        <Container55 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="flex-[238.773_0_0] h-[20px] min-w-px relative" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Will there be a six in next over?</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_25_2723)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_25_2723">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#c9115f] text-[10px] top-[0.5px] tracking-[0.1172px] whitespace-nowrap">0:45</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[rgba(201,17,95,0.15)] h-[23px] relative rounded-[16777200px] shrink-0 w-[54.227px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
        <Icon12 />
        <Text30 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[23px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return <div className="absolute bg-[rgba(201,17,95,0.2)] h-[44px] left-px top-px w-[176.406px]" data-name="Container" />;
}

function Container64() {
  return <div className="bg-[#c9115f] relative rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text31() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Yes</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container64 />
        <Text31 />
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[34.5px] not-italic text-[#808080] text-[12px] text-center top-px whitespace-nowrap">6,234 votes</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.914px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[#c9115f] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">59%</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1977ee80} id="Vector" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3471a100} id="Vector_2" stroke="var(--stroke-0, #C9115F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[20px] relative shrink-0 w-[139.711px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text32 />
        <Text33 />
        <Icon13 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-px px-[16px] rounded-[6px] top-px w-[299px]" data-name="Container">
      <Container63 />
      <Container65 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[rgba(201,17,95,0.05)] h-[46px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container61 />
        <Container62 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9115f] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container66() {
  return <div className="absolute bg-[#2a2a2a] h-[44px] left-px top-px w-[122.586px]" data-name="Container" />;
}

function Text34() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[9.5px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">No</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text34 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[34px] not-italic text-[#808080] text-[12px] text-center top-px whitespace-nowrap">4,322 votes</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[30.664px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[15px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">41%</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[20px] relative shrink-0 w-[110.961px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text35 />
        <Text36 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-px px-[16px] top-px w-[299px]" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#1a1a1a] h-[46px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container66 />
        <Container67 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-start relative shrink-0 w-full" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p13058e80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p3b81ea80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p3b3a5000} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text37() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] top-px whitespace-nowrap">10,556 predictions</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[16px] relative shrink-0 w-[121.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon14 />
        <Text37 />
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[16px] relative shrink-0 w-[116.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#10b981] text-[12px] top-px whitespace-nowrap">✓ Your vote counted</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex h-[25px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-solid border-t inset-0 pointer-events-none" />
      <Container71 />
      <Text38 />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#161616] h-[206px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container58 />
        <Container60 />
        <Container70 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[736px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[20px] relative size-full">
        <Container23 />
        <Container38 />
        <Container57 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#808080] text-[12px] top-px whitespace-nowrap">Coming Next</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[20px] relative shrink-0 w-[173.461px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#a0a0a0] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Top scorer in next 5 overs?</p>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[16px] relative shrink-0 w-[103.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#808080] text-[12px] top-px whitespace-nowrap">Unlocks in 2 overs</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-[#161616] h-[46px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Text39 />
          <Text40 />
        </div>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[20px] relative shrink-0 w-[159.242px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#a0a0a0] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Will MI chase the target?</p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[16px] relative shrink-0 w-[71.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#808080] text-[12px] top-px whitespace-nowrap">After innings</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[#161616] h-[46px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Text41 />
          <Text42 />
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-start relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[161px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1a1a1a] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[17px] px-[20px] relative size-full">
        <Heading4 />
        <Container73 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[rgba(16,71,249,0.2)] h-[963px] items-start left-0 overflow-clip to-[rgba(20,10,110,0.2)] top-[383px] w-[375px]" data-name="Container">
      <Container19 />
      <Container22 />
      <Container72 />
    </div>
  );
}

export default function WatchAlong() {
  return (
    <div className="bg-[#0a0a0a] overflow-clip relative rounded-[16px] size-full" data-name="Watch Along">
      <IplWatchAlongPlayer />
      <IplWatchAlongPlayer1 />
      <Container17 />
      <Container18 />
    </div>
  );
}