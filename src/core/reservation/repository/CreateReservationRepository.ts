import Reservation from "../model/Reservation"

export default interface CreateReservationRepository {
    createReservation(reservation: Reservation): Promise<void>
}