import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Reserve() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    room: '',
    title: '',
    date: '',
    timeStart: '', // <-- ใส่เครื่องหมาย ; เพื่อแยกค่า
    timeEnd: '' // <-- ไม่ต้องใส่เครื่องหมาย , ในครั้งสุดท้าย
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 w-full">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="mt-10 p-8 border rounded-lg w-1/2 min-w-[800px] mx-auto bg-white shadow-md">
        <h2 className="text-2xl mb-4 font-bold">กรุณากรอกข้อมูลการจอง</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            {/* Your form fields here */}
            <div className="grid grid-cols-2 gap-4">
  <div className="flex flex-col">
    <label htmlFor="firstName" className="label-text">ชื่อ</label>
    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      placeholder="ชื่อ"
      className="input input-bordered"
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="lastName" className="label-text">นามสกุล</label>
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      placeholder="นามสกุล"
      className="input input-bordered"
    />
  </div>
</div>
<div className="grid grid-cols-2 gap-4">
  <div className="flex flex-col">
    <label htmlFor="phoneNumber" className="label-text">เบอร์โทรศัพท์</label>
    <input
      type="text"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleChange}
      placeholder="เบอร์โทรศัพท์"
      className="input input-bordered"
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="email" className="label-text">อีเมล</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="อีเมล"
      className="input input-bordered"
    />
  </div>
</div>
           
            <div className="grid grid-cols-2 gap-4">
  <div className="flex flex-col">
    <label htmlFor="room" className="label-text">ห้องที่ต้องการจอง</label>
    <input
      type="text"
      name="room"
      value={formData.room}
      onChange={handleChange}
      placeholder="ห้องที่ต้องการจอง"
      className="input input-bordered"
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="title" className="label-text">หัวข้อการจอง</label>
    <input
      type="text"
      name="title"
      value={formData.title}
      onChange={handleChange}
      placeholder="หัวข้อการจอง"
      className="input input-bordered"
    />
  </div>
</div>

            <input
            
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="วันที่"
              className="input input-bordered"
            />
            <input
              type="time"
              name="timeStart"
              value={formData.timeStart}
              onChange={handleChange}
              placeholder="เวลาเริ่มต้น"
              className="input input-bordered"
            />
            <input
              type="time"
              name="timeEnd"
              value={formData.timeEnd}
              onChange={handleChange}
              placeholder="เวลาสิ้นสุด"
              className="input input-bordered"
            />
            <button
  type="submit"
  className="btn bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
>
  <Link to="/payment">ยืนยันการจอง</Link>
</button>
          </form>
        </div>
      </div>
    </div>
  );
}
