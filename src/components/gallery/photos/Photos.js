import React from 'react';
import GeneralCarousel from './GeneralCarousel';
import HistoricCarousel from './HistoricCarousel';
import PastCarousel from './PastCarousel';

const Photos = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-12 col-md-8'>
                    <div className='row'>
                        <div className='col'>
                            <div className='row'>
                                <div className='col-photo-header py-4'>
                                    <h1>General Gallery</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <GeneralCarousel />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                    <div className='col'>
                            <div className='row'>
                                <div className='col-photo-header py-4'>
                                    <h1>Historic Gallery</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <HistoricCarousel />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                    <div className='col'>
                            <div className='row'>
                                <div className='col-photo-header py-4'>
                                    <h1>Glimpses Into The Past</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <PastCarousel />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    )
}

export default Photos;