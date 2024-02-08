import Reservation from "@/core/reservation/model/Reservation";
import Database from "./Database"
export default class ReservationRepositoryDatabase {
    async createReservation(reservation: Reservation): Promise<any> {
        await Database.reservations.create({
          data: reservation,
        });
    }
    async updateReservation(reservation: Reservation): Promise<any>{
      await Database.reservations.update({
        where:{
          id: reservation.id
        },
        data:reservation
      })
    }
    async listAllReservation(): Promise<any> {
      return await Database.reservations.findMany();
    }
}