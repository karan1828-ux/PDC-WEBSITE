const Button = ({ children, variant = 'primary', icon: Icon, className = '', ...props }) => {
  const variants = {
    primary: 'bg-pdc-orange hover:bg-opacity-90 text-white',
    secondary: 'bg-pdc-gold hover:bg-opacity-90 text-white',
    outline: 'border border-pdc-gold text-pdc-gold hover:bg-pdc-gold hover:text-white',
  }

  return (
    <button
      className={`flex items-center justify-center gap-2 py-2 px-6 rounded-md font-medium transition-all duration-200 uppercase tracking-wide ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  )
}

export default Button
