import axios from 'axios';
import { useState } from "react";
import useAuth from '../hooks/useAuth';

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    email: '', 
    password: ''
  });

  const handleChange = e => {
    setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {

      const response = await axios.post('http://localhost:3000/auth/login', input);
      
      localStorage.setItem('token', response.data.token);
      
      const userResponse = await axios.get('http://localhost:3000/auth/me', {
        headers: { Authorization: `Bearer ${response.data.token}` }
      });
      
      setUser(userResponse.data);
    } catch(err) {
      console.error('Login failed:', err);
    }
  };

  const handleFacebookLogin = () => {
    window.location.href = "https://www.facebook.com/v10.0/dialog/oauth?client_id=your_client_id&redirect_uri=your_redirect_uri&response_type=code&scope=email,user_friends";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 border rounded-lg shadow-lg bg-white max-w-md w-full">
        <div className="text-3xl text-center mb-5">เข้าสู่ระบบ</div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="text-sm font-semibold">อีเมล</span>
            <input
              type="text"
              className="input input-bordered"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-semibold">รหัสผ่าน</span>
            <input
              type="password"
              className="input input-bordered"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-auto">
            เข้าสู่ระบบ
          </button>
          <button className="btn btn-primary mt-4 w-full" onClick={handleFacebookLogin}>
            เข้าสู่ระบบด้วย Facebook
          </button>

          <div className="text-sm text-center mb-1" style={{ display: 'flex', justifyContent: 'center' }}>
            <span>
              <a href="/register">สร้างบัญชี</a>
            </span> 
            <span style={{ margin: '0 5px' }}>|</span> 
            <span>ลืมรหัส</span>
          </div>
        </form>
      </div>
    </div>
  );
}
