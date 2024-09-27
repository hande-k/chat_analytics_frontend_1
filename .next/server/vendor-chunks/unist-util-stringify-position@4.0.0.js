"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-stringify-position@4.0.0";
exports.ids = ["vendor-chunks/unist-util-stringify-position@4.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stringifyPosition: () => (/* binding */ stringifyPosition)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Point} Point\n * @typedef {import('unist').Position} Position\n */\n\n/**\n * @typedef NodeLike\n * @property {string} type\n * @property {PositionLike | null | undefined} [position]\n *\n * @typedef PointLike\n * @property {number | null | undefined} [line]\n * @property {number | null | undefined} [column]\n * @property {number | null | undefined} [offset]\n *\n * @typedef PositionLike\n * @property {PointLike | null | undefined} [start]\n * @property {PointLike | null | undefined} [end]\n */\n\n/**\n * Serialize the positional info of a point, position (start and end points),\n * or node.\n *\n * @param {Node | NodeLike | Point | PointLike | Position | PositionLike | null | undefined} [value]\n *   Node, position, or point.\n * @returns {string}\n *   Pretty printed positional info of a node (`string`).\n *\n *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)\n *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for\n *   column, `s` for `start`, and `e` for end.\n *   An empty string (`''`) is returned if the given value is neither `node`,\n *   `position`, nor `point`.\n */\nfunction stringifyPosition(value) {\n  // Nothing.\n  if (!value || typeof value !== 'object') {\n    return ''\n  }\n\n  // Node.\n  if ('position' in value || 'type' in value) {\n    return position(value.position)\n  }\n\n  // Position.\n  if ('start' in value || 'end' in value) {\n    return position(value)\n  }\n\n  // Point.\n  if ('line' in value || 'column' in value) {\n    return point(value)\n  }\n\n  // ?\n  return ''\n}\n\n/**\n * @param {Point | PointLike | null | undefined} point\n * @returns {string}\n */\nfunction point(point) {\n  return index(point && point.line) + ':' + index(point && point.column)\n}\n\n/**\n * @param {Position | PositionLike | null | undefined} pos\n * @returns {string}\n */\nfunction position(pos) {\n  return point(pos && pos.start) + '-' + point(pos && pos.end)\n}\n\n/**\n * @param {number | null | undefined} value\n * @returns {number}\n */\nfunction index(value) {\n  return value && typeof value === 'number' ? value : 1\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb25ANC4wLjAvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLDBCQUEwQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsaUNBQWlDO0FBQy9DO0FBQ0E7QUFDQSxjQUFjLDJCQUEyQjtBQUN6QyxjQUFjLDJCQUEyQjtBQUN6QyxjQUFjLDJCQUEyQjtBQUN6QztBQUNBO0FBQ0EsY0FBYyw4QkFBOEI7QUFDNUMsY0FBYyw4QkFBOEI7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtGQUFrRjtBQUM3RjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNDQUFzQztBQUNqRCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDRDQUE0QztBQUN2RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0X2FuYWx5dGljc19mcm9udGVuZF8xLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uQDQuMC4wL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbi9saWIvaW5kZXguanM/OWVlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gTm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Qb2ludH0gUG9pbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUG9zaXRpb259IFBvc2l0aW9uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBOb2RlTGlrZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGVcbiAqIEBwcm9wZXJ0eSB7UG9zaXRpb25MaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Bvc2l0aW9uXVxuICpcbiAqIEB0eXBlZGVmIFBvaW50TGlrZVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbbGluZV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbHVtbl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29mZnNldF1cbiAqXG4gKiBAdHlwZWRlZiBQb3NpdGlvbkxpa2VcbiAqIEBwcm9wZXJ0eSB7UG9pbnRMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3N0YXJ0XVxuICogQHByb3BlcnR5IHtQb2ludExpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbZW5kXVxuICovXG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBwb3NpdGlvbmFsIGluZm8gb2YgYSBwb2ludCwgcG9zaXRpb24gKHN0YXJ0IGFuZCBlbmQgcG9pbnRzKSxcbiAqIG9yIG5vZGUuXG4gKlxuICogQHBhcmFtIHtOb2RlIHwgTm9kZUxpa2UgfCBQb2ludCB8IFBvaW50TGlrZSB8IFBvc2l0aW9uIHwgUG9zaXRpb25MaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3ZhbHVlXVxuICogICBOb2RlLCBwb3NpdGlvbiwgb3IgcG9pbnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBQcmV0dHkgcHJpbnRlZCBwb3NpdGlvbmFsIGluZm8gb2YgYSBub2RlIChgc3RyaW5nYCkuXG4gKlxuICogICBJbiB0aGUgZm9ybWF0IG9mIGEgcmFuZ2UgYGxzOmNzLWxlOmNlYCAod2hlbiBnaXZlbiBgbm9kZWAgb3IgYHBvc2l0aW9uYClcbiAqICAgb3IgYSBwb2ludCBgbDpjYCAod2hlbiBnaXZlbiBgcG9pbnRgKSwgd2hlcmUgYGxgIHN0YW5kcyBmb3IgbGluZSwgYGNgIGZvclxuICogICBjb2x1bW4sIGBzYCBmb3IgYHN0YXJ0YCwgYW5kIGBlYCBmb3IgZW5kLlxuICogICBBbiBlbXB0eSBzdHJpbmcgKGAnJ2ApIGlzIHJldHVybmVkIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBuZWl0aGVyIGBub2RlYCxcbiAqICAgYHBvc2l0aW9uYCwgbm9yIGBwb2ludGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlQb3NpdGlvbih2YWx1ZSkge1xuICAvLyBOb3RoaW5nLlxuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIE5vZGUuXG4gIGlmICgncG9zaXRpb24nIGluIHZhbHVlIHx8ICd0eXBlJyBpbiB2YWx1ZSkge1xuICAgIHJldHVybiBwb3NpdGlvbih2YWx1ZS5wb3NpdGlvbilcbiAgfVxuXG4gIC8vIFBvc2l0aW9uLlxuICBpZiAoJ3N0YXJ0JyBpbiB2YWx1ZSB8fCAnZW5kJyBpbiB2YWx1ZSkge1xuICAgIHJldHVybiBwb3NpdGlvbih2YWx1ZSlcbiAgfVxuXG4gIC8vIFBvaW50LlxuICBpZiAoJ2xpbmUnIGluIHZhbHVlIHx8ICdjb2x1bW4nIGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHBvaW50KHZhbHVlKVxuICB9XG5cbiAgLy8gP1xuICByZXR1cm4gJydcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1BvaW50IHwgUG9pbnRMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gcG9pbnRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHBvaW50KHBvaW50KSB7XG4gIHJldHVybiBpbmRleChwb2ludCAmJiBwb2ludC5saW5lKSArICc6JyArIGluZGV4KHBvaW50ICYmIHBvaW50LmNvbHVtbilcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1Bvc2l0aW9uIHwgUG9zaXRpb25MaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gcG9zXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBwb3NpdGlvbihwb3MpIHtcbiAgcmV0dXJuIHBvaW50KHBvcyAmJiBwb3Muc3RhcnQpICsgJy0nICsgcG9pbnQocG9zICYmIHBvcy5lbmQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSB2YWx1ZVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gaW5kZXgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IDFcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js\n");

/***/ })

};
;