import { useEffect, useState } from "react";
import { Box, Heading, Text, Input, Button } from "@chakra-ui/react";

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [cityName, setCityName] = useState("Paris");

  async function fetchWeatherData(cityName: string) {
    const response = await fetch(`/api/openweathermap?city=${cityName}`);
    const data = await response.json();
    setWeatherData(data);
  }

  useEffect(() => {
    fetchWeatherData(cityName);
  }, [cityName]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchWeatherData(cityName);
  };

  return (
    <Box maxW="xl" mx="auto" py={8} px={4}>
      <Heading textAlign="center" mb={8}>
        Météo actuelle pour {weatherData?.name || cityName}
      </Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <Input
          value={cityName}
          onChange={handleInputChange}
          placeholder="Entrez le nom d'une ville"
          mr={4}
        />
        <Button type="submit">Chercher</Button>
      </Box>
      {weatherData ? (
        <>
          {weatherData?.weather?.[0]?.description}
          <Box mt={4}>
            <Text fontSize="lg" fontWeight="bold">
              Température actuelle :{" "}
              {weatherData?.main?.temp}°C
            </Text>
            <Text fontSize="lg">
              Température minimale :{" "}
              {weatherData?.main?.temp_min}°C
            </Text>
            <Text fontSize="lg">
              Température maximale :{" "}
              {weatherData?.main?.temp_max}°C
            </Text>
          </Box>
        </>
      ) : (
        <Text>Chargement des données...</Text>
      )}
    </Box>
  );
}
