import type Transaction from "~/types/transaction";

export default interface LatestTransaction {
    transaction: Transaction
    previousBalance: number
    balanceChange: number
    transactionDate: string
}
