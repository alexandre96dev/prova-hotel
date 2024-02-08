export default interface Reservation {
    id?: number
    user_id: number
    room_id: number
    check_in_date: Date
    check_out_date: Date
    total_price: number
    status: number
}