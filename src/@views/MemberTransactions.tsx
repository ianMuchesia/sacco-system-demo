import { useTheme } from "@emotion/react";
import { ThemeOptions, TransactionMemberData } from "../@types";
import { useMemo } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import { ResponsiveLine } from "@nivo/line";


interface transactionProps{
    memberData:TransactionMemberData[]
}

type ChartData = {
  id: string;
  color: string;
  data: { x: string; y: number }[];
};

const MemberTransactions = ({ memberData }:transactionProps) => {
  const theme = useTheme() as ThemeOptions;

  const formattedData: ChartData[] = useMemo(() => {
    const { fullName, payment } = memberData[0];
    const {  amount, paymentDate } = payment;

    const memberTransactionLine: ChartData = {
      id: fullName,
      color: theme.palette.secondary.main,
      data: [{ x: paymentDate, y: amount }],
    };

    return [memberTransactionLine];
  }, [memberData, theme.palette.secondary.main]);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="MEMBER TRANSACTIONS" subtitle="Chart of member transactions" />
      <Box height="75vh">
        <ResponsiveLine
          data={formattedData}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.secondary[200],
                },
              },
              legend: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              ticks: {
                line: {
                  stroke: theme.palette.secondary[200],
                  strokeWidth: 1,
                },
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
            },
            legends: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            tooltip: {
              container: {
                color: theme.palette.primary.main,
              },
            },
          }}
          colors={{ datum: "color" }}
          margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          yFormat=" >-.2f"
          // curve="catmullRom"
          axisTop={null}
          axisRight={null}
          axisBottom={{
          
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: "Month",
            legendOffset: 60,
            legendPosition: "middle",
          }}
          axisLeft={{
        
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Total",
            legendOffset: -50,
            legendPosition: "middle",
          }}
          enableGridX={false}
          enableGridY={false}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "top-right",
              direction: "column",
              justify: false,
              translateX: 50,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default MemberTransactions;
