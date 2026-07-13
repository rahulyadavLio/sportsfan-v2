require('dotenv').config();
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    })
  });
}

const db = getFirestore();

const products = [
  {
    id: 'exp_breakfast_neeraj',
    data: {
      "productType": "experience",
      "category": "experiences",
      "title": "Breakfast with Neeraj Chopra",
      "description": "Start your morning with an intimate Q&A breakfast with Neeraj Chopra. Limited to 8 guests only...",
      "duration": "2 hours",
      "priceInPaise": 1250000,
      "rewardCoins": 625,
      "governanceState": "approved",
      "totalSeats": 8,
      "seatsBooked": 5,
      "tag": "Exclusive",
      "tagColor": "#c9115f",
      "image": "https://images.unsplash.com/photo-1504674900247...",
      "inclusions": ["Curated breakfast for two", "Signed memorabilia", "Group photo session", "Q&A with the athlete", "Digital certificate of attendance"],

      "athlete": "Neeraj Chopra",
      "athleteImg": "https://images.unsplash.com/photo-1544367567...",
      "type": "offline",
      "venue": "ITC Maurya, New Delhi",
      "venueAddress": "Sardar Patel Marg, Diplomatic Enclave, New Delhi – 110021",
      "host": "SportsFan360 Events",
      "hostRole": "Official Experience Host",
      "arrivalTime": "7:45 AM",
      "dressCode": "Smart casual — no sports jerseys",
      "parking": "Complimentary valet at ITC Maurya lobby",
      "eventStartsAt": "2026-07-18T08:00:00+05:30",
      "agenda": [
        { "time": "8:00 AM", "item": "Guest arrival & welcome drinks" },
        { "time": "8:30 AM", "item": "Neeraj joins — breakfast begins" },
        { "time": "9:00 AM", "item": "Open Q&A session" }
      ],
      "rules": [
        "Arrive 15 minutes before the start time",
        "No personal recording equipment allowed",
        "Two questions per guest during Q&A"
      ],
      "status": "active"
    }
  },
  {
    id: 'exp_track_masterclass_yarraji',
    data: {
      "productType": "experience",
      "category": "experiences",
      "title": "Track Masterclass with Jyothi Yarraji",
      "description": "Train on the same track as India's sprint queen Jyothi Yarraji. This early-morning masterclass covers acceleration mechanics, race starts, and mental toughness drills.",
      "duration": "3 hours",
      "priceInPaise": 899900,        
      "rewardCoins": 450,            
      "governanceState": "approved",
      "totalSeats": 12,
      "seatsBooked": 9,
      "tag": "Training Session",
      "tagColor": "#0ea5e9",         
      "image": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop&auto=format",
      "inclusions": ["Warm-up & dynamic stretching with Jyothi", "Sprint start mechanics coaching", "Video technique feedback session", "Signed bib", "Group photo"],

      "athlete": "Jyothi Yarraji",
      "athleteImg": "https://images.unsplash.com/photo-1525786904702-ba2c9fa92059?w=120&h=120&fit=crop&auto=format",
      "type": "offline",
      "venue": "Kanteerava Stadium, Bengaluru",
      "venueAddress": "Kasturba Road, Bangalore – 560001",
      "host": "SportsFan360 Events",
      "hostRole": "Official Experience Host",
      "arrivalTime": "6:10 AM",
      "dressCode": "Athletic wear — no jeans or casual footwear",
      "parking": "Available at Kanteerava Indoor Stadium parking lot",
      "eventStartsAt": "2026-07-22T06:30:00+05:30",
      "agenda": [
        { "time": "6:30 AM", "item": "Warm-up & dynamic stretching with Jyothi" },
        { "time": "7:00 AM", "item": "Sprint start mechanics — block work" },
        { "time": "7:30 AM", "item": "Acceleration drills — 30m / 60m sprints" },
        { "time": "8:00 AM", "item": "Technique feedback session (video analysis)" },
        { "time": "8:30 AM", "item": "Group debrief & Q&A" },
        { "time": "9:00 AM", "item": "Signed bib handover & group photo" }
      ],
      "rules": [
        "Wear proper running spikes or track shoes",
        "Arrive 20 minutes early for bib collection",
        "Medical clearance required for participants under 16",
        "No personal recording during drills — official videographer present"
      ],
      "status": "active"
    }
  },
  {
    id: 'exp_virtual_nutrition_qna_tejaswin',
    data: {
      "productType": "experience",
      "category": "experiences",
      "title": "Virtual Nutrition Q&A with Tejaswin Shankar",
      "description": "India's Commonwealth Games High Jump champion Tejaswin Shankar breaks down his nutrition strategy — from pre-competition loading to recovery meals.",
      "duration": "60 minutes",
      "priceInPaise": 49900,         
      "rewardCoins": 250,            
      "governanceState": "approved",
      "totalSeats": 50,
      "seatsBooked": 38,
      "tag": "AMA Session",
      "tagColor": "#00c864",         
      "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop&auto=format",
      "inclusions": ["Live nutrition breakdown", "Q&A access", "72-hour session recording", "Digital badge"],

      "athlete": "Tejaswin Shankar",
      "athleteImg": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=120&h=120&fit=crop&auto=format",
      "type": "online",
      "onlineLink": "https://meet.sportsfan360.app/shankar-nutrition",
      "host": "Moderator: Priya Nair",
      "hostRole": "SportsFan360 Sports Nutritionist",
      "eventStartsAt": "2026-07-12T20:00:00+05:30",
      "agenda": [
        { "time": "8:00 PM", "item": "Welcome & session intro" },
        { "time": "8:05 PM", "item": "Tejaswin's daily nutrition philosophy" },
        { "time": "8:20 PM", "item": "Pre-competition carb loading breakdown" },
        { "time": "8:35 PM", "item": "Live Q&A — fan questions" },
        { "time": "8:50 PM", "item": "Rapid fire nutrition myths busted" }
      ],
      "rules": [
        "Questions via the in-app queue only",
        "Session will be recorded and available for 72 hours",
        "No promotional or sponsored questions accepted",
        "Respectful conduct required"
      ],
      "status": "active"
    }
  },
  {
    id: 'exp_ama_avinash_sable',
    data: {
      "productType": "experience",
      "category": "experiences",
      "title": "AMA with Avinash Sable",
      "description": "Live AMA with steeplechase national record holder Avinash Sable. Ask him anything — training regimen, nutrition, race strategy, upcoming competitions, and his journey from army to world stage.",
      "duration": "90 minutes",
      "priceInPaise": 59900,         
      "rewardCoins": 300,            
      "governanceState": "approved",
      "totalSeats": 30,
      "seatsBooked": 24,
      "tag": "AMA Session",
      "tagColor": "#00c864",         
      "image": "https://images.unsplash.com/photo-1544899489-a083461b088c?w=800&h=400&fit=crop&auto=format",
      "inclusions": ["Live AMA access", "In-app question queue", "48-hour session recording", "Digital badge"],

      "athlete": "Avinash Sable",
      "athleteImg": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&auto=format",
      "type": "online",
      "onlineLink": "https://meet.sportsfan360.app/sable-ama",
      "host": "Moderator: Rahul Mehta",
      "hostRole": "SportsFan360 Host",
      "eventStartsAt": "2026-07-07T19:00:00+05:30",
      "agenda": [
        { "time": "7:00 PM", "item": "Welcome & introductions" },
        { "time": "7:10 PM", "item": "Avinash opening remarks" },
        { "time": "7:20 PM", "item": "Moderated Q&A — Round 1" },
        { "time": "7:50 PM", "item": "Live poll: Fan choice topic" },
        { "time": "8:00 PM", "item": "Open floor Q&A" }
      ],
      "rules": [
        "Questions via the in-app question queue only",
        "Respectful conduct required at all times",
        "Recording strictly prohibited",
        "Session will be available as a recording for 48 hours"
      ],
      "status": "active"
    }
  }
];

async function seed() {
  for (const p of products) {
    await db.collection('storeProducts').doc(p.id).set(p.data);
    console.log('Seeded:', p.id);
  }
}

seed().catch(console.error).finally(() => process.exit(0));
