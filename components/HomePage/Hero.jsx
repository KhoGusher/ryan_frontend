"use client"
import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroCarousel = () => {
  const slides = [
    {
      image: '../assets/img/slide/slide-1.jpg',
      title: 'Trusted Growth Partners',
      description: 'Rayen Ltd stands by your side to foster sustainable and ethical growth. With our management and advisory expertise, we empower businesses to achieve lasting impact in their industries and communities.',
      button: { text: 'Read More', link: '/services' },
    },
    {
      image: '../assets/img/slide/slide-2.jpg',
      title: 'Strategic Financial Solutions',
      description: 'From venture capital to debt financing, Rayen Ltd provides tailored financial services that fuel innovation and expansion. Our dedicated team ensures each investment is thoroughly researched, strategically managed, and positioned for long-term success.',
      button: {  text: 'Contact Us', link: '/contact' },
    },
    {
      image: '../assets/img/slide/slide-3.jpg',
      title: 'Transforming Visions into Reality',
      description: 'At Rayen Ltd, we believe in turning potential into progress. Through private equity support, operational redesign, and financial restructuring, we help businesses unlock value and lead with confidence in today’s competitive landscape.',
      button: { text: 'Our Services', link: '/services' },
    },
  ];

  return (
    <section id="hero">
      <Carousel
        fade
        interval={5000}
        controls={true}
        indicators={true} 
        pause={false}
      >
        {slides.map((slide, index) => (
          <Carousel.Item
            key={index}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              height: '100vh',
              backgroundPosition: 'center',
            }}
          >
            <div className="carousel-container d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
              <div className="carousel-content text-center">
                <h2 style={{ color: 'steelblue' }}>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link href={slide.button.link} style={{ background: 'steelblue' }}  className="btn btn-primary">
                  {slide.button.text}
                </Link>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
