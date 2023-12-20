import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBAboieC5cajBTQ4S9gVv1e0suKGaEh1qo',
  authDomain: 'project-management-tool-82c74.firebaseapp.com',
  projectId: 'project-management-tool-82c74',
  storageBucket: 'project-management-tool-82c74.appspot.com',
  messagingSenderId: '387900449950',
  appId: '1:387900449950:web:8b45e13029954c72db478f',
  measurementId: 'G-LXWRHYTXEK',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      fullname: name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const createTeam = async (teamName) => {
  try {
    await addDoc(collection(db, 'teams'), {
      teamName: teamName,
    });
  } catch (err) {
    alert(err);
  }
};
const createWorkspace = async (name) => {
  try {
    await addDoc(collection(db, 'workspaces'), {
      name: name,
    });
  } catch (err) {
    alert(err);
  }
};
const createProject = async (title, projectContent) => {
  try {
    await addDoc(collection(db, 'projects'), {
      title: title,
      projectContent: projectContent,
    });
  } catch (err) {
    alert(err);
  }
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithEmailAndPassword,
  logout,
  createTeam,
  createWorkspace,
  createProject,
};
