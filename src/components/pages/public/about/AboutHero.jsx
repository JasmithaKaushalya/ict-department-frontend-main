import Badge from "../../../common/Badge";

function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-sky-500 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        <Badge>About Our Department</Badge>

        <h1 className="mt-6 text-5xl font-bold">
          Department of Information and Communication Technology
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg leading-8">
          Empowering students with knowledge, innovation,
          research, and industry collaboration to build the
          next generation of technology leaders.
        </p>

      </div>
    </section>
  );
}

export default AboutHero;