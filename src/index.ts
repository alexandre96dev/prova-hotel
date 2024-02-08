import express from "express"
import HotelRepositoryDatabase from "./external/db/HotelRepositoryDatabase"
import CreateHotel from "./core/hotel/service/CreateHotel"
import ListAllHotel from "./core/hotel/service/ListAllHotels"
import CreateHotelController from "./external/api/CreateHotelController"
import ListAllHotelsController from "./external/api/ListAllHotelsController"

const app = express()
const porta = 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(porta, () => {
    console.log(`🔥 Servidor executando na porta ${porta}!`)
})

const hotelRepositoryDatabase = new HotelRepositoryDatabase();

const createHotelService = new CreateHotel(hotelRepositoryDatabase)

new CreateHotelController(app, createHotelService)

const listAllHotelService = new ListAllHotel(hotelRepositoryDatabase)
new ListAllHotelsController(app, listAllHotelService)