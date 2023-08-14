import React from "react";
// import PropTypes from "prop-types";

export default function About(props) {
  // const[sytle,Setsytle]=useState({
  //         color:'black',
  //         backgroundColor:'white'
  // })

  // const [btntext, setbtntext]=useState("Enable dark mode")

  // const togglebtn = ()=>{
  //     if(sytle.color === 'black'){
  //         Setsytle({
  //             color:'white',
  //             backgroundColor:'black'
  //         })
  //         setbtntext("Enable Light mode")
  //     }
  //     else{
  //         Setsytle({
  //             color:'black',
  //             backgroundColor:'white '

  //         })
  //         setbtntext("Enable Dark Mode")
  //     }
  // }
  return (
    <div className="container my-3">
      <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:
                  props.mode === "dark" ? "solid 2px white" : "solid 2px black",
              }}
            >
              What is Text-Genie
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:
                  props.mode === "dark" ? "solid 2px white" : "solid 2px black",
              }}
            >
              <strong>This Text Analyzer is a powerful tool</strong> that
              provides a wide range of functionalities for manipulating text.
              With this tool, you can effortlessly convert text to{" "}
              <strong>
                Uppercase or Lowercase, easily Replace specific words or
                phrases, utilize the Text-to-Speech feature, and accomplish
                numerous other tasks{" "}
              </strong>{" "}
              The Text Analyzer is designed to enhance your text processing
              experience by offering a comprehensive set of tools and features
              to meet your needs.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:
                  props.mode === "dark" ? "solid 2px white" : "solid 2px black",
              }}
            >
              Technology Used
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:
                  props.mode === "dark" ? "solid 2px white" : "solid 2px black",
              }}
            >
              <strong>
                This website has been developed using the React framework
              </strong>{" "}
              along with other powerful languages such as HTML, CSS, and
              JavaScript. To elevate the design and user experience, I have
              seamlessly incorporated the Bootstrap framework. The combination
              of these technologies has enabled me to create a dynamic and
              visually captivating website that is sure to leave a lasting
              impression.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:
                  props.mode === "dark" ? "solid 2px white" : "solid 2px black",
              }}
            >
              Let's Talk
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:
                  props.mode === "dark" ? "solid 2px white" : "solid 2px black",
              }}
            >
              <strong>
                {" "}
                <a href="mailto: harshvaidya345@gmail.com">Mail Us</a> ||{" "}
                <a href="https://github.com/harshvaid321123">Git-Hub</a> ||
                <a href="https://www.linkedin.com/in/harsh-vaidya-501332271/"> LinkedIn </a>
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner my-3">
        {/* <button style={sytle} type="button" onClick={togglebtn} className="btn btn-secondary">{btntext}  </button> */}
      </div>
    </div>
  );
}
