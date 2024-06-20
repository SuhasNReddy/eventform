import React from 'react';
import EventRegistrationDetails from './EventRegestrationDetails';
import styles from './styles/AllEventDetails.module.css'; // Import module CSS file for AllEventDetails

const AllEventDetails = ({ allEvents }) => {
  return (
    <div className={styles.allEventDetailsContainer}>
      {allEvents.length > 0 ? (
        allEvents.map((event, index) => (
          <EventRegistrationDetails key={index} event={event} />
        ))
      ) : (
        <p className={styles.noEventsMessage}>No registrations yet</p>
      )}
    </div>
  );
};

export default AllEventDetails;
