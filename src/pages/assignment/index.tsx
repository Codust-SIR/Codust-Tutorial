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
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";

import styles from "../index.module.css";
import { TextField } from "@mui/material";

const AssignmentPage = () => {
  const [student, setStudent] = useState<ReloadUserInfo>(null);
  const [allAssignments, setAllAssignments] = useState([]);
  const [displayAssignmentForm, setDisplayAssignmentForm] = useState(false);
  const [loadingAssigments, setLoadingAssigments] = useState(true);
  const [submited, setSubmited] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(isMobileDevice);
    };

    checkIsMobile();

    // Optional: Add event listener to recheck when the window is resized
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  const signoutStudentHandler = () => {
    setStudent(null);
    localStorage.removeItem("student");
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
    setLoadingAssigments(true);

    const gaa = async () => {
      if (student) {
        setAllAssignments(await getAllStudents(student.localId));
        setLoadingAssigments(false);
      }
    };
    gaa();

    return () => {
      null;
    };
  }, [student, submited]);

  return (
    <Layout title={`Assignment`} description="Assignment Page">
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
          <Typography variant="h5" fontWeight={700}>
            Assignments
          </Typography>
          <div>
            {student ? (
              <>
                <Tooltip title="Account settings">
                  <Box
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      display: "flex",
                      gap: 1,
                      p: 0.8,
                      borderRadius: 5,
                      "&:hover": {
                        borderRadius: 5,
                        cursor: "pointer",
                        bgcolor: (theme) => theme.palette.action.focus,
                      },
                      bgcolor: (theme) => theme.palette.action.hover,
                    }}
                  >
                    <Avatar src={student.photoUrl}>
                      {student.displayName && student.displayName[0]}
                    </Avatar>
                    {!isMobile && (
                      <Box display={"flex"} flexDirection={"column"}>
                        <Typography variant="subtitle1" fontWeight={700}>
                          {student.displayName && student.displayName}
                        </Typography>
                        <Typography
                          sx={{
                            color: (theme) => theme.palette.text.secondary,
                          }}
                          variant="subtitle2"
                        >
                          {student.providerUserInfo && student.providerUserInfo[0].email}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar src={student.photoUrl && student.photoUrl}>
                      {student.displayName && student.displayName[0]}
                    </Avatar>
                    <Typography variant="body1">
                      {student.displayName && student.displayName}
                    </Typography>
                  </MenuItem>
                  <Divider />

                  <MenuItem
                    onClick={() => {
                      handleClose();
                      signoutStudentHandler();
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  color="success"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                  }}
                  onClick={() => {
                    const loadUser = async () => {
                      const user = await signInStudentHandler();
                      setStudent(user);
                    };
                    loadUser();
                  }}
                >
                  SignIn/SignUp
                </Button>
              </>
            )}
          </div>
        </div>
        {student ? (
          <>
            <Typography variant="h6">
              Welcome back, {student.displayName}!
            </Typography>
            {displayAssignmentForm ? (
              <AssignmentForm
                displayAssignmentFormHandler={displayAssignmentFormHandler}
                uid={student.localId}
              />
            ) : (
              <Button
                color="success"
                variant="contained"
                sx={{
                  textTransform: "none",
                }}
                onClick={displayAssignmentFormHandler}
              >
                Add assignment to submit
              </Button>
            )}
            {!loadingAssigments ? (
              allAssignments.length > 0 ? (
                <Table allAssignments={allAssignments} />
              ) : (
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    boxShadow: "0px 0px 10px #cccf",
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 15,
                  }}
                >
                  <Typography variant="h6">
                    😔 No assignments to show
                  </Typography>
                  <Typography variant="body1">
                    Add assignments to submit 😀
                  </Typography>
                </div>
              )
            ) : (
              <Spinner />
            )}
          </>
        ) : (
          <>
            <h1>Hello There !</h1>
            <p>Please sign in or sign up to get started.</p>
          </>
        )}
      </div>
    </Layout>
  );
};

export default AssignmentPage;

