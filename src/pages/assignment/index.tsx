import {
  Assignment,
  ReloadUserInfo,
  StudentType,
  addAssignment,
  getAllStudents,
  signInStudentHandler,
} from "@site/firebase";
import Layout from "@theme/Layout";
import React, { useState, useEffect } from "react";

const AssignmentPage = () => {
  const [student, setStudent] = useState<ReloadUserInfo>(null);
  const [allAssignments, setAllAssignments] = useState([]);
  const [displayAssignmentForm, setDisplayAssignmentForm] = useState(false);
  const [submited, setSubmited] = useState(false);
  const handlersetSubmited = () => {
    setSubmited((p) => !p);
  };
  const displayAssignmentFormHandler = () => {
    setDisplayAssignmentForm((p) => !p);
    setSubmited((p) => !p);
  };

  useEffect(() => {
    const storedStudent = localStorage.getItem("student");
    if (storedStudent) {
      const parsedStudent = JSON.parse(storedStudent);
      setStudent(parsedStudent);
    }
  }, []);

  useEffect(() => {
    const gaa = async () => {
      if (student) setAllAssignments(await getAllStudents(student.localId));
    };
    gaa();

    return () => {
      null;
    };
  }, [student, submited]);

  return (
    <Layout  title={`Assignment`}
      description="Assignment Page">
      <div
        style={{
          display: "grid",
          placeItems: "center",
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // textAlign: "center",
            width: "90%",
          }}
        >
          <h1>Assignment Page</h1>
          <div>
            {student ? (
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                }}
              >
                <img
                  src={student.photoUrl}
                  alt={student.displayName}
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                />
                <div>
                  <h5>{student.displayName}</h5>
                  <p>{student.providerUserInfo[0].email}</p>
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={async () => {
                    setStudent(await signInStudentHandler());
                  }}
                >
                  SignIn/SignUp
                </button>
              </>
            )}
          </div>
        </div>
        {student && (
          <>
            <h1>Hello There {student.displayName} !</h1>
            {displayAssignmentForm ? (
              <AssignmentForm
                displayAssignmentFormHandler={displayAssignmentFormHandler}
                uid={student.localId}
              />
            ) : (
              <Button
                displayAssignmentFormHandler={displayAssignmentFormHandler}
              >
                Create Terminal Exercise
              </Button>
            )}
            {allAssignments.length > 0 && (
              <Table allAssignments={allAssignments} />
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default AssignmentPage;
const Button = ({ children, displayAssignmentFormHandler }) => {
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "15px",
  });

  const hoverStyle = {
    backgroundColor: "#45a049",
  };

  const handleMouseOver = () => {
    setButtonStyle((prevStyle) => {
      return { ...prevStyle, ...hoverStyle };
    });
  };

  return (
    <button
      style={buttonStyle}
      onClick={displayAssignmentFormHandler}
      onMouseOver={handleMouseOver}
    >
      {children}
    </button>
  );
};

const Table = ({ allAssignments }: { allAssignments: Assignment[] }) => {
  const totalHours = allAssignments.reduce(
    (sum, assignment) => sum + assignment.usedHours,
    0
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Part</th>
          <th>Hours</th>
          <th>GitHub</th>
          <th>Comment</th>
          <th>Example Solutions</th>
        </tr>
      </thead>
      <tbody>
        {allAssignments.map((item, index) => (
          <tr key={index}>
            <td>{item.part}</td>
            <td>{item.usedHours}</td>
            <td>
              <a
                href={item.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.repository}
              </a>
            </td>
            <td>{item.comment}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={1}>Total</td>
          <td>{totalHours}</td>
          <td colSpan={3}></td>
        </tr>
      </tbody>
    </table>
  );
};

const AssignmentForm: React.FC<{
  displayAssignmentFormHandler: () => void;
  uid: string;
}> = ({ displayAssignmentFormHandler, uid }) => {
  const [repository, setRepository] = useState("");
  const [comment, setComment] = useState("");

  const [hours, setHours] = useState<number>(0); // Set an initial value for hours

  const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedValue = Number(value);

    if (!isNaN(parsedValue)) {
      setHours(parsedValue);
    } else {
      setHours(0);
    }
  };

  const handleRepositoryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepository(event.target.value);
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform submission logic here
    // You can access the form values using the 'hours', 'repository', 'comment', and 'exercises' state
    addAssignment(
      {
        comment,
        part: "React",
        repository,
        usedHours: hours,
      },
      uid
    );
    // Reset the form fields
    setHours(0);
    setRepository("");
    setComment("");
    displayAssignmentFormHandler();
  };

  return (
    <form
      style={{
        position: "fixed",
        zIndex: 1,
        backgroundColor: "lightgreen",
        top: "10%",
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="hours">Used hours:</label>
        <input
          type="number"
          id="hours"
          value={hours}
          onChange={handleHoursChange}
          style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label htmlFor="repository">GitHub repository:</label>
        <input
          type="text"
          id="repository"
          value={repository}
          onChange={handleRepositoryChange}
          style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
        />
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Submit
      </button>
    </form>
  );
};
