import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import serviceAccount from '../firebase/service-account.json';
import { athleteData } from '../data/athletes';

initializeApp({
  credential: cert(serviceAccount as any),
});

const db = getFirestore();

async function seedAthletes() {
  const batch = db.batch();

  Object.entries(athleteData).forEach(([slug, athlete]) => {
    const ref = db.collection('athletesProfile').doc(slug);

    batch.set(ref, athlete);
  });

  await batch.commit();

  console.log(
    `✅ Seeded ${Object.keys(athleteData).length} athletes profile`,
  );
}

seedAthletes()
  .then(() => {
    console.log('Done');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });