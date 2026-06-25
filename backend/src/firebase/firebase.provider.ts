import { Provider } from '@nestjs/common';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

export const FirebaseProvider: Provider = {
  provide: 'FIREBASE_ADMIN',

  useFactory: () => {
    // console.log('PROJECT_ID:', process.env.FIREBASE_PROJECT_ID);
    // console.log('CLIENT_EMAIL:', process.env.FIREBASE_CLIENT_EMAIL);
    // console.log('PRIVATE_KEY_EXISTS:', !!process.env.FIREBASE_PRIVATE_KEY);

    const app =
      getApps().length > 0
        ? getApps()[0]
        : initializeApp({

          credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(
              /\\n/g,
              '\n',
            ),
          }),
          });

    return getFirestore(app);
  },
};