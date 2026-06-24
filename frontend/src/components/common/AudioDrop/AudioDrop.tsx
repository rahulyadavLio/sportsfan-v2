import svgPaths from "./svg-87hfpu8d82";
import imgImageLockerRoom from "./943ca779db3d125572942a0897c9264dbf03174f.png";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface KeyMoment {
  timestamp: string; // e.g. "03:24"
  label: string;     // e.g. "Captain tactics"
}

export interface AudioDropTag {
  label: string;
  color: string; // hex color for the icon
}

export interface AudioDropData {
  // Header / episode info
  badgeLabel: string;        // e.g. "TACTICAL AUDIO DROP"
  episode: string;           // e.g. "EP 01"
  heroImage?: string;        // optional override image (falls back to default)

  // Main content
  title: string;             // e.g. "Marathon Mindset"
  subtitle: string;          // e.g. "Exclusive tactical briefing"
  descriptionParagraphs: string[];

  // Key moments section
  keyMoments: KeyMoment[];

  // Quote card
  quote: string;
  quoteAttribution: string;

  // Metadata cards
  recordedDate: string;      // e.g. "May 13, 2026"
  location: string;          // e.g. "Team Locker"

  // Stat pills
  listeningCount: string;    // e.g. "1.8k listening"
  trendingLabel: string;     // e.g. "Trending #2"
  categoryLabel: string;     // e.g. "Tactical"

  // Total duration label shown in player (e.g. "15:00")
  totalDuration: string;

  // Chapters count label
  chaptersLabel: string;     // e.g. "3 chapters"

