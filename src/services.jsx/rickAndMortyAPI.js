export const getCharacters = async () => {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const json = await res.json();
    return json.results.map((character) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        image: character.image,
        origin: character.origin.name
      }))
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export const getCharacter = async (id) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const character = await res.json();
    character.origin = character.origin.name;
    return character;
  } catch (error) {
    console.error(error.message);
    return {};
  }
};