const Table = ({ allAssignments }: { allAssignments: Assignment[] }) => {
  const totalHours = allAssignments.reduce(
    (sum, assignment) => sum + assignment.usedHours,
    0
  );

  const totalScore = allAssignments.reduce(
    (sum, assignment) => sum + (assignment.score ? assignment.score : 0),
    0
  );
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(isMobileDevice);
    };

    checkIsMobile();

    // Optional: Add event listener to recheck when the window is resized
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <table
      style={{
        borderCollapse: "collapse",
        padding: 10,
      }}
    >
      <thead>
        <tr>
          <th>
            N<sup>0</sup>
          </th>
          <th>Assignment Name</th>
          <th>Hours</th>
          <th>GitHub</th>
          <th>Comment</th>
          <th>Score</th>
          <th>Example Solutions</th>
        </tr>
      </thead>
      <tbody>
        {allAssignments.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>

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
            <td>{item.score ? item.score : "Not Marked Yet"}</td>
            <td>
              {" "}
              <a href={item.solution} target="_blank" rel="noopener noreferrer">
                {item.solution}
              </a>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{totalHours}</td>
          <td colSpan={2}></td>
          <td>{totalScore}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

const AssignmentForm: React.FC<{
  displayAssignmentFormHandler: () => void;
  uid: string;
}> = ({ displayAssignmentFormHandler, uid }) => {
  const [assignmentName, setAssignmentName] = useState("");
  const [repository, setRepository] = useState("");
  const [comment, setComment] = useState("");

  const [hours, setHours] = useState<number>(); // Set an initial value for hours

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
    if (comment.split("").length < 1) {
      alert("Comment cannot be empty");
      return;
    }
    if (hours < 1) {
      alert("Hours cannot be less than 1");
      return;
    }
    if (repository.split(" ").length < 1) {
      alert("Repository cannot be empty");
      return;
    }
    if (repository.split(" ").length > 1) {
      alert("Repository cannot contain spaces");
      return;
    }
    // if repository is not a valid url,
    // then alert the user and return
    if (!repository.includes("github.com")) {
      alert("Repository must be a valid github url");
      return;
    }
    // if repository is not a valid url,
    // then alert the user and return
    if (!repository.includes("https://")) {
      alert("Repository must be a valid github url");
      return;
    }
    addAssignment(
      {
        comment,
        part: assignmentName,
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
        zIndex: 10,
        boxShadow: "0px 0px 10px #ccc",
        top: "10%",
        padding: 10,
        borderRadius: 10,
        backdropFilter: "blur(40px)",
      }}
      onSubmit={handleSubmit}
    >
      {/* Close form */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <h2>Add Assignment</h2>
        <p>
          <span onClick={displayAssignmentFormHandler}>
            <svg
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "50%",
                right: "0%",
                // padding: "1px",
                transform: "translate(0%, -50%)",
                boxShadow: "0px 0px 10px #ccc",
                borderRadius: "50%",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </p>
      </div>
      <div>
        <label htmlFor="hours">Used hours:</label>
        <TextField
          variant="outlined"
          color="success"
          size="small"
          type="number"
          id="hours"
          value={hours}
          onChange={handleHoursChange}
          style={{
            width: "100%",
            padding: "5px",
            marginBottom: "10px",
            borderRadius: 10,
          }}
        />
      </div>
      <div>
        <label htmlFor="repository">Assignment Name:</label>
        <TextField
          variant="outlined"
          color="success"
          size="small"
          type="text"
          id="assignmentName"
          value={assignmentName}
          onChange={(e) => setAssignmentName(e.target.value)}
          style={{
            width: "100%",
            padding: "5px",
            marginBottom: "10px",
            borderRadius: 10,
          }}
        />
      </div>
      <div>
        <label htmlFor="repository">GitHub repository:</label>
        <TextField
          variant="outlined"
          color="success"
          size="small"
          type="text"
          id="repository"
          value={repository}
          onChange={handleRepositoryChange}
          style={{
            width: "100%",
            padding: "5px",
            marginBottom: "10px",
            borderRadius: 10,
          }}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <TextField
          variant="outlined"
          color="success"
          size="small"
          multiline
          maxRows={3}
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          style={{
            width: "100%",
            padding: "5px",
            marginBottom: "10px",
            borderRadius: 10,
            maxWidth: "500px",
            maxHeight: "200px",
          }}
        />
      </div>

      <Button
        color="success"
        variant="contained"
        sx={{
          textTransform: "none",
        }}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>
    <div className={styles.rect3}></div>
    <div className={styles.rect4}></div>
    <div className={styles.rect5}></div>
    <div className={styles.rect6}></div>
    <div className={styles.rect7}></div>
    <div className={styles.rect8}></div>
    <div className={styles.rect9}></div>
  </div>
);
