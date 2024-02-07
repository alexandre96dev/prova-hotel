<?php

class Routes
{
    private $routes;
    private HotelController $hotelController;
    public function __construct(HotelController $hostController)
    {   
        $this->hotelController = $hostController;

        $this->routes = [
            '/api/hotels' => [
                'action' => 'list',
                'method' => 'GET',
                'controller' => 'hotelController',
            ],
            '/api/hotels/register' => [
                'action' => 'create',
                'method' => 'POST',
                'controller' => 'hotelController',
            ],
            '/api/hotels/(\d+)' => [
                'action' => 'contato',
                'method' => 'GET',
                'controller' => 'hotelController',
            ],
        ];
    }

    public function dispatch($uri, $method, $reques) {
        header('Content-Type: application/json');
        if (!isset($this->routes[$uri]) || $this->routes[$uri]['method'] !== $method) {
            http_response_code(400);
            $response = ['error' => 'Rota não encontrada'];
        }else{
            if(method_exists($this->hotelController, $this->routes[$uri]['action'])) {
                $action = $this->routes[$uri]['action'];
                
                $controller = $this->routes[$uri]['controller'];

                $response = $this->$controller->$action();

            } else {
                http_response_code(500);
                $response = ['error' => 'Ação da rota não implementada'];
            }
        }
        
        echo json_encode($response);
    }
}