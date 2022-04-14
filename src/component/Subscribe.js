/*

import React, { useState, useEffect } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const CustomForm = ({ status, message, onValidated }) => {

    const [close, setClose] = useState(false)
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [error, setError] = useState(false)

    const [currentState, setCurrentState] = useState("")

    const subscribe = (e) => {
        e.preventDefault()

        if (!email) {
            setError(true)
        } else {
            onValidated({
                EMAIL: email,
                MERGE1: firstName,
                MERGE2: lastName,
            });
        }
    }

    useEffect(() => {
        if (status === 'sending') {
            setCurrentState('sending')
        } else if (status === 'success') {
            setCurrentState('success')
        } else if (status === 'error') {
            setCurrentState('error')
        }
    }, [status])

    return (
        <section className=''>
            <h2>Rejoignez une aventure atomic !</h2>
            <p>Restez informez sur la sortie de l’application et bénéficier d’offre exclusive.</p>
        </section>
    )
}
*/

const Subscribe = () => {

    const url = `https://jorisdelorme.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        /*
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, message, status }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
        */
       <h1>non</h1>
    )
}

export default Subscribe