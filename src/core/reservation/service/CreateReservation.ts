import CasoDeUso from "@/core/shared/CasoDeUso"
import Reservation from "../model/Reservation"
import CreateReservationRepository from "../repository/CreateReservationRepository"

export default class CreateReservation implements CasoDeUso<Reservation, void>
{
    constructor(private createRoomRepository: CreateReservationRepository) {

    }

    async executar(reservation: Reservation): Promise<void> {        
        const newReservation: Reservation = {
            user_id: reservation.user_id,
            room_id: reservation.room_id,
            check_in_date: reservation.check_in_date,
            check_out_date: reservation.check_out_date,
            total_price: reservation.total_price,
            status: reservation.status
        }

        this.createRoomRepository.createReservation(newReservation)
    }
}