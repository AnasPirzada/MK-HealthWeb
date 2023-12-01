import React, { useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./orderlabtest.css";
import Navbare from "../../../Compunents/Navbar";
import Footer from "../../../Compunents/Footer";

const Orderlabtest = () => {
  const inputDetails = [
    {
      placeholder: "Mohsin",
      label: "Patient Name ",
      type: "text",
      key: "PatientName",
    },

    { placeholder: "09/Dec/2023", label: "Date of Birth", key: "dob" },
    { placeholder: "Male", label: "Gender", key: "Gender" },
    {
      placeholder: "none",
      label: "Past Medical Problems",
      key: "PastMedicalProblems",
    },
    {
      placeholder: "Panadol tablet",
      label: "Current Medications",
      key: "CurrentMedications",
    },
    {
      placeholder: "none",
      label: "Allergies",
      type: "number",
      key: "Allergies",
    },
  ];

  const otherDetails = [
    {
      placeholder: "Type here...",
      paragraph:
        "You will be able to edit these notes after the lab tests are resulted.",
      label: "Other Notes For Your Documentation",
      type: "textarea",
      rows: 4,
    },
  ];

  const [pharmacies] = useState([
    {
      name: "A - Quest Diagnostics",
      address: "135 Barclay Cir, Ste 103Rochester Hills, MI 48307",
    },
    {
      name: "A - Quest Diagnostics",
      address: "135 Barclay Cir, Ste 103Rochester Hills, MI 48307",
    },
    {
      name: "A - Quest Diagnostics",
      address: "135 Barclay Cir, Ste 103Rochester Hills, MI 48307",
    },
    {
      name: "A - Quest Diagnostics",
      address: "135 Barclay Cir, Ste 103Rochester Hills, MI 48307",
    },
    {
      name: "A - Quest Diagnostics",
      address: "135 Barclay Cir, Ste 103Rochester Hills, MI 48307",
    },
    {
      name: "A - Quest Diagnostics",
      address: "135 Barclay Cir, Ste 103Rochester Hills, MI 48307",
    },
    {
      name: "A - Quest Diagnostics",
      address: "135 Barclay Cir, Ste 103Rochester Hills, MI 48307",
    },
    {
      name: "A - Quest Diagnostics",
      address: "135 Barclay Cir, Ste 103Rochester Hills, MI 48307",
    },
    {
      name: "A - Quest Diagnostics",
      address: "135 Barclay Cir, Ste 103Rochester Hills, MI 48307",
    },
  ]);

  const [inputValues, setInputValues] = useState(
    Array(inputDetails.length).fill("")
  );

  const [selectedGender, setSelectedGender] = useState(null);
  const [SelectedDate, setSelectedDate] = useState(null);

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  const handleInputChange = (index, e) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = e.target.value;
    setInputValues(updatedInputValues);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const [isUpperRowVisible, setIsUpperRowVisible] = useState(true);

  const togglesSelect = (index) => {
    // Toggle the visibility of the upper and lower rows when the button is clicked.
    setIsUpperRowVisible(!isUpperRowVisible);
  };

  // Define a function to toggle the visibility
  const toggleUpperRowVisibility = () => {
    setIsUpperRowVisible(!isUpperRowVisible);
  };

  const [selectedPharmacies, setSelectedPharmacies] = useState([]);

  const toggleSelect = (index) => {
    const updatedSelectedPharmacies = [...selectedPharmacies];
    const isSelected = updatedSelectedPharmacies.includes(index);

    if (isSelected) {
      // If already selected, deselect it
      updatedSelectedPharmacies.splice(
        updatedSelectedPharmacies.indexOf(index),
        1
      );
    } else {
      // If not selected, select it
      updatedSelectedPharmacies.push(index);
    }

    setSelectedPharmacies(updatedSelectedPharmacies);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [iconSrc1, setIconSrc1] = useState("./galaAdd0.svg");

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);

    // Change the icon source based on the current state
    const newIconSrc1 = isOpen1 ? "./galaAdd0.svg" : "./gala_add.svg";
    setIconSrc1(newIconSrc1);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const [iconSrc2, setIconSrc2] = useState("./galaAdd0.svg");

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);

    const newIconSrc2 = isOpen2 ? "./galaAdd0.svg" : "./gala_add.svg";
    setIconSrc2(newIconSrc2);
  };

  const testData = [
    {
      id: "test1",
      label: "ABO/RH Type (7788)",
      description: "Checks the ABO blood type and Rh Factor",
    },
    {
      id: "test2",
      label: "ABO/RH Type (7788)",
      description: "Checks the ABO blood type and Rh Factor",
    },
    {
      id: "test3",
      label: "ABO/RH Type (7788)",
      description: "Checks the ABO blood type and Rh Factor",
    },
    {
      id: "test4",
      label: "ABO/RH Type (7788)",
      description: "Checks the ABO blood type and Rh Factor",
    },
  ];

  const panelTestsGroups = [
    {
      groupName: "Group 1",
      tests: [
        { id: "T3free", label: "T3 free" },
        { id: "T4free", label: "T4 free" },
        { id: "TSH", label: "TSH" },
        // Add more tests for Group 1 as needed
      ],
    },
    {
      groupName: "Group 2",
      tests: [
        { id: "T3free1", label: "T3 free" },
        { id: "T4free1", label: "T4 free" },
        { id: "TSH1", label: "TSH" },
        // Add more tests for Group 1 as needed
      ],
    },

    // Add more groups as needed
  ];

  const [termsChecked, setTermsChecked] = useState(false);
  const [testsOrdered, setTestsOrdered] = useState([
    { id: 1, name: "Hemoglobin A1C (496)", fee: 22.2 },
  ]);

  const handleTermsCheckboxChange = () => {
    setTermsChecked(!termsChecked);
  };

  const handleRemoveTest = (testId) => {
    const updatedTests = testsOrdered.filter((test) => test.id !== testId);
    setTestsOrdered(updatedTests);
  };

  const [selectedTests, setSelectedTests] = useState([]);
  const handleSelectAllTests = () => {
    const allTestIds = testData.map((test) => test.id);
    setSelectedTests(allTestIds);
  };

  const handleUnselectAllTests = () => {
    setSelectedTests([]);
  };

  const handleToggleTest = (testId) => {
    const isSelected = selectedTests.includes(testId);
    const updatedSelectedTests = isSelected
      ? selectedTests.filter((id) => id !== testId)
      : [...selectedTests, testId];
    setSelectedTests(updatedSelectedTests);
  };

  const [selectedPanelTests, setSelectedPanelTests] = useState([]);

  const handleTogglePanelTest = (testId) => {
    const isSelected = selectedPanelTests.includes(testId);
    const updatedSelectedPanelTests = isSelected
      ? selectedPanelTests.filter((id) => id !== testId)
      : [...selectedPanelTests, testId];
    setSelectedPanelTests(updatedSelectedPanelTests);
  };

  const handleSelectAllPanelTests = (group) => {
    const allPanelTestIds = group.tests.map((test) => test.id);
    setSelectedPanelTests(allPanelTestIds);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <>
      <Navbare />
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <br />

            <div className="text-center">
              <h3 className="m-auto mt-5" style={{ color: "#FAB915" }}>
                <b> Lab Tests </b>
              </h3>
            </div>

            <br />

            <div
              className=" m-auto mt-5 mobw100 "
              style={{ width: "90%", borderRadius: "30px" }}
            >
              <h6 className="ms-2 ms-md-5  pb-4 border-bottom mx-4">
                <b style={{ color: "#FAB915" }}>Prescribe a Medication</b>
              </h6>

              <div className="py-3 m-auto   mobw90 rounded-3 ">
                <div
                  className="d-flex align-content-center  justify-content-between    m-auto "
                  style={{ width: "92%" }}
                >
                  <p className="ms-2 mobfont12">
                    Please enter the information below to send the medication
                    prescription to your patient. you will be notified by email
                    if your patient accepts your prescription.
                  </p>
                </div>
              </div>
            </div>

            <br />
            <br />

            <div
              className=" m-auto  shadow py-5 mobw100  "
              style={{ width: "75%", borderRadius: "30px" }}
            >
              <h6 className=" ms-2 ms-md-5  pb-4 border-bottom mx-4">
                <b style={{ color: "#FAB915" }}>1 - H & P Notes</b>
              </h6>

              <div>
                {inputDetails.map((input, index) => (
                  <div
                    key={index}
                    className=" m-auto mobw90"
                    style={{ width: "80%" }}
                  >
                    <p className="mb-1 ms-3 mt-3 ">{input.label}</p>
                    <input
                      type={input.type}
                      className="border-bottom border-0  w-100 m-0 p-3  "
                      placeholder={input.placeholder}
                      name={input.key}
                      value={inputValues[index]}
                      onChange={(e) => {
                        handleInputChange(index, e);
                        handleChange(e);
                      }}
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className=" m-auto mobw90" style={{ width: "80%" }}>
                  <div>
                    {otherDetails.map((input, index) => (
                      <div key={index} className=" m-auto mobw90">
                        <p className="mb-1 ms-3 mt-3 ">{input.label}</p>
                        <p
                          className="mb-1 ms-3 mt-1 "
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          {input.paragraph}
                        </p>
                        <textarea
                          type={input.type}
                          className="shadow border-0  w-100 m-0 p-3 rounded-5 "
                          placeholder={input.placeholder}
                          name={input.key}
                          value={inputValues[index]}
                          onChange={(e) => {
                            handleInputChange(index, e);
                            handleChange(e);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />

            <div
              className=" m-auto mt-5 shadow py-5 mobw100 "
              style={{ width: "75%", borderRadius: "30px" }}
            >
              <h6 className=" ms-2 ms-md-5  pb-4 border-bottom mx-4">
                <b style={{ color: "#FAB915" }}>2 - Choose lab test</b>
              </h6>

              <div
                className="py-3 m-auto  mobw90 rounded-3 "
                style={{ width: "80%" }}
              >
                <div>
                  <p className="ms-2 mobfont12">
                    When you Select the tests, the total fees due will be
                    display before you submit this lab order.
                  </p>
                </div>
                <div className="m-auto d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    {" "}
                    <img
                      src={iconSrc1}
                      alt="open"
                      className="me-4"
                      role="button"
                      onClick={handleToggle1}
                    />
                    <p
                      className="my-0"
                      style={{ color: "#FAB915", fontSize: "1.2rem" }}
                    >
                      Show Lab Test Search
                    </p>
                  </div>
                </div>
                {isOpen1 && (
                  <div
                    className=" m-auto  py-3 mobw100 rounded-0 rounded-5"
                    style={{ width: "80%" }}
                  >
                    <div style={{ width: "90%" }}>
                      <div>
                        <label
                          htmlFor="search"
                          style={{
                            fontSize: "1.3rem",
                          }}
                        >
                          {" "}
                          Search:
                        </label>
                        <input
                          type="search"
                          placeholder="Search for lab test"
                          className="w-50 shadow px-4 py-2 rounded-5"
                        />
                      </div>
                      <div className="mt-4 ">
                        <button
                          className="px-2 py-1"
                          style={{
                            backgroundColor: "white",
                            color: "#FAB915",
                            border: "1px solid #FAB915",
                            borderRadius: "10px",
                            fontSize: "1.1rem",
                          }}
                          onClick={handleSelectAllTests}
                        >
                          Select All Tests
                        </button>
                        <button
                          className="px-2 py-1"
                          style={{
                            marginLeft: "1rem",
                            color: "white",
                            border: "1px solid #FAB915",
                            borderRadius: "10px",
                            fontSize: "1.1rem",
                          }}
                          onClick={handleUnselectAllTests}
                        >
                          Unselect All
                        </button>
                      </div>
                      <div
                        className="my-4"
                        style={{
                          fontSize: "1.1rem",
                        }}
                      >
                        Showing results for : <b>a</b>
                      </div>
                      {testData.map((test) => (
                        <Row key={test.id}>
                          <Col xs={12} md={6} lg={6} xl={6}>
                            <div className="form-group">
                              <input
                                type="checkbox"
                                id={test.id}
                                checked={selectedTests.includes(test.id)}
                                onChange={() => handleToggleTest(test.id)}
                              />

                              <label
                                htmlFor={test.id}
                                style={{ fontSize: "1.1rem" }}
                              >
                                {test.label}
                              </label>
                              <div
                                className="pt-2"
                                style={{ fontSize: "0.8rem" }}
                              >
                                <p className="ml-2">{test.description}</p>
                                <a href="/">Learn more</a>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      ))}
                    </div>
                  </div>
                )}
                <hr />
                <div className="m-auto d-flex justify-content-between align-items-center ">
                  <div className="d-flex">
                    {" "}
                    <img
                      src={iconSrc2}
                      alt="open"
                      className="me-4"
                      role="button"
                      onClick={handleToggle2}
                    />
                    <p
                      className="my-0"
                      style={{ color: "#FAB915", fontSize: "1.2rem" }}
                    >
                      Hide Previously ordered tests and panels
                    </p>
                  </div>
                </div>
                {isOpen2 && (
                  <div
                    className=" m-auto  py-3 mobw100 rounded-0 rounded-5"
                    style={{ width: "80%" }}
                  >
                    <div style={{ width: "90%" }}>
                      <div>
                        <h5>Your Panels</h5>
                        <p style={{ fontSize: "0.8rem" }}>
                          Most frequently multi-test order across all patients,
                          excluding those only by request.
                        </p>
                      </div>
                      <div>
                        {panelTestsGroups.map((group) => (
                          <div key={group.groupName}>
                            <button
                              className="px-2 py-1 mb-4"
                              style={{
                                marginLeft: "1rem",
                                color: "white",
                                border: "1px solid #FAB915",
                                borderRadius: "10px",
                                fontSize: "1.1rem",
                              }}
                              onClick={() => handleSelectAllPanelTests(group)}
                            >
                              Select All
                            </button>
                            <div>
                              {group.tests.map((test) => (
                                <div className="form-group" key={test.id}>
                                  <input
                                    type="checkbox"
                                    id={test.id}
                                    size="24"
                                    checked={selectedPanelTests.includes(
                                      test.id
                                    )}
                                    onChange={() =>
                                      handleTogglePanelTest(test.id)
                                    }
                                  />
                                  <label
                                    htmlFor={test.id}
                                    style={{ fontSize: "1.1rem" }}
                                  >
                                    {test.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                            <hr />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <br />
            <br />

            <div
              className="m-auto mt-5 shadow py-5 mobw100"
              style={{ width: "75%", borderRadius: "30px" }}
            >
              <h6 className="ms-2 ms-md-5 pb-4 border-bottom mx-4">
                <b style={{ color: "#FAB915" }}>
                  3 - Set Your Professional Fee
                </b>
              </h6>

              <div
                className="py-3 m-auto mobw90 rounded-3"
                style={{ width: "80%" }}
              >
                <div className="form-group">
                  <input
                    type="checkbox"
                    id="Terms_check_1"
                    checked={termsChecked}
                    onChange={handleTermsCheckboxChange}
                  />
                  <label htmlFor="Terms_check_1" style={{ fontSize: "1.1rem" }}>
                    I am paying the lab order fees.
                  </label>
                  <p
                    className="mt-3"
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    Your professional fee is included in the total fees charged
                    to the patient when approving the lab order.
                  </p>
                  <div className="mt-4">
                    <button
                      className=" rounded-5 shadow"
                      style={{
                        backgroundColor: "white",
                        paddingRight: "10px",
                        fontSize: "24px",
                        color: "#FAB915",
                        border: "none", // Set border to "none" to remove border color
                      }}
                    >
                      <span
                        style={{
                          paddingRight: "10px",
                        }}
                      >
                        <img src="./bi_currency-dollar.svg" alt="currency" />
                      </span>
                      100.00
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="m-auto mt-5 shadow py-5 mobw100"
              style={{ width: "75%", borderRadius: "30px" }}
            >
              <h6 className="ms-2 ms-md-5 pb-4 border-bottom mx-4">
                <b style={{ color: "#FAB915" }}>4 - Authorize Lab Order</b>
              </h6>

              <div
                className="py-3 m-auto mobw90 rounded-3"
                style={{ width: "80%" }}
              >
                <div className="form-group">
                  <input
                    type="checkbox"
                    id="Terms_check_1"
                    checked={termsChecked}
                    onChange={handleTermsCheckboxChange}
                  />
                  <label htmlFor="Terms_check_1" style={{ fontSize: "1.1rem" }}>
                    By checking this box, I am electronically signing and
                    authorizing the lab or.
                  </label>
                </div>
                <div>
                  <div className="d-flex">
                    <p style={{ fontSize: "1.1rem" }}>
                      How was consult handled?
                    </p>
                    <p style={{ fontSize: "1.1rem", color: "#747E93" }}>
                      (select all that apply)
                    </p>
                  </div>
                  <div className="custom-radio-container">
                    <label className="custom-radio">
                      <input
                        type="radio"
                        name="communicationOption"
                        value="message"
                        checked={selectedOption === "message"}
                        onChange={() => handleOptionChange("message")}
                      />
                      <span className="checkmark"></span>
                      Message
                    </label>

                    <label className="custom-radio">
                      <input
                        type="radio"
                        name="communicationOption"
                        value="phone"
                        checked={selectedOption === "phone"}
                        onChange={() => handleOptionChange("phone")}
                      />
                      <span className="checkmark"></span>
                      Phone
                    </label>

                    <label className="custom-radio">
                      <input
                        type="radio"
                        name="communicationOption"
                        value="video"
                        checked={selectedOption === "video"}
                        onChange={() => handleOptionChange("video")}
                      />
                      <span className="checkmark"></span>
                      Video
                    </label>

                    <label className="custom-radio">
                      <input
                        type="radio"
                        name="communicationOption"
                        value="inPerson"
                        checked={selectedOption === "inPerson"}
                        onChange={() => handleOptionChange("inPerson")}
                      />
                      <span className="checkmark"></span>
                      In Person
                    </label>
                    <div className="d-flex ">
                      <label className="custom-radio">
                        <div className="d-flex"></div>
                        <input
                          type="radio"
                          name="communicationOption"
                          value="other"
                          checked={selectedOption === "other"}
                          onChange={() => handleOptionChange("other")}
                        />
                        <span className="checkmark"></span>
                        Other:
                      </label>
                      <input
                        type="text"
                        placeholder="Type here..."
                        className="w-25 shadow px-4 py-2 rounded-5"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 m-auto" style={{ width: "95%" }}>
                  <h5>Tests Ordered</h5>
                  {testsOrdered.map((test) => (
                    <div
                      className="d-flex m-auto"
                      style={{ width: "95%" }}
                      key={test.id}
                    >
                      <p style={{ marginBottom: "0" }}>{test.name}</p>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          color: "#FF0E0E",
                          marginLeft: "30px",
                          verticalAlign: "middle",
                        }}
                        onClick={() => handleRemoveTest(test.id)}
                      >
                        remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-5 m-auto" style={{ width: "95%" }}>
                  <h5>
                    Total Fees:{" "}
                    <b>
                      $
                      {testsOrdered
                        .reduce((total, test) => total + test.fee, 0)
                        .toFixed(2)}
                    </b>
                  </h5>
                  <p style={{ fontSize: "14px" }}>
                    Includes your professional fee and a processing fee.{" "}
                    <Link>Learn More</Link>
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    When you click the “NEXT” Button elow and confirm
                    prescription details, the prescription will be routed to the
                    pharmacy that your patient will be notified. You will have
                    the opportunity to document notes from this encounter on the
                    next screen.
                  </p>
                </div>
              </div>
            </div>

            <br />
            <br />
            <Container>
              <Row
                className=" my-4 m-auto p-4 mobw100 d-flex justify-content-center align-items-center"
                style={{ width: "75%" }}
              >
                <Col md={3}>
                  <button
                    className="text-white w-100 p-3 border-0 rounded-5 mb-2 "
                    style={{
                      backgroundColor: "#FAB915",
                    }}
                  >
                    Send Lab Tests
                    <img
                      src="/public/Component 622 – 1.svg"
                      className="ms-3"
                      alt=""
                    />
                  </button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Orderlabtest;
