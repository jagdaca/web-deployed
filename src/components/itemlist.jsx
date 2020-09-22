import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { DeleteButton, UpdateButton } from 'components/common'
import "./itemlist.css";

const useItems = () => {
  const [items, setItems] = useState([]); //useState() hook, sets initial state to an empty array
  useEffect(() => {
	//added variable unsubscribe
    const unsubscribe = firebase
      .firestore() //access firestore
      .collection("items") //access "items" collection
      .onSnapshot(snapshot => {
        //You can "listen" to a document with the onSnapshot() method.
        const listItems = snapshot.docs.map(doc => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data() //spread operator merges data to id.
        }));
        setItems(listItems); //items is equal to listItems
      });
	  //called the unsubscribe--closing connection to Firestore.
	  return () => unsubscribe()
  }, []);
  return items;
};

const deleteItem = (id) => {
    firebase
      .firestore()
      .collection("items")
      .doc(id)
      .delete()
}


const ItemList = ({ editItem }) => {
  const listItem = useItems();
  return (
    <table className="tg">
      <tbody>
        <tr>
          <th className="tg-ycr8">Name</th>
          <th className="tg-ycr8">Type</th>
          <th className="tg-i81m">Qty</th>
          <th className="tg-a02x">Description</th>
		  <th className="tg-6hdc">Actions</th>
        </tr>
      </tbody>
      {listItem ? (listItem.map(item => (
        <tbody key={item.id}>
          <tr>
            <td className="tg-ycr8">{item.name}</td>
            <td className="tg-ycr8">{item.type}</td>
            <td className="tg-i81m">{item.qty}</td>
            <td className="tg-a02x">{item.description}</td>
			
			<td className="tg-6hdc">
				<UpdateButton onClick={() => editItem(item)}>Update</UpdateButton>
				<DeleteButton onClick={() => deleteItem(item.id)}>Delete</DeleteButton>
			</td>
          </tr>
        </tbody>
      ))) : (        <tbody>
          <tr>
            <td className="tg-ycr8">Hello</td>
            <td className="tg-ycr8">empty</td>
            <td className="tg-i81m">empty</td>
            <td className="tg-a02x">empty</td>
			<td className="tg-6hdc">empty</td>
          </tr>
        </tbody>)}
    </table>
  );
};

export default ItemList;
