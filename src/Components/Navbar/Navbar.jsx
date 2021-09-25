import React, { Component } from 'react';
import logo from '../../img/Square.png';
import logoSa from '../../img/sa.png';
import '../Navbar/Navbar.css';


class Navbar extends Component {
    state = {}
    render() {
        return (
            <>
                <nav class=" navbar2 navbar-expand-xl navbar-light">
                    <div className="container-container">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto pl-3">
                                <li class="nav-item navLink2  dropdown">
                                    <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-1"><i class="fas fa-map-marker-alt"></i></span> Saudi Arabia
                                    </a>
                                    <div class="dropdown-menu menu " aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li class="nav-item navLink2 ">
                                    <a class="nav-link" href="#"> <span className="mr-1"><i class="fas fa-exclamation-circle"></i></span> About</a>
                                </li>
                                <li class="nav-item navLink2">
                                    <a class=" nav-link" href="#"> <span className="mr-1"><i class="fas fa-phone-alt"></i></span> Contact Us</a>

                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto pr-3">

                                <li class="nav-item navLink2 ">
                                    <a class="nav-link" href="#"> <span className="mr-1"><i class="fas fa-heart"></i></span> Favorite ADS</a>
                                </li>
                                <li class="nav-item navLink2">
                                    <a class="nav-link" href="#"> <span className="mr-1"> <i class="fas fa-user"></i> </span> Register or Sign in</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* ===================================================== */}
                <nav class="navbar navbar-expand-xl navbar-light bg-light">
                    <div className="container-container">
                        <a class="navbar-brand" href="#">
                            <img className="w-75 " src={logo} alt="Square" />
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li>
                                    <a href="#" className="">
                                        <img className="" src={logoSa} alt="" />
                                    </a>
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto mg5 ">
                                <li class="nav-item pt-1 Laptop">
                                    <input type="text" placeholder=" #Laptop , Mobile , TV.... " className="inLocaionLaptop inpLaptop form-control " />
                                </li>
                                <li class="nav-item pt-1 Locaion position-relative">

                                    <input type="text" placeholder="Locaion " className="inLocaionLaptop formLaptop  form-control " />
                                    <i class="crosshairs fas fa-crosshairs"></i>

                                </li>
                                <li class="nav-item pt-1">


                                    <div class="btn-group groupDropdown">
                                        <button type="button" class="inLocaionLaptop  px-2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Select Category
                                        </button>
                                        <div class="dropdown-menu menu2">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                            <a class="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>

                                </li>

                                <li class="nav-item pt-1">
                                    <button class="SaershBtn mr-2" type="submit"><i class="fas fa-search"></i></button>
                                </li>

                                <li class="nav-item pt-1  ">
                                    <button class="Post position-relative" type="submit">
                                        <span>Post An Ad</span>
                                        <i class=" mx-3 fas fa-plus"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;