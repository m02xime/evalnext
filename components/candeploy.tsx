import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

type ApiResponse = {
  timezone: string;
  shouldideploy: boolean;
  message: string;
};

const CanDeploy: React.FC = () => {
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/candeploy');
      const json = await response.json();
      setApiResponse(json);
    };

    fetchData();
  }, []);

  return (
    <Box textAlign="center">
      {apiResponse ? (
        <>
          <Text fontSize="xl" fontWeight="bold" color={apiResponse.shouldideploy ? 'green.500' : 'red.500'}>
            {apiResponse.shouldideploy ? 'YES' : 'NO'}
            </Text>

            <Text fontSize="lg" fontWeight="bold" color="gray.500">
                {apiResponse.message}
            </Text>
        </>
        ) : (
            <Text fontSize="xl" fontWeight="bold" color="gray.500">
                Loading...
            </Text>
        )}
    </Box>
    );
};

export default CanDeploy;
