export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>header</div>
      <div>{children}</div>
    </>
  )
}
