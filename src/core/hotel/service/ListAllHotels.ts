import CasoDeUso from "@/core/shared/CasoDeUso"
import Hotel from "../model/Hotel"
import ListHotelRepository from "../repository/ListAllHotelsRepository"

export default class ListAllHotel implements CasoDeUso<Hotel, void>
{
    constructor(private listHotelRepository: ListHotelRepository) {

    }

    async executar(): Promise<void> {        
        return this.listHotelRepository.listHotels()
    }
}