export const initialState = {
	basket: [],
    user:null,
  };

  const reducer = (state, action) => {
	console.log(action);
	// eslint-disable-next-line default-case
	switch (action.type) {
	  case 'ADD_TO_BASKET':
		return {
		  ...state,
		  basket: [...state.basket, action.item],
		};
		case 'DELETE':
			const index=state.basket.findIndex((basketItem)=>basketItem.id ===action.id);
			let newBasket = [...state.basket];
			if(index>=0){
				newBasket.splice(index,1);

			}
			else{
				console.warn(`can't remove product(id: ${action.id})as it is not in basket!`);
			}
			return {
				...state,
				basket:newBasket,
			};
			case 'SET_USER':
				return {
				  ...state,
				  user: action.user,
				};
		default:
			return state;
	}
}
export default reducer;
