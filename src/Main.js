import GalleryImg1 from './assets/images/gallery-img-1.jpeg';
import GalleryImg2 from './assets/images/gallery-img-2.jpeg';
import GalleryImg3 from './assets/images/gallery-img-3.jpeg';
import GalleryImg4 from './assets/images/gallery-img-4.jpeg';
import GalleryImg5 from './assets/images/gallery-img-5.jpeg';
import GalleryImg6 from './assets/images/gallery-img-6.jpeg';

function Main() {
    return (
        <main className="gallery">
            <div className="cards-wrapper">
                <div className="card">
                    <div className="card-overlay">
                        <h1 className="card-overlay-heading">Food Name</h1>
                        <p className="card-overlay-paragraph">Price: $30.00</p>
                        <button type="button" className="card-overlay-btn">Order Now</button>
                    </div>
                    <img src={GalleryImg1} alt="" className="card-img" />
                </div>
                <div className="card">
                    <div className="card-overlay">
                        <h1 className="card-overlay-heading">Food Name</h1>
                        <p className="card-overlay-paragraph">Price: $30.00</p>
                        <button type="button" className="card-overlay-btn">Order Now</button>
                    </div>
                    <img src={GalleryImg2} alt="" className="card-img" />
                </div>
                <div className="card">
                    <div className="card-overlay">
                        <h1 className="card-overlay-heading">Food Name</h1>
                        <p className="card-overlay-paragraph">Price: $30.00</p>
                        <button type="button" className="card-overlay-btn">Order Now</button>
                    </div>
                    <img src={GalleryImg3} alt="" className="card-img" />
                </div>
                <div className="card">
                    <div className="card-overlay">
                        <h1 className="card-overlay-heading">Food Name</h1>
                        <p className="card-overlay-paragraph">Price: $30.00</p>
                        <button type="button" className="card-overlay-btn">Order Now</button>
                    </div>
                    <img src={GalleryImg4} alt="" className="card-img" />
                </div>
                <div className="card">
                    <div className="card-overlay">
                        <h1 className="card-overlay-heading">Food Name</h1>
                        <p className="card-overlay-paragraph">Price: $30.00</p>
                        <button type="button" className="card-overlay-btn">Order Now</button>
                    </div>
                    <img src={GalleryImg5} alt="" className="card-img" />
                </div>
                <div className="card">
                    <div className="card-overlay">
                        <h1 className="card-overlay-heading">Food Name</h1>
                        <p className="card-overlay-paragraph">Price: $30.00</p>
                        <button type="button" className="card-overlay-btn">Order Now</button>
                    </div>
                    <img src={GalleryImg6} alt="" className="card-img" />
                </div>
            </div>
        </main>
    );
}

export default Main;