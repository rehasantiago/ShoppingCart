import React from 'react';
import BasketCart from './BasketCart';
import Categories from './Categories';

export const SideBar = ()=>{
    return(
        <div>
            <BasketCart/>
            <Categories/>
        </div>
    );
};