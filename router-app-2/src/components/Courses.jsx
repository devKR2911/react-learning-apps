import courses from "../data/data";
const Courses = () => {
  return (
    <div className="courses-wrapper">
      <h1>Our Courses</h1>
      <div className="icon-wrapper">
        {courses.map((course) => {
          const { id, name, text, img } = course;
          return (
            <div key={id} className="card">
              <img src={img} alt={name} />
              <h2>{name}</h2>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
