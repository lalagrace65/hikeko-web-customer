import styled from "styled-components";
import Center from "./Center";
import Link from "next/link";
import { MdOutlineAccountCircle } from "react-icons/md";

const StyledHeader = styled.header`
    background-color: #222;
    `;
const Logo =styled(Link)`
    color:#fff;
    text-decoration: none;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;
const StyledNav = styled.div`
    display: flex;
    gap: 15px;
`;
const NavLink = styled(Link)`
    color:#aaa;
    text-decoration: none;
`;

export default function Header(){
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}>HikeKo</Logo>
                    <StyledNav>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/trails-header/allTrails'}>Trails</NavLink>
                        <NavLink href={'/'}>Categories</NavLink>
                        <NavLink href={'/'}><MdOutlineAccountCircle />Account</NavLink>
                        <NavLink href={'/'}>Book</NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}