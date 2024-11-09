import { Link, useNavigate } from "react-router-dom";

function  NavBar(){

  const navigate = useNavigate();

  function navigateToProductsByCategory(category)
  {
     
       navigate("/ProductByCategory/"+ category);
       window.location.href = "/ProductByCategory/"+ category;
  }
    return( 
    <>
<div class="container">  

<nav   class="fixed-top navbar navbar-expand-sm bg-dark navbar-dark">

  
  <a class="navbar-brand" href="/">		
		<i style={{fontSize:"40px"}} class="bi bi-house-heart"></i>    
  </a>
  
  
  <button 	class="navbar-toggler" type="button" 
					data-bs-toggle="collapse" 
					data-bs-target="#div1">
    <span class="navbar-toggler-icon"></span>
  </button>
    
   
  <div class="collapse navbar-collapse" id="div1">
  
    <ul class="navbar-nav">
      <li class="nav-item">     
        <Link class="nav-link" to="/Admin">Admin</Link>
      </li>
      <li class="nav-item">      
        <Link class="nav-link" to="/AllProducts">Products</Link>
      </li>
      <li class="nav-item">      
        <Link class="nav-link" to="/ShoppingCart">Cart</Link>
      </li>

    
    <li class="nav-item dropdown">
      <a 	class="nav-link dropdown-toggle" href="#" id="navbardrop" 
			data-bs-toggle="dropdown">
       Categories
      </a>
      <div class="dropdown-menu">       
        <a href="javascript:void(0);" class="dropdown-item" onClick={()=> navigateToProductsByCategory('EnglishWillow')}>English Willow Bats </a>
        <a href="javascript:void(0);" class="dropdown-item" onClick={()=> navigateToProductsByCategory('KashmirWillow')}>Kashmir Willow Bats </a>
        <a href="javascript:void(0);" class="dropdown-item" onClick={()=> navigateToProductsByCategory('Gloves')}>Gloves</a>
        <a href="javascript:void(0);" class="dropdown-item" onClick={()=> navigateToProductsByCategory('Helmets')}>Helmets</a> 
        <a href="javascript:void(0);" class="dropdown-item" onClick={()=> navigateToProductsByCategory('Pads')}>Batting pads</a>      
      </div>   
	</li>
	
	</ul>
  </div>  
  
</nav> 

</div>        
    </>);
  };


 export default NavBar; 