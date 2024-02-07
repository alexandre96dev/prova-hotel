<?php
class ListHotelUseCase
{
    private HotelRepositoryInterface $hotelRepository;

    public function __construct(HotelRepositoryInterface $hotelRepository)
    {
        $this->hotelRepository = $hotelRepository;
    }

    public function execute(): array
    {
        return $this->hotelRepository->getAllHotels();
    }
}