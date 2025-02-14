"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    setLoading(true);

    const bookingData = {
      name: "Waqas Tahir",
    };

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error sending booking notification:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button onClick={handleBooking} disabled={loading}>
        {loading ? "Processing..." : "Make a Booking"}
      </button>
    </div>
  );
}
