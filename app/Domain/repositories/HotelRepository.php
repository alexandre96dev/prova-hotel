<?php
require 'app/Domain/repositories/HotelRepositoryInterface.php';

class HotelRepository implements HotelRepositoryInterface
{
    private DatabaseAdapter $databaseAdapter;

    public function __construct(DatabaseAdapter $databaseAdapter)
    {
        $this->databaseAdapter = $databaseAdapter;
    }

    public function getAllHotels(){
        $hotels = $this->databaseAdapter->query("SELECT * FROM hotels");

        return $hotels->fetchAll();
    }
    public function findHotelById(int $id){
        $hotels = $this->databaseAdapter->query("SELECT * FROM hotels WHERE id = $id");
        return $hotels;
    }
    public function saveHotel(Hotel $hotel){
        $name = $hotel->getName();
        $address = $hotel->getAddress();
        $description = $hotel->getDescription();
        $hotel = $this->databaseAdapter->query("INSERT INTO hotels (`name`, `address`, `description`) VALUES ('$name', '$address', '$description')");
    }
    public function deleteHotel(int $id){
        $hotel = $this->databaseAdapter->query("DELETE FROM hotels WHERE id = $id");
        return $hotel;
    }
}