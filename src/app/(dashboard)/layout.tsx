import DashboardNavbar from "@/components/custom/navbars/dashboard-navbar/DashboardNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-screen">
      <DashboardNavbar />
      {children}
    </div>
  );
}
