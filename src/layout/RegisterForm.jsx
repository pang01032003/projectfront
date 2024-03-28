import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../layout/styles.css';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'USER'
  });

  const handleInputChange = e => {
    setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      // Check for password confirmation
      if (formData.password !== formData.confirmPassword) {
        return alert('กรุณาตรวจสอบรหัสผ่านที่ยืนยัน');
      }
      // Send data to the server
      const response = await axios.post('http://localhost:3000/auth/register', formData);
      console.log(response);
      if (response.status === 200) {
        alert('ลงทะเบียนสำเร็จ');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="flex flex-col justify-center items-center mt-10">
    <div className="mt-10 p-8 border rounded-lg w-1/2 min-w-[800px] mx-auto bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">สร้างบัญชี</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="flex flex-col mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="ชื่อ"
            className="input input-bordered mt-4"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="นามสกุล"
            className="input input-bordered mt-4"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="เบอร์โทรศัพท์"
            className="input input-bordered mt-4"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="อีเมล"
            className="input input-bordered mt-4"
          />
        
        
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="รหัสผ่าน"
            className="input input-bordered mt-4"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="ยืนยันรหัสผ่าน"
            className="input input-bordered mt-4"
          />
          
          <button className="btn bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-4">
  <Link to="/reserve">submit</Link>
</button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
}