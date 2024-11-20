import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experties. Our mission is to satisfy your cravings and elevate your dinig experience, our delicious meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return(
            //prev=>prev===item.menu_name?"All":item.menu_name => previous state is eaual item.menu.name it will return all. if it is not give item.menu.name

            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item"> 
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""  /* when click the image it will show click or not*/ /> 
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu