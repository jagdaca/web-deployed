import React, { useState, useEffect } from "react";
import { Button, Input } from 'components/common'
/*
So far we have passed the setEditing prop to index.js.
Now we are going to pass the currentItem prop.
*/
const UpdateItem = ({ setEditing, currentItem, updateItem }) => {
  /*
  Sets the state of the item to the current item
  */
  const [item, setItem] = useState(currentItem);

  /*
  Side effect is that without UseEffect if you start editing one item, 
  then try to switch to another item, nothing will happen.
  The component is already open, and although the state 
  on the parent has changed, it's not registered down to the props.
  We want to let the updateItem form component know the props have changed.
  With the Effect Hook, we create a callback function that updates the item 
  state with the new prop thats being sent through.
  */
  useEffect(() => {
    setItem(currentItem);
    //Added console.log to show what the current item is and that it has passed
    console.log("useEffect passes the currentItem: ", currentItem);
  }, [currentItem]);

  const onSubmit = e => {
    e.preventDefault();
    //When you click the submit button you can see what it being passed.
    console.log("onSubmit passes the id and items", { item });
	updateItem({ currentItem }, item);
  };
  
   const onChange = e => {
    const { name, value } = e.target
		setItem({ ...item, [name]: value })
	};

  return (
    <>
      <h2>Update Item</h2>
      <form onSubmit={onSubmit}>
        <Input type="text" name="name" value={item.name} onChange={onChange} />
        <Input type="text" name="type" value={item.type} onChange={onChange} />
        <Input type="number" name="qty" value={item.qty} onChange={onChange} />
        <Input
          type="text"
          name="description"
          value={item.description}
          onChange={onChange}
        />
        <Button>Update</Button>
        <Button secondary onClick={() => setEditing(false)}>Cancel</Button>
      </form>
    </>
  );
};
export default UpdateItem;