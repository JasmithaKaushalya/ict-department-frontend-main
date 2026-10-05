function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white
        rounded-xl
        shadow-md
        p-6
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;