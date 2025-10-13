import { Body, Container, Head, Heading, Hr, Html, Link, Preview, Section, Text } from "@react-email/components";

interface AdminNotificationEmailProps {
    firstName: string;
    lastName?: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    message: string;
}

export const AdminNotificationEmail = ({
    firstName,
    fullName,
    email,
    phoneNumber,
    message,
}: AdminNotificationEmailProps) => (
    <Html>
        <Head />
        <Preview>New contact form submission from {fullName}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Heading style={heading}>New Contact Form Submission</Heading>
                <Text style={paragraph}>You have received a new contact form submission from your website.</Text>
                <Section style={detailsBox}>
                    <Text style={detailsHeading}>Contact Details</Text>
                    <Hr style={divider} />
                    <table style={table}>
                        <tbody>
                            <tr>
                                <td style={labelCell}>
                                    <strong>Name:</strong>
                                </td>
                                <td style={valueCell}>{fullName}</td>
                            </tr>
                            <tr>
                                <td style={labelCell}>
                                    <strong>Email:</strong>
                                </td>
                                <td style={valueCell}>
                                    <Link href={`mailto:${email}`} style={link}>
                                        {email}
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={labelCell}>
                                    <strong>Phone:</strong>
                                </td>
                                <td style={valueCell}>
                                    <Link href={`tel:${phoneNumber}`} style={link}>
                                        {phoneNumber}
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Section>
                <Section style={messageBox}>
                    <Text style={detailsHeading}>Message</Text>
                    <Hr style={divider} />
                    <Text style={messageText}>{message}</Text>
                </Section>
                <Section style={actionBox}>
                    <Text style={actionText}>
                        <strong>Quick Actions:</strong>
                    </Text>
                    <Text style={actionText}>• Reply directly to this email to respond to {firstName}</Text>
                    <Text style={actionText}>
                        • Call them at{" "}
                        <Link href={`tel:${phoneNumber}`} style={link}>
                            {phoneNumber}
                        </Link>
                    </Text>
                    <Text style={actionText}>
                        • Email them at{" "}
                        <Link href={`mailto:${email}`} style={link}>
                            {email}
                        </Link>
                    </Text>
                </Section>
                <Hr style={hr} />
                <Text style={footer}>
                    This email was sent from the contact form on{" "}
                    <Link href="https://opalconsulting.com.au" style={link}>
                        opalconsulting.com.au
                    </Link>
                    <br />
                    Submission Time: {new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}
                </Text>
            </Container>
        </Body>
    </Html>
);

export default AdminNotificationEmail;

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
    maxWidth: "650px",
};

const heading = {
    fontSize: "28px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#1a472a",
    textAlign: "center" as const,
    padding: "30px 40px 20px",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#525f7f",
    padding: "0 40px",
    margin: "16px 0",
};

const detailsBox = {
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    padding: "24px",
    margin: "24px 40px",
    border: "1px solid #e2e8f0",
};

const messageBox = {
    backgroundColor: "#fffbeb",
    borderRadius: "8px",
    padding: "24px",
    margin: "24px 40px",
    border: "1px solid #fde68a",
};

const actionBox = {
    backgroundColor: "#f0f7f4",
    borderRadius: "8px",
    padding: "20px 24px",
    margin: "24px 40px",
    border: "1px solid #d4e6dd",
};

const detailsHeading = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1a472a",
    margin: "0 0 12px 0",
};

const divider = {
    borderColor: "#e2e8f0",
    margin: "12px 0",
};

const table = {
    width: "100%",
    borderCollapse: "collapse" as const,
};

const labelCell = {
    padding: "8px 16px 8px 0",
    fontSize: "15px",
    color: "#64748b",
    verticalAlign: "top" as const,
    width: "100px",
};

const valueCell = {
    padding: "8px 0",
    fontSize: "15px",
    color: "#334155",
    verticalAlign: "top" as const,
};

const messageText = {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#334155",
    whiteSpace: "pre-wrap" as const,
    margin: "0",
};

const actionText = {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#1a472a",
    margin: "8px 0",
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
