<div align="center">

# 💳 Payment Test Data Cheatsheet

![Version](https://img.shields.io/badge/version-1.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-yellow)
![Edge Extension](https://img.shields.io/badge/Edge-Add--on-blue)

**Stop searching through endless documentation tabs. All test payment data in one place.**

[Installation](#-installation) • [Features](#-features) • [Screenshots](#-screenshots) • [Contributing](#-contributing)

</div>

## 🎯 Why This Extension?

As a developer working with payment integrations, I was tired of:
- 📚 Opening 10+ documentation tabs (Stripe, PayPal, Braintree...)
- 🔍 Searching for test card numbers
- ⏳ Wasting 30+ minutes daily just finding test data

So I built **Payment Test Data Cheatsheet** - a Chrome extension that collects all test payment data in one place.

## ✨ Features

| Feature               | Description |
|-----------------------|-------------|
| **🔍 Instant Search** | Find any test card, bank account, or error scenario in milliseconds |
| **📋 One-Click Copy** | Copy to clipboard with a single click - no more manual selection |
| **🎯 5+ Providers**   | Stripe, PayPal, Braintree, Authorize.net, Mollie, and more |
| **💳 All Card Types** | Visa, MasterCard, Amex, Discover, JCB, Diners Club |
| **🏦 Bank Accounts**  | SEPA, ACH, UK accounts with test data |
| **🚫 Error Testing**  | Insufficient funds, card declined, 3DS failures, etc. |
| **🔒 100% Safe**      | No data collection, no tracking, runs entirely locally |

## 🖼️ Screenshots

<div align="center">

| Main Interface | Search Functionality | Provider View |
|:--------------:|:--------------------:|:-------------:|
| ![Main](https://private-user-images.githubusercontent.com/81153065/522634627-90fdbb17-819c-4905-98fb-b8b98dc4cb82.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ4Nzc3NDEsIm5iZiI6MTc2NDg3NzQ0MSwicGF0aCI6Ii84MTE1MzA2NS81MjI2MzQ2MjctOTBmZGJiMTctODE5Yy00OTA1LTk4ZmItYjhiOThkYzRjYjgyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjA0VDE5NDQwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFhZWNjMjkyMmM2OTExZWE4YjMxZGE5MTY5OGY5YjUxNTAzNTUyYTA4ZDI3OGMyYmFiMTRiY2VjYTg3ZmM5ZjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.NIz46OEvzTlq8fb6xlhPynWX_yzE-NupurH-S15_DuQ) | ![Search](https://private-user-images.githubusercontent.com/81153065/522634670-3d1e38d3-30a5-4ce7-99b2-8b8fa3dbff22.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ4Nzc3NDEsIm5iZiI6MTc2NDg3NzQ0MSwicGF0aCI6Ii84MTE1MzA2NS81MjI2MzQ2NzAtM2QxZTM4ZDMtMzBhNS00Y2U3LTk5YjItOGI4ZmEzZGJmZjIyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjA0VDE5NDQwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNlNGYxNjVlYjAyNTg1ZDMzMThlZWYzZTgzMTMxYWM3YjA5YThmNmM3NTYwYjhmMjk5NmNkNGExMjk4YTViZjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.CASWzxyXJajGwVjvu0anTBfqpRw9ZQxi-r-7bdc44Wo) | ![Provider](https://private-user-images.githubusercontent.com/81153065/522634685-3692802f-c7a1-4bd9-9efe-9d38a08fc249.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ4Nzc3NDEsIm5iZiI6MTc2NDg3NzQ0MSwicGF0aCI6Ii84MTE1MzA2NS81MjI2MzQ2ODUtMzY5MjgwMmYtYzdhMS00YmQ5LTllZmUtOWQzOGEwOGZjMjQ5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjA0VDE5NDQwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE5YzFlNzkzZGQzZDE5MTkyZGFiM2EyMzYzOGQwMWVmNmZiZDQ4MGNhZDRiNGMxMjMxNDI3OWQxMmRmMDEyMTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.50hPrQF4SiZv5x9_JrrTy5cNYZtm8G_UdjJYBN6g1no) |

</div>

## 📦 Installation

### ⚡ Quick Install (Recommended)
1. **Download** the latest release: [v1.1.0.zip](https://github.com/maxim-pk/payment-cheatsheet/releases/latest)
2. **Extract** the ZIP file
3. **Open** Chrome/Edge and go to: `chrome://extensions/`
4. **Enable** "Developer mode" (top right toggle)
5. **Click** "Load unpacked"
6. **Select** the extracted folder

### 🛠️ Developer Install
```bash
# Clone the repository
git clone https://github.com/maxim-pk/payment-cheatsheet.git

# Or use as template
# Use "Load unpacked" in browser extensions page
```

## 🌐 Web Install (Coming Soon)
1. Edge Add-ons Store: Submission in progress
2. Chrome Web Store: Available soon

## 🚀 Quick Start
1. **Click** the extension icon in your browser toolbar
2. **Browse** tabs for different payment providers
3. **Search** for specific cards or scenarios
4. **Click** "Copy" to get data in clipboard
5. **Paste** into your payment forms

## 📊 Supported Payment Systems


| Provider      | Test Cards | Bank Accounts | Error Scenarios | Documentation |
|---------------|------------|--------------|-----------------|--------------|
| Stripe        |✅          | ✅           | ✅              | 🔗           |
| PayPal        |✅          | ❌           | ✅              | 🔗           |
| Braintree     |✅          | ❌           | ✅              | 🔗           |
| Authorize.net |✅          | ❌           | ✅              | 🔗           |
| Mollie        |✅          | ❌           | ✅              | 🔗           |
| EasyPayDirect |✅          | ❌           | ✅              | 🔗           |
| Finix         |✅          | ❌           | ✅              | 🔗           |
| Common Cards  |✅          | ✅            | ❌              | Various sources           |


## 🎮 Usage Examples

### 💳 Copying a Test Card
```
1. Open extension
2. Go to "Common" tab
3. Find "Visa" section
4. Click "Copy" next to "4111 1111 1111 1111"
5. Card number is in your clipboard!
```

### 🏦 Testing Bank Transfers
```
1. Open extension  
2. Go to "Common" tab
3. Find "SEPA" section
4. Copy "DE89370400440532013000" (Success)
5. Use in your SEPA payment form
```

### 🚫 Simulating Payment Errors
```
1. Open extension
2. Go to "Stripe" tab
3. Find "Failed" section
4. Copy "4000000000009995" (Insufficient funds)
5. Test your error handling logic
```

## 🛠️ For Developers

### Project Structure
```
payment-cheatsheet/
├── icons/                    # Extension icons (16, 32, 48, 128px)
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── popup.html               # Main popup interface
├── popup.css                # Styles with CSS custom properties
├── popup.js                 # JavaScript logic (tabs, search, copy)
├── manifest.json            # Extension manifest (Chrome/Edge)
├── README.md                # This file
├── LICENSE                  # MIT License
└── screenshots/             # Extension screenshots
    ├── main.png
    ├── search.png
    └── stripe.png
```

## Adding a New Payment Provider
1. **Add tab** in <code>popup.html</code>:
```html
<button class="tab" data-tab="newprovider">New Provider</button>
<div id="newprovider" class="tab-content">
    <div class="section">
        <h3>Test Cards</h3>
        <div class="data-item">
            <code>1234 5678 9012 3456</code>
            <button class="copy-btn" data-copy="1234567890123456">Copy</button>
        </div>
    </div>
</div>
```
2. **Tab logic** is automatically handled by <code>popup.js</code>
3. **Test** and submit a Pull Request!

### Local Development
```bash
# 1. Clone repository
git clone https://github.com/maxim-pk/payment-cheatsheet.git

# 2. Load in browser
# - Open chrome://extensions/
# - Enable Developer mode
# - Click "Load unpacked"
# - Select project folder

# 3. Make changes
# - Edit HTML/CSS/JS files
# - Changes apply instantly on save
# - Click extension icon to reload
```

## 🔒 Privacy & Security

### What We Do ✅
- Display test payment data
- Copy text to your clipboard (with your permission)
- Link to official documentation

## What We Don't Do ❌
- Collect any personal data
- Track your browsing
- Make unauthorized network requests
- Modify web pages
- Store any information

**The extension runs entirely locally in your browser.**

## 🤝 Contributing
We welcome contributions! Here's how you can help:

### 🐛 Report Issues
Found outdated data or a bug?

1. Go to [Issues](https://github.com/maxim-pk/payment-cheatsheet/issues)
2. Click "New Issue"
3. Describe the problem


### ➕ Add New Providers
Know a payment gateway not listed?

1. Fork the repository
2. Add the provider following the structure above
3. Submit a Pull Request

### 💡 Suggest Improvements
Have ideas for new features?

1. Open an Issue with the "enhancement" label
2. Describe your idea
3. Discuss with the community

### 🌍 Translate
Want to help with localization?

1. Check existing translation issues
2. Submit translations for your language

## 🏗️ Development Workflow
```bash
# 1. Fork the project
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m 'Add amazing feature'

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

## 📈 Roadmap
### 🚀 Planned Features
- **Dark mode** toggle
- **Data generator** for custom test cards
- **Card validator** (Luhn algorithm)
- **Export data** to JSON/CSV
- **More providers**: Adyen, 2Checkout, Square, etc.
- **Browser sync** for favorites
- **Keyboard shortcuts**

### 🗓️ Coming Soon
- **v1.2.0**: Dark mode + more providers
- **v1.3.0**: Data generator + export
- **v2.0.0**: Firefox & Safari versions

## ❓ FAQ

### 🤔 Is this extension safe?
**Absolutely!** The extension:

- Runs 100% locally in your browser
- Doesn't collect any data
- Doesn't make network requests (except to official docs)
- Is open source - code is transparent

### 💰 Is this free?
**Yes, and always will be!** The core extension is free and open source under MIT License.

### 🔄 How often is data updated?
Data is updated when:

1. Payment providers change their test data
2. New providers are requested
3. Errors are reported in existing data

### 📱 Does it work on mobile?
Chrome extensions don't work on mobile Chrome. Consider using:

- Desktop Chrome/Edge
- Kiwi Browser (Android, supports extensions)
- Firefox Mobile (for future Firefox version)

### 🏢 Can I use this in my company?
**Yes!** The MIT license allows commercial use. You can:

- Use as-is for development
- Modify for internal needs
- Distribute within your organization

## 📄 License
This project is licensed under the **MIT License**
```text
MIT License

Copyright (c) 2025 m4a1fox

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

### 🙏 Acknowledgments
- **Test data** sourced from official documentation of each payment provider
- **Icons** from various open source icon sets
- **Inspiration** from the developer community's pain points
- **Contributors** who help improve the project

### 📞 Contact & Support
- **GitHub Issues:** [Report bugs or request features](https://github.com/maxim-pk/payment-cheatsheet/issues)
- Email: m4a1fox@icloud.com

## ⭐ Support the Project
If this extension saves you time, please:

1. **Star** the repository on GitHub
2. **Share** with colleagues
3. **Contribute** improvements

**Happy coding!** 🚀