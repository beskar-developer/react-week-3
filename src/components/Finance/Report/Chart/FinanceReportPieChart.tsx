import type { PieLabelProps } from "recharts/types/polar/Pie";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const renderLabel = ({ percent, name, x, y, textAnchor, fill }: PieLabelProps) => {
  const percentageLabel = ((percent ?? 1) * 100).toFixed(0);

  const label = `%${name} - ${percentageLabel}`;

  return (
    <text className="z-20 text-[10px]" key={label} x={x} y={y} textAnchor={textAnchor} fill={fill}>
      {label}
    </text>
  );
};

export const FinanceReportPieChart = () => {
  const { data, colorMap } = useFinanceReportPieChart();

  return (
    <Card className="flex h-80 items-center justify-center">
      <NotFoundContainer message="داده ای وجود ندارد" itemCount={data.length}>
        <ResponsiveContainer className="!size-full px-16" style={{ direction: "ltr" }}>
          <PieChart>
            <Pie dataKey="value" cx="50%" cy="50%" data={data} label={renderLabel}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={colorMap[entry.categoryId]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </NotFoundContainer>
    </Card>
  );
};
