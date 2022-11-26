import { countryType, languagesCount } from '@/types';

export const countriesInTheWorld = (countries: countryType[]): number =>
  countries.length;

export const countryWithMostLangsWhoSpeakSelectedLang = (
  countries: countryType[],
  selected: string,
): countryType | null => {
  const sorted = countries.sort(
    (country1, country2) =>
      country2.languages.length - country1.languages.length,
  );
  return sorted.find(c => c.languages.includes(selected)) || null;
};

export const countryWithHighestNumberOfOfficialLangs = (
  countries: countryType[],
): countryType => {
  return countries.sort(
    (country1, country2) =>
      country2.languages.length - country1.languages.length,
  )[0];
};

export const mostCommonLang = (countries: countryType[]): string[] => {
  const langs: languagesCount[] = [];
  countries.forEach(country => {
    country.languages.forEach(lang => {
      const index = langs.findIndex(e => e.lang === lang);
      if (index >= 0) {
        langs[index].count += 1;
      } else {
        langs.push({
          lang,
          count: 1,
        });
      }
    });
  });

  const sorted = langs.sort((c1, c2) => c2.count - c1.count);
  const maxCount = sorted[0].count;

  return sorted
    .map(l => (l.count === maxCount ? l.lang : ''))
    .filter(e => e !== '');
};
