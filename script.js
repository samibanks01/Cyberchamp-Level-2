const questions = [
    {
        question: "1. What is the CIA Triad in cybersecurity, and why is it important? 14 remaining",
        answers: [
          "A framework for assessing cybersecurity risks.",
          "A set of security principles to protect sensitive information.",
          "A technical control for securing networks.",
          "A type of cybersecurity attack."
        ],
        correctAnswer: 1 //1
      },
      {
        question: "2. Define the terms 'threat,' 'vulnerability,' and 'risk' in the context of cybersecurity. 13 remaining",
        answers: [
          "Threat: A potential danger to a system or network. Vulnerability: A weakness that can be exploited. Risk: The likelihood of a threat exploiting a vulnerability.",
          " Threat: A malicious actor. Vulnerability: A security control. Risk: A potential loss.",
          "Threat: A security policy. Vulnerability: A risk assessment. Risk: A threat actor.",
          "Threat: A network attack. Vulnerability: A firewall. Risk: A security breach."
        ],
        correctAnswer: 0 //2
      },
      {
        question: "3. What are some common types of cyber threats? 12 remaining",
        answers: [
          "Firewalls, intrusion detection systems, encryption, access controls.",
          "Security policies, user training, risk assessments, incident response plans.",
          "Malware, phishing, ransomware, DDoS attacks.",
          "Network topology, IP addressing, DNS, routing protocols."
        ],
        correctAnswer: 2
      },
      {
        question: "4. How can vulnerabilities in systems and software lead to security breaches? 11 remaining",
        answers: [
          "By allowing attackers to exploit weaknesses to gain unauthorized access.",
          "By providing a platform for secure communication.",
          "By strengthening the security posture of an organization.",
          "By preventing cyberattacks from occurring."
        ],
        correctAnswer: 0
      },
      {
        question: "5. Explain the concept of risk assessment and its importance in cybersecurity. 10 remaining",
        answers: [
          "Risk assessment is a technical process for securing networks.",
          "Risk assessment is a legal requirement for all organizations.",
          "Risk assessment is a one-time activity that should be conducted annually.",
          "Risk assessment involves identifying, analyzing, and prioritizing security risks to inform decision-making and resource allocation."
        ],
        correctAnswer: 3
      },
      {
        question: "6. What are the different types of security controls (technical, administrative, physical)? 9 remaining",
        answers: [
          "Technical controls: Firewalls, intrusion detection systems, encryption. Administrative controls: Security policies, user training, access controls. Physical controls: Locks, security guards, surveillance cameras.",
          "Technical controls: Security policies. Administrative controls: User training. Physical controls: Firewalls.",
          "Technical controls: Risk assessments. Administrative controls: Incident response plans. Physical controls: Encryption.",
          "Technical controls: Network topology. Administrative controls: IP addressing. Physical controls: DNS."
        ],
        correctAnswer: 0
      },
      {
        question: "7. Describe the role of access controls in protecting sensitive information. 8 remaining",
        answers: [
          "Access controls are used to encrypt data.",
          "Access controls limit who can access specific resources and what actions they can perform.",
          "Access controls are a type of network security device.",
          "Access controls are used to conduct security audits."
        ],
        correctAnswer: 1
      },
      {
        question: "8. How can network security measures, such as firewalls and intrusion detection systems, enhance security? 7 remaining",
        answers: [
          "By monitoring network traffic for suspicious activity and blocking unauthorized access.",
          "By encrypting data at rest and in transit.",
          "By conducting security awareness training for users.",
          "By developing comprehensive security policies."
        ],
        correctAnswer: 0
      },
      {
        question: "9. What is the importance of encryption in safeguarding data confidentiality? 6 remaining",
        answers: [
          "Encryption is used to identify and authenticate users.",
          "Encryption is a type of physical security control.",
          "Encryption transforms plaintext into ciphertext, making it unreadable to unauthorized individuals.",
          "Encryption is used to conduct vulnerability assessments."
        ],
        correctAnswer: 2
      },
      {
        question: "10. Explain the concept of incident response planning and its role in mitigating security breaches. 5 remaining",
        answers: [
          "Incident response planning outlines the steps to be taken in the event of a security breach, such as identifying, containing, investigating, and recovering from the incident.",
          "Incident response planning is a technical process for securing networks.",
          "Incident response planning is a legal requirement for all organizations.",
          "Incident response planning is a one-time activity that should be conducted annually."
        ],
        correctAnswer: 0
      },
      {
        question: "11. Why are security policies and procedures essential for organizations? 4 remaining",
        answers: [
          "To provide a framework for security operations and decision-making.",
          "To comply with regulatory requirements.",
          "To reduce the risk of security breaches.",
          "All of the above."
        ],
        correctAnswer: 3
      },
      {
        question: "12. What are the key elements of a comprehensive security policy? 3 remaining",
        answers: [
          "Access control policies, incident response procedures, and user awareness guidelines.",
          "Network configuration standards, encryption policies, and vulnerability management procedures.",
          "Both a and b.",
          "None of the above."
        ],
        correctAnswer: 2
      },
      {
        question: "13. How can user awareness and training programs contribute to a strong security posture? 2 remaining",
        answers: [
          "By educating users about security best practices and threats.",
          "By empowering users to identify and report security incidents.",
          "By fostering a security-conscious culture within the organization.",
          "All of the above."
        ],
        correctAnswer: 3
      },
      {
        question: "14. What is the role of regular security audits and assessments? 1 remaining",
        answers: [
          "To identify and address security vulnerabilities and weaknesses.",
          "To ensure compliance with security policies and standards.",
          "To measure the effectiveness of security controls.",
          "All of the above."
        ],
        correctAnswer: 3
      },
      {
        question: "15. Discuss the importance of business continuity and disaster recovery planning in cybersecurity. 0 remaining",
        answers: [
          "To minimize business disruption and financial loss in the event of a security incident.",
          "To ensure rapid recovery and restoration of critical systems and data.",
          "To maintain business operations during and after a security breach.",
          "All of the above."
        ],
        correctAnswer: 3
      },
      // Add more questions here following the same format   
    // ... your questions here ...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let temporaryUsername = "Trainee"; // Define a temporary username
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answerListElement = document.getElementById("answer-list");
  
    questionElement.textContent = questions[currentQuestion].question;
    answerListElement.innerHTML = ""; // Clear previous answers
  
    questions[currentQuestion].answers.forEach((answer, index) => {
      const answerItem = document.createElement("li");
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "answer";
      radioInput.value = index;
  
      radioInput.addEventListener("change", function() {
        document.getElementById("submit-btn").disabled = false;
      });
  
      const answerText = document.createTextNode(answer);
      answerItem.appendChild(radioInput);
      answerItem.appendChild(answerText);
      answerListElement.appendChild(answerItem);
    });
  }
  
  function submitAnswer() {
    const selectedRadio = document.querySelector('input[name="answer"]:checked');
  
    if (selectedRadio) {
      const userAnswer = parseInt(selectedRadio.value);
      const correctAnswer = questions[currentQuestion].correctAnswer;
  
      if (userAnswer === correctAnswer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        alert("You have finished the assessment! Your score is " + score + " out of " + questions.length);
        // Optionally, display a results page here
        score = 0; // Reset score for future assessments (optional)
      }
  
      document.getElementById("submit-btn").disabled = true;
    }
  }
  
  // Display username during assessment (optional)
  function displayUsername() {
    const usernameElement = document.getElementById("username-display");
    if (usernameElement) {
      usernameElement.textContent = "Welcome to Week (II) Test, " + temporaryUsername;
    }
  }
  
  displayQuestion();
  displayUsername(); // Display username initially
  
  // Submit button functionality (if included)
  const submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", submitAnswer);
  
