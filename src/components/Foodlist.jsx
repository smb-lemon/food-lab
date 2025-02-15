import React from 'react'
import Foodcard from './Foodcard';

const Foodlist = ({recipes}) => {
    const foodInfo = recipes.map((recipe)=>{
        const {foodId, foodImage} = recipe;
        return {id:foodId, image: foodImage}
    })
  return (
    <>
        {foodInfo.map((item)=>{
            return <Foodcard key={item.id} item ={item} {...item}/>
        })}
    </>
  )
}

export default Foodlist