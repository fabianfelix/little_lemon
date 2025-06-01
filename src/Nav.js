import NavImg1 from './assets/images/nav-img-1.jpeg';
import NavImg2 from './assets/images/nav-img-2.jpeg';
import NavImg3 from './assets/images/nav-img-3.jpeg';

function Nav() {
    return (
        <nav className="navbar">
            <input type="checkbox" name="" id="check" class="checkbox" hidden />
            <div class="hamburger-menu">
                <label for="check" class="menu">
                    <div class="menu-line menu-line-1"></div>
                    <div class="menu-line menu-line-2"></div>
                    <div class="menu-line menu-line-3"></div>
                </label>
            </div>

            <div className="navbar-navigation">
                <div class="navbar-navigation-left">
                    <img src={NavImg1} alt="" class="left-img left-img-1" />
                    <img src={NavImg2} alt="" class="left-img left-img-2" />
                    <img src={NavImg3} alt="" class="left-img left-img-3" />
                </div>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}

export default Nav;