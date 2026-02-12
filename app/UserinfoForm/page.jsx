"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import "./UserinfoForm.css";

export default function UserinfoPage() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [skill, setSkill] = useState("");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Max size is 5MB");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/user/upload-image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      // UPDATE USER STATE INSTEAD OF RELOADING
      setUser((prev) => ({
        ...(prev || {}),
        img: data.url,
      }));

    } catch (err) {
      console.error("Upload failed:", err);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !branch || !year) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setSaving(true);

      const res = await fetch("/api/user/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // REQUIRED for NextAuth
        body: JSON.stringify({ name, branch, year, skill }),
      });

      const data = await res.json();

      if (res.status === 401) {
        alert("Session expired. Please sign in again.");
        router.push("/");
        return;
      }

      if (!res.ok) {
        throw new Error(data.error || "Profile update failed");
      }

      router.push("/dashboard");
    } catch (err) {
      console.error("Submit error:", err);
      alert(err.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/user/me");
      if (!res.ok) return;

      const data = await res.json();

      setUser(data);

      //  PREFILL FORM VALUES
      setName(data.name || "");
      setBranch(data.branch || "");
      setYear(data.year || "");
      setSkill(data.skill || "");
    };

    fetchUser();
  }, []);

  return (

    <div className="userinfoformbody">
      <form className='userdetailcard' onSubmit={handleSubmit}>
        <div className="detailhead">
          <div className="userprofilepic">
            <div className={`defaultimg ${user?.img ? "has-img" : "no-img"}`} onClick={handleAvatarClick}>
              <img
                key={user?.img} //  forces re-render
                src={
                  user?.img
                    ? `${user.img}?t=${Date.now()}`
                    : "https://res.cloudinary.com/dpzqayckn/image/upload/v1770035267/default-avatar-profile-icon-_d6zcya.avif"
                }
                alt="profile"
              />
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleUpload}
              disabled={uploading}
              style={{ display: "none" }}
            />
          </div>

          <div className="plus" onClick={handleAvatarClick}>+</div>
          <div className="headtext">
            <div className="unilynk">Unilynk</div>
            <div className="studentreg">Student Registration</div>
          </div>
        </div>
        <div className="detailmain">
          <div className="name">
            <div className="detailslabel"> <img className='detailsicon' src="/Userprofile/name.svg" alt="" />NAME</div>
            <input className='nameinput' type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="branch-year">
            <div className="branch">
              <div className="detailslabel"><img className='detailsicon' src="/Userprofile/Suitcase.svg" alt="" />BRANCH</div>
              <select required className='branch-yearinput' name="branch" value={branch}
                onChange={(e) => setBranch(e.target.value)}>
                <option value="Select">Select</option>
                <option value="PIE">Production and Industrial Engineering</option>
                <option value="CSE">Computer Science and Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="ME">Mechanical Engineering</option>
                <option value="EE">Electrical Engineering</option>
                <option value="ECE">Electronics and Communication Engineering</option>
                <option value="CE">Civil Engineering</option>
                <option value="MNC">Mathematics and Computing</option>
                <option value="SET">SUSTAINABLE ENERGY TECHNOLOGIES</option>
                <option value="RA">ROBOTICS & AUTOMATION</option>
                <option value="VLSI">Microelectronics & VLSI Engineering</option>
                <option value="IIoT">Industrial Internet of Things</option>
                <option value="AIML">Artificial Intelligence and Machine Learning</option>
                <option value="AIDS">Artificial Intelligence and Data Science</option>
                <option value="Arch">	Architecture</option>
              </select>
            </div>
            <div className="year">
              <div className="detailslabel"><img className='detailsicon' src="/Userprofile/book.svg" alt="" />YEAR</div>
              <select required className='branch-yearinput' name="year" id="" value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="select">Select</option>
                <option value="1">First</option>
                <option value="2">Second</option>
                <option value="3">Third</option>
                <option value="4">Fourth</option>
                <option value="5">Fifth</option>
              </select>
            </div>
          </div>

          <div className="skills">
            <div className="detailslabel"> <img className='detailsicon' src="/Userprofile/name.svg" alt="" />SKILLS</div>
            <textarea className='skillsinput' placeholder='JavaScript, Python, React...' value={skill} onChange={(e) => setSkill(e.target.value)} ></textarea>
          </div>

          <button id="submitusr" type="submit" disabled={saving}>
            {saving ? "Saving..." : "SUBMIT PROFILE"}
          </button>

          <hr className='mt-6 mb-2' />

          <div className="pwdbyunilynk">
            <div className="pwd">POWERED BY</div>
            <div className="unilynkt">UNILYNK</div>
          </div>

        </div>
      </form>
    </div>
  )
} 