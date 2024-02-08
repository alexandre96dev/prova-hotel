import Database from "./Database"
import Hotel from "@/core/hotel/model/Hotel";

export default class HotelRepositoryDatabase {
    async createHotel(hotel: Hotel): Promise<void> {
        await Database.hotel.create({
          data: hotel,
        });
    }
    async listHotels(): Promise<any> {
      return await Database.hotel.findMany();
    }
}
