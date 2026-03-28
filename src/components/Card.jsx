function Card({ title, text, img }) {

  return (

    <div
      className="card"  data-aos="zoom-in"
      style={{ backgroundImage: `url(${img})` }}
    >

      <div className="overlay">

        <h3>{title}</h3>

        <p>{text}</p>

      </div>

    </div>

  );

}

export default Card;