import { Link } from 'react-router-dom'

const Footer = (props) => {
    const { site } = props
    return (
        <>
            <div id='footer'>
                <div className='footer-container'>
                    <div className='footer-data'>
                        <div className='footer-logo'>
                            <Link to='/'>
                                <img src='/images/pageLogo.png' alt='logo' />
                            </Link>
                        </div>
                        <p className='footer-desc'>
                            {site.admin}
                        </p>
                        <p className='footer-desc'>
                            {site.uni}
                        </p>
                        <div className='footer-networks'>
                            <a href={site.fb}>
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href={`https://youtube.com`}>
                                <i className="fab fa-google"></i>
                            </a>
                            <a href='/https://instagram.com'>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href={`call to ${site.phone}`} href={`tel:${site.phone}`}>
                                <i className="fas fa-phone"></i>
                            </a>
                        </div>
                    </div>
                    <div className='footer-menu'>
                        <ul>
                            <li className='title'>Diễn đàn</li>
                            <li>
                                <Link to='/'>
                                    Công nghệ
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Thị trường
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Phát triển 4.0
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className='title'>Blog</li>
                            <li>
                                <Link to='/posts'>
                                    Laptop
                                </Link>
                            </li>
                            <li>
                                <Link to='/posts'>
                                    Mobile
                                </Link>
                            </li>
                            <li>
                                <Link to='/posts'>
                                    Xe công nghệ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='footer-copyright'> © 2021. All Right Reserved.
		Published with _Thanh Tan</p>
            </div>
        </>
    )
}

export default Footer
