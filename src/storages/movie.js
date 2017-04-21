const collectionKey = 'movie-collection';
const emptyCollection = { movies: [], serial: 0 };

/**
 * Save collection into localStorage
 * @param {{movies: Array, serial: Number}} collection
 * @returns {{movies: Array, serial: Number}} the same as input collection
 */
const saveCollection = collection => {
  localStorage.setItem (collectionKey, JSON.stringify (collection));
  return collection;
};

/**
 * Update collection structure layout and save to storage
 * Move movie id into data object instead of table key
 * @example
 *  { 22: { foo: 'bar' } } => [ { movieId: 22, foo: 'bar' } ]
 * @param {{movies: Object}} movies in old format
 * @returns {{movies: Array, serial: Number}} - Updated movie collection
 */
const migrate = ({ movies }) => {
  const updatedMovies = Object.keys(movies).map(id =>
    ({...movies[id], movieId: parseInt(id, 10) }));

  // Find the biggest id in collection, perhaps it is the last item
  // but iterate over all collection to be sure
  const serial = updatedMovies.reduce((biggest, i) => (biggest < i.movieId) ? i.movieId : biggest, 0);

  return saveCollection({
    movies: updatedMovies,
    serial
  });
};

/**
 * Check for a new collection structure layout
 * Perform migration for old data
 * @param {{movies: Array}} collection
 * @returns {{movies: Array}}
 */
const checkForMigration = collection =>
  collection.hasOwnProperty('serial')
    ? collection
    : migrate(collection);

/**
 * Load collection form localStorage
 * @throws {SyntaxError}
 * @returns {Array} - movies
 */
export function load () {
  const serializedData = localStorage.getItem(collectionKey);

  return serializedData
    ? checkForMigration(JSON.parse(serializedData))
    : emptyCollection;
}

/**
 * Add movie in collection and update storage
 * @param {Object} movie model
 */
export function add (movie) {
  const { movies, serial } = load();

  const model = {...movie, movieId: serial + 1};

  saveCollection({
    movies: [...movies, model],
    serial: serial + 1
  });

  return model;
}

/**
 * Fetch saved collection
 * @returns {Array<Object>} - movie collection
 */
export function all () {
  return load().movies;
}