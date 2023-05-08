class CatalogItem {
  #id;
  #title;
  #tags;
  constructor(id, title, tags) {
    this.#id = id;
    this.#title = title;
    this.#tags = tags;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  hasTag(arg) {
    return this.#tags.includes(arg);
  }
}

class Scroll {
  #catalogItem;
  #dataLastCleaned;
  constructor(catalogItem, dataLastCleaned) {
    this.#catalogItem = catalogItem;
    this.#lastCleaned = dataLastCleaned;
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag("revered") ? 700 : 1500;

    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this.#lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}
