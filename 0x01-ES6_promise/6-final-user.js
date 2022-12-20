import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]).then((res) => res.map((item) => ({
    status: item.status,
    value: item.value === 'fulfilled' ? item.value : item.reason,
  })));
}
