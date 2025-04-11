
import { useEffect, useRef } from "react";
import p5Types from "p5";
import Sketch from "react-p5";

interface DynamicBackgroundProps {
  className?: string;
}

export default function DynamicBackground({ className }: DynamicBackgroundProps) {
  const particlesRef = useRef<any[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  class Particle {
    p5: p5Types;
    pos: p5Types.Vector;
    vel: p5Types.Vector;
    acc: p5Types.Vector;
    color: string;
    size: number;
    maxSpeed: number;

    constructor(p5: p5Types, x: number, y: number) {
      this.p5 = p5;
      this.pos = p5.createVector(x, y);
      this.vel = p5.createVector(p5.random(-0.5, 0.5), p5.random(-0.5, 0.5));
      this.acc = p5.createVector(0, 0);
      this.color = p5.random() > 0.7 ? '#6E56CF' : '#1EEBE7';
      this.size = p5.random(2, 5);
      this.maxSpeed = p5.random(0.5, 2);
    }

    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
      this.acc.mult(0);
      
      this.checkEdges();
    }

    checkEdges() {
      if (this.pos.x > this.p5.width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = this.p5.width;
      if (this.pos.y > this.p5.height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = this.p5.height;
    }

    applyForce(force: p5Types.Vector) {
      this.acc.add(force);
    }

    react(mx: number, my: number) {
      const mousePos = this.p5.createVector(mx, my);
      const dir = p5Types.Vector.sub(mousePos, this.pos);
      const distance = dir.mag();
      
      if (distance < 150) {
        dir.normalize();
        dir.mult(-0.5);  // Repel from cursor
        this.applyForce(dir);
      }
    }

    connect(particles: Particle[]) {
      particles.forEach(other => {
        const d = this.p5.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < 100) {
          const alpha = this.p5.map(d, 0, 100, 255, 0);
          this.p5.stroke(`rgba(255, 255, 255, ${alpha / 255 * 0.1})`);
          this.p5.line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        }
      });
    }

    display() {
      this.p5.noStroke();
      this.p5.fill(this.color);
      this.p5.ellipse(this.pos.x, this.pos.y, this.size);
    }
  }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    
    for (let i = 0; i < 50; i++) {
      particlesRef.current.push(new Particle(
        p5, 
        p5.random(p5.width), 
        p5.random(p5.height)
      ));
    }
  };

  const draw = (p5: p5Types) => {
    p5.background(15, 15, 17, 220);
    
    const { x: mouseX, y: mouseY } = mousePositionRef.current;
    
    particlesRef.current.forEach(particle => {
      particle.react(mouseX, mouseY);
      particle.update();
      particle.connect(particlesRef.current);
      particle.display();
    });
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  return (
    <div className={`canvas-container ${className}`}>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
}
