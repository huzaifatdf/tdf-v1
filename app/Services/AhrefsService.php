<?php

namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class AhrefsService
{
    protected $client;
    protected $baseUrl = 'https://apiv2.ahrefs.com';
    protected $token;

    public function __construct()
    {
        $this->client = new Client();
        $this->token = config('services.ahrefs.token');
    }

    public function makeRequest($endpoint, $params = [])
    {
        try {
            $response = $this->client->get($this->baseUrl . $endpoint, [
                'query' => array_merge(['token' => $this->token], $params),
                'headers' => [
                    'Accept' => 'application/json',
                ],
            ]);

            return json_decode($response->getBody()->getContents(), true);
        } catch (GuzzleException $e) {
            // Handle exception or log error
            return [
                'error' => true,
                'message' => $e->getMessage()
            ];
        }
    }

    // Example method for domain rating
    public function getDomainRating($target)
    {
        return $this->makeRequest('/url_rating', [
            'target' => $target,
            'mode' => 'domain',
            'output' => 'json'
        ]);
    }

    // Add more methods for different endpoints as needed
}
