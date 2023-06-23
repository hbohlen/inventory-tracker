import React from 'react';



export const AddItemForm: React.FC = () => {
    return(
        <form>
            <label>Item Name:
                <input type="text" name="name"  />
            </label>
            <br />
            <label>Item Quantity:
                <input type="number" name="quantity" />
            </label>
            <br />
            <button type="submit">Add Item</button>
        </form>
    )


}