  // Actual audio file URL for playback
  audioUrl: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const audioDropsData: Record<string, AudioDropData> = {
  "1": {
    badgeLabel: "QUALIFICATION UPDATE",
    episode: "EP 01",
    heroImage: "/audio_1.webp",

    title: "Tejaswin Shankar on CWG & Asian Games Qualification",
    subtitle: "Balancing the Decathlon and High Jump on the road to major championships",

    descriptionParagraphs: [
      "In this exclusive conversation, Indian athletics star Tejaswin Shankar shares his journey towards qualifying for both the Commonwealth Games and the Asian Games. As one of India's most versatile athletes, he explains what it takes to compete in the demanding decathlon while continuing to perform at the highest level in the high jump.",

      "Tejaswin discusses his preparation, competition schedule, and the importance of consistency during the qualification period. He reflects on the pride of representing India, the challenges of balancing two elite events, and his determination to secure qualification for both international championships."
    ],

    keyMoments: [
      { timestamp: "01:12", label: "Road to CWG & Asian Games qualification" },
      { timestamp: "03:48", label: "Managing Decathlon and High Jump together" },
      { timestamp: "07:05", label: "Representing India with pride" },
    ],

    chaptersLabel: "3 chapters",

    quote:
      "Every competition matters. The goal is to qualify, keep improving, and represent India on the biggest stage.",

    quoteAttribution: "— Tejaswin Shankar",

    recordedDate: "July 2025",
    location: "AFI Media Interaction",

    listeningCount: "2.3k listening",
    trendingLabel: "Trending #1",
    categoryLabel: "Qualification Update",

    totalDuration: "08:20",

    audioUrl:
      "https://res.cloudinary.com/dflnsufit/video/upload/v1782111513/Tejaswin_Shankar_speaks_about_qualifying_for_CWG_and_Asian_Games_in_Decathlon_and_high_jump_hiz15z.mp3",
  },


  "2": {
    badgeLabel: "TECHNIQUE BREAKDOWN",
    episode: "EP 01",
    heroImage: "/audio-2.jpg",

    title: "Technique Breakdown",
    subtitle: "Neeraj Chopra on mastering the javelin throw",
    descriptionParagraphs: [
      "Join Neeraj Chopra as he breaks down the science behind a world-class javelin throw. From the approach run and body positioning to grip, release angle, and follow-through, he explains how every movement contributes to achieving maximum distance.",
      "Drawing from years of international competition, Neeraj shares the techniques, discipline, and mental focus that have helped him succeed on the biggest stages, including the Commonwealth Games. Whether you're an aspiring athlete or simply a fan of athletics, this episode offers a rare look into the craft behind every throw."
    ],
    keyMoments: [
      { timestamp: "02:14", label: "Building the perfect run-up" },
      { timestamp: "06:28", label: "Grip, release & timing" },
      { timestamp: "10:56", label: "Mindset of a champion" },
    ],
    chaptersLabel: "3 chapters",
    quote: "A great throw is built on rhythm, balance, and trust in your technique.",
    quoteAttribution: "— Neeraj Chopra",
    recordedDate: "May 2026",
    location: "CWG Media Studio",
    listeningCount: "2.6k listening",
    trendingLabel: "Trending #1",
    categoryLabel: "Technique",
    totalDuration: "14:30",
    audioUrl: "https://res.cloudinary.com/dflnsufit/video/upload/v1781888619/neeraj_pgoa3r.mp3",
  },
  "3": {
    badgeLabel: "ATHLETE INSIGHTS",
    episode: "EP 01",
    heroImage: "/audio-3.jpg",

    title: "Parul on Endurance, Discipline",
    subtitle: "Parul Choudhary on the mindset behind distance running",
    descriptionParagraphs: [
      "Indian middle and long-distance runner Parul Choudhary shares what it takes to compete at the highest level, revealing how endurance is built through consistent training, patience, and unwavering discipline. She reflects on the daily habits that prepare her for major championships, including the Commonwealth Games.",
      "From balancing intense training sessions to staying mentally strong through setbacks, Parul offers a behind-the-scenes look at the dedication required to excel in distance running. Her journey is a reminder that success isn't built overnight—it's earned one step, one session, and one race at a time."
    ],
    keyMoments: [
      { timestamp: "02:08", label: "Building endurance over time" },
      { timestamp: "06:42", label: "Discipline beyond the track" },
      { timestamp: "11:15", label: "Preparing for the Commonwealth Games" },
    ],
    chaptersLabel: "3 chapters",
    quote: "Every training session adds up. Consistency is what turns effort into achievement.",
    quoteAttribution: "— Parul Choudhary",
    recordedDate: "May 2026",
    location: "CWG Media Studio",
    listeningCount: "2.1k listening",
    trendingLabel: "Trending #3",
    categoryLabel: "Athlete Insights",
    totalDuration: "13:45",
    audioUrl: "https://res.cloudinary.com/dflnsufit/video/upload/v1781888620/parul1_ucwqw4.mp3",
  },
  "4": {
    badgeLabel: "RECORD BREAKDOWN",
    episode: "EP 01",
    heroImage: "/audio-4.jpeg",

    title: "Take on Breaking Records & Training",
    subtitle: "Gurindervir Singh on speed, discipline, and chasing new milestones",
    descriptionParagraphs: [
      "India's fastest man, Gurindervir Singh, shares the journey behind breaking national records and the relentless training required to perform at the highest level. He discusses how speed is developed through consistency, technical precision, and years of focused preparation leading into major competitions like the Commonwealth Games.",
      "From explosive sprint sessions and recovery routines to handling expectations after record-breaking performances, Gurindervir offers an inside look at the mindset needed to keep improving. His story highlights the balance between physical preparation, mental resilience, and the constant pursuit of faster times."
    ],
    keyMoments: [
      { timestamp: "02:20", label: "Journey to breaking records" },
      { timestamp: "06:15", label: "Training for explosive speed" },
      { timestamp: "11:08", label: "Goals for the Commonwealth Games" },
    ],
    chaptersLabel: "3 chapters",
    quote: "Every record is just another starting line for the next challenge.",
    quoteAttribution: "— Gurindervir Singh",
    recordedDate: "May 2026",
    location: "CWG Media Studio",
    listeningCount: "2.3k listening",
    trendingLabel: "Trending #2",
    categoryLabel: "Record Breakdown",
    totalDuration: "14:05",
    audioUrl: "https://res.cloudinary.com/dflnsufit/video/upload/v1781888507/Gurindervir_Singh_lxh8ql.mp3",
  },
  "5": {
    badgeLabel: "ASIAN GAMES UPDATE",
    episode: "EP 01",
    heroImage: "/afi-logo.jpeg",

    title: "Asian Games Qualification Explained",
    subtitle: "Dr. Adille J. Sumariwalla on qualification pathways and athlete preparation",
    descriptionParagraphs: [
      "Athletics Federation of India President Dr. Adille J. Sumariwalla explains the qualification process for the Asian Games, providing clarity on selection standards, eligibility criteria, and the pathway athletes must follow to earn their place on Team India. He also discusses how qualification benchmarks help identify the country's strongest performers for international competition.",
      "In this insightful conversation, Dr. Sumariwalla also shares his perspective on athlete development, long-term planning, and India's preparations for upcoming multi-sport events. The episode offers fans a deeper understanding of how national teams are built and what it takes to compete at the highest level."
    ],
    keyMoments: [
      { timestamp: "02:12", label: "Qualification criteria explained" },
      { timestamp: "06:48", label: "Selection standards & process" },
      { timestamp: "11:20", label: "Preparing Team India" },
    ],
    chaptersLabel: "3 chapters",
    quote: "Selection isn't just about one performance—it's about consistency, preparation, and meeting international standards.",
    quoteAttribution: "— Dr. Adille J. Sumariwalla",
    recordedDate: "May 2026",
    location: "AFI Media Studio",
    listeningCount: "1.9k listening",
    trendingLabel: "Trending #4",
    categoryLabel: "Asian Games",
    totalDuration: "13:20",
    audioUrl: "https://res.cloudinary.com/dflnsufit/video/upload/v1781931537/audio_vocals_5_ltb0gt.mp3",
  },
};

// ─── Props ────────────────────────────────────────────────────────────────────

export interface AudioDropProps {
  data: AudioDropData;
}

// ─── Internal sub-components ──────────────────────────────────────────────────

function ImageLockerRoom({ src }: { src: string }) {
  return (
    <div className="absolute blur-[12.5px] h-[1126.4px] left-[-19.5px] top-[-51.2px] w-[429px]" data-name="Image (Locker room)">
      <div className="absolute inset-0 opacity-40 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-215.57%] max-w-none top-[0.02%] w-[445.65%]" src={src} />
      </div>
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-gradient-to-b from-[rgba(11,11,15,0.4)] h-[1024px] left-0 to-[#0b0b0f] top-0 via-1/2 via-[rgba(11,11,15,0.6)] w-[390px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute h-[1024px] left-0 top-0 w-[390px]" style={{ backgroundImage: "linear-gradient(106.831deg, rgba(130, 24, 26, 0.2) 4.553%, rgba(0, 0, 0, 0) 50%, rgba(89, 22, 139, 0.2) 95.447%)" }} data-name="Container" />;
}

function Container1({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="absolute h-[1024px] left-0 overflow-clip top-0 w-[390px]" data-name="Container">
      <ImageLockerRoom src={imageSrc} />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[11px] size-[20px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.1)] border-solid left-[20px] rounded-[16777200px] size-[44px] top-[24px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Container4({ badgeLabel, episode }: { badgeLabel: string; episode: string }) {
  return (
    <div className="absolute h-[30px] left-[74px] rounded-[16777200px] top-[31px] w-[242.617px]" data-name="Container">
      {/* Badge label */}
      <div className="absolute h-[16px] left-[13px] top-[7px] w-[164.195px]" data-name="Text">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#ff6467] text-[12px] top-px tracking-[1.2px] whitespace-nowrap">
          {badgeLabel}
        </p>
      </div>
      {/* Dot separator */}
      <div className="absolute bg-[#ff6467] left-[185.2px] rounded-[16777200px] size-[4px] top-[13px]" data-name="Text" />
      {/* Episode */}
      <div className="absolute h-[16px] left-[197.2px] top-[7px] w-[32.422px]" data-name="Text">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#d1d5dc] text-[12px] top-px whitespace-nowrap">
          {episode}
        </p>
      </div>
    </div>
  );
}

function Container6({ title, subtitle, imageSrc }: { title: string; subtitle: string; imageSrc: string }) {
  return (
    <div className="absolute left-[20px] top-[16px] w-[350px]">
      {/* Title */}
      <div className="w-full min-h-[72px]">
        <p
          className="
        w-full
        text-center
        text-white
        text-[30px]
        font-bold
        leading-[36px]
        tracking-[0.3955px]
        break-words
        line-clamp-2
      "
        >
          {title}
        </p>
      </div>

      {/* Subtitle */}
      <div className="mt-2 w-full">
        <p
          className="
        text-center
        text-[#99a1af]
        text-[14px]
        leading-[20px]
        break-words
      "
        >
          {subtitle}
        </p>
      </div>

      {/* Hero image */}
      <div className="relative mt-4 w-[350px] h-[350px] overflow-hidden rounded-[10px]">
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Volume slider decoration */}
      <div
        className="absolute flex h-[298.22px] items-center justify-center left-[4.56px] top-[160px] w-[30px]"
        style={
          {
            "--transform-inner-width": "1200",
            "--transform-inner-height": "38",
          } as React.CSSProperties
        }
      >
        <div className="-rotate-90 flex-none">
          <div className="h-[30px] relative w-[298.22px]" data-name="Container">
            <div className="absolute left-[14px] rounded-[15px] size-[30px] top-[0.15px]" data-name="MuiButtonBaseRoot">
              <div className="absolute flex items-center justify-center left-[4.95px] size-[20.106px] top-[4.95px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
                <div className="flex-none rotate-[90.3deg]">
                  <div className="relative size-[20px]" data-name="MuiSvgIconRoot">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="MuiSvgIconRoot">
                        <path d={svgPaths.p38283500} fill="var(--fill-0, #4A4A55)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#6a6a75] h-[4px] left-[42.1px] opacity-38 rounded-[12px] top-[13px] w-[222.518px]" data-name="MuiSliderRail" />
            <div className="absolute bg-[#4a4a55] border border-[#4a4a55] border-solid h-[5px] left-[42.37px] rounded-[12px] top-[12.44px] w-[179px]" data-name="MuiSliderTrack" />
            <div className="absolute bg-[#4a4a55] left-[216.84px] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[10px] top-[9.9px]" data-name="MuiSliderThumb" />
            <div className="absolute flex h-[24.797px] items-center justify-center left-[268.6px] top-[1.96px] w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="h-[16px] relative w-[24.797px]" data-name="Text">
                  <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[12.29px] not-italic text-[#4a4a55] text-[14px] text-center top-px whitespace-nowrap">70</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Static waveform bars */
function WaveformBars() {
  return (
    <div className="absolute h-[46px] left-[14px] top-[-2px] w-[456px]" data-name="Container">
      {/* Played bars (orange→red gradient) */}
      {[
        { h: 40, l: 0 }, { h: 48.867, l: 5.3 }, { h: 54.031, l: 10.59 }, { h: 53.891, l: 15.9 },
        { h: 47.977, l: 21.2 }, { h: 37.094, l: 26.5 }, { h: 23.18, l: 31.8 }, { h: 8.906, l: 37.09 },
      ].map(({ h, l }, i) => (
        <div key={`p-${i}`} className="absolute bg-gradient-to-t from-[#dc2626] rounded-[16777200px] to-[#f97316] w-[3.297px]"
          style={{ height: `${h}px`, left: `${l}px`, top: `${(80 - h) / 2}px` }} />
      ))}
      {/* Played bars (pink) */}
      {[
        { h: 0, l: 42.4 }, { h: 0, l: 47.7 }, { h: 0, l: 53 }, { h: 0, l: 58.3 },
        { h: 4.063, l: 42.59 }, { h: 16.68, l: 47.9 }, { h: 29.289, l: 53.2 },
        { h: 39.383, l: 58.5 }, { h: 45.18, l: 63.8 }, { h: 46.016, l: 69.09 },
        { h: 42.391, l: 74.4 }, { h: 35.852, l: 79.7 },
        { h: 28.477, l: 85 }, { h: 22.398, l: 90.3 }, { h: 19.203, l: 95.59 }, { h: 19.539, l: 100.9 },
      ].map(({ h, l }, i) => (
        <div key={`pp-${i}`} className="absolute rounded-[16777200px] w-[3.297px]"
          style={{ height: `${h}px`, left: `${l}px`, top: `${(80 - h) / 2}px`, background: h > 0 ? '#c9115f' : 'rgba(255,255,255,0.15)' }} />
      ))}
      {/* Unplayed bars */}
      {[
        { h: 5.867, l: 152.8 }, { h: 18.813, l: 158.09 }, { h: 33.289, l: 163.4 }, { h: 46.469, l: 168.7 },
        { h: 55.758, l: 174 }, { h: 59.367, l: 179.3 }, { h: 56.719, l: 184.59 }, { h: 48.547, l: 189.9 },
        { h: 2.484, l: 148.59 }, { h: 0, l: 174.9 }, { h: 0, l: 180.2 }, { h: 0, l: 185.5 },
        { h: 36.711, l: 195.2 }, { h: 23.773, l: 200.5 }, { h: 12.367, l: 205.8 }, { h: 4.633, l: 211.09 },
        { h: 1.727, l: 216.4 }, { h: 3.633, l: 221.7 }, { h: 9.195, l: 227 }, { h: 16.492, l: 232.3 },
        { h: 23.344, l: 237.59 }, { h: 27.875, l: 242.9 }, { h: 29.023, l: 248.2 }, { h: 26.742, l: 253.5 },
        { h: 22.047, l: 258.8 }, { h: 5.867, l: 262.8 }, { h: 18.813, l: 268.09 }, { h: 33.289, l: 273.4 },
        { h: 46.469, l: 278.7 }, { h: 55.758, l: 284 }, { h: 59.367, l: 289.3 }, { h: 56.719, l: 294.59 },
        { h: 48.547, l: 299.9 }, { h: 36.711, l: 305.2 }, { h: 23.773, l: 310.5 }, { h: 12.367, l: 315.8 },
        { h: 4.633, l: 321.09 }, { h: 1.727, l: 326.4 }, { h: 3.633, l: 331.7 },
        { h: 0, l: 376.3 }, { h: 0, l: 381.59 }, { h: 0, l: 386.9 }, { h: 0, l: 392.2 },
      ].map(({ h, l }, i) => (
        <div key={`u-${i}`} className="absolute rounded-[16777200px] w-[3.297px]"
          style={{ height: `${h}px`, left: `${l}px`, top: `${(80 - h) / 2}px`, background: 'rgba(255,255,255,0.15)' }} />
      ))}
      {/* Playhead needle */}
      <div className="absolute flex h-[80px] items-center justify-center left-[53px] top-0 w-[4px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[80px] relative w-[4px]" style={{ backgroundImage: "linear-gradient(rgb(255, 137, 4) 0%, rgb(255, 127, 21) 7.1429%, rgb(255, 116, 31) 14.286%, rgb(254, 105, 38) 21.429%, rgb(254, 93, 43) 28.571%, rgb(253, 79, 47) 35.714%, rgb(252, 64, 51) 42.857%, rgb(251, 44, 54) 50%, rgba(205, 34, 42, 0.86) 57.143%)" }} data-name="Container">
            <div className="absolute bg-[#fb2c36] left-[-4px] rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(251,44,54,0.7)] size-[12px] top-[15px]" data-name="Container" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8({ totalDuration }: { totalDuration: string }) {
  return (
    <div className="absolute h-[387px] left-[20px] top-[445px] w-[350px]" data-name="Container">
      {/* Waveform card */}
      <div className="absolute bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)] border-solid h-[80px] left-0 rounded-[16px] top-0 w-[350px]" data-name="Container">
        <WaveformBars />
      </div>
      {/* Time labels */}
      <div className="absolute h-[16px] left-0 top-[92px] w-[350px]" data-name="Container">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[4px] not-italic text-[#99a1af] text-[12px] top-0 whitespace-nowrap">2:14</p>
        <div className="absolute h-[16px] left-[314.34px] top-0 w-[31.664px]" data-name="Text">
          <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">{totalDuration}</p>
        </div>
      </div>
      {/* Progress track */}
      <div className="absolute bg-[rgba(255,255,255,0.4)] h-[4px] left-0 opacity-38 rounded-[12px] top-[137px] w-[350px]" data-name="MuiSliderRail" />
      <div className="absolute bg-[#c9115f] border border-[#c9115f] border-solid h-[4px] left-[0.05px] rounded-[12px] top-[137px] w-[52px]" data-name="MuiSliderTrack" />
      <div className="absolute bg-[#c9115f] left-[46.11px] rounded-[6px] size-[12px] top-[133px]" data-name="MuiSliderThumb">
        <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[6px] size-[12px] top-0" data-name="Text" />
      </div>
      {/* Controls row */}
      <div className="absolute h-[56px] left-0 top-[164px] w-[350px]" data-name="Container">
        {/* Prev */}
        <div className="absolute left-[67px] rounded-[24px] size-[48px] top-[4px]" data-name="MuiButtonBaseRoot">
          <div className="absolute left-[8px] size-[32px] top-[8px]" data-name="MuiSvgIconRoot">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="MuiSvgIconRoot">
                <path d={svgPaths.p16e60c00} fill="var(--fill-0, white)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
        {/* Play */}
        <div className="absolute bg-[#c9115f] drop-shadow-[0px_18.75px_9.375px_rgba(231,0,11,0.4)] left-[147px] rounded-[16777200px] size-[56px] top-0" data-name="Button">
          <div className="absolute left-[14px] size-[28px] top-[14px]" data-name="MuiSvgIconRoot">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <g id="MuiSvgIconRoot">
                <path d={svgPaths.p3bbb6a80} fill="var(--fill-0, white)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
        {/* Next */}
        <div className="absolute left-[235px] rounded-[24px] size-[48px] top-[4px]" data-name="MuiButtonBaseRoot">
          <div className="absolute left-[8px] size-[32px] top-[8px]" data-name="MuiSvgIconRoot">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="MuiSvgIconRoot">
                <path d={svgPaths.p2d3ba680} fill="var(--fill-0, white)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* Action buttons row */}
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[85px] left-[2px] rounded-[16px] top-[235px] w-[350px]" style={{ backgroundImage: "linear-gradient(166.35deg, rgb(26, 26, 38) 0%, rgb(24, 24, 36) 20%, rgb(23, 23, 33) 40%, rgb(21, 21, 31) 60%, rgb(20, 20, 28) 80%, rgb(18, 18, 26) 100%)" }} data-name="Container">
        {/* Playlist */}
        <div className="absolute h-[57px] left-[12px] rounded-[14px] top-[13px] w-[102px]" data-name="Button">
          <div className="absolute left-[41px] size-[20px] top-[8px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Icon">
                <path d="M17.5 12.5V5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p139fc780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M10 10H2.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M13.3333 5H2.5" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M10 15H2.5" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
            </svg>
          </div>
          <div className="absolute h-[15px] left-[33.21px] top-[34px] w-[35.578px]" data-name="Text">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[18.5px] not-italic text-[#99a1af] text-[10px] text-center top-[0.5px] tracking-[0.1172px] whitespace-nowrap">Playlist</p>
          </div>
        </div>
        {/* Signal (active) */}
        <div className="absolute border border-[rgba(251,44,54,0.3)] border-solid h-[59px] left-[122px] rounded-[14px] top-[12px] w-[104px]" style={{ backgroundImage: "linear-gradient(150.433deg, rgba(231, 0, 11, 0.2) 0%, rgba(245, 73, 0, 0.2) 100%)" }} data-name="Button">
          <div className="absolute left-[41px] size-[20px] top-[8px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Icon">
                <path d={svgPaths.p3a2fa580} id="Vector" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
            </svg>
          </div>
          <div className="absolute h-[15px] left-[35.45px] top-[34px] w-[31.109px]" data-name="Text">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[16.5px] not-italic text-[#ff6467] text-[10px] text-center top-[0.5px] tracking-[0.1172px] whitespace-nowrap">Signal</p>
          </div>
        </div>
        {/* Share */}
        <div className="absolute h-[57px] left-[234px] rounded-[14px] top-[13px] w-[102px]" data-name="Button">
          <div className="absolute left-[41px] size-[20px] top-[8px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Icon">
                <path d={svgPaths.p245c2480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p1b9ecd80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p30483c80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p37f93a00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p26fdf80} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
            </svg>
          </div>
          <div className="absolute h-[15px] left-[36.79px] top-[34px] w-[28.422px]" data-name="Text">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[14.5px] not-italic text-[#99a1af] text-[10px] text-center top-[0.5px] tracking-[0.1172px] whitespace-nowrap">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Top section: background + controls + cover */
function Container({ data }: { data: AudioDropData }) {
  const imageSrc = data.heroImage ?? imgImageLockerRoom;
  return (
    <div className="h-[856px] relative shrink-0 w-full" data-name="Container">
      <Container1 imageSrc={imageSrc} />
      <Button />
      <Container4 badgeLabel={data.badgeLabel} episode={data.episode} />
      <div className="absolute h-[785px] left-0 top-[71px] w-[390px]" data-name="Container">
        <Container6 title={data.title} subtitle={data.subtitle} imageSrc={imageSrc} />
        <Container8 totalDuration={data.totalDuration} />
      </div>
    </div>
  );
}

/** Stat pills row */
function StatPills({ data }: { data: AudioDropData }) {
  return (
    <div className="absolute h-[41px] left-[36px] overflow-clip top-[7px] w-[318px]" data-name="Container">
      {/* Listening count */}
      <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[33px] left-0 rounded-[16777200px] top-0 w-[110.984px]" data-name="Container">
        <div className="absolute left-[12px] size-[14px] top-[8.5px]" data-name="MuiSvgIconRoot">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="MuiSvgIconRoot">
              <path d={svgPaths.p2bfd2e80} fill="var(--fill-0, #FF6467)" id="Vector" />
            </g>
          </svg>
        </div>
        <div className="absolute h-[15px] left-[34px] top-[8px] w-[62.984px]" data-name="Text">
          <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[0.1172px] whitespace-nowrap">
            {data.listeningCount}
          </p>
        </div>
      </div>
      {/* Trending */}
      <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[33px] left-[118.98px] rounded-[16777200px] top-0 w-[105.797px]" data-name="Container">
        <div className="absolute left-[12px] size-[14px] top-[8.5px]" data-name="MuiSvgIconRoot">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="MuiSvgIconRoot">
              <path d={svgPaths.p65b000} fill="var(--fill-0, #05DF72)" id="Vector" />
            </g>
          </svg>
        </div>
        <div className="absolute h-[15px] left-[34px] top-[8px] w-[57.797px]" data-name="Text">
          <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[0.1172px] whitespace-nowrap">
            {data.trendingLabel}
          </p>
        </div>
      </div>
      {/* Category */}
      <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[33px] left-[232.78px] rounded-[16777200px] top-0 w-[85.211px]" data-name="Container">
        <div className="absolute left-[12px] size-[14px] top-[8.5px]" data-name="MuiSvgIconRoot">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="MuiSvgIconRoot">
              <path d={svgPaths.pf7af00} fill="var(--fill-0, #C27AFF)" id="Vector" />
            </g>
          </svg>
        </div>
        <div className="absolute h-[15px] left-[34px] top-[8px] w-[37.211px]" data-name="Text">
          <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[0.1172px] whitespace-nowrap">
            {data.categoryLabel}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Description paragraphs */
function DescriptionSection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="absolute h-[228px] left-[20px] top-[65px] w-[350px]" data-name="Container">
      <div className="absolute h-[28px] left-0 top-0 w-[350px]" data-name="Heading 2" />
      {paragraphs.map((text, i) => (
        <div
          key={i}
          className="absolute h-[113.75px] left-0 w-[350px]"
          style={{ top: `${i === 0 ? 40 : 165.75}px` }}
          data-name="Paragraph"
        >
          <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#99a1af] text-[16px] top-[-39px] tracking-[-0.1504px] w-[350px]">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Key Moments section */
function KeyMomentsSection({ keyMoments, chaptersLabel }: { keyMoments: KeyMoment[]; chaptersLabel: string }) {
  return (
    <div className="absolute h-[215px] left-[20px] top-[317px] w-[350px]" data-name="Container">
      {/* Header row */}
      <div className="absolute h-[24px] left-0 top-0 w-[350px]" data-name="Container">
        <div className="absolute h-[24px] left-0 top-0 w-[104.891px]" data-name="Heading 2">
          <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Key Moments</p>
        </div>
        <div className="absolute h-[15px] left-[298.42px] top-[4.5px] w-[51.578px]" data-name="Text">
          <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] tracking-[0.1172px] whitespace-nowrap">{chaptersLabel}</p>
        </div>
      </div>
      {/* Moment buttons */}
      <div className="absolute h-[175px] left-0 top-[40px] w-[350px]" data-name="Container">
        {keyMoments.map((moment, i) => (
          <div
            key={i}
            className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[53px] left-0 rounded-[14px] w-[350px]"
            style={{ top: `${i * 61}px` }}
            data-name="Button"
          >
            {/* Timestamp badge */}
            <div className="absolute bg-[rgba(255,89,0,0.2)] h-[27px] left-[12px] rounded-[10px] top-[12px] w-[50.781px]" data-name="Text">
              <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[10px] not-italic text-[10px] text-white top-[6.5px] tracking-[0.1172px] whitespace-nowrap">
                {moment.timestamp}
              </p>
            </div>
            {/* Label */}
            <div className="absolute h-[16px] left-[74.78px] top-[17.5px]" data-name="Text">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#d1d5dc] text-[12px] top-px whitespace-nowrap">
                {moment.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Quote card */
function QuoteCard({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid h-[134px] left-[20px] overflow-clip rounded-[16px] top-[556px] w-[350px]" style={{ backgroundImage: "linear-gradient(159.05deg, rgb(26, 26, 38) 0%, rgb(24, 24, 36) 20%, rgb(23, 23, 33) 40%, rgb(21, 21, 31) 60%, rgb(20, 20, 28) 80%, rgb(18, 18, 26) 100%)" }} data-name="Container">
      {/* Headphone icon watermark */}
      <div className="absolute left-[16px] opacity-20 size-[48px] top-[16px]" data-name="Container">
        <div className="absolute left-0 size-[48px] top-0" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <g id="Icon">
              <path d={svgPaths.p2836b900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d={svgPaths.p2347a280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      {/* Quote text */}
      <div className="absolute h-[84px] left-[24px] top-[24px] w-[300px]" data-name="Container">
        <div className="absolute h-[52px] left-0 top-0 w-[300px]" data-name="Paragraph">
          <p className="[word-break:break-word] absolute font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[26px] left-0 text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] w-[300px]">
            {quote}
          </p>
        </div>
        <div className="absolute h-[20px] left-0 top-[64px] w-[300px]" data-name="Paragraph">
          <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">
            {attribution}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Metadata cards: recorded date + location */
function MetadataCards({ recordedDate, location }: { recordedDate: string; location: string }) {
  return (
    <div className="absolute h-[58px] left-[20px] top-[714px] w-[350px]" data-name="Container">
      {/* Date card */}
      <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[58px] left-0 rounded-[14px] top-0 w-[169px]" data-name="Container">
        <div className="absolute h-[32px] left-[12px] top-[12px] w-[143px]" data-name="Container">
          <div className="absolute left-0 size-[14px] top-[9px]" data-name="Container">
            <div className="absolute left-0 size-[14px] top-0" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g id="Icon">
                  <path d="M4.66666 1.16666V3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16666" />
                  <path d="M9.33336 1.16666V3.5" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16666" />
                  <path d={svgPaths.p32ed7b80} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16666" />
                  <path d="M1.75 5.83334H12.25" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16666" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute h-[32px] left-[22px] top-0 w-[73.43px]" data-name="Container">
            <div className="absolute h-[13.5px] left-0 top-0 w-[73.43px]" data-name="Container">
              <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#6a7282] text-[9px] top-[0.5px] tracking-[0.167px] whitespace-nowrap">Recorded</p>
            </div>
            <div className="absolute h-[16.5px] left-0 top-[15.5px] w-[73.43px]" data-name="Container">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.5px] tracking-[0.0645px] whitespace-nowrap">
                {recordedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Location card */}
      <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[58px] left-[181px] rounded-[14px] top-0 w-[169px]" data-name="Container">
        <div className="absolute h-[32px] left-[12px] top-[12px] w-[143px]" data-name="Container">
          <div className="absolute left-0 size-[14px] top-[9px]" data-name="Container">
            <div className="absolute left-0 size-[14px] top-0" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g id="Icon">
                  <path d={svgPaths.p3871b700} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16666" />
                  <path d="M7 3.5V7L9.33336 8.16666" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16666" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute h-[32px] left-[22px] top-0 w-[69.047px]" data-name="Container">
            <div className="absolute h-[13.5px] left-0 top-0 w-[69.047px]" data-name="Container">
              <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#6a7282] text-[9px] top-[0.5px] tracking-[0.167px] whitespace-nowrap">Location</p>
            </div>
            <div className="absolute h-[16.5px] left-0 top-[15.5px] w-[69.047px]" data-name="Container">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.5px] tracking-[0.0645px] whitespace-nowrap">
                {location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Bottom section: pills + description + key moments + quote + metadata */
function Container92({ data }: { data: AudioDropData }) {
  return (
    <div className="bg-[#0b0b0f] h-[794px] relative shrink-0 w-full" data-name="Container">
      <StatPills data={data} />
      <DescriptionSection paragraphs={data.descriptionParagraphs} />
      <KeyMomentsSection keyMoments={data.keyMoments} chaptersLabel={data.chaptersLabel} />
      <QuoteCard quote={data.quote} attribution={data.quoteAttribution} />
      <MetadataCards recordedDate={data.recordedDate} location={data.location} />
    </div>
  );
}

// ─── Default exported component ───────────────────────────────────────────────

export default function AudioDrop({ data }: AudioDropProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Audio Drop">
      <Container data={data} />
      <Container92 data={data} />
    </div>
  );
}