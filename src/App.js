import React from 'react';
import { Phone, MapPin, Clock, Award, Users, Plane, Ship, Building, Star, Search, Menu } from 'lucide-react';

const BerkeleyNorthsideTravel = () => {
  const services = [
    {
      icon: <Plane style={{ width: '32px', height: '32px' }} />,
      title: "Air Fares",
      description: "Competitive rates on domestic and international flights with personalized service.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Ship style={{ width: '32px', height: '32px' }} />,
      title: "Cruises", 
      description: "Curated cruise experiences from luxury lines to adventure expeditions.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Building style={{ width: '32px', height: '32px' }} />,
      title: "Corporate Travel",
      description: "Comprehensive business travel solutions for companies of all sizes.",
      image: "https://images.unsplash.com/photo-1489410342162-b4b300a0bb15?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: <Users style={{ width: '32px', height: '32px' }} />,
      title: "Group Tours",
      description: "Expertly planned group travel experiences and custom tour packages.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Check if screen is mobile
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Header - Mobile Responsive */}
      <header style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'transparent'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: isMobile ? '16px 0' : '24px 0'
          }}>
            {/* Menu Icon */}
            <div style={{
              width: isMobile ? '32px' : '40px',
              height: isMobile ? '32px' : '40px',
              border: '1px solid white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <Menu style={{ width: isMobile ? '16px' : '20px', height: isMobile ? '16px' : '20px', color: 'white' }} />
            </div>
            
            {/* Logo - Centered, Mobile Responsive */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center'
            }}>
              <h1 style={{
                color: 'white',
                fontSize: isMobile ? '14px' : isTablet ? '18px' : '24px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                margin: 0,
                whiteSpace: isMobile ? 'nowrap' : 'normal'
              }}>
                {isMobile ? '→Berkeley Travel←' : '→Berkeley\'s Northside Travel←'}
              </h1>
            </div>
            
            {/* Search and Enquire */}
            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '16px' }}>
              <div style={{
                width: isMobile ? '32px' : '40px',
                height: isMobile ? '32px' : '40px',
                border: '1px solid white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <Search style={{ width: isMobile ? '16px' : '20px', height: isMobile ? '16px' : '20px', color: 'white' }} />
              </div>
              {!isMobile && (
                <div style={{
                  border: '1px solid white',
                  borderRadius: '9999px',
                  padding: '8px 24px',
                  cursor: 'pointer'
                }}>
                  <span style={{
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '300',
                    letterSpacing: '0.1em'
                  }}>ENQUIRE</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Navigation Bar - Mobile Responsive */}
        <div style={{
          backgroundColor: 'rgba(17, 24, 39, 0.9)'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: isMobile ? '0 16px' : '0 24px'
          }}>
            <nav style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '16px' : isTablet ? '24px' : '48px',
              padding: isMobile ? '12px 0' : '16px 0',
              flexWrap: isMobile ? 'wrap' : 'nowrap'
            }}>
              <a href="#services" style={{
                color: 'white',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                textDecoration: 'none'
              }}>SERVICES</a>
              <a href="#about" style={{
                color: 'white',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                textDecoration: 'none'
              }}>ABOUT</a>
              <a href="#contact" style={{
                color: 'white',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                textDecoration: 'none'
              }}>CONTACT</a>
              <a href="tel:510-843-1000" style={{
                color: 'white',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                textDecoration: 'none'
              }}>CALL</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile Responsive */}
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}>
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
            alt="Travel Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}></div>
        </div>
        
        {/* Hero Content - Mobile Responsive */}
        <div style={{
          position: 'relative',
          textAlign: 'center',
          maxWidth: isMobile ? '320px' : isTablet ? '600px' : '896px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 24px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '36px' : isTablet ? '60px' : '96px',
            fontWeight: '300',
            marginBottom: isMobile ? '16px' : '24px',
            lineHeight: isMobile ? '1.1' : '1.2',
            margin: isMobile ? '0 0 16px 0' : '0 0 24px 0'
          }}>
            Timeless Travel. Unlocked.
          </h2>
          <p style={{
            fontSize: isMobile ? '16px' : isTablet ? '20px' : '24px',
            fontWeight: '300',
            marginBottom: isMobile ? '32px' : '48px',
            color: '#e5e7eb',
            margin: isMobile ? '0 0 32px 0' : '0 0 48px 0',
            lineHeight: '1.4'
          }}>
            When Travel Means Business Or Pleasure — We're Here For You!
          </p>
          
          {/* CTA Button - Mobile Responsive */}
          <div style={{
            border: '1px solid white',
            display: 'inline-block'
          }}>
            <button style={{
              padding: isMobile ? '12px 24px' : '16px 48px',
              color: 'white',
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '300',
              letterSpacing: '0.1em',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              BE INSPIRED
            </button>
          </div>
        </div>
        
        {/* Trust Badges - Mobile Responsive */}
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '16px' : '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          padding: isMobile ? '0 20px' : '0'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '16px' : '32px',
            color: 'white',
            opacity: '0.8',
            flexWrap: isMobile ? 'wrap' : 'nowrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Award style={{ width: isMobile ? '12px' : '16px', height: isMobile ? '12px' : '16px', marginRight: '8px' }} />
              <span style={{ fontSize: isMobile ? '10px' : '12px', fontWeight: '300' }}>CA SELLER #1010530-10</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star style={{ width: isMobile ? '12px' : '16px', height: isMobile ? '12px' : '16px', marginRight: '8px' }} />
              <span style={{ fontSize: isMobile ? '10px' : '12px', fontWeight: '300' }}>40+ YEARS EXPERIENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Mobile Responsive */}
      <section style={{ padding: isMobile ? '48px 0' : isTablet ? '72px 0' : '96px 0', backgroundColor: 'white' }}>
        <div style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 24px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: isMobile ? '32px' : '64px'
          }}>
            <p style={{
              fontSize: isMobile ? '16px' : '18px',
              color: '#4b5563',
              fontWeight: '300',
              maxWidth: isMobile ? '100%' : '896px',
              margin: '0 auto',
              lineHeight: '1.625'
            }}>
              Berkeley's Northside Travel is an award-winning travel company specialising in tailor-made journeys, 
              business travel and family holidays. We invite you to take a look around... to learn more about us 
              as we continue our 40+ year journey in the travel business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Responsive */}
      <section id="services" style={{ padding: isMobile ? '48px 0' : isTablet ? '72px 0' : '96px 0', backgroundColor: '#f9fafb' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 24px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: isMobile ? '32px' : '64px'
          }}>
            <h3 style={{
              fontSize: isMobile ? '32px' : isTablet ? '40px' : '48px',
              fontWeight: '300',
              color: '#111827',
              marginBottom: isMobile ? '16px' : '24px',
              margin: isMobile ? '0 0 16px 0' : '0 0 24px 0'
            }}>Our Service</h3>
            <p style={{
              fontSize: isMobile ? '16px' : '20px',
              fontWeight: '300',
              color: '#4b5563',
              maxWidth: isMobile ? '100%' : '768px',
              margin: '0 auto'
            }}>
              Tailor-made itineraries, crafted by our experts
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '24px' : '48px'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{ cursor: 'pointer' }}>
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  marginBottom: isMobile ? '16px' : '24px'
                }}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: isMobile ? '200px' : '320px',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease'
                  }}></div>
                </div>
                <h4 style={{
                  fontSize: isMobile ? '20px' : '24px',
                  fontWeight: '300',
                  color: '#111827',
                  marginBottom: isMobile ? '8px' : '12px',
                  margin: isMobile ? '0 0 8px 0' : '0 0 12px 0'
                }}>{service.title}</h4>
                <p style={{
                  color: '#4b5563',
                  fontWeight: '300',
                  lineHeight: '1.625',
                  marginBottom: isMobile ? '12px' : '16px',
                  margin: isMobile ? '0 0 12px 0' : '0 0 16px 0',
                  fontSize: isMobile ? '14px' : '16px'
                }}>{service.description}</p>
                <button style={{
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: '300',
                  color: '#111827',
                  borderBottom: '1px solid #d1d5db',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'border-color 0.3s ease'
                }}>
                  find out more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Mobile Responsive */}
      <section style={{ padding: isMobile ? '48px 0' : isTablet ? '72px 0' : '96px 0', backgroundColor: 'white' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 24px'
        }}>
          {/* First Feature */}
          <div style={{
            display: isMobile ? 'block' : 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '24px' : '64px',
            alignItems: 'center',
            marginBottom: isMobile ? '48px' : '80px'
          }}>
            <div style={{ order: isMobile ? 2 : 1 }}>
              <img 
                src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Berkeley Office"
                style={{
                  width: '100%',
                  height: isMobile ? '200px' : '384px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
            <div style={{ order: isMobile ? 1 : 2 }}>
              <h3 style={{
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: '300',
                color: '#111827',
                marginBottom: isMobile ? '16px' : '24px',
                margin: isMobile ? '0 0 16px 0' : '0 0 24px 0'
              }}>Established Since 1980</h3>
              <p style={{
                color: '#4b5563',
                fontWeight: '300',
                lineHeight: '1.625',
                marginBottom: isMobile ? '16px' : '24px',
                margin: isMobile ? '0 0 16px 0' : '0 0 24px 0',
                fontSize: isMobile ? '14px' : '16px'
              }}>
                Over 40 years of experience serving the Berkeley community and beyond. Our travel agency 
                is conveniently located on Euclid Avenue, just steps from the north gate of the University 
                of California at Berkeley.
              </p>
              <button style={{
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '300',
                color: '#111827',
                borderBottom: '1px solid #d1d5db',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'border-color 0.3s ease'
              }}>
                find out more
              </button>
            </div>
          </div>
          
          {/* Second Feature */}
          <div style={{
            display: isMobile ? 'block' : 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '24px' : '64px',
            alignItems: 'center',
            marginBottom: isMobile ? '48px' : '80px'
          }}>
            <div style={{ order: isMobile ? 2 : 2 }}>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Personal Service"
                style={{
                  width: '100%',
                  height: isMobile ? '200px' : '384px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
            <div style={{ order: isMobile ? 1 : 1 }}>
              <h3 style={{
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: '300',
                color: '#111827',
                marginBottom: isMobile ? '16px' : '24px',
                margin: isMobile ? '0 0 16px 0' : '0 0 24px 0'
              }}>Personal Service</h3>
              <p style={{
                color: '#4b5563',
                fontWeight: '300',
                lineHeight: '1.625',
                marginBottom: isMobile ? '16px' : '24px',
                margin: isMobile ? '0 0 16px 0' : '0 0 24px 0',
                fontSize: isMobile ? '14px' : '16px'
              }}>
                We are privately owned by people who care. Our business is built on relationships and we treat 
                our clients like family. Personal service, genuine care and attention to detail are at the heart 
                of everything we do.
              </p>
              <button style={{
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '300',
                color: '#111827',
                borderBottom: '1px solid #d1d5db',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'border-color 0.3s ease'
              }}>
                find out more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile Responsive */}
      <section id="contact" style={{ padding: isMobile ? '48px 0' : isTablet ? '72px 0' : '96px 0', backgroundColor: '#111827', color: 'white' }}>
        <div style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 24px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: isMobile ? '18px' : isTablet ? '20px' : '24px',
            fontWeight: '300',
            marginBottom: isMobile ? '32px' : '64px',
            color: '#d1d5db',
            maxWidth: isMobile ? '100%' : '896px',
            margin: isMobile ? '0 auto 32px auto' : '0 auto 64px auto',
            lineHeight: '1.625'
          }}>
            We believe that a truly unforgettable trip is one that will be talked about for years to come. 
            From business adventures to family escapes, we're here to create you a trip of a lifetime.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? '24px' : '48px',
            marginBottom: isMobile ? '32px' : '64px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <MapPin style={{ width: isMobile ? '24px' : '32px', height: isMobile ? '24px' : '32px', color: '#fbbf24', margin: '0 auto 16px auto' }} />
              <h4 style={{
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: '300',
                marginBottom: '8px',
                margin: '0 0 8px 0'
              }}>Visit Our Office</h4>
              <p style={{
                color: '#9ca3af',
                fontWeight: '300',
                margin: 0,
                fontSize: isMobile ? '14px' : '16px'
              }}>
                1824 Euclid Avenue<br />
                Berkeley, California<br />
                Near UC Berkeley North Gate
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <Phone style={{ width: isMobile ? '24px' : '32px', height: isMobile ? '24px' : '32px', color: '#fbbf24', margin: '0 auto 16px auto' }} />
              <h4 style={{
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: '300',
                marginBottom: '8px',
                margin: '0 0 8px 0'
              }}>Call Us Today</h4>
              <p style={{
                color: '#9ca3af',
                fontWeight: '300',
                margin: 0,
                fontSize: isMobile ? '14px' : '16px'
              }}>
                <a href="tel:510-843-1000" style={{ color: '#9ca3af', textDecoration: 'none' }}>510-843-1000</a><br />
                Fax: 510-843-7537
              </p>
            </div>
            
            <div style={{ textAlign: 'center', gridColumn: isMobile ? '1' : isTablet ? '1 / 3' : 'auto' }}>
              <Clock style={{ width: isMobile ? '24px' : '32px', height: isMobile ? '24px' : '32px', color: '#fbbf24', margin: '0 auto 16px auto' }} />
              <h4 style={{
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: '300',
                marginBottom: '8px',
                margin: '0 0 8px 0'
              }}>Office Hours</h4>
              <p style={{
                color: '#9ca3af',
                fontWeight: '300',
                margin: 0,
                fontSize: isMobile ? '14px' : '16px'
              }}>
                Mon-Fri: 9:00 AM - 5:30 PM<br />
                Saturday: 1:00 PM - 5:00 PM
              </p>
            </div>
          </div>
          
          <div style={{
            border: '1px solid white',
            display: 'inline-block'
          }}>
            <button 
              onClick={() => window.location.href = 'mailto:bestbuys@berkeley4travel.com'}
              style={{
                padding: isMobile ? '12px 24px' : '16px 48px',
                color: 'white',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {isMobile ? 'START PLANNING' : 'START PLANNING YOUR JOURNEY'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Responsive */}
      <footer style={{ backgroundColor: 'black', color: 'white', padding: isMobile ? '24px 0' : '32px 0' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 24px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '300',
              color: '#9ca3af',
              marginBottom: isMobile ? '12px' : '16px',
              margin: isMobile ? '0 0 12px 0' : '0 0 16px 0'
            }}>
              California Seller of Travel Certificate No. 1010530-10
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '16px' : '32px',
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '300',
              flexWrap: 'wrap'
            }}>
              <a href="tel:510-843-1000" style={{ color: 'white', textDecoration: 'none' }}>510-843-1000</a>
              <a href="mailto:bestbuys@berkeley4travel.com" style={{ color: 'white', textDecoration: 'none', wordBreak: 'break-all' }}>
                {isMobile ? 'Email Us' : 'bestbuys@berkeley4travel.com'}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BerkeleyNorthsideTravel;