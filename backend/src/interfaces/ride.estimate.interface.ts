import IDriver from "./driver.interface"

type cordenates {
    latitude: number,
    longitude: number
}

interface IEstimate {
    origin: cordenates,
    destination: cordenates,
    distance: number,
    duration: string,
    options: IDriver,
    routeResponse: object
}