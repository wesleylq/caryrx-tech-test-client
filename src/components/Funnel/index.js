import { ResponsiveFunnel } from '@nivo/funnel'
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EXPENSIVE_MEDICINES } from '../../queries';
import { Typography } from '@mui/material';


const Funnel = () => {

    const { data, loading } = useQuery(GET_EXPENSIVE_MEDICINES)
    const [funnelData, setFunnelData] = React.useState([])

    React.useEffect(() => {
        data && setFunnelData(data['getExpensiveMedicines'])
        console.log(data)
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
                Top 10 Most Expensive Medicines
            </Typography>
            {!loading && <ResponsiveFunnel
                data={funnelData}
                valueFormat=" >-0,.4~s"
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                colors={{ scheme: 'spectral' }}
                borderWidth={20}
                labelColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            3
                        ]
                    ]
                }}
                beforeSeparatorLength={100}
                beforeSeparatorOffset={20}
                afterSeparatorLength={100}
                afterSeparatorOffset={20}
                currentPartSizeExtension={10}
                currentBorderWidth={40}
                motionConfig="wobbly"
            />
            }
        </>

    )
}

export default Funnel