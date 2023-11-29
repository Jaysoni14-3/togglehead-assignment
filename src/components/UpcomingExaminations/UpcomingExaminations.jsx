import "./upcomingExaminations.css";

import calenderIcon from "../../assets/calender-icon.png";
import ExamSwiper from "./ExamSwiper";

const UpcomingExaminations = () => {
  const examinationsData = [
    {
      id: 1,
      icon: calenderIcon,
      date: "02th October 2014",
      level: "Level 1 exam",
      exams: [],
    },
    {
      id: 2,
      icon: calenderIcon,
      date: "Nov-Dec 2016",
      level: "Level 2",
      exams: ["Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      id: 3,
      icon: calenderIcon,
      date: "Ongoing this year",
      level: "Level 3 (Grad)",
      exams: [],
    },
  ];

  //
  return (
    <>
      <section className="upcoming-examinations">
        <div className="top-section">
          <div className="section-header">
            <h2>Upcoming Examinations</h2>
            <p>Enquire about the examination & register for the exams</p>
          </div>
          <hr className="divider" />
          <div className="section-body">
            {examinationsData.map((data) => (
              <article className="card" key={data.id}>
                <div className="icon">
                  <img src={data.icon} alt="calender-icon" />
                </div>
                <div className="details">
                  <div className="text-container">
                    <h5>{data.date}</h5>
                    <p>{data.level}</p>
                  </div>
                  {data.exams && (
                    <div className="additional-info">
                      {data.exams.map((exam, idx) => (
                        <span key={idx}>{exam}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ExamSwiper />
    </>
  );
};

export default UpcomingExaminations;
