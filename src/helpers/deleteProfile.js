import { useMutation, gql } from '@apollo/client';

const updateProfileMutation = gql`
mutation DeleteProfile($deleteProfileId: String!) {
  deleteProfile(id: $deleteProfileId)
}`;

export default updateProfileMutation;