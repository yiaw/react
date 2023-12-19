import { AppBar, IconButton, Toolbar, Typography, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components'
// 컴포넌트 style 지정하기
const WrapperHeader = styled(AppBar)`
  &&& {
    display: flex;
    flex-direction: row;
    position: static;
    border-bottom: solid 1px ${({ theme }) => theme.palette.divider};
  }
`
// html tag style 하기
const HeaderItem = styled.div`
    display: flex;
    flex-grow: 1;
`;

const Header = (props) => {
    const theme = useTheme()
    const { onToggle } = props
    return (
        <WrapperHeader theme={theme} >
            <Toolbar>
                <HeaderItem>
                    <IconButton sx={{ color: 'white' }} onClick={onToggle}>
                        <MenuIcon />
                    </IconButton>
                </HeaderItem>
                <HeaderItem>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        EMS Monitoring
                    </Typography>
                </HeaderItem>
            </Toolbar>
        </WrapperHeader>

    )
}

export default Header;