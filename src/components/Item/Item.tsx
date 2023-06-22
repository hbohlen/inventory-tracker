import React from "react";

interface ItemProps {
    item: Item;
}


export const Item: React.FC<ItemProps> = ({item}) => {
    return(
        <li>
            {item.name}
        </li>
    );



};

