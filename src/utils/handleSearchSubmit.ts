import { FormEvent } from "react";

function handleSearchSubmit(event: FormEvent, search: string) {
  event.preventDefault();
  const params = new URLSearchParams({
    q: search,
  });
  const url = `/search?${params}`;
  return url;
}

export { handleSearchSubmit };
