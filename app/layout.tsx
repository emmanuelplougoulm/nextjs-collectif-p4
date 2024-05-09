import "@/app/styles/globals.css";
import "@/app/styles/reset.css";
import "@/app/styles/fonts.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
