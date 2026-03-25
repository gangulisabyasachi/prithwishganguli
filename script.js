// ============================================
// NAVIGATION TOGGLE
// ============================================
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// ============================================
// MODAL FUNCTIONS
// ============================================
function openModal(modalId) {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.style.display = "block"
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.style.display = "none"
  }
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none"
  }
})

// ============================================
// PRACTICE AREA CONTENT
// ============================================
const practiceContent = {
  divorce: {
    title: "Divorce Law",
    content: `
      <h2>Divorce Law - Expert Legal Guidance</h2>
      <p>With over 8 years of experience in handling all types of divorce cases, we provide expertise knowledge on different sections of various Indian laws governing divorce proceedings.</p>
      
      <h3>Our Services Include:</h3>
      <ul>
        <li><strong>Mutual Consent Divorce:</strong> Smooth and amicable dissolution of marriage</li>
        <li><strong>Contested Divorce:</strong> Strong representation in contested proceedings</li>
        <li><strong>Maintenance Cases:</strong> Securing fair maintenance for spouses and children</li>
        <li><strong>Domestic Violence:</strong> Protection and legal remedies</li>
        <li><strong>Child Custody:</strong> Protecting children's best interests</li>
      </ul>

      <h3>Compassionate Representation</h3>
      <p>We understand and acknowledge your sentiments and strive to achieve the most feasible outcome that can leave you satisfied with the service provided.</p>

      <h3>Unparalleled Client Support</h3>
      <p>We are available for consultation 24/7 and believe in providing our clients personalized assistance throughout the difficult times associated with divorce proceedings and thereafter.</p>

      <h3>Grounds for Divorce</h3>
      <p>The following are the grounds for divorce in India mentioned under the Hindu Marriage Act, 1955 and the Special Marriage Act, 1954:</p>
      <ul>
        <li><strong>Adultery:</strong> Sexual relationship outside marriage</li>
        <li><strong>Cruelty:</strong> Mental and physical injury causing danger to life</li>
        <li><strong>Desertion:</strong> Voluntary abandonment for at least 2 years</li>
        <li><strong>Conversion:</strong> Change of religion by either spouse</li>
        <li><strong>Mental Disorder:</strong> Incurable mental disorder or insanity</li>
        <li><strong>Leprosy:</strong> Virulent and incurable form of leprosy</li>
        <li><strong>Venereal Disease:</strong> Serious communicable disease</li>
      </ul>
    `,
  },
  criminal: {
    title: "Criminal Law",
    content: `
      <h2>Criminal Law - Comprehensive Defense & Prosecution</h2>
      <p>Criminal law encompasses a wide range of offenses, from minor misdemeanors to serious felonies. Our team possesses comprehensive knowledge of criminal law and stays updated with the latest developments and precedents.</p>

      <h3>Our Expertise Includes:</h3>
      <ul>
        <li><strong>Criminal Defense:</strong> Protecting rights of individuals accused of crimes</li>
        <li><strong>Legal Consultation:</strong> Reliable advice on criminal matters</li>
        <li><strong>Trial Advocacy:</strong> Skilled representation in courtroom proceedings</li>
        <li><strong>Plea Bargaining:</strong> Negotiating favorable agreements with prosecutors</li>
        <li><strong>Appeals & Post-Conviction Relief:</strong> Overturning wrongful convictions</li>
      </ul>

      <h3>Client-Centric Approach</h3>
      <p>We understand that each case is unique and requires a tailored approach. We listen attentively to our clients, take time to understand their concerns, and provide personalized legal strategies to achieve the best possible outcomes.</p>

      <h3>Why Choose Us?</h3>
      <p>With extensive experience, in-depth knowledge, and commitment to our clients, we work tirelessly to protect your rights, provide sound legal advice, and fight for a favorable resolution in your case.</p>
    `,
  },
  cyber: {
    title: "Cyber Law",
    content: `
      <h2>Cyber Law - Digital Crimes & Protection</h2>
      <p>Cyber Law or Internet law encapsulates the legal issues related to use of the Internet. We offer expert defense for all cybercrime cases with extensive understanding of cyber, computer, and technology-related crimes.</p>

      <h3>Our Services:</h3>
      <ul>
        <li><strong>Cybercrime Defense:</strong> Expert representation in digital crime cases</li>
        <li><strong>Data Protection:</strong> Compliance with data protection laws</li>
        <li><strong>Online Disputes:</strong> Resolution of internet-related disputes</li>
        <li><strong>Digital Evidence:</strong> Handling and analysis of digital evidence</li>
        <li><strong>IT Compliance:</strong> Ensuring compliance with IT regulations</li>
      </ul>

      <h3>Expertly Handled Cases</h3>
      <p>We have handled over 100+ cybercrime cases and offer experienced legal opinion and aggressive representation in every case. Our contacts within the Supreme Court allow us to defend your rights efficiently.</p>

      <h3>Outstanding Legal Services</h3>
      <p>Our lawyers are fully prepared by staying up to date with current laws & regulations related to digital evidence gathering & cybersecurity. We understand ever-changing laws & developments around this field.</p>

      <h3>Legal Framework</h3>
      <p>The Information Technology Act, 2000 is the primary law in India dealing with cyber crime and electronic commerce. The IT Amendment Act was passed by the Indian Parliament in October 2008.</p>
    `,
  },
  realestate: {
    title: "Real Estate Law",
    content: `
      <h2>Real Estate Law - Property Transactions & Protection</h2>
      <p>Real estate practice is about representing your client's greatest asset to your client's greatest benefit. We provide comprehensive services for all property-related matters with corporate-level service quality.</p>

      <h3>Services Include:</h3>
      <ul>
        <li><strong>Purchase of New Flats:</strong> Verification of all required documents</li>
        <li><strong>Resale Property:</strong> Complete title verification and documentation</li>
        <li><strong>Land Purchase:</strong> From individual sellers and developers</li>
        <li><strong>Property Registration:</strong> Deed drafting and registration</li>
        <li><strong>Mutation & Conversion:</strong> Land record updates and conversions</li>
        <li><strong>Title Search:</strong> Comprehensive property title verification</li>
      </ul>

      <h3>Security Measures</h3>
      <p>Since huge money is involved in purchasing a property, special care should be taken to secure the right title interest. We verify all minimum required documents before you invest.</p>

      <h3>Legal Compliance</h3>
      <p>We ensure compliance with The Real Estate (Regulation & Development) Act, 2016 and all related rules. Our expertise ensures your investment is protected and your property rights are secured.</p>

      <h3>Documents We Verify:</h3>
      <ul>
        <li>Title Deeds and Ownership Documents</li>
        <li>Sanctioned Building Plans</li>
        <li>Property Tax Receipts</li>
        <li>Completion Certificates</li>
        <li>Mutation Certificates</li>
        <li>NOC from Financial Institutions</li>
      </ul>
    `,
  },
  consumer: {
    title: "Consumer Law",
    content: `
      <h2>Consumer Law - Protecting Your Rights</h2>
      <p>Consumer law in India is a crucial legal framework designed to protect the rights and interests of consumers in their interactions with businesses and service providers.</p>

      <h3>Consumer Rights:</h3>
      <ul>
        <li><strong>Right to Safety:</strong> Protection from hazardous goods and services</li>
        <li><strong>Right to Information:</strong> Accurate and transparent information about products</li>
        <li><strong>Right to Choice:</strong> Range of quality products at competitive prices</li>
        <li><strong>Right to Redressal:</strong> Timely remedies for unfair practices</li>
        <li><strong>Right to Representation:</strong> Being heard in matters affecting your interests</li>
      </ul>

      <h3>Consumer Dispute Redressal Forums</h3>
      <p>Consumer Dispute Redressal Forums consist of three levels:</p>
      <ul>
        <li><strong>District Forum:</strong> Complaints up to INR 1 crore</li>
        <li><strong>State Commission:</strong> Complaints between INR 1-10 crores</li>
        <li><strong>National Commission:</strong> Complaints exceeding INR 10 crores</li>
      </ul>

      <h3>Our Approach</h3>
      <p>We have a strong fighting mindset and approach to protect consumers' interests. We guide you through the complaint process, represent you in forums, and ensure your rights are protected.</p>

      <h3>Alternative Dispute Resolution</h3>
      <p>We encourage mediation and negotiation to resolve consumer disputes amicably and expeditiously, reducing burden on formal judicial systems.</p>
    `,
  },
  commercial: {
    title: "Commercial Law",
    content: `
      <h2>Commercial Law - Business & Corporate Solutions</h2>
      <p>We are your trusted source for all things related to Commercial Law. Our team of experienced professionals is dedicated to providing comprehensive and reliable information on various aspects of commercial law.</p>

      <h3>Our Services:</h3>
      <ul>
        <li><strong>Contract Drafting & Negotiation:</strong> Comprehensive business agreements</li>
        <li><strong>Intellectual Property Rights:</strong> Protection of business assets</li>
        <li><strong>Employment Law:</strong> HR and employment matters</li>
        <li><strong>Dispute Resolution:</strong> Commercial dispute settlement</li>
        <li><strong>Corporate Matters:</strong> Business formation and compliance</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>We understand the importance of staying updated with the latest developments in commercial law. Our website offers valuable insights, practical guidance, and expert analysis on a wide range of commercial law topics.</p>

      <h3>Comprehensive Coverage</h3>
      <p>From contract drafting and negotiation to intellectual property rights, employment law, and dispute resolution, we cover a broad spectrum of commercial law areas to provide you with comprehensive information and guidance.</p>

      <h3>Our Commitment</h3>
      <p>Knowledge is power in commercial law. Trust us to be your reliable source of information and guidance. We are here to support you on your journey through the intricate world of commercial law.</p>
    `,
  },
  civil: {
    title: "Civil Law",
    content: `
      <h2>Civil Law - Disputes & Legal Remedies</h2>
      <p>Civil laws form the bedrock of legal systems worldwide, designed to uphold justice, regulate relationships, and provide remedies for disputes among individuals.</p>

      <h3>Importance of Civil Laws:</h3>
      <p>Civil laws play a fundamental role in maintaining social order, protecting individual rights, and promoting harmonious coexistence within a society. They provide a framework for resolving conflicts outside the realm of criminal offenses.</p>

      <h3>Key Functions:</h3>
      <ul>
        <li><strong>Protection of Individual Rights:</strong> Safeguarding rights and interests</li>
        <li><strong>Regulating Relationships:</strong> Defining rights and responsibilities</li>
        <li><strong>Resolution of Disputes:</strong> Fair settlement mechanisms</li>
        <li><strong>Procedural Fairness:</strong> Ensuring due process and transparency</li>
        <li><strong>Enforcement:</strong> Ensuring compliance with court orders</li>
      </ul>

      <h3>Areas Covered:</h3>
      <ul>
        <li>Contracts and Agreements</li>
        <li>Property Disputes</li>
        <li>Tort Claims</li>
        <li>Family Matters</li>
        <li>Commercial Disputes</li>
      </ul>

      <h3>Our Approach</h3>
      <p>Civil laws are not static; they evolve and adapt to the changing needs of society. We stay updated with legislative reforms and court decisions to provide you with the most current legal guidance.</p>
    `,
  },
  land: {
    title: "Land Laws",
    content: `
      <h2>Land Laws - Property Rights & Restoration</h2>
      <p>This is exclusively related to land of any nature. In West Bengal, the West Bengal Land Reforms and Tenancy Tribunal (WBLRTT) deals with matters related to land reforms and tenancy.</p>

      <h3>Acts Covered:</h3>
      <ul>
        <li>The W.B. Estate Acquisition Act, 1953</li>
        <li>The W.B. Land Reforms Act, 1956</li>
        <li>The W.B. Restoration of Alienated Land Act, 1973</li>
        <li>The Calcutta Thika Tenancy (Acquisition and Regulation) Act, 1981</li>
        <li>The W.B. Acquisition of Homestead Land Act, 1975</li>
        <li>The W.B. Premises Tenancy Act, 1997</li>
      </ul>

      <h3>Our Expertise:</h3>
      <p>Mrs. Jayasree Ganguli Advocate is the expert in this field with 22+ years of specialization. She is a dedicated member of the West Bengal Land Reforms and Tenancy Tribunal at Salt Lake Kolkata.</p>

      <h3>Services Include:</h3>
      <ul>
        <li><strong>Land Record Matters:</strong> Verification and correction of records</li>
        <li><strong>Barga Deletion:</strong> Removal of recorded barga</li>
        <li><strong>Vested Land Restoration:</strong> Recovery of alienated land</li>
        <li><strong>Tenancy Issues:</strong> Resolution of tenancy disputes</li>
        <li><strong>Land Conversion:</strong> Conversion of land to appropriate nature</li>
      </ul>

      <h3>Tribunal Procedures</h3>
      <p>The Tribunal follows the principles of natural justice. The technical procedure prescribed by Evidence Act and CPC does not strictly apply, making it more accessible for common people.</p>
    `,
  },
}

