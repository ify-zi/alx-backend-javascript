export default function signUpUser(firstName, lastName) {
  const object =
		{
			firstName,
			lastName
		};
	return new Promise((resolve, reject) => {
		if (firstName && lastName) {
			resolve(object);
		} else {
			reject(Error('error'));
		}
	});
}
