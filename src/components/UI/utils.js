// UI/utils.js - Utility constants and functions for UI components

// Focus ring utility for consistent focus styles
export const focusRing = "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-emerald-300 dark:focus:ring-offset-emerald-500"

// Button variants
export const buttonVariants = {
  primary: "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white",
  secondary: "bg-gray-300 hover:bg-gray-400 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-800 dark:text-slate-200",
  outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20",
  ghost: "text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
}

// Button sizes
export const buttonSizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
}

// Container sizes
export const containerSizes = {
  sm: "max-w-2xl",
  default: "max-w-4xl", 
  lg: "max-w-6xl",
  xl: "max-w-7xl"
}

// Tag variants
export const tagVariants = {
  default: "bg-emerald-50 dark:bg-slate-700/50 text-emerald-600 dark:text-emerald-400",
  secondary: "bg-gray-100 dark:bg-slate-700/50 text-gray-700 dark:text-slate-300"
}

// Icon button variants
export const iconButtonVariants = {
  default: "bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-800 dark:text-slate-200",
  primary: "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white",
  ghost: "hover:bg-gray-100 dark:hover:bg-slate-700/50 text-gray-600 dark:text-slate-400"
}

// Icon button sizes
export const iconButtonSizes = {
  sm: "p-2 text-sm",
  md: "p-3 text-base", 
  lg: "p-4 text-lg"
}

// Link variants
export const linkVariants = {
  primary: "text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300",
  secondary: "text-gray-600 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-200",
  button: "inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-medium transition-colors duration-300 text-sm uppercase tracking-wider"
}