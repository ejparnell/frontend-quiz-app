import { useState } from 'react'

import { Container, FoldOutContainer, ContactInfo } from './ContactCardStyles'

export function ContactCard() {
    const [isFoldedOut, setIsFoldedOut] = useState(false)

    const handleToggle = () => setIsFoldedOut(!isFoldedOut)

    return (
        <>
            <Container onClick={handleToggle}>
                {isFoldedOut ? 'Close' : 'Like what you see?'}
            </Container>

            {isFoldedOut && (
                <FoldOutContainer>
                    <h3>Contact Me</h3>
                    <ContactInfo>
                        <p>Find Me:</p>
                        <a to='https://github.com/ejparnell' target='_blank'>GitHub</a>
                        <br />
                        <a to='https://www.linkedin.com/in/elizabethjparnell/'>LinkedIn</a>
                        <p>Challenge by:</p>
                        <a to='https://www.frontendmentor.io?ref=challenge'>Frontend Mentor</a>
                    </ContactInfo>
                </FoldOutContainer>
            )}
        </>
    );
}