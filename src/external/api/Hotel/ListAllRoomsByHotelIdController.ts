import ListAllRoomsByHotelId from "@/core/hotel/service/ListAllRoomsByHotelId"
import { Express } from "express"

export default class ListAllRoomsByHotelIdController {
    constructor(servidor: Express, casoDeUso: ListAllRoomsByHotelId) {
        servidor.get('/api/hotels/:hotel_id/rooms', async (req, resp) => {
            try {
                let responseData = await casoDeUso.executar({
                    hotel_id: parseInt(req.params.hotel_id, 10)
                })
                resp.status(200).json(responseData)
            } catch(erro: any) {
                resp.status(400).send(erro.message)
            }
        })
    }
}
