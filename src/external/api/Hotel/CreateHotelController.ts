import CreateHotel from "@/core/hotel/service/CreateHotel"
import { Express } from "express"

export default class CreateHotelController {
    constructor(servidor: Express, casoDeUso: CreateHotel) {
        servidor.post('/api/hotels/register', async (req, resp) => {
            try {
                await casoDeUso.executar({
                    name: req.body.name,
                    address: req.body.address,
                    description: req.body.description,
                })
                resp.status(201).send()
            } catch(erro: any) {
                resp.status(400).send(erro.message)
            }
        })
    }
}
