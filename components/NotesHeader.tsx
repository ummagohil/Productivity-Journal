import AuthButton from "./AuthButton";

export default function NotesHeader() {
  return (
    <div className="flex justify-between items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="21"
        width="21"
        viewBox="0 0 448 512"
      >
        <path
          fill="#000000"
          d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
        />
      </svg>
      <input
        name="header-date"
        className="border p-2 rounded w-1/10"
        placeholder="Select date"
        type="date"
      />
      <AuthButton />
    </div>
  );
}
