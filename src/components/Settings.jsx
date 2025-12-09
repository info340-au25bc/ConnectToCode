import React from 'react';
import '../css/messages.css';

const Settings = () => {
  const settingsData = {
    profileFields: [
      { 
        id: 'display-name', 
        type: 'text', 
        label: 'Display Name', 
        name: 'display-name',
        placeholder: 'Enter your display name',
        value: 'Alexis Lucatero'
      },
      { 
        id: 'email', 
        type: 'email', 
        label: 'Email Address', 
        name: 'email',
        placeholder: 'your.email@example.com',
        value: 'alexis@example.com'
      },
      { 
        id: 'bio', 
        type: 'textarea', 
        label: 'Bio', 
        name: 'bio', 
        rows: 4,
        placeholder: 'Tell others about yourself...',
        value: 'Frontend developer passionate about UX design and data visualization. Always eager to collaborate on innovative projects.'
      },
      { 
        id: 'location', 
        type: 'text', 
        label: 'Location', 
        name: 'location',
        placeholder: 'City, Country',
        value: 'Seattle, WA'
      },
      { 
        id: 'website', 
        type: 'url', 
        label: 'Website', 
        name: 'website',
        placeholder: 'https://yourwebsite.com',
        value: ''
      }
    ],

    privacyOptions: [
      { 
        id: 'profile-public', 
        name: 'profile-public', 
        label: 'Make my profile public',
        description: 'Allow anyone to view your profile',
        checked: true 
      },
      { 
        id: 'email-public', 
        name: 'email-public', 
        label: 'Show email on profile',
        description: 'Display your email address publicly',
        checked: false 
      },
      { 
        id: 'show-online', 
        name: 'show-online', 
        label: 'Show online status',
        description: 'Display when you\'re active on the platform',
        checked: true 
      },
      { 
        id: 'allow-messages', 
        name: 'allow-messages', 
        label: 'Allow direct messages',
        description: 'Allow other users to send you messages',
        checked: true 
      }
    ],

    notificationOptions: [
      {
        id: 'project-invites',
        name: 'project-invites',
        label: 'Project invitations',
        description: 'Notify me when someone invites me to a project',
        checked: true
      },
      {
        id: 'message-notifications',
        name: 'message-notifications',
        label: 'New messages',
        description: 'Notify me when I receive a new message',
        checked: true
      },
      {
        id: 'project-updates',
        name: 'project-updates',
        label: 'Project updates',
        description: 'Notify me about updates to projects I\'m following',
        checked: true
      }
    ],

    accountActions: [
      { 
        type: 'link', 
        text: 'Update Preferences', 
        href: '/preferences', 
        className: 'btn-ghost'
      },
      { 
        type: 'button', 
        text: 'Change Password', 
        className: 'btn-ghost'
      },
      { 
        type: 'button', 
        text: 'Export Data', 
        className: 'btn-ghost'
      },
      { 
        type: 'button', 
        text: 'Delete Account', 
        className: 'btn-danger'
      }
    ]
  };

  return (
    <main className="page-wrap">
      <div className="settings-layout">
        <header className="settings-header">
          <h1>Account Settings</h1>
          <p className="settings-subtitle">Manage your profile, privacy, and notification preferences</p>
        </header>

        <div className="settings-grid">
          <section className="settings-card">
            <div className="settings-card-header">
              <h2>Profile Settings</h2>
              <p className="settings-description">Update your personal information and how others see you</p>
            </div>
            
            <form className="settings-form">
              {settingsData.profileFields.map(field => (
                <div className="form-group" key={field.id}>
                  <label htmlFor={field.id}>
                    {field.label}
                    <span className="form-hint">{field.description}</span>
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea 
                      id={field.id} 
                      name={field.name} 
                      rows={field.rows}
                      placeholder={field.placeholder}
                      defaultValue={field.value}
                      className="form-control"
                    ></textarea>
                  ) : (
                    <input 
                      type={field.type} 
                      id={field.id} 
                      name={field.name}
                      placeholder={field.placeholder}
                      defaultValue={field.value}
                      className="form-control"
                    />
                  )}
                </div>
              ))}
              <div className="form-actions">
                <button type="button" className="btn-ghost">Cancel</button>
                <button type="submit" className="btn-primary">Save Changes</button>
              </div>
            </form>
          </section>

          <section className="settings-card">
            <div className="settings-card-header">
              <h2>Privacy Settings</h2>
              <p className="settings-description">Control who can see your information and contact you</p>
            </div>
            
            <form className="settings-form">
              {settingsData.privacyOptions.map(option => (
                <div className="checkbox-group" key={option.id}>
                  <div className="checkbox-wrapper">
                    <input 
                      type="checkbox" 
                      id={option.id} 
                      name={option.name} 
                      defaultChecked={option.checked}
                      className="checkbox-input"
                    />
                    <span className="checkbox-custom"></span>
                  </div>
                  <div className="checkbox-label">
                    <label htmlFor={option.id}>{option.label}</label>
                    <p className="checkbox-description">{option.description}</p>
                  </div>
                </div>
              ))}
              <div className="form-actions">
                <button type="submit" className="btn-primary">Save Privacy Settings</button>
              </div>
            </form>
          </section>

          <section className="settings-card">
            <div className="settings-card-header">
              <h2>Notification Settings</h2>
              <p className="settings-description">Choose what notifications you want to receive</p>
            </div>
            
            <form className="settings-form">
              {settingsData.notificationOptions.map(option => (
                <div className="checkbox-group" key={option.id}>
                  <div className="checkbox-wrapper">
                    <input 
                      type="checkbox" 
                      id={option.id} 
                      name={option.name} 
                      defaultChecked={option.checked}
                      className="checkbox-input"
                    />
                    <span className="checkbox-custom"></span>
                  </div>
                  <div className="checkbox-label">
                    <label htmlFor={option.id}>{option.label}</label>
                    <p className="checkbox-description">{option.description}</p>
                  </div>
                </div>
              ))}
              <div className="form-actions">
                <button type="submit" className="btn-primary">Save Notification Settings</button>
              </div>
            </form>
          </section>

          <section className="settings-card">
            <div className="settings-card-header">
              <h2>Account Management</h2>
              <p className="settings-description">Manage your account preferences and data</p>
            </div>
            
            <div className="account-actions">
              {settingsData.accountActions.map((action, index) => (
                action.type === 'link' ? (
                  <a 
                    key={index} 
                    href={action.href} 
                    className={`account-action ${action.className}`}
                  >
                    {action.text}
                  </a>
                ) : (
                  <button 
                    key={index} 
                    className={`account-action ${action.className}`}
                  >
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
