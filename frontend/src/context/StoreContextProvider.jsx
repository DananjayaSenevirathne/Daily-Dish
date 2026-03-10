import { StoreContext } from './StoreContext'
import { food_list } from '../assets/MenuData'

const StoreContextProvider = (props) => {
  const contextValue = {
    food_list,
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider