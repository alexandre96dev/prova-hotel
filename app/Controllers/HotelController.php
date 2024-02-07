<?php
class HotelController
{
    public function list() {
        $useCase = new ListHotelUseCase(new HotelRepository(new DatabaseAdapter()));
        $hotels = $useCase->execute();
        return $hotels;
    }

    public function create() {
        $useCase = new CreateHotelUseCase(new HotelRepository(new DatabaseAdapter()));

        $hotel = new Hotel($_REQUEST['name'], $_REQUEST['address'], $_REQUEST['description'], 1);

        $useCase->execute($hotel);
        
        return ['message' => 'Hotel criado com sucesso'];
    }
}