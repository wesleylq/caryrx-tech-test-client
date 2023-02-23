import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { ResponsivePie } from '@nivo/pie'
import React from 'react';
import { GET_AVG_PRICE_BY_TYPE } from '../../queries';

const Pie = () => {

  const { data } = useQuery(GET_AVG_PRICE_BY_TYPE)
  const [pieData, setBarData] = React.useState([])

  React.useEffect(() => {
    data && setBarData(data['averagePriceByType'])
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
        Average Price of Medicines per Type
      </Typography>

      <ResponsivePie
        data={pieData}
        height={400}
        width={600}
        id={(e) => e.type}
        arcLinkLabel={function (e) { return e.id + " (" + e.value + ")" }}
        value={(e) => e.avg}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      />
    </>

  );
};

export default Pie