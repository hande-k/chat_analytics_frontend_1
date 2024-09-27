"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-title@2.0.0";
exports.ids = ["vendor-chunks/micromark-factory-title@2.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/micromark-factory-title@2.0.0/node_modules/micromark-factory-title/dev/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/micromark-factory-title@2.0.0/node_modules/micromark-factory-title/dev/index.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryTitle: () => (/* binding */ factoryTitle)\n/* harmony export */ });\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-space */ \"(ssr)/./node_modules/.pnpm/micromark-factory-space@2.0.0/node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/.pnpm/micromark-util-character@2.1.0/node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/.pnpm/micromark-util-symbol@2.0.0/node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/.pnpm/micromark-util-symbol@2.0.0/node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/.pnpm/micromark-util-symbol@2.0.0/node_modules/micromark-util-symbol/lib/constants.js\");\n/**\n * @typedef {import('micromark-util-types').Code} Code\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */\n\n\n\n\n\n/**\n * Parse titles.\n *\n * ###### Examples\n *\n * ```markdown\n * \"a\"\n * 'b'\n * (c)\n * \"a\n * b\"\n * 'a\n *     b'\n * (a\\)b)\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type of the whole title (`\"a\"`, `'b'`, `(c)`).\n * @param {TokenType} markerType\n *   Type for the markers (`\"`, `'`, `(`, and `)`).\n * @param {TokenType} stringType\n *   Type for the value (`a`).\n * @returns {State}\n *   Start state.\n */\n// eslint-disable-next-line max-params\nfunction factoryTitle(effects, ok, nok, type, markerType, stringType) {\n  /** @type {NonNullable<Code>} */\n  let marker\n\n  return start\n\n  /**\n   * Start of title.\n   *\n   * ```markdown\n   * > | \"a\"\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */\n  function start(code) {\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.quotationMark ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.apostrophe ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis\n    ) {\n      effects.enter(type)\n      effects.enter(markerType)\n      effects.consume(code)\n      effects.exit(markerType)\n      marker = code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis : code\n      return begin\n    }\n\n    return nok(code)\n  }\n\n  /**\n   * After opening marker.\n   *\n   * This is also used at the closing marker.\n   *\n   * ```markdown\n   * > | \"a\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function begin(code) {\n    if (code === marker) {\n      effects.enter(markerType)\n      effects.consume(code)\n      effects.exit(markerType)\n      effects.exit(type)\n      return ok\n    }\n\n    effects.enter(stringType)\n    return atBreak(code)\n  }\n\n  /**\n   * At something, before something else.\n   *\n   * ```markdown\n   * > | \"a\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function atBreak(code) {\n    if (code === marker) {\n      effects.exit(stringType)\n      return begin(marker)\n    }\n\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof) {\n      return nok(code)\n    }\n\n    // Note: blank lines can’t exist in content.\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {\n      // To do: use `space_or_tab_eol_with_options`, connect.\n      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)\n      effects.consume(code)\n      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)\n      return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(effects, atBreak, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix)\n    }\n\n    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.contentTypeString})\n    return inside(code)\n  }\n\n  /**\n   *\n   *\n   * @type {State}\n   */\n  function inside(code) {\n    if (code === marker || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {\n      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString)\n      return atBreak(code)\n    }\n\n    effects.consume(code)\n    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? escape : inside\n  }\n\n  /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | \"a\\*b\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function escape(code) {\n    if (code === marker || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash) {\n      effects.consume(code)\n      return inside\n    }\n\n    return inside(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLWZhY3RvcnktdGl0bGVAMi4wLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXRpdGxlL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xELGFBQWEsd0NBQXdDO0FBQ3JELGFBQWEsc0NBQXNDO0FBQ25ELGFBQWEsMENBQTBDO0FBQ3ZEOztBQUVvRDtBQUNPO0FBQ0U7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsYUFBYSxtQkFBbUI7QUFDaEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdEQUFLO0FBQ3BCLGVBQWUsd0RBQUs7QUFDcEIsZUFBZSx3REFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFLLG1CQUFtQix3REFBSztBQUNyRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsd0RBQUs7QUFDdEI7QUFDQTs7QUFFQTtBQUNBLFFBQVEsNEVBQWtCO0FBQzFCO0FBQ0Esb0JBQW9CLHdEQUFLO0FBQ3pCO0FBQ0EsbUJBQW1CLHdEQUFLO0FBQ3hCLGFBQWEscUVBQVksbUJBQW1CLHdEQUFLO0FBQ2pEOztBQUVBLGtCQUFrQix3REFBSyxlQUFlLGFBQWEsNERBQVMsbUJBQW1CO0FBQy9FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxvQ0FBb0Msd0RBQUssUUFBUSw0RUFBa0I7QUFDbkUsbUJBQW1CLHdEQUFLO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isd0RBQUs7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0Esb0NBQW9DLHdEQUFLO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0X2FuYWx5dGljc19mcm9udGVuZF8xLy4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay1mYWN0b3J5LXRpdGxlQDIuMC4wL25vZGVfbW9kdWxlcy9taWNyb21hcmstZmFjdG9yeS10aXRsZS9kZXYvaW5kZXguanM/MzM3YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuQ29kZX0gQ29kZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FZmZlY3RzfSBFZmZlY3RzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlblR5cGV9IFRva2VuVHlwZVxuICovXG5cbmltcG9ydCB7ZmFjdG9yeVNwYWNlfSBmcm9tICdtaWNyb21hcmstZmFjdG9yeS1zcGFjZSdcbmltcG9ydCB7bWFya2Rvd25MaW5lRW5kaW5nfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG5pbXBvcnQge2NvZGVzLCBjb25zdGFudHMsIHR5cGVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wnXG5cbi8qKlxuICogUGFyc2UgdGl0bGVzLlxuICpcbiAqICMjIyMjIyBFeGFtcGxlc1xuICpcbiAqIGBgYG1hcmtkb3duXG4gKiBcImFcIlxuICogJ2InXG4gKiAoYylcbiAqIFwiYVxuICogYlwiXG4gKiAnYVxuICogICAgIGInXG4gKiAoYVxcKWIpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0VmZmVjdHN9IGVmZmVjdHNcbiAqICAgQ29udGV4dC5cbiAqIEBwYXJhbSB7U3RhdGV9IG9rXG4gKiAgIFN0YXRlIHN3aXRjaGVkIHRvIHdoZW4gc3VjY2Vzc2Z1bC5cbiAqIEBwYXJhbSB7U3RhdGV9IG5va1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHVuc3VjY2Vzc2Z1bC5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSB0eXBlXG4gKiAgIFR5cGUgb2YgdGhlIHdob2xlIHRpdGxlIChgXCJhXCJgLCBgJ2InYCwgYChjKWApLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IG1hcmtlclR5cGVcbiAqICAgVHlwZSBmb3IgdGhlIG1hcmtlcnMgKGBcImAsIGAnYCwgYChgLCBhbmQgYClgKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBzdHJpbmdUeXBlXG4gKiAgIFR5cGUgZm9yIHRoZSB2YWx1ZSAoYGFgKS5cbiAqIEByZXR1cm5zIHtTdGF0ZX1cbiAqICAgU3RhcnQgc3RhdGUuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5leHBvcnQgZnVuY3Rpb24gZmFjdG9yeVRpdGxlKGVmZmVjdHMsIG9rLCBub2ssIHR5cGUsIG1hcmtlclR5cGUsIHN0cmluZ1R5cGUpIHtcbiAgLyoqIEB0eXBlIHtOb25OdWxsYWJsZTxDb2RlPn0gKi9cbiAgbGV0IG1hcmtlclxuXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBTdGFydCBvZiB0aXRsZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFwiYVwiXG4gICAqICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMucXVvdGF0aW9uTWFyayB8fFxuICAgICAgY29kZSA9PT0gY29kZXMuYXBvc3Ryb3BoZSB8fFxuICAgICAgY29kZSA9PT0gY29kZXMubGVmdFBhcmVudGhlc2lzXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgICBlZmZlY3RzLmVudGVyKG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgICAgbWFya2VyID0gY29kZSA9PT0gY29kZXMubGVmdFBhcmVudGhlc2lzID8gY29kZXMucmlnaHRQYXJlbnRoZXNpcyA6IGNvZGVcbiAgICAgIHJldHVybiBiZWdpblxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBvcGVuaW5nIG1hcmtlci5cbiAgICpcbiAgICogVGhpcyBpcyBhbHNvIHVzZWQgYXQgdGhlIGNsb3NpbmcgbWFya2VyLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgXCJhXCJcbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBiZWdpbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQXQgc29tZXRoaW5nLCBiZWZvcmUgc29tZXRoaW5nIGVsc2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBcImFcIlxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGF0QnJlYWsoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuZXhpdChzdHJpbmdUeXBlKVxuICAgICAgcmV0dXJuIGJlZ2luKG1hcmtlcilcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gY29kZXMuZW9mKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gTm90ZTogYmxhbmsgbGluZXMgY2Fu4oCZdCBleGlzdCBpbiBjb250ZW50LlxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIC8vIFRvIGRvOiB1c2UgYHNwYWNlX29yX3RhYl9lb2xfd2l0aF9vcHRpb25zYCwgY29ubmVjdC5cbiAgICAgIGVmZmVjdHMuZW50ZXIodHlwZXMubGluZUVuZGluZylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmxpbmVFbmRpbmcpXG4gICAgICByZXR1cm4gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIGF0QnJlYWssIHR5cGVzLmxpbmVQcmVmaXgpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcih0eXBlcy5jaHVua1N0cmluZywge2NvbnRlbnRUeXBlOiBjb25zdGFudHMuY29udGVudFR5cGVTdHJpbmd9KVxuICAgIHJldHVybiBpbnNpZGUoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBpbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIgfHwgY29kZSA9PT0gY29kZXMuZW9mIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmNodW5rU3RyaW5nKVxuICAgICAgcmV0dXJuIGF0QnJlYWsoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29kZSA9PT0gY29kZXMuYmFja3NsYXNoID8gZXNjYXBlIDogaW5zaWRlXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYFxcYCwgYXQgYSBzcGVjaWFsIGNoYXJhY3Rlci5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFwiYVxcKmJcIlxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVzY2FwZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlciB8fCBjb2RlID09PSBjb2Rlcy5iYWNrc2xhc2gpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluc2lkZVxuICAgIH1cblxuICAgIHJldHVybiBpbnNpZGUoY29kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/micromark-factory-title@2.0.0/node_modules/micromark-factory-title/dev/index.js\n");

/***/ })

};
;