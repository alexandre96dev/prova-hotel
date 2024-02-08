export default interface ListRoomByIdRepository {
    listRoomById(id: number): Promise<any>
}