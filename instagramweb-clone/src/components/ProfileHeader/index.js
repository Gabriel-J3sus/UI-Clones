import { 
    Container,
    AvatarWrapper,
    Avatar,
    UserData,
    ConfigContainer,
    Buttons,
    Data,
    Description,
    StoriesContainer,
    Stories,
    Circle,
} from './styles';

import { RiArrowDownSFill } from 'react-icons/ri';

function ProfileHeader() {
    return (
        <Container>
            <AvatarWrapper>
                <Avatar />

                <UserData>
                    <ConfigContainer>
                        <h1>Profile Name</h1>

                        <Buttons>
                            <button> Follow </button>
                            <button> 
                                <RiArrowDownSFill size={18} fill="#FFFF" />     
                            </button> 
                            <button> <div /> <div /> <div /> </button>
                        
                        </Buttons>
                    </ConfigContainer>
                    
                    <Data>
                        <span>
                            <p><strong>79</strong> posts</p>
                        </span>

                        <span>
                            <p><strong>379</strong> followers</p>
                        </span>
                          
                        <span>
                            <p><strong>179</strong> following</p>
                        </span>
                    </Data>

                    <Description>
                        <h2>Profile Name</h2>

                        <p> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                    </Description>

                </UserData>
            </AvatarWrapper>

            <StoriesContainer>
                <Stories>
                    <div> <Circle /> </div>

                    <p>Name</p>
                </Stories>

                <Stories>
                    <div> <Circle /> </div>

                    <p>Name</p>
                </Stories>
                
                <Stories>
                    <div> <Circle /> </div>

                    <p>Name</p>
                </Stories>
            </StoriesContainer>
        </Container>
    );
}

export default ProfileHeader;