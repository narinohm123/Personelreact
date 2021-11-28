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
                <div class="d-flex justify-content-end">
                    <div style={{width:"95%",backgroundColor:"#AE78D6",border:"2px solid #2F528F",borderRadius:'15px 0px 0px 15px'}}>
                              <Nav  variant="pills" activeKey="1" onSelect={handleSelect} style={{display: 'flex',justifyContent: 'space-evenly',
                                                  height: '6vh',
                                                  alignItems: 'center',}}>
                                <div >
                                  <NavDropdown title="ข้อมูลบุคลากร" id="nav-dropdown" >
                                    <NavDropdown.Item eventKey="1.1">ข้อมูลส่วนตัว</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="1.2">ข้อมูลบุคลากร</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="1.3">ข้อมูลอัตรากำลัง</NavDropdown.Item>
                                  </NavDropdown>
                                </div>
                                <div>
                                  <NavDropdown title="การพัฒนาตนเอง" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="2.1">ข้อมูลการอบรม/สัมมนา/ดูงาน</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="2.2">ข้อมูลการใช้งบประมาณพัฒนาศักยภาพ</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="2.3">ข้อมูลการลาศึกษา</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="2.4">ข้อมูลบุคลากรดีเด่น</NavDropdown.Item>
                                  </NavDropdown>
                                </div>
                                <div>
                                  <NavDropdown title="ตำแหน่งทางวิชาการ" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="3.1">สถานะดำเนินการ</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="3.2">เอกสารประกอบการสอน / คำสอน</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="3.3">ผู้ดำรงตำแหน่งทางวิชาการ</NavDropdown.Item>
                                  </NavDropdown>
                                </div>
                                <div>
                                  <Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="link-1">แผนพัฒนาบุคลากร</Nav.Link>
                                    </Nav.Item>
                                  </Nav.Item>
                                </div>
                                <div>
                                  <Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="link-2">รายงานผลการดำเนินงาน</Nav.Link>
                                    </Nav.Item>
                                  </Nav.Item>
                                </div>
                          </Nav>
                    </div>
                </div>
            </div>
        </div>
          
    )
}

export default navbar
