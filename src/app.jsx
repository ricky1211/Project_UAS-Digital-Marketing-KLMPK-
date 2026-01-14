import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, FileText, CheckCircle, Star, Menu, X, ArrowRight, Zap, Target, BarChart } from 'lucide-react';

export default function SEOLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Riset Keyword Mendalam",
      description: "Analisis keyword kompetitor dan peluang ranking di halaman pertama Google"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "SEO Audit Lengkap",
      description: "Audit teknis, on-page, dan off-page SEO untuk performa maksimal"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Optimasi Konversi",
      description: "Landing page yang dioptimasi untuk mengubah visitor menjadi customer"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Tracking performa dan laporan bulanan untuk pantau progres bisnis Anda"
    }
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      company: "E-Commerce Fashion",
      text: "Traffic organik naik 300% dalam 3 bulan! ROI sangat menguntungkan.",
      rating: 5
    },
    {
      name: "Sarah Wijaya",
      company: "Digital Agency",
      text: "Profesional dan hasil nyata. Ranking keyword utama kami masuk halaman 1.",
      rating: 5
    },
    {
      name: "Ahmad Rizki",
      company: "Tech Startup",
      text: "Landing page yang powerful. Conversion rate meningkat drastis!",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "2.500.000",
      features: [
        "Landing Page Responsif",
        "SEO Audit Dasar",
        "10 Keyword Research",
        "On-Page Optimization",
        "Google Analytics Setup",
        "1 Bulan Support"
      ]
    },
    {
      name: "Professional",
      price: "5.000.000",
      features: [
        "Landing Page + 3 Halaman",
        "SEO Audit Komprehensif",
        "30 Keyword Research",
        "Technical SEO",
        "Content Optimization",
        "Backlink Strategy",
        "3 Bulan Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "10.000.000",
      features: [
        "Website Full Custom",
        "SEO Audit + Competitor Analysis",
        "100+ Keyword Research",
        "Advanced Technical SEO",
        "Monthly Content Plan",
        "Link Building Campaign",
        "6 Bulan Support + Maintenance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Zap className="w-8 h-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold">SEO<span className="text-purple-400">Master</span></span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-purple-400 transition">Fitur</a>
              <a href="#pricing" className="hover:text-purple-400 transition">Harga</a>
              <a href="#testimonials" className="hover:text-purple-400 transition">Testimoni</a>
              <a href="#contact" className="hover:text-purple-400 transition">Kontak</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 hover:bg-purple-900/50 rounded">Fitur</a>
              <a href="#pricing" className="block px-3 py-2 hover:bg-purple-900/50 rounded">Harga</a>
              <a href="#testimonials" className="block px-3 py-2 hover:bg-purple-900/50 rounded">Testimoni</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-purple-900/50 rounded">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-semibold">
            🚀 Tingkatkan Ranking Google Anda
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Landing Page & SEO
            <br />
            Yang Menghasilkan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Dapatkan website profesional dengan optimasi SEO lengkap. Tingkatkan traffic organik hingga 300% dan konversi penjualan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition transform hover:scale-105 flex items-center justify-center">
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#pricing" className="border-2 border-purple-400 hover:bg-purple-400/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition">
              Lihat Paket
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-purple-400">300%</div>
              <div className="text-gray-400 mt-2">Peningkatan Traffic</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400">50+</div>
              <div className="text-gray-400 mt-2">Klien Puas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-400 mt-2">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-400">Solusi lengkap untuk dominasi digital Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-purple-900/30 p-6 rounded-2xl hover:transform hover:scale-105 transition border border-purple-500/20">
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Audit Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">SEO Audit Komprehensif</h2>
              <p className="text-gray-300 mb-6">
                Kami melakukan analisis mendalam untuk menemukan peluang SEO tersembunyi yang kompetitor Anda lewatkan.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Technical SEO (kecepatan, mobile-friendly, struktur data)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>On-Page Optimization (meta tags, heading, internal linking)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Competitor Analysis & Gap Identification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Keyword Opportunities dengan search volume tinggi</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-purple-900/30 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4">Contoh Keyword Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded">
                  <span>jasa seo jakarta</span>
                  <span className="text-green-400 font-semibold">2,400/mo</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded">
                  <span>landing page murah</span>
                  <span className="text-green-400 font-semibold">1,900/mo</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded">
                  <span>optimasi website</span>
                  <span className="text-green-400 font-semibold">1,600/mo</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded">
                  <span>digital marketing agency</span>
                  <span className="text-green-400 font-semibold">3,200/mo</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">* Search volume bulanan rata-rata</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Paket Harga</h2>
            <p className="text-xl text-gray-400">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800 to-purple-900/30 p-8 rounded-2xl border ${plan.popular ? 'border-purple-500 scale-105' : 'border-purple-500/20'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Paling Populer
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Rp {plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-3 rounded-full font-semibold transition ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'border-2 border-purple-400 hover:bg-purple-400/10'}`}>
                  Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimoni Klien</h2>
            <p className="text-xl text-gray-400">Apa kata mereka yang sudah merasakan hasilnya</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-purple-900/30 p-6 rounded-2xl border border-purple-500/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Tingkatkan Bisnis Anda?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Konsultasi gratis untuk strategi SEO dan landing page yang tepat untuk bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition transform hover:scale-105 inline-flex items-center justify-center">
              WhatsApp Sekarang
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="mailto:info@seomaster.com" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition">
              Email Kami
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-purple-400" />
                <span className="ml-2 text-xl font-bold">SEO<span className="text-purple-400">Master</span></span>
              </div>
              <p className="text-gray-400">Solusi SEO dan Landing Page terpercaya untuk bisnis Anda.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>SEO Optimization</li>
                <li>Landing Page</li>
                <li>Keyword Research</li>
                <li>Content Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Karir</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Jakarta, Indonesia</li>
                <li>+62 812-3456-7890</li>
                <li>info@seomaster.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 SEOMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}