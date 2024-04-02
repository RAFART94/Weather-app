import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { TiWeatherCloudy,
  TiWeatherWindyCloudy,
  TiWeatherWindy,
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherSnow,
  TiWeatherShower,
  TiWeatherNight,
  TiWeatherDownpour,
  TiWeatherPartlySunny    } from 'react-icons/ti'
import { IconContext } from 'react-icons'

const stateByName = {
  cloudy: TiWeatherCloudy,
  windycloudy: TiWeatherWindyCloudy,
  windy: TiWeatherWindy,
  sunny: TiWeatherSunny,
  stormy: TiWeatherStormy,
  snow: TiWeatherSnow,
  shower: TiWeatherShower,
  night: TiWeatherNight,
  downpour: TiWeatherDownpour,
  partlysunny: TiWeatherPartlySunny
}

const renderState = state => {
  const IconState = stateByName[state]

  return <IconState />
}

const Weather = ({temperature, state}) => {
  return (
    <div>
      <IconContext.Provider value={{ size:'5em' }}>
          { renderState(state) }
      </IconContext.Provider>
      <Typography display='inline' variant='h4'>{temperature}</Typography>
    </div>
  )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired
}

export default Weather