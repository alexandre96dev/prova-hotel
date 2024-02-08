import Room from "../model/Room"

export default interface CreateRoomRepository {
    createRoom(room: Room): Promise<void>
}