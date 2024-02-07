<?php

class DatabaseAdapter
{
    private $pdo;

    public function __construct()
    {
        $host = 'localhost';
        $database = 'prova-hotel';
        $username = 'root';
        $password = '';

        // Crie a string de conexão
        $dsn = "mysql:host=$host;dbname=$database";

        $this->pdo = new PDO($dsn, $username, $password);
    }

    public function query(string $sql, array $params = [])
    {
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    }

    public function lastInsertId(): int
    {
        return $this->pdo->lastInsertId();
    }

    public function beginTransaction(): void
    {
        $this->pdo->beginTransaction();
    }

    public function commitTransaction(): void
    {
        $this->pdo->commit();
    }

    public function rollbackTransaction(): void
    {
        $this->pdo->rollBack();
    }
}