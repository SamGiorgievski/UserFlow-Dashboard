import { useMutation, gql } from '@apollo/client';

const updateProfileMutation = gql`mutation UpdateProfile($updateProfileId: String!, $firstName: String!, $lastName: String!, $email: String!, $isVerified: Boolean!, $imageUrl: String!, $description: String!) {
  updateProfile(id: $updateProfileId, first_name: $firstName, last_name: $lastName, email: $email, is_verified: $isVerified, image_url: $imageUrl, description: $description) {
    id
    first_name
    last_name
    email
    is_verified
    image_url
    description
  }
}`;

export default updateProfileMutation;