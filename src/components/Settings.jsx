import React from 'react';

const Settings = () => {
    const settingsData = {
        profileFields: [
            { id: 'display-name', type: 'text', label: 'Display Name', name: 'display-name' },
            { id: 'email', type: 'email', label: 'Email', name: 'email' },
            { id: 'bio', type: 'textarea', label: 'Bio', name: 'bio', rows: 4 }
        ],

        privacyOptions: [
            { id: 'profile-public', name: 'profile-public', label: 'Make profile public', checked: true },
            { id: 'email-public', name: 'email-public', label: 'Show email' }
        ],

        accountActions: [
            { type: 'link', text: 'Update Preferences', href: '/preferences', className: 'btn-primary' },
            { type: 'button', text: 'Change Password', className: 'btn-ghost' }
        ]
    };

    return (
        <main className="page-wrap">
            <div className="settings-container">
                <h1>Account Settings</h1>
                <div className="settings-grid">
                    <section className="settings-section">
                        <h2>Profile Settings</h2>
                        <form className="settings-form">
                            {settingsData.profileFields.map(field => (
                                <div className="form-group" key={field.id}>
                                <label htmlFor={field.id}>{field.label}</label>
                                    {field.type === 'textarea' ? (
                                        <textarea id={field.id} name={field.name} rows={field.rows}></textarea>
                                    ) : (
                                        <input type={field.type} id={field.id} name={field.name} />
                                    )}
                                </div>
                            ))}
                            <button type="submit" className="btn-primary">Update Profile</button>
                        </form>
                    </section>
                
                    <section className="settings-section">
                        <h2>Privacy Settings</h2>
                        <form className="settings-form">
                            {settingsData.privacyOptions.map(option => (
                                <div className="checkbox-group" key={option.id}>
                                    <input 
                                        type="checkbox" 
                                        id={option.id} 
                                        name={option.name} 
                                        defaultChecked={option.checked} 
                                    />
                                    <label htmlFor={option.id}>{option.label}</label>
                                </div>
                            ))}
                            <button type="submit" className="btn-primary">Save Settings</button>
                        </form>
                    </section>
                
                    <section className="settings-section">
                        <h2>Account</h2>
                        <div className="account-actions">
                            {settingsData.accountActions.map((action, index) => (
                                action.type === 'link' ? (
                                    <a key={index} href={action.href} className={action.className}>
                                        {action.text}
                                    </a>
                                ) : (
                                    <button key={index} className={action.className}>
                                        {action.text}
                                    </button>
                                )
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Settings;