import Card from "../../../common/ui/Card";
import chartData from "../../../../data/admin/dashboard/registrationChart";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function RegistrationChart() {
  return (
    <Card>
      <h2 className="text-xl font-bold mb-6">Student Intake Trend</h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="year" stroke="#64748B" fontSize={13} />
          <YAxis stroke="#64748B" fontSize={13} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", border: "1px solid #E2E8F0" }}
          />
          <Line
            type="monotone"
            dataKey="students"
            stroke="#0F4C81"
            strokeWidth={3}
            dot={{ r: 5, fill: "#0F4C81" }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default RegistrationChart;
