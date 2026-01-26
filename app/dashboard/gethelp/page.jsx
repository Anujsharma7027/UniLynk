"use client"

import React from 'react'
import './gethelp.css'

const Gethelppage = () => {
    return (
        <div>
            <div className="ghhead">
                <div className="ghheadt">We're here to help! 👋</div>
                <div className="gh-support">
                    Get Help & Support
                </div>
                <div className="ghheadtext">ULynk is new on campus and we're building this together. Have questions? We'd love to help!</div>
            </div>


            <div className="ghbody">
                <div className="howcanwehelp">How Can We Help?</div>
                <div className="email-guidecont">



                    <div className="email">
                        <div className="emailtop">
                            <div className="recommended">Recommended</div>
                            <div className="mail">
                                <img src="/gethelp/mail.svg" alt="" />
                            </div>
                            <div className="emailus">Email Us</div>
                            <p>Send us your questions and we'll get back to you soon</p>
                        </div>
                        <div className="emailbottom">
                            <div className="w24hrs">Within 24 hours</div>
                            <button className="sendemail">Send email →</button>
                        </div>
                    </div>




                    <div className="guidebox">
                        <div className="guidetop">
                            <div className="guide">
                                <img src="/gethelp/browse.svg" alt="" />
                            </div>
                            <div className="browse">Browse Guides</div>
                            <p>Step-by-step tutorials to help you get started</p>
                        </div>
                        <div className="guidebottom">
                            <div className="selfpaced">Self-paced learning</div>
                            <button className="viewguides">View guides →</button>
                        </div>
                    </div>
                </div>


                <div className="newtoulynk">

                    <div className="newtoulynkt">
                        New to UniLynk?
                        <img src="/gethelp/bulb.svg" alt="" />
                    </div>
                    <p>Get started in just 2 minutes</p>



                    <div className="newtoulynkcardcont">
                        <div className="newtoulynkcard">
                            <div className="cardhead">
                                <div className="one">1</div>
                                <img src="/gethelp/rocket.svg" alt="" />
                            </div>
                            <div className="createurclubprofile">Create Your Club Profile</div>
                            <p>Set up your club name, description, and branding</p>


                        </div>


                        <div className="newtoulynkcard">
                            <div className="cardhead">
                                <div className="two">2</div>
                                <img src="/gethelp/MyClubs.svg" alt="" />
                            </div>
                            <div className="invtemembers">Invite Your First Members</div>
                            <p>Share your unique club link with friends</p>
                        </div>


                    </div>
                    <div className="guidebtncont">
                        <button className='guidebtn'>Start Quick Setup Guide</button>
                    </div>





                </div>

                <div className="faq">Frequently Asked Questions</div>
                <p className="quickans">Quick answers to common questions</p>

                <div className="faqcont">



                    <div className="faqcard">
                        <div className="faqcardright">
                            <div className="quesimg">
                                <img src="/gethelp/questionmark.svg" alt="" />
                            </div>
                            <div className="faqans">
                                <div>How do I create my first club?</div>
                                <p>Click the 'Join Club' button and select 'Create New Club' to get started.</p>
                            </div>
                        </div>
                        <div className="faqgenre">Getting Started</div>
                    </div>

                    <div className="faqcard">
                        <div className="faqcardright">
                            <div className="quesimg">
                                <img src="/gethelp/questionmark.svg" alt="" />
                            </div>
                            <div className="faqans">
                                <div>How can I invite members to join?</div>
                                <p>Share your club's unique link found in the club settings page.</p>
                            </div>
                        </div>
                        <div className="faqgenre">Club Management</div>
                    </div>


                    <div className="faqcard">
                        <div className="faqcardright">
                            <div className="quesimg">
                                <img src="/gethelp/questionmark.svg" alt="" />
                            </div>
                            <div className="faqans">
                                <div>What's the best way to promote events?</div>
                                <p>Use the event announcement feature to notify all members instantly.</p>
                            </div>
                        </div>
                        <div className="faqgenre">Events</div>
                    </div>


                    <div className="faqcard">
                        <div className="faqcardright">
                            <div className="quesimg">
                                <img src="/gethelp/questionmark.svg" alt="" />
                            </div>
                            <div className="faqans">
                                <div>Can I manage multiple clubs?</div>
                                <p>Yes! There's no limit to how many clubs you can join or manage..</p>
                            </div>
                        </div>
                        <div className="faqgenre">Account</div>
                    </div>


                    <div className="faqcard">
                        <div className="faqcardright">
                            <div className="quesimg">
                                <img src="/gethelp/questionmark.svg" alt="" />
                            </div>
                            <div className="faqans">
                                <div>Is ULynk free to use?</div>
                                <p>Yes! ULynk is completely free for all students and clubs on campus.</p>
                            </div>
                        </div>
                        <div className="faqgenre">Account</div>
                    </div>


                </div>


                <div className="protips">


                    <div className="protipshead">
                        <img src="/gethelp/sparkle.svg" alt="" />
                        Pro Tips
                    </div>
                    <div className="protipscont">
                        <div className="protip">
                            <div className="protipimg">
                                <img src="/gethelp/bulb.svg" alt="" />
                            </div>
                            <p>Add a club description to help members know what you're about</p>
                        </div>
                        <div className="protip">
                            <div className="protipimg">
                                <img src="/gethelp/thunder.svg" alt="" />
                            </div>
                            <p>Schedule events at least 3 days in advance for better attendance</p>
                        </div>
                        <div className="protip">
                            <div className="protipimg">
                                <img src="/gethelp/tick.svg" alt="" />
                            </div>
                            <p>Regular updates keep your club members engaged and informed</p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Gethelppage
