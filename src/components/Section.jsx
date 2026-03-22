function Section({ title, children }) {
  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h2>{title}</h2>

      {children}

    </div>
  );
}

export default Section;