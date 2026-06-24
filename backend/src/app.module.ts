import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { AthleteProfileModule } from './modules/athlete-profile/athlete-profile.module';

@Module({
  imports: [HealthModule, AthleteProfileModule],
})
export class AppModule {}
