import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import './Style.css'; // Assuming you want to keep the same style

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '',
    date: '',
    time: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('🎉 Reservation Successful! We will see you soon.');
        setFormData({ name: '', phone: '', guests: '', date: '', time: '' });
      } else {
        setMessage(`❌ Error: ${data.message || 'Something went wrong'}`);
      }
    } catch (error) {
      setMessage('❌ Error: Could not connect to server.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="reservation-container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Book A Table</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto', gap: '15px' }}>
          
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={{ padding: '10px' }} />
          
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={{ padding: '10px' }} />
          
          <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} required style={{ padding: '10px' }} />
          
          <input type="date" name="date" value={formData.date} onChange={handleChange} required style={{ padding: '10px' }} />
          
          <input type="time" name="time" value={formData.time} onChange={handleChange} required style={{ padding: '10px' }} />

          <button type="submit" style={{ padding: '12px', background: '#d4af37', color: 'white', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
            Confirm Reservation
          </button>
        </form>

        {message && <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>{message}</p>}
      </div>
    </div>
  );
};

export default Reservation;