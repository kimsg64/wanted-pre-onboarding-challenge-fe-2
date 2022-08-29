/**
 * todo item
 */
class TodoItem {
  /**
   * @constructor
   * @param {string} id - required
   * @param {string} contents - required
   * @param {boolean} isDone - required
   * @param {string} category - required
   * @param {Array} tags - optional
   */
  constructor(id, contents, isDone, category, tags) {
    this.id = id;
    this.contents = contents;
    this.isDone = isDone;
    this.category = category;
    this.tags = tags;
  }
}

/**
 * create a new item
 * @param {string} input - typed string
 * @returns {Object} TodoItem - new TodoItem Object
 *                            - generate a new id
 *                            - default value
 *                                contents: ""
 *                                isDone: false
 *                                category: string value
 *                                tags: []
 */
const createItem = (input) => {
  // create a new todo item...
};

/**
 * read an item
 * @param {string} id - id of selected item
 * @returns {Object} TodoItem - return an existing TodoItem Obejct whose id is matched with selected one
 */
const readItem = (id) => {
  // read an item...
};

/**
 * read all items
 * @returns {Array} Array of TodoItem Obejcts - return all existing TodoItem Obejcts
 */
const readAllItems = () => {
  // read all items
};

/**
 * update contents
 * @param {string} id - id of selected item
 * @param {string} contents - will be updated if exist
 * @returns {Object} TodoItem - return updated TodoItem Object
 */
const updateContents = (id, contents) => {
  // update contetns of the item
};

/**
 * update contents
 * @param {string} id - id of selected item
 * @param {boolean} isDone - will be updated if exist
 * @returns {Object} TodoItem - return updated TodoItem Object
 */
const updateIsDone = (id, isDone) => {
  // update isDone of the item
};

/**
 * update contents
 * @param {string} id - id of selected item
 * @param {string} category - will be updated if exist
 * @returns {Object} TodoItem - return updated TodoItem Object
 */
const updateCategory = (id, category) => {
  // update category of the item
};

/**
 * update contents
 * @param {string} id - id of selected item
 * @param {Array} tags - will be updated if exist
 * @returns {Object} TodoItem - return updated TodoItem Object
 */
const updateTag = (id, tag) => {
  // update tag of the item
};

/**
 * delete item => will fire readAllItems()
 * @param {string} id - id of selected item
 */
const deleteItem = (id) => {
  // delete an item
};

/**
 * delete all items
 */
const deleteAllItems = () => {
  // delete all items
};

/**
 * delete tag of selected item
 * @param {string} id - id of selected item
 * @param {string} tag - tag that will be deleted
 * @returns {Object} TodoItem - return with updated tags array
 */
const deleteTag = (id, tag) => {
  // delete a tag of the item
};

/**
 * delete all tags of selected item
 * @param {string} id - id of selected item
 * @returns {Object} TodoItem - return with empty tags array
 */
const deleteAllTags = (id) => {
  // delete all tags of the item
};
