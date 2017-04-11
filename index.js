/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-10T17:51:20+02:00
 * @Email:  me@andreeray.se
 * @Filename: index.js
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-11T12:56:56+02:00
 *
 * @desc: escaping and unescaping HTML entities – commonly needed utility to prevent XSS attacks when rendering user generated content.
 */


module.exports = {
    /**
     * Escape special characters in the given string of html.
     * @type {Object}
     * @param {String} html
     * @return {String}
     */
    escape: function (html) {
        return String(html)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
    },
    /**
     * Unescape special characters in the given string of html.
     * @type {Object}
     * @param {String} html
     * @return {String}
     */
    unescape: function (html) {
        return String(html)
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
    }
}
