"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Calendar as CalendarIcon, Clock, MapPin, Tag } from 'lucide-react';
import { format } from 'date-fns';
import './FormPreview.css';

export default function FormPreview() {
  const { formId } = useParams();
  const [formData, setFormData] = useState(null);
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (formId) {
      const savedForm = localStorage.getItem(`unilynk-form-${formId}`);
      if (savedForm) {
        setFormData(JSON.parse(savedForm));
      }
    }
  }, [formId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    const missingRequired = formData?.questions.filter(
      q => q.required && !responses[q.id]
    );

    if (missingRequired && missingRequired.length > 0) {
      alert('Please fill in all required fields');
      return;
    }

    setSubmitted(true);
  };

  const handleResponse = (questionId, value) => {
    setResponses({ ...responses, [questionId]: value });
  };

  const handleCheckboxChange = (questionId, option, checked) => {
    const current = responses[questionId] || [];
    const updated = checked
      ? [...current, option]
      : current.filter((o) => o !== option);
    handleResponse(questionId, updated);
  };

  if (!formData) {
    return (
      <div className="not-found-container">
        <p className="not-found-text">Form not found</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="success-container">
        <div className="success-inner">
          <div className="success-card">
            <div className="success-icon">
              <CheckCircle2 />
            </div>
            <h2 className="success-title">Response Submitted</h2>
            <p className="success-text">
              Thank you for completing the form. Your response has been recorded.
            </p>
            <Link href="/dashboard/events" className="btn-back-home">
              Back to Forms
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-preview-container">
      {/* Header */}
      <header className="form-preview-header">
        <div className="form-preview-header-inner">
          {formData && (
  <Link href={`/FormBuilder/${formData.id}`} className="btn-back">
    <ArrowLeft />
  </Link>
)}

        </div>
      </header>

      {/* Form */}
      <main className="form-preview-main">
        <form onSubmit={handleSubmit}>
          {/* Form Header */}
          <div className="form-preview-header-card">
            <div className="form-preview-accent"></div>
            <h1 className="form-preview-title">{formData.title}</h1>
            {formData.description && (
              <p className="form-preview-description">{formData.description}</p>
            )}
            {formData.genre && (
              <div className="form-genre-badge">
                <Tag />
                <span>{formData.genre.replace('-', ' ')}</span>
              </div>
            )}
            {(formData.date || formData.time || formData.location) && (
              <div className="event-details-preview-section">
                <h3 className="event-details-preview-title">Event Details</h3>
                <div className="event-details-preview-grid">
                  {formData.date && (
                    <div className="event-detail-item">
                      <div className="event-detail-icon">
                        <CalendarIcon />
                      </div>
                      <div className="event-detail-content">
                        <p className="event-detail-label">Date</p>
                        <p className="event-detail-value">{format(new Date(formData.date), 'MMM d, yyyy')}</p>
                      </div>
                    </div>
                  )}
                  {formData.time && (
                    <div className="event-detail-item">
                      <div className="event-detail-icon">
                        <Clock />
                      </div>
                      <div className="event-detail-content">
                        <p className="event-detail-label">Time</p>
                        <p className="event-detail-value">{formData.time}</p>
                      </div>
                    </div>
                  )}
                  {formData.location && (
                    <div className="event-detail-item">
                      <div className="event-detail-icon">
                        <MapPin />
                      </div>
                      <div className="event-detail-content">
                        <p className="event-detail-label">Location</p>
                        <p className="event-detail-value">{formData.location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Questions */}
          {formData.questions.map((question) => (
            <div key={question.id} className="question-card">
              <div className="question-text-wrapper">
                <h3 className="question-text">
                  {question.question}
                  {question.required && <span className="question-required">*</span>}
                </h3>
                {question.description && (
                  <p className="question-desc">{question.description}</p>
                )}
              </div>

              {/* Short Answer */}
              {question.type === 'short' && (
                <input
                  type="text"
                  value={responses[question.id] || ''}
                  onChange={(e) => handleResponse(question.id, e.target.value)}
                  className="input-text"
                  placeholder="Your answer"
                  required={question.required}
                />
              )}

              {/* Long Answer */}
              {question.type === 'long' && (
                <textarea
                  value={responses[question.id] || ''}
                  onChange={(e) => handleResponse(question.id, e.target.value)}
                  className="input-textarea"
                  placeholder="Your answer"
                  rows={4}
                  required={question.required}
                />
              )}

              {/* Email */}
              {question.type === 'email' && (
                <input
                  type="email"
                  value={responses[question.id] || ''}
                  onChange={(e) => handleResponse(question.id, e.target.value)}
                  className="input-text"
                  placeholder="example@email.com"
                  required={question.required}
                />
              )}

              {/* Phone */}
              {question.type === 'phone' && (
                <input
                  type="tel"
                  value={responses[question.id] || ''}
                  onChange={(e) => handleResponse(question.id, e.target.value)}
                  className="input-text"
                  placeholder="(123) 456-7890"
                  required={question.required}
                />
              )}

              {/* Date */}
              {question.type === 'date' && (
                <input
                  type="date"
                  value={responses[question.id] || ''}
                  onChange={(e) => handleResponse(question.id, e.target.value)}
                  className="input-text"
                  required={question.required}
                />
              )}

              {/* Time */}
              {question.type === 'time' && (
                <input
                  type="time"
                  value={responses[question.id] || ''}
                  onChange={(e) => handleResponse(question.id, e.target.value)}
                  className="input-text"
                  required={question.required}
                />
              )}

              {/* Multiple Choice */}
              {question.type === 'multiple' && (
                <div className="radio-options">
                  {question.options?.map((option, index) => (
                    <label key={index} className="radio-option">
                      <input
                        type="radio"
                        name={question.id}
                        value={option}
                        checked={responses[question.id] === option}
                        onChange={(e) => handleResponse(question.id, e.target.value)}
                        required={question.required}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {/* Checkbox */}
              {question.type === 'checkbox' && (
                <div className="checkbox-options">
                  {question.options?.map((option, index) => (
                    <label key={index} className="checkbox-option">
                      <input
                        type="checkbox"
                        checked={(responses[question.id] || []).includes(option)}
                        onChange={(e) => handleCheckboxChange(question.id, option, e.target.checked)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {/* Dropdown */}
              {question.type === 'dropdown' && (
                <select
                  value={responses[question.id] || ''}
                  onChange={(e) => handleResponse(question.id, e.target.value)}
                  className="dropdown-select"
                  required={question.required}
                >
                  <option value="">Choose</option>
                  {question.options?.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}

          {/* Submit Button */}
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
