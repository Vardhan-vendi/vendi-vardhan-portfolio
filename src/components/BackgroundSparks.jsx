import { useEffect, useRef } from 'react';

export default function BackgroundSparks() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates to attract/repel particles
    const mouse = { x: null, y: null, radius: 180 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        // Stagger spawn times so they don't all start at bottom
        this.y = Math.random() * height;
        this.twinkleAngle = Math.random() * Math.PI * 2;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 10;
        this.size = Math.random() * 2.2 + 0.6; // Small spark points
        this.speedX = Math.random() * 0.4 - 0.2; // Slow horizontal drift
        this.speedY = Math.random() * -0.5 - 0.15; // Slow float upwards
        this.twinkleAngle = Math.random() * Math.PI * 2;
        
        // Dynamic spark color palette: Light Ice Blue, White, or Glowing Crimson
        const colorRand = Math.random();
        if (colorRand < 0.45) {
          // Ice/Sky Blue Spark
          this.color = `rgba(180, 220, 255, ${Math.random() * 0.5 + 0.3})`;
          this.glow = 'rgba(100, 180, 255, 0.7)';
        } else if (colorRand < 0.7) {
          // Soft White Spark
          this.color = `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.3})`;
          this.glow = 'rgba(255, 255, 255, 0.8)';
        } else {
          // Rich Gorgeous Crimson Spark!
          this.color = `rgba(220, 20, 60, ${Math.random() * 0.7 + 0.3})`;
          this.glow = 'rgba(230, 0, 50, 0.9)';
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.twinkleAngle += 0.03; // Slowly increment angle for smooth twinkling

        // Reset if goes off screen
        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset();
        }

        // Soft mouse reaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Push gently away
            this.x -= (dx / distance) * force * 1.2;
            this.y -= (dy / distance) * force * 1.2;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        // Dynamic size calculation using Math.sin for premium shimmering effect
        const sizeTwinkle = Math.max(0.3, this.size + Math.sin(this.twinkleAngle) * 0.4);
        ctx.arc(this.x, this.y, sizeTwinkle, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = sizeTwinkle * 4;
        ctx.shadowColor = this.glow;
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles matching screen size density
    const particleCount = Math.min(90, Math.floor((width * height) / 18000));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="background-sparks-canvas no-print"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.9,
      }}
    />
  );
}
