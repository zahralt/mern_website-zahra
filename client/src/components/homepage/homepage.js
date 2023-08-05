import "./homepage.css"
import video from "./video/4K Space_Star scene - Free M.G Stock Footage.mp4"
import phanter_putih from "./img/baju panther putih.png"
import phanter_hitam from "./img/baju panther item.png"
import elektro_putih from "./img/baju elektro putih.png"
import elektro_hitam from "./img/baju elektro item.png"

const Homepage = ({setLoginUser}) => {

    return (
        <div className="homepage">
            <div className='body'>
            <div className="tm-container">
                <div className="tm-row">
                    {/* Site Header */}
                    <div className="tm-left">
                        <div className="tm-left-inner">
                            <div className="tm-site-header">
                            <h1 className="tm-site-name">Toster.id</h1>
                            </div>
                            <nav className="tm-site-nav">
                            <ul className="tm-site-nav-ul">
                                <li className="tm-page-nav-item">
                                    <a href="#" className="tm-page-link active">
                                        <i className="fas fa-mug-hot tm-page-link-icon" />
                                        <span>Merchandise</span>
                                    </a>
                                </li>
                                <li className="tm-page-nav-item">
                                    <a href="#" className="tm-page-link">
                                        <i className="fas fa-users tm-page-link-icon" />
                                        <span>Promo Items</span>
                                    </a>
                                </li>
                                <li className="tm-page-nav-item">
                                    <a href="#" className="tm-page-link">
                                        <i className="fas fa-comments tm-page-link-icon" />
                                        <span>Order Here</span>
                                    </a>
                                </li>
                                <li className="tm-page-nav-item tm-page-nav-item-logout">
                                    <a href="#logout" className="tm-page-link" onClick={() => setLoginUser({})}>
                                        <i className="fas fa-comments tm-page-link-icon" />
                                        <span>Logout Account</span>
                                    </a>
                                </li>
                            </ul>
                            </nav>
                        </div>        
                    </div>
                    <div className="tm-right">
                        <main className="tm-main">
                            <div id="drink" className="tm-page-content">
                                {/* Merchandise menu */}
                                <nav className="tm-black-bg tm-drinks-nav">
                                    <ul>
                                    <li>
                                        <a href="#" className="tm-tab-link active" data-id="cold">T-shirt</a>
                                    </li>
                                    <li>
                                        <a href="#" className="tm-tab-link" data-id="hot">Key ring</a>
                                    </li>
                                    <li>
                                        <a href="#" className="tm-tab-link" data-id="juice">Sticker</a>
                                    </li>
                                    </ul>
                                </nav>
                                <div id="cold" className="tm-tab-content">
                                    <div className="tm-list">
                                        <div className="tm-list-item">          
                                            <img src={phanter_putih} alt="Image" className="tm-list-item-img" />
                                            <div className="tm-black-bg tm-list-item-text">
                                            <h3 className="tm-list-item-name">Panther (putih)<span className="tm-list-item-price">85k</span></h3>
                                            <p className="tm-list-item-description">T-shirt panther berwarna putih dengan desain style Jepang.</p>
                                            </div>
                                        </div>
                                        <div className="tm-list-item">          
                                            <img src={phanter_hitam} alt="Image" className="tm-list-item-img" />
                                            <div className="tm-black-bg tm-list-item-text">
                                            <h3 className="tm-list-item-name">Panther (hitam)<span className="tm-list-item-price">85k</span></h3>
                                            <p className="tm-list-item-description">T-shirt panther berwarna hitam dengan desain style Jepang.</p>
                                            </div>
                                        </div>
                                        <div className="tm-list-item">          
                                            <img src={elektro_putih} alt="Image" className="tm-list-item-img" />
                                            <div className="tm-black-bg tm-list-item-text">
                                            <h3 className="tm-list-item-name">Elektro (putih)<span className="tm-list-item-price">85k</span></h3>
                                            <p className="tm-list-item-description">T-shirt elektro berwarna putih dengan desain kekinian.</p>
                                            </div>
                                        </div>
                                        <div className="tm-list-item">          
                                            <img src={elektro_hitam} alt="Image" className="tm-list-item-img" />
                                            <div className="tm-black-bg tm-list-item-text">
                                            <h3 className="tm-list-item-name">Elektro (hitam)<span className="tm-list-item-price">85k</span></h3>
                                            <p className="tm-list-item-description">T-shirt elektro berwarna hitam dengan desain kekinian.</p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>    
                </div>
                    <footer className="tm-site-footer">
                        <p className="tm-black-bg tm-footer-text">Social Media
                        | Instagram: <a href="https://www.instagram.com/toster.id/" className="tm-footer-link" rel="sponsored" target="_parent">Toster.id</a></p>
                    </footer>
                </div>
                {/* Background video */}
                <div className="tm-video-wrapper">
                    <i id="tm-video-control-button" className="fas fa-pause" />
                    <video autoPlay muted loop id="tm-video">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Homepage