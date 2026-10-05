function SectionTitle({ title, subtitle, center = true }) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      <p className="text-blue-700 font-semibold uppercase tracking-widest">
        {title}
      </p>

      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
        {subtitle}
      </h2>
    </div>
  );
}

export default SectionTitle;
