import { useState, useEffect } from "react";
import Button from "../../components/common/ui/Button";
import BatchStatistics from "../../components/pages/admin/batch/BatchStatistics";
import BatchFilters from "../../components/pages/admin/batch/BatchFilters";
import BatchTable from "../../components/pages/admin/batch/BatchTable";
import BatchModal from "../../components/pages/admin/batch/BatchModal";
import BatchDetailsModal from "../../components/pages/admin/batch/BatchDetailsModal";
import { getAllBatches, createBatch, updateBatch, deleteBatch } from "../../api/batchApi";

const emptyBatch = {
  intakeYear: new Date().getFullYear(),
  intakeMonth: "JANUARY",
  studentCount: 0,
  status: "Upcoming",
};

function BatchManagement() {
  const [batches, setBatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(emptyBatch);
  const [errors, setErrors] = useState({});
  const [editingBatchName, setEditingBatchName] = useState(null);
  const [saving, setSaving] = useState(false);
  const [viewingBatch, setViewingBatch] = useState(null);
  const [deletingBatch, setDeletingBatch] = useState(null);

  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    try {
      setIsLoading(true);
      const data = await getAllBatches();
      setBatches(data || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching batches:", err);
      setError("Failed to load batches from the server.");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredBatches = batches.filter((b) => {
    const matchesSearch = b.batchName?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "All" || b.status === status;
    return matchesSearch && matchesStatus;
  });

  const openAddModal = () => {
    setFormData(emptyBatch);
    setErrors({});
    setEditingBatchName(null);
    setShowModal(true);
  };

  const openEditModal = (batch) => {
    setFormData({
      intakeYear: batch.intakeYear,
      intakeMonth: batch.intakeMonth,
      studentCount: batch.studentCount,
      status: batch.status
    });
    setErrors({});
    setEditingBatchName(batch.batchName);
    setShowModal(true);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.intakeYear) {
      newErrors.intakeYear = "Academic year cannot be empty";
    }
    
    if (formData.studentCount === "" || formData.studentCount === null) {
      newErrors.studentCount = "Expected student count is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;

    setSaving(true);

    try {
      if (editingBatchName) {
        await updateBatch(editingBatchName, formData);
      } else {
        await createBatch(formData);
      }
      
      // Refresh the table data directly from the backend to get the generated batchName
      await fetchBatches();
      setShowModal(false);
    } catch (err) {
      console.error("Error saving batch:", err);
      setErrors({ submit: "Failed to save batch to the server." });
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteConfirm = async (batchName) => {
    try {
      await deleteBatch(batchName);
      setBatches((prev) => prev.filter((b) => b.batchName !== batchName));
      setDeletingBatch(null);
    } catch (err) {
      console.error("Error deleting batch:", err);
      alert("Failed to delete batch. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Batch Management
          </h1>
          <p className="mt-1 text-gray-500 text-sm">
            Manage student batches for the ICT Department.
          </p>
        </div>

        <Button onClick={openAddModal}>+ Add New Batch</Button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-200">
          {error}
        </div>
      )}

      <BatchStatistics batches={batches} />

      <BatchFilters search={search} setSearch={setSearch} status={status} setStatus={setStatus} />

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <BatchTable
          batches={filteredBatches}
          onView={setViewingBatch}
          onEdit={openEditModal}
          onDelete={setDeletingBatch}
        />
      )}

      {showModal && (
        <BatchModal
          batch={formData}
          errors={errors}
          onChange={setFormData}
          onSave={handleSave}
          onCancel={() => setShowModal(false)}
          isEditing={!!editingBatchName}
          saving={saving}
        />
      )}

      <BatchDetailsModal batch={viewingBatch} onClose={() => setViewingBatch(null)} />

      {deletingBatch && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
            <h2 className="text-lg font-bold text-gray-900">Delete Batch?</h2>
            <p className="mt-2 text-sm text-gray-500">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-gray-700">{deletingBatch.batchName}</span>?
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setDeletingBatch(null)}
                className="flex-1 rounded-lg border border-gray-200 py-2.5 text-gray-600 font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteConfirm(deletingBatch.batchName)}
                className="flex-1 rounded-lg bg-red-600 py-2.5 text-white font-medium hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BatchManagement;