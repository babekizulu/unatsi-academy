import React from 'react';
import bm from '../images/bm.jpg';
import bi from '../images/bi.jpg';
import bj from '../images/bj.jpg';
import bk from '../images/bk.jpg';
import bl from '../images/bl.jpg';
import bn from '../images/bn.jpg';
import bo from '../images/bo.jpg';
import bp from '../images/bp.jpg';

const Gallery = () => {
    const images = [bm, bi, bj, bk, bl, bn, bo, bp];

    return (
        <article
            style={{
                backgroundColor: '#071b44',
                color: 'white',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                margin: '20px',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
            }}
            id="gallery"
        >
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                Our Gallery
            </h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    padding: '20px',
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '300px',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                    </div>
                ))}
            </div>
        </article>
    );
};

export default Gallery; 