```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello!' });
}
```

**Explanation:**

The provided solution ensures the API route is located within the correct directory (`pages/api`) and has the correct file naming convention.  Double-check for typos in file names and the `pages/api` directory path.  Sometimes, a simple `rm -rf .next && rm -rf node_modules && npm install && npm run build` resolves issues stemming from stale build artifacts.