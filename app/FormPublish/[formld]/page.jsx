"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PublishFormPage() {
  const { formId } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!formId) return;

    const publishForm = async () => {
      try {
        // STEP 1 — Get form data
        const formRes = await fetch(`/api/forms/${formId}`);
        const formData = await formRes.json();

        // STEP 2 — Save updated form content
        await fetch("/api/forms/update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formId,
            data: formData
          })
        });

        // STEP 3 — Publish form
        await fetch("/api/forms/publish", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ formId })
        });

        router.push("/dashboard/events");

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    publishForm();

  }, [formId, router]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      {loading ? "Publishing Form..." : "Done"}
    </div>
  );
}