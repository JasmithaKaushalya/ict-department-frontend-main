import Card from "../../../common/ui/Card";
import BatchRow from "./BatchRow";

function BatchTable({ batches, onView, onEdit, onDelete }) {
  if (batches.length === 0) {
    return (
      <Card>
        <p className="text-center text-gray-500 py-12">No batches found.</p>
      </Card>
    );
  }

  return (
    <Card className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Batch</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Degree</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Intake Year</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Students</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch) => (
              <BatchRow key={batch.id} batch={batch} onView={onView} onEdit={onEdit} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default BatchTable;