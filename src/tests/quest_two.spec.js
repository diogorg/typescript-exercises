import {
  countriesInTheWorld,
  countryWithHighestNumberOfOfficialLangs,
  countryWithMostLangsWhoSpeakSelectedLang,
  mostCommonLang
} from '../quest_two'
const countries = [
  {
    country: "US",
    languages: ["en"]
  },
  {
    country: "BE",
    languages: ["nl", "fr", "de"]
  },
  {
    country: "NL",
    languages: ["nl"]
  },
  {
    country: "DE",
    languages: ["de"]
  },
  {
    country: "ES",
    languages: ["es"]
  }];

describe('Test quest two', () => {
  it('Should output the quantity of countries in the world', () => {
    expect(countriesInTheWorld(countries)).toBe(5);
  });

  it('Should get the country with highest number of official languages', () => {
    expect(countryWithHighestNumberOfOfficialLangs(countries)).toMatchObject({
      country: "BE",
      languages: ["nl", "fr", "de"]
    });
  });

  it('Should get the country with the most official languages that speak german', () => {
    expect(countryWithMostLangsWhoSpeakSelectedLang(countries, 'de')).toMatchObject({
      country: "BE",
      languages: ["nl", "fr", "de"]
    });
  });

  it('Should return null when not found language from country with most official languages', () => {
    expect(countryWithMostLangsWhoSpeakSelectedLang(countries, 'pt')).toBeNull();
  });

  it('Should get The most speak languages', () => {
    expect(mostCommonLang(countries)).toStrictEqual(["nl", "de"]);
  });
});
