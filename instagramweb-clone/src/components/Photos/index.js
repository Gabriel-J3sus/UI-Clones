import { Container, Buttons, Img } from './styles';

import { AiOutlineTable } from 'react-icons/ai';
import { BiUserPin } from 'react-icons/bi';

function Photos() {
    return (
        <Container>
            <Buttons>
                <button> <AiOutlineTable size={18} fill="#262626" style={{ marginRight: 6.75, flexShrink: 0 }}/> POSTS</button>
                <button> <BiUserPin size={18} fill="#8F8F8F" style={{ marginRight: 6.75, flexShrink: 0 }}/> TAGGED </button>
            </Buttons>

            <ul>
                <li><Img/></li>
                <li><Img/></li>
                <li><Img/></li>
                <li><Img/></li>
                <li><Img/></li>
                <li><Img/></li>
                <li><Img/></li>
                <li><Img/></li>
                <li><Img/></li>
            </ul>
        </Container>
    );
}

export default Photos;