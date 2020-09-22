import React, { useState } from 'react'
import firebase from 'components/firebase'
import ItemList from 'components/itemlist'
import AddItemForm from 'components/additemform'
import UpdateItem from 'components/updateitem'
import { Container } from 'components/common'
import { Wrapper, sDiv } from './styles'

export const CRUD = () => {
	/*
	We don't know what is going to be edited so we set an
	empty set for the <UpdateItem /> form
	*/
	const initialItemState = [
		{ id: null, name: "", type: "", qty: "", description: "" },
	]
	/*
	Make a state for whether or not edit mode is turned on.
	It will begin as false.
	*/
	const [editing, setEditing] = useState(false)

	/*
	Apply the empty initialItemState from above to a
	currentItem state. currentItem will be used for
	editing individual items. 
	*/
	const [currentItem, setCurrentItem] = useState(initialItemState)
	
	const editItem = (item) => {
		setEditing(true)
		setCurrentItem({
		  id: item.id,
		  name: item.name,
		  type: item.type,
		  qty: item.qty,
		  description: item.description,
		})
	}
  
	const updateItem = ({ currentItem }, updatedItem) => {
		console.log(
			"It sends the item to the updated item function:",
			updatedItem,
			currentItem.id
		);
		//When the Update button is pressed, it turns off editing
		setEditing(false)
		firebase
			.firestore()
			.collection("items")
			.doc(currentItem.id)
			.update(updatedItem);
	};
  
  return (
    <Wrapper as={Container} id="crud">
	  <sDiv>
		  <h2>Firestore CRUD App - Item List</h2>

		  <ItemList editItem={editItem} />
	  </sDiv>

	  <sDiv>
		  {editing ? (
			<UpdateItem setEditing={setEditing} currentItem={currentItem} updateItem={updateItem} />
			) : (
			<AddItemForm />
		   )}
	  </sDiv>
    </Wrapper>
  )
}