// ============================================
// PRACTICE PAGE MODAL FUNCTIONS
// ============================================
function openPracticePage(practiceArea) {
  const modal = document.getElementById("practiceModal")
  const content = document.getElementById("practiceContent")

  if (practiceContent[practiceArea]) {
    content.innerHTML = practiceContent[practiceArea].content
    modal.style.display = "block"
    window.scrollTo(0, 0)
  }
}

function closePracticeModal() {
  const modal = document.getElementById("practiceModal")
  modal.style.display = "none"
}

// ============================================
// ============================================
function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10)
  const num2 = Math.floor(Math.random() * 10)
  const correct = num1 + num2

  document.getElementById("captchaNum1").textContent = num1
  document.getElementById("captchaNum2").textContent = num2
  document.getElementById("captchaCorrect").value = correct
  document.getElementById("captchaAnswer").value = ""
}

function validateCaptcha() {
  const userAnswer = Number.parseInt(document.getElementById("captchaAnswer").value)
  const correctAnswer = Number.parseInt(document.getElementById("captchaCorrect").value)
  return userAnswer === correctAnswer
}

function handlePayment(method) {
  const qrContainer = document.getElementById("qrCodeContainer")
  if (method === "qr") {
    qrContainer.style.display = qrContainer.style.display === "none" ? "block" : "none"
  } else if (method === "upi") {
    alert("UPI Payment feature will be integrated soon. Please use QR code for now.")
  } else if (method === "card") {
    alert("Card Payment feature will be integrated soon. Please use QR code for now.")
  }
}

