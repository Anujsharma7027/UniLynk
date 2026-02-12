"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { getDraft, saveDraft } from "@/lib/drafts";
import {
  ArrowLeft,
  Plus,
  Trash2,
  GripVertical,
  Eye,
  Type,
  ListOrdered,
  CheckSquare,
  Circle,
  ChevronDown,
  Calendar as CalendarIcon,
  Clock,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
  ChevronDown as ChevronDownIcon,

  Tag,
} from 'lucide-react';
import { format } from 'date-fns';
import './FormBuilder.css';
import { EVENT_FORM_DROPDOWNS } from '@/lib/eventFormDropdowns';

const questionTypes = [
  { value: 'short', label: 'Short Answer', icon: Type },
  { value: 'long', label: 'Paragraph', icon: Type },
  { value: 'multiple', label: 'Multiple Choice', icon: Circle },
  { value: 'checkbox', label: 'Checkboxes', icon: CheckSquare },
  { value: 'dropdown', label: 'Dropdown', icon: ChevronDown },
  { value: 'date', label: 'Date', icon: CalendarIcon },
  { value: 'time', label: 'Time', icon: Clock },
  { value: 'email', label: 'Email', icon: Mail },
  { value: 'phone', label: 'Phone', icon: Phone },
];

export default function FormBuilder() {
  const params = useParams();
  const router = useRouter();
  // FIXED: Added mounted state to prevent hydration errors
  const [mounted, setMounted] = useState(false);
  // FIXED: Initialize with completely static structure to prevent hydration mismatch
  const [formData, setFormData] = useState({
    _id: '',
    title: "Untitled Form",
    description: "",
    club: "",
    date: "",
    time: "",
    location: "",
    questions: [],
  });

  // FIXED: Set mounted to true after component mounts to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);


  // FIXED: Load form data only after component is mounted
  useEffect(() => {
    if (!mounted || !params?.formId) return;

    const loadForm = async () => {
      try {

        // ⭐ Draft Case
        if (params?.formId?.startsWith("draft_")) {
          const draft = getDraft(params.formId);

          if (draft) {
            setFormData(draft);
            return;
          }

          // ⭐ Draft missing → recreate
          const newDraft = {
            _id: params.formId,
            title: "Untitled Form",
            description: "",
            club: "",
            genre: "",
            questions: [],
            createdAt: new Date().toISOString(),
          };

          saveDraft(newDraft);
          setFormData(newDraft);
          return;
        }

        // ⭐ Mongo Case
        const res = await fetch(`/api/forms/${params.formId}`);

        if (res.ok) {
          const data = await res.json();
          setFormData(data);
          return;
        }

        // ⭐ Mongo failed → fallback draft
        const fallbackDraft = {
          _id: `draft_${Date.now()}`,
          title: "Untitled Form",
          description: "",
          club: "",
          genre: "",
          questions: [],
          createdAt: new Date().toISOString(),
        };

        saveDraft(fallbackDraft);
        setFormData(fallbackDraft);
        router.replace(`/FormBuilder/${fallbackDraft._id}`);

      } catch (error) {
        console.error(error);
      }
    };



    loadForm();

  }, [mounted, params?.formId]);


  const publishForm = async () => {
    if (!formData) return;

    try {
      let payload = {
        ...formData,
        isPublished: true
      };

      // Remove draft id → Mongo creates real _id
      if (payload._id?.startsWith("draft_")) {
        delete payload._id;
      }

      const res = await fetch("/api/forms/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Publish failed");

      // Remove local draft after publish
      if (formData._id?.startsWith("draft_")) {
        localStorage.removeItem(`draft-${formData._id}`);
      }

      router.push("/dashboard/events/yourform");

    } catch (err) {
      console.error(err);
    }
  };


  const updateForm = (updates) => {
    const newData = { ...formData, ...updates };

    setFormData(newData);

    // ✅ Save Draft Locally
    if (newData?._id?.startsWith("draft_")) {
      saveDraft(newData);
    }
  };
const saveChanges = async () => {
  if (!formData?._id) return;

  try {
    const { _id, ...safeData } = formData;

    const res = await fetch("/api/forms/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formId: _id,
        formData: safeData
      })
    });

    if (!res.ok) throw new Error("Update failed");

    // ✅ Redirect after saving
    router.push("/dashboard/events/yourform");

  } catch (err) {
    console.error(err);
  }
};
  const addQuestion = () => {
    const newQuestion = {
      id: Date.now().toString(),
      type: 'short',
      question: 'Untitled Question',
      required: false,
    };
    updateForm({ questions: [...formData.questions, newQuestion] });
  };

  const updateQuestion = (id, updates) => {
    const updatedQuestions = formData.questions.map(q =>
      q.id === id ? { ...q, ...updates } : q
    );
    updateForm({ questions: updatedQuestions });
  };

  const deleteQuestion = (id) => {
    updateForm({ questions: formData.questions.filter(q => q.id !== id) });
  };

  const moveQuestionUp = (index) => {
    if (index === 0) return;
    const newQuestions = [...formData.questions];
    [newQuestions[index - 1], newQuestions[index]] = [newQuestions[index], newQuestions[index - 1]];
    updateForm({ questions: newQuestions });
  };

  const moveQuestionDown = (index) => {
    if (index === formData.questions.length - 1) return;
    const newQuestions = [...formData.questions];
    [newQuestions[index], newQuestions[index + 1]] = [newQuestions[index + 1], newQuestions[index]];
    updateForm({ questions: newQuestions });
  };

  const addOption = (questionId) => {
    const question = formData.questions.find(q => q.id === questionId);
    if (question && question.options) {
      updateQuestion(questionId, {
        options: [...question.options, `Option ${question.options.length + 1}`]
      });
    }
  };

  const updateOption = (questionId, optionIndex, value) => {
    const question = formData.questions.find(q => q.id === questionId);
    if (question && question.options) {
      const newOptions = [...question.options];
      newOptions[optionIndex] = value;
      updateQuestion(questionId, { options: newOptions });
    }
  };

  const deleteOption = (questionId, optionIndex) => {
    const question = formData.questions.find(q => q.id === questionId);
    if (question && question.options && question.options.length > 1) {
      updateQuestion(questionId, {
        options: question.options.filter((_, i) => i !== optionIndex)
      });
    }
  };

  // FIXED: Don't render interactive content until mounted to prevent hydration mismatch
  if (!mounted) {
    // FIXED: Return simple static loading state
    return (
      <div className="form-builder-container">
        <header className="form-builder-header">
          <div className="form-builder-header-inner">
            <div className="form-builder-header-content">
              <div className="form-builder-header-left">
                <div className="btn-back" style={{ border: '1px solid #e5e7eb' }}></div>
                <div style={{ fontSize: '18px', fontWeight: 600 }}>Loading...</div>
              </div>
            </div>
          </div>
        </header>
        <main className="form-builder-main">
          <div className="form-header-card">
            <div className="form-header-accent"></div>
            <div style={{ fontSize: '30px', fontWeight: 600, color: '#9ca3af' }}>Loading form...</div>
          </div>
        </main>
      </div>
    );
  }

  // FIXED: Get formId safely after mounted
  const formId = formData?._id;
  console.log("Preview ID:", formData._id);


  return (
    <div className="form-builder-container">
      {/* Header */}
      <header className="form-builder-header">
        <div className="form-builder-header-inner">
          <div className="form-builder-header-content">
            <div className="form-builder-header-left">
              <Link href="/dashboard/events/yourform" className="btn-back" aria-label="Back">
                <img className='w-2.5' src="/Postimg/backarrow.svg" alt="back" />
              </Link>

              <input
                type="text"
                value={formData.title}
                onChange={(e) => updateForm({ title: e.target.value })}
                className="form-title-header-input"
                placeholder="Untitled form"
              />
            </div>



            <div style={{ display: "flex", gap: "10px" }}>

              <button
                onClick={formData.isPublished ? saveChanges : publishForm}
                className="btn-preview-mode"
                type="button"
              >
                {formData.isPublished ? "Save Changes" : "Publish"}
              </button>
              <button
                disabled={!formData?._id}
                onClick={() => router.push(`/FormPreview/${formData._id}`)}
                className="btn-preview-mode"
                type="button"
              >
                <Eye />
                <span>Preview</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="form-builder-main">
        {/* Form Header */}
        <div className="form-header-card">
          <div className="form-header-accent"></div>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => updateForm({ title: e.target.value })}
            className="form-title-input"
            placeholder="Form Title"
          />
          <textarea
            value={formData.description}
            onChange={(e) => updateForm({ description: e.target.value })}
            className="form-description-input"
            placeholder="Form description"
            rows={2}
          />

          {/* Genre/Category Field */}
          <div className="form-genre-section">
            <div className="form-genre-label-wrapper">
              <Tag />
              <label className="form-genre-label">Club</label>
            </div>
            <select
              value={formData.club || ''}
              onChange={(e) => updateForm({ club: e.target.value })}
              className="form-genre-select"
            >
              <option value="">Select a club</option>
              {EVENT_FORM_DROPDOWNS.club.map((clubOption) => (
                <option key={clubOption} value={clubOption}>
                  {clubOption}
                </option>
              ))}
            </select>
          </div>

          {/* Genre/Category Field */}
          <div className="form-genre-section">
            <div className="form-genre-label-wrapper">
              <Tag />
              <label className="form-genre-label">Category</label>
            </div>
            <select
              value={formData.genre || ''}
              onChange={(e) => updateForm({ genre: e.target.value })}
              className="form-genre-select"
            >
              <option value="">Select a category</option>
              {EVENT_FORM_DROPDOWNS.category.map((categoryOption) => (
                <option key={categoryOption} value={categoryOption}>
                  {categoryOption}
                </option>
              ))}
            </select>
          </div>

          {/* Date, Time, Location Section */}
          <div className="event-details-section">
            <h3 className="event-details-title">Event Details (Optional)</h3>
            <div className="event-details-grid">
              {/* Date Picker */}
              <div className="event-field">
                <label className="event-field-label">
                  <CalendarIcon />
                  Date
                </label>
                <input
                  type="date"
                  value={formData.date ? formData.date.split('T')[0] : ''}
                  onChange={(e) => updateForm({ date: e.target.value ? new Date(e.target.value).toISOString() : '' })}
                  className="date-picker-button"
                />
              </div>

              {/* Time Picker */}
              <div className="event-field">
                <label className="event-field-label">
                  <Clock />
                  Time
                </label>
                <div>
                  <input
                    type="time"
                    value={formData.time || ''}
                    onChange={(e) => updateForm({ time: e.target.value })}
                    className="time-input"
                    placeholder="Select time"
                  />
                </div>
              </div>

              {/* Location Input */}
              <div className="event-field">
                <label className="event-field-label">
                  <MapPin />
                  Location
                </label>
                <div>
                  <input
                    type="text"
                    value={formData.location || ''}
                    onChange={(e) => updateForm({ location: e.target.value })}
                    className="location-input"
                    placeholder="Enter location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Questions */}
        {formData.questions.map((question, index) => (
          <div key={question.id} className="question-item">
            <div className="question-header">
              <div className="question-move-buttons">
                <button
                  onClick={() => moveQuestionUp(index)}
                  disabled={index === 0}
                  className="btn-move"
                  title="Move up"
                  type="button"
                >
                  <ChevronUp />
                </button>
                <button
                  onClick={() => moveQuestionDown(index)}
                  disabled={index === formData.questions.length - 1}
                  className="btn-move"
                  title="Move down"
                  type="button"
                >
                  <ChevronDownIcon />
                </button>
              </div>
              <div className="question-main">
                <input
                  type="text"
                  value={question.question}
                  onChange={(e) => updateQuestion(question.id, { question: e.target.value })}
                  className="question-input"
                  placeholder="Question"
                />
                <input
                  type="text"
                  value={question.description || ''}
                  onChange={(e) => updateQuestion(question.id, { description: e.target.value })}
                  className="question-description-input"
                  placeholder="Description (optional)"
                />
              </div>
              <select
                value={question.type}
                onChange={(e) => updateQuestion(question.id, {
                  type: e.target.value,
                  options: ['multiple', 'checkbox', 'dropdown'].includes(e.target.value) ? ['Option 1'] : undefined
                })}
                className="question-type-select"
              >
                {questionTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Question Options */}
            {['multiple', 'checkbox', 'dropdown'].includes(question.type) && (
              <div className="question-options">
                {question.options?.map((option, optionIndex) => (
                  <div key={optionIndex} className="question-option">
                    {question.type === 'multiple' && (
                      <Circle className="question-option-icon" />
                    )}
                    {question.type === 'checkbox' && (
                      <CheckSquare className="question-option-icon" />
                    )}
                    {question.type === 'dropdown' && (
                      <span className="question-option-icon">{optionIndex + 1}.</span>
                    )}
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => updateOption(question.id, optionIndex, e.target.value)}
                      className="question-option-input"
                    />
                    <button
                      onClick={() => deleteOption(question.id, optionIndex)}
                      className="btn-remove-option"
                      type="button"
                    >
                      <Trash2 />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addOption(question.id)}
                  className="btn-add-option"
                  type="button"
                >
                  <Plus />
                  Add option
                </button>
              </div>
            )}

            {/* Question Preview */}
            {question.type === 'short' && (
              <div className="question-preview">
                <input
                  type="text"
                  placeholder="Short answer text"
                  className="preview-input-short"
                  disabled
                  readOnly
                />
              </div>
            )}
            {question.type === 'long' && (
              <div className="question-preview">
                <textarea
                  placeholder="Long answer text"
                  className="preview-textarea"
                  rows={3}
                  disabled
                  readOnly
                />
              </div>
            )}
            {question.type === 'email' && (
              <div className="question-preview">
                <input
                  type="email"
                  placeholder="Email address"
                  className="preview-input-email"
                  disabled
                  readOnly
                />
              </div>
            )}
            {question.type === 'phone' && (
              <div className="question-preview">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="preview-input-phone"
                  disabled
                  readOnly
                />
              </div>
            )}
            {question.type === 'date' && (
              <div className="question-preview">
                <input
                  type="date"
                  className="preview-input-date"
                  disabled
                  readOnly
                />
              </div>
            )}
            {question.type === 'time' && (
              <div className="question-preview">
                <input
                  type="time"
                  className="preview-input-time"
                  disabled
                  readOnly
                />
              </div>
            )}

            {/* Question Actions */}
            <div className="question-footer">
              <button
                onClick={() => deleteQuestion(question.id)}
                className="btn-delete-question"
                type="button"
              >
                <Trash2 />
                Delete
              </button>
              <label className="required-toggle">
                <span className="required-toggle-label">Required</span>
                <input
                  type="checkbox"
                  checked={question.required}
                  onChange={(e) => updateQuestion(question.id, { required: e.target.checked })}
                />
              </label>
            </div>
          </div>
        ))}

        {/* Add Question Button */}
        <button onClick={addQuestion} className="btn-add-question" type="button">
          <Plus />
          Add Question
        </button>
      </main>
    </div>
  );
}
