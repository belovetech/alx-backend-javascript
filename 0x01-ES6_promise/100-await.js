import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photoRes = await uploadPhoto();
  const userRes = await createUser();

  return { photo: photoRes, user: userRes };
}
