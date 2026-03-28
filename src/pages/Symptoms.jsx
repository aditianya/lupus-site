import Card from "../components/Card";

import img1 from "../assets/fatigue.png";
import img2 from "../assets/joint.jpg";
import img3 from "../assets/rash.jpg";
import img4 from "../assets/hair.jpg";


function Symptoms() {

  const symptoms = [
    {
      title: "Fatigue",
      text: "Extreme tiredness",
      img: img1,
    },
    {
      title: "Joint pain",
      text: "Pain in joints",
      img: img2,
    },
    {
      title: "Skin rash",
      text: "Butterfly rash",
      img: img3,
    },
    {
      title: "Hair fall",
      text: "Hair loss",
      img: img4,
    },
  ];

  return (

    <div className="section">

      <h2>Common Symptoms</h2>

      <div className="card-container">

        {symptoms.map((s, i) => (

          <Card
            key={i}
            title={s.title}
            text={s.text}
            img={s.img}
          />

        ))}

      </div>

    </div>

  );

}

export default Symptoms;