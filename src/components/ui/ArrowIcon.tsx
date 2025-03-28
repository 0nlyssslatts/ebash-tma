
export function ArrowIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      <svg width="17" height="5" viewBox="0 0 17 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 1L8.5 4L1 1" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {isOpen && (
        <svg width="17" height="5" viewBox="0 0 17 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 1L8.5 4L1 1" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );
}
