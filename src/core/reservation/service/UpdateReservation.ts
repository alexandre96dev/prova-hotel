import CasoDeUso from "@/core/shared/CasoDeUso"
import Reservation from "../model/Reservation"
import UpdateReservationRepository from "../repository/UpdateReservationRepository"

export default class UpdateReservation implements CasoDeUso<Reservation, void>
{
    constructor(private updateReservationRepository: UpdateReservationRepository) {

    }

    async executar(reservation: Reservation): Promise<void> {        
        const newReservation: Reservation = {
            id: reservation.id,
            user_id: reservation.user_id,
            room_id: reservation.room_id,
            check_in_date: reservation.check_in_date,
            check_out_date: reservation.check_out_date,
            total_price: reservation.total_price,
            status: reservation.status
        }

        this.updateReservationRepository.updateReservation(newReservation)
    }
}