import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface UserConfirmationEmailProps {
    firstName: string;
    fullName: string;
}

export const UserConfirmationEmail = ({ firstName }: UserConfirmationEmailProps) => (
    <Html>
        <Head />
        <Preview>Thank you for contacting Opal Consulting - We&apos;ll be in touch soon</Preview>
        <Body style={main}>
            <Container style={container}>
                <Heading style={heading}>Thank You for Reaching Out!</Heading>
                <Text style={paragraph}>Dear {firstName},</Text>
                <Text style={paragraph}>
                    Thank you for contacting <strong>Opal Consulting</strong>. We have received your message and
                    appreciate you taking the time to reach out to us.
                </Text>
                <Text style={paragraph}>
                    Our team will review your inquiry and get back to you as soon as possible, typically within 1-2
                    business days.
                </Text>
                <Section style={infoBox}>
                    <Text style={infoText}>
                        <strong>What happens next?</strong>
                    </Text>
                    <Text style={infoText}>✓ Our team will review your message</Text>
                    <Text style={infoText}>✓ We&apos;ll reach out to discuss your needs</Text>
                    <Text style={infoText}>✓ We&apos;ll schedule a consultation if needed</Text>
                </Section>
                <Text style={paragraph}>
                    In the meantime, feel free to explore our services and learn more about how we can help you achieve
                    your migration goals.
                </Text>
                <Section style={buttonContainer}>
                    <Button style={button} href="https://opalconsulting.com.au">
                        Visit Our Website
                    </Button>
                </Section>
                <Hr style={hr} />
                <Text style={footer}>
                    <strong>Opal Consulting</strong>
                    <br />
                    Suite 709, Level 7, 370 Pitt Street
                    <br />
                    Sydney NSW 2000, Australia
                    <br />
                    Phone: (02) 8188 0740 | 0431 092 046
                    <br />
                    Email:{" "}
                    <Link href="mailto:info@opalconsulting.com.au" style={link}>
                        info@opalconsulting.com.au
                    </Link>
                </Text>
                <Text style={footer}>
                    If you did not submit this form, please disregard this email or{" "}
                    <Link href="mailto:info@opalconsulting.com.au" style={link}>
                        contact us
                    </Link>
                    .
                </Text>
            </Container>
        </Body>
    </Html>
);

export default UserConfirmationEmail;

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
    maxWidth: "600px",
};

const heading = {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#1a472a",
    textAlign: "center" as const,
    padding: "30px 0 20px",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#525f7f",
    padding: "0 40px",
    margin: "16px 0",
};

const infoBox = {
    backgroundColor: "#f0f7f4",
    borderRadius: "8px",
    padding: "20px",
    margin: "24px 40px",
    border: "1px solid #d4e6dd",
    boxSizing: "border-box" as const,
    width: "calc(100% - 80px)", // Account for 40px margin on each side
};

const infoText = {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#1a472a",
    margin: "8px 0",
};

const buttonContainer = {
    textAlign: "center" as const,
    margin: "32px 0",
};

const button = {
    backgroundColor: "#1a472a",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "12px 32px",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "32px 40px",
};

const footer = {
    color: "#8898aa",
    fontSize: "13px",
    lineHeight: "1.6",
    textAlign: "center" as const,
    padding: "0 40px",
    margin: "16px 0",
};

const link = {
    color: "#1a472a",
    textDecoration: "underline",
};
