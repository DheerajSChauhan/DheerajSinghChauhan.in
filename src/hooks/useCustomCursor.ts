import { useEffect } from 'react';

export const useCustomCursor = () => {
  useEffect(() => {
    // Create main cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // Create cursor trail
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    document.body.appendChild(cursorTrail);

    // Create cursor glow
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    // Create spore particles
    const sporeParticles: HTMLElement[] = [];
    for (let i = 0; i < 3; i++) {
      const spore = document.createElement('div');
      spore.className = 'cursor-spore';
      spore.style.animationDelay = `${i * 0.3}s`;
      document.body.appendChild(spore);
      sporeParticles.push(spore);
    }

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    // Ripple effect function
    const createRipple = (x: number, y: number, isInfected = false) => {
      // Create multiple ripple rings for more dramatic effect
      for (let i = 0; i < 3; i++) {
        const ripple = document.createElement('div');
        ripple.className = `cursor-ripple ${isInfected ? 'infected' : ''}`;
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.animationDelay = `${i * 0.1}s`;
        document.body.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => {
          if (document.body.contains(ripple)) {
            document.body.removeChild(ripple);
          }
        }, 1000 + (i * 100));
      }

      // Create energy burst for infected state
      if (isInfected) {
        const burst = document.createElement('div');
        burst.className = 'cursor-energy-burst';
        burst.style.left = x + 'px';
        burst.style.top = y + 'px';
        document.body.appendChild(burst);

        setTimeout(() => {
          if (document.body.contains(burst)) {
            document.body.removeChild(burst);
          }
        }, 800);
      }
    };

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Main cursor follows immediately
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
      
      // Glow follows with slight delay
      cursorGlow.style.left = mouseX + 'px';
      cursorGlow.style.top = mouseY + 'px';
    };

    // Smooth trail animation
    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;
      
      cursorTrail.style.left = trailX + 'px';
      cursorTrail.style.top = trailY + 'px';
      
      // Animate spore particles with organic movement
      sporeParticles.forEach((spore, index) => {
        const delay = (index + 1) * 0.05;
        const sporeX = trailX + Math.sin(Date.now() * 0.001 + index) * 8;
        const sporeY = trailY + Math.cos(Date.now() * 0.001 + index) * 8;
        
        setTimeout(() => {
          spore.style.left = sporeX + 'px';
          spore.style.top = sporeY + 'px';
        }, delay * 1000);
      });
      
      requestAnimationFrame(animateTrail);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      cursor.classList.add('hovering');
      cursorTrail.classList.add('hovering');
      cursorGlow.classList.add('hovering');
      
      // Add infected glow for buttons
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        cursor.classList.add('infected');
        cursorGlow.classList.add('infected');
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hovering', 'infected');
      cursorTrail.classList.remove('hovering');
      cursorGlow.classList.remove('hovering', 'infected');
    };

    const handleMouseDown = () => {
      cursor.classList.add('clicking');
      cursorGlow.classList.add('clicking');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('clicking');
      cursorGlow.classList.remove('clicking');
    };

    const handleClick = (e: MouseEvent) => {
      const isInfected = cursor.classList.contains('infected');
      createRipple(e.clientX, e.clientY, isInfected);
    };

    // Event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('click', handleClick);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Start trail animation
    animateTrail();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('click', handleClick);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      // Remove all cursor elements
      [cursor, cursorTrail, cursorGlow, ...sporeParticles].forEach(element => {
        if (document.body.contains(element)) {
          document.body.removeChild(element);
        }
      });
    };
  }, []);
};