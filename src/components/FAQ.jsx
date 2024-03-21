import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';


function FAQ() {
    const [index, setIndex] = React.useState(null);
    return (
        <Box id='faq' sx={{ backgroundColor: '#F8F7F4', borderTop: '1px dashed', height: '90vh' }}>
            <AccordionGroup sx={{ maxWidth: '90%', alignItems: 'left', overflow: 'clip', marginLeft: '5%', fontSize: '1.2rem', }}>
                <Typography variant='h4' mt={10} mb={15} textAlign={'center'} fontWeight={700} sx={{ color: '#7880B5' }}> F.A.Q </Typography>
                {/* Add margin between each Accordion */}
                <div style={{ marginBottom: '1.5rem', }}>
                    <Accordion
                        expanded={index === 0}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 0 : null);
                        }}
                    >
                        <AccordionSummary>What is fake social media profile detection?</AccordionSummary>
                        <AccordionDetails>
                            Fake social media profile detection is the process of identifying and removing fraudulent or deceptive profiles on social media platforms.
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <Accordion
                        expanded={index === 1}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 1 : null);
                        }}
                    >
                        <AccordionSummary>Why is it important to detect fake social media profiles?</AccordionSummary>
                        <AccordionDetails>
                            Detecting fake social media profiles is important to maintain the integrity and credibility of online communities, prevent scams and misinformation, and protect users from potential harm.
                        </AccordionDetails>
                    </Accordion>
                </div>
                {/* Add margin between each Accordion */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <Accordion
                        expanded={index === 2}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 2 : null);
                        }}
                    >
                        <AccordionSummary>How does fake social media profile detection work?</AccordionSummary>
                        <AccordionDetails>
                            Fake social media profile detection typically involves using algorithms and machine learning techniques to analyze user behavior, content, and other patterns to identify suspicious profiles.
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <Accordion
                        expanded={index === 3}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 3 : null);
                        }}
                    >
                        <AccordionSummary>What are some common signs of a fake social media profile?</AccordionSummary>
                        <AccordionDetails>
                            Common signs of a fake social media profile include limited activity, inconsistent information, low-quality images, excessive promotional content, and a high number of followers with little engagement.
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <Accordion
                        expanded={index === 4}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 4 : null);
                        }}
                    >
                        <AccordionSummary>Can fake social media profiles be permanently removed?</AccordionSummary>
                        <AccordionDetails>
                            While platforms can take steps to remove fake profiles, perpetrators may create new ones. Continuous monitoring and improvement of detection techniques are essential to combat the issue effectively.
                        </AccordionDetails>
                    </Accordion>
                </div>
            </AccordionGroup>
        </Box>
    );
}

export default FAQ