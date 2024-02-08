export default interface ListAllRoomsByHotelId {
    listAllRoomsByHotelId(hotel_id: number): Promise<any>
}