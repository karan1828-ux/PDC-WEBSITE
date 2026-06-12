import pdcLogo from '../../assets/pdc-logo.png'

function Logo() {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3" data-purpose="logo-container">
      <div className="w-10 h-10 flex items-center justify-center sm:w-12 sm:h-12">
        <img alt="PDC Logo" className="w-full h-full object-contain" src={pdcLogo} />
      </div>
      <div className="h-8 sm:h-10 w-[2px] bg-slate-600"></div>
      <div className="leading-none text-left pl-1 sm:pl-2">
        <h1 className="text-[10px] sm:text-xs font-bold tracking-tight text-slate-900 uppercase m-0 p-0 leading-tight">Personality</h1>
        <h1 className="text-[10px] sm:text-xs font-bold tracking-tight text-slate-900 uppercase m-0 p-0 leading-tight">Development</h1>
        <h1 className="text-[10px] sm:text-xs font-bold tracking-tight text-slate-900 uppercase m-0 p-0 leading-tight">Club</h1>
      </div>
    </div>
  )
}

export default Logo
