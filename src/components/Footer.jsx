export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-50 border-t border-stone-800">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <nav className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
          <a href="#" className="text-sm hover:text-stone-300">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:text-stone-300">
            Terms &amp; Conditions
          </a>
        </nav>
      </div>
    </footer>
  );
}
