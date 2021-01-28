export type User = {
    id: number
    email: string
    name: string
    profile?: string
}

export type City = {
    id: number
    name: string
    population: number
}

export type LoginType = {
    email: string
    password: string
}