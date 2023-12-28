const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eos, consequuntur, voluptate obcaecati rem dolor,
          ullam 
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Categoryx</button>
        </div>
        <div className="shoping">
          <p>Also Available on</p>

          <div className="brand-icons">
            <img src="../images/photo-2.png" alt="amazon-logo" height={50} />
            <img src="../images/photo-3.jpg" alt="filpkart-logo" height={50} width={100} />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="../images/photo-4.webp" alt="show-logo"  height={600}/>
      </div>
    </main>
  );
};

export default Hero;
