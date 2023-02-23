import React from 'react';
import { useQuery } from '@apollo/client';
import { ResponsiveBar } from '@nivo/bar'
import { GET_COUNT_MEDICINES_BY_TYPE } from '../../queries';
import { Typography } from '@mui/material';

const Bar = () => {

  const { data } = useQuery(GET_COUNT_MEDICINES_BY_TYPE)
  const [barData, setBarData] = React.useState([])

  React.useEffect(() => {
    data && setBarData(data['countMedicinesByType'])
  }, [data])

  return (
    <>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, alignSelf: "center" }}
      >
        Number of Medicines per Type
      </Typography>
      <ResponsiveBar
        data={barData}
        keys={["count"]}
        indexBy="type"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors="#3182CE"
        animate={true}
        enableLabel={true}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: -40
        }}
      />
    </>

  )
};

export default Bar