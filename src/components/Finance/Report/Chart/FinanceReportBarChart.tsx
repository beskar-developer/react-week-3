import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const FinanceReportBarChart = () => {
  const { data, bars } = useFinanceReportBarChart();

  return (
    <Card className="h-120 px-4 pt-6 pb-2 sm:h-80">
      <NotFoundContainer message="داده ای وجود ندارد" itemCount={data.length}>
        <ResponsiveContainer className="!size-full" style={{ direction: "ltr" }}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis tickFormatter={convertNumberToLocaleString} />

            <Tooltip />

            <Legend />

            <ReferenceLine y={0} stroke="#000" />

            {bars.map((bar) => (
              <Bar {...bar} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </NotFoundContainer>
    </Card>
  );
};
