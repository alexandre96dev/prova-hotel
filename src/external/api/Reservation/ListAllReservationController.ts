import ListAllReservation from "@/core/reservation/service/ListAllReservation"
import { Express } from "express"

export default class ListAllReservationController {
    constructor(servidor: Express, casoDeUso: ListAllReservation) {
        servidor.get('/api/reservations', async (req, resp) => {
            try {
                let responseData = await casoDeUso.executar()
                resp.status(200).json(responseData)
            } catch(erro: any) {
                resp.status(400).send(erro.message)
            }
        })
    }
}
