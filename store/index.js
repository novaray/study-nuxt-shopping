import {fetchCartItems} from "~/api";

//constants
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

export const state = () => ({
  cartItems: [],
});

export const mutations = {
  addCartItem (state, cartItem) {
    state.cartItems.push({
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    });
  },
  setCartItems (state, cartItems) {
    state.cartItems = cartItems;
  }
};

export const actions = {
  async [FETCH_CART_ITEM]({commit}) {
    const { data } = await fetchCartItems();
    commit('setCartItems', data.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    })));
  },
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch(FETCH_CART_ITEMS);
  //   // const { data } = await fetchCartItems();
  //   // storeContext.commit('setCartItems', data.map(item => ({
  //   //   ...item,
  //   //   imageUrl: `${item.imageUrl}?random=${Math.random()}`
  //   // })));
  // }
}
