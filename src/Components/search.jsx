
import React, { useState, useCallback, useEffect } from "react";


function SearchComponent({
  defaultQuery = "",
  defaultDate = "",
  onSearch = () => {},
  onDateChange = () => {},
  autoFocus = false,
  debounceMs = 300,
}) {
  const [query, setQuery] = useState(defaultQuery);
  const [date, setDate] = useState(defaultDate);
  const [typingTimer, setTypingTimer] = useState(null);

  const emitSearch = useCallback(
    (q) => {
      onSearch(q.trim());
    },
    [onSearch]
  );

  useEffect(() => {
    // initial emit if default provided
    if (defaultQuery) emitSearch(defaultQuery);
    if (defaultDate) onDateChange(defaultDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleQueryChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (typingTimer) clearTimeout(typingTimer);
    const t = setTimeout(() => emitSearch(val), debounceMs);
    setTypingTimer(t);
  };

  const handleDateChange = (e) => {
    const val = e.target.value;
    setDate(val);
    onDateChange(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typingTimer) clearTimeout(typingTimer);
    emitSearch(query);
  };

  return (
    <div className="max-w-auto mx-auto flex flex-col">
      <div className=" m-[3rem] w-full flex items-start justify-center md:justify-start text-white mx-auto px-[2rem]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-3xl"
          role="search"
          aria-label="Link search"

        >
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">
              Search your links
            </label>
            <input
              id="search"
              type="text"
              value={query}
              onChange={handleQueryChange}
              placeholder="Search your links"
              autoComplete="off"
              autoFocus={autoFocus}
              className="w-full rounded-md px-4 py-3 bg-white/75 border text-black border-neutral-700 focus:border-indigo-500 focus:outline-none placeholder-neutral-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="date" className="text-sm text-neutral-300">
              Sort:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleDateChange}
              className="rounded-md px-3 py-2 bg-white/75 border border-neutral-700 focus:border-indigo-500 focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="rounded-md bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-sm font-medium transition-colors py-2 px-2 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchComponent;
