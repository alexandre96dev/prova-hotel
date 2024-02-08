# API gerenciador de hoteis

Para resolução desse teste, foi desenvolvido um sistema de reserva de hotel, incluindo uma API RESTful para gerenciar hotéis, quartos, reservas e autenticação de usuários.

## 🚀 Endpoints implementados

```
/api/hotels/register (POST): Registrar um novo hotel.
/api/hotels (GET): Obter a lista de hotéis disponíveis.
/api/hotels/{hotel_id} (GET): Obter detalhes de um hotel específico.
/api/hotels/{hotel_id}/rooms (GET): Obter a lista de quartos disponíveis em um hotel.

/api/rooms/register (GET): Registrar um novo quarto.

/api/reservations (GET): Obter a lista de reservas do usuário autenticado.
/api/reservations (POST): Fazer uma nova reserva.
/api/reservations/{reservation_id} (PUT): Atualizar uma reserva existente.

/api-docs (GET) Rota da documentação do projeto
```

## 🚀 Stacks utilizadas
- Node.js
- Typescript
- Mysql
