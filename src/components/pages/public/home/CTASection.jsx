import Button from "../../../common/ui/Button";

function CTASection() {
  return (
    <section className="bg-blue-700 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold">Ready to Begin Your ICT Journey?</h2>

        <p className="mt-6 text-lg text-blue-100">
          Join the Department of Information and Communication Technology at Uva
          Wellassa University and shape the future with technology.
        </p>

        <Button
          to="/contact"
          className="mt-10 bg-white !text-blue-700 hover:bg-white"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}

export default CTASection;
