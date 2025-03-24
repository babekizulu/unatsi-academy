import { useState } from 'react';
import BackButton from '../BackButton';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Import all images from the images folder
    const images = [
        'a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg', 'f.jpg', 'g.jpg', 'i.jpg', 'j.jpg', 'k.jpg',
        'n.jpg', 'o.jpg', 'p.jpg', 'r.jpg', 't.jpg', 'z.jpg', 'aa.jpg', 'ac.jpg', 'ae.jpg', 'af.jpg',
        'ag.jpg', 'ah.jpg', 'ai.jpg', 'aj.jpg', 'ak.jpg', 'al.jpg', 'am.jpg', 'an.jpg', 'ao.jpg',
        'ap.jpg', 'aq.jpg', 'ar.jpg', 'as.jpg', 'at.jpg', 'au.jpg', 'av.jpg', 'aw.jpg', 'ax.jpg',
        'ay.jpg', 'az.jpg', 'ba.jpg', 'bb.jpg', 'bc.jpg', 'bd.jpg', 'be.jpg', 'bf.jpg', 'bg.jpg',
        'bh.jpg', 'bi.jpg', 'bj.jpg', 'bk.jpg', 'bl.jpg', 'bm.jpg', 'bn.jpg', 'bo.jpg', 'bp.jpg',
        'bq.jpg', 'br.jpg', 'bs.jpg', 'bt.jpg', 'bu.jpg', 'bv.jpg', 'bw.jpg', 'bx.jpg', 'by.jpg',
        'bz.jpg', 'ca.jpg', 'cb.jpg', 'cc.jpg', 'cd.jpg', 'ce.jpg', 'cf.jpg', 'cg.jpg', 'ch.jpg',
        'ci.jpg', 'cj.jpg', 'ck.jpg', 'cl.jpg', 'cm.jpg', 'cn.jpg', 'co.jpg', 'cp.jpg', 'cq.jpg',
        'cr.jpg', 'cs.jpg', 'ct.jpg', 'cu.jpg', 'cv.jpg', 'cw.jpg', 'cx.jpg', 'cy.jpg', 'cz.jpg'
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <section className="page gallery">
            <BackButton href="/" prevPage="home" />
            <div className="gallery-container">
                <h1>Our Gallery</h1>
                <p>Explore moments from Unatsi Academy's journey in STEM education</p>
                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className="gallery-item"
                            onClick={() => handleImageClick(image)}
                        >
                            <img 
                                src={`/src/components/images/${image}`} 
                                alt={`Gallery image ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        <img 
                            src={`/src/components/images/${selectedImage}`} 
                            alt="Selected gallery image"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Gallery;
