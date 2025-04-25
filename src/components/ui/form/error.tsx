export type ErrorProps = {
  errorMessage?: string | null
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: no shadowing
export const Error = ({ errorMessage }: ErrorProps) => {
  if (!errorMessage) return null

  return (
    <div
      role="alert"
      aria-label={errorMessage}
      className="text-sm font-semibold text-red-500"
    >
      {errorMessage}
    </div>
  )
}
