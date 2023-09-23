export default function profileLayout({ children }) {
  return (
    <div className="flex jsutify-between">
      <div>This is profile Header</div>
      <div>{children}</div>
      <div>This is profile Footer</div>
    </div>
  );
}
