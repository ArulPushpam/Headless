# 🧠 Sitecore JSS Headless Demo

This project showcases a headless Sitecore JSS setup using **Sitecore 10.4**, **Headless Services 22.0**, and a **Next.js** frontend.

---

## 🚀 Prerequisites

Ensure the following are installed and configured:

- Sitecore 10.4 instance (XP or XM scaled)
- Headless Services package
- Node.js (LTS version)
- npm or yarn package manager

---

## ⚙️ Setup Instructions

### 1. Install Dependencies

Navigate to the frontend project folder and run:
```
npm install
```
### 2. Configure Sitecore JSS Connection

Update the **`scjssconfig.json`** file with your Sitecore instance details:

- API Key  
- Sitecore root folder path  

Example `scjssconfig.json`:

```json
{
  "sitecore": {
    "instancePath": "C:\\inetpub\\wwwroot\\sc_assessment_arulsc.dev.local",
    "apiKey": "{YOUR_API_KEY}"
  }
}
 ```
### 3. Enable Experience Editor Editing (Connected Mode)

To enable editing in Experience Editor:

1. Open the **`.env`** file in your frontend project.  
2. Set a random value for `JSS_EDITING_SECRET`.  

   ```env
   JSS_EDITING_SECRET=myrandomsecret123
   ```
3. Make sure the same secret is configured in Sitecore:
   ```
   C:\inetpub\wwwroot\sc_assessment_arulsc.dev.local\App_Config\Sitecore\JavaScriptServices\Sitecore.JavaScriptServices.ViewEngine.Http.config

   ```
4. Update the value of:
   ```
   <setting name="JavaScriptServices.ViewEngine.Http.JssEditingSecret" value="myrandomsecret123" />
  ```
### 4. Deploy to Sitecore (Optional)

If you need to sync Sitecore items/packages, run:

```
jss deploy items -c -d
```
### 5. Run the App (Connected Mode)

Finally, start the frontend app in connected mode:

```
npm run jss:start:connected
```
## ✅ Features Implemented

- Sitecore 10.4 Headless setup with Next.js  
- CMS-enabled components (editable in Experience Editor)  
- GraphQL integration for optimized queries  
- Browser-based personalization (configured in rules)  
- Initial form setup with Sitecore Forms  
