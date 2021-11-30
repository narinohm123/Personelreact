import React from 'react'
import Image from 'next/image'
import Nav from '../component/nav/navbar'
import Footer from '../component/layout/footer'
import Userprofile from '../component/core/userprofile'
import Personel from '../component/core/personel'
import Powerreting from '../component/core/powerreting'
import Training from '../component/core/training'
import Budget from '../component/core/budget'
import Studyleave from '../component/core/studyleave'
import Status from '../component/core/status'
import Document from '../component/core/document'
import Academic from '../component/core/academic'
import Development from '../component/core/development'
import Report from '../component/core/report'
import Test from '../component/core/test'

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
