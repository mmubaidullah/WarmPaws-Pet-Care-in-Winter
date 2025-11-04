# 🐾 WarmPaws – Pet Care in Winter

**Assignment Category:** Assignment-09_category_rose  
**Project Type:** Single Page Application (React + Tailwind + Firebase Auth)

---

## 🌟 Project Purpose  

**WarmPaws** হলো একটি উষ্ণ ও যত্নশীল শীতকালীন পোষা প্রাণী পরিচর্যা প্ল্যাটফর্ম।  
এখানে পোষা প্রাণীর মালিকেরা শীতের সময় তাদের প্রিয় বন্ধুর নিরাপত্তা, আরাম ও স্বাস্থ্যের যত্ন নিতে পারবেন।  
সাইটে পাওয়া যাবে স্থানীয় পেট কেয়ার সার্ভিস, শীতের পোশাক, গ্রুমিং অপশন, এবং বিশেষজ্ঞদের টিপস — সব এক জায়গায়।  

---

## 🔗 Live Site Link  
👉 [https://warmpaws-petcare-in-winter.netlify.app/](https://warmpaws-petcare-in-winter.netlify.app/)

---

## 💻 GitHub Repository  
👉 [https://github.com/mmubaidullah/WarmPaws-Pet-Care-in-Winter.git](https://github.com/mmubaidullah/WarmPaws-Pet-Care-in-Winter.git)

---

## 🚀 Key Features  

### 🏠 Home Page  
- Winter-themed Hero Slider (Swiper ব্যবহার করা হয়েছে)  
- Popular Pet Care Services (JSON ফাইল থেকে ডেটা)  
- “Winter Care Tips” সেকশন  
- “Meet Our Expert Vets” সেকশন  
- অতিরিক্ত এক্সট্রা সেকশন (যেমন পোষা প্রাণীর পোশাক বা খাদ্য সম্পর্কিত)  

### 🧭 Navbar  
- Logo ও Navigation Links: **Home | Services | My Profile**  
- Logged-in অবস্থায় ইউজার ইমেজ ও নাম দেখানো হয়  
- Logout বাটন  
- Logged-out অবস্থায় Login/Register বাটন  

### ⚓ Footer  
- Contact Info, Social Links, Privacy Policy  

### 🔒 Protected Route (Service Details Page)  
- শুধুমাত্র লগইন ইউজাররা সার্ভিস ডিটেইল দেখতে পারবে  
- JSON ডেটা থেকে সার্ভিসের পূর্ণ তথ্য দেখানো হয়  
- “Book Service” ফর্ম সাবমিটে Toast Notification দেখায়  

### 👤 Authentication (Firebase Auth)  
- **Signup / Login / Google Login**  
- Password validation:  
  - অন্তত ১টি Capital Letter  
  - অন্তত ১টি Small Letter  
  - ৬ অক্ষরের দৈর্ঘ্য  
- Forget Password ফিচার  
- Password show/hide বাটন  

### 🧍 My Profile Page  
- ইউজারের নাম, ইমেইল, ছবি  
- “Update Profile” বাটন  

### ⚙️ Extra Features  
- AOS Animation  
- React Toasts (react-hot-toast)  
- Responsive Layout for all devices  

---

## 🧩 Technologies Used  

| Category | Tools / Packages |
|-----------|------------------|
| Framework | React.js |
| Styling | Tailwind CSS, DaisyUI |
| Routing | React Router |
| Animation | AOS, Swiper.js, framer-motion, react-spring |
| Toasts | react-toastify |
| Authentication | Firebase |
| Hosting | Netlify |
| Image Hosting | Direct Image URLs |

---

## 🗂 JSON Data Example  

```json
{
  "prductId": 1,
  "prductName": "Winter Coat Fitting for Dogs",
  "providerName": "PawCare Studio",
  "providerEmail": "info@pawcare.com",
  "price": 25,
  "rating": 4.9,
  "slotsAvailable": 4,
  "description": "Custom coat fitting and warm outfit options to keep your dog comfortable in the cold.",
  "image": "https://www.thesprucepets.com/thmb/wJknCNM65qo4VrULuoz-gz7srtM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sps-canada-pooch-harness-puffer-kimberly-souza-31-61f53cc6021d4a15a79c50b07c57f7fb.jpeg",
  "category": "Clothing"
}