function openPaymentLink(packageType) {
  // Payment links - Replace these with your actual Razorpay payment links
  const paymentLinks = {
    quick: "https://rzp.io/rzp/5cGnU9xt", // Replace with your Razorpay link for ₹500
    standard: "https://rzp.io/rzp/j3pTOz4", // Replace with your Razorpay link for ₹1,500
    premium: "https://rzp.io/rzp/lNXYrfos", // Replace with your Razorpay link for ₹5,000
  }

  const link = paymentLinks[packageType]

  if (link && link !== `https://rzp.io/i/YOUR_${packageType.toUpperCase()}_PAYMENT_LINK`) {
    // Open payment link in new tab
    window.open(link, "_blank")
  } else {
    alert("Payment link not configured yet. Please contact the administrator.")
  }
}

function sendPaymentNotification(paymentData) {
  fetch("https://formsubmit.co/ajax/prithwishganguli@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subject: "Payment Received - Legal Consultation",
      message: `Payment of ₹${paymentData.amount} received. Payment ID: ${paymentData.paymentId}`,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("[v0] Payment notification sent")
      }
    })
    .catch((error) => {
      console.error("[v0] Error sending payment notification:", error)
    })
}

// ============================================
// ============================================
function handleFormSubmit(event) {
  event.preventDefault()

  const form = event.target
  const formNote = document.getElementById("formNote")

  // Validate CAPTCHA first
  if (!validateCaptcha()) {
    formNote.textContent = "CAPTCHA verification failed. Please try again."
    formNote.className = "form-note error"
    generateCaptcha()
    return
  }

  // Get form data
  const formData = new FormData(form)
  const data = {
    name: sanitizeInput(formData.get("name")),
    email: sanitizeInput(formData.get("email")),
    phone: sanitizeInput(formData.get("phone")),
    subject: sanitizeInput(formData.get("subject")),
    message: sanitizeInput(formData.get("message")),
    timestamp: new Date().toISOString(),
  }

  // Validate form
  if (!validateForm(data)) {
    formNote.textContent = "Please fill all fields correctly."
    formNote.className = "form-note error"
    return
  }

  // Store in localStorage
  try {
    const submissions = JSON.parse(localStorage.getItem("contactSubmissions")) || []
    submissions.push(data)
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions))

    // Send email via FormSubmit (free service)
    sendEmailNotification(data)

    // Show success message
    formNote.textContent = "Thank you! Your message has been received. We will contact you soon."
    formNote.className = "form-note success"

    // Reset form
    form.reset()
    generateCaptcha()

    // Clear message after 5 seconds
    setTimeout(() => {
      formNote.textContent = ""
    }, 5000)
  } catch (error) {
    console.error("[v0] Error storing form data:", error)
    formNote.textContent = "An error occurred. Please try again."
    formNote.className = "form-note error"
  }
}

