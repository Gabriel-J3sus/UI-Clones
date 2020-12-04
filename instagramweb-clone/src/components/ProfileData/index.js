import ProfileHeader from '../ProfileHeader';
import Photos from '../Photos';

import { Container, } from './styles';

function ProfileData() {
    return (
        <Container>
            <ProfileHeader />

            <Photos />
        </Container>
    );
}

export default ProfileData;