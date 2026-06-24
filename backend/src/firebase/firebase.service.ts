import { Inject, Injectable } from '@nestjs/common';
import { Firestore } from 'firebase-admin/firestore';

@Injectable()
export class FirebaseService {
  constructor(
    @Inject('FIREBASE_ADMIN')
    private readonly db: Firestore,
  ) {}

  getDb(): Firestore {
    return this.db;
  }
}