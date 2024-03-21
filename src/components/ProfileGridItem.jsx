import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme, textStyle }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    fontSize: ['0.3rem', '1rem', '1.1rem'],
    textAlign: 'justify',
    boxShadow: 'none',
    ...textStyle,
    // fontWeight: 'bold',
    color: '#696967'

}));

const ProfileGridItem = ({ label, value, style }) => {
    return (
        <Item textstyle={style} sx={{ borderRadius: '1.2rem', backgroundColor: '#ffffff8f' }}>
            {label} - {value}
        </Item>
    );
};

export default ProfileGridItem;
