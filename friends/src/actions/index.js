import axios from 'axios';

export const UPDATING = "UPDATING";

export const updateFriends = () => {
    dispatchEvent({ type:UPDATING });
    axios('http://localhost:5000/api/friends')
        .then(res => console.log(res))
        .catch(err => console.log(err));
}