import React from 'react'
import logo from "../logo.png"
const Header = () => {
  return (
   <div style={{borderBottom:'1px solid #dfecec', display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
        <img style={{width:'250px' , height:'50px'}} src={logo} />
        <div style={{display:'flex' , flex:'row', alignContent:'center',justifyContent:'center',alignItems:'center'}}>
          <p style={{color:'gray',marginRight:'20px'}}>ENGLISH</p>
          <input type='search' style={{height:'30px',borderRadius:'5px', border:'1px solid gray',backgroundColor:'#edeff2'}}/>
        </div>
    </div>
  )
}

export default Header