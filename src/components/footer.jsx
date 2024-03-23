import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box>
            <h2
                style={{
                    color: "#7880B5",
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: "30px"
                }}
            >
                &copy; 2024 Dev's Den. All Rights Reserved.
            </h2>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Developed By</Heading>
                        <FooterLink href="https://github.com/Trex-Hub" target="_blank">
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <GitHubIcon />

                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    TreX-Hub
                                </span>
                            </div>
                        </FooterLink>
                        <FooterLink href="https://github.com/05Shubham25" target="_blank">
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <GitHubIcon />

                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    05 Shubham 25
                                </span>
                            </div>
                        </FooterLink>
                    </Column>

                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="https://www.linkedin.com/in/devs-den/" target="_blank">
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <LinkedInIcon />

                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    TreX-Hub
                                </span>
                            </div>
                        </FooterLink>
                        <FooterLink href="https://www.linkedin.com/in/shubham-sharma-6b583b28a/" target="_blank">
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <LinkedInIcon />
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    05 Shubham 25
                                </span>
                            </div>
                        </FooterLink>

                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="mailto:devendrapkmishra@gmail.com">
                            Email
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box >
    );
};
export default Footer;
