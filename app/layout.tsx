import Navigation from "../components/navigation";
import { Metadata } from "next";
import "../styles/global.css";
export const metadata: Metadata = {
  title: {
    template: "%s | NY_times",
    default: "Loading...",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
