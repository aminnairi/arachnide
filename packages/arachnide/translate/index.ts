type DynamicSegments<Translation extends string> = 
  Translation extends ""
    ? []
    : Translation extends `${infer First}{${infer Segment}}${infer Last}`
    ? Segment extends ""
    ? [...DynamicSegments<First>, ...DynamicSegments<Last>]
    : [...DynamicSegments<First>, Segment, ...DynamicSegments<Last>]
    : []

type TranslationSegments<Translation extends string> =
  DynamicSegments<Translation> extends []
  ? null
  : Record<DynamicSegments<Translation>[number], string>

type TranslationsByLocale = {
  readonly [key: string]: string
}

export const translate = <Translations extends TranslationsByLocale, Locale extends keyof Translations, Text extends Translations[Locale], Segments extends TranslationSegments<Text>>(translations: Translations, locale: keyof Translations, segments: Segments) => {
  const text: string | undefined = translations[locale];

  if (!text) {
    return "";
  }

  return Object.entries(segments ?? {}).reduce((text, [name, value]) => {
    return text.split(`{${name}}`).join(value as string);
  }, text);
}

export const createTranslations = <Translations extends TranslationsByLocale>(translations: Readonly<Translations>): Readonly<Translations> => {
  return translations;
}

const translations = {
  greetings: createTranslations({
    fr: "Bonjour vous avez {count} mails non-lus",
    en: "Hi you have {count} unread",
  })
};

const output = translate(translations.greetings, "en", { count: "0" });

console.log(output);
