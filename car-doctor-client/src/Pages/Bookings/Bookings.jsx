 import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    } ,[]);



    const handleDelete = id => {
      const proceed = confirm('Are you sure you want to delete')
      if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
            alert('deleted success')
            const remaining = bookings.filter(booking => booking._id !== id)
            setBookings(remaining)
          }
        })
      }
     }


    return (
        <div>
            <h1>Your bookings : {bookings.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Img</th>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
        {
            bookings.map(booking => <BookingRow
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
            ></BookingRow>)
        }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Bookings;