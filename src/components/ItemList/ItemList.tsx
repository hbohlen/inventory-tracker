import React from "react";

import {Item} from "../Item/Item";


interface ItemListProps {
    items: Array<Item>;
}


export const ItemList: React.FC<ItemListProps> = ({items}) => {
    return(
        <ul>
            {items.map((item) => (
                <Item key={item.id} item={item}/>
            ))}
        </ul>
    )

};