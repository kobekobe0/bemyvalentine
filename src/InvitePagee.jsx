import React, { useEffect, useState } from 'react'
import p1 from './img/pic.jpg'
import p2 from './img/aa.png'
import emailjs from '@emailjs/browser'
import './App.css'
import { useParams } from 'react-router-dom'
import JSConfetti from 'js-confetti'

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
    const jsConfetti = new JSConfetti()
    const [yesClicked, setYesClicked] = useState(false)
    const [yesLoading, setYesLoading] = useState(false)
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
        setYesLoading(true)
        emailjs
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
                console.log('success')
                setYesClicked(true)

                setTimeout(() => {
                    jsConfetti.addConfetti({
                        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
                        emojiSize: 200,
                        confettiNumber: 100,
                    })
                }, 1000)

                alert('Very much thanks! Please, check your email.')
            })
            .catch((err) => {
                console.log(err)
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
        <div className="App" id="App">
            <img
                src={yesClicked ? p2 : p1}
                alt="will you be my valentine?"
                style={{ maxWidth: '90vw', height: '350px' }}
            />
            <div>
                {yesClicked ? null : (
                    <>
                        <button
                            style={btnStyle}
                            onClick={clickYes}
                            disabled={yesLoading}
                        >
                            {yesLoading ? 'loading...' : 'yes'}
                        </button>

                        <button style={noStyle} onClick={noClicked}>
                            no
                        </button>
                    </>
                )}
            </div>
            <configurePage />
        </div>
    )
}

export default InvitePagee
