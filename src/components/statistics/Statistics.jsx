import CountUp from "react-countup";

import "./statistics.css";

const Statistics = () => {
  const statsData = [
    {
      id: 1,
      header: "Lorem ipsum",
      number: 123,
      subHeader: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      id: 2,
      header: "Lorem ipsum",
      number: 12,
      subHeader: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
      id: 3,
      header: "Lorem ipsum",
      number: 12,
      subHeader: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
      id: 4,
      header: "Lorem ipsum",
      number: 123,
      subHeader: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
  ];

  return (
    <section className="statistics-section">
      {statsData.map((stat) => (
        <article key={stat.id} className="stats-card">
          <span>{stat.subHeader}</span>
          <h2>
            <CountUp duration={3} start={0} end={stat.number} />+
          </h2>
          <h5>{stat.header}</h5>
          <p>{stat.description}</p>
        </article>
      ))}
    </section>
  );
};

export default Statistics;
