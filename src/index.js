class TodoItem {
  /**
   * @constructor
   * @property {string} id - required
   * @property {string} contents - required
   * @property {boolean} isDone - required
   * @property {string} category - required
   * @property {Array} tags - optional
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
 * @function 
 * @name createItem
 * @param {string} contents - typed string value
 * @param {string} category - selected string value
 * @param {Array} tags - array of the selected string values
 * @returns {TodoItem}
 * @description create a new TodoItem Object(id: generated, isDone: false)
 */
const createItem = (contents, category, tags) => {
};

/**
 * @function
 * @name readItem
 * @param {string} id - id of the selected item
 * @returns {TodoItem} 
 * @description returns an existing TodoItem Obejct whose id is matched with selected one.
 */
const readItem = (id) => {
};

/**
 * @function
 * @name readAllItems
 * @returns {Array}
 * @description returns array of the all existing TodoItem Obejcts.
 */
const readAllItems = () => {
};

/**
 * @function
 * @name updateContents
 * @param {string} id - id of the selected item
 * @param {string} contents - the 'contents' property of TodoItem that will be updated
 * @returns {TodoItem}
 * @description updates and returns the TodoItem Object.
 */
const updateContents = (id, contents) => {
};

/**
 * @function
 * @name updateIsDone
 * @param {string} id - id of the selected item
 * @param {boolean} isDone - the 'isDone' property of TodoItem that will be updated
 * @returns {TodoItem}
 * @description updates and returns the TodoItem Object.
 */
const updateIsDone = (id, isDone) => {
};

/**
 * @function
 * @name updateCategory
 * @param {string} id - id of the selected item
 * @param {string} category - the 'category' property of TodoItem that will be updated
 * @returns {TodoItem}
 * @description updates and returns the TodoItem Object.
 */
const updateCategory = (id, category) => {
};

/**
 * @function
 * @name updateTag
 * @param {string} id - id of the selected item
 * @param {Array} tag - the 'tag' property of TodoItem that will be updated
 * @returns {TodoItem}
 * @description updates and returns the TodoItem Object.
 */
const updateTag = (id, tag) => {
};

/**
 * @function
 * @name deleteItem
 * @param {string} id - id of the selected item
 * @description deletes the selected TodoItem Object
 */
const deleteItem = (id) => {
};

/**
 * @function
 * @name deleteAllItems
 * @description deletes all TodoItem Objects
 */
const deleteAllItems = () => {
};

/**
 * @function
 * @name deleteTag
 * @param {string} id - id of the selected item
 * @param {string} tag - tag that will be deleted
 * @returns {TodoItem}
 * @description deletes a tag of the selected TodoItem Object and returns the updated TodoItem Object.
 */
const deleteTag = (id, tag) => {
};

/**
 * @function
 * @name deleteAllTags
 * @param {string} id - id of the selected item
 * @returns {TodoItem}
 * @description deletes all tags of the selected TodoItem Object and returns the TodoItem Object with an empty tags array.
 */
const deleteAllTags = (id) => {
};
