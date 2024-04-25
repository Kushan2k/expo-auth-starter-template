// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
  apiKey: "AIzaSyBw9sV9WcekHkHN6-Q766txy3XgAY5rNgk",
  authDomain: "foriegn-traveller.firebaseapp.com",
  projectId: "foriegn-traveller",
  storageBucket: "foriegn-traveller.appspot.com",
  messagingSenderId: "327626631820",
  appId: "1:327626631820:web:855a6d3163de362d11a9a9",
  measurementId: "G-PF0MD11VV0",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig, {})
export const db = getFirestore(app)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
