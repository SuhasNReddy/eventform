import React from 'react';
import styles from './styles/EventRegistrationDetail.module.css'; // Import CSS module

const EventRegistrationDetail = ({event}) => {

  return (
    <div className={styles.eventDetails}>
      <div className={styles.details}>
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Event Registration Details</h2>

        <div className={styles.registration}>
          <p><strong>Name:</strong> {event.name}</p>
          <p><strong>Email:</strong> {event.email}</p>
          <p><strong>Age:</strong> {event.age}</p>
          {/* {event.attendingWithGuest && (
            <p><strong>Attending with Guest:</strong> Yes</p>
          )} */}
          {event.attendingWithGuest && (
            <p><strong>Guest Name:</strong> {event.guestName}</p>
          )}
          <p ><strong>Time:</strong> {event.dateTime}</p>
          {/* <p ><strong>Time:</strong> {event.time}</p> */}
        </div>
        
      </div>
    </div>
  );
};

export default EventRegistrationDetail;
