import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    items: [],
    cartProduct: [],
    status:'idle',
    error: null
}

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    try{
        const response = await fetch("https://dummyjson.com/products")
        if(!response.ok){
            throw new Error("Network response was not ok!")
        }
        const data = await response.json()
        return data.products
    }catch(error){
        throw new Error(`fetch error ${error.message}`)
    }
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        addCartItem: (state, action) => {
            let doesItemExist = false
            state.cartProduct.forEach((item) => {
                if(item.id === action.payload.id){
                    doesItemExist=true;
                }
            })
        
            if(doesItemExist){
               const newArr=[]
               state.cartProduct.forEach((item) => {
                    if(item.id === action.payload.id){
                        newArr.push({...item, quantity: item.quantity+1})
                    }
                    else newArr.push(item);
               })
               while(state.cartProduct.length){
                    state.cartProduct.pop()
               }
               state.cartProduct.push(...newArr)
            }
            else{
                state.cartProduct.push(action.payload)
            }
        },
        incrementQuantity: (state, action) => {
            const newArr=[]
            state.cartProduct.forEach((item) => {
                if(item.id === action.payload){
                    newArr.push({...item, quantity:item.quantity+1})
                }
                else newArr.push(item)
            })
            while(state.cartProduct.length){
                state.cartProduct.pop()
            }
            state.cartProduct.push(...newArr)
        },
        decrementQuantity: (state, action) => {
            const newArr = []
            state.cartProduct.forEach((item) => {
                if(item.id === action.payload){
                    if(item.quantity>1){
                        newArr.push({...item, quantity: item.quantity-1})
                    }
                }
                else newArr.push(item)
            })
            while(state.cartProduct.length){
                state.cartProduct.pop()
            }
            state.cartProduct.push(...newArr)
        },
        removeCartItem: (state, action) => {
            const newArr = state.cartProduct.filter(item => item.id !== action.payload)
            while(state.cartProduct.length){
                state.cartProduct.pop();
            }
            state.cartProduct.push(...newArr)
        }

    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchData.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.status="succeded"
            state.items=action.payload
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.status="failed"
            state.error=action.error.message
        })

    }

})

export const {
    addCartItem, 
    incrementQuantity, 
    decrementQuantity,
    removeCartItem
} = productSlice.actions


export default productSlice.reducer

