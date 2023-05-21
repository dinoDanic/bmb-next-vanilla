import { Sidebar } from "@/features/sidebar";
import { QueryProvider } from "@/lib";
import { ThemeProvider } from "@/styles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryProvider>
        <ThemeProvider>
          <Sidebar />
          {children}
        </ThemeProvider>
      </QueryProvider>
    </html>
  );
}
