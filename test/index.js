/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-10T22:01:07+02:00
 * @Email:  me@andreeray.se
 * @Filename: index.js
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-11T12:56:41+02:00
 */



var should      = require('chai').should(),
    escapeXSS   = require('../index'),
    escape      = escapeXSS.escape,
    unescape    = escapeXSS.unescape

describe('# escape', function() {
    it('should convert & into &amp;', function () {
        escape('&').should.equal('&amp;')
    })
    it('should convert " into &quot;', function () {
        escape('"').should.equal('&quot;')
    })
    it("should convert ' into &#39;", function () {
        escape("'").should.equal('&#39;')
    })
    it('should convert < into &lt;', function () {
        escape('<').should.equal('&lt;')
    })
    it('should convert > into &gt;', function () {
        escape('>').should.equal('&gt;')
    })
})

describe('# unescape', function () {
    it('should convert &amp; into &', function () {
        unescape('&amp;').should.equal('&')
    })
    it('should convert &quot; into "', function () {
        unescape('&quot;').should.equal('"')
    })
    it("should convert &#39; into '", function () {
        unescape('&#39;').should.equal("'")
    })
    it('should convert &lt; into <', function () {
        unescape('&lt;').should.equal('<')
    })
    it('should convert &gt; into >', function () {
        unescape('&gt;').should.equal('>')
    })
})
