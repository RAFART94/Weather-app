import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'

test('Weather render', async () => {
    // AAA
    const { findByRole } = render(<Weather temperature={10} />)

    const temp = await findByRole('heading')

    expect(temp).toHaveTextContent('10')
})
