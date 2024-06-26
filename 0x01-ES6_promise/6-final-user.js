import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const arr = [];
    for (const val of values) {
      arr.push({ status: val.status, value: val.value || val.reason });
    }
    return arr;
  });
}
