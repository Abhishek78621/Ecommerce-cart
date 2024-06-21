import React from "react";
import Products from "./Products";
import "./home.css"

const Homeproducts = () => {
  return (
    <div className="home">
      <div >
        <Products
          id="1"
          image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674381/Croma%20Assets/Communication/Mobiles/Images/300821_0_onayra.png?tr=w-360"
          title="Apple iphone "
          price= " 124000"
        />
      </div>
      <div >
        <Products
          id="2"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3H8hnP_6n-t1MQ8M1OpzG7lgqJCn7AAgcA&usqp=CAU"
          title="Iphone XR"
          price="12520"
        />
      </div>
      <div >
        <Products
          id="3"
          image="data:image/jpeg;base64,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"
          title="Realme 20 (5g) "
          price="93330"
        />
      </div>
      <div >
        <Products
          id="4"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDl50mCafIWaR73VBh6OEoD-wtl-g3F_M9w&usqp=CAU"
          title="Vivo v29e "
          price="72360"
        />
      </div>
      <div >
        <Products
          id="5"
          image="https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png"
          title="Apple iPhone 14 Pro "
          price="134260"
        />
      </div>
      <div >
        <Products
          id="6"
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPTG3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1661793480599"
          title="Apple iPhone 14 Pro "
          price="232060"
        />
      </div>
      <div > 
        <Products
          id="7"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueB_j6KugYnwp0eVDhZ2V7Q-VgKyabj2ISLfkvdQ37Xyn2ItTLkYIMz3MK0WBhS_Ncwk&usqp=CAU"
          title="Apple iPhone 12 Pro "
          price="113500"
        />
      </div>
      <div >
        <Products
          id="8"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuj69LcxHRdenQqbsp_4XFlLrO2P2Y4XXWJg&usqp=CAU"
          title="Redmi 12 5G"
          price="34060"
        />
      </div>
    </div>
  );
};

export default Homeproducts;