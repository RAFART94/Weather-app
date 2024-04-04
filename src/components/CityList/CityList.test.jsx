import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    { city: 'Las Palmas de Gran Canaria', country: 'España'},
    { city: 'Buenos Aires', country: 'Argentina'},
    { city: 'Bogotá', country: 'Colombia'},
    { city: 'Ciudad de México', country: 'México'},
]


test('cityList render', async () => {
    // AAA Arrange Act Assert
    const { findAllByRole } = render(<CityList cities={cities} />)

    const items = await findAllByRole('listitem')

    expect(items).toHaveLength(4)
})

test('cityList click on item', async () => {
    // Debemos simular una acción del usuario: click sobre un item
    // Para eso vamos a utilizar una función 'mock'
    const fnClickOnItem= jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole('listitem')

    // Ahora, para simular la acción, vamos a utlizar fireEvent
    // fireEvent es parte de la librería testing-librery/react

    fireEvent.click(items[0])

    // Ahora que tuvo que sucedes?
    //Se debió llamar a la función fnClickOnItem UNA única vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})