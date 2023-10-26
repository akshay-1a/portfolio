import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) =>{
    await loadFull(engine);
  }, [])

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles 
    className='w-full h-full absolute translate-z-0'
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fullScreen: {enable: false},
      background: {
        color: {
          value: '',
        },
      },
      fps_limit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 50,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          }
        }
      },
      particles: {
        color: {
          value: '#39FF14',
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'bottom',
          enable: true,
          outMode: {
            default: 'out',
          },
          random: false,
          speed: 3,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 2000,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'image', // Use the 'image' shape type
          image: {
            src: './leaf.png', // Set the image source
            width: 100, // Set the width of the image particles
            height: 100, // Set the height of the image particles
          },
        },
        size: {
          value: { min: 5, max: 20},
        },
      },
      detectRetina: true,
    }}
    />
  );
};

export default ParticlesContainer;
