import CasoDeUso from "@/core/shared/CasoDeUso"
import ListAllReservatioRepository from "../repository/ListAllReservationRepository"

export default class ListAllReservation implements CasoDeUso<void, void>
{
    constructor(private listAllReservatioRepository: ListAllReservatioRepository) {

    }

    async executar(): Promise<void> {        
        return this.listAllReservatioRepository.listAllReservation()
    }
}