import express from "express"
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './swagger.json'


import HotelRepositoryDatabase from "./external/db/HotelRepositoryDatabase"
import RoomRepositoryDatabase from "./external/db/RoomRepositoryDatabase"
import ReservationRepositoryDatabase from "./external/db/ReservationRepositoryDatabase"

import CreateHotel from "./core/hotel/service/CreateHotel"
import ListAllHotel from "./core/hotel/service/ListAllHotels"
import ListAllRoomsByHotelId from "./core/hotel/service/ListAllRoomsByHotelId"
import CreateHotelController from "./external/api/Hotel/CreateHotelController"
import ListAllHotelsController from "./external/api/Hotel/ListAllHotelsController"


import CreateRoom from "./core/room/service/CreateRoom"
import CreateRoomController from "./external/api/Room/CreateRoomsController"
import ListAllRoomsByHotelIdController from "./external/api/Hotel/ListAllRoomsByHotelIdController"

import CreateReservation from "./core/reservation/service/CreateReservation"
import CreateReservationController from "./external/api/Reservation/CreateReservationController"
import UpdateReservation from "./core/reservation/service/UpdateReservation"
import UpdateReservationController from "./external/api/Reservation/UpdateReservationController"
import ListAllReservation from "./core/reservation/service/ListAllReservation"
import ListAllReservationController from "./external/api/Reservation/ListAllReservationController"

const app = express()
const porta = 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(porta, () => {
    console.log(`🔥 Servidor executando na porta ${porta}!`)
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//------------------------------------Hotel-------------------------------

const hotelRepositoryDatabase = new HotelRepositoryDatabase();


const createHotelService = new CreateHotel(hotelRepositoryDatabase)

new CreateHotelController(app, createHotelService)


const listAllHotelService = new ListAllHotel(hotelRepositoryDatabase)

new ListAllHotelsController(app, listAllHotelService)

const listAllRoomsByHotelIdService = new ListAllRoomsByHotelId(hotelRepositoryDatabase)

new ListAllRoomsByHotelIdController(app, listAllRoomsByHotelIdService)

//------------------------------------Rooms------------------------------

const roomRepositoryDatabase = new RoomRepositoryDatabase();

const createRoomService = new CreateRoom(roomRepositoryDatabase)

new CreateRoomController(app, createRoomService)


//------------------------------------Reservations-------------------------

const reservationRepositoryDatabase = new ReservationRepositoryDatabase();

const createReservationService = new CreateReservation(reservationRepositoryDatabase)

new CreateReservationController(app, createReservationService)

const updateReservationService = new UpdateReservation(reservationRepositoryDatabase)

new UpdateReservationController(app, updateReservationService)

const listAllReservationService = new ListAllReservation(reservationRepositoryDatabase)

new ListAllReservationController(app, listAllReservationService)
