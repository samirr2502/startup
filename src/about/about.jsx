import React from 'react';
import './about.css'
export function About() {
    return (
            <main className="bd-example col-md-9">
                <section className="title">
                    <h1>About Check In Tools</h1>
                </section>

                <section className="content">
                    <div className="content_left">
                        <p>This app has the purpose of helping leaders 
                            check in their members during the variuos classes 
                            or meetings they might attend to </p>
                    </div>
                    <div className="content_right">
                        <img src='images/conferenceCenter.png' />
                    </div>
                </section>
            </main>
    );
}