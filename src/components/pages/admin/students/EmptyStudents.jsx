import { GraduationCap } from "lucide-react";
import Button from "../../../common/ui/Button";

function EmptyStudents({ onRegister }) {
  return (
    <div className="text-center py-16">
      <GraduationCap className="h-12 w-12 text-gray-300 mx-auto" />
      <h3 className="mt-4 font-bold text-gray-900">No Students Found</h3>
      <p className="mt-1 text-sm text-gray-500">
        Register your first student to get started.
      </p>
      <Button onClick={onRegister} className="mt-6">
        Register Student
      </Button>
    </div>
  );
}

export default EmptyStudents;