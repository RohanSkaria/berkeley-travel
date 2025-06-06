import React from 'react';
import { Phone, Mail, MapPin, Clock, Award, Users, Plane, Ship, Building, Star, Search, Menu } from 'lucide-react';

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

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Header - Matching Nelson Travel's minimal design */}
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
          padding: '0 24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 0'
          }}>
            {/* Menu Icon */}
            <div style={{
              width: '40px',
              height: '40px',
              border: '1px solid white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <Menu style={{ width: '20px', height: '20px', color: 'white' }} />
            </div>
            
            {/* Logo - Centered like Nelson Travel */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              <h1 style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                margin: 0
              }}>
                →Berkeley's Northside Travel←
              </h1>
            </div>
            
            {/* Search and Enquire */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '1px solid white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <Search style={{ width: '20px', height: '20px', color: 'white' }} />
              </div>
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
            </div>
          </div>
        </div>
        
        {/* Navigation Bar - Dark like Nelson Travel */}
        <div style={{
          backgroundColor: 'rgba(17, 24, 39, 0.9)'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <nav style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '48px',
              padding: '16px 0'
            }}>
              <a href="#services" style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                textDecoration: 'none'
              }}>SERVICES</a>
              <a href="#about" style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                textDecoration: 'none'
              }}>ABOUT US</a>
              <a href="#contact" style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                textDecoration: 'none'
              }}>CONTACT</a>
              <a href="tel:510-843-1000" style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                textDecoration: 'none'
              }}>CALL NOW</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Full screen like Nelson Travel */}
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
        
        {/* Hero Content */}
        <div style={{
          position: 'relative',
          textAlign: 'center',
          maxWidth: '896px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <h2 style={{
            fontSize: '96px',
            fontWeight: '300',
            marginBottom: '24px',
            lineHeight: '1.2',
            margin: '0 0 24px 0'
          }}>
            Timeless Travel. Unlocked.
          </h2>
          <p style={{
            fontSize: '24px',
            fontWeight: '300',
            marginBottom: '48px',
            color: '#e5e7eb',
            margin: '0 0 48px 0'
          }}>
            When Travel Means Business Or Pleasure — We're Here For You!
          </p>
          
          {/* CTA Button - Matching Nelson Travel style */}
          <div style={{
            border: '1px solid white',
            display: 'inline-block'
          }}>
            <button style={{
              padding: '16px 48px',
              color: 'white',
              fontSize: '14px',
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
        
        {/* Trust Badges at bottom - Like Nelson Travel */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            color: 'white',
            opacity: '0.8'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Award style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              <span style={{ fontSize: '12px', fontWeight: '300' }}>CA SELLER #1010530-10</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              <span style={{ fontSize: '12px', fontWeight: '300' }}>40+ YEARS EXPERIENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Matching Nelson Travel layout */}
      <section style={{ padding: '96px 0', backgroundColor: 'white' }}>
        <div style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            <p style={{
              fontSize: '18px',
              color: '#4b5563',
              fontWeight: '300',
              maxWidth: '896px',
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

      {/* Services Section - Card layout like Nelson Travel */}
      <section id="services" style={{ padding: '96px 0', backgroundColor: '#f9fafb' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            <h3 style={{
              fontSize: '48px',
              fontWeight: '300',
              color: '#111827',
              marginBottom: '24px',
              margin: '0 0 24px 0'
            }}>Our Service</h3>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              color: '#4b5563',
              maxWidth: '768px',
              margin: '0 auto'
            }}>
              Tailor-made itineraries, crafted by our experts
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{ cursor: 'pointer' }}>
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  marginBottom: '24px'
                }}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '320px',
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
                  fontSize: '24px',
                  fontWeight: '300',
                  color: '#111827',
                  marginBottom: '12px',
                  margin: '0 0 12px 0'
                }}>{service.title}</h4>
                <p style={{
                  color: '#4b5563',
                  fontWeight: '300',
                  lineHeight: '1.625',
                  marginBottom: '16px',
                  margin: '0 0 16px 0'
                }}>{service.description}</p>
                <a href="#" style={{
                  fontSize: '14px',
                  fontWeight: '300',
                  color: '#111827',
                  borderBottom: '1px solid #d1d5db',
                  textDecoration: 'none',
                  transition: 'border-color 0.3s ease'
                }}>
                  find out more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Alternating layout */}
      <section style={{ padding: '96px 0', backgroundColor: 'white' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
            marginBottom: '80px'
          }}>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Berkeley Office"
                style={{
                  width: '100%',
                  height: '384px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
            <div>
              <h3 style={{
                fontSize: '32px',
                fontWeight: '300',
                color: '#111827',
                marginBottom: '24px',
                margin: '0 0 24px 0'
              }}>Established Since 1980</h3>
              <p style={{
                color: '#4b5563',
                fontWeight: '300',
                lineHeight: '1.625',
                marginBottom: '24px',
                margin: '0 0 24px 0'
              }}>
                Over 40 years of experience serving the Berkeley community and beyond. Our travel agency 
                is conveniently located on Euclid Avenue, just steps from the north gate of the University 
                of California at Berkeley.
              </p>
              <a href="#about" style={{
                fontSize: '14px',
                fontWeight: '300',
                color: '#111827',
                borderBottom: '1px solid #d1d5db',
                textDecoration: 'none',
                transition: 'border-color 0.3s ease'
              }}>
                find out more
              </a>
            </div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
            marginBottom: '80px'
          }}>
            <div style={{ order: 2 }}>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Personal Service"
                style={{
                  width: '100%',
                  height: '384px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
            <div style={{ order: 1 }}>
              <h3 style={{
                fontSize: '32px',
                fontWeight: '300',
                color: '#111827',
                marginBottom: '24px',
                margin: '0 0 24px 0'
              }}>Personal Service</h3>
              <p style={{
                color: '#4b5563',
                fontWeight: '300',
                lineHeight: '1.625',
                marginBottom: '24px',
                margin: '0 0 24px 0'
              }}>
                We are privately owned by people who care. Our business is built on relationships and we treat 
                our clients like family. Personal service, genuine care and attention to detail are at the heart 
                of everything we do.
              </p>
              <a href="#about" style={{
                fontSize: '14px',
                fontWeight: '300',
                color: '#111827',
                borderBottom: '1px solid #d1d5db',
                textDecoration: 'none',
                transition: 'border-color 0.3s ease'
              }}>
                find out more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Elegant like Nelson Travel */}
      <section id="contact" style={{ padding: '96px 0', backgroundColor: '#111827', color: 'white' }}>
        <div style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '24px',
            fontWeight: '300',
            marginBottom: '64px',
            color: '#d1d5db',
            maxWidth: '896px',
            margin: '0 auto 64px auto',
            lineHeight: '1.625'
          }}>
            We believe that a truly unforgettable trip is one that will be talked about for years to come. 
            From business adventures to family escapes, we're here to create you a trip of a lifetime.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
            marginBottom: '64px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <MapPin style={{ width: '32px', height: '32px', color: '#fbbf24', margin: '0 auto 16px auto' }} />
              <h4 style={{
                fontSize: '18px',
                fontWeight: '300',
                marginBottom: '8px',
                margin: '0 0 8px 0'
              }}>Visit Our Office</h4>
              <p style={{
                color: '#9ca3af',
                fontWeight: '300',
                margin: 0
              }}>
                1824 Euclid Avenue<br />
                Berkeley, California<br />
                Near UC Berkeley North Gate
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <Phone style={{ width: '32px', height: '32px', color: '#fbbf24', margin: '0 auto 16px auto' }} />
              <h4 style={{
                fontSize: '18px',
                fontWeight: '300',
                marginBottom: '8px',
                margin: '0 0 8px 0'
              }}>Call Us Today</h4>
              <p style={{
                color: '#9ca3af',
                fontWeight: '300',
                margin: 0
              }}>
                <a href="tel:510-843-1000" style={{ color: '#9ca3af', textDecoration: 'none' }}>510-843-1000</a><br />
                Fax: 510-843-7537
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <Clock style={{ width: '32px', height: '32px', color: '#fbbf24', margin: '0 auto 16px auto' }} />
              <h4 style={{
                fontSize: '18px',
                fontWeight: '300',
                marginBottom: '8px',
                margin: '0 0 8px 0'
              }}>Office Hours</h4>
              <p style={{
                color: '#9ca3af',
                fontWeight: '300',
                margin: 0
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
                padding: '16px 48px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              START PLANNING YOUR JOURNEY
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Minimal like Nelson Travel */}
      <footer style={{ backgroundColor: 'black', color: 'white', padding: '32px 0' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '14px',
              fontWeight: '300',
              color: '#9ca3af',
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>
              California Seller of Travel Certificate No. 1010530-10
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              fontSize: '14px',
              fontWeight: '300'
            }}>
              <a href="tel:510-843-1000" style={{ color: 'white', textDecoration: 'none' }}>510-843-1000</a>
              <a href="mailto:bestbuys@berkeley4travel.com" style={{ color: 'white', textDecoration: 'none' }}>bestbuys@berkeley4travel.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BerkeleyNorthsideTravel;