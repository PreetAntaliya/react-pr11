import React, { useState } from 'react'
import Header from '../components/Header'
import { Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { ADD_USER } from '../redux/action/crudAction'

const Add = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    // const id = Math.floor(Math.random() * 1000)
    const HandelSubmit = (e) => {
        e.preventDefault()

        const obj = {
            userid: Math.floor(Math.random() * 1000),
            name,
            email,
            phone,
            message
        }
        dispatch(ADD_USER(obj))
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
    }

    return (
        <div>
            <Header />
            <form onSubmit={HandelSubmit}>
                <Container>
                    <Row>
                        <div className="col-12">
                            <div className='d-flex align-items-center justify-content-center mt-4'>
                                <label htmlFor="name">Name : &nbsp;</label>
                                <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name} required />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className='d-flex align-items-center justify-content-center mt-4'>
                                <label htmlFor="email">Email : &nbsp;</label>
                                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className='d-flex align-items-center justify-content-center mt-4'>
                                <label htmlFor="phone">Phone : &nbsp;</label>
                                <input type="tel" name="phone" id="phone" onChange={(e) => setPhone(e.target.value)} value={phone} required />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className='d-flex align-items-center justify-content-center mt-4'>
                                <label htmlFor="message">Message : &nbsp;</label>
                                <textarea name="message" id="message" className='w-25' rows={5} onChange={(e) => setMessage(e.target.value)} value={message} style={{resize: "none"}}></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className='d-flex align-items-center justify-content-center mt-4'>
                                <input type="submit" value='Done' />
                            </div>
                        </div>
                    </Row>
                </Container>
            </form>
        </div>
    )
}

export default Add