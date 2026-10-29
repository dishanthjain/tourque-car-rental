import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, Clock3, Fuel, Gauge, MapPin, Menu, Search, ShieldCheck, SlidersHorizontal, Sparkles, Users, X, Zap } from 'lucide-react';
import './styles.css';

const cars = [
  { id: 1, name: 'Porsche 911 Carrera', brand: 'Porsche', type: 'Sports', price: 18500, fuel: 'Petrol', transmission: 'Automatic', seats: 2, year: 2024, power: '388 hp', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85', tag: 'MOST WANTED', description: 'A precision-built icon made for winding roads, open highways, and the long way home.', features: ['Sport Chrono Package', 'Premium leather interior', 'Adaptive cruise control', 'Apple CarPlay'] },
  { id: 2, name: 'Mercedes-Benz G-Class', brand: 'Mercedes', type: 'SUV', price: 22000, fuel: 'Petrol', transmission: 'Automatic', seats: 5, year: 2024, power: '416 hp', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=85', tag: 'SIGNATURE', description: 'Iconic design with commanding presence. Built for the city and beyond.', features: ['All-wheel drive', 'Panoramic sunroof', '360° camera', 'Premium sound system'] },
  { id: 3, name: 'BMW M4 Competition', brand: 'BMW', type: 'Sports', price: 14500, fuel: 'Petrol', transmission: 'Automatic', seats: 4, year: 2023, power: '503 hp', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85', tag: 'DRIVER’S PICK', description: 'Track-bred performance wrapped in a refined, everyday-ready coupe.', features: ['M Sport differential', 'Heated sport seats', 'Driving Assistant', 'Harman Kardon audio'] },
  { id: 4, name: 'Tesla Model 3', brand: 'Tesla', type: 'Electric', price: 8500, fuel: 'Electric', transmission: 'Automatic', seats: 5, year: 2024, power: '283 hp', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=85', tag: 'ELECTRIC', description: 'Quiet confidence, instant acceleration, and a cleaner way to cover more ground.', features: ['Autopilot', 'Glass roof', 'Supercharging access', 'Minimalist cabin'] },
  { id: 5, name: 'Range Rover Sport', brand: 'Land Rover', type: 'SUV', price: 16500, fuel: 'Diesel', transmission: 'Automatic', seats: 5, year: 2023, power: '345 hp', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85', tag: 'WEEKEND READY', description: 'A calm, capable luxury SUV with room for the people and plans that matter.', features: ['Terrain response', 'Meridian sound', 'Air suspension', 'Heated front seats'] },
  { id: 6, name: 'Audi A5 Sportback', brand: 'Audi', type: 'Sedan', price: 9200, fuel: 'Petrol', transmission: 'Automatic', seats: 5, year: 2023, power: '261 hp', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85', tag: 'CITY CLASSIC', description: 'Sleek lines, thoughtful comfort, and just the right amount of attitude.', features: ['Virtual cockpit', 'Quattro AWD', 'Bang & Olufsen audio', 'Parking sensors'] }
];

const money = n => `₹${n.toLocaleString('en-IN')}`;
const App = () => {
  const [query, setQuery] = useState('');
  const [brand, setBrand] = useState('All brands');
  const [fuel, setFuel] = useState('Any fuel');
  const [transmission, setTransmission] = useState('Any transmission');
  const [maxPrice, setMaxPrice] = useState(25000);
  const [selected, setSelected] = useState(null);
  const [bookingCar, setBookingCar] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [booking, setBooking] = useState({ name: '', pickup: '', returnDate: '', location: 'Bengaluru', phone: '' });
  const [contact, setContact] = useState({ name: '', email: '', message: '' });

  const filtered = useMemo(() => cars.filter(car =>
    car.name.toLowerCase().includes(query.toLowerCase()) &&
    (brand === 'All brands' || car.brand === brand) &&
    (fuel === 'Any fuel' || car.fuel === fuel) &&
    (transmission === 'Any transmission' || car.transmission === transmission) &&
    car.price <= maxPrice
  ), [query, brand, fuel, transmission, maxPrice]);

  const resetFilters = () => { setQuery(''); setBrand('All brands'); setFuel('Any fuel'); setTransmission('Any transmission'); setMaxPrice(25000); };
  const scrollToFleet = () => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
  const submitBooking = e => {
    e.preventDefault();
    setNotice(`Request received for ${bookingCar.name}. This frontend demo does not process real reservations.`);
    setBookingCar(null);
    setBooking({ name: '', pickup: '', returnDate: '', location: 'Bengaluru', phone: '' });
  };
  const submitContact = e => {
    e.preventDefault();
    setNotice('Thanks for reaching out. This demo contact form is frontend-only.');
    setContact({ name: '', email: '', message: '' });
  };

  return <div className="app-shell">
    <div className="announcement"><span className="announcement-dot" /> THE ROAD IS YOURS <span className="announcement-sep">/</span> PREMIUM CARS, NO DRAMA <ArrowUpRight size={13} /></div>
    <header className="navbar">
      <a href="#home" className="brand-mark"><span className="brand-symbol">T</span><span>TORQUE<span className="brand-period">.</span><small>DRIVE DIFFERENT</small></span></a>
      <nav className={mobileOpen ? 'nav-links nav-open' : 'nav-links'}>
        <a href="#fleet" onClick={() => setMobileOpen(false)}>The fleet</a>
        <a href="#experience" onClick={() => setMobileOpen(false)}>Our approach</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
      </nav>
      <div className="nav-right"><span className="nav-location"><MapPin size={14} /> Bengaluru, IN</span><button className="nav-cta" onClick={scrollToFleet}>Find your ride <ArrowUpRight size={15} /></button></div>
      <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grain" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> THE ART OF GETTING THERE</div>
          <h1>Not just a<br />ride. <span> A feeling.</span></h1>
          <p className="hero-description">The keys to something exceptional. Choose your machine, pick your moment, and make every mile count.</p>
          <div className="hero-actions"><button className="button-primary" onClick={scrollToFleet}>Explore the fleet <ArrowUpRight size={17} /></button><a className="text-link" href="#experience">Why TORQUE <ArrowDownRight size={16} /></a></div>
          <div className="hero-proof"><div className="avatar-stack"><span>R</span><span>A</span><span>K</span><span className="avatar-plus">+</span></div><div><div className="proof-stars">★★★★★ <span>4.9/5</span></div><small>Trusted by 2,400+ drivers</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=90" alt="Silver sports car on a dramatic road" /><div className="image-shade" /></div>
          <div className="hero-image-label"><span>01 / 06</span><span>THE WEEKEND EDIT</span></div>
          <div className="floating-card"><span className="floating-icon"><Zap size={17} /></span><div><strong>Made for the moment</strong><small>Premium cars. Personal service.</small></div><ArrowUpRight size={17} /></div>
          <div className="vertical-note">BUILT AROUND YOUR DRIVE — SINCE 2020</div>
        </div>
        <div className="hero-bottom"><span>01 — FIND YOUR DRIVE</span><span>SCROLL TO EXPLORE <ArrowDownRight size={13} /></span><span>12° 58' N&nbsp; 77° 35' E</span></div>
      </section>

      <section className="stats-strip">
        <div><strong>40<span>+</span></strong><small>Curated vehicles</small></div><div><strong>24<span>/7</span></strong><small>Roadside support</small></div><div><strong>02<span> min</span></strong><small>To find your match</small></div><div className="stats-note">GOOD CARS.<br /><span>BETTER STORIES.</span></div>
      </section>

      <section className="fleet-section section-pad" id="fleet">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> THE TORQUE COLLECTION</div><h2>Your next <span>obsession.</span></h2><p>Handpicked machines for wherever life takes you.</p></div><a className="text-link fleet-top-link" href="#fleet">View all vehicles <ArrowUpRight size={16} /></a></div>
        <div className="search-panel">
          <div className="search-field"><Search size={18} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search your dream car..." aria-label="Search cars" /><span className="search-shortcut">⌘ K</span></div>
          <button className={`filter-toggle ${filtersOpen ? 'active' : ''}`} onClick={() => setFiltersOpen(!filtersOpen)}><SlidersHorizontal size={16} /> Filters <ChevronDown size={14} /></button>
          <div className="search-count"><span>{filtered.length.toString().padStart(2, '0')}</span> VEHICLES</div>
        </div>
        {filtersOpen && <div className="filter-drawer">
          <label>Brand<select value={brand} onChange={e => setBrand(e.target.value)}><option>All brands</option>{[...new Set(cars.map(c => c.brand))].map(b => <option key={b}>{b}</option>)}</select></label>
          <label>Fuel type<select value={fuel} onChange={e => setFuel(e.target.value)}>{['Any fuel', 'Petrol', 'Diesel', 'Electric'].map(v => <option key={v}>{v}</option>)}</select></label>
          <label>Transmission<select value={transmission} onChange={e => setTransmission(e.target.value)}>{['Any transmission', 'Automatic', 'Manual'].map(v => <option key={v}>{v}</option>)}</select></label>
          <label className="price-filter">Max price <strong>{money(maxPrice)} <small>/ day</small></strong><input type="range" min="5000" max="25000" step="500" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} /></label>
          <button className="reset-button" onClick={resetFilters}>Reset all</button>
        </div>}
        <div className="car-grid">
          {filtered.map((car, index) => <article className="car-card" key={car.id} style={{ animationDelay: `${index * 70}ms` }}>
            <button className="car-image" onClick={() => setSelected(car)} aria-label={`View ${car.name} details`}><img src={car.image} alt={car.name} loading="lazy" /><span className="car-tag">{car.tag}</span><span className="car-view"><ArrowUpRight size={18} /></span></button>
            <div className="car-content"><div className="car-title-line"><div><span className="car-year">{car.year} / {car.brand.toUpperCase()}</span><h3>{car.name}</h3></div><div className="car-price"><strong>{money(car.price)}</strong><small>/ day</small></div></div>
              <div className="car-specs"><span><Fuel size={14} /> {car.fuel}</span><span><Users size={14} /> {car.seats} seats</span><span><Gauge size={14} /> {car.transmission}</span></div>
              <div className="car-card-footer"><span className="available"><span /> Available now</span><button onClick={() => setBookingCar(car)}>Book this car <ArrowUpRight size={15} /></button></div>
            </div>
          </article>)}
        </div>
        {filtered.length === 0 && <div className="empty-state"><Search size={28} /><h3>No cars found.</h3><p>Try adjusting your search or filters.</p><button className="button-primary" onClick={resetFilters}>Clear filters</button></div>}
        <div className="fleet-bottom"><span>SHOWING {filtered.length} OF {cars.length} FEATURED VEHICLES</span><button className="outline-button" onClick={() => { resetFilters(); setFiltersOpen(true); }}>Explore all filters <ArrowRight size={15} /></button></div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-image"><img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85" alt="Premium sports car detail" /><div className="image-caption">LESS LOGISTICS. MORE LIVING.</div></div>
        <div className="experience-copy"><div className="eyebrow"><span className="eyebrow-line" /> THE TORQUE DIFFERENCE</div><h2>We handle the<br />details. <span>You drive.</span></h2><p>Renting a great car should feel as good as driving one. No endless forms, no confusing fine print. Just thoughtful service from the first click to the final mile.</p>
          <div className="benefit-list"><div><span className="benefit-icon"><ShieldCheck size={20} /></span><div><strong>Confidence comes standard</strong><small>Well-maintained cars, transparent pricing, and support when you need it.</small></div></div><div><span className="benefit-icon"><Clock3 size={20} /></span><div><strong>Your time is yours</strong><small>Simple booking, flexible pickup, and a process built around your plans.</small></div></div><div><span className="benefit-icon"><Sparkles size={20} /></span><div><strong>Only the good stuff</strong><small>A carefully selected fleet that makes the journey part of the destination.</small></div></div></div>
          <a className="text-link" href="#contact">Get to know us <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="cta-section"><div className="cta-orb" /><div className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER STARTS HERE</div><h2>Take the scenic <span>route.</span></h2><p>Find the car that makes the ordinary feel like an occasion.</p><button className="button-primary" onClick={scrollToFleet}>Find your car <ArrowUpRight size={17} /></button><span className="cta-index">TORQUE / 2026</span></section>

      <section className="contact-section section-pad" id="contact"><div className="contact-intro"><div className="eyebrow"><span className="eyebrow-line" /> LET'S TALK</div><h2>Good things<br />start with <span>hello.</span></h2><p>Questions about a car, a trip, or something else? Drop us a note and our team will help you find your way.</p><div className="contact-detail"><MapPin size={17} /><div><strong>Come say hello</strong><small>Bengaluru, Karnataka, India</small></div></div><div className="contact-detail"><Clock3 size={17} /><div><strong>We're around</strong><small>Every day, 9 AM – 9 PM</small></div></div></div>
        <form className="contact-form" onSubmit={submitContact}><div className="form-topline"><span>01 / SEND A MESSAGE</span><span>WE'LL BE IN TOUCH</span></div><label>Your name<input required value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} placeholder="What should we call you?" /></label><label>Email address<input required type="email" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} placeholder="you@example.com" /></label><label>What's on your mind?<textarea required rows="3" value={contact.message} onChange={e => setContact({ ...contact, message: e.target.value })} placeholder="Tell us a little about it..." /></label><button className="button-primary" type="submit">Send your message <ArrowUpRight size={16} /></button><small className="form-disclaimer">Frontend demo only. Your message won't be sent to a server.</small></form>
      </section>
    </main>

    <footer className="footer"><div className="footer-top"><a href="#home" className="brand-mark"><span className="brand-symbol">T</span><span>TORQUE<span className="brand-period">.</span><small>DRIVE DIFFERENT</small></span></a><p>Good cars. Better stories.<br />Make the miles mean something.</p><div className="footer-links"><a href="#fleet">The fleet</a><a href="#experience">Our approach</a><a href="#contact">Contact</a></div><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© 2026 TORQUE RENTALS. ALL RIGHTS RESERVED.</span><span>MADE FOR THE OPEN ROAD <span className="orange-dot">●</span></span><span>PRIVACY&nbsp;&nbsp;&nbsp; TERMS</span></div></footer>

    {selected && <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) setSelected(null); }}><div className="detail-modal"><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close details"><X /></button><img className="detail-image" src={selected.image} alt={selected.name} /><div className="detail-body"><span className="car-year">{selected.year} / {selected.brand.toUpperCase()}</span><h2>{selected.name}</h2><p>{selected.description}</p><div className="detail-stats"><span><Fuel size={16} />{selected.fuel}</span><span><Users size={16} />{selected.seats} seats</span><span><Gauge size={16} />{selected.power}</span></div><h4>THE DETAILS</h4><div className="feature-grid">{selected.features.map(f => <span key={f}><Check size={14} />{f}</span>)}</div><div className="detail-book"><div><strong>{money(selected.price)}</strong><small> / day</small></div><button className="button-primary" onClick={() => { setBookingCar(selected); setSelected(null); }}>Book this car <ArrowUpRight size={16} /></button></div></div></div></div>}

    {bookingCar && <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) setBookingCar(null); }}><div className="booking-modal"><button className="modal-close" onClick={() => setBookingCar(null)} aria-label="Close booking form"><X /></button><div className="eyebrow"><span className="eyebrow-line" /> YOUR DRIVE STARTS HERE</div><h2>Book your <span>ride.</span></h2><div className="booking-car-summary"><img src={bookingCar.image} alt={bookingCar.name} /><div><strong>{bookingCar.name}</strong><small>{money(bookingCar.price)} / day · {bookingCar.transmission}</small></div></div><form onSubmit={submitBooking} className="booking-form"><label>Full name<input required value={booking.name} onChange={e => setBooking({ ...booking, name: e.target.value })} placeholder="Your full name" /></label><div className="form-row"><label>Pickup date<input required type="date" min={new Date().toISOString().split('T')[0]} value={booking.pickup} onChange={e => setBooking({ ...booking, pickup: e.target.value, returnDate: booking.returnDate && booking.returnDate < e.target.value ? '' : booking.returnDate })} /></label><label>Return date<input required type="date" min={booking.pickup || new Date().toISOString().split('T')[0]} value={booking.returnDate} onChange={e => setBooking({ ...booking, returnDate: e.target.value })} /></label></div><label>Pickup location<select value={booking.location} onChange={e => setBooking({ ...booking, location: e.target.value })}><option>Bengaluru</option><option>Mangaluru</option><option>Mysuru</option><option>Pickup location to be confirmed</option></select></label><label>Contact number<input required type="tel" pattern="[0-9+() -]{8,}" value={booking.phone} onChange={e => setBooking({ ...booking, phone: e.target.value })} placeholder="+91 98765 43210" /></label><button className="button-primary booking-submit" type="submit">Request booking <ArrowUpRight size={16} /></button><p className="booking-note">Demo only — this form won't create a real reservation or charge you.</p></form></div></div>}

    {notice && <div className="toast"><span className="toast-check"><Check size={16} /></span><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Dismiss notification"><X size={16} /></button></div>}
  </div>;
};

createRoot(document.getElementById('root')).render(<App />);