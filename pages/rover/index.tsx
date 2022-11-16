import { GetStaticProps, NextPage } from "next";
import { Stack, Box } from "@chakra-ui/react";
import RoverHeading from "../../components/Rovers/RoverHeading";
import RoverContent from "../../components/Rovers/";
import { fetchedUrl } from "../../utils/getData";
import { RoverDataType } from "../../utils/types";
import { useState } from "react";

//todos: expansion on components/pages?, rover camera choices, style fixes
const Rover: NextPage<{ data: RoverDataType }> = ({ data }) => {
  const [newData, setData] = useState(data);
  if (!data) return <div>Loading...</div>;

  return (
    <Box h="100%" mb={4}>
      <Stack align="center">
        <RoverHeading setData={setData} />
        <RoverContent data={newData.photos} />
      </Stack>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // last date with decent sized return json + avoiding empty dates
  const data = await fetchedUrl("rover", new Date(2021, 6, 17));
  return {
    props: {
      data,
    },
  };
};

export default Rover;
