import Button from "../../../common/ui/Button";

function ResultsHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
      <div>
        <h1 className="text-3xl font-bold">
          Academic Results
        </h1>

        <p className="mt-2 text-gray-600">
          View your semester results and academic performance.
        </p>
      </div>

      <Button>
        Download Results
      </Button>
    </div>
  );
}

export default ResultsHeader;