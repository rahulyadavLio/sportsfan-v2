import { Injectable } from '@nestjs/common';
import { RecordsRepository } from './records.repository';
import { RecordInsight } from './entities/record.entity';

@Injectable()
export class RecordsService {
  constructor(private readonly repository: RecordsRepository) {}

  /** Returns National / Olympic / World records for a given event + category. */
  getRecords(event: string, category: string) {
    return this.repository.getRecords(event, category);
  }

  /** Returns yearly trend data for an event. */
  getTrends(event: string) {
    return this.repository.getTrends(event);
  }

  /** Returns gap-to-world-record progress data for an event. */
  getProgress(event: string) {
    return this.repository.getProgress(event);
  }

  /** Returns all featured stories. */
  getStories() {
    return this.repository.getStories();
  }

  /**
   * Computes the performance insight (gap between national & world record).
   * Falls back to raw data from the repository.
   */
  async getInsight(event: string, category: string): Promise<RecordInsight | null> {
    const records = await this.repository.getRecords(event, category);

    const national = records.find((r) => r.type === 'National');
    const world = records.find((r) => r.type === 'World');

    if (!national || !world) return null;

    const isTimeEvent =
      event.includes('m') &&
      !event.includes('Jump') &&
      !event.includes('Throw') &&
      !event.includes('Put');

    const unit = isTimeEvent ? 's' : 'm';
    const diff = Math.abs(national.numericValue - world.numericValue);
    const percentage = ((diff / world.numericValue) * 100).toFixed(1);
    const formattedDiff = `${diff.toFixed(2)}${unit}`;

    return {
      diff,
      percentage,
      formattedDiff,
      unit,
      gapReductionPercent: '25',   // sourced from progress data; kept static for now
      globalRank: 25,              // sourced from progress data; kept static for now
    };
  }
}
