import { useMutation, gql } from '@apollo/client';

const deleteProfileMutation = gql`
mutation DeleteProfile($deleteProfileId: String!) {
  deleteProfile(id: $deleteProfileId)
}`;

export default deleteProfileMutation;