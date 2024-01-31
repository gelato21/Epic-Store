import React, { useEffect} from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/productSlice";
import Loading from "./Loading";



export default function ProductLayout(){
    const dispatch = useDispatch()
    const product = useSelector( state => state.product)
    const searchTerm = useSelector(state => state.product.searchTerm)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
        
    if(product.status==='loading'){
        return <Loading/>;
    }
    if (product.status === 'failed') {
        return <h1>Error: {data.error}</h1>;
    }
    
    const displayItems=product.items.map(item => {
        if(item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm) || item.brand.toLowerCase().includes(searchTerm)){
          return  <Card 
                key={item.id}
                item={item}
            />
        }

    }

    )
    
    

    
    return(
        <div className="display-product">
            {    displayItems   }
        </div>
        
    )

}
