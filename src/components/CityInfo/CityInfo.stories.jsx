import React from "react"
import 'typeface-roboto'
import CityInfo from "./CityInfo"

export default {
    title: 'CityInfo',
    components: CityInfo
}

export const CityExample = () => (<CityInfo city={'Las Palmas de Gran Canaria'} country={'España'}></CityInfo>)