import CasoDeUso from "@/core/shared/CasoDeUso"
import Room from "../model/Room"
import ListRoomByIdRepository from "../repository/ListRoomByIdRepository"

export default class ListHotelsById implements CasoDeUso<Room, any>
{
    constructor(private listRoomByIdRepository: ListRoomByIdRepository) {

    }

    async executar(room: Room): Promise<any> {        
        return this.listRoomByIdRepository.listRoomById(room.hotel_id)
    }
}