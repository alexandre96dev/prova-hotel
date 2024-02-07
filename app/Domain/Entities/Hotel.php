<?php

class Hotel
{
    private string $name;
    private string $address;
    private string $description;
    private bool $status;

    public function __construct(string $name, string $address, string $description, bool $status) {
        $this->name = $name;
        $this->address = $address;
        $this->description = $description;
        $this->status = $status;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getAddress(): string
    {
        return $this->address;
    }

    public function setAddress(string $address): void
    {
        $this->address = $address;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(bool $status): void
    {
        $this->status = $status;
    }
}