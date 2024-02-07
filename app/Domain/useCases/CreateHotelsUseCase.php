<?php
class CreateHotelUseCase
{
    private HotelRepositoryInterface $hotelRepository;

    public function __construct(HotelRepositoryInterface $hotelRepository)
    {
        $this->hotelRepository = $hotelRepository;
    }

    public function execute(Hotel $hotel)
    {
        return $this->hotelRepository->saveHotel($hotel);
        return 'teste';
    }
}