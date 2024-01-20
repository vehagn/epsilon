export default interface User {
    cardId: number
    firstName: string
    lastName: string
    email: string
    birthday?: string
    title: string
    comments: [string]
    userGroup: string
    isMember: boolean
    creditRating?: number
}
