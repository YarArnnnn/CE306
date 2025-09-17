import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "" });

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`ข้อมูลที่กรอก:\nชื่อ: ${form.name}\nอีเมล: ${form.email}`);
  };

  const handleClear = () => setForm({ name: "", email: "" });

  return (
    <div>
      <h2>User Form Ex</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ชื่อ:
          <input
            type="text"
            value={form.name}
            onChange={handleChange("name")}
          />
        </label>
        <br />
        <label>
          อีเมล:
          <input
            type="email"
            value={form.email}
            onChange={handleChange("email")}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>

      <div>
        <strong>ข้อมูลปัจจุบัน:</strong>
        <p>ชื่อ: {form.name || "ยังไม่ได้กรอก"}</p>
        <p>อีเมล: {form.email || "ยังไม่ได้กรอก"}</p>
      </div>
    </div>
  );
};

export default UserForm;
