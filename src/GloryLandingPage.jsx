import React, {useEffect} from 'react';
import './GloryLandingPage.css';

function GloryLandingPage() {

  useEffect(() => {
    // This code runs after component renders and DOM is ready
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const wrapper = document.querySelector('.testimonial-wrapper');
    const indicators = document.querySelectorAll('.indicator');
    
    // Set card width for scrolling
    const cardWidth = document.querySelector('.testimonial-card')?.offsetWidth + 16 || 316; // width + margin
    
    const handlePrevClick = () => {
      wrapper.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    };
    
    const handleNextClick = () => {
      wrapper.scrollBy({ left: cardWidth, behavior: 'smooth' });
    };
    
    const handleScroll = () => {
      const scrollPosition = wrapper.scrollLeft;
      const containerWidth = wrapper.offsetWidth;
      const totalWidth = wrapper.scrollWidth;
      
      // Calculate progress (0 to 1)
      const progress = scrollPosition / (totalWidth - containerWidth);
      
      // Update indicators
      indicators.forEach((indicator, index) => {
        const segment = 1 / indicators.length;
        indicator.classList.toggle('active', 
          progress >= index * segment && progress < (index + 1) * segment);
      });
    };
    
    // Add event listeners
    if (prevBtn) prevBtn.addEventListener('click', handlePrevClick);
    if (nextBtn) nextBtn.addEventListener('click', handleNextClick);
    if (wrapper) wrapper.addEventListener('scroll', handleScroll);
    
    // Cleanup event listeners when component unmounts
    return () => {
      if (prevBtn) prevBtn.removeEventListener('click', handlePrevClick);
      if (nextBtn) nextBtn.removeEventListener('click', handleNextClick);
      if (wrapper) wrapper.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="glory-landing">
      {/* Header with Logo */}
      <header className="text-center py-4">
        <img src="/images/glory-logo.png" alt="Glory Logo" className="logo" />
      </header>

      {/* Hero Section with consistent layout */}
      <section className="hero-section bg-light-cream py-5">
        <div className="container">
          <div className="row">
            {/* Left Content Column */}
            <div className="col-lg-5">
              <div className="hero-content">
                <h1 className="fw-bold">Glory – Boycott Israeli-Affiliated Brands with One App</h1>
                <p className="text-muted mt-3">
                Glory helps you scan, search, and boycott brands that support Israel’s occupation. Get ethical alternatives instantly.
                </p>
                <div className="mt-4">
                  <button className="btn btn-success me-3">App Coming Soon</button>
                  <button className="btn btn-outline-dark d-none d-md-inline-block">Donate Now Coming Soon</button>
                </div>
              </div>
            </div>
            
            {/* Right Images Column - Custom Sizes */}
            <div className="col-lg-7">
              <div className="image-grid">
                <div className="row g-3">
                  {/* First column of images with custom sizes */}
                  <div className="col-md-6">
                    <div className="custom-image-container mb-3 d-none d-md-block" style={{ height: '74px' }}>
                      <img src="/images/image-1.jpeg" alt="Dome of the Rock" className="img-fluid rounded" />
                    </div>
                    <div className="custom-image-container mb-3" style={{ height: '150px' }}>
                      <img src="/images/Phalestine-Flag.jpeg" alt="Palestine Flag" className="img-fluid rounded" />
                    </div>
                    <div className="custom-image-container mb-3 d-none d-md-block" style={{ height: '182px' }}>
                      <img src="/images/child-flag.jpeg" alt="Child Flag" className="img-fluid rounded" />
                    </div>
                  </div>
                  
                  {/* Second column of images with custom sizes */}
                  <div className="col-md-6">
                    <div className="custom-image-container mb-3 d-none d-md-block" style={{ height: '111px' }}>
                      <img src="/images/dome-sky.jpeg" alt="dome sky" className="img-fluid rounded " />
                    </div>
                    <div className="custom-image-container mb-3 d-none d-md-block" style={{ height: '180px' }}>
                      <img src="/images/dome-artwork.jpeg" alt="Dome artwork" className="img-fluid rounded" />
                    </div>
                    <div className="custom-image-container mb-3" style={{ height: '121px' }}>
                      <img src="/images/mosque.jpeg" alt="mosque" className="img-fluid rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Counter Section */}
{/* Stats Counter Section */}
<section className="stats-counter py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="stat-item d-flex align-items-center">
          <span className="stat-icon me-2">✅</span>
          <div className="stat-text d-flex flex-wrap align-items-baseline">
            <span className="stat-number fw-bold me-1">47,320</span>
            <span className="stat-label">people boycotting today</span>
          </div>
        </div>
      </div>
      
      <div className="col-md-3">
        <div className="stat-item d-flex align-items-center">
          <span className="stat-icon me-2">🌐</span>
          <div className="stat-text d-flex flex-wrap align-items-baseline">
            <span className="stat-number fw-bold me-1">5</span>
            <span className="stat-label">countries using Glory</span>
          </div>
        </div>
      </div>
      
      <div className="col-md-3">
        <div className="stat-item d-flex align-items-center">
          <span className="stat-icon me-2">🔎</span>
          <div className="stat-text d-flex flex-wrap align-items-baseline">
            <span className="stat-number fw-bold me-1">2</span>
            <span className="stat-label">verified ethical brands partnered</span>
          </div>
        </div>
      </div>
      
      <div className="col-md-3">
        <div className="stat-item d-flex align-items-center">
          <span className="stat-icon me-2">❤️</span>
          <div className="stat-text d-flex flex-wrap align-items-baseline">
            <span className="stat-number fw-bold me-1">50k</span>
            <span className="stat-label">raised to support Gaza</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* How It Works Section */}
      <section className="how-it-works py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">How Glory Works?</h2>
          <p className="text-muted mb-5">
            Glory makes it easy to boycott Israeli-affiliated products and support ethical alternatives — all in seconds.
          </p>

          <div className="row">
            <div className="col-md-4">
              <div className="feature-card bg-light-cream p-4 rounded h-100">
                <h3 className="fw-bold">Search or Scan to Discover Boycotted Products</h3>
                <p className="text-muted mt-3">
                  Quickly find out if a brand or product supports Israeli occupation. Simply search or scan the barcode to reveal its status and get an ethical alternative instantly.
                </p>
                <img src="/images/app-screenshot.png" alt="App Screenshot" className="img-fluid rounded mt-3" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card bg-light-cream p-4 rounded h-100">
                <h3 className="fw-bold">See the Truth. Understand the Why.</h3>
                <p className="text-muted mt-3">
                Each product page gives you the full picture — why it's on the boycott list, with trusted proof and context, so you can make your decision with confidence.
                </p>
                <img src="/images/pepsi.png" alt="App Screenshot" className="img-fluid rounded mt-3" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card bg-light-cream p-4 rounded h-100">
                <h3 className="fw-bold">Your Contribution Makes Change Possible.</h3>
                <p className="text-muted mt-3">
                  Every donation supports Glory's mission and delivers aid directly to Gaza. Whether you give money or simply watch an ad — your support matters.
                </p>
                <img src="/images/donation-example.png" alt="Donation Example" className="img-fluid rounded mt-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Today's Featured Blocklist Section */}
  <section className="blocklist-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Today's Featured Blocklist</h2>
          <p className="text-muted mb-5">
            These are the brands that support or profit from the Israeli occupation — knowingly or through direct partnerships.
          </p>

          <div className="row">
            {/* Coca-Cola */}
            <div className="col-md-4">
              <div className="blocklist-card bg-light-cream p-4 rounded">
                <div className="brand-logo-container mb-3">
                  <img src="/images/coca-cola-logo.png" alt="Coca-Cola Logo" className="brand-logo" />
                </div>
                <h3 className="fw-bold">Coca-Cola</h3>
                <p className="brand-description text-start">
                  According to <strong>research by WhoProfit</strong>, the Central Beverage Company, known as Coca-Cola Israel, which is the exclusive franchise of the Coca-Cola Company in Israel, operates a regional distribution center and cooling houses in the [Israeli] Atarot Settlement Industrial Zone.
                </p>
                <button className="btn btn-danger boycott-btn">Boycott</button>
              </div>
            </div>

            {/* McDonald's */}
            <div className="col-md-4">
              <div className="blocklist-card bg-light-cream p-4 rounded">
                <div className="brand-logo-container mb-3">
                  <img src="/images/mcdonalds-logo.png" alt="McDonald's Logo" className="brand-logo" />
                </div>
                <h3 className="fw-bold">McDonald's</h3>
                <p className="brand-description text-start">
                 <strong>Mcdonald's</strong> said that it has been donating "tens of thousands of meals" across Israel over the last few days during the ongoing conflict. 
                  It wrote, according to a translation from Hebrew to English by Haaretz, "McDonald's donated and continues to donate tens of thousands of meals to IDF units."
                 
                </p>
                <button className="btn btn-danger boycott-btn">Boycott</button>
              </div>
            </div>

            {/* Netflix */}
            <div className="col-md-4">
              <div className="blocklist-card bg-light-cream p-4 rounded">
                <div className="brand-logo-container mb-3">
                  <img src="/images/netflix-logo.png" alt="Netflix Logo" className="brand-logo" />
                </div>
                <h3 className="fw-bold">Netflix</h3>
                <p className="brand-description text-start">
                  <strong>Netflix</strong>, the world's leading internet television network, today announced a truly Israeli service, using local language, currency and adding Israeli TV shows in addition to Netflix's critically-acclaimed original programming, now starting at ILS 29.9 per month. Through a partnership with its first local partner, Partner Communications, Netflix is also available on Partner TV.
                </p>
                <button className="btn btn-danger boycott-btn">Boycott</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<section className="testimonials-section py-5">
  <div className="container">
    <h2 className="text-center fw-bold mb-3">What People Are Saying</h2>
    <p className="text-center mb-5">
      Over 50,000+ users with positive vibes.
    </p>
    
    <div className="testimonial-carousel position-relative">
      <div className="testimonial-wrapper overflow-auto pb-4">
        <div className="d-flex">
          {/* Testimonial Card 1 */}
          <div className="testimonial-card me-4">
            <div className="card-body p-4">
              <p className="testimonial-text mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolore magna"
              </p>
              <div className="testimonial-author d-flex align-items-center">
                <div className="author-avatar bg-secondary rounded-circle me-3"></div>
                <div className="author-info">
                  <h6 className="mb-0 fw-bold">Paqueta Carles</h6>
                  <p className="text-muted mb-0 text-start">Influencer</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Card 2 */}
          <div className="testimonial-card me-4">
            <div className="card-body p-4">
              <p className="testimonial-text mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolore magna"
              </p>
              <div className="testimonial-author d-flex align-items-center">
                <div className="author-avatar bg-secondary rounded-circle me-3"></div>
                <div className="author-info">
                  <h6 className="mb-0 fw-bold">Zee Morpes</h6>
                  <p className="text-muted mb-0 text-start">Influencer</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Card 3 */}
          <div className="testimonial-card me-4">
            <div className="card-body p-4">
              <p className="testimonial-text mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolore magna"
              </p>
              <div className="testimonial-author d-flex align-items-center">
                <div className="author-avatar bg-secondary rounded-circle me-3"></div>
                <div className="author-info">
                  <h6 className="mb-0 fw-bold">Le Celso</h6>
                  <p className="text-muted mb-0 text-start">Influencer</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Card 4 */}
          <div className="testimonial-card">
            <div className="card-body p-4">
              <p className="testimonial-text mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolore magna"
              </p>
              <div className="testimonial-author d-flex align-items-center">
                <div className="author-avatar bg-secondary rounded-circle me-3"></div>
                <div className="author-info">
                  <h6 className="mb-0 fw-bold">Maya Johnson</h6>
                  <p className="text-muted mb-0 text-start">Influencer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button className="carousel-control prev-btn">
        <span className="carousel-arrow">&#10094;</span>
      </button>
      <button className="carousel-control next-btn">
        <span className="carousel-arrow">&#10095;</span>
      </button>
      
      {/* Pagination Indicators */}
      <div className="carousel-indicators">
        <span className="indicator active"></span>
        <span className="indicator"></span>
        <span className="indicator"></span>
      </div>
    </div>
  </div>
