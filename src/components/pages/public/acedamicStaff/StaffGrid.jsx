import SectionTitle from "../../../common/SectionTitle";
import StaffCard from "../../../common/cards/StaffCard";
import TemporaryStaffCard from "../../../common/cards/TemporaryStaffCard";

function StaffGrid({ title, subtitle, members, variant = "academic" }) {
  if (members.length === 0) return null;

  const CardComponent = variant === "academic" ? StaffCard : TemporaryStaffCard;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {members.map((member) => (
            <CardComponent key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StaffGrid;