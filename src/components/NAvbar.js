import React from 'react';

  
const Navbar = () => {
  return (
    <header class="header">
    <nav class="navbar">
        <a href="#" class="nav-logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPr8ecNkZa6keqlzKXuZN5IIhbo6tuWoQuPQ&usqp=CAU" width="20%"/> </a>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Gallery</a>
            </li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
</header>

)
};
  
export default Navbar;