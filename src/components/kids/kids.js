import React from "react";
import artifact from '../../pics/kids/5998603.png';
import word from '../../pics/kids/word.png';
import adze from '../../pics/kids/adze.png';
import butterMold from '../../pics/kids/butter-mold.png';
import calc from '../../pics/kids/calculator.png';
import trivet from '../../pics/kids/trivet.png';
import wrench from '../../pics/kids/wrench.png';
import adzepdf from '../../pdfs/kids/Guess the Mystery Artifact 1 - Version 2.pdf';
import calcpdf from '../../pdfs/kids/Guess the Mystery Artifact 2 - Version 2.pdf';
import wrenchpdf from '../../pdfs/kids/Guess the Mystery Artifact 3 - Version 2.pdf';
import trivetpdf from '../../pdfs/kids/Guess the Mystery Artifact 4 - Version 2.pdf';
import moldpdf from '../../pdfs/kids/Guess the Mystery Artifact 5.pdf';
import wordSearch1 from '../../pdfs/kids/Sackville Business Heritage Wordsearch.pdf';
import wordSearch2 from '../../pdfs/kids/Travelling in the Early Days Wordsearch.pdf';
import wordSearch3 from '../../pdfs/kids/Family Names Wordsearch.pdf';
import wordSearch4 from '../../pdfs/kids/The Harvest Festival Wordsearch.pdf';
import wordSearch5 from '../../pdfs/kids/Forestry Industry Wordsearch.pdf';
import wordSearch6 from '../../pdfs/kids/Wordsearch on the Trades.pdf';
import wordSearch7 from '../../pdfs/kids/All Things Fultz House Wordsearch.pdf';
import wordSearch8 from '../../pdfs/kids/Blacksmith Wordsearch.pdf';
import wordSearch9 from '../../pdfs/kids/Cenotaph Wordsearch.pdf';
import wordSearch10 from '../../pdfs/kids/Cooperage Wordsearch.pdf';
import wordSearch11 from '../../pdfs/kids/Fultz House Artifacts Wordsearch.pdf';
import wordSearch12 from '../../pdfs/kids/Sackville Heritage Archive Wordsearch.pdf';
import wordSearch13 from '../../pdfs/kids/Tuesday Teas Wordsearch.pdf';
import wordSearch14 from '../../pdfs/kids/Life in the Pandemic Wordsearch.pdf';

const Kids = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <h1>Kids Page</h1>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col pt-5">
                                    <img src={artifact} className="kids-img" alt='' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col pt-2">
                                    <h3>Guess The Mystery Artifact</h3>
                                    <p>Click on the image to see the document</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a type="button" className="btn btn-outline-success mx-4 my-4" href={adzepdf}><img src={adze} width='100' height='100' alt='' /></a>
                                    <a type="button" className="btn btn-outline-success mx-4 my-4" href={moldpdf}><img src={butterMold} width='100' height='100' alt='' /></a>
                                    <a type="button" className="btn btn-outline-success mx-4 my-4" href={calcpdf}><img src={calc} width='100' height='100' alt='' /></a>
                                    <a type="button" className="btn btn-outline-success mx-4 my-4" href={trivetpdf}><img src={trivet} width='100' height='100' alt='' /></a>
                                    <a type="button" className="btn btn-outline-success mx-4 my-4" href={wrenchpdf}><img src={wrench} width='100' height='100' alt='' /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col pt-5">
                                    <img src={word} className="kids-img" alt='' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col py-3">
                                    <h3>Word Search</h3>
                                    <p>Click on the button to see the document</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch1} role="button">Sackville Business Heritage</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch2} role="button">Early Days Travelling</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch3} role="button">Family Names</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch4} role="button">The Harvest Festival</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch5} role="button">Forestry Industry</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch6} role="button">Trades</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch7} role="button">Fultz House</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch8} role="button">Blacksmith</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch9} role="button">Cenotaph</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch10} role="button">Cooperage</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch11} role="button">Artifacts</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch12} role="button">Sackville Heritage Archive</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch13} role="button">Tuesday Teas</a>
                                    <a className="btn btn-outline-success btn-lg mx-1 my-1" href={wordSearch14} role="button">Life in the Pandemic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default Kids;