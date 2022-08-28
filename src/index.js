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
 *                            - isDone = defatul (false)
 *                            - category = default (?)
 *                            - tags = []
 */
const createItem = (input) => {};

/**
 * read an item
 * @param {string} id - id of selected item
 * @returns {Object} TodoItem - return an existing TodoItem Obejct whose id is matched with selected one
 */
const readItem = (id) => {};

/**
 * read all items
 * @returns {Array} Array of TodoItem Obejcts - return all existing TodoItem Obejcts
 */
const readAllItems = () => {};

/**
 * update contents
 * @param {string} id - id of selected item
 * @param {string} contents - will be updated if exist
 * @returns {Object} TodoItem - return updated TodoItem Object
 */
const updateContents = (id, contents) => {};

/**
 * update contents
 * @param {string} id - id of selected item
 * @param {boolean} isDone - will be updated if exist
 * @returns {Object} TodoItem - return updated TodoItem Object
 */
const updateIsDone = (id, isDone) => {};

/**
 * update contents
 * @param {string} id - id of selected item
 * @param {string} category - will be updated if exist
 * @returns {Object} TodoItem - return updated TodoItem Object
 */
const updateCategory = (id, category) => {};

/**
 * update contents
 * @param {string} id - id of selected item
 * @param {Array} tags - will be updated if exist
 * @returns {Object} TodoItem - return updated TodoItem Object
 */
const updateTag = (id, tag) => {};

/**
 * delete item => will fire readAllItems()
 * @param {string} id - id of selected item
 */
const deleteItem = (id) => {};

/**
 * delete all items
 */
const deleteAllItems = () => {};

/**
 * delete tag of selected item
 * @param {string} id - id of selected item
 * @param {string} tag - tag that will be deleted
 * @returns {Object} TodoItem - return with updated tags array
 */
const deleteTag = (id, tag) => {};

/**
 * delete all tags of selected item
 * @param {string} id - id of selected item
 * @returns {Object} TodoItem - return with empty tags array
 */
const deleteAllTags = (id) => {};
