import React, { useEffect, useState } from 'react';
import MainNav from '../Components/MainNav';
import { Container } from 'react-bootstrap';
import Footer from '../Components/Footer';
import axios from 'axios';
import config from '../config';

function OurHistory() {
    const [historyData, setHistoryData] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        axios.get(`${config.API_BASE_URL}/api/history`)
            .then(response => {
                setHistoryData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Loading...</div>; // You can show a loader here
    }

    if (!historyData) {
        return <div>No Data Available</div>; // Handle case when no data is fetched
    }

    return (
        <div className="our-history-wrapper">
            <MainNav />
            <section className="our-history">
                <Container>
                    <div className="history-container">
                        {/* Main History Content */}
                        <div className="history-content">
                            <h2>{historyData.name}</h2>
                            <div dangerouslySetInnerHTML={{ __html: historyData.description_1 }} />

                            {/* History Images */}
                            <div className="history-images">
                                {historyData.image_1 && (
                                    <img
                                        src={`${config.STORAGE_URL}/${historyData.image_1}`}
                                        alt="Haveli View"
                                    />
                                )}
                                {historyData.image_2 && (
                                    <img
                                        src={`${config.STORAGE_URL}/${historyData.image_2}`}
                                        alt="Inside View"
                                    />
                                )}
                                {historyData.image_3 && (
                                    <img
                                        src={`${config.STORAGE_URL}/${historyData.image_3}`}
                                        alt="Haveli View"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="gallery">
                            <h3>Haveli Gallery</h3>
                            <div className="gallery-grid">
                                {historyData.image_4 && (
                                    <img
                                        src={`${config.STORAGE_URL}/${historyData.image_4}`}
                                        alt="Gallery 1"
                                    />
                                )}
                                {historyData.image_5 && (
                                    <img
                                        src={`${config.STORAGE_URL}/${historyData.image_5}`}
                                        alt="Gallery 2"
                                    />
                                )}
                                {historyData.image_6 && (
                                    <img
                                        src={`${config.STORAGE_URL}/${historyData.image_6}`}
                                        alt="Gallery 3"
                                    />
                                )}
                                {historyData.image_7 && (
                                    <img
                                        src={`${config.STORAGE_URL}/${historyData.image_7}`}
                                        alt="Gallery 4"
                                    />
                                )}
                                {historyData.image_8 && (
                                    <img
                                        src={`${config.STORAGE_URL}/${historyData.image_8}`}
                                        alt="Gallery 5"
                                    />
                                )}
                                {historyData.image_9 && (
                                    <img
                                        src={`${config.STORAGE_URL}/${historyData.image_9}`}
                                        alt="Gallery 6"
                                    />
                                )}
                            </div>

                            {/* Restaurant Banner */}
                            <div className="restaurant-banner">
                                {historyData.image_10 && (
                                    <img
                                        src={`${config.STORAGE_URL}/${historyData.image_10}`}
                                        alt="Haveli Grill"
                                    />
                                )}
                            </div>
                        </div>

                        {/* History Text */}
                        <div className="history-text">
                            <div dangerouslySetInnerHTML={{ __html: historyData.description_2 }} />
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </div>
    );
}

export default OurHistory;
