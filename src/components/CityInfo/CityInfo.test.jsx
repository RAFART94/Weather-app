import React from "react"
import { render } from '@testing-library/react'
import CityInfo from "./CityInfo" // SUT: Subject under testing (objeto del testeo)
test('cityInfo render', async () => {
    // AAA
    // Arrange 
    // Render: renderiza el componente y retorna una serie de funciones de utilidad
    // En este último caso, utilizamos 'findAllByRole' para 'consultar' a nuestro componente
    // Vamos a analizar su estado en el 'Assert' 
    const { findAllByRole } = render(<CityInfo city='Las Palmas de Gran Canaria' country='España' />)

    // Act
    const city = 'Las Palmas de Gran Canaria'
    const country = 'España'
    // findAllByRole nos va a buscar (en este caso) todos los componentes que sean
    // 'heading' => H1, H2, H3.. etc
    // El resultado es un array de componentes (cityAndCountryComponents)
    const cityAndCountryComponents = await findAllByRole('heading')

    // Assert
    // Cuándo el test va a ser correcto?
    // Definición: Cuando en el primer elemento (heading) se encuentre la ciudad 'Las Palmas de GC'
    // y cuando en el segundo elemento se encuentre el país 'España'

    // el motor de 'Jest' provee esta palabra para el 'Assert' de los test
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
    // Si estas condiciones se cumplen (expect), el test esta 'ok'

})