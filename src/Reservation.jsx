import React, { useState } from 'react';
import Navbar from './Components/Navbar';
// import './Reservation.css'; 

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        guests: '',
        date: '',
        time: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Processing your request...' });

        try {
            const response = await fetch('http://localhost:5001/api/reservations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: '🎉 Table Booked Successfully!' });
                setFormData({ name: '', phone: '', guests: '', date: '', time: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Slot is full.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Server is offline. Try again later.' });
        }
    };

    return (
        <div className="reservation-main-container">
            <Navbar />
            <div className="reservation-first-container">
                <div className="reservation-card-container">
                    <h2 className="reservation-title">Secure Your Table</h2>
                    <p className="reservation-subtitle">Join us for an unforgettable culinary journey.</p>
                    
                    <form onSubmit={handleSubmit} className="reservation-form-container">
                        <div className="reservation-input-group">
                            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="reservation-input-field" />
                            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="reservation-input-field" />
                        </div>
                        
                        <div className="reservation-input-group">
                            <input type="number" name="guests" placeholder="Guests" min="1" value={formData.guests} onChange={handleChange} required className="reservation-input-field" />
                            <input type="date" name="date" min={today} value={formData.date} onChange={handleChange} required className="reservation-input-field" />
                        </div>

                        <input type="time" name="time" min="10:00" max="23:00" value={formData.time} onChange={handleChange} required className="reservation-input-field" />
                            <p className="reservation-note">Note: Tables are reserved for 1 hour from the booking time.</p>
                        <button type="submit" className="reservation-submit-btn">
                            {status.type === 'loading' ? 'Booking...' : 'CONFIRM RESERVATION'}
                        </button>
                    </form>

                    {status.message && (
                        <div className={`reservation-status-msg ${status.type}`}>
                            {status.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reservation;