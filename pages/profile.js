import React from 'react'
import Image from 'next/image'
import Nav from '../component/nav/navbar'
import Footer from '../component/layout/footer'
import Userprofile from '../component/core/userprofile'
import Personel from '../pages/personel'

function profile() {
    return (
        <div>
            <Nav/>
            <Userprofile/>
            <div class="mt-3">
            <Footer/>
            </div>
        </div>
    )
}

export default profile
