function NewsletterCTA() {
  return (
    <section className="bg-blue-700 py-20">
      <div className="max-w-2xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-bold">Stay Connected with Our Department</h2>

        <p className="mt-4 text-blue-100">
          Subscribe to receive department news and event updates.
        </p>

        <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your university email"
            className="w-full sm:w-72 rounded-lg px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <button
            type="button"
            className="rounded-lg bg-white text-blue-700 font-semibold px-6 py-3 hover:bg-blue-50 transition-colors"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterCTA;