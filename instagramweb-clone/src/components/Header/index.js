import InstagramImg from '../../images/instagram.svg';

import { AiOutlineHome } from 'react-icons/ai';
import { IoMdPaperPlane } from 'react-icons/io';
import { FaRegCompass } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';

import { Container, Wrapper, Circle } from './styles';

function Header() {
    return (
        <Container>
            <Wrapper>
                <img src={InstagramImg} alt="Instagram" style={{ width: 104, height: 30 }}/>

                <input type="text" placeholder="Search"/>
                
                <div className="icons-container">
                    <span>
                        <AiOutlineHome size={22} color="#262626" />
                    </span>
                    
                    <span style={{ position: 'relative' }}>
                        <IoMdPaperPlane size={28} color="#262626" />
                        <div> <p>5</p> </div>
                    </span>

                    <span>
                        <FaRegCompass size={22} color="#262626" />
                    </span>

                    <span>
                        <BsHeart size={22} color="#262626" />
                    </span>

                    <Circle />
                </div>

            </Wrapper>
        </Container>
    );
}

export default Header;