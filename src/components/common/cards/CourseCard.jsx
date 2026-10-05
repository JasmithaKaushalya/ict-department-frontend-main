import Card from "../ui/Card";
import Button from "../ui/Button";

function CourseCard({ title, duration, description }) {
  return (
    <Card className="mb-4">
      <p className="text-blue-700 font-semibold">{duration}</p>

      <h3 className="mt-3 text-2xl font-bold">{title}</h3>

      <p className="mt-4 text-gray-600">{description}</p>

      <Button to="/courses" className="mt-6">
        Learn More
      </Button>
    </Card>
  );
}

export default CourseCard;
