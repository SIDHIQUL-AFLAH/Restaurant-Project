import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
// import './Admin.css';

const Admin = () => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchReservations = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/reservations');
            const data = await response.json();
            setReservations(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching reservations:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReservations();
    }, []);

    // THE DELETE LOGIC
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this reservation?")) {
            try {
                const response = await fetch(`http://localhost:5001/api/reservations/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    // Remove the deleted reservation from the UI state immediately
                    setReservations(reservations.filter(res => res._id !== id));
                } else {
                    alert("Failed to delete the reservation.");
                }
            } catch (error) {
                console.error("Delete error:", error);
            }
        }
    };

    return (
        <div className="admin-main-container">
            <Navbar />
            <div className="admin-first-container">
                <div className="admin-content-box">
                    <h2 className="admin-title">Reservation Manager</h2>
                    {loading ? (
                        <div className="admin-loader">Loading Data...</div>
                    ) : (
                        <div className="admin-table-container">
                            <table className="admin-data-table">
                                <thead>
                                    <tr>
                                        <th>Guest Name</th>
                                        <th>Contact</th>
                                        <th>Guests</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Action</th> {/* New Column */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservations.map((res) => (
                                        <tr key={res._id}>
                                            <td className="admin-td-name">{res.name}</td>
                                            <td>{res.phone}</td>
                                            <td>{res.guests} Pax</td>
                                            <td>{new Date(res.date).toLocaleDateString()}</td>
                                            <td>{res.time}</td>
                                            <td>
                                                <button 
                                                    className="admin-delete-btn" 
                                                    onClick={() => handleDelete(res._id)}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;