import React, { useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OrderformyselfForm.css";

const OrderformyselfForm = () => {
  const inputDetails = [
    {
      placeholder: "John",
      label: "First Name ",
      type: "text",
      key: "FirstName",
    },
    { placeholder: "Wick", label: "Last Name", key: "LastName" },
    { placeholder: "Street Adress", label: "Address Line 1", key: "Address" },
    { placeholder: "Street Adress", label: "Address Line 2", key: "Address" },
    { placeholder: "California", label: "State", key: "State" },
    { placeholder: "City", label: "City", key: "City" },
    { placeholder: "5800", label: "Zip Code", type: "number", key: "ZipCode" },
    {
      placeholder: "000 - 0000 - 0000",
      label: "Phone",
      type: "number",
      key: "phone",
    },
  ];

  const otherDetails = [
    {
      placeholder: "Optional",
      paragraph:
        "These note will be stored with your lab results. you will be able to edit them after the lab tests are resulted.",
      label: "Personal notes",
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
      id: "test1",
      label: "ABO/RH Type (7788)",
      description: "Checks the ABO blood type and Rh Factor",
    },
    {
      id: "test2",
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
      groupName: "Group 1",
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

  return (
    <>
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <br />

            <div className="text-center">
              <h3 className="m-auto mt-5" style={{ color: "#FAB915" }}>
                <b> Order For Myself </b>
              </h3>
            </div>

            <div
              className=" m-auto mt-5 shadow py-5 mobw100 "
              style={{ width: "75%", borderRadius: "30px" }}
            >
              <h6 className="ms-2 ms-md-5  pb-4 border-bottom mx-4">
                <b style={{ color: "#FAB915" }}>Step 1 - Choose State</b>
              </h6>

              <div
                className="py-3 m-auto   mobw90 rounded-3 "
                style={{ width: "80%" }}
              >
                <div
                  className="d-flex align-content-center  justify-content-between    m-auto "
                  style={{ width: "95%" }}
                >
                  <p className="ms-2 mobfont12">
                    Choose your state from below:
                  </p>
                </div>
                <div
                  className="mt-1 d-flex align-content-center  justify-content-between    m-auto "
                  style={{ width: "95%" }}
                >
                  <div className="input-container shadow bg-light  w-100 rounded-5 ">
                    <select
                      className="w-100 rounded-3 text-muted"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                    >
                      <option value="AL">Alabama (AL)</option>
                      <option value="AK">Alaska (AK)</option>
                      <option value="AZ">Arizona (AZ)</option>
                      <option value="AR">Arkansas (AR)</option>
                      <option value="CA">California (CA)</option>
                      <option value="CO">Colorado (CO)</option>
                      <option value="CT">Connecticut (CT)</option>
                      <option value="DE">Delaware (DE)</option>
                      <option value="DC">District Of Columbia (DC)</option>
                      <option value="FL">Florida (FL)</option>
                      <option value="GA">Georgia (GA)</option>
                      <option value="HI">Hawaii (HI)</option>
                      <option value="ID">Idaho (ID)</option>
                      <option value="IL">Illinois (IL)</option>
                      <option value="IN">Indiana (IN)</option>
                      <option value="IA">Iowa (IA)</option>
                      <option value="KS">Kansas (KS)</option>
                      <option value="KY">Kentucky (KY)</option>
                      <option value="LA">Louisiana (LA)</option>
                      <option value="ME">Maine (ME)</option>
                      <option value="MD">Maryland (MD)</option>
                      <option value="MA">Massachusetts (MA)</option>
                      <option value="MI">Michigan (MI)</option>
                      <option value="MN">Minnesota (MN)</option>
                      <option value="MS">Mississippi (MS)</option>
                      <option value="MO">Missouri (MO)</option>
                      <option value="MT">Montana (MT)</option>
                      <option value="NE">Nebraska (NE)</option>
                      <option value="NV">Nevada (NV)</option>
                      <option value="NH">New Hampshire (NH)</option>
                      <option value="NJ">New Jersey (NJ)</option>
                      <option value="NM">New Mexico (NM)</option>
                      <option value="NY">New York (NY)</option>
                      <option value="NC">North Carolina (NC)</option>
                      <option value="ND">North Dakota (ND)</option>
                      <option value="OH">Ohio (OH)</option>
                      <option value="OK">Oklahoma (OK)</option>
                      <option value="OR">Oregon (OR)</option>
                      <option value="PA">Pennsylvania (PA)</option>
                      <option value="RI">Rhode Island (RI)</option>
                      <option value="SC">South Carolina (SC)</option>
                      <option value="SD">South Dakota (SD)</option>
                      <option value="TN">Tennessee (TN)</option>
                      <option value="TX">Texas (TX)</option>
                      <option value="UT">Utah (UT)</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
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
                <b style={{ color: "#FAB915" }}>
                  Step - 2 Personal Information
                </b>
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

              <div>
                <div className="m-auto mobw90" style={{ width: "80%" }}>
                  <p className="mb-1 ms-3 mt-3">Date of Birth</p>
                  <div style={{ position: "relative" }}>
                    <input
                      type="date"
                      className="shadow border-0 w-100 m-0 p-3 rounded-5"
                      onChange={handleDateChange}
                    />
                  </div>
                </div>

                <div>
                  <div className=" m-auto mobw90" style={{ width: "80%" }}>
                    <p className="mb-1 ms-3 mt-3 ">Gender</p>

                    <div className="d-flex align-items-center">
                      <div
                        className={`d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                          selectedGender === "male" ? "selected" : ""
                        }`}
                        onClick={() => handleGenderClick("male")}
                        style={{
                          background:
                            selectedGender === "male" ? "" : "#FFFFFF",
                          color: selectedGender === "male" ? "#FAB915" : "",
                        }}
                      >
                        <input
                          type="radio"
                          checked={selectedGender === "male"}
                          readOnly
                        />
                        <span className="ms-2">Male</span>
                      </div>
                      <div
                        className={`ms-2 d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                          selectedGender === "female" ? "selected" : ""
                        }`}
                        onClick={() => handleGenderClick("female")}
                      >
                        <input
                          type="radio"
                          checked={selectedGender === "female"}
                          readOnly
                        />
                        <span
                          className="ms-2"
                          style={{
                            background:
                              selectedGender === "female" ? "" : "#FFFFFF",
                            color: selectedGender === "female" ? "#FAB915" : "",
                          }}
                        >
                          Female
                        </span>
                      </div>
                    </div>
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
            </div>

            <br />
            <br />

            <div
              className=" m-auto  shadow py-5 mobw100"
              style={{ width: "75%", borderRadius: "30px" }}
            >
              {isUpperRowVisible ? (
                <div className="m-auto obw100 " style={{ width: "95%" }}>
                  <h6 className="  pb-4 border-bottom mx-4">
                    <b style={{ color: "#FAB915", width: "90%" }}>
                      Step - 3 Choose Lab
                    </b>
                  </h6>

                  <p className="text-muted">
                    Enter your Zip Code or city to see a list of available Quest
                    Diagnostics lab locations in your area.
                  </p>

                  <Row className="d-flex justify-content-between align-items-center w-100">
                    <Row className="d-flex">
                      <Col xl={6}>
                        <input
                          type="search"
                          placeholder="Newagen, ME"
                          className="w-50 shadow  px-4 py-2 rounded-5"
                        />
                        <button
                          className="border-0 p-3 w-25 rounded-5 text-white button ms-2"
                          style={{ fontSize: "14px" }}
                        >
                          Search
                        </button>
                      </Col>
                    </Row>
                    <Row className="d-flex justify-content-between align-items-center w-100">
                      <Col xl={6}>
                        <Row
                          className="mt-4 overflow-auto"
                          style={{ height: "40vh", overflowX: "none" }}
                        >
                          {pharmacies.map((pharmacy, index) => (
                            <Col xl={12} className="d-flex" key={index}>
                              <Col xl={3} className="ms-3">
                                <button
                                  className={`border-0 w-100 p-1 rounded-4 button text-white ${
                                    selectedPharmacies.includes(index)
                                      ? "selected"
                                      : ""
                                  }`}
                                  onClick={() => togglesSelect(index)}
                                >
                                  {selectedPharmacies.includes(index)
                                    ? "Selected"
                                    : "Select"}
                                </button>
                              </Col>
                              <Col></Col>
                              <Col xl={8}>
                                <p className="my-0 fw-bold">{pharmacy.name}</p>
                                <p style={{ fontSize: "13px" }}>
                                  {pharmacy.address}
                                </p>
                              </Col>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                      <Col xl={6} className="text-center">
                        {/* <p>Google Map</p> */}
                        <img src="/map.png" alt="" style={{ width: "400px" }} />
                        {/* <Google /> */}
                      </Col>
                    </Row>
                  </Row>
                </div>
              ) : (
                <div className="m-auto obw100 " style={{ width: "95%" }}>
                  <div className="pb-4 border-bottom mx-4 d-flex justify-content-between  align-items-center">
                    <h6>
                      <b style={{ color: "#FAB915", width: "90%" }}>
                        Step - 3 Choose Lab
                      </b>
                    </h6>
                    <p
                      className="my-0 medicationp"
                      role="button"
                      onClick={toggleUpperRowVisibility}
                    >
                      Edit
                    </p>
                  </div>
                  <div className="m-auto obw100 mt-5" style={{ width: "95%" }}>
                    <Row className="shadow p-2 text-center rounded-4 bg-light-subtle d-flex  justify-content-between align-items-center">
                      <Col xl={4}>
                        <button
                          className=" p-2 border-0 rounded-5 w-50 "
                          style={{
                            color: "#FAB915",
                            backgroundColor: "#FEF3D5",
                          }}
                        >
                          Selected
                        </button>
                      </Col>
                      <Col xl={4}>
                        <p className="my-0 fw-bold ">Quest Diagnostics</p>
                      </Col>
                      <Col xl={4}>
                        <p
                          className="my-0 text-muted"
                          style={{ fontSize: "13px" }}
                        >
                          135 Barclay Cir, Ste 103Rochester Hills,MI 48307{" "}
                        </p>
                      </Col>
                    </Row>
                    <p className="text-center mt-4">
                      You can change your selected pharmacy.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div
              className=" m-auto mt-5 shadow py-5 mobw100 "
              style={{ width: "75%", borderRadius: "30px" }}
            >
              <h5 className="ms-2 ms-md-5 pb-4 border-bottom mx-4">
                <b style={{ color: "#FAB915" }}>Step 4 - Choose Lab Test </b>
              </h5>

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
                <b style={{ color: "#FAB915" }}>Step 5 - Agree to Terms</b>
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
                <div className="form-group">
                  <input type="checkbox" id="Terms_check_2" />
                  <label htmlFor="Terms_check_2" style={{ fontSize: "1.1rem" }}>
                    By checking this box, I agree to the{" "}
                    <Link style={{ color: "#007BEC" }}>Terms of use.</Link>
                  </label>
                </div>
                <div className="mt-5 m-auto" style={{ width: "95%" }}>
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
                  <p>
                    When you click the button below, a secure payment form will
                    appear to collect your payment information. After your
                    payment is processed, a Quest Diagnostics lab order will be
                    available in your MK Health account. You will need to print
                    out the lab order and take it with you to the Quest
                    Diagnostics Lab location on the day of testing.
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
                    Next
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
    </>
  );
};

export default OrderformyselfForm;
