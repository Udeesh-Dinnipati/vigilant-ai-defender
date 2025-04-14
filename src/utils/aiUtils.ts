
// Mock vulnerability patterns to look for in user queries
const vulnerabilityPatterns = [
  { pattern: /sql injection|sqli/i, response: "Detected potential SQL Injection vulnerabilities in the login form. Input validation is missing, allowing attackers to manipulate SQL queries." },
  { pattern: /xss|cross.?site/i, response: "Found Cross-Site Scripting (XSS) vulnerabilities in the search functionality. User input is not properly sanitized before being returned to the page." },
  { pattern: /csrf|cross.?site request forgery/i, response: "Cross-Site Request Forgery (CSRF) vulnerability identified. The application does not implement anti-CSRF tokens for sensitive actions." },
  { pattern: /authentication|auth/i, response: "Authentication weaknesses detected: 1) Weak password policies 2) No multi-factor authentication 3) Session timeout not properly configured." },
  { pattern: /password/i, response: "Password security issues found: 1) Passwords stored with insufficient hashing (MD5) 2) No account lockout after failed attempts 3) Password reset functionality vulnerable to enumeration attacks." },
  { pattern: /encryption|ssl|tls/i, response: "TLS/SSL configuration issues detected: 1) Supporting outdated TLS 1.0/1.1 2) Weak cipher suites enabled 3) Missing HSTS header." },
  { pattern: /header|security header/i, response: "Missing security headers detected: 1) Content-Security-Policy 2) X-XSS-Protection 3) X-Content-Type-Options 4) Referrer-Policy." },
  { pattern: /api|endpoint/i, response: "API security issues found: 1) Improper access controls 2) Excessive data exposure 3) Lack of rate limiting 4) Missing input validation on parameters." },
  { pattern: /file upload/i, response: "File upload vulnerabilities detected: 1) Missing file type validation 2) No size restrictions 3) Path traversal possible through filename manipulation." },
  { pattern: /dos|denial of service/i, response: "Potential Denial of Service vulnerabilities: 1) No rate limiting on authentication endpoints 2) Resource-intensive queries possible 3) Large file uploads allowed." }
];

// Function to generate AI responses based on user input
export const generateAIResponse = async (message: string): Promise<string> => {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1500));
  
  // Check if message contains keywords about scanning or finding vulnerabilities
  if (/scan|find|detect|vulnerabilit|security|hack|test/i.test(message)) {
    // Check for specific vulnerability mentions
    for (const { pattern, response } of vulnerabilityPatterns) {
      if (pattern.test(message)) {
        return response;
      }
    }
    
    // Generic scan response if no specific vulnerability type mentioned
    return `I've performed a security scan and detected several potential vulnerabilities:

1. **Critical**: SQL Injection vulnerability in the login form
2. **Critical**: Cross-Site Scripting (XSS) in the search functionality
3. **Medium**: Missing HTTP security headers
4. **Medium**: Insufficient access controls on user API endpoints
5. **Low**: Outdated JavaScript libraries with known vulnerabilities

I recommend addressing the critical issues first. Would you like more details about any specific vulnerability?`;
  }
  
  // Default responses for non-scan related queries
  if (/help|how|what|guide/i.test(message)) {
    return `I can help you with ethical hacking and security assessment. Here are some things you can ask me to do:

1. Scan a website or application for vulnerabilities
2. Explain specific security concepts or attack vectors
3. Provide recommendations for securing your systems
4. Generate security testing plans
5. Analyze potential security risks

What would you like help with today?`;
  }
  
  // Default response
  return "I'm your ethical hacking assistant. I can help you identify security vulnerabilities in websites and applications. How would you like me to assist with your security assessment today?";
};
