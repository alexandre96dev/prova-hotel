<?php
interface HotelRepositoryInterface
{
    public function getAllHotels();
    public function findHotelById(int $id);
    public function saveHotel(Hotel $hotel);
    public function deleteHotel(int $id);
}