import React from 'react';

const Terms = () => {
    const termsData = {
        lastUpdated: "October 26, 2025",
        sections: [
            {
                id: 1,
                title: "1. Acceptance of Terms",
                content: "By using ConnectToCode, you accept and agree to these terms."
            },
            {
                id: 2,
                title: "2. Use License",
                content: "You may not:",
                listItems: ["modify or copy materials", "use for commerical purposes", "reverse engineer software"]
            },
            {
                id: 3,
                title: "3. User Content",
                content: "You are responsible for content you post."
            },
            {
                id: 4,
                title: "4. Accounts",
                content: "You must provide accurate account information"
            },
            {
                id: 5,
                title: "5. Contact",
                content: "Questions? Contact support@connecttocode.com"
            }
        ]
    };

    return (
        <main className="page-wrap">
            <div className="terms-container">
                <h1>Terms & Conditions</h1>
                <p className="last-updated">Last updated: {termsData.lastUpdated}</p>
                <div className="terms-content">
                    {termsData.sections.map(section => (
                        <section className="terms-section" key={section.id}>
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                            {section.listItems && (
                                <ul>
                                    {section.listItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>
                <div className="terms-actions">
                    <a href="/settings" className="btn-primary">Back to Settings</a>
                </div>
            </div>
        </main>
    );
};

export default Terms;