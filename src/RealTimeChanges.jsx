import React, { useEffect, useRef } from 'react';
import './RealTimeChanges.css';

const RealTimeChanges = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="real-time-changes">
      <div className="content">
        <h2>Real time changes</h2>
        <p>
          See changes as they happen. With our platform, you can track every
          modification in real time. No more confusion about the latest version
          of your project. Say goodbye to the chaos of version control and
          embrace the simplicity of real-time updates.
        </p>
      </div>
      <div className="image">
        <div className="gradient-box"></div>
      </div>
    </section>
  );
};

export default RealTimeChanges;
