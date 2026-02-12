import { EVENT_FORM_DROPDOWNS, normalizeDropdownValue } from "@/lib/eventFormDropdowns";

export const ITEMS_PER_PAGE = 10;

/**
 * Returns normalized filter options sourced from the form dropdown configuration.
 * Keeping this in a utility module ensures both UI and filtering logic stay aligned.
 */
export const getEventFilterOptions = () => ({
  club: EVENT_FORM_DROPDOWNS.club,
  category: EVENT_FORM_DROPDOWNS.category,
});

const hasValue = (value) => normalizeDropdownValue(value).length > 0;

export const eventMatchesFilters = (event, filters) => {
  const normalizedEventClub = normalizeDropdownValue(event?.club);
  const normalizedEventCategory = normalizeDropdownValue(event?.genre);

  const normalizedClubFilter = normalizeDropdownValue(filters?.club);
  const normalizedCategoryFilter = normalizeDropdownValue(filters?.category);

  const clubMatch =
    !hasValue(normalizedClubFilter) || normalizedEventClub === normalizedClubFilter;
  const categoryMatch =
    !hasValue(normalizedCategoryFilter) ||
    normalizedEventCategory === normalizedCategoryFilter;

  return clubMatch && categoryMatch;
};

export const filterEvents = (events, filters) =>
  (Array.isArray(events) ? events : []).filter((event) =>
    eventMatchesFilters(event, filters)
  );

export const paginateItems = (items, page, pageSize = ITEMS_PER_PAGE) => {
  const safePage = Math.max(1, Number(page) || 1);
  const startIndex = (safePage - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
