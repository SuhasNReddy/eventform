import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles/EventRegistrationFrom.module.css'; // Import the CSS module

const EventRegistrationForm = ({ setAllEvents }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [attendingWithGuest, setAttendingWithGuest] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};
    if (!name) validationErrors.name = 'Name is required';
    if (!email) validationErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) validationErrors.email = 'Email is invalid';
    if (!age) validationErrors.age = 'Age is required';
    else if (isNaN(age) || age <= 0) validationErrors.age = 'Age must be a number greater than 0';
    if (attendingWithGuest && !guestName) validationErrors.guestName = 'Guest name is required';
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const eventData = {
        name,
        email,
        age,
        attendingWithGuest,
        guestName,
        dateTime: new Date().toLocaleString() // Store current date and time
      };
      setAllEvents(prevEvents => [...prevEvents, eventData]); // Update events array
      toast.success('Form submitted successfully!');
      console.log(eventData);
      setName('');
      setEmail('');
      setAge('');
      setAttendingWithGuest(false);
      setGuestName('');
      setErrors({});
    } else {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((error) => toast.error(error));
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formFields}>
          <label className={styles.formLabel}>
            <div>Name:</div>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
            </div>
          </label>
          <label className={styles.formLabel}>
            <div>Email:</div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </div>
          </label>
          <label className={styles.formLabel}>
            <div>Age:</div>
            <div>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                name="age"
              />
            </div>
          </label>
          <label className={styles.formLabel}>
            <div className={styles.guestWrapper}>
              <div className={styles.checkboxtext}>Are you attending with a guest?</div>
              <div>
                <input
                  type="checkbox"
                  checked={attendingWithGuest}
                  onChange={(e) => setAttendingWithGuest(e.target.checked)}
                  name="attendingWithGuest"
                />
              </div>
            </div>
          </label>
          {attendingWithGuest && (
            <label className={styles.formLabel}>
              <div>Guest Name:</div>
              <div>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  name="guestName"
                />
              </div>
            </label>
          )}
          <button className={styles.submitButton} type="submit">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EventRegistrationForm;
