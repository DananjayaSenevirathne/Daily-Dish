import './Footer.css'
import logo from '../../assets/logo.png'
import facebook_icon from '../../assets/facebook_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={logo} alt='Tomato logo' className='footer-logo' />

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <div className='footer-social-icons'>
            <div className='footer-icon-circle'>
              <img src={facebook_icon} alt='Facebook' />
            </div>
            <div className='footer-icon-circle'>
              <img src={linkedin_icon} alt='LinkedIn' />
            </div>
            <div className='footer-icon-circle footer-icon-text'>
              in
            </div>
          </div>
        </div>

        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94 76 941 7133</li>
            <li>dananjayasenevitayne674@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className='footer-copyright'>
        Copyright 2024 © Tomato.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer