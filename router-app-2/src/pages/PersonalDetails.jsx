import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const PersonalDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchUserDetails = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users/" + id)
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error");
        }
      })
      .then((res) => setUserDetails(res.data))
      .catch((err) => {
        console.error(err);
        navigate("/no-user");
      });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const { first_name, last_name, avatar, email } = userDetails;

  // const {
  //   state: { first_name, last_name, avatar, email },
  // } = useLocation();
  return loading ? (
    <div>
      <h3>Loading...</h3>
    </div>
  ) : (
    <div className="personal-details-wrapper">
      <div className="card">
        <img src={avatar} alt="" />
        <h2>
          {first_name} {last_name}
        </h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default PersonalDetails;
