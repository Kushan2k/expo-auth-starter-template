// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig, {})
export const db = getFirestore(app)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
