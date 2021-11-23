import React from 'react'
import Image from 'next/image'


function navbar() {
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
                    <div>
                      <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul class="navbar-nav">
                            <li class="nav-item active">
                              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <div class="dropdown">
                              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                              </button>
                              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Action</button>
                                <button class="dropdown-item" type="button">Another action</button>
                                <button class="dropdown-item" type="button">Something else here</button>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar
