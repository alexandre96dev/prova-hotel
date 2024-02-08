import Hotel from "../model/Hotel"

export default interface ListAllHotelsRepository {
    listHotels(): Promise<any>
}