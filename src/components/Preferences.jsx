import React from 'react';

const Preferences = () => {
    const quizData = {
        experienceLevels: [
            { id: 'beginner', value: 'beginner', label: 'Beginner' },
            { id: 'intermediate', value: 'intermediate', label: 'Intermediate' },
            { id: 'advanced', value: 'advanced', label: 'Advanced' }
        ],

        interests: [
            { id: 'frontend', value: 'frontend', label: 'Frontend' },
            { id: 'backend', value: 'backend', label: 'Backend' },
            { id: 'data', value: 'data', label: 'Data' }
        ],

        projectTypes: [
            { id: 'short-term', value: 'short-term', label: 'Short-term' },
            { id: 'long-term', value: 'long-term', label: 'Long-term' }
        ]
    };

    return (
        <main className="page-wrap">
            <div className="quiz-container">
                <div className="quiz-header">
                    <h1>Project Preference Quiz</h1>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '0%' }}></div>
                    </div>
                </div>
                
                <form className="quiz-form" id="preference-quiz">
                    <div className="quiz-step active" id="step-1">
                        <h2>Experience Level</h2>
                        <div className="option-group">
                            {quizData.experienceLevels.map(level => (
                                <React.Fragment key={level.id}>
                                    <input type="radio" id={level.id} name="experience" value={level.value} />
                                    <label htmlFor={level.id} className="option-card">
                                        <h3>{level.label}</h3>
                                    </label>
                                </React.Fragment>
                            ))}
                        </div>
                        
                        <div className="quiz-navigation">
                            <button type="button" className="btn-primary next-btn">Next</button>
                        </div>
                    </div>
                
                    <div className="quiz-step" id="step-2">
                        <h2>Technical Interests</h2>
                        <div className="checkbox-options">
                            {quizData.interests.map(interest => (
                                <div className="checkbox-group" key={interest.id}>
                                    <input type="checkbox" id={interest.id} name="interests" value={interest.value} />
                                    <label htmlFor={interest.id}>{interest.label}</label>
                                </div>
                            ))}
                        </div>
                        
                        <div className="quiz-navigation">
                            <button type="button" className="btn-ghost prev-btn">Previous</button>
                            <button type="button" className="btn-primary next-btn">Next</button>
                        </div>
                    </div>
                
                    <div className="quiz-step" id="step-3">
                        <h2>Project Type</h2>
                        <div className="option-group">
                            {quizData.projectTypes.map(type => (
                                <React.Fragment key={type.id}>
                                    <input type="radio" id={type.id} name="project-type" value={type.value} />
                                    <label htmlFor={type.id} className="option-card">
                                        <h3>{type.label}</h3>
                                    </label>
                                </React.Fragment>
                            ))}
                        </div>
                        
                        <div className="quiz-navigation">
                            <button type="button" className="btn-ghost prev-btn">Previous</button>
                            <button type="submit" className="btn-primary">Complete</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Preferences;