export function CheckMark({ isChecked, className }: { isChecked: boolean; className?: string }) {
  return (
    <>
      {isChecked && (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.6667 1L9.95833 20.7083L1 11.75"
            stroke="#96FFCE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
}
