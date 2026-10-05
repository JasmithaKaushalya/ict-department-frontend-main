import Card from "../../../common/ui/Card";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function GPAChart({ data }) {
  // Map the incoming data to ensure the GPA is a Number so the chart plots it correctly
  const chartData = [
    { semester: "Start", GPA: 0 },
    ...(data?.map((item) => ({
      semester: item.semester,
      GPA: Number(item.gpa),
    })) || []),
  ];

  return (
    <Card>
      <h2 className="text-xl font-bold mb-6">GPA Progress</h2>

      {chartData.length === 0 ? (
        <p className="text-gray-500 text-center py-12">
          No semester results available yet to display progress.
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />

            <XAxis dataKey="semester" stroke="#64748B" fontSize={13} />

            <YAxis domain={[0, 4]} stroke="#64748B" fontSize={13} />

            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #E2E8F0",
              }}
            />

            <Line
              type="monotone"
              dataKey="GPA"
              stroke="#0F4C81"
              strokeWidth={3}
              dot={{ r: 5, fill: "#0F4C81" }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Card>
  );
}

export default GPAChart;
