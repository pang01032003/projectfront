import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
     
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 w-full">
   <div class="flex flex-col justify-center items-center h-screen">
    <div className="mt-10 p-8 border rounded-lg w-1/2 min-w-[800px] mx-auto bg-white shadow-md">
    <h3 className="text-lg mb-6 font-semibold">Meeting room list</h3>
      <div className="mb-6">
      <img 
  src="https://i.pinimg.com/736x/a6/bf/ab/a6bfaba8a0fa65d878b28ed9f534dd7d.jpg"
  alt="User Avatar"
  class="w-[150px] h-[100px] object-cover inline-block mr-4 mt-[-4rem]"
/>
<div class="mb-6 mt-6 inline-block">
  <h3 class="text-sm font-semibold mb-2 border bg-blue-200 inline-block rounded-md px-3">ห้องประชุม 1</h3>
  <p class="text-sm">ห้องประชุมพร้อมระบบ Video conference ที่นั่งผู้เข้าร่วมประชุมตัว U</p>
  <p class="text-sm">ห้องประชุมขนาดเล็ก อัตราค่าใช้จ่าย ครึ่งวัน 1,000 บาท เต็มวัน 2,000 บาท</p>
  
</div>
<Link to="/reserve">
  <h3 class="absolute right-55 top-110 mt-10 text-sm mb-2 border bg-red-400 inline-block rounded-md px-3 font-normal font-bold p-2">จองห้องประชุม</h3>
  </Link>


<div className="mb-6 mt-6">
  <img 
    src="https://i.pinimg.com/736x/2a/0b/9a/2a0b9ad6555aac19b98b8342dc7478d7.jpg"
    alt="User Avatar"
    class="w-[150px] h-[100px] object-cover inline-block mr-4 mt-[-4rem]"
  />
  <div class="mt-6 mb-6 inline-block">
    <h3 class="text-sm font-semibold mb-2 border bg-blue-200 inline-block rounded-md px-3">ห้องประชุม 1</h3>
    <p class="text-sm">ห้องประชุมใหญ่ รองรับระบบ Conference อัตราค่าใช้จ่าย ครึ่งวัน 1,500 บาท </p>
    <p class="text-sm">เต็มวัน 3,000 บาท</p>
  </div>
  <Link to="/reserve">
  <h3 class="absolute right-55 top-110 mt-10 text-sm mb-2 border bg-red-400 inline-block rounded-md px-3 font-normal font-bold p-2">จองห้องประชุม</h3>
  </Link>
</div>

      </div>
      
      <div>
      <img 
    src="https://i.pinimg.com/736x/93/b5/a4/93b5a43cc245cca2cd3c46a7ee209931.jpg"
    alt="User Avatar"
    class="w-[150px] h-[100px] object-cover inline-block mr-4 mt-[-4rem]"
  />
  <div class="mt-10 mb-6 inline-block">
   <h3 class="text-sm font-semibold mb-2 border bg-blue-200 inline-block rounded-md px-3 mt-[-5px]">ห้องประชุม 1</h3>
<p class="text-sm mt-[-5px]">ห้องขนาดใหญ่ (Hall) อัตราค่าใช้จ่าย ครึ่งวัน 3,000 บาท เต็มวัน 6,000 บาท</p>
    
  </div>
  
    
  <Link to="/reserve">
      <h3 className="absolute right-55 top-110 mt-10 text-sm mb-2 border bg-red-400 inline-block rounded-md px-3 font-normal font-bold p-2">จองห้องประชุม</h3>
    </Link>
  
      </div>
    </div>
    </div>
    </div>
    
    
  );
}
