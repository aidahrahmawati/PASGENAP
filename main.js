import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNYqYJVYPTZRIK7pKZ4shbQ4igjseQpLM",
  authDomain: "insan-cemerlang-d724d.firebaseapp.com",
  projectId: "insan-cemerlang-d724d",
  storageBucket: "insan-cemerlang-d724d.appspot.com",
  messagingSenderId: "630693962922",
  appId: "1:630693962922:web:a9447f760b858bcf781cd3"
};