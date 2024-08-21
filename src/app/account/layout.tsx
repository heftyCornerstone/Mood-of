export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>art</div>
      <div>
        <div className="triangle"></div>
        {children}
      </div>
    </div>
  );
}
