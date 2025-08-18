import DashboardNavbar from "@/components/custom/navbars/dashboard-navbar/DashboardNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DashboardNavbar />
      {children}
    </div>
  );
}
