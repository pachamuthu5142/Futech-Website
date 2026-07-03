import Razorpay from "razorpay";

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

if (!keyId || !keySecret) {
  console.warn("Razorpay credentials (RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET) are missing from the environment variables");
}

export const razorpay = new Razorpay({
  key_id: keyId || "placeholder_key",
  key_secret: keySecret || "placeholder_secret",
});
