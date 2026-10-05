import Button from "../../../common/ui/Button";

function GPAHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">GPA & CGPA</h1>

        <p className="mt-2 text-gray-600">
          Track your academic performance throughout your degree.
        </p>
      </div>

      <Button>Download Transcript</Button>
    </div>
  );
}

export default GPAHeader;
