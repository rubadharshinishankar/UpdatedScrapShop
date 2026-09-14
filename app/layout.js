import "./globals.css";

export const metadata = {
  title: "RTHT Recycling | Turning Trash into Treasure",
  description:
    "RTHT Recycling buys and responsibly recycles ferrous and non-ferrous metals, industrial scraps, and electronic waste in Singapore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
