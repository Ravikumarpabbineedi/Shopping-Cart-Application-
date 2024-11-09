import { Link, useParams } from "react-router-dom";

function  OrderConfirmed(){


    const {id} = useParams();


    return <div align="center">
      <h3>Order Confirmation</h3>
      <hr/>
      <h1>Your Order Id: {id} </h1>
      <img src="/Images/ThankYou.png" border="1" width="50%" height="250" alt="Alternate text" />               

      <hr/>  
      <Link to="/">Visit home to continue shopping</Link>



    </div>;
  };


 export default OrderConfirmed; 