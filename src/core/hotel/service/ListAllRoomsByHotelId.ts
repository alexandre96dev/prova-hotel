import CasoDeUso from "@/core/shared/CasoDeUso"
import Hotel from "../model/Hotel"
import ListAllRoomsByHotelIdRepository from "../repository/ListAllRoomsByHotelIdRepository"

export type Entry = {
    hotel_id: number
}


export default class ListAllRoomsByHotelId implements CasoDeUso<Entry, void>
{
    constructor(private listAllRoomsByHotelIdRepository: ListAllRoomsByHotelIdRepository) {

    }

    async executar(entry: Entry): Promise<void> {        
        return this.listAllRoomsByHotelIdRepository.listAllRoomsByHotelId(entry.hotel_id)
    }
}