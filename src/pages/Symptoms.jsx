const symptoms = [
  { name: "Fatigue" },
  { name: "Joint pain" },
  { name: "Skin rash" },
];

function Symptoms() {
  return (
    <div>
      {symptoms.map((s, i) => (
        <div key={i}>{s.name}</div>
      ))}
    </div>
  );
}

export default Symptoms;