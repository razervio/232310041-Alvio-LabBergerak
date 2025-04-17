import React, { Component } from "react";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyBio: {
        identity: {
          npm: 212310056,
          firstname: "ALVIO",
          middlename: "REZA",
          lastname: "FEBRIAN",
        },
        educations: [
          { id: 1, school: "SD MARDI WALUYA BOGOR" },
          { id: 2, school: "SMP MARDI WALUYA BOGOR" },
          { id: 3, school: "SMA BUDIMULIA BOGOR" },
        ],
        mobile_phone: 085717821394,
        email: "232310041@student.ibik.ac.id",
        gender: "M",
        tall_body: 175,
        weight_body: 90.5,
      },
    };
  }

  render() {
    const { identity, educations, mobile_phone, email, gender, tall_body, weight_body } = this.state.MyBio;

    return (
      <div style={profileStyle}>
        <h2>My Profile</h2>
        <p><strong>NPM:</strong> {identity.npm}</p>
        <p><strong>Full Name:</strong> {identity.firstname} {identity.middlename} {identity.lastname}</p>
        <p><strong>Phone:</strong> {mobile_phone}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {tall_body} cm</p>
        <p><strong>Weight:</strong> {weight_body} kg</p>
        <h4>Education:</h4>
        <ul>
          {educations.map((edu) => (
            <li key={edu.id}>{edu.school}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const profileStyle = {
  marginTop: "30px",
  border: "2px solid #ccc",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#ffffff",
  width: "400px",
  textAlign: "left",
};

export default MyProfile;
