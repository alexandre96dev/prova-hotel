import UpdateReservation from "@/core/reservation/service/UpdateReservation"
import { Express } from "express"

export default class UpdateReservationController {
    constructor(servidor: Express, casoDeUso: UpdateReservation) {
        servidor.put('/api/reservations/:reservation_id', async (req, resp) => {
            try {
                await casoDeUso.executar({
                    id: parseInt(req.params.reservation_id),
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
