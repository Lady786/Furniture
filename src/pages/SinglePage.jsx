import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
const SinglePage = () => {
    const [product,setProduct] = useState({});
    const {productId} = useParams();

    useEffect(()=>{
        const getData = async()=>{
            try {
                const response = await axios.get(
                    `http://localhost:9001/products/${productId}`
                );
                setProduct(response.data);
                
            } catch (error) {
                console.log("Xatolik yuz berdi" , error);
            }
        };
        getData()
    }, [productId])
  return (
    <div>
       <img src={product.img} alt="" />
       {productId}
    </div>
  )
}

export default SinglePage