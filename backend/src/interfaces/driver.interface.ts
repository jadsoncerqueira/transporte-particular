interface IDriver {
    id?: number,
    name: string,
    description: string,
    vehicle: string,
    review: {
        rating: number,
        comment: string
    },
    value: number
    kmMin?: number
}

export default IDriver