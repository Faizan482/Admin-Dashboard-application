import React from 'react'
import { Box, useTheme, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';
import Header from '../../components/Header';

const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>An Important Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste nesciunt sapiente deleniti placeat numquam maiores veniam aliquam, atque ipsum ratione minus sequi blanditiis nam laboriosam modi, vel et perferendis.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>Another Important Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste nesciunt sapiente deleniti placeat numquam maiores veniam aliquam, atque ipsum ratione minus sequi blanditiis nam laboriosam modi, vel et perferendis.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>Your Favorite Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste nesciunt sapiente deleniti placeat numquam maiores veniam aliquam, atque ipsum ratione minus sequi blanditiis nam laboriosam modi, vel et perferendis.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>Some Random Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste nesciunt sapiente deleniti placeat numquam maiores veniam aliquam, atque ipsum ratione minus sequi blanditiis nam laboriosam modi, vel et perferendis.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>The Final Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste nesciunt sapiente deleniti placeat numquam maiores veniam aliquam, atque ipsum ratione minus sequi blanditiis nam laboriosam modi, vel et perferendis.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </Box>
    )
}

export default Faq