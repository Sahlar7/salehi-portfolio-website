import React, { useEffect, useRef, useState } from 'react';
function FadeIn(items){
        const [isVisible, setVisible] = useState(false);
        const domRef= useRef();
        useEffect( ()=>{
            const observer = new IntersectionObserver(entries =>{entries.forEach(entry=> {
                if (entry.isIntersecting)
                    setVisible(entry.isIntersecting);
            });});
            observer.observe(domRef.current);
            return () => {
                if(domRef.current)
                    observer.unobserve(domRef.current);
            }
        }, []);
        return (
            <div
                className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}>
                {items.children}
            </div>
        );
    }
export default FadeIn;