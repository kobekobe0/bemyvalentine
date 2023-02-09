import React, { useEffect, useState } from 'react'
import p1 from './img/pic.jpg'
import emailjs from '@emailjs/browser'
import './App.css'
import { useParams } from 'react-router-dom'

const btnStyle = {
    paddingLeft: '2em',
    paddingRight: '2em',
    paddingTop: '1em',
    paddingBottom: '1em',
    marginTop: '2em',
    marginLeft: '1em',
    marginRight: '1em',
    width: '100px',
    fontWeight: 'bold',
}

const InvitePagee = () => {
    const [noStyle, setNoStyle] = useState({
        paddingLeft: '2em',
        paddingRight: '2em',
        paddingTop: '1em',
        paddingBottom: '1em',
        marginTop: '2em',
        marginLeft: '1em',
        marginRight: '1em',
        width: '100px',
        fontWeight: 'bold',
    })

    const { params } = useParams()
    useEffect(() => {
        console.log(params.split('++'))
    }, [])

    const clickYes = async () => {
        const paramsArr = params.split('++')
        const success = await emailjs
            .send(
                'service_5y2hgfi',
                'template_nzikew2',
                {
                    from_name: paramsArr[1],
                    to_name: paramsArr[0],
                    to_email: paramsArr[2],
                },
                'NBwXUC49nvfcrkewJ'
            )
            .then((res) => {
                alert('Very much thanks! Please, check your email.')
            })
            .catch((err) => {
                alert('something went wrong')
            })
    }

    const noClicked = () => {
        const x = Math.floor(Math.random() * 400) + 1
        const y = Math.floor(Math.random() * 500) + 1

        setNoStyle({
            paddingLeft: '2em',
            paddingRight: '2em',
            paddingTop: '1em',
            paddingBottom: '1em',
            marginTop: '2em',
            marginLeft: '1em',
            marginRight: '1em',
            width: '100px',
            fontWeight: 'bold',
            left: `${x}px`,
            top: `${y}px`,
            position: 'absolute',
        })
    }
    return (
        <div className="App">
            <img
                src={p1}
                alt="will you be my valentine?"
                style={{ maxWidth: '90vw', height: '350px' }}
            />
            <div>
                <button style={btnStyle} onClick={clickYes}>
                    yes
                </button>
                <button style={noStyle} onClick={noClicked}>
                    no
                </button>
            </div>
            <configurePage />
        </div>
    )
}

export default InvitePagee
