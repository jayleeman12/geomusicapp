export type Location = {
    latitude: number,
    longitude: number
}

export type Track = {
    name: string,
    imageSrc: string,
    artist: string,
    location: Location,
    timestamp: Date | null,
    user: User
}

export type User = {
    name: string,
    imageSrc: string
}