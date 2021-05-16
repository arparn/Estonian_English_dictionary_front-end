## Estonian-English Dictionary front-end

This is front-end for my trial internship project: estonian-english dictionary.

This project is implemented in TypeScript using Angular framework.

For styling I used Angular Material and Bootstrap.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


# User guide

### Functionality:

- User can add Estonian/English words and their translations.

- One word can have several translations.

- User can search translations for Estonian/English words.

- If there is a mistake in an entered word, user will still get relevant results, where 1-2 letters are replaced.

- If word has more than 1 translation, user can delete only one translation.

- User can delete the word and all it's translations.

- If the word has only 1 translation, user can't delete it (because all words should have minimum 1 translation), in this case user should delete both the word and it's translation.

- User can navigate through application by using menu in the top of the screen.

- In Delete section user can see all words for both dictionaries (Estonian-English and English-Estonian). User can use searchbar in the right side of the screen to search words which should be deleted.

- When adding word to Estonian-English dictionary or to English-Estonian dictionary user can choose option 'Add word and translation to english/estonian dictionary so you can search for this word in english/estonian as well', by chosing it the word will be added in both dictionaries. For example: if you add word 'hello' in English-Estonian dictionary and it's translation 'tere' after choosing this option you can search for 'tere' translation in Estonian-English dictionary which will be 'hello'.

- To add translation to the word which already exists, user should go to 'add estonian/english word' -> insert existing word -> insert additional translation -> then can choose 'Add word and translation to english/estonian dictionary so you can search for this word in english/estonian as well' to add word and translation to both dictionaries -> then click on 'Add word' button. As a result additional translation will be added to the existing word.
