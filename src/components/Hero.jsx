const HeroSection = () =>{
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST </h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also available On</p>
                    <div className="brand-icons">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUD67qdGUmGy096hUdnGnCD14K2t5GkcyXWoX08XEWJA&s"onclick="window.location.href('https://www.facebook.com/pages/Gr81');"height="50" alt="amazon"></img>
                        <img src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png" height="30" alt="flipkart"></img>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="https://www.kindpng.com/picc/m/5-57516_transparent-white-vans-png-red-shoes-png-mens.png" height="350" alt=" "></img>
            </div>

        </main>
    );
};

export default HeroSection;