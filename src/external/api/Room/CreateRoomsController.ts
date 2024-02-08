import CreateRoom from "@/core/room/service/CreateRoom"
import { Express } from "express"

export default class CreateRoomController {
    constructor(servidor: Express, casoDeUso: CreateRoom) {
        servidor.post('/api/rooms/register', async (req, resp) => {
            try {
                await casoDeUso.executar({
                    hotel_id: req.body.hotel_id,
                    room_number: req.body.room_number,
                    type: req.body.type,
                    price: req.body.price,
                })
                resp.status(201).send()
            } catch(erro: any) {
                resp.status(400).send(erro.message)
            }
        })
    }
}
