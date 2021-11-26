import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FooterContent from './FooterContent'


const Footer = () => {

    const [dataFooter, setdataFooter] = useState()

    useEffect(() => {
        const getData = async () => {
            const dataRequest = await axios.get('http://ongapi.alkemy.org/api/organization'),
                dataSuccess = await dataRequest.data.data;
            setdataFooter(dataSuccess)
        }
        getData()
    }, [])

    return (
        <>
            {
                dataFooter
                    ? <FooterContent dataFooter={dataFooter}/>
                    : <p>Cargando</p>
            }
        </>
    )
}

export default Footer
