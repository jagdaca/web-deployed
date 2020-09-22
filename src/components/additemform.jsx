import React, { useState } from "react"
import firebase from "firebase"
import { Button, Input } from 'components/common'

const AddItemForm = () => {
  //useState() hook captures the value from the input value
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [qty, setQty] = useState("")
  const [description, setDescription] = useState("")

  /* The onSubmit function we takes the 'e'
    or event and submits it to Firebase
    */
  const onSubmit = e => {
    /* 
    preventDefault is important because it
    prevents the whole page from reloading
    */
    e.preventDefault()
    firebase
      .firestore()
      .collection("items")
      .add({
        name,
        type,
        qty,
        description,
      })
      //.then will reset the form to nothing
      .then(() => setName(""), setType(""), setQty(''), setDescription(""))
  }

  return (
  <>
		<h2>Add Item</h2>
		<form onSubmit={onSubmit}>
		  <Input placeholder="Name*"
			value={name}
			name="name"
			/* onChange takes the event and set it to whatever
			is currently in the input. 'e' is equal to the event
			happening. currentTarget.value is what is inputted
			 */
			onChange={e => setName(e.currentTarget.value)}
			type="text"
			required={true}
		  />
		  <Input placeholder="Type*"
			value={type}
			name="type"
			onChange={e => setType(e.currentTarget.value)}
			type="text"
			required={true}
		  />
		  <Input placeholder="Qty*"
			value={qty}
			name="qty"
			onChange={e => setQty(e.currentTarget.value)}
			type="number"
			required={true}
		  />
		  <Input placeholder="Description*"
			value={description}
			name="description"
			onChange={e => setDescription(e.currentTarget.value)}
			type="text"
			required={true}
		  />
		  <Button type="submit">Add Item</Button>
		</form>
	</>
  )
}
export default AddItemForm
