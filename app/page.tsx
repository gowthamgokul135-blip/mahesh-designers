import Image from 'next/image';

export default function Home() {
  // Navigation links configured with matching section IDs
  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT US', id: 'about' },
    { label: 'COLLECTIONS', id: 'collections' },
    { label: 'SERVICES', id: 'services' },
    { label: 'GALLERY', id: 'gallery' },
    { label: 'CONTACT', id: 'contact' }
  ];

  const categories = [
    { name: 'Bridal Wear', icon: '👗' },
    { name: 'Blouses', icon: '👚' },
    { name: 'Lehenga', icon: '💃' },
    { name: 'Aari Work', icon: '✨' },
    { name: 'Custom Design', icon: '✂️' },
    { name: 'Kids Wear', icon: '👶' }
  ];

  const collections = [
    { title: 'Bridal Wear', img: '/assets/bride_red.jpg' },
    { title: 'Purple Silk Blouse', img: '/assets/blouse_purple.jpg' },
    { title: 'Designer Lehenga', img: '/assets/lehenga_white.jpg' },
    { title: 'Aari Work Back Neck', img: '/assets/blouse_red.jpg' }
  ];

  const happyBrides = [
    { name: 'Bride In Pink', img: '/assets/bride_pink.jpg' },
    { name: 'Traditional Red Bride', img: '/assets/bride_red.jpg' }
  ];

  return (
    // Explicit scroll behavior configuration at root
    <div id="home" className="bg-[#FFFDF9] min-h-screen font-serif text-gray-800 antialiased scroll-smooth">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center bg-[#1A1A1A] text-white px-6 py-4 sticky top-0 z-50 shadow-md">
        <div className="font-bold tracking-wider text-base">_mahesh_designers_</div>
        <ul className="hidden md:flex gap-6 text-[11px] font-semibold tracking-widest text-gray-300">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="hover:text-[#C5A059] cursor-pointer transition-colors duration-200">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="bg-[#C5A059] text-[#2A0812] font-bold text-[11px] px-4 py-2 rounded shadow hover:bg-opacity-90 transition inline-block">
          Book Appointment
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-[#0D1B2A] text-white min-h-[80vh] flex flex-col md:flex-row items-center px-6 md:px-16 relative overflow-hidden">
        <div className="flex-1 py-12 md:py-0 z-10">
          <p className="text-[#C5A059] tracking-widest text-xs font-semibold mb-2">MAHESH DESIGNERS</p>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-4">
            Designing Your <span className="italic text-[#C5A059] font-normal">Dreams</span>
          </h1>
          <p className="text-[#E0C99B] text-base mb-1">Bridal Wear • Blouse • Lehenga • Aari Work</p>
          <p className="text-gray-400 text-xs mb-8">Customised Fits • Handpicked Fabrics</p>
          <a href="#collections" className="bg-[#C5A059] text-[#2A0812] font-bold text-xs px-6 py-3 shadow-lg hover:scale-105 transition-transform inline-block">
            Explore Collection
          </a>
        </div>

        <div className="flex-1 flex justify-center w-full min-h-[400px] relative h-[75vh]">
          <Image 
            src="/assets/hero_bride.jpg" 
            alt="Hero Bride" 
            fill
            className="object-contain" 
            priority
          />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="flex flex-wrap justify-center gap-6 md:gap-12 py-12 px-4 bg-white shadow-sm scroll-mt-20">
        {categories.map((cat, i) => (
          <div key={i} className="text-center cursor-pointer group">
            <div className="w-16 h-16 border border-dashed border-[#C5A059] rounded-full flex items-center justify-center text-xl bg-white group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-300">
              {cat.icon}
            </div>
            <p className="text-[11px] font-semibold mt-2 text-gray-700 tracking-wide">{cat.name}</p>
          </div>
        ))}
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-16 px-6 md:px-20 text-center bg-white scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl text-[#2A0812] font-normal mb-4">About Us</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Welcome to Mahesh Designers. We specialize in creating exquisite bridal wear, customized blouses, lehengas, and intricate Aari embroidery. Our designs combine handpicked premium fabrics with custom fits to bring your dream outfit to life.
          </p>
        </div>
      </section>

      {/* OUR COLLECTIONS SECTION */}
      <section id="collections" className="bg-[#FCF8F2] py-16 px-6 text-center scroll-mt-20">
        <h2 className="text-3xl text-[#2A0812] font-normal mb-1">Our Collections</h2>
        <p className="text-xs italic text-gray-500 mb-10">Exquisite designs crafted with love and perfection</p>

        <div className="flex flex-wrap justify-center gap-6">
          {collections.map((col, i) => (
            <div key={i} className="bg-white rounded-md overflow-hidden w-[240px] shadow-sm hover:-translate-y-1 transition-transform duration-300 text-left">
              <div className="relative h-[300px] w-full bg-gray-100">
                <Image src={col.img} alt={col.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xs font-semibold text-[#2A0812] mb-1">{col.title}</h3>
                <span className="text-[11px] font-bold text-[#C5A059] cursor-pointer hover:underline">View Collection →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-16 px-6 text-center bg-white scroll-mt-20">
        <h2 className="text-3xl text-[#2A0812] font-normal mb-1">Our Happy Brides</h2>
        <p className="text-xs italic text-gray-500 mb-10">Real smiles from our real brides</p>

        <div className="flex flex-wrap justify-center gap-8">
          {happyBrides.map((bride, i) => (
            <div key={i} className="relative w-[280px] h-[350px] rounded-lg overflow-hidden shadow-md group">
              <Image src={bride.img} alt={bride.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center p-4">
                <p className="text-white text-xs font-medium tracking-wide">{bride.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / FOOTER SECTION */}
      <section id="contact" className="bg-[#1A1A1A] text-white py-16 px-6 md:px-20 scroll-mt-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-xl font-bold text-[#C5A059] mb-3">_mahesh_designers_</h3>
            <p className="text-xs text-gray-400 max-w-sm">
              Tirupur, Tamil Nadu, India <br />
              maheshdesigners@gmail.com
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider mb-3 text-[#C5A059]">Working Hours</h4>
            <p className="text-xs text-gray-300">Mon - Sat: 10:00 AM - 8:30 PM</p>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/911234567890" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl z-50 text-xl hover:scale-110 transition-transform"
      >
        💬
      </a>

    </div>
  );
}