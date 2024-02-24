import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import $ from "jquery";
import "../../../src/styles/footer.css";


function Footer() {
  var home = ["Home", "About Us", "Courses", "Contact"];
  var support = ["Terms & Conditions", "Privacy Policy", "Faq's"];
  var programs = [
    "Programming Languages",
    "Embedded Software",
    "Software Testing",
    "Analytics",
  ];
  var information = [
    "Email: enquiry@qrs.in",
    "Phone No: +91811 007 7033",
    "+91811 007 5700",
    "2000, Krishna Colony",
    "Trichy Road Trichy-641 005",
  ];

  const [mail1, setmail1] = useState("");

  function Handleevent(event) {
    $(".error").remove();

    if (mail1.length < 1) {
      $("#ss").after(
        '<span class="error" style="color:red;" >*This field is required</span>'
      );
    } else {
      var regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      var validEmail = regEx.test(mail1);
      if (!validEmail) {
        $("#ss").after(
          '<span class="error" style="color: red;">*Invalid</span>'
        );
      }
    }
    event.preventDefault();
  }

  return (
    <div className="container-fluid" style={{ position: "relative" }}>
     

      <div
        className="container-fluid py-4"
        style={{
          backgroundColor: "#404040", color: "white"
        }}
      >
        <div className="row" style={{ height: "100%" }}>
          <div className="col-6 col-md-3 col-lg-3">
            <p style={{ color: "white", fontFamily: "sans-serif" }}>
              <b>QUICK LINK</b>
            </p>
            {home.map((a) => {
              return <p style={{ color: "white", fontFamily: "sans-serif", fontSize: '13px' }}>{a}</p>;
            })}
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <p style={{ color: "white", fontFamily: "sans-serif" }}>
              <b>SUPPORT</b>
            </p>
            {support.map((a) => {
              return <p style={{ color: "white", fontFamily: "sans-serif", fontSize: '13px' }}>{a}</p>;
            })}
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <p style={{ color: "white", fontFamily: "sans-serif" }}>
              <b>PROGRAMS</b>
            </p>
            {programs.map((a) => {
              return <p style={{ color: "white", fontFamily: "sans-serif", fontSize: '13px' }}>{a}</p>;
            })}
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <p style={{ color: "white", fontFamily: "sans-serif", }}>
              <b>COMPANY INFORMATION</b>
            </p>
            {information.map((a) => {
              return <p style={{ color: "white", fontFamily: "sans-serif", fontSize: '13px' }}>{a}</p>;
            })}
          </div>
        </div>

        <div className="row pt-4">


          <div
            className="col-6 col-lg-7"
            style={{
              position: 'relative',
              marginLeft: '18rem',
              alignItem: 'center',
              textAlign: "center",
            }}
          >

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;