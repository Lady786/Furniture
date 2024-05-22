import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get('https://test-ecommerce-gamma.vercel.app/products ')
      .then(response => {
        setProducts(response.data)
      }).catch((error) => {
        console.log("Error!", error);
      })
  }, [])
  return (
    <div className=" w-[1200px] flex flex-wrap flex-row items-center justify-between gap-[40px]  m-auto mt-[30px] ">
      {
        products.map(p => <div key={p.id}>
          <Link to={`/products/${p.id}`} className="card bg-[#F4F5F7] border ">
            <img src={p.img} alt={p.title} />
            <p className="font-bold ml-[5px] mt-[10px] text-[20px]">{p.title}</p>
            <p className="ml-[5px]">{p.subtitle}</p>
          </Link>

        </div>)
      }
    </div>
  )
}

export default Products