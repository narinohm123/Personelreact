import React from 'react'
import Image from 'next/image'
import Footer from '../../component/layout/footer'

function login() {
    return (
        <div>
        <div class="d-flex align-items-center justify-content-around" style={{width:"100vw", height:"95.6vh"}}>
                <div class="d-flex align-items-center h-50 " >
                    <div class="mx-3" style={{marginBottom:'3cm'}}>
                    <Image class="" src="/statics/Logo.png" width={300} height={350}/>
                    </div>
                    <div class="d-flex flex-column justify-content-between mx-3 h-50" >
                        <div style={{marginTop:"2.5cm"}}>
                            <h1>ระบบฐานข้อมูลบุคลากร</h1>
                            <h5>เพื่อสนับสนุนการวางแผนพัฒนาบุคลากร</h5>
                        </div>
                            <h4 class="">คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา</h4>
                    </div>
                </div>
                <div class="w-25 p-5 " style={{borderLeft:'2px solid #E09F6E'}}>
                <form>
                  <div class="form-group mt-2">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
                    
                  </div>
                  <div class="form-group mt-3" >
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <div class="form-check mt-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Remember</label>
                  </div >
                  <div class="mt-3">
                  <button  type="submit" class="btn btn-primary">Login</button>
                  </div>
                </form>
                </div>
                
            </div>

                <div>
                    <Footer/>
                </div>
        </div>
    )
}

export default login
