import Badge from "../../../common/Badge";

function StaffHero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-sky-500 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <Badge>Our Team</Badge>

        <h1 className="mt-6 text-5xl font-bold">
          Meet Our Academic Staff
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-blue-100 text-lg leading-8">
          Dedicated educators and researchers shaping the next generation of
          ICT professionals.
        </p>
      </div>
    </section>
  );
}

export default StaffHero;