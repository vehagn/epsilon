import type LatestTransaction from "~/types/latestTransaction";

export default interface Wallet {
    cardId: number
    name: string
    cashBalance: number
    totalSpent: number
    creditRating?: number
    latestTransaction?: LatestTransaction
}