function sendEmailNotification(data) {
  // Create email body
  const emailBody = `
New Contact Form Submission:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}

Submitted at: ${data.timestamp}
  `

  // Send to email using FormSubmit API (free service)
  fetch("https://formsubmit.co/ajax/prithwishganguli@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("[v0] Email sent successfully")
      }
    })
    .catch((error) => {
      console.error("[v0] Error sending email:", error)
    })
}

// ============================================
// FORM HANDLING
// ============================================
function validateForm(data) {
  // Validate name
  if (!data.name || data.name.trim().length < 2) {
    return false
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return false
  }

  // Validate phone
  const phoneRegex = /^[\d\s\-+]{10,}$/
  if (!phoneRegex.test(data.phone)) {
    return false
  }

  // Validate subject and message
  if (!data.subject || data.subject.trim().length < 3) {
    return false
  }

  if (!data.message || data.message.trim().length < 10) {
    return false
  }

  return true
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// ============================================
// SECURITY: PREVENT XSS
// ============================================
function sanitizeInput(input) {
  const div = document.createElement("div")
  div.textContent = input
  return div.innerHTML
}

// ============================================
// SMOOTH SCROLL ENHANCEMENT
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  })
})

// ============================================
// INITIALIZATION
// ============================================
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNavLink()
  generateCaptcha()
  console.log("[v0] Legal website loaded successfully")
  console.log("[v0] All security features enabled")
  console.log("[v0] CAPTCHA protection active")
  console.log("[v0] Email notifications configured")
})
