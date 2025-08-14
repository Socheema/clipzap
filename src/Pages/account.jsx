import { useEffect, useRef, useState } from "react";
import FooterComponent from "../Components/footer";
import NavbarComponent from "../Components/header";
import { Link } from "react-router-dom";

function Account({ onClose }) {
  const [profile, setProfile] = useState({
    displayName: "Clipzap User",
    email: "user@example.com",
    plan: "Free",
    avatarUrl: "",
  });
  const [editing, setEditing] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("clipzap:profile");
      if (saved) setProfile(JSON.parse(saved));
    } catch (error) {
      console.error("Failed to load profile from localStorage:", error);
    }
  }, []);

  // Fixed syntax error: proper catch block syntax
  useEffect(() => {
    try {
      localStorage.setItem("clipzap:profile", JSON.stringify(profile));
    } catch (e) {
      console.error("Failed to save profile to localStorage:", e);
    }
  }, [profile]);

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setProfile((p) => ({ ...p, [name]: value }));
  };

  const onAvatarPick = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () =>
      setProfile((p) => ({ ...p, avatarUrl: String(reader.result) }));
    reader.readAsDataURL(f);
  };

  const logout = () => {
    localStorage.removeItem("clipzap:authToken");
    window.dispatchEvent(new CustomEvent("clipzap:logout"));
  };

  return (
    <div className="min-h-screen bg-blue-[#000080]">
      <NavbarComponent />
      <div
        style={{ maxWidth: 720, margin: "0 auto", padding: 24, color: "#fff" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <h1 style={{ margin: 0 }}>Account</h1>
          {onClose && (
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                fontSize: 24,
                cursor: "pointer",
                padding: 8,
                borderRadius: 4,
                color: "#666",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
              }}
              title="Close"
              onMouseEnter={(e) => (e.target.style.backgroundColor = "red")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              ×
            </button>
          )}
        </div>

        <section
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            padding: 16,
            border: "1px solid #eee",
            borderRadius: 8,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              overflow: "hidden",
              background: "#f3f3f3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
            }}
          >
            {profile.avatarUrl ? (
              <img
                alt="avatar"
                src={profile.avatarUrl}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              profile.displayName.slice(0, 1).toUpperCase()
            )}
          </div>
          <div style={{ flex: 1 }}>
            {editing ? (
              <>
                <input
                  name="displayName"
                  value={profile.displayName}
                  onChange={onFieldChange}
                  placeholder="Name"
                  style={{ display: "block", marginBottom: 8, width: "100%" }}
                />
                <input
                  name="email"
                  value={profile.email}
                  onChange={onFieldChange}
                  placeholder="Email"
                  style={{ display: "block", marginBottom: 8, width: "100%" }}
                />
              </>
            ) : (
              <>
                <div style={{ fontSize: 18, fontWeight: 600 }}>
                  {profile.displayName}
                </div>
                <div style={{ color: "#666" }}>{profile.email}</div>
              </>
            )}

            <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
              <button onClick={() => setEditing((e) => !e)}>
                {editing ? "Save" : "Edit profile"}
              </button>
              <button onClick={() => fileInputRef.current?.click()}>
                Change avatar
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={onAvatarPick}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: "#666" }}>Plan</div>
            <div style={{ fontWeight: 600 }}>{profile.plan}</div>
          </div>
        </section>

        <section
          style={{
            marginTop: 16,
            padding: 16,
            border: "1px solid #eee",
            borderRadius: 8,
          }}
        >
          <h2 style={{ marginTop: 0 }}>Subscription</h2>
          <p style={{ marginTop: 0, color: "#555" }}>
            {profile.plan === "Pro"
              ? "You are on the Pro plan."
              : "You are on the Free plan."}
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {profile.plan === "Pro" ? (
              <button
                onClick={() => setProfile((p) => ({ ...p, plan: "Free" }))}
              >
                Downgrade to Free
              </button>
            ) : (
              <button
                onClick={() => setProfile((p) => ({ ...p, plan: "Pro" }))}
              >
                Upgrade to Pro
              </button>
            )}
            <button onClick={() => alert("Manage billing coming soon")}>
              Manage billing
            </button>
          </div>
        </section>

        <section
          style={{
            marginTop: 16,
            padding: 16,
            border: "1px solid #fee",
            background: "#fff7f7",
            borderRadius: 8,
          }}
        >
          <h2 style={{ marginTop: 0 }}>Danger zone</h2>
          <button
            style={{
              background: "#e11",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: 6,
              cursor: "pointer",
            }}
            onClick={logout}
          >
            <Link to={"/"}>Sign out</Link>
          </button>
        </section>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Account;
