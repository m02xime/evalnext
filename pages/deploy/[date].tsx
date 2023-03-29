import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { parse, getDay, isFriday, isSaturday, isSunday } from "date-fns";

const Deploy: React.FC = () => {
  const router = useRouter();
  const { date } = router.query;

  if (typeof date !== "string") {
    return (
      <Box textAlign="center">
        <Text fontSize="xl" fontWeight="bold" color="red.500">
          Invalid date
        </Text>
      </Box>
    );
  }

  const parsedDate = parse(date, "dd-MM-yyyy", new Date());

  if (isNaN(parsedDate.getTime())) {
    return (
      <Box textAlign="center">
        <Text fontSize="xl" fontWeight="bold" color="red.500">
          Invalid date
        </Text>
      </Box>
    );
  }

  const dayOfWeek = getDay(parsedDate);

  if (isFriday(parsedDate) || isSaturday(parsedDate) || isSunday(parsedDate)) {
    return (
      <Box textAlign="center">
        <Heading as="h1" size="xl" textAlign="center" mb="6">
          Should I Deploy Today?
        </Heading>
        <Text fontSize="xl" fontWeight="bold" color="red.500">
          NO
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="gray.500">
          You should not deploy on a {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek]}.
        </Text>
      </Box>
    );
  } else {
    return (
      <Box textAlign="center">
        <Heading as="h1" size="xl" textAlign="center" mb="6">
          Should I Deploy Today?
        </Heading>
        <Text fontSize="xl" fontWeight="bold" color="green.500">
          YES
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="gray.500">
          You should deploy today.
        </Text>
      </Box>
    );
  }
};

export default Deploy;
