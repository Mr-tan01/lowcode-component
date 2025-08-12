import { default as LcRanking, RankingRecord } from './ranking';
import { default as LcProgress, ProgereeDataList as LcProgereeDataList } from './progress';
export type LcRankingInstanceType = InstanceType<typeof LcRanking>;
export type LcPeogressInstanceType = InstanceType<typeof LcProgress>;
export { LcRanking, LcProgress, type RankingRecord, type LcProgereeDataList };
