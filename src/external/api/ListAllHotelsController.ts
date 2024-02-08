import ListAllHotel from "@/core/hotel/service/ListAllHotels"
import { Express } from "express"

export default class ListAllHotelsController {
    constructor(servidor: Express, casoDeUso: ListAllHotel) {
        servidor.get('/api/hotels', async (req, resp) => {
            try {
                let responseData = await casoDeUso.executar()
                resp.status(200).json(responseData)
            } catch(erro: any) {
                resp.status(400).send(erro.message)
            }
        })
    }
}
