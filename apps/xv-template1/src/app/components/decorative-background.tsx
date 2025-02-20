export function DecorativeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/80 to-white/90" />
    </div>
  )
}

