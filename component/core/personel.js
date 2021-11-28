import React from 'react'


function personels() {
    return (
        <div>
            <div class="w-100 h-100 d-flex">
                <div class="mt-5 mx-3" style={{border:'2px solid #2F528F',borderRadius:'10px',width:'20vw'}}>
                        <div style={{display:'flex', justifyContent:'Center',
                                    flexDirection: 'column',
                                    alignItems: 'center'}}>
                            <div class="mt-3 card d-flex " style={{borderRadius:'10px',width:'15vw',height:'5vh',backgroundColor:'#AE78D6'}}>
                                <div class="mt-2 d-flex justify-content-center text-center " style={{width:'100%',height:'7vh',}}>
                                  <p class=" d-flex justify-content-center text-center" style={{fontSize:'20px',height:'5vh'}}><dt>ข้อมูลทั่วไป</dt></p>
                                </div>
                            </div>
                            <div class="mt-3 d-flex " style={{borderRadius:'10px',width:'15vw',height:'4vh'}}>
                                <div class="d-flex justify-content-center text-center " style={{width:'100%',height:'4vh'}}>
                                  <p style={{fontSize:'16px'}}><dt>บุคลากรสายวิชาการ</dt></p>
                                </div>
                            </div>
                            <div class="mt-0" style={{display: 'flex',flexDirection: 'column'}}>
                               <button type="button" class="btn btn-outline-dark">คอมพิวเตอร์ธุรกิจ</button>
                               <button type="button" class="btn btn-outline-dark">เทคโนโลยีสารสนเทศ</button>
                               <button type="button" class="btn btn-outline-dark">วิทยาการคอมพิวเตอร์</button>
                               <button type="button" class="btn btn-outline-dark">ภูมิสารสนเทศศาสตร์</button>
                               <button type="button" class="btn btn-outline-dark">วิศวกรรมคอมพิวเตอร์</button>
                               <button type="button" class="btn btn-outline-dark">วิศวกรรมซอฟต์แวร์</button>
                               <button type="button" class="btn btn-outline-dark">วิศวกรรมสารสนเทศและการสื่อสาร</button>
                               <button type="button" class="btn btn-outline-dark">คอมพิวเตอร์กราฟิกและมัลติมีเดีย</button>
                            </div>
                            <div class="mt-3 d-flex " style={{borderRadius:'10px',width:'15vw',height:'4vh'}}>
                                <div class="d-flex justify-content-center text-center " style={{width:'100%',height:'4vh'}}>
                                  <p class="" style={{fontSize:'16px'}}><dt>บุคลากรสายสนับสนุน</dt></p>
                                </div>
                            </div>
                            <div style={{display: 'flex',flexDirection: 'column',width: '13vw'}}>
                               <button type="button" class="btn btn-outline-dark">งานบริหารทั่วไป</button>
                               <button type="button" class="btn btn-outline-dark">งานวิชาการ</button>
                               <button type="button" class="btn btn-outline-dark">งานแผนงาน</button>
                               <button type="button" class="btn btn-outline-dark">งานปฏิบัติการ</button>
                            </div>
                            
                        </div> 
                    </div>
                <div>
                    <div >
                        <button href="#" type="button" class="btn btn-outline-success" style={{borderRadius:'10px',width:'6vw'}}>หน้าเเรก</button>
                            </div>

                            <div class="d-flex justify-content-between " style={{border:'2px solid #2F528F',width:'77vw',height:'76vh',borderRadius:'10px'}}> 
                            poiu 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default personels
