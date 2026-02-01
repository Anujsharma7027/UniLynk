"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./UserinfoForm.css";

export default function page() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [skill, setSkill] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !branch || !year) {
    alert("Please fill all required fields");
    return;
  }

  try {
    setLoading(true);

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
    setLoading(false);
  }
};




  return (

    <div className="userinfoformbody">
      <form className='userdetailcard' onSubmit={handleSubmit}>
        <div className="detailhead">
          <div className="userprofilepic">
            <div className="defaultimg"><img src="./Userprofile/Defaultprofilepic.svg" alt="" /></div>

            {/*===================== Uncomment the image enter the src ===================*/}

            {/* <img src="" alt="" className="userimg" /> */}
          </div>
          <div className="plus">+</div>
          <div className="headtext">
            <div className="unilynk">Unilynk</div>
            <div className="studentreg">Student Registration</div>
          </div>
        </div>
        <div className="detailmain">
          <div className="name">
            <div className="detailslabel"> <img className='detailsicon' src="./Userprofile/name.svg" alt="" />NAME</div>
            <input className='nameinput' type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="branch-year">
            <div className="branch">
              <div className="detailslabel"><img className='detailsicon' src="./Userprofile/Suitcase.svg" alt="" />BRANCH</div>
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
              <div className="detailslabel"><img className='detailsicon' src="./Userprofile/book.svg" alt="" />YEAR</div>
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
            <div className="detailslabel"> <img className='detailsicon' src="./Userprofile/name.svg" alt="" />SKILLS</div>
            <textarea className='skillsinput' placeholder='JavaScript, Python, React...' value={skill} onChange={(e) => setSkill(e.target.value)} ></textarea>
          </div>

<button id="submitusr" type="submit" disabled={loading}>
            {loading ? "Saving..." : "SUBMIT PROFILE"}
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
