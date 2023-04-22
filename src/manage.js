import {
  collection,
  getDocs,
  query,
  addDoc
} from "firebase/firestore";
import { db } from "./firebase";

const itemsCollection = collection(db, 'reservaciones');

export const createItem = (obj) => {
  return addDoc(itemsCollection, obj).id
}

export const getItems = async() => {
  const result = await getDocs(query(itemsCollection))
  console.log(getArrFromCollection)
  return getArrFromCollection(result)
}

const getArrFromCollection = (collection) => {
  return collection.docs.map((doc) => {
    return {...doc.data(), id: doc.id}
  })
}