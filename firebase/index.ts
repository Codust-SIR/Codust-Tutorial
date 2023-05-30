import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc ,onSnapshot} from "firebase/firestore";

// Your web app's Firebase configuration
// ...

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyDNTDxwjpCnQmULUxeHoIhzQYa6Cwhzlvs",
  authDomain: "codust-tutorial.firebaseapp.com",
  projectId: "codust-tutorial",
  storageBucket: "codust-tutorial.appspot.com",
  messagingSenderId: "989795830765",
  appId: "1:989795830765:web:e1fccbcc9d6fd28e6b75e4",
  measurementId: "G-FX9FGYJVLC",
};

const app = initializeApp(firebaseConfig);
function isBrowser() {
  return typeof window !== "undefined";
}

if (isBrowser()) {
  // Run this code only on the client-side
  const analytics = getAnalytics(app);
  // Initialize and use Firebase Analytics
}
// Get the Auth instance
const auth = getAuth(app);
const db = getFirestore();

// Collections
const colRef = collection(db, "assignments");

// Handlers
const gitHubProvider = new GithubAuthProvider();

// signInStudentHandler
/**
 * This will sign In the students
 * @returns void
 */
const signInStudentHandler = async (): Promise<ReloadUserInfo> => {
  try {
    const result = await signInWithPopup(auth, gitHubProvider);
    const user: StudentType = result.user as StudentType;
    if (user) {
      const reloadUserInfo = user.reloadUserInfo as ReloadUserInfo;
      localStorage.setItem("student", JSON.stringify(reloadUserInfo));
      return reloadUserInfo;
    }
  } catch (error) {
    console.error("Sign-in error:", error);
  }
  return null;
};


// Get collections data
const getAllStudents = async (uid: string) => {
  return new Promise<any[]>((resolve, reject) => {
    const assignments: any[] = [];

    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      assignments.length = 0; // Clear the assignments array

      snapshot.docs
        .filter((doc) => doc.data().uid === uid)
        .forEach((doc) => assignments.push(doc.data()));

      console.log(assignments);

      resolve(assignments); // Resolve the promise with the assignments array
    });

    // Unsubscribe from the snapshot listener when needed
    // For example, if you want to stop listening after a certain condition is met
    // unsubscribe();
  });
};
const addAssignment = async (assignment: Assignment, uid: string) => {
  try {
    const assignmentRef = collection(db, "assignments");
    const newAssignment = { ...assignment, uid };
    await addDoc(assignmentRef, newAssignment);
    console.log("Assignment added successfully");
  } catch (error) {
    console.error("Error adding assignment:", error);
  }
};

// Types
type StudentType = {
  reloadUserInfo?: ReloadUserInfo;
};

type ReloadUserInfo = {
  createdAt: string;
  displayName: string;
  localId: string;
  photoUrl: string;
  providerUserInfo:{
    email:string
  }
};

type Assignment = {
  part: string;
  usedHours: number;
  repository: string;
  comment: string;
};

// Exports
export default app;
export {
  app,
  signInStudentHandler,
  getAllStudents,
  StudentType,
  ReloadUserInfo,
  Assignment,
  addAssignment,
};
