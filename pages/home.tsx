import React, { useEffect, useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
import CanDeploy from "../components/candeploy";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    const formattedDate = date.toLocaleDateString().replaceAll("/", "-");
    // redirect to page date with formatted date
    window.location.href = `/deploy/${formattedDate}`;
    setSelectedDate(date);
  };

  return (
    <>
      <Box p="6">
        <Heading as="h1" size="xl" textAlign="center" mb="6">
          Should I Deploy Today?
        </Heading>
        <CanDeploy />
      </Box>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
      />

      {/* message scroll jsp pk ca fait ça  */}
      <div className="message">
        <p>scroll jsp pk ca fait ça</p>
      </div>
    </>
  );
};

export default Home;
