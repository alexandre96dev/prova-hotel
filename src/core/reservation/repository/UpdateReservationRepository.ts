import Reservation from "../model/Reservation"

export default interface UpdateReservationRepository {
    updateReservation(reservation: Reservation): Promise<void>
}