</section>

{/* Why This Matters Section */}
<section className="why-matters-section py-5">
  <div className="container text-center">
    <h2 className="fw-bold mb-4">Why This Matters</h2>
    <p className="mb-5">
      Every purchase is a vote. When you boycott Israeli-affiliated products, you send a message: "occupation, apartheid, and injustice will not be funded by our money."
    </p>

    <div 
      className="why-matters-bg" 
      style={{ backgroundImage: 'url(/images/protest-bg.jpeg)' }}
    >
      <div className="why-matters-content text-center">
        <div className="text-overlay">
          <h3 className="mb-3">Over $3.8 billion in U.S. aid is sent to Israel annually.</h3>
          <p className="mb-3">
            Much of this supports military operations and companies complicit in the occupation — and consumer spending fuels it further.
          </p>
          <p className="mb-0 fw-bold">
            Brands like PepsiCo, Nestlé, and McDonald's have deep financial or operational ties with Israeli interests.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="footer py-3">
  <div className="container">
    <div className="row">
      {/* Left column with logo, text, and social links */}
      <div className="col-md-6 text-start mobile-center">
        {/* Logo */}
        <img src="/images/glory-logo-white.png" alt="Glory Logo" className="footer-logo mb-2" />
        
        {/* Tagline */}
        <div className="mt-2 mb-3">
          <span className="text-light">
            Made with purpose by Glory Team. Designed for the people.
          </span>
        </div>
        
        {/* Social Links */}
        <div className="social-links mt-3">
          <p className="text-light mb-2">FOLLOW US</p>
          <div className="social-links-container">
            <a href="https://www.linkedin.com/company/gloryappp/" className="text-light me-2">LinkedIn</a>
            <span className="text-light mx-1">/</span>
            <a href="https://x.com/" className="text-light me-2 ms-1">WhatsApp</a>
            <span className="text-light mx-1">/</span>
            <a href="https://x.com/" className="text-light ms-1">Instagram</a>
            <span className="text-light mx-1">/</span>
            <a href="https://x.com/" className="text-light ms-1">Facebook</a>
          </div>
        </div>
      </div>
    
      {/* Email row */}
      <div className="col-md-6 text-md-end mobile-center">
        <div className="contact-email mt-3 mt-md-0">
          <a href="mailto:Gloryapp.pk@gmail.com" className="text-light">
            <i className="bi bi-envelope me-2"></i>Gloryapp.pk@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default GloryLandingPage;