import React from 'react'
import Image from 'next/image'
import Data from  './json/profile.json'

const userprofile = Data.map((rs) => {
    return(
        <div class="w-100 h-100 d-flex">
                <div class="mt-5 mx-4" >
                    <Image src={rs.img} width={300} height={300}/>
                </div>

                <div>
                    <div >
                        <button  href="/profile" type="button" class="btn btn-outline-success" style={{borderRadius:'10px',width:'6vw'}}>หน้าเเรก</button>
                            </div>

                            <div class="d-flex justify-content-between " style={{border:'2px solid #2F528F',width:'80vw',height:'77vh',borderRadius:'10px'}}>  
                                
                        <div class="mt-4 mx-4">
                            <div class="card d-flex " style={{borderRadius:'10px'}}>
                                <div class="card-body d-flex justify-content-center mb-3 text-center" style={{width:'100%',height:'4vh'}}>
                                  <h5 >ข้อมูลทั่วไป</h5>
                                </div>
                                
                                </div>
                        <div class="d-flex">
                            <div class="mt-4" style={{borderRight:'2px solid #A6A6A6',width:'10vw',height:'55vh'}}>
                                <p class="mb-1">เลขที่ตำแหน่ง</p>
                                <p class="mb-1">ชื่อ-สกุล(TH)</p>
                                <p class="mb-1">ชื่อ-สกุล(EN)</p>
                                <p class="mb-1">ประเภทบุคลากร</p>
                                <p class="mb-1">สายงาน</p>
                                <p class="mb-1">ตำแหน่งงาน</p>
                                <p class="mb-1">ตำแหน่งทางวิชาการ</p>
                                <p class="mb-1">ตำแหน่งบริหาร</p>
                                <p class="mb-1">วันที่เข้าทำงาน</p>
                                <p class="mb-1">วันที่บรรจุ</p>
                                <p class="mb-1">สถานะปฏิบัติงาน</p>
                                <p class="mb-1">วันเดือนปีเกิด</p>
                                <p class="mb-1">สัญชาติ</p>
                                <p class="mb-1">ศาสนา</p>
                                <p class="mb-1">เบอร์โทร</p>
                                <p class="mb-1">อีเมล ม.พะเยา</p>
                                <p class="mb-1">อีเมล ส่วนตัว</p>
                                <p class="mb-1">ที่อยู่ปัจจุบัน</p>
                            </div>
                            <div class="mt-4 mx-4" style={{width:"15vw"}}>
                                <p class="mb-1">{rs.numderposition}</p>
                                <p class="mb-1">{rs.nameth}</p>
                                <p class="mb-1">{rs.nameen}</p>
                                <p class="mb-1">{rs.personel}</p>
                                <p class="mb-1">{rs.linework}</p>
                                <p class="mb-1">{rs.position}</p>
                                <p class="mb-1">{rs.positionaca}</p>
                                <p class="mb-1">{rs.positionmanage}</p>
                                <p class="mb-1">{rs.datework}</p>
                                <p class="mb-1">{rs.dateworkcontain}</p>
                                <p class="mb-1">{rs.status}</p>
                                <p class="mb-1">{rs.daymonth}</p>
                                <p class="mb-1">{rs.nationality}</p>
                                <p class="mb-1">{rs.religion}</p>
                                <p class="mb-1">{rs.ber}</p>
                                <p class="mb-1">{rs.emailup}</p>
                                <p class="mb-1">{rs.email}</p>
                                <p class="mb-1">{rs.address}</p>
                                
                            </div>
                        </div>
                    </div>
                        <div class="mt-4" style={{width:'25vw'}}>
                        <div class="mx-4">
                            <div class="card d-flex " style={{borderRadius:'10px'}}>
                                <div class="card-body d-flex justify-content-center mb-3 text-center" style={{width:'100%',height:'4vh'}}>
                                  <h5 >ข้อมูลวุฒิการศึกษา</h5>
                                </div>
                                
                                </div>
                                <div class="mt-2 " style={{width:'10vw'}}>
                                    <h5 class="">๏ปริญญาตรี</h5>
                                </div>
                        <div class="d-flex">
                            <div class="mt-0" style={{borderRight:'2px solid #A6A6A6',width:'10vw',height:'25vh'}}>
                                <p class="mb-0">วุฒิการศึกษา</p>
                                <p class="mb-0">สาขาวิชา</p>
                                <p class="mb-0">สถานศึกษา</p>
                                <p class="mb-0">จังหวัด</p>
                                <p class="mb-0">ประเทศ</p>
                                <p class="mb-0">วันที่เข้าศึกษา</p>
                                <p class="mb-0">วันที่จบการศึกษา</p>
                                <p class="mb-0">เกรดเฉลี่ย</p>
                                <p class="mb-0">เกียรตินิยม</p>
                                <p class="mb-0">วุฒิที่ใช้บรรจุ</p>
                            </div>
                            <div class="mt-0 mx-4">
                                <p class="mb-0">{rs.bdeq}</p>
                                <p class="mb-0">{rs.bdbranch}</p>
                                <p class="mb-0">{rs.bdacademy}</p>
                                <p class="mb-0">{rs.bdprovince}</p>
                                <p class="mb-0">{rs.bdcountry}</p>
                                <p class="mb-0">{rs.bddatein}</p>
                                <p class="mb-0">{rs.bddateout}</p>
                                <p class="mb-0">{rs.bdgred}</p>
                                <p class="mb-0">{rs.bdhonor}</p>
                                <p class="mb-0">{rs.bdpacking}</p>
                            </div>
                        </div>
                        <div class="mt-5" style={{width:'20vw'}}>
                                    <h5>๏ปริญญาโท</h5>
                                </div>
                        <div class="d-flex">
                            <div class="mt-0" style={{borderRight:'2px solid #A6A6A6',width:'10vw',height:'25vh'}}>
                                <p class="mb-0">วุฒิการศึกษา</p>
                                <p class="mb-0">สาขาวิชา</p>
                                <p class="mb-0">สถานศึกษา</p>
                                <p class="mb-0">จังหวัด</p>
                                <p class="mb-0">ประเทศ</p>
                                <p class="mb-0">วันที่เข้าศึกษา</p>
                                <p class="mb-0">วันที่จบการศึกษา</p>
                                <p class="mb-0">เกรดเฉลี่ย</p>
                                <p class="mb-0">เกียรตินิยม</p>
                                <p class="mb-0">วุฒิที่ใช้บรรจุ</p>
                            </div>
                            <div class="mt-0 mx-4">
                                <p class="mb-0">{rs.mdeq}</p>
                                <p class="mb-0">{rs.mdbranch}</p>
                                <p class="mb-0">{rs.mdacademy}</p>
                                <p class="mb-0">{rs.mdprovince}</p>
                                <p class="mb-0">{rs.mdcountry}</p>
                                <p class="mb-0">{rs.mddatein}</p>
                                <p class="mb-0">{rs.mddateout}</p>
                                <p class="mb-0">{rs.mdgred}</p>
                                <p class="mb-0">{rs.mdhonor}</p>
                                <p class="mb-0">{rs.mdpacking}</p>
                            </div>
                        </div>
                    </div>
                        </div>
                        <div class="mt-5 mx-3" style={{width:'20vw'}}>
                            <div class="mt-5" style={{width:'20vw'}}>
                                    <h5>๏ปริญญาเอก</h5>
                                </div>
                        <div class="d-flex">
                            <div class="mt-0" style={{borderRight:'2px solid #A6A6A6',width:'10vw',height:'25vh'}}>
                                <p class="mb-0">วุฒิการศึกษา</p>
                                <p class="mb-0">สาขาวิชา</p>
                                <p class="mb-0">สถานศึกษา</p>
                                <p class="mb-0">จังหวัด</p>
                                <p class="mb-0">ประเทศ</p>
                                <p class="mb-0">วันที่เข้าศึกษา</p>
                                <p class="mb-0">วันที่จบการศึกษา</p>
                                <p class="mb-0">เกรดเฉลี่ย</p>
                                <p class="mb-0">เกียรตินิยม</p>
                                <p class="mb-0">วุฒิที่ใช้บรรจุ</p>
                            </div>
                            <div class="mt-0 mx-4">
                                <p class="mb-0">{rs.pdeq}</p>
                                <p class="mb-0">{rs.pdbranch}</p>
                                <p class="mb-0">{rs.pdacademy}</p>
                                <p class="mb-0">{rs.pdprovince}</p>
                                <p class="mb-0">{rs.pdcountry}</p>
                                <p class="mb-0">{rs.pddatein}</p>
                                <p class="mb-0">{rs.pddateout}</p>
                                <p class="mb-0">{rs.pdgred}</p>
                                <p class="mb-0">{rs.pdhonor}</p>
                                <p class="mb-0">{rs.pdpacking}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        // <div>
        //     {rs.name}
        // </div>
    )
})


function user() {
    return (
        <div>
            {userprofile}
        </div>
    )
}

export default user
