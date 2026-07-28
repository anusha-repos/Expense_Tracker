import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

function ExpensePieChart({ expenses }) {
  const categoryData = expenses.reduce((acc, expense) => {
    const existing = acc.find(item => item.name === expense.category);

    if (existing) {
      existing.value += Number(expense.amount);
    } else {
      acc.push({
        name: expense.category,
        value: Number(expense.amount),
      });
    }

    return acc;
  }, []);

  const COLORS = [
    "#6366F1",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#06B6D4",
  ];

  return (
    <div style={{ width: "100%", height: 350 }}>
      <h2>Expenses by Category</h2>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >
            {categoryData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpensePieChart;