"use client"

import React from 'react'
import {
    Plus,
    FileText,
    Eye,
    Trash2,
    Copy,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from 'react';
import "./yourform.css"

import { createDraft, listDrafts, deleteDraft } from "@/lib/drafts";
import { useRouter } from "next/navigation";


const Page = () => {

      const [forms, setForms] = useState([]);


    useEffect(() => {
        const load = async () => {
            const res = await fetch("/api/forms/mine", { cache: "no-store" });
                    const payload = await res.json();

            const savedForms = Array.isArray(payload)
                ? payload
                : Array.isArray(payload?.forms)
                  ? payload.forms
                  : [];

            const drafts = listDrafts();

             setForms([...(drafts || []), ...savedForms]);
        };

        load();
    }, []);

    // const createNewForm = () => {
    //     const newForm = {
    //         id: Date.now().toString(),
    //         title: "Untitled Form",
    //         description: "",
    //         createdAt: new Date().toISOString(),
    //         questions: 0,
    //     };

    //     const updatedForms = [newForm, ...forms];
    //     setForms(updatedForms);
    //     localStorage.setItem(
    //         "unilynk-forms",
    //         JSON.stringify(updatedForms),
    //     );
    // };

    const router = useRouter();

    const handleCreate = () => {
        const draft = createDraft(); // create local draft
        router.push(`/FormBuilder/${draft._id}`); // open builder
    };


    // const deleteForm = async (id, e) => {
    //     e.preventDefault();
    //     e.stopPropagation();


    //     if (id.startsWith("draft_")) {
    //         deleteDraft(id);

    //         setForms((prev) => prev.filter((f) => f._id !== id));
    //         return;
    //     }


    //     try {
    //         const res = await fetch(`/api/forms/delete/${id}`, {
    //             method: "DELETE",
    //         });

    //         if (!res.ok) throw new Error("Delete failed");

    //         setForms((prev) => prev.filter((f) => f._id !== id));
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };







    const deleteForm = async (id, e) => {
        e.preventDefault();
        e.stopPropagation();

        // 🟡 Draft or local-only form
        if (!id || id.startsWith("draft_")) {
            deleteDraft(id);
            setForms((prev) => prev.filter((f) => f._id !== id));
            return;
        }

        // 🟢 MongoDB form
        try {
            const res = await fetch(`/api/forms/delete/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if (!res.ok) {
                alert("This form is not saved in database yet");
                return;
            }

            setForms((prev) =>
                prev.filter((f) => f._id.toString() !== id.toString())
            );
        } catch (err) {
            console.error(err);
        }
    };








    const duplicateForm = (id, e) => {
        e.preventDefault();
        e.stopPropagation();

        const formToDuplicate = forms.find((form) => form._id === id);

        if (!formToDuplicate) return;

        // Duplicate as NEW DRAFT
        const newDraft = {
              ...createDraft(),
            ...formToDuplicate,
    
            title: `${formToDuplicate.title} (Copy)`,
          
            isPublished: false,
        };

        localStorage.setItem(`draft-${newDraft._id}`, JSON.stringify(newDraft));

        setForms((prev) => [newDraft, ...prev]);
    };

    return (
        <div className="home-container">

            {/* Main Content */}
            <main className="home-main">
                {forms.length === 0 ? (
                    <div className="home-empty-state">
                        <div className="empty-illustration">
                            <div className="circle-bg">
                                <div className="home-empty-icon">
                                    <FileText />
                                </div>
                            </div>
                        </div>
                        <h2 className="home-empty-title">No forms yet</h2>
                        <p className="home-empty-text">
                            Create your first form to get started
                        </p>
                        <button
                            onClick={handleCreate}
                            className="btn-new-form"
                        >
                            <Plus />
                            Create Form
                        </button>
                    </div>
                ) : (
                    <div>
                        {/* <h2 className="home-section-title">Recent Forms</h2> */}
                        <div className="forms-container">
                            <div className="forms-grid">
                                {forms.map((form) => (
                                    <div
                                        key={form._id?.toString()}
                                        className="form-card"
                                    >
                                        <div className="form-card-header">
                                            <div className="form-card-top">
                                                <div className="form-card-icon">
                                                    <FileText />
                                                </div>

                                                <h3 className="form-card-title">
                                                    {form.title}
                                                </h3>
                                            </div>
                                            {form._id?.startsWith("draft_") && (
                                                <span className="draft-badge">Draft</span>
                                            )}

                                            <div className="form-card-actions">
                                                <button
                                                    onClick={(e) => duplicateForm(form._id, e)}
                                                    className="btn-icon"
                                                    title="Duplicate"
                                                >
                                                    <Copy />
                                                </button>
                                                <button
                                                    onClick={(e) => deleteForm(form._id, e)}
                                                    className="btn-icon"
                                                    title="Delete"
                                                >
                                                    <Trash2 />
                                                </button>
                                            </div>
                                        </div>

                                        <p className="form-card-description">
                                            {form.description || "No description"}
                                        </p>

                                        {/* <h3 className="form-card-title">
                                        {form.title}
                                    </h3>
                                    <p className="form-card-description">
                                        {form.description || "No description"}
                                    </p> */}
                                        <div className="form-card-meta">
                                            <span>{form.questions?.length || 0} questions</span>

                                            <span>
                                             {form.createdAt ? new Date(form.createdAt).toLocaleDateString() : "-"}
                                            </span>
                                        </div>
                                        <div className="form-card-footer">
                                            <Link
                                                // href={`/builder/${form.id}`}
                                                href={`/FormBuilder/${form._id}`}
                                                className="btn-edit"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FileText />
                                                Edit
                                            </Link>
                                            {form.isPublished ? (
                                                <Link
                                                    href={`/analytics/${form._id}`}
                                                    className="btn-preview"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Eye />
                                                    View Analytics
                                                </Link>
                                            ) : (
                                                <Link
                                                    href={`/FormPreview/${form._id}`}
                                                    className="btn-preview"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Eye />
                                                    Preview
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

export default Page
