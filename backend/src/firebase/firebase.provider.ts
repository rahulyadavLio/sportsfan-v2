import { Provider } from '@nestjs/common';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import serviceAccount from './service-account.json';

export const FirebaseProvider: Provider = {
  provide: 'FIREBASE_ADMIN',

  useFactory: () => {
    const app =
      getApps().length > 0
        ? getApps()[0]
        : initializeApp({
            credential: cert(serviceAccount as any),
          });

    return getFirestore(app);
  },
};