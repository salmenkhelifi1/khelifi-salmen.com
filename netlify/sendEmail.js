const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);
  const { name, email, subject, message } = data;

  const payload = {
    sender: { name, email },
    to: [{ email: 'salmenkh1999@gmail.com', name: 'Khelifi Salmen' }],
    subject,
    htmlContent: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,  // Brevo API key from environment variable
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully!' }),
      };
    } else {
      const error = await response.json();
      return {
        statusCode: 400,
        body: JSON.stringify({ message: `Error: ${error.message}` }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Error: ${error.message}` }),
    };
  }
};
