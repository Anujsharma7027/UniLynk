import React, { memo, useState } from "react";

const EventFilters = ({ filters, options, onFiltersChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (field) => (event) => {
    onFiltersChange({
      ...filters,
      [field]: event.target.value,
    });
  };

  return (
    <div className="filter-wrap" aria-label="Event filters">
      <button
        type="button"
        className="filterevent"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="events-filter-panel"
      >
        <img src="/eventsicons/filter.svg" alt="" aria-hidden="true" />
        Filter
      </button>

      {isOpen && (
        <div id="events-filter-panel" className="filter-panel">
          <label>
            Club
            <select value={filters.club} onChange={handleChange("club")}>
              <option value="">All clubs</option>
              {options.club.map((clubOption) => (
                <option key={clubOption} value={clubOption}>
                  {clubOption}
                </option>
              ))}
            </select>
          </label>

          <label>
            Category
            <select value={filters.category} onChange={handleChange("category")}>
              <option value="">All categories</option>
              {options.category.map((categoryOption) => (
                <option key={categoryOption} value={categoryOption}>
                  {categoryOption}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
    </div>
  );
};

export default memo(EventFilters);
