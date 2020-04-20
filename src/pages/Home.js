import React from 'react'
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom'

export default function Home() {
    return (
    <Hero>
        <Banner title='luxurious rooms' subtitle='deluxe rooms starting at IDR 3 Million'>
    <Link to="/rooms" className="btn-primary">
        our rooms
        </Link>
        </Banner>
    </Hero>
    )
}
