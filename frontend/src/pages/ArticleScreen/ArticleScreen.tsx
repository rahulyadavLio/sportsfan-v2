import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, BookmarkPlus, Share2, MessageCircle, ThumbsUp, ThumbsDown, Clock, User, MoreVertical, Flag, Link2, EyeOff, X } from 'lucide-react';

// ─── Article data ────────────────────────────────────────────────────────────

interface KeyPoint {
  heading: string;
  body: string;
}

interface ArticleData {
  heroImage: string;
  title: string;
  author: string;
  readTime: string;
  date: string;
  paragraphs: string[];           // ordered body paragraphs / blockquotes / headings
  sectionHeading: string;
  sectionSubheadingIfAny?: string;
  keyPoints: KeyPoint[];
  closingParagraphs: string[];
  extraSection?: { heading: string; paragraphs: string[] };
  relatedArticles: { title: string; readTime: string; tag: string; path: string }[];
  blockquote: { quote: string; attribution: string };
  likeCount: number;
  commentCount: number;
}

const articlesData: Record<string, ArticleData> = {
  '1': {
    heroImage: '/cwg-2026-india-squad-banner.png',
    title: 'Indian athletics squad for CWG 2026',
    author: 'AFI',
    readTime: '8 min read',
    date: '14 June, 2026',
    blockquote: {
      quote: '"Neeraj has recovered from a niggle and has assured that he will achieve the AFI qualification mark shortly."',
      attribution: '— Adille Sumariwalla, AFI Selection Committee Chairman',
    },
    paragraphs: [
      'Two-time Olympic medallist Neeraj Chopra headlines India\'s 32-member athletics squad for the Glasgow Commonwealth Games 2026, scheduled to begin on July 23 in Scotland. The squad, announced by the Athletics Federation of India (AFI), features a mix of experienced champions and emerging talents across track and field disciplines.',
      'Although included in the squad, Chopra must still achieve the AFI qualification standard of 82.61m before the Games. The reigning Olympic champion recently returned from injury and is expected to meet the mark in upcoming competitions.',
    ],
    sectionHeading: 'Key Highlights From India\'s CWG Squad',
    keyPoints: [
      {
        heading: 'Neeraj Leads Javelin Team',
        body: 'Neeraj Chopra is joined by Rohit Yadav and Yashvir Singh, both of whom achieved the qualification mark at the Indian Athletics Series in Ludhiana.',
      },
      {
        heading: 'Fitness Watch',
        body: 'Triple jumper Selva Prabhu has also been selected but must demonstrate his fitness and approach the qualification mark during the upcoming meet in Bhubaneswar.',
      },
      {
        heading: 'Mixed Relay Returns',
        body: 'India will field a mixed 4x400m relay team, aiming to build on the nation\'s strong relay performances in recent international competitions.',
      },
    ],
    closingParagraphs: [
      'India heads into Glasgow carrying momentum from the Birmingham 2022 Commonwealth Games, where the athletics contingent secured eight medals, including a historic gold in men\'s triple jump. Expectations will once again be high as the country\'s leading athletes compete on one of the biggest stages in Commonwealth sport.',
      'The men\'s squad features prominent names such as Gulveer Singh, Tejaswin Shankar, Sreeshankar M, Tajinderpal Singh Toor and Neeraj Chopra, while the women\'s team includes Parul Chaudhary, Pooja, Manpreet Kaur, Seema and Nidhi Rani among others. Together, they form a balanced squad capable of challenging for medals across multiple disciplines.',
    ],
    relatedArticles: [
      { title: 'Javelin Duo Book CWG Spots', readTime: '5 min', tag: 'Article', path: '/articles/2' },
      { title: '2 days, 2 national records', readTime: '9 min', tag: 'Article', path: '/articles/3' },
    ],
    likeCount: 2400,
    commentCount: 186,
  },
  '2': {
    heroImage: '/Gurindervir-Singh-3.png',
    title: '2 days, 2 national records: Gurindervir is the fastest Indian alive',
    author: 'Debodinna Chakraborty',
    readTime: '8 min read',
    date: '23 May, 2026',
    blockquote: {
      quote: '"10.09 seconds. A new national record and the first Indian ever under 10.10."',
      attribution: '— Federation Cup Athletics Championships, Ranchi',
    },
    paragraphs: [
      'Indian sprinting witnessed history in Ranchi as Gurindervir Singh shattered the men\'s 100m national record twice in two days during the Federation Cup Athletics Championships. The Punjab sprinter became the first Indian ever to officially run below the iconic 10.10-second barrier, marking a landmark moment for athletics in the country.',
      'Gurindervir clocked a sensational 10.09 seconds in the men\'s 100m final on May 23, reclaiming the national record from Odisha sprinter Animesh Kujur while simultaneously securing qualification for both the Commonwealth Games and Asian Games. The historic run capped off a remarkable rivalry that unfolded over two unforgettable days in Ranchi.',
    ],
    sectionHeading: 'A Record-Breaking Sprint Battle',
    keyPoints: [
      {
        heading: 'Gurindervir Strikes First',
        body: 'During the semifinal heats, Gurindervir broke the existing national record of 10.18 seconds with a run of 10.17 seconds, briefly becoming India\'s fastest-ever sprinter.',
      },
      {
        heading: 'Animesh Responds Immediately',
        body: 'Just minutes later, Animesh Kujur stunned the field by clocking 10.15 seconds in the next semifinal, reclaiming the national record and achieving the Commonwealth Games qualification standard.',
      },
      {
        heading: 'Historic Final',
        body: 'Gurindervir returned in the final with a breathtaking 10.09-second run, reclaiming the national record and becoming the first Indian athlete to break the 10.10-second barrier.',
      },
    ],
    closingParagraphs: [
      'The rivalry between Gurindervir Singh and Animesh Kujur has quickly emerged as one of the most exciting storylines in Indian athletics. Over the course of just 24 hours, the national record changed hands multiple times, showcasing the rapid progress being made in Indian sprinting.',
      'The Federation Cup also served as a qualification event for the 2026 Commonwealth Games, making every race crucial. While Animesh secured the CWG standard in the semifinals, Gurindervir surpassed it emphatically in the final with his record-breaking performance.',
      'Coached by James Hillier, Gurindervir continues to push Indian sprinting into uncharted territory, while Animesh, under the guidance of Martin Owens, remains a formidable challenger. With both athletes now running at unprecedented speeds, Indian athletics heads into the Commonwealth Games and Asian Games cycle with genuine excitement around the men\'s 100m event.',
      'For years, the 10.10-second barrier stood as a symbolic target for Indian sprinters. In Ranchi, it wasn\'t merely broken—it was shattered, ushering in a new era for Indian sprinting and setting the stage for an intense rivalry that could redefine the sport in the years ahead.',
    ],
    relatedArticles: [
      { title: 'Indian athletics squad for CWG 2026', readTime: '7 min', tag: 'Article', path: '/articles/1' },
      { title: 'Javelin Duo Book CWG Spots', readTime: '9 min', tag: 'Article', path: '/articles/3' },
    ],
    likeCount: 2400,
    commentCount: 186,
  },

  '3': {
    heroImage: '/rohit-yadav-133220549-16x9_0.png',
    title: '2 Indian javelin stars qualify for Commonwealth Games',
    author: 'Kingshuk Kusari',
    readTime: '8 min read',
    date: '13 June, 2026',
    blockquote: {
      quote: '"With throws of 83.76m and 82.93m, Rohit Yadav and Yashvir Singh secured their places at the Commonwealth Games."',
      attribution: '— Indian Athletics Series, Ludhiana',
    },
    paragraphs: [
      'India\'s reputation as a global javelin powerhouse briefly faced uncertainty as Olympic champion Neeraj Chopra continued his recovery from a back injury ahead of the 2026 Commonwealth Games. However, in a dramatic final qualification event, Rohit Yadav and Yashvir Singh stepped up to ensure India\'s presence remains strong in Glasgow.',
      'Competing at the Ludhiana leg of the Indian Athletics Series on June 13, both athletes crossed the Athletics Federation of India\'s qualification standard of 82.61m. Rohit produced a personal best throw of 83.76m, while Yashvir followed closely with a career-best effort of 82.93m.',
    ],
    sectionHeading: 'How India Secured Its Javelin Spots',
    keyPoints: [
      {
        heading: 'Final Qualification Opportunity',
        body: 'After difficult weather conditions prevented athletes from reaching the qualification mark at the Federation Cup, AFI added one final event in Ludhiana to determine Commonwealth Games selections.',
      },
      {
        heading: 'Rohit & Yashvir Deliver',
        body: "Rohit Yadav's 83.76m throw and Yashvir Singh's 82.93m effort comfortably exceeded the required 82.61m standard, securing qualification for Glasgow 2026.",
      },
      {
        heading: 'Injury Concerns Remain',
        body: 'Neeraj Chopra continues rehabilitation in Switzerland, while World Championships finalist Sachin Yadav is battling an elbow injury that could rule him out of the Games.',
      },
    ],
    closingParagraphs: [
      'The qualification performances came at a crucial time for Indian athletics. With Neeraj Chopra unavailable and Sachin Yadav struggling with injury, officials faced the possibility of entering the Commonwealth Games without sufficient depth in one of India\'s strongest events.',
      'Sachin Yadav, who finished fourth at last year\'s World Championships in Tokyo, has endured a challenging season. His best throw of 81.95m fell short of the qualification standard, while disappointing outings at the Federation Cup and the Rome Diamond League further hampered his campaign.',
    ],
    extraSection: {
      heading: "Neeraj's Recovery Timeline",
      paragraphs: [
        'Meanwhile, Neeraj Chopra remains focused on recovery after opting to skip the Doha Diamond League as part of his rehabilitation plan. The Olympic gold and silver medallist is currently training in Bienne, Switzerland, where he is undergoing a 47-day off-season preparation camp alongside coach Jai Choudhary and long-time physiotherapist Ishaan Marwaha.',
        "Despite recent injury concerns, India's javelin program continues to be one of the strongest in the world. Since Chopra's historic Olympic success, participation and performance standards have risen dramatically, producing multiple athletes capable of competing at the international level.",
        "However, the competition is becoming increasingly fierce. Sri Lanka's Rumesh Pathirage recently announced himself as a major contender with a stunning 92.62m throw at the Rome Diamond League, highlighting the growing strength of javelin throwing across Asia.",
        'For now, Rohit Yadav and Yashvir Singh have provided Indian athletics with much-needed reassurance. Their qualification not only secures India\'s representation in Glasgow but also demonstrates the depth that has emerged behind Neeraj Chopra in the nation\'s most successful field event.',
      ],
    },
    relatedArticles: [
      { title: 'Indian athletics squad for CWG 2026', readTime: '7 min', tag: 'Article', path: '/articles/1' },
      { title: '2 days, 2 national records', readTime: '5 min', tag: 'Article', path: '/articles/2' },
    ],
    likeCount: 2400,
    commentCount: 186,
  },
  '4': {
    heroImage: '/Gurindervir-Singh-3.png',

    title: 'In 10.09 seconds, Gurindervir Singh flies to where no Indian sprinter ever has',

    author: 'Anirudh Menon',

    readTime: '8 min read',

    date: '23 May, 2026',

    blockquote: {
      quote:
        '"10.09s. For the first time ever, an Indian has run the 100m in the 10.0s."',
      attribution: '— Federation Cup Athletics Championships, Ranchi',
    },

    paragraphs: [
      'About a year ago, when Animesh Kujur broke Gurindervir Singh’s national record with a 10.18-second run, Indian athletics celebrated the arrival of a sprinter capable of consistently running in the 10.1-second range. Twelve months later, the benchmark has shifted once again.',
      'On a warm Saturday evening at the Birsa Munda Athletics Stadium in Ranchi, Gurindervir Singh produced a sensational 10.09-second sprint in the Federation Cup final to become the first Indian athlete ever to officially run below the iconic 10.10-second barrier. The performance capped off two unforgettable days that redefined Indian sprinting.',
    ],

    sectionHeading: 'The Rivalry That Changed Indian Sprinting',

    keyPoints: [
      {
        heading: 'Records Fell Within Minutes',
        body:
          'The drama began during Friday’s semifinal heats. Gurindervir clocked 10.17 seconds in the opening semifinal to break Animesh Kujur’s national record. Ten minutes later, Animesh responded with a stunning 10.15-second run to immediately reclaim the mark.',
      },
      {
        heading: 'Contrasting Styles',
        body:
          'Gurindervir’s explosive starts and compact power make him a traditional sprinting force, while Animesh relies on longer strides and smooth acceleration. Their different strengths have created one of the most compelling rivalries Indian athletics has witnessed.',
      },
      {
        heading: 'The Historic 10.09',
        body:
          'In Saturday’s final, Animesh finished in a strong 10.20 seconds, but Gurindervir was untouchable. Maintaining his speed all the way through the line, he crossed first in 10.09 seconds and entered Indian athletics history.',
      },
    ],

    closingParagraphs: [
      'After the race, Gurindervir revealed that his semifinal strategy had been to push hard for 80 metres before easing off. The final demanded everything. "I had to go 100% in the final," he said, and India discovered exactly what that meant.',
      'As he crossed the finish line, Gurindervir ripped off his bib number, threw it onto the track and let out a roar that echoed around the stadium. Moments later, he picked the bib back up and showed it to the cameras. Written across it was a message: "Task is not finished yet. Wait, I am still standing." Underlined twice was one number: 10.10.',
      'That symbolic barrier had been the target. Instead of merely reaching it, Gurindervir smashed straight through it. It was another example of the relentless ambition that has defined his rise over the last few seasons.',
      'The achievement becomes even more remarkable considering his journey. Three years ago, a serious digestive condition forced him away from competition for nearly a year and tested his determination to remain in the sport. Support eventually arrived through Reliance Foundation, giving him access to elite facilities, nutrition, physiotherapy, recovery systems and high-level training partners.',
      'When Gurindervir first set a national record of 10.20 seconds, he confidently predicted that the real results of his training were still to come. In Ranchi, those results arrived in spectacular fashion. Indian sprinting has entered a new era, and the rivalry between Gurindervir Singh and Animesh Kujur promises to make the road to the Commonwealth Games and Asian Games one of the most exciting chapters in the sport’s history.',
    ],

    relatedArticles: [
      {
        title: 'Indian athletics squad for CWG 2026',
        readTime: '7 min',
        tag: 'Article',
        path: '/articles/1',
      },
      {
        title: 'Javelin Duo Book CWG Spots',
        readTime: '9 min',
        tag: 'Article',
        path: '/articles/3',
      },
    ],

    likeCount: 3100,

    commentCount: 248,
  },
  '5': {
    heroImage: '/parul-choudhary.jpg',

    title: 'Parul Chaudhary breaks own 5000m National Record in Nice',

    author: 'SportsFan Editorial',
    readTime: '5 min read',
    date: '20 June, 2026',

    blockquote: {
      quote: '"15:04.26 — a new Indian national record in the women’s 5000m."',
      attribution: '— Meeting Nikaia 2026, Nice, France',
    },

    paragraphs: [
      'Indian distance-running star Parul Chaudhary produced another historic performance on the international stage, breaking her own national record in the women’s 5000m at the Meeting Nikaia 2026 in Nice, France.',
      'The 31-year-old clocked 15:04.26 to finish second in the race, improving upon her previous national record of 15:10.35 that she had set in 2023. The performance lowered the Indian mark by more than six seconds and highlighted Parul’s continued rise among the world’s elite distance runners.',
    ],

    sectionHeading: 'A Record Run in France',

    keyPoints: [
      {
        heading: 'National Record Rewritten',
        body: 'Parul Chaudhary clocked 15:04.26 in Nice, shaving more than six seconds off her previous national record of 15:10.35 set in 2023.',
      },
      {
        heading: 'Second Place Finish',
        body: 'Ethiopia’s Bereka Seniya Mohammed won the race in 15:03.85, finishing just 0.41 seconds ahead of the Indian runner.',
      },
      {
        heading: 'Strong International Form',
        body: 'The performance continues Parul’s impressive run of results against world-class competition during the 2026 season.',
      },
    ],

    closingParagraphs: [
      'Parul has emerged as one of India’s most successful distance runners over the past few seasons, consistently pushing national standards higher in both the 3000m steeplechase and 5000m disciplines.',
      'Earlier this year, she opened her season at the Shanghai Diamond League in the 3000m steeplechase, recording 9:12.84 — the second-fastest time ever by an Indian athlete in the event. The mark came just short of her own national record of 9:12.46.',
      'That performance was achieved in a world-class field featuring Olympic champion Peruth Chemutai of Uganda and reigning world champion Faith Cherotich of Kenya, where Parul finished seventh.',
      'Her latest national record in Nice further strengthens India’s growing presence in global middle- and long-distance athletics. With the Commonwealth Games and Asian Games approaching, Parul appears to be entering the most consistent phase of her career and continues to establish herself as one of India’s premier track athletes.',
    ],

    relatedArticles: [
      {
        title: 'Indian athletics squad for CWG 2026',
        readTime: '7 min',
        tag: 'Article',
        path: '/articles/1',
      },
      {
        title: '2 days, 2 national records: Gurindervir is the fastest Indian alive',
        readTime: '8 min',
        tag: 'Article',
        path: '/articles/2',
      },
    ],

    likeCount: 1800,
    commentCount: 124,
  },
  '6': {
    heroImage: '/neeraj.png',
    title: "Olympics 2020: Neeraj Chopra's Journey to Gold",
    author: 'Suraj Boppudi',
    readTime: '6 min read',
    date: '17 Aug, 2021',

    blockquote: {
      quote:
        '"Neeraj Chopra became the first Indian athlete to win an Olympic gold medal in track and field."',
      attribution: '— Tokyo Olympics 2020',
    },

    paragraphs: [
      'Neeraj Chopra created history at the Tokyo Olympics when he won the gold medal in the men’s javelin throw, ending India’s century-long wait for an Olympic medal in athletics. The athlete from Haryana delivered a performance for the ages on August 7, 2021, instantly becoming one of the most celebrated sportspersons in Indian history.',
      'The victory made Neeraj only the second Indian ever to win an individual Olympic gold medal after Abhinav Bindra. While the nation embraced him as a hero overnight, those who followed athletics had long known about the immense talent and determination that powered his rise to the top.',
    ],

    sectionHeading: 'From Panipat To Olympic Glory',

    keyPoints: [
      {
        heading: 'A Challenging Childhood',
        body:
          'Born in Panipat, Haryana, Neeraj struggled with obesity during his childhood and often faced ridicule from friends and neighbours. Determined to improve his fitness, he turned to sports, unknowingly beginning a journey that would transform Indian athletics forever.',
      },
      {
        heading: 'Discovering Javelin',
        body:
          'After trying several sporting disciplines, Neeraj found his passion in javelin throw at the age of 13. His talent was quickly recognised by Haryana state javelin thrower Jaiveer Choudhary, who became one of his early mentors and helped nurture his exceptional potential.',
      },
      {
        heading: 'Rapid Rise Through The Ranks',
        body:
          'With dedicated coaching and relentless training, Neeraj began competing at national and international events while still a teenager. His powerful throws and fearless attitude soon established him as one of India’s brightest athletic prospects.',
      },
    ],

    closingParagraphs: [
      'Neeraj’s path to Olympic gold was far from straightforward. Injuries, setbacks and intense competition tested his resolve repeatedly. Yet every challenge strengthened his determination to become the best javelin thrower India had ever produced.',
      'Years of disciplined training culminated in Tokyo, where Neeraj delivered a series of outstanding throws to secure the gold medal and etch his name into Olympic history. The triumph inspired a new generation of athletes and sparked unprecedented interest in athletics across the country.',
      'His victory was more than an individual achievement. It represented a breakthrough moment for Indian track and field, proving that Indian athletes could compete with and defeat the very best in the world.',
      'From an overweight teenager in Panipat to an Olympic champion on the biggest sporting stage, Neeraj Chopra’s journey remains one of the most inspiring stories in Indian sport. His Tokyo gold continues to motivate millions of young athletes chasing their own dreams.',
    ],

    relatedArticles: [
      {
        title: 'Indian athletics squad for CWG 2026',
        readTime: '7 min',
        tag: 'Article',
        path: '/articles/1',
      },
      {
        title: 'Javelin Duo Book CWG Spots',
        readTime: '5 min',
        tag: 'Article',
        path: '/articles/2',
      },
      {
        title: '2 days, 2 national records',
        readTime: '8 min',
        tag: 'Article',
        path: '/articles/3',
      },
    ],

    likeCount: 5200,
    commentCount: 384,
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function ArticleScreen() {
  const navigate = useNavigate();
  const { id = '1' } = useParams<{ id: string }>();

  const article = articlesData[id] ?? articlesData['1'];

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showKebab, setShowKebab] = useState(false);
  const [likeCount, setLikeCount] = useState(article.likeCount);
  const [dislikeCount, setDislikeCount] = useState(87);

  return (
    <div className="bg-[#0b0b0f] h-full w-full flex justify-center">
      <div className="relative w-full max-w-[390px] h-full overflow-y-auto no-scrollbar">

        {/* Hero banner */}
        <div className="relative w-full" style={{ height: '220px' }}>
          <img src={article.heroImage} alt="" className="w-full h-full object-fill" />

          {/* Decorative rings */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white/20"
                style={{
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  left: `${20 + i * 15}px`,
                  top: `${-20 + i * 10}px`,
                }}
              />
            ))}
          </div>

          {/* Badge */}
          <div className="absolute top-12 left-5">
            <span className="bg-[rgba(201,17,95,0.9)] text-white text-[10px] font-bold px-3 py-1 rounded-full">
              ARTICLE DROP
            </span>
          </div>

          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-3 left-3 w-[36px] h-[36px] rounded-full bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center"
          >
            <ChevronLeft size={18} color="white" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 bg-gradient-to-t from-[#0b0b0f] via-[rgba(11,11,15,0.8)] to-transparent pt-10">
            <h1 className="text-white font-bold text-[22px] leading-tight tracking-[-0.4px]">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-24">

          {/* Meta row */}
          <div className="flex items-center gap-3 py-4 border-b border-[rgba(255,255,255,0.08)] mb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center">
                <User size={12} color="white" />
              </div>
              <span className="text-[#d1d5dc] text-[12px] font-medium">{article.author}</span>
            </div>
            <span className="text-[#4a4a55]">·</span>
            <div className="flex items-center gap-1">
              <Clock size={11} color="#6a7282" />
              <span className="text-[#6a7282] text-[11px]">{article.readTime}</span>
            </div>
            <span className="text-[#4a4a55]">·</span>
            <span className="text-[#6a7282] text-[11px]">{article.date}</span>
          </div>

          {/* Article body */}
          <div className="space-y-4 mb-6">
            {/* Opening paragraphs */}
            {article.paragraphs.map((p, i) => (
              <p key={i} className="text-[#c8cdd6] text-[15px] leading-[26px] tracking-[-0.15px]">{p}</p>
            ))}

            {/* Blockquote */}
            <blockquote className="border-l-[3px] border-[#c9115f] pl-4 my-5">
              <p className="text-white font-medium italic text-[16px] leading-[26px]">
                {article.blockquote.quote}
              </p>
              <p className="text-[#6a7282] text-[12px] mt-2">{article.blockquote.attribution}</p>
            </blockquote>

            {/* Section heading */}
            <h2 className="text-white font-bold text-[17px] mt-6 mb-2">{article.sectionHeading}</h2>

            {/* Key points card */}
            <div className="bg-[#111118] border border-[rgba(255,255,255,0.07)] rounded-[16px] p-4 my-4">
              {article.keyPoints.map((kp, i) => (
                <div key={i} className={`flex items - start gap - 3 ${i < article.keyPoints.length - 1 ? 'mb-3' : ''}`}>
                  <div className="w-6 h-6 rounded-full bg-[rgba(201,17,95,0.2)] border border-[rgba(201,17,95,0.4)] flex items-center justify-center flex-none mt-0.5">
                    <span className="text-[#c9115f] text-[10px] font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[13px] mb-1">{kp.heading}</p>
                    <p className="text-[#6a7282] text-[12px] leading-[20px]">{kp.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing paragraphs */}
            {article.closingParagraphs.map((p, i) => (
              <p key={i} className="text-[#c8cdd6] text-[15px] leading-[26px] tracking-[-0.15px]">{p}</p>
            ))}

            {/* Optional extra section */}
            {article.extraSection && (
              <>
                <h2 className="text-white font-bold text-[17px] mt-6 mb-2">{article.extraSection.heading}</h2>
                {article.extraSection.paragraphs.map((p, i) => (
                  <p key={i} className="text-[#c8cdd6] text-[15px] leading-[26px] tracking-[-0.15px]">{p}</p>
                ))}
              </>
            )}
          </div>

          {/* Action bar */}
          <div className="flex flex-wrap items-center gap-2 py-4 border-t border-b border-[rgba(255,255,255,0.08)] mb-6">
            <button
              onClick={() => {
                setIsLiked(l => { setLikeCount(c => l ? c - 1 : c + 1); return !l; });
                if (isDisliked) { setIsDisliked(false); setDislikeCount(c => c - 1); }
              }}
              className="flex items-center gap-2 rounded-full px-3 py-2 transition-colors"
              style={{ background: isLiked ? 'rgba(201,17,95,0.15)' : 'rgba(255,255,255,0.05)', border: isLiked ? '1px solid rgba(201,17,95,0.3)' : '1px solid rgba(255,255,255,0.08)' }}
            >
              <ThumbsUp size={14} color={isLiked ? '#c9115f' : '#99a1af'} fill={isLiked ? '#c9115f' : 'none'} />
              <span className="text-[12px]" style={{ color: isLiked ? '#c9115f' : '#99a1af' }}>
                {likeCount >= 1000 ? `${(likeCount / 1000).toFixed(1)} k` : likeCount}
              </span>
            </button>

            <button
              onClick={() => {
                setIsDisliked(d => { setDislikeCount(c => d ? c - 1 : c + 1); return !d; });
                if (isLiked) { setIsLiked(false); setLikeCount(c => c - 1); }
              }}
              className="flex items-center gap-2 rounded-full px-3 py-2 transition-colors"
              style={{ background: isDisliked ? 'rgba(255,89,0,0.15)' : 'rgba(255,255,255,0.05)', border: isDisliked ? '1px solid rgba(255,89,0,0.4)' : '1px solid rgba(255,255,255,0.08)' }}
            >
              <ThumbsDown size={14} color={isDisliked ? '#ff5900' : '#99a1af'} fill={isDisliked ? '#ff5900' : 'none'} />
              <span className="text-[12px]" style={{ color: isDisliked ? '#ff5900' : '#99a1af' }}>{dislikeCount}</span>
            </button>

            <button className="flex items-center gap-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-full px-3 py-2">
              <MessageCircle size={14} color="#99a1af" />
              <span className="text-[#99a1af] text-[12px]">{article.commentCount}</span>
            </button>

            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setIsSaved(s => !s)}
                className="flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors"
                style={{ background: isSaved ? 'rgba(201,17,95,0.15)' : 'rgba(255,255,255,0.05)', border: isSaved ? '1px solid rgba(201,17,95,0.3)' : '1px solid rgba(255,255,255,0.08)' }}
              >
                <BookmarkPlus size={14} color={isSaved ? '#c9115f' : '#99a1af'} />
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowKebab(k => !k)}
                  className="flex items-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-full px-3 py-2 active:scale-95"
                >
                  <MoreVertical size={14} color="#99a1af" />
                </button>
                {showKebab && (
                  <div className="absolute right-0 top-full mt-2 bg-[#1a1a22] border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-2xl z-50 w-[200px] overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(255,255,255,0.07)]">
                      <span className="text-white text-[13px] font-semibold">Options</span>
                      <button onClick={() => setShowKebab(false)}><X size={14} color="#888" /></button>
                    </div>
                    {[
                      { icon: <Flag size={15} color="#ff4444" />, label: 'Report', color: '#ff4444' },
                      { icon: <Share2 size={15} color="#99a1af" />, label: 'Share', color: '#99a1af' },
                      { icon: <Link2 size={15} color="#99a1af" />, label: 'Copy link', color: '#99a1af' },
                      { icon: <EyeOff size={15} color="#99a1af" />, label: 'Not interested', color: '#99a1af' },
                    ].map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setShowKebab(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[rgba(255,255,255,0.05)] transition-colors text-left"
                      >
                        {item.icon}
                        <span className="text-[13px]" style={{ color: item.color }}>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related articles */}
          <h2 className="text-white font-bold text-[15px] mb-3">More Articles</h2>
          <div className="flex flex-col gap-3">
            {article.relatedArticles.map((a, i) => (
              <button
                key={i}
                onClick={() => navigate(a.path)}
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-4 flex gap-3 text-left hover:border-[rgba(201,17,95,0.3)] transition-all active:scale-[0.98]"
              >
                <div
                  className="flex-none w-[52px] h-[52px] rounded-[10px] flex items-center justify-center"
                  style={{ backgroundImage: 'linear-gradient(135deg, #1a0a28 0%, #0a1830 100%)' }}
                >
                  <span className="text-[#c9115f] text-[18px]">✦</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#f5f5f7] text-[13px] font-medium leading-tight mb-2 line-clamp-2">{a.title}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[#c9115f] text-[9px] font-bold">{a.tag}</span>
                    <span className="text-[#6a7282] text-[9px]">·</span>
                    <Clock size={9} color="#6a7282" />
                    <span className="text-[#6a7282] text-[9px]">{a.readTime}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
