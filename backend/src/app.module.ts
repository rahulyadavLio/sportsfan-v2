import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HealthModule } from './modules/health/health.module';
import { AthleteProfileModule } from './modules/athlete-profile/athlete-profile.module';
import { RecordsModule } from './modules/records/records.module';
import { PlaybookModule } from './modules/playbook/playbook.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    HealthModule,
    AthleteProfileModule,
    PlaybookModule,
    RecordsModule,
  ],
})
export class AppModule { }