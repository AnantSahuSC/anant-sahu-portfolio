
export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded border font-semibold transition-all ${className}`}
    >
      {children}
    </button>
  )
}
