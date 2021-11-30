import React from 'react'
import Image from 'next/image'

import {Nav,NavDropdown} from 'react-bootstrap'
// import Cssnav from '../../styles/nav.css'

function navbar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
        <div class="d-flex w-100 justify-content-between">
            <div>
                 <Image class="" src="/statics/2.PNG" width={500} height={120}/>
            </div>
            <div class="w-75 d-flex justify-content-end flex-column">
                <div class="d-flex justify-content-end">
                    <h5 class="mx-2">ผู้ใช้งาน :</h5>
                    <p>xxxxxxxxxx</p>
                    <a href="#" class="btn">ออกจากระบบ</a>
                </div>
                  <div style={{width:"95%",backgroundColor:"#AE78D6",border:"2px solid #2F528F",borderRadius:'15px 0px 0px 15px'}}>
                  <nav className="d-flex justify-content-around align-items-center" style={{backgroundColor:"#ae78d6"}}>
                    <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
                        ข้อมูลบุคลากร
                    </button>
                    <ul className="dropdown-menu" >
                    <li>
                            <a className="dropdown-item" href="/proffile">
                                ข้อมูลส่วนตัว
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/datapersonnel">
                                ข้อมูลบุคลากร
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/datapowerrate">
                                ข้อมูลอัตรากำลัง
                            </a>
                        </li>
                    </ul>
                    <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
                        การพัฒนาตนเอง
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="/datatraining">
                                ข้อมูลการอบรม/สัมมนา/ดูงาน
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/databudget">
                                ข้อมูลการใช้งบประมาณพัฒนาศักยภาพ
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/datastudyleave">
                                ข้อมูลการลาศึกษา
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/dataoutstanding">
                                ข้อมูลบุคลากรดีเด่น
                            </a>
                        </li>
                    </ul>
                    <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
                        ตำแหน่งทางวิชาการ
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="/datastatus">
                                สถานะดำเนินการ
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/datadocument">
                                เอกสารประกอบการสอน / คำสอน
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/dataacademic">
                                ผู้ดำรงตำแหน่งทางวิชาการ
                            </a>
                        </li>
                    </ul>
                    <a className="btn " href="/datadevelopment" style={{color:"white"}}>
                        แผนพัฒนาบุคลากร
                    </a>
                    <a className="btn " href="/datareport" style={{color:"white"}}>
                        รายงานผลดำเนินงน
                    </a>
                </nav>
                    </div>
                </div>
            </div>
          
    )
}

export default navbar
