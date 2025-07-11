import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast()

export const useCartStore = defineStore('cart', {
    state: () => ({ 
        products: [
            {
                id: 1,
                name: 'Iphone 14',
                price: 800,
                image: 'https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_640.jpg'
            },
            {
                id: 2,
                name: 'Samsung s20',
                price: 1200,
                image: 'https://cdn.pixabay.com/photo/2017/08/07/22/21/technology-2608530_1280.jpg'
            },
            {
                id: 3,
                name: 'Tv LG',
                price: 300,
                image: 'https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876_640.jpg'
            },
            {
                id: 4,
                name: 'Oppo 14',
                price: 500,
                image: 'https://cdn.pixabay.com/photo/2019/08/22/12/09/coffee-4423348_1280.jpg'
            },
            {
                id: 5,
                name: 'PC X5',
                price: 1700,
                image: 'https://cdn.pixabay.com/photo/2017/06/30/04/10/pc-2457169_640.jpg'
            }
        ],
        cartItems: []
    }),
    getters: {
        countCartItems(state) {
            return state.cartItems.length;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if(index !== -1) {
                this.cartItems[index].quantity += 1;
                toast.success("Your item has been updated", {
                    timeout: 2000
                })
            }else {
                item.quantity = 1
                this.cartItems.push(item)
                toast.success("Your item has been saved", {
                    timeout: 2000
                })
            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id)
                }
                toast.success("Your item has been updated", {
                    timeout: 2000
                })
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id != item.id)
            toast.success("Your item has been removed", {
                timeout: 2000
            })
        }
    }
})