import React from 'react'
import { useState } from 'react';

import Title from '../components/Title'
import Categories from '../components/Categories'
import portfolios from '../data/portfolios'
import MenuItems from '../components/MenuItems';




const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];


const Portfolio = () => {

  const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }


  return (
    <div>
            <div className="b-title">
                <Title title={'Portfolios'} span={'portfolios'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
  )
}

export default Portfolio