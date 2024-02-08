import CasoDeUso from "@/core/shared/CasoDeUso"
import Room from "../model/Room"
import CreateRoomRepository from "../repository/CreateRoomRepository"

export default class CreateRoom implements CasoDeUso<Room, void>
{
    constructor(private createRoomRepository: CreateRoomRepository) {

    }

    async executar(room: Room): Promise<void> {        
        const newRoom: Room = {
            hotel_id: room.hotel_id,
            room_number: room.room_number,
            type: room.type,
            price: room.price,
        }

        this.createRoomRepository.createHotel(newRoom)
    }
}