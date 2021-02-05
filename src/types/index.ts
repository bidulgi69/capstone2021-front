export type User = {
    id: number
    email: string
    name: string
    profile?: string
    authority: string
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

export type SignUpType = {
    email: string,
    password: string,
    name: string,
    profile?: number,
}