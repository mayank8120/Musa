import React from 'react'

// import '../assets'

const NavBar = () => {
    return (
        <>

            <div class="usMarr_navBar">
                {/* <!--topNavbar--> */}
                <div class="topNavbr">
                    <div class="d-flex align-items-center">
                        <img src={require('../assets/img/logo2.svg').default} />
                        <div class="ms-auto">
                            <img src={require('../assets/img/advertisemntPostr2.png').default} />
                        </div>
                    </div>
                </div>
                {/* <!--nav--> */}
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="statePage.html">Marriage Laws</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Immigration Laws</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Family Laws</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Wedding Ceremonies</a>
                                </li>
                            </ul>
                            <div class="navbar-text socialIcons">
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item">
                                        <a href="#"><img src={require('../assets/img/fb.svg').default} /></a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#"><img src={require('../assets/img/twtr.svg').default} /></a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#"><img src={require('../assets/img/inst.svg').default} /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default NavBar