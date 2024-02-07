<?php
require 'app/Routes/Routes.php';
require 'app/Controllers/HotelController.php';
require 'app/Domain/useCases/ListHotelsUseCase.php';
require 'app/Domain/useCases/CreateHotelsUseCase.php';
require 'app/Adapters/DatabaseAdapter.php';
require 'app/Domain/repositories/HotelRepository.php';
require 'app/Domain/Entities/Hotel.php';

$uri = $_SERVER['REQUEST_URI'];

var_dump($uri);
$method = $_SERVER['REQUEST_METHOD'];
$routes = new Routes(new HotelController());

$routes->dispatch($uri, $method, $_REQUEST);
