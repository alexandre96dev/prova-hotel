import Database from "./Database"
import Room from "@/core/room/model/Room";

export default class RoomRepositoryDatabase {
    async createRoom(room: Room): Promise<void> {
        await Database.room.create({
          data: room,
        });
    }
    async listHotels(): Promise<any> {
      return await Database.hotel.findMany();
    }
}
