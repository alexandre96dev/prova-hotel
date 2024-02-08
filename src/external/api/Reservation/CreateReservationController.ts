import CreateReservation from "@/core/reservation/service/CreateReservation"
import { Express } from "express"

export default class CreateReservationController {
    constructor(servidor: Express, casoDeUso: CreateReservation) {
        servidor.post('/api/reservations', async (req, resp) => {
            try {
                await casoDeUso.executar({
                    user_id: req.body.user_id,
                    room_id: req.body.room_id,
                    check_in_date: req.body.check_in_date,
                    check_out_date: req.body.check_out_date,
                    total_price: req.body.total_price,
                    status: req.body.status
                })
                resp.status(201).send()
            } catch(erro: any) {
                resp.status(400).send(erro.message)
            }
        })
    }
}
