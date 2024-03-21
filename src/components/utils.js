export function sanitizeInput(input) {
    // Define a regular expression pattern to match alphanumeric characters, underscores, and dashes
    const pattern = /^[a-zA-Z0-9\-_.]+$/;
    // Test the input against the pattern
    return pattern.test(input);
  }
  