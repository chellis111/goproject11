# Email Sender

This project is a simple email sender written in Go. It allows you to send emails using an SMTP server.

## Features

- Send plain text emails
- Configurable SMTP server settings
- Error handling for failed email sends

## Requirements

- Go 1.16 or higher
- An SMTP server for sending emails

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/email-sender.git
   ```
2. Navigate to the project directory:
   ```sh
   cd email-sender
   ```
3. Install dependencies:
   ```sh
   go mod tidy
   ```

## Usage

1. Configure your SMTP settings in `config.json`:
   ```json
   {
     "smtp_host": "smtp.example.com",
     "smtp_port": 587,
     "username": "your-email@example.com",
     "password": "your-email-password"
   }
   ```
2. Run the email sender:
   ```sh
   go run main.go
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
