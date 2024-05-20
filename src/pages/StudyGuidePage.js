import React, { useState } from 'react';
import '../css/studyguide.css'

export default function StudyGuidePage() {
    return (
        <main>
        <div className="card-container">
            <div className="row">
                <div className="d-flex col-sm-12 col-lg-4">
                    <div className="card m-4 p-2 shadow-sm">
                        
                        <div className="card-content text-center">
                            <h3 className="fw-bold">Beginner Level</h3>
                            <p className="card-text">Beginner level learners have basic or no knowledge of Korean vocabulary, grammar, and sentence structures. They may be able to introduce themselves, ask simple questions, and engage in basic conversations about everyday topics.</p>
                            <cite><a href="https://commons.wikimedia.org/wiki/File:Hangeul.svg"><img className="card-img img-fluid pb-2" src="img/hangul.png" alt="picture of hangul, alphabet" /></a></cite>
                        </div>
                        <div className="card-footer text-center">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#beginnerModal">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>

                <div className="d-flex col-sm-12 col-lg-4">
                    <div className="card m-4 p-2 shadow-sm">
                        
                        <div className="card-content text-center">
                            <h3 className="fw-bold">Intermediate Level</h3>
                            <p className="card-text">Intermediate level learners have a good understanding of Korean grammar and can express themselves more fluently. They can discuss a wider range of topics, understand more complex sentences, and read basic texts with some assistance.</p>
                            <cite><a href="https://www.istockphoto.com/photo/korean-alphabet-gm172855955-5682815?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fhangul%2F&utm_term=hangul"><img className="card-img img-fluid pb-2" src="img/intermediate.png" alt="picture of old writing in Korean" /></a></cite>
                        </div>
                        <div className="card-footer text-center">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#intermediateModal">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>

                <div className="d-flex col-sm-12 col-lg-4">
                    <div className="card m-4 p-2 shadow-sm">

                        <div className="card-content text-center">
                            <h3 className="fw-bold">Advanced Level</h3>
                            <p className="card-text">Advanced level learners have a high level of proficiency in Korean. They can engage in in-depth conversations, read and comprehend more complex texts, and write essays or reports on different topics.</p>
                            <cite><a href="https://www.istockphoto.com/photo/gyeongbokgung-palace-twilight-sunset-gm509661920-85890191"><img className="card-img img-fluid pb-2" src="img/gyeongbokgung.png" alt="picture of Gyeongbokgung Palace" /></a></cite>
                        </div>
                        <div className="card-footer text-center">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#advancedModal">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        




        <div className="modal" id="beginnerModal" tabIndex="-1" aria-labelledby="beginnerModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="beginnerModalLabel">Beginner Level</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>We recommend studying the fundamentals of the Korean language for at least 10 minutes everyday. Set up a plan/calendar to focus on Hangul, grammar, and basic vocabulary. Once you are comfortable reading basic terms, move on to intermediate.</p>
                        <li>Hangul (Korean Alphabet): Mastering Hangul is essential as it forms the foundation of the language. Focus on learning how to read and write each character.</li>
                        <li>Basic Vocabulary and Phrases: Start with everyday vocabulary and phrases such as greetings, introductions, numbers, colors, and common objects.</li>
                        <li>Grammar Fundamentals: Learn basic sentence structure, verb conjugation, and essential grammar patterns.</li>
                        <li>Listening and Speaking Practice: Practice listening to Korean sounds and speaking simple phrases to improve pronunciation and fluency.</li>
                        <li>Reading and Writing Practice: Practice reading simple texts and writing basic sentences to reinforce your understanding of Hangul and grammar.</li>
                    </div>
                    <div className="modal-footer">
                        <button type ="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal" id="intermediateModal" tabIndex="-1" aria-labelledby="intermediateModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="intermediateModalLabel">Intermediate Level</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>At the intermediate level, you should already know Hangul and the basic grammar patterns of the Korean language. At this point, we recommend focusing on learning about specific topics that you enjoy. Dive deeper into grammar, reading comprehension, but most importantly include speaking practice. We recommend 20 minutes a day.</p>
                        <li>Expanded Vocabulary: Continue building your vocabulary with more diverse and complex words and expressions related to various topics such as travel, food, hobbies, etc.</li>
                        <li>Grammar Depth: Dive deeper into Korean grammar, focusing on more advanced sentence structures, verb conjugations, and grammar patterns.</li>
                        <li>Reading Comprehension: Read longer texts such as short stories, articles, or dialogues to improve reading comprehension and expand your understanding of Korean syntax and vocabulary.</li>
                        <li>Listening Skills: Engage with a variety of audio materials like podcasts, news broadcasts, or Korean dramas to improve listening comprehension and expose yourself to different accents and speech styles.</li>
                        <li>Speaking Practice with Fluency: Engage in conversations with native speakers or language partners to practice speaking fluently and naturally, focusing on expressing more complex ideas and opinions.</li>
                    </div>
                    <div className="modal-footer">
                        <button type ="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="modal" id="advancedModal" tabIndex="-1" aria-labelledby="advancedModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="advancedModalLabel">Advanced Level</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>At the advanced level, you should feel comfortable talking with others in Korean. Focus on learning informal Korean and colloquialisms or slang that is more commonly used today. Focus on the cultural context of Korean. We recommend studying at least 20 minutes a day.</p>
                        <li>Specialized Vocabulary: Focus on acquiring vocabulary related to specific fields of interest or professional domains, such as business, science, literature, etc.</li>
                        <li>Idiomatic Expressions and Colloquialisms: Learn idiomatic expressions, slang, and colloquialisms to sound more natural and culturally aware in your speech.</li>
                        <li>Advanced Grammar and Syntax: Master advanced grammar concepts, intricate sentence structures, and subtle nuances in usage to attain a higher level of linguistic proficiency.</li>
                        <li>Reading Advanced Texts: Read complex texts like novels, academic papers, or news articles to deepen your understanding of Korean literature, culture, and current affairs.</li>
                        <li>Cultural Immersion: Immerse yourself in Korean culture by watching movies, TV shows, and engaging with native speakers to gain a deeper understanding of cultural context and social norms.</li>
                    </div>
                    <div className="modal-footer">
                        <button type ="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}