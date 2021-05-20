import React, { useState } from 'react'

const initialState = {
  color: 'var(--main-color-peach)',
  changeColor: () => {},
  mainColor: 'var(--main-color-peach)',
  changeMainColor: () => {}
}

export const topnavColorContext = React.createContext(initialState)

const Provider = props => {
  const [mainColor, setMainColor] = useState('var(--main-color-peach)');
  const [color, setColor] = useState('var(--main-color-peach)');

  return (
    <topnavColorContext.Provider value={{
      color,
      changeColor: (newColor) => {
        setColor(newColor)
      },
      mainColor,
      changeMainColor: (newColor) => {
        setMainColor(newColor)
      }
    }}>
      {props.children}
    </topnavColorContext.Provider>
  )
}

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
)