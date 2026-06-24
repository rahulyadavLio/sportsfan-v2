import svgPaths from "./svg-bltntz41gf";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p33f6b680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15.8333 10H4.16667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonGoBackToRecordsExplorer() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[44px]" data-name="Button - Go back to records explorer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-white top-0 tracking-[-0.4097px] whitespace-nowrap">AFI Records Overview</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[52px] relative shrink-0 w-[248.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] tracking-[-0.1504px] whitespace-nowrap">All disciplines and record comparisons</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52px] items-center pl-[-8px] relative shrink-0 w-full" data-name="Container">
      <ButtonGoBackToRecordsExplorer />
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[20px] px-[16px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[43.5px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Category: All</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCategoryAll() {
  return (
    <div className="absolute bg-[#161616] content-stretch flex gap-[8px] h-[48px] items-center left-0 px-[18px] py-[14px] rounded-[16777200px] top-0 w-[145.508px]" data-name="Button - Category: All">
      <div aria-hidden="true" className="absolute border-2 border-[#222] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Text />
      <Icon1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Discipline: All</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDisciplineAll() {
  return (
    <div className="absolute bg-[#161616] content-stretch flex gap-[8px] h-[48px] items-center left-[153.51px] px-[18px] py-[14px] rounded-[16777200px] top-0 w-[148.813px]" data-name="Button - Discipline: All">
      <div aria-hidden="true" className="absolute border-2 border-[#222] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Text1 />
      <Icon2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">By Gap</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSortByGap() {
  return (
    <div className="absolute bg-[#161616] content-stretch flex gap-[8px] h-[48px] items-center left-0 px-[18px] py-[14px] rounded-[16777200px] top-[56px] w-[107.266px]" data-name="Button - Sort: By Gap">
      <div aria-hidden="true" className="absolute border-2 border-[#222] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Text2 />
      <Icon3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Container">
      <ButtonCategoryAll />
      <ButtonDisciplineAll />
      <ButtonSortByGap />
    </div>
  );
}

function SearchInputSearchEvents() {
  return (
    <div className="absolute bg-[#161616] h-[48px] left-0 rounded-[16px] top-0 w-[358px]" data-name="Search Input - Search events">
      <div className="content-stretch flex items-center overflow-clip pl-[44px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Search events...</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#222] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <SearchInputSearchEvents />
      <Icon4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[180px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-black content-stretch flex flex-col h-[277px] items-start pb-px relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#222] border-b border-solid inset-0 pointer-events-none" />
      <Container />
      <Container3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_48_1129)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p245eb100} id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18635ff0} id="Vector_3" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_48_1129">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[129.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px tracking-[0.3px] uppercase whitespace-nowrap">Closest to World</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[18px] top-[18px] w-[164px]" data-name="Container">
      <Icon5 />
      <Text3 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-[18px] top-[42px] w-[164px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px] whitespace-nowrap">100m</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20px] left-[18px] top-[74px] w-[164px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#10b981] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">6.5% gap</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#161616] h-[112px] relative rounded-[16px] shrink-0 w-[200px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#222] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container9 />
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa1bcac0} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f7f3780} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[87.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px tracking-[0.3px] uppercase whitespace-nowrap">Largest Gap</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[18px] top-[18px] w-[164px]" data-name="Container">
      <Icon6 />
      <Text4 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[28px] left-[18px] top-[42px] w-[164px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px] whitespace-nowrap">Javelin</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20px] left-[18px] top-[74px] w-[164px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#ef4444] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">8.7% gap</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#161616] h-[112px] relative rounded-[16px] shrink-0 w-[200px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#222] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container11 />
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[107.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px tracking-[0.3px] uppercase whitespace-nowrap">Most Improved</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[18px] top-[18px] w-[164px]" data-name="Container">
      <Icon7 />
      <Text5 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[28px] left-[18px] top-[42px] w-[164px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px] whitespace-nowrap">Javelin</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[20px] left-[18px] top-[74px] w-[164px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#f59e0b] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Neeraj Chopra</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#161616] h-[112px] relative rounded-[16px] shrink-0 w-[200px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#222] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container13 />
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start pb-[8px] px-[16px] relative size-full">
          <Container8 />
          <Container10 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-start px-[-16px] relative shrink-0 w-full" data-name="Section">
      <Container7 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[4px] not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[0.1996px] uppercase whitespace-nowrap">Records Table</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Javelin</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#0d0d0d] h-[23px] relative rounded-[16777200px] shrink-0 w-[39.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[8px] not-italic text-[#99a1af] text-[10px] top-[4.5px] tracking-[0.3672px] uppercase whitespace-nowrap">Men</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[102.25px]" data-name="Container">
      <Heading2 />
      <Text6 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[322px]" data-name="Container">
      <Container17 />
      <div className="absolute flex items-center justify-center left-[302px] size-[20px] top-[2px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[47.836px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">National</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[16px] top-[52px] w-[322px]" data-name="Container">
      <Text7 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">89.94m</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[33.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">World</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[46.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[12px] text-white top-px whitespace-nowrap">98.48m</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[16px] top-[76px] w-[322px]" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[119.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">Gap to World Record</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30.32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#f59e0b] text-[12px] top-px whitespace-nowrap">8.7%</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container23() {
  return <div className="bg-[#f59e0b] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container22() {
  return (
    <div className="bg-[#0d0d0d] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[41.867px] relative size-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[28px] items-start left-[16px] top-[104px] w-[322px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function ButtonJavelinMenRecordGap87CollapseDetails() {
  return (
    <div className="h-[148px] relative shrink-0 w-full" data-name="Button - Javelin Men record. Gap: 8.7%. Collapse details">
      <Container16 />
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 text-[#c9115f] text-[12px] top-px tracking-[0.3px] uppercase">National Record</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 text-[14px] text-white top-[24.5px] tracking-[-0.1504px]">Neeraj Chopra</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#99a1af] text-[12px] top-[49px]">Aug 7, 2022 • Stockholm, SWE</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#99a1af] text-[12px] top-[65px]">Diamond League</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 text-[#c0c0c0] text-[12px] top-px tracking-[0.3px] uppercase">Olympic Record</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 text-[14px] text-white top-[24.5px] tracking-[-0.1504px]">A. Thorkildsen</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#99a1af] text-[12px] top-[49px]">Aug 23, 2008 • Beijing, CHN</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#99a1af] text-[12px] top-[65px]">Olympic Games</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 text-[#cd620e] text-[12px] top-px tracking-[0.3px] uppercase">World Record</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 text-[14px] text-white top-[24.5px] tracking-[-0.1504px]">Jan Železný</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#99a1af] text-[12px] top-[49px]">May 25, 1996 • Jena, GER</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#99a1af] text-[12px] top-[65px]">World Record</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[306px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#222] border-solid border-t-2 inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic pt-[18px] px-[16px] relative size-full whitespace-nowrap">
        <Container25 />
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function JavelinMenDetailedInformation() {
  return (
    <div className="content-stretch flex flex-col h-[306px] items-start overflow-clip relative shrink-0 w-full" data-name="Javelin Men detailed information">
      <Container24 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#161616] h-[458px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[2px] relative size-full">
          <ButtonJavelinMenRecordGap87CollapseDetails />
          <JavelinMenDetailedInformation />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#222] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">100m</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#0d0d0d] h-[23px] relative rounded-[16777200px] shrink-0 w-[39.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[8px] not-italic text-[#99a1af] text-[10px] top-[4.5px] tracking-[0.3672px] uppercase whitespace-nowrap">Men</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[24px] relative shrink-0 w-[91.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Heading3 />
        <Text12 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[16px] top-[16px] w-[322px]" data-name="Container">
      <Container30 />
      <Icon9 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[47.836px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">National</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[16px] top-[52px] w-[322px]" data-name="Container">
      <Text13 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">10.26s</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[33.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">World</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[33.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[12px] text-white top-px whitespace-nowrap">9.58s</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[16px] top-[76px] w-[322px]" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[119.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">Gap to World Record</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[31.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#f59e0b] text-[12px] top-px whitespace-nowrap">6.6%</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container36() {
  return <div className="bg-[#f59e0b] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container35() {
  return (
    <div className="bg-[#0d0d0d] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[109.484px] relative size-full">
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[28px] items-start left-[16px] top-[104px] w-[322px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Button100MMenRecordGap66ExpandDetails() {
  return (
    <div className="h-[148px] relative shrink-0 w-full" data-name="Button - 100m Men record. Gap: 6.6%. Expand details">
      <Container29 />
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#161616] h-[152px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[2px] relative size-full">
          <Button100MMenRecordGap66ExpandDetails />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#222] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[43.758px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">100m</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-[#0d0d0d] flex-[1_0_0] h-[23px] min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[8px] not-italic text-[#99a1af] text-[10px] top-[4.5px] tracking-[0.3672px] uppercase whitespace-nowrap">Women</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[24px] relative shrink-0 w-[109.789px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Heading4 />
        <Text18 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[16px] top-[16px] w-[322px]" data-name="Container">
      <Container39 />
      <Icon10 />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[47.836px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">National</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[16px] top-[52px] w-[322px]" data-name="Container">
      <Text19 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">11.22s</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16px] relative shrink-0 w-[33.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">World</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[16px] relative shrink-0 w-[39.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[12px] text-white top-px whitespace-nowrap">10.49s</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-[16px] top-[76px] w-[322px]" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[16px] relative shrink-0 w-[119.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">Gap to World Record</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#f59e0b] text-[12px] top-px whitespace-nowrap">6.5%</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Container45() {
  return <div className="bg-[#f59e0b] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container44() {
  return (
    <div className="bg-[#0d0d0d] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[112.703px] relative size-full">
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[28px] items-start left-[16px] top-[104px] w-[322px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Button100MWomenRecordGap65ExpandDetails() {
  return (
    <div className="h-[148px] relative shrink-0 w-full" data-name="Button - 100m Women record. Gap: 6.5%. Expand details">
      <Container38 />
      <Container40 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#161616] h-[152px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[2px] relative size-full">
          <Button100MWomenRecordGap65ExpandDetails />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#222] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[778px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container28 />
      <Container37 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[814px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading1 />
      <Container14 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[982px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
        <Section />
        <Section1 />
      </div>
    </div>
  );
}

function OverviewData() {
  return (
    <div className="content-stretch flex flex-col h-[982px] items-start overflow-clip relative shrink-0 w-full" data-name="Overview data">
      <Container6 />
    </div>
  );
}

export default function OverviewScreen() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative size-full" data-name="OverviewScreen">
      <Header />
      <OverviewData />
    </div>
  );
}