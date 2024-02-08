import Hotel from "../model/Hotel"

export default interface CreateHotelRepository {
    createHotel(hotel: Hotel): Promise<void>
}