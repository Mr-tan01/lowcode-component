import LcRanking, { RankingRecord } from './ranking.vue'
import LcProgress, { ProgereeDataList as LcProgereeDataList } from './progress.vue'
export type LcRankingInstanceType = InstanceType<typeof LcRanking>
export type LcPeogressInstanceType = InstanceType<typeof LcProgress>

export { LcRanking, LcProgress, type RankingRecord, type LcProgereeDataList }
