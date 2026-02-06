# The People's Market | VW Digital Showroom

A premium, responsive web application showcasing German engineering excellence. This platform allows users to explore a curated collection of 40 Volkswagen models, ranging from heritage classics like the Beetle to the futuristic ID. electric series.

## 🚀 Live Features

- **Dynamic Showroom:** 40 unique car models loaded via `productData.js`.
- **Smart Pagination:** Clean navigation showing 10 cars per page (2 rows of 5).
- **Interactive Search:** Real-time filtering by model name across the entire inventory.
- **WhatsApp Integration:** Direct "Click-to-Chat" feature for every car, pre-filling a custom inquiry message.
- **Persistent Sessions:** Cookie-based user registration and guest tracking.
- **Responsive "Clean-Mobile" Design:** Hero images automatically hide on mobile to prioritize speed and UX.

---

## 🛠 Design Philosophy & Choices

### 1. Visual Identity: "German Precision"
* **Typography:** Used `Plus Jakarta Sans` for a modern, geometric feel that aligns with high-end automotive branding.
* **Color Theory:** * **VW Blue (`#001e50`):** Represents heritage and stability.
    * **Accent Green (`#2ecc71`):** Represents innovation and the shift toward electric mobility.
* **Layout:** A 5-column grid (desktop) provides a "premium configurator" experience, allowing users to see more options with less scrolling.

### 2. User Experience (UX)
* **Search Continuity:** Clicking the search icon in the navigation bar intelligently redirects users from any page to the models' search input.
* **Performance:** Car data is separated into `productData.js` to keep the main logic file (`script.js`) lightweight and fast.

---

## 🛡 Privacy & Legal Compliance

This project is built with **Privacy by Design**, adhering to **Kenya’s Data Protection Act (2019)**:

* **Transparency:** A permanent privacy notice is visible in the footer, informing users about data usage.
* **Data Minimization:** The registration system only requests necessary identifiers (Name, Email).
* **Secure Sessions:** We use client-side validation to ensure data integrity before any processing.
* **Cookie Usage:** Cookies are used strictly for session persistence (`user_name`, `registered`), expiring after 24 hours.

---

## 📱 Testing Benchmarks

| Viewport | Component | Status |
| :--- | :--- | :--- |
| **Desktop (1200px+)** | 5-Column Grid / Hero Image Active | ✅ Pass |
| **Tablet (768px - 992px)** | 3-Column Grid / Smooth Scrolling | ✅ Pass |
| **Mobile (<768px)** | Image Hidden / Centered Content / Stacked Forms | ✅ Pass |

---

## 📂 Project Structure

```text
├── index.html          # Landing page with Hero and Footer
├── products.html       # Inventory page with Search and Pagination
├── register.html       # User registration with validation
├── styles.css          # Master stylesheet (Mobile-first)
├── script.js           # Core logic (Search, Modal, Pagination)
└── productData.js      # Database of 40 car models