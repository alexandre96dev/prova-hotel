<?php

class HotelService
{
    private $hotelRepository;

    public function __construct(HotelRepositoryInterface $hotelRepository)
    {
        $this->hotelRepository = $hotelRepository;
    }

    public function getAllHotels(): array
    {
        return $this->hotelRepository->getAllHotels();
    }

    public function findHotelById(int $id): ?Hotel
    {
        return $this->hotelRepository->findHotelById($id);
    }

    public function saveHotel(Hotel $user): void
    {
        $this->hotelRepository->saveHotel($user);
    }

    public function deleteHotel(int $id): void
    {
        $this->hotelRepository->deleteHotel($id);
    }
}