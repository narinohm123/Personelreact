import React from 'react'
import Nav from '../component/nav/navbar'
import Footer from '../component/layout/footer'

function powerreting() {
    return (
        <div>
            <Nav/>
            <div class="w-100 h-100 d-flex mt-3">
                <div class="mt-5 mx-3" style={{border:'2px solid #2F528F',borderRadius:'10px',width:'20vw'}}>
                        <div style={{display:'flex', justifyContent:'Center',
                                    flexDirection: 'column',
                                    alignItems: 'center'}}>
                            <div class="mt-3 card d-flex " style={{borderRadius:'10px',width:'15vw',height:'5vh',backgroundColor:'#AE78D6'}}>
                                <div class="mt-2 d-flex justify-content-center text-center " style={{width:'100%',height:'7vh',}}>
                                  <p class=" d-flex justify-content-center text-center" style={{fontSize:'20px',height:'5vh'}}><dt>ข้อมูลอัตรากำลัง</dt></p>
                                </div>
                            </div>
                            <div class="mt-3 d-flex " style={{borderRadius:'10px',width:'15vw',height:'4vh'}}>
                                <div class="d-flex justify-content-center text-center " style={{width:'100%',height:'4vh'}}>
                                  <p style={{fontSize:'16px'}}><dt>บุคลากรสายวิชาการ</dt></p>
                                </div>
                            </div>
                            <div class="mt-0" style={{display: 'flex',flexDirection: 'column',width: '10vw'}}>
                               <button type="button" class="btn btn-outline-dark">2563</button>
                               <button type="button" class="btn btn-outline-dark">2562</button>
                               <button type="button" class="btn btn-outline-dark">2561</button>
                               <button type="button" class="btn btn-outline-dark">2560</button>
                               <button type="button" class="btn btn-outline-dark">2559</button>
                               <button type="button" class="btn btn-outline-dark">2558</button>
                            </div>
                            <div class="mt-3 d-flex " style={{borderRadius:'10px',width:'15vw',height:'4vh'}}>
                                <div class="d-flex justify-content-center text-center " style={{width:'100%',height:'4vh'}}>
                                  <p class="" style={{fontSize:'16px'}}><dt>บุคลากรสายสนับสนุน</dt></p>
                                </div>
                            </div>
                            <div style={{display: 'flex',flexDirection: 'column',width: '10vw'}}>
                               <button type="button" class="btn btn-outline-dark">2563</button>
                               <button type="button" class="btn btn-outline-dark">2562</button>
                               <button type="button" class="btn btn-outline-dark">2561</button>
                               <button type="button" class="btn btn-outline-dark">2560</button>
                               <button type="button" class="btn btn-outline-dark">2559</button>
                               <button type="button" class="btn btn-outline-dark">2558</button>
                            </div>
                            
                        </div> 
                    </div>
                <div>
                    <div >
                        <button href="#" type="button" class="btn btn-outline-success" style={{borderRadius:'10px',width:'6vw'}}>หน้าเเรก</button>
                            </div>
                            <div class="d-flex justify-content-between " style={{border:'2px solid #2F528F',width:'77vw',height:'75.5vh',borderRadius:'10px'}}>     
                    </div>
                </div>
            </div>
            <div class="mt-3"></div>
            <Footer/> 
        </div>
    )
}

export default powerreting
