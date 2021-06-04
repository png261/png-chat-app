import db from 'src/firebase';
import { isWithin7Days } from 'src/helpers/time';

export const deleteOldRooms = () => {
    const ref = db.collection('rooms');
    db.collection('rooms').onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
            const seconds = doc.data().time.seconds;
            if (isWithin7Days(seconds)) {
                ref.doc(doc.id).delete();
            }
        });
    });
};

export const deleteOldMessagesWelcome = () => {
    const ref = db
        .collection('rooms')
        .doc('CDzO0McErWMJd9CW06wG')
        .collection('messages');

    db.collection('rooms')
        .doc('CDzO0McErWMJd9CW06wG')
        .collection('messages')
        .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                const seconds = doc.data().time.seconds;
                if (isWithin7Days(seconds)) {
                    ref.doc(doc.id).delete();
                }
            });
        });
};
