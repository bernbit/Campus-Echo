{
  /* Dropdown */
}
<div className="relative w-full rounded-md bg-white ">
  <div
    className="mr-2 flex items-center justify-between font-semibold "
    onClick={() => selectDrop("Post Type")}
  >
    <button className="p-3 text-left text-black ">{text}</button>
    {drop === true ? (
      <FaChevronUp className="text-secondary" />
    ) : (
      <FaChevronDown className="text-secondary" />
    )}
  </div>
  {/* Dropdown Option */}
  <div
    className={`absolute mt-1 ${
      drop === true ? "flex" : "hidden"
    } w-full flex-col gap-y-px  font-semibold`}
  >
    <button
      className="w-full   border-b border-white bg-secondary p-3 text-left text-white hover:bg-accent"
      onClick={() => selectDrop("Thought")}
    >
      Thought
    </button>
    <button
      className="w-full    border-b border-white bg-secondary p-3 text-left text-white hover:bg-accent"
      onClick={() => selectDrop("Rant")}
    >
      Rant
    </button>
    <button
      className="w-full bg-secondary p-3 text-left text-white hover:bg-accent"
      onClick={() => selectDrop("Complaint")}
    >
      Complaint
    </button>
  </div>
</div>;
