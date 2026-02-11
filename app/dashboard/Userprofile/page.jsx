"use client"

import React from 'react'
import "./userprofile.css"
import Image from 'next/image'

const Userprofile = () => {

    const profile = {
        name: 'Pawan Kumar',
        title: 'Production and Industrial Engineering',
        avatar: 'https://akm-img-a-in.tosshub.com/sites/dailyo/story/embed/201809/painting_of_lord_kri_090118090030.jpg',
        course: 'Production and Industrial Engineering',
        branch: 'PIE',
        year: 'Third Year',
        semester: '5',
        batch: '2025-2029',
        club: 'Innovation Cell',
        skills: [
            { name: 'Python' },
            { name: 'React.js' },
            { name: 'Node.js' },
            { name: 'Machine Learning' },
            { name: 'SQL' },
            { name: 'Docker' }
        ],
        clubs: [
            { name: 'Innovatiion Cell', role: 'Technical Lead', year: '2024-Present' },
            { name: 'BIS', role: 'Vice President', year: '2024-Present' },
            { name: 'Photography Club', role: 'Member', year: '2023-Present' }
        ],
        achievements: [
            { title: 'Smart India Hackathon Winner', year: '2025', desc: 'First Prize - AI Category' },
            { title: 'Research Publication', year: '2024', desc: 'Published in IEEE Conference' },
            { title: 'Dean\'s List', year: '2024', desc: 'Academic Excellence Award' },
            { title: 'Competitive Programming', year: '2024', desc: 'Codeforces Expert (1600+)' }
        ]
    };

    return (
        <div className="app-container">

            {/* Main Content Area */}
            <main className="main-area">
                {/* Top Bar */}
                <header className="top-bar">
                    <div className="search-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" placeholder="Search students, clubs, events..." />
                    </div>
                </header>

                {/* Profile Content */}
                <div className="profile-content">
                    {/* Hero Section */}
                    <section className="hero-section">
                        <div className="hero-grid">
                            <div className="hero-left">
                                <div className="profile-image-wrapper">
                                    <img src={profile.avatar} alt={profile.name} className="profile-img" />
                                </div>
                            </div>

                            <div className="hero-center">
                                <div className="name-section">
                                    <h1 className="profile-name">{profile.name}</h1>

                                </div>
                                <p className="profile-title">{profile.title}</p>

                            </div>

                            <div className="hero-right">
                                <button className="action-btn primary-btn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                    Connect
                                </button>
                                <button className="action-btn secondary-btn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    Message
                                </button>
                            </div>
                        </div>
                        <hr className='profilehr' />
                        <div className="social">
                            <button className='applogo' ><img src="/social/LinkedIn.svg" alt="LinkedIn" /></button>
                            <button className='applogo'><img src="/social/instagram.svg" alt="Instagram" /></button>
                            <button className='applogo'><img src="/social/X.svg" alt="X" /></button>
                            <button className='applogo'><img src="/social/github.svg" alt="GitHub" /></button>
                        </div>
                    </section>



                    <div className="info-card academic-card">
                        <h2 className="card-heading">Academic Information</h2>
                        <div className="academic-grid">
                            <div className="academic-item">
                                <span className="academic-label">Course</span>
                                <span className="academic-value">{profile.course}</span>
                            </div>
                            <div className="academic-item">
                                <span className="academic-label">Branch</span>
                                <span className="academic-value">{profile.branch}</span>
                            </div>
                            <div className="academic-item">
                                <span className="academic-label">Current Year</span>
                                <span className="academic-value">{profile.year}</span>
                            </div>
                            <div className="academic-item">
                                <span className="academic-label">Semester</span>
                                <span className="academic-value">{profile.semester}</span>
                            </div>
                            <div className="academic-item">
                                <span className="academic-label">Batch</span>
                                <span className="academic-value">{profile.batch}</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills-card">
                        <h2 className="skillscard-heading"><Image src="/userprofile/htmltag.svg" alt='Skills' width={30} height={30} /> Skills</h2>
                        <div className="card-container">
                            <div className="card">Card 1</div>
                            <div className="card">Card 2</div>
                            
                            
                        </div>

                    </div>


                </div>
            </main>
        </div>
    )
}

export default Userprofile
