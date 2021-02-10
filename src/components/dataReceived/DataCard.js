import React, {useState, useEffect} from 'react'
import Spinner from '../ui/Spinner'
import DataItems from './DataItems'

const DataCard = ({ isLoading, data }) => {
    return (
        isLoading ? (<Spinner />) : (<div>
            {
                data.map((datum) => (
                    <DataItems datum= {datum} key={datum.id}></DataItems>
                ))}
        </div>)
    )
}

export default DataCard
