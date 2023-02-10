import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import p1 from './img/33528736e35debe64cffaf15d1696445.jpg'
function ConfigurePage() {
    const [done, setDone] = useState(false)
    const [name, setName] = useState('')
    const [otherName, setOtherName] = useState('')
    const [email, setEmail] = useState('')

    const copyLink = () => {
        if (name == '' || otherName == '' || email == '') {
            alert('fill out all the fields')
        } else {
            setDone(true)
        }
    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom: '5em',
            }}
        >
            <h1>BeMyValentine hehe</h1>
            <img src={p1} alt="" />
            <p>
                <strong>NOTE!</strong> only working on gmail addresses
            </p>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '1em',
                }}
            >
                <input
                    type="email"
                    placeholder="his/her email"
                    style={{
                        padding: '1em',
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="your name"
                    style={{
                        marginTop: '2em',
                        padding: '1em',
                    }}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="his/her name"
                    style={{
                        marginTop: '2em',
                        padding: '1em',
                    }}
                    onChange={(e) => setOtherName(e.target.value)}
                />

                {done ? (
                    <CopyToClipboard
                        text={`https://bemyvaletine.vercel.app/invite/${otherName}++${name}++${email}`}
                    >
                        <button
                            style={{
                                marginTop: '2em',
                                padding: '1em',
                            }}
                        >
                            Copy
                        </button>
                    </CopyToClipboard>
                ) : (
                    <button
                        style={{
                            marginTop: '2em',
                            padding: '1em',
                        }}
                        onClick={copyLink}
                    >
                        Get your invitation link
                    </button>
                )}
            </div>
        </div>
    )
}

export default ConfigurePage
