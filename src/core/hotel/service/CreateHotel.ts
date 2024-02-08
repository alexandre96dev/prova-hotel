import CasoDeUso from "@/core/shared/CasoDeUso"
import Hotel from "../model/Hotel"
import CreateHotelRepository from "../repository/CreateHotelRepository"

export default class CreateHotel implements CasoDeUso<Hotel, void>
{
    constructor(private createHotelRepository: CreateHotelRepository) {

    }

    async executar(hotel: Hotel): Promise<void> {        
        const newHotel: Hotel = {
            name: hotel.name,
            address: hotel.address,
            description: hotel.description
        }

        this.createHotelRepository.createHotel(newHotel)
    }
}