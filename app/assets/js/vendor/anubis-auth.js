//#region node_modules/preact/dist/preact.module.js
var e, t, n, r, i, a, o, s, c, l, u, d, f, p, m = {}, h = [], g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, _ = Array.isArray;
function v(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function y(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function b(t, n, r) {
	var i, a, o, s = {};
	for (o in n) o == "key" ? i = n[o] : o == "ref" ? a = n[o] : s[o] = n[o];
	if (arguments.length > 2 && (s.children = arguments.length > 3 ? e.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) s[o] === void 0 && (s[o] = t.defaultProps[o]);
	return x(t, s, i, a, null);
}
function x(e, r, i, a, o) {
	var s = {
		type: e,
		props: r,
		key: i,
		ref: a,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: o ?? ++n,
		__i: -1,
		__u: 0
	};
	return o == null && t.vnode != null && t.vnode(s), s;
}
function S(e) {
	return e.children;
}
function C(e, t) {
	this.props = e, this.context = t;
}
function w(e, t) {
	if (t == null) return e.__ ? w(e.__, e.__i + 1) : null;
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? w(e) : null;
}
function T(e) {
	if (e.__P && e.__d) {
		var n = e.__v, r = n.__e, i = [], a = [], o = v({}, n);
		o.__v = n.__v + 1, t.vnode && t.vnode(o), oe(e.__P, o, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [r] : null, i, r ?? w(n), !!(32 & n.__u), a), o.__v = n.__v, o.__.__k[o.__i] = o, ce(i, o, a), n.__e = n.__ = null, o.__e != r && ee(o);
	}
}
function ee(e) {
	if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
		if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
	}), ee(e);
}
function E(e) {
	(!e.__d && (e.__d = !0) && r.push(e) && !D.__r++ || i != t.debounceRendering) && ((i = t.debounceRendering) || a)(D);
}
function D() {
	try {
		for (var e, t = 1; r.length;) r.length > t && r.sort(o), e = r.shift(), t = r.length, T(e);
	} finally {
		r.length = D.__r = 0;
	}
}
function te(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f, p, g, _, v, y, b = r && r.__k || h, x = t.length;
	for (c = ne(n, t, b, c, x), d = 0; d < x; d++) (p = n.__k[d]) != null && (f = p.__i != -1 && b[p.__i] || m, p.__i = d, v = oe(e, p, f, i, a, o, s, c, l, u), g = p.__e, p.ref && f.ref != p.ref && (f.ref && de(f.ref, null, p), u.push(p.ref, p.__c || g, p)), _ == null && g != null && (_ = g), (y = !!(4 & p.__u)) || f.__k === p.__k ? (c = re(p, c, e, y), y && f.__e && (f.__e = null)) : typeof p.type == "function" && v !== void 0 ? c = v : g && (c = g.nextSibling), p.__u &= -7);
	return n.__e = _, c;
}
function ne(e, t, n, r, i) {
	var a, o, s, c, l, u = n.length, d = u, f = 0;
	for (e.__k = Array(i), a = 0; a < i; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = x(null, o, null, null, null) : _(o) ? o = e.__k[a] = x(S, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = x(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, c = a + f, o.__ = e, o.__b = e.__b + 1, s = null, (l = o.__i = k(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (i > u ? f-- : i < u && f++), typeof o.type != "function" && (o.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, o.__u |= 4))) : e.__k[a] = null;
	if (d) for (a = 0; a < u; a++) (s = n[a]) != null && !(2 & s.__u) && (s.__e == r && (r = w(s)), fe(s, s));
	return r;
}
function re(e, t, n, r) {
	var i, a;
	if (typeof e.type == "function") {
		for (i = e.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = e, t = re(i[a], t, n, r));
		return t;
	}
	e.__e != t && (r && (t && e.type && !t.parentNode && (t = w(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
	do
		t &&= t.nextSibling;
	while (t != null && t.nodeType == 8);
	return t;
}
function O(e, t) {
	return t ||= [], e == null || typeof e == "boolean" || (_(e) ? e.some(function(e) {
		O(e, t);
	}) : t.push(e)), t;
}
function k(e, t, n, r) {
	var i, a, o, s = e.key, c = e.type, l = t[n], u = l != null && (2 & l.__u) == 0;
	if (l === null && s == null || u && s == l.key && c == l.type) return n;
	if (r > +!!u) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length;) if ((l = t[o = i >= 0 ? i-- : a++]) != null && !(2 & l.__u) && s == l.key && c == l.type) return o;
	}
	return -1;
}
function ie(e, t, n) {
	t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || g.test(t) ? n : n + "px";
}
function A(e, t, n, r, i) {
	var a, o;
	n: if (t == "style") if (typeof n == "string") e.style.cssText = n;
	else {
		if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || ie(e.style, t, "");
		if (n) for (t in n) r && n[t] == r[t] || ie(e.style, t, n[t]);
	}
	else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(u, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l ||= {}, e.l[t + a] = n, n ? r ? n[l] = r[l] : (n[l] = d, e.addEventListener(t, a ? p : f, a)) : e.removeEventListener(t, a ? p : f, a);
	else {
		if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
			e[t] = n ?? "";
			break n;
		} catch {}
		typeof n == "function" || (n == null || !1 === n && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
	}
}
function ae(e) {
	return function(n) {
		if (this.l) {
			var r = this.l[n.type + e];
			if (n[c] == null) n[c] = d++;
			else if (n[c] < r[l]) return;
			return r(t.event ? t.event(n) : n);
		}
	};
}
function oe(e, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, g, b, x, w, T, ee, E, D, ne, re, O, k = n.type;
	if (n.constructor !== void 0) return null;
	128 & r.__u && (l = !!(32 & r.__u), o = [c = n.__e = r.__e]), (d = t.__b) && d(n);
	n: if (typeof k == "function") try {
		if (w = n.props, T = k.prototype && k.prototype.render, ee = (d = k.contextType) && i[d.__c], E = d ? ee ? ee.props.value : d.__ : i, r.__c ? x = (f = n.__c = r.__c).__ = f.__E : (T ? n.__c = f = new k(w, E) : (n.__c = f = new C(w, E), f.constructor = k, f.render = pe), ee && ee.sub(f), f.state ||= {}, f.__n = i, p = f.__d = !0, f.__h = [], f._sb = []), T && f.__s == null && (f.__s = f.state), T && k.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = v({}, f.__s)), v(f.__s, k.getDerivedStateFromProps(w, f.__s))), m = f.props, g = f.state, f.__v = n, p) T && k.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), T && f.componentDidMount != null && f.__h.push(f.componentDidMount);
		else {
			if (T && k.getDerivedStateFromProps == null && w !== m && f.componentWillReceiveProps != null && f.componentWillReceiveProps(w, E), n.__v == r.__v || !f.__e && f.shouldComponentUpdate != null && !1 === f.shouldComponentUpdate(w, f.__s, E)) {
				n.__v != r.__v && (f.props = w, f.state = f.__s, f.__d = !1), n.__e = r.__e, n.__k = r.__k, n.__k.some(function(e) {
					e && (e.__ = n);
				}), h.push.apply(f.__h, f._sb), f._sb = [], f.__h.length && s.push(f);
				break n;
			}
			f.componentWillUpdate != null && f.componentWillUpdate(w, f.__s, E), T && f.componentDidUpdate != null && f.__h.push(function() {
				f.componentDidUpdate(m, g, b);
			});
		}
		if (f.context = E, f.props = w, f.__P = e, f.__e = !1, D = t.__r, ne = 0, T) f.state = f.__s, f.__d = !1, D && D(n), d = f.render(f.props, f.state, f.context), h.push.apply(f.__h, f._sb), f._sb = [];
		else do
			f.__d = !1, D && D(n), d = f.render(f.props, f.state, f.context), f.state = f.__s;
		while (f.__d && ++ne < 25);
		f.state = f.__s, f.getChildContext != null && (i = v(v({}, i), f.getChildContext())), T && !p && f.getSnapshotBeforeUpdate != null && (b = f.getSnapshotBeforeUpdate(m, g)), re = d != null && d.type === S && d.key == null ? le(d.props.children) : d, c = te(e, _(re) ? re : [re], n, r, i, a, o, s, c, l, u), f.base = n.__e, n.__u &= -161, f.__h.length && s.push(f), x && (f.__E = f.__ = null);
	} catch (e) {
		if (n.__v = null, l || o != null) if (e.then) {
			for (n.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling;) c = c.nextSibling;
			o[o.indexOf(c)] = null, n.__e = c;
		} else {
			for (O = o.length; O--;) y(o[O]);
			se(n);
		}
		else n.__e = r.__e, n.__k = r.__k, e.then || se(n);
		t.__e(e, n, r);
	}
	else o == null && n.__v == r.__v ? (n.__k = r.__k, n.__e = r.__e) : c = n.__e = ue(r.__e, n, r, i, a, o, s, l, u);
	return (d = t.diffed) && d(n), 128 & n.__u ? void 0 : c;
}
function se(e) {
	e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(se));
}
function ce(e, n, r) {
	for (var i = 0; i < r.length; i++) de(r[i], r[++i], r[++i]);
	t.__c && t.__c(n, e), e.some(function(n) {
		try {
			e = n.__h, n.__h = [], e.some(function(e) {
				e.call(n);
			});
		} catch (e) {
			t.__e(e, n.__v);
		}
	});
}
function le(e) {
	return typeof e != "object" || !e || e.__b > 0 ? e : _(e) ? e.map(le) : v({}, e);
}
function ue(n, r, i, a, o, s, c, l, u) {
	var d, f, p, h, g, v, b, x = i.props || m, S = r.props, C = r.type;
	if (C == "svg" ? o = "http://www.w3.org/2000/svg" : C == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o ||= "http://www.w3.org/1999/xhtml", s != null) {
		for (d = 0; d < s.length; d++) if ((g = s[d]) && "setAttribute" in g == !!C && (C ? g.localName == C : g.nodeType == 3)) {
			n = g, s[d] = null;
			break;
		}
	}
	if (n == null) {
		if (C == null) return document.createTextNode(S);
		n = document.createElementNS(o, C, S.is && S), l &&= (t.__m && t.__m(r, s), !1), s = null;
	}
	if (C == null) x === S || l && n.data == S || (n.data = S);
	else {
		if (s &&= e.call(n.childNodes), !l && s != null) for (x = {}, d = 0; d < n.attributes.length; d++) x[(g = n.attributes[d]).name] = g.value;
		for (d in x) g = x[d], d == "dangerouslySetInnerHTML" ? p = g : d == "children" || d in S || d == "value" && "defaultValue" in S || d == "checked" && "defaultChecked" in S || A(n, d, null, g, o);
		for (d in S) g = S[d], d == "children" ? h = g : d == "dangerouslySetInnerHTML" ? f = g : d == "value" ? v = g : d == "checked" ? b = g : l && typeof g != "function" || x[d] === g || A(n, d, g, x[d], o);
		if (f) l || p && (f.__html == p.__html || f.__html == n.innerHTML) || (n.innerHTML = f.__html), r.__k = [];
		else if (p && (n.innerHTML = ""), te(r.type == "template" ? n.content : n, _(h) ? h : [h], r, i, a, C == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, s, c, s ? s[0] : i.__k && w(i, 0), l, u), s != null) for (d = s.length; d--;) y(s[d]);
		l || (d = "value", C == "progress" && v == null ? n.removeAttribute("value") : v != null && (v !== n[d] || C == "progress" && !v || C == "option" && v != x[d]) && A(n, d, v, x[d], o), d = "checked", b != null && b != n[d] && A(n, d, b, x[d], o));
	}
	return n;
}
function de(e, n, r) {
	try {
		if (typeof e == "function") {
			var i = typeof e.__u == "function";
			i && e.__u(), i && n == null || (e.__u = e(n));
		} else e.current = n;
	} catch (e) {
		t.__e(e, r);
	}
}
function fe(e, n, r) {
	var i, a;
	if (t.unmount && t.unmount(e), (i = e.ref) && (i.current && i.current != e.__e || de(i, null, n)), (i = e.__c) != null) {
		if (i.componentWillUnmount) try {
			i.componentWillUnmount();
		} catch (e) {
			t.__e(e, n);
		}
		i.base = i.__P = null;
	}
	if (i = e.__k) for (a = 0; a < i.length; a++) i[a] && fe(i[a], n, r || typeof e.type != "function");
	r || y(e.__e), e.__c = e.__ = e.__e = void 0;
}
function pe(e, t, n) {
	return this.constructor(e, n);
}
function me(n, r, i) {
	var a, o, s, c;
	r == document && (r = document.documentElement), t.__ && t.__(n, r), o = (a = typeof i == "function") ? null : i && i.__k || r.__k, s = [], c = [], oe(r, n = (!a && i || r).__k = b(S, null, [n]), o || m, m, r.namespaceURI, !a && i ? [i] : o ? null : r.firstChild ? e.call(r.childNodes) : null, s, !a && i ? i : o ? o.__e : r.firstChild, a, c), ce(s, n, c);
}
function he(e, t) {
	me(e, t, he);
}
function ge(t, n, r) {
	var i, a, o, s, c = v({}, t.props);
	for (o in t.type && t.type.defaultProps && (s = t.type.defaultProps), n) o == "key" ? i = n[o] : o == "ref" ? a = n[o] : c[o] = n[o] === void 0 && s != null ? s[o] : n[o];
	return arguments.length > 2 && (c.children = arguments.length > 3 ? e.call(arguments, 2) : r), x(t.type, c, i || t.key, a || t.ref, null);
}
e = h.slice, t = { __e: function(e, t, n, r) {
	for (var i, a, o; t = t.__;) if ((i = t.__c) && !i.__) try {
		if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
	} catch (t) {
		e = t;
	}
	throw e;
} }, n = 0, C.prototype.setState = function(e, t) {
	var n = this.__s != null && this.__s != this.state ? this.__s : this.__s = v({}, this.state);
	typeof e == "function" && (e = e(v({}, n), this.props)), e && v(n, e), e != null && this.__v && (t && this._sb.push(t), E(this));
}, C.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), E(this));
}, C.prototype.render = S, r = [], a = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = function(e, t) {
	return e.__v.__b - t.__v.__b;
}, D.__r = 0, s = Math.random().toString(8), c = "__d" + s, l = "__a" + s, u = /(PointerCapture)$|Capture$/i, d = 0, f = ae(!1), p = ae(!0);
//#endregion
//#region node_modules/preact-custom-element/dist/preact-custom-element.esm.js
function _e() {
	return _e = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, _e.apply(this, arguments);
}
function ve(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
var ye = ["context", "children"], be = ["useFragment"];
function xe(e, t, n, r) {
	function i() {
		var t, n = Reflect.construct(HTMLElement, [], i);
		return n._vdomComponent = e, r && r.shadow ? (n._root = n.attachShadow({
			mode: r.mode || "open",
			serializable: (t = r.serializable) != null && t
		}), r.adoptedStyleSheets && (n._root.adoptedStyleSheets = r.adoptedStyleSheets)) : n._root = n, n;
	}
	return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = function() {
		Ce.call(this, r);
	}, i.prototype.attributeChangedCallback = we, i.prototype.disconnectedCallback = Te, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), i.observedAttributes = n, e.formAssociated && (i.formAssociated = !0), n.forEach(function(e) {
		Object.defineProperty(i.prototype, e, {
			get: function() {
				return this._vdom ? this._vdom.props[e] : this._props[e];
			},
			set: function(t) {
				this._vdom ? this.attributeChangedCallback(e, null, t) : (this._props ||= {}, this._props[e] = t);
				var n = typeof t;
				t != null && n !== "string" && n !== "boolean" && n !== "number" || this.setAttribute(e, t);
			}
		});
	}), customElements.define(t || e.tagName || e.displayName || e.name, i), i;
}
function Se(e) {
	this.getChildContext = function() {
		return e.context;
	};
	var t = e.children;
	return ge(t, ve(e, ye));
}
function Ce(e) {
	var t = new CustomEvent("_preact", {
		detail: {},
		bubbles: !0,
		cancelable: !0
	});
	this.dispatchEvent(t), this._vdom = b(Se, _e({}, this._props, { context: t.detail.context }), De(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? he : me)(this._vdom, this._root);
}
function j(e) {
	return e.replace(/-(\w)/g, function(e, t) {
		return t ? t.toUpperCase() : "";
	});
}
function we(e, t, n) {
	if (this._vdom) {
		var r = {};
		r[e] = n ??= void 0, r[j(e)] = n, this._vdom = ge(this._vdom, r), me(this._vdom, this._root);
	}
}
function Te() {
	me(this._vdom = null, this._root);
}
function Ee(e, t) {
	var n = this, r = e.useFragment, i = ve(e, be);
	return b(r ? S : "slot", _e({}, i, { ref: function(e) {
		e ? (n.ref = e, n._listener || (n._listener = function(e) {
			e.stopPropagation(), e.detail.context = t;
		}, e.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
	} }));
}
function De(e, t, n) {
	if (e.nodeType === 3) return e.data;
	if (e.nodeType !== 1) return null;
	var r = [], i = {}, a = 0, o = e.attributes, s = e.childNodes;
	for (a = o.length; a--;) o[a].name !== "slot" && (i[o[a].name] = o[a].value, i[j(o[a].name)] = o[a].value);
	for (a = s.length; a--;) {
		var c = De(s[a], null, n), l = s[a].slot;
		l ? i[l] = b(Ee, { name: l }, c) : r[a] = c;
	}
	var u = !(!n || !n.shadow), d = t ? b(Ee, { useFragment: !u }, r) : r;
	return !u && t && (e.innerHTML = ""), b(t || e.nodeName.toLowerCase(), i, d);
}
//#endregion
//#region node_modules/preact/hooks/dist/hooks.module.js
var Oe, M, ke, Ae, je = 0, Me = [], N = t, Ne = N.__b, Pe = N.__r, Fe = N.diffed, Ie = N.__c, Le = N.unmount, Re = N.__;
function ze(e, t) {
	N.__h && N.__h(M, e, je || t), je = 0;
	var n = M.__H ||= {
		__: [],
		__h: []
	};
	return e >= n.__.length && n.__.push({}), n.__[e];
}
function P(e) {
	return je = 1, Be(Xe, e);
}
function Be(e, t, n) {
	var r = ze(Oe++, 2);
	if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Xe(void 0, t), function(e) {
		var t = r.__N ? r.__N[0] : r.__[0], n = r.t(t, e);
		t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}));
	}], r.__c = M, !M.__f)) {
		var i = function(e, t, n) {
			if (!r.__c.__H) return !0;
			var i = r.__c.__H.__.filter(function(e) {
				return e.__c;
			});
			if (i.every(function(e) {
				return !e.__N;
			})) return !a || a.call(this, e, t, n);
			var o = r.__c.props !== e;
			return i.some(function(e) {
				if (e.__N) {
					var t = e.__[0];
					e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (o = !0);
				}
			}), a && a.call(this, e, t, n) || o;
		};
		M.__f = !0;
		var a = M.shouldComponentUpdate, o = M.componentWillUpdate;
		M.componentWillUpdate = function(e, t, n) {
			if (this.__e) {
				var r = a;
				a = void 0, i(e, t, n), a = r;
			}
			o && o.call(this, e, t, n);
		}, M.shouldComponentUpdate = i;
	}
	return r.__N || r.__;
}
function Ve(e, t) {
	var n = ze(Oe++, 3);
	!N.__s && Ye(n.__H, t) && (n.__ = e, n.u = t, M.__H.__h.push(n));
}
function He(e) {
	return je = 5, Ue(function() {
		return { current: e };
	}, []);
}
function Ue(e, t) {
	var n = ze(Oe++, 7);
	return Ye(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function We() {
	for (var e; e = Me.shift();) {
		var t = e.__H;
		if (e.__P && t) try {
			t.__h.some(qe), t.__h.some(Je), t.__h = [];
		} catch (n) {
			t.__h = [], N.__e(n, e.__v);
		}
	}
}
N.__b = function(e) {
	M = null, Ne && Ne(e);
}, N.__ = function(e, t) {
	e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Re && Re(e, t);
}, N.__r = function(e) {
	Pe && Pe(e), Oe = 0;
	var t = (M = e.__c).__H;
	t && (ke === M ? (t.__h = [], M.__h = [], t.__.some(function(e) {
		e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
	})) : (t.__h.some(qe), t.__h.some(Je), t.__h = [], Oe = 0)), ke = M;
}, N.diffed = function(e) {
	Fe && Fe(e);
	var t = e.__c;
	t && t.__H && (t.__H.__h.length && (Me.push(t) !== 1 && Ae === N.requestAnimationFrame || ((Ae = N.requestAnimationFrame) || Ke)(We)), t.__H.__.some(function(e) {
		e.u && (e.__H = e.u), e.u = void 0;
	})), ke = M = null;
}, N.__c = function(e, t) {
	t.some(function(e) {
		try {
			e.__h.some(qe), e.__h = e.__h.filter(function(e) {
				return !e.__ || Je(e);
			});
		} catch (n) {
			t.some(function(e) {
				e.__h &&= [];
			}), t = [], N.__e(n, e.__v);
		}
	}), Ie && Ie(e, t);
}, N.unmount = function(e) {
	Le && Le(e);
	var t, n = e.__c;
	n && n.__H && (n.__H.__.some(function(e) {
		try {
			qe(e);
		} catch (e) {
			t = e;
		}
	}), n.__H = void 0, t && N.__e(t, n.__v));
};
var Ge = typeof requestAnimationFrame == "function";
function Ke(e) {
	var t, n = function() {
		clearTimeout(r), Ge && cancelAnimationFrame(t), setTimeout(e);
	}, r = setTimeout(n, 35);
	Ge && (t = requestAnimationFrame(n));
}
function qe(e) {
	var t = M, n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), M = t;
}
function Je(e) {
	var t = M;
	e.__c = e.__(), M = t;
}
function Ye(e, t) {
	return !e || e.length !== t.length || t.some(function(t, n) {
		return t !== e[n];
	});
}
function Xe(e, t) {
	return typeof t == "function" ? t(e) : t;
}
//#endregion
//#region node_modules/preact/compat/dist/compat.module.js
function Ze(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function Qe(e, t) {
	for (var n in e) if (n !== "__source" && !(n in t)) return !0;
	for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
	return !1;
}
function $e(e, t) {
	this.props = e, this.context = t;
}
($e.prototype = new C()).isPureReactComponent = !0, $e.prototype.shouldComponentUpdate = function(e, t) {
	return Qe(this.props, e) || Qe(this.state, t);
};
var et = t.__b;
t.__b = function(e) {
	e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), et && et(e);
}, typeof Symbol < "u" && Symbol.for;
var tt = t.__e;
t.__e = function(e, t, n, r) {
	if (e.then) {
		for (var i, a = t; a = a.__;) if ((i = a.__c) && i.__c) return t.__e ?? (t.__e = n.__e, t.__k = n.__k), i.__c(e, t);
	}
	tt(e, t, n, r);
};
var nt = t.unmount;
function rt(e, t, n) {
	return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(e) {
		typeof e.__c == "function" && e.__c();
	}), e.__c.__H = null), (e = Ze({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(e) {
		return rt(e, t, n);
	})), e;
}
function it(e, t, n) {
	return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(e) {
		return it(e, t, n);
	}), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function at() {
	this.__u = 0, this.o = null, this.__b = null;
}
function ot(e) {
	var t = e.__ && e.__.__c;
	return t && t.__a && t.__a(e);
}
function st() {
	this.i = null, this.l = null;
}
t.unmount = function(e) {
	var t = e.__c;
	t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), nt && nt(e);
}, (at.prototype = new C()).__c = function(e, t) {
	var n = t.__c, r = this;
	r.o ??= [], r.o.push(n);
	var i = ot(r.__v), a = !1, o = function() {
		a || r.__z || (a = !0, n.__R = null, i ? i(c) : c());
	};
	n.__R = o;
	var s = n.__P;
	n.__P = null;
	var c = function() {
		if (!--r.__u) {
			if (r.state.__a) {
				var e = r.state.__a;
				r.__v.__k[0] = it(e, e.__c.__P, e.__c.__O);
			}
			var t;
			for (r.setState({ __a: r.__b = null }); t = r.o.pop();) t.__P = s, t.forceUpdate();
		}
	};
	r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(o, o);
}, at.prototype.componentWillUnmount = function() {
	this.o = [];
}, at.prototype.render = function(e, t) {
	if (this.__b) {
		if (this.__v.__k) {
			var n = document.createElement("div"), r = this.__v.__k[0].__c;
			this.__v.__k[0] = rt(this.__b, n, r.__O = r.__P);
		}
		this.__b = null;
	}
	var i = t.__a && b(S, null, e.fallback);
	return i && (i.__u &= -33), [b(S, null, t.__a ? null : e.children), i];
};
var ct = function(e, t, n) {
	if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n;) {
		for (; n.length > 3;) n.pop()();
		if (n[1] < n[0]) break;
		e.i = n = n[2];
	}
};
function lt(e) {
	return this.getChildContext = function() {
		return e.context;
	}, e.children;
}
function ut(e) {
	var t = this, n = e.h;
	if (t.componentWillUnmount = function() {
		me(null, t.v), t.v = null, t.h = null;
	}, t.h && t.h !== n && t.componentWillUnmount(), !t.v) {
		for (var r = t.__v; r !== null && !r.__m && r.__ !== null;) r = r.__;
		t.h = n, t.v = {
			nodeType: 1,
			parentNode: n,
			childNodes: [],
			__k: { __m: r.__m },
			contains: function() {
				return !0;
			},
			namespaceURI: n.namespaceURI,
			insertBefore: function(e, n) {
				this.childNodes.push(e), t.h.insertBefore(e, n);
			},
			removeChild: function(e) {
				this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.h.removeChild(e);
			}
		};
	}
	me(b(lt, { context: t.context }, e.__v), t.v);
}
function dt(e, t) {
	var n = b(ut, {
		__v: e,
		h: t
	});
	return n.containerInfo = t, n;
}
(st.prototype = new C()).__a = function(e) {
	var t = this, n = ot(t.__v), r = t.l.get(e);
	return r[0]++, function(i) {
		var a = function() {
			t.props.revealOrder ? (r.push(i), ct(t, e, r)) : i();
		};
		n ? n(a) : a();
	};
}, st.prototype.render = function(e) {
	this.i = null, this.l = /* @__PURE__ */ new Map();
	var t = O(e.children);
	e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
	for (var n = t.length; n--;) this.l.set(t[n], this.i = [
		1,
		0,
		this.i
	]);
	return e.children;
}, st.prototype.componentDidUpdate = st.prototype.componentDidMount = function() {
	var e = this;
	this.l.forEach(function(t, n) {
		ct(e, n, t);
	});
};
var ft = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, pt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, mt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ht = /[A-Z0-9]/g, gt = typeof document < "u", _t = function(e) {
	return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
C.prototype.isReactComponent = !0, [
	"componentWillMount",
	"componentWillReceiveProps",
	"componentWillUpdate"
].forEach(function(e) {
	Object.defineProperty(C.prototype, e, {
		configurable: !0,
		get: function() {
			return this["UNSAFE_" + e];
		},
		set: function(t) {
			Object.defineProperty(this, e, {
				configurable: !0,
				writable: !0,
				value: t
			});
		}
	});
});
var vt = t.event;
t.event = function(e) {
	return vt && (e = vt(e)), e.persist = function() {}, e.isPropagationStopped = function() {
		return this.cancelBubble;
	}, e.isDefaultPrevented = function() {
		return this.defaultPrevented;
	}, e.nativeEvent = e;
};
var yt = {
	configurable: !0,
	get: function() {
		return this.class;
	}
}, bt = t.vnode;
t.vnode = function(e) {
	typeof e.type == "string" && function(e) {
		var t = e.props, n = e.type, r = {}, i = n.indexOf("-") == -1;
		for (var a in t) {
			var o = t[a];
			if (!(a === "value" && "defaultValue" in t && o == null || gt && a === "children" && n === "noscript" || a === "class" || a === "className")) {
				var s = a.toLowerCase();
				a === "defaultValue" && "value" in t && t.value == null ? a = "value" : a === "download" && !0 === o ? o = "" : s === "translate" && o === "no" ? o = !1 : s[0] === "o" && s[1] === "n" ? s === "ondoubleclick" ? a = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || _t(t.type) ? s === "onfocus" ? a = "onfocusin" : s === "onblur" ? a = "onfocusout" : mt.test(a) && (a = s) : s = a = "oninput" : i && pt.test(a) ? a = a.replace(ht, "-$&").toLowerCase() : o === null && (o = void 0), s === "oninput" && r[a = s] && (a = "oninputCapture"), r[a] = o;
			}
		}
		n == "select" && (r.multiple && Array.isArray(r.value) && (r.value = O(t.children).forEach(function(e) {
			e.props.selected = r.value.indexOf(e.props.value) != -1;
		})), r.defaultValue != null && (r.value = O(t.children).forEach(function(e) {
			e.props.selected = r.multiple ? r.defaultValue.indexOf(e.props.value) != -1 : r.defaultValue == e.props.value;
		}))), t.class && !t.className ? (r.class = t.class, Object.defineProperty(r, "className", yt)) : t.className && (r.class = r.className = t.className), e.props = r;
	}(e), e.$$typeof = ft, bt && bt(e);
};
var xt = t.__r;
t.__r = function(e) {
	xt && xt(e), e.__c;
};
var St = t.diffed;
t.diffed = function(e) {
	St && St(e);
	var t = e.props, n = e.__e;
	n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
};
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
function Ct(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function wt(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
//#endregion
//#region node_modules/@supabase/functions-js/dist/module/helper.js
var Tt = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), Et = class extends Error {
	constructor(e, t = "FunctionsError", n) {
		super(e), this.name = t, this.context = n;
	}
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			context: this.context
		};
	}
}, Dt = class extends Et {
	constructor(e) {
		super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
	}
}, Ot = class extends Et {
	constructor(e) {
		super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
	}
}, kt = class extends Et {
	constructor(e) {
		super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
	}
}, At;
(function(e) {
	e.Any = "any", e.ApNortheast1 = "ap-northeast-1", e.ApNortheast2 = "ap-northeast-2", e.ApSouth1 = "ap-south-1", e.ApSoutheast1 = "ap-southeast-1", e.ApSoutheast2 = "ap-southeast-2", e.CaCentral1 = "ca-central-1", e.EuCentral1 = "eu-central-1", e.EuWest1 = "eu-west-1", e.EuWest2 = "eu-west-2", e.EuWest3 = "eu-west-3", e.SaEast1 = "sa-east-1", e.UsEast1 = "us-east-1", e.UsWest1 = "us-west-1", e.UsWest2 = "us-west-2";
})(At ||= {});
//#endregion
//#region node_modules/@supabase/functions-js/dist/module/FunctionsClient.js
var jt = class {
	constructor(e, { headers: t = {}, customFetch: n, region: r = At.Any } = {}) {
		this.url = e, this.headers = t, this.region = r, this.fetch = Tt(n);
	}
	setAuth(e) {
		this.headers.Authorization = `Bearer ${e}`;
	}
	invoke(e) {
		return wt(this, arguments, void 0, function* (e, t = {}) {
			let n, r;
			try {
				let { headers: i, method: a, body: o, signal: s, timeout: c } = t, l = {}, { region: u } = t;
				u ||= this.region;
				let d = new URL(`${this.url}/${e}`);
				u && u !== "any" && (l["x-region"] = u, d.searchParams.set("forceFunctionRegion", u));
				let f;
				o && (i && !Object.prototype.hasOwnProperty.call(i, "Content-Type") || !i) ? typeof Blob < "u" && o instanceof Blob || o instanceof ArrayBuffer ? (l["Content-Type"] = "application/octet-stream", f = o) : typeof o == "string" ? (l["Content-Type"] = "text/plain", f = o) : typeof FormData < "u" && o instanceof FormData ? f = o : (l["Content-Type"] = "application/json", f = JSON.stringify(o)) : f = o && typeof o != "string" && !(typeof Blob < "u" && o instanceof Blob) && !(o instanceof ArrayBuffer) && !(typeof FormData < "u" && o instanceof FormData) ? JSON.stringify(o) : o;
				let p = s;
				c && (r = new AbortController(), n = setTimeout(() => r.abort(), c), s ? (p = r.signal, s.addEventListener("abort", () => r.abort())) : p = r.signal);
				let m = yield this.fetch(d.toString(), {
					method: a || "POST",
					headers: Object.assign(Object.assign(Object.assign({}, l), this.headers), i),
					body: f,
					signal: p
				}).catch((e) => {
					throw new Dt(e);
				}), h = m.headers.get("x-relay-error");
				if (h && h === "true") throw new Ot(m);
				if (!m.ok) throw new kt(m);
				let g = (m.headers.get("Content-Type") ?? "text/plain").split(";")[0].trim(), _;
				return _ = g === "application/json" ? yield m.json() : g === "application/octet-stream" || g === "application/pdf" ? yield m.blob() : g === "text/event-stream" ? m : g === "multipart/form-data" ? yield m.formData() : yield m.text(), {
					data: _,
					error: null,
					response: m
				};
			} catch (e) {
				return {
					data: null,
					error: e,
					response: e instanceof kt || e instanceof Ot ? e.context : void 0
				};
			} finally {
				n && clearTimeout(n);
			}
		});
	}
}, Mt = 3, Nt = (e) => Math.min(1e3 * 2 ** e, 3e4), Pt = [520, 503], Ft = [
	"GET",
	"HEAD",
	"OPTIONS"
], It = class extends Error {
	constructor(e) {
		super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
	}
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			details: this.details,
			hint: this.hint,
			code: this.code
		};
	}
};
function Lt(e, t) {
	return new Promise((n) => {
		if (t?.aborted) {
			n();
			return;
		}
		let r = setTimeout(() => {
			t?.removeEventListener("abort", i), n();
		}, e);
		function i() {
			clearTimeout(r), n();
		}
		t?.addEventListener("abort", i);
	});
}
function Rt(e, t, n, r) {
	return !(!r || n >= Mt || !Ft.includes(e) || !Pt.includes(t));
}
var zt = class {
	constructor(e) {
		this.shouldThrowOnError = !1, this.retryEnabled = !0, this.method = e.method, this.url = e.url, this.headers = new Headers(e.headers), this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = e.shouldThrowOnError ?? !1, this.signal = e.signal, this.isMaybeSingle = e.isMaybeSingle ?? !1, this.shouldStripNulls = e.shouldStripNulls ?? !1, this.urlLengthLimit = e.urlLengthLimit ?? 8e3, this.retryEnabled = e.retry ?? !0, e.fetch ? this.fetch = e.fetch : this.fetch = fetch;
	}
	throwOnError() {
		return this.shouldThrowOnError = !0, this;
	}
	stripNulls() {
		if (this.headers.get("Accept") === "text/csv") throw Error("stripNulls() cannot be used with csv()");
		return this.shouldStripNulls = !0, this;
	}
	setHeader(e, t) {
		return this.headers = new Headers(this.headers), this.headers.set(e, t), this;
	}
	retry(e) {
		return this.retryEnabled = e, this;
	}
	then(e, t) {
		var n = this;
		if (this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json"), this.shouldStripNulls) {
			let e = this.headers.get("Accept");
			e === "application/vnd.pgrst.object+json" ? this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped") : (!e || e === "application/json") && this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped");
		}
		let r = this.fetch, i = (async () => {
			let e = 0;
			for (;;) {
				let t = new Headers(n.headers);
				e > 0 && t.set("X-Retry-Count", String(e));
				let i;
				try {
					i = await r(n.url.toString(), {
						method: n.method,
						headers: t,
						body: JSON.stringify(n.body, (e, t) => typeof t == "bigint" ? t.toString() : t),
						signal: n.signal
					});
				} catch (t) {
					if (t?.name === "AbortError" || t?.code === "ABORT_ERR" || !Ft.includes(n.method)) throw t;
					if (n.retryEnabled && e < Mt) {
						let t = Nt(e);
						e++, await Lt(t, n.signal);
						continue;
					}
					throw t;
				}
				if (Rt(n.method, i.status, e, n.retryEnabled)) {
					let t = i.headers?.get("Retry-After") ?? null, r = t === null ? Nt(e) : Math.max(0, parseInt(t, 10) || 0) * 1e3;
					await i.text(), e++, await Lt(r, n.signal);
					continue;
				}
				return await n.processResponse(i);
			}
		})();
		return this.shouldThrowOnError || (i = i.catch((e) => {
			let t = "", n = "", r = "", i = e?.cause;
			if (i) {
				let n = i?.message ?? "", r = i?.code ?? "";
				t = `${e?.name ?? "FetchError"}: ${e?.message}`, t += `\n\nCaused by: ${i?.name ?? "Error"}: ${n}`, r && (t += ` (${r})`), i?.stack && (t += `\n${i.stack}`);
			} else t = e?.stack ?? "";
			let a = this.url.toString().length;
			return e?.name === "AbortError" || e?.code === "ABORT_ERR" ? (r = "", n = "Request was aborted (timeout or manual cancellation)", a > this.urlLengthLimit && (n += `. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (i?.name === "HeadersOverflowError" || i?.code === "UND_ERR_HEADERS_OVERFLOW") && (r = "", n = "HTTP headers exceeded server limits (typically 16KB)", a > this.urlLengthLimit && (n += `. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
				success: !1,
				error: {
					message: `${e?.name ?? "FetchError"}: ${e?.message}`,
					details: t,
					hint: n,
					code: r
				},
				data: null,
				count: null,
				status: 0,
				statusText: ""
			};
		})), i.then(e, t);
	}
	async processResponse(e) {
		var t = this;
		let n = null, r = null, i = null, a = e.status, o = e.statusText;
		if (e.ok) {
			if (t.method !== "HEAD") {
				let n = await e.text();
				n === "" || (r = t.headers.get("Accept") === "text/csv" || t.headers.get("Accept") && t.headers.get("Accept")?.includes("application/vnd.pgrst.plan+text") ? n : JSON.parse(n));
			}
			let s = t.headers.get("Prefer")?.match(/count=(exact|planned|estimated)/), c = e.headers.get("content-range")?.split("/");
			s && c && c.length > 1 && (i = parseInt(c[1])), t.isMaybeSingle && Array.isArray(r) && (r.length > 1 ? (n = {
				code: "PGRST116",
				details: `Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,
				hint: null,
				message: "JSON object requested, multiple (or no) rows returned"
			}, r = null, i = null, a = 406, o = "Not Acceptable") : r = r.length === 1 ? r[0] : null);
		} else {
			let i = await e.text();
			try {
				n = JSON.parse(i), Array.isArray(n) && e.status === 404 && (r = [], n = null, a = 200, o = "OK");
			} catch {
				e.status === 404 && i === "" ? (a = 204, o = "No Content") : n = { message: i };
			}
			if (n && t.shouldThrowOnError) throw new It(n);
		}
		return {
			success: n === null,
			error: n,
			data: r,
			count: i,
			status: a,
			statusText: o
		};
	}
	returns() {
		/* istanbul ignore next */
		return this;
	}
	overrideTypes() {
		return this;
	}
}, Bt = class extends zt {
	select(e) {
		let t = !1, n = (e ?? "*").split("").map((e) => /\s/.test(e) && !t ? "" : (e === "\"" && (t = !t), e)).join("");
		return this.url.searchParams.set("select", n), this.headers.append("Prefer", "return=representation"), this;
	}
	order(e, { ascending: t = !0, nullsFirst: n, foreignTable: r, referencedTable: i = r } = {}) {
		let a = i ? `${i}.order` : "order", o = this.url.searchParams.get(a);
		return this.url.searchParams.set(a, `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${n === void 0 ? "" : n ? ".nullsfirst" : ".nullslast"}`), this;
	}
	limit(e, { foreignTable: t, referencedTable: n = t } = {}) {
		let r = n === void 0 ? "limit" : `${n}.limit`;
		return this.url.searchParams.set(r, `${e}`), this;
	}
	range(e, t, { foreignTable: n, referencedTable: r = n } = {}) {
		let i = r === void 0 ? "offset" : `${r}.offset`, a = r === void 0 ? "limit" : `${r}.limit`;
		return this.url.searchParams.set(i, `${e}`), this.url.searchParams.set(a, `${t - e + 1}`), this;
	}
	abortSignal(e) {
		return this.signal = e, this;
	}
	single() {
		return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
	}
	maybeSingle() {
		return this.isMaybeSingle = !0, this;
	}
	csv() {
		return this.headers.set("Accept", "text/csv"), this;
	}
	geojson() {
		return this.headers.set("Accept", "application/geo+json"), this;
	}
	explain({ analyze: e = !1, verbose: t = !1, settings: n = !1, buffers: r = !1, wal: i = !1, format: a = "text" } = {}) {
		let o = [
			e ? "analyze" : null,
			t ? "verbose" : null,
			n ? "settings" : null,
			r ? "buffers" : null,
			i ? "wal" : null
		].filter(Boolean).join("|"), s = this.headers.get("Accept") ?? "application/json";
		return this.headers.set("Accept", `application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`), this;
	}
	rollback() {
		return this.headers.append("Prefer", "tx=rollback"), this;
	}
	returns() {
		return this;
	}
	maxAffected(e) {
		return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${e}`), this;
	}
}, Vt = /* @__PURE__ */ RegExp("[,()]"), Ht = class extends Bt {
	eq(e, t) {
		return this.url.searchParams.append(e, `eq.${t}`), this;
	}
	neq(e, t) {
		return this.url.searchParams.append(e, `neq.${t}`), this;
	}
	gt(e, t) {
		return this.url.searchParams.append(e, `gt.${t}`), this;
	}
	gte(e, t) {
		return this.url.searchParams.append(e, `gte.${t}`), this;
	}
	lt(e, t) {
		return this.url.searchParams.append(e, `lt.${t}`), this;
	}
	lte(e, t) {
		return this.url.searchParams.append(e, `lte.${t}`), this;
	}
	like(e, t) {
		return this.url.searchParams.append(e, `like.${t}`), this;
	}
	likeAllOf(e, t) {
		return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this;
	}
	likeAnyOf(e, t) {
		return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this;
	}
	ilike(e, t) {
		return this.url.searchParams.append(e, `ilike.${t}`), this;
	}
	ilikeAllOf(e, t) {
		return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this;
	}
	ilikeAnyOf(e, t) {
		return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this;
	}
	regexMatch(e, t) {
		return this.url.searchParams.append(e, `match.${t}`), this;
	}
	regexIMatch(e, t) {
		return this.url.searchParams.append(e, `imatch.${t}`), this;
	}
	is(e, t) {
		return this.url.searchParams.append(e, `is.${t}`), this;
	}
	isDistinct(e, t) {
		return this.url.searchParams.append(e, `isdistinct.${t}`), this;
	}
	in(e, t) {
		let n = Array.from(new Set(t)).map((e) => typeof e == "string" && Vt.test(e) ? `"${e}"` : `${e}`).join(",");
		return this.url.searchParams.append(e, `in.(${n})`), this;
	}
	notIn(e, t) {
		let n = Array.from(new Set(t)).map((e) => typeof e == "string" && Vt.test(e) ? `"${e}"` : `${e}`).join(",");
		return this.url.searchParams.append(e, `not.in.(${n})`), this;
	}
	contains(e, t) {
		return typeof t == "string" ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`), this;
	}
	containedBy(e, t) {
		return typeof t == "string" ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`), this;
	}
	rangeGt(e, t) {
		return this.url.searchParams.append(e, `sr.${t}`), this;
	}
	rangeGte(e, t) {
		return this.url.searchParams.append(e, `nxl.${t}`), this;
	}
	rangeLt(e, t) {
		return this.url.searchParams.append(e, `sl.${t}`), this;
	}
	rangeLte(e, t) {
		return this.url.searchParams.append(e, `nxr.${t}`), this;
	}
	rangeAdjacent(e, t) {
		return this.url.searchParams.append(e, `adj.${t}`), this;
	}
	overlaps(e, t) {
		return typeof t == "string" ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`), this;
	}
	textSearch(e, t, { config: n, type: r } = {}) {
		let i = "";
		r === "plain" ? i = "pl" : r === "phrase" ? i = "ph" : r === "websearch" && (i = "w");
		let a = n === void 0 ? "" : `(${n})`;
		return this.url.searchParams.append(e, `${i}fts${a}.${t}`), this;
	}
	match(e) {
		return Object.entries(e).filter(([e, t]) => t !== void 0).forEach(([e, t]) => {
			this.url.searchParams.append(e, `eq.${t}`);
		}), this;
	}
	not(e, t, n) {
		return this.url.searchParams.append(e, `not.${t}.${n}`), this;
	}
	or(e, { foreignTable: t, referencedTable: n = t } = {}) {
		let r = n ? `${n}.or` : "or";
		return this.url.searchParams.append(r, `(${e})`), this;
	}
	filter(e, t, n) {
		return this.url.searchParams.append(e, `${t}.${n}`), this;
	}
}, Ut = class {
	constructor(e, { headers: t = {}, schema: n, fetch: r, urlLengthLimit: i = 8e3, retry: a }) {
		this.url = e, this.headers = new Headers(t), this.schema = n, this.fetch = r, this.urlLengthLimit = i, this.retry = a;
	}
	cloneRequestState() {
		return {
			url: new URL(this.url.toString()),
			headers: new Headers(this.headers)
		};
	}
	select(e, t) {
		let { head: n = !1, count: r } = t ?? {}, i = n ? "HEAD" : "GET", a = !1, o = (e ?? "*").split("").map((e) => /\s/.test(e) && !a ? "" : (e === "\"" && (a = !a), e)).join(""), { url: s, headers: c } = this.cloneRequestState();
		return s.searchParams.set("select", o), r && c.append("Prefer", `count=${r}`), new Ht({
			method: i,
			url: s,
			headers: c,
			schema: this.schema,
			fetch: this.fetch,
			urlLengthLimit: this.urlLengthLimit,
			retry: this.retry
		});
	}
	insert(e, { count: t, defaultToNull: n = !0 } = {}) {
		let { url: r, headers: i } = this.cloneRequestState();
		if (t && i.append("Prefer", `count=${t}`), n || i.append("Prefer", "missing=default"), Array.isArray(e)) {
			let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
			if (t.length > 0) {
				let e = [...new Set(t)].map((e) => `"${e}"`);
				r.searchParams.set("columns", e.join(","));
			}
		}
		return new Ht({
			method: "POST",
			url: r,
			headers: i,
			schema: this.schema,
			body: e,
			fetch: this.fetch ?? fetch,
			urlLengthLimit: this.urlLengthLimit,
			retry: this.retry
		});
	}
	upsert(e, { onConflict: t, ignoreDuplicates: n = !1, count: r, defaultToNull: i = !0 } = {}) {
		let { url: a, headers: o } = this.cloneRequestState();
		if (o.append("Prefer", `resolution=${n ? "ignore" : "merge"}-duplicates`), t !== void 0 && a.searchParams.set("on_conflict", t), r && o.append("Prefer", `count=${r}`), i || o.append("Prefer", "missing=default"), Array.isArray(e)) {
			let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
			if (t.length > 0) {
				let e = [...new Set(t)].map((e) => `"${e}"`);
				a.searchParams.set("columns", e.join(","));
			}
		}
		return new Ht({
			method: "POST",
			url: a,
			headers: o,
			schema: this.schema,
			body: e,
			fetch: this.fetch ?? fetch,
			urlLengthLimit: this.urlLengthLimit,
			retry: this.retry
		});
	}
	update(e, { count: t } = {}) {
		let { url: n, headers: r } = this.cloneRequestState();
		return t && r.append("Prefer", `count=${t}`), new Ht({
			method: "PATCH",
			url: n,
			headers: r,
			schema: this.schema,
			body: e,
			fetch: this.fetch ?? fetch,
			urlLengthLimit: this.urlLengthLimit,
			retry: this.retry
		});
	}
	delete({ count: e } = {}) {
		let { url: t, headers: n } = this.cloneRequestState();
		return e && n.append("Prefer", `count=${e}`), new Ht({
			method: "DELETE",
			url: t,
			headers: n,
			schema: this.schema,
			fetch: this.fetch ?? fetch,
			urlLengthLimit: this.urlLengthLimit,
			retry: this.retry
		});
	}
};
function Wt(e) {
	"@babel/helpers - typeof";
	return Wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Wt(e);
}
function Gt(e, t) {
	if (Wt(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Wt(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Kt(e) {
	var t = Gt(e, "string");
	return Wt(t) == "symbol" ? t : t + "";
}
function qt(e, t, n) {
	return (t = Kt(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Jt(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Yt(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Jt(Object(n), !0).forEach(function(t) {
			qt(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Xt = class e {
	constructor(e, { headers: t = {}, schema: n, fetch: r, timeout: i, urlLengthLimit: a = 8e3, retry: o } = {}) {
		this.url = e, this.headers = new Headers(t), this.schemaName = n, this.urlLengthLimit = a;
		let s = r ?? globalThis.fetch;
		i !== void 0 && i > 0 ? this.fetch = (e, t) => {
			let n = new AbortController(), r = setTimeout(() => n.abort(), i), a = t?.signal;
			if (a) {
				if (a.aborted) return clearTimeout(r), s(e, t);
				let i = () => {
					clearTimeout(r), n.abort();
				};
				return a.addEventListener("abort", i, { once: !0 }), s(e, Yt(Yt({}, t), {}, { signal: n.signal })).finally(() => {
					clearTimeout(r), a.removeEventListener("abort", i);
				});
			}
			return s(e, Yt(Yt({}, t), {}, { signal: n.signal })).finally(() => clearTimeout(r));
		} : this.fetch = s, this.retry = o;
	}
	from(e) {
		if (!e || typeof e != "string" || e.trim() === "") throw Error("Invalid relation name: relation must be a non-empty string.");
		return new Ut(new URL(`${this.url}/${e}`), {
			headers: new Headers(this.headers),
			schema: this.schemaName,
			fetch: this.fetch,
			urlLengthLimit: this.urlLengthLimit,
			retry: this.retry
		});
	}
	schema(t) {
		return new e(this.url, {
			headers: this.headers,
			schema: t,
			fetch: this.fetch,
			urlLengthLimit: this.urlLengthLimit,
			retry: this.retry
		});
	}
	rpc(e, t = {}, { head: n = !1, get: r = !1, count: i } = {}) {
		let a, o = new URL(`${this.url}/rpc/${e}`), s, c = (e) => typeof e == "object" && !!e && (!Array.isArray(e) || e.some(c)), l = n && Object.values(t).some(c);
		l ? (a = "POST", s = t) : n || r ? (a = n ? "HEAD" : "GET", Object.entries(t).filter(([e, t]) => t !== void 0).map(([e, t]) => [e, Array.isArray(t) ? `{${t.join(",")}}` : `${t}`]).forEach(([e, t]) => {
			o.searchParams.append(e, t);
		})) : (a = "POST", s = t);
		let u = new Headers(this.headers);
		return l ? u.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal") : i && u.set("Prefer", `count=${i}`), new Ht({
			method: a,
			url: o,
			headers: u,
			schema: this.schemaName,
			body: s,
			fetch: this.fetch ?? fetch,
			urlLengthLimit: this.urlLengthLimit,
			retry: this.retry
		});
	}
}, Zt = class {
	constructor() {}
	static detectEnvironment() {
		if (typeof WebSocket < "u") return {
			type: "native",
			constructor: WebSocket
		};
		if (typeof globalThis < "u" && globalThis.WebSocket !== void 0) return {
			type: "native",
			constructor: globalThis.WebSocket
		};
		if (typeof global < "u" && global.WebSocket !== void 0) return {
			type: "native",
			constructor: global.WebSocket
		};
		if (typeof globalThis < "u" && globalThis.WebSocketPair !== void 0 && globalThis.WebSocket === void 0) return {
			type: "cloudflare",
			error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
			workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
		};
		if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && navigator.userAgent?.includes("Vercel-Edge")) return {
			type: "unsupported",
			error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
			workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
		};
		let e = globalThis.process;
		if (e) {
			let t = e.versions;
			if (t && t.node) {
				let e = t.node, n = parseInt(e.replace(/^v/, "").split(".")[0]);
				return n >= 22 ? globalThis.WebSocket === void 0 ? {
					type: "unsupported",
					error: `Node.js ${n} detected but native WebSocket not found.`,
					workaround: "Provide a WebSocket implementation via the transport option."
				} : {
					type: "native",
					constructor: globalThis.WebSocket
				} : {
					type: "unsupported",
					error: `Node.js ${n} detected without native WebSocket support.`,
					workaround: "For Node.js < 22, install \"ws\" package and provide it via the transport option:\nimport ws from \"ws\"\nnew RealtimeClient(url, { transport: ws })"
				};
			}
		}
		return {
			type: "unsupported",
			error: "Unknown JavaScript runtime without WebSocket support.",
			workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
		};
	}
	static getWebSocketConstructor() {
		let e = this.detectEnvironment();
		if (e.constructor) return e.constructor;
		let t = e.error || "WebSocket not supported in this environment.";
		throw e.workaround && (t += `\n\nSuggested solution: ${e.workaround}`), Error(t);
	}
	static isWebSocketSupported() {
		try {
			let e = this.detectEnvironment();
			return e.type === "native" || e.type === "ws";
		} catch {
			return !1;
		}
	}
}, Qt = "realtime-js/2.105.1", $t = "1.0.0", en = "2.0.0", tn = en, nn = 1e4, rn = {
	closed: "closed",
	errored: "errored",
	joined: "joined",
	joining: "joining",
	leaving: "leaving"
}, an = {
	close: "phx_close",
	error: "phx_error",
	join: "phx_join",
	reply: "phx_reply",
	leave: "phx_leave",
	access_token: "access_token"
}, on = {
	connecting: "connecting",
	open: "open",
	closing: "closing",
	closed: "closed"
}, sn = class {
	constructor(e) {
		this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = {
			userBroadcastPush: 3,
			userBroadcast: 4
		}, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = e ?? [];
	}
	encode(e, t) {
		if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == "string") return t(this._binaryEncodeUserBroadcastPush(e));
		let n = [
			e.join_ref,
			e.ref,
			e.topic,
			e.event,
			e.payload
		];
		return t(JSON.stringify(n));
	}
	_binaryEncodeUserBroadcastPush(e) {
		return this._isArrayBuffer(e.payload?.payload) ? this._encodeBinaryUserBroadcastPush(e) : this._encodeJsonUserBroadcastPush(e);
	}
	_encodeBinaryUserBroadcastPush(e) {
		let t = e.payload?.payload ?? /* @__PURE__ */ new ArrayBuffer(0);
		return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, t);
	}
	_encodeJsonUserBroadcastPush(e) {
		let t = e.payload?.payload ?? {}, n = new TextEncoder().encode(JSON.stringify(t)).buffer;
		return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, n);
	}
	_encodeUserBroadcastPush(e, t, n) {
		let r = e.topic, i = e.ref ?? "", a = e.join_ref ?? "", o = e.payload.event, s = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {}, c = Object.keys(s).length === 0 ? "" : JSON.stringify(s);
		if (a.length > 255) throw Error(`joinRef length ${a.length} exceeds maximum of 255`);
		if (i.length > 255) throw Error(`ref length ${i.length} exceeds maximum of 255`);
		if (r.length > 255) throw Error(`topic length ${r.length} exceeds maximum of 255`);
		if (o.length > 255) throw Error(`userEvent length ${o.length} exceeds maximum of 255`);
		if (c.length > 255) throw Error(`metadata length ${c.length} exceeds maximum of 255`);
		let l = this.USER_BROADCAST_PUSH_META_LENGTH + a.length + i.length + r.length + o.length + c.length, u = new ArrayBuffer(this.HEADER_LENGTH + l), d = new DataView(u), f = 0;
		d.setUint8(f++, this.KINDS.userBroadcastPush), d.setUint8(f++, a.length), d.setUint8(f++, i.length), d.setUint8(f++, r.length), d.setUint8(f++, o.length), d.setUint8(f++, c.length), d.setUint8(f++, t), Array.from(a, (e) => d.setUint8(f++, e.charCodeAt(0))), Array.from(i, (e) => d.setUint8(f++, e.charCodeAt(0))), Array.from(r, (e) => d.setUint8(f++, e.charCodeAt(0))), Array.from(o, (e) => d.setUint8(f++, e.charCodeAt(0))), Array.from(c, (e) => d.setUint8(f++, e.charCodeAt(0)));
		var p = new Uint8Array(u.byteLength + n.byteLength);
		return p.set(new Uint8Array(u), 0), p.set(new Uint8Array(n), u.byteLength), p.buffer;
	}
	decode(e, t) {
		if (this._isArrayBuffer(e)) return t(this._binaryDecode(e));
		if (typeof e == "string") {
			let [n, r, i, a, o] = JSON.parse(e);
			return t({
				join_ref: n,
				ref: r,
				topic: i,
				event: a,
				payload: o
			});
		}
		return t({});
	}
	_binaryDecode(e) {
		let t = new DataView(e), n = t.getUint8(0), r = new TextDecoder();
		switch (n) {
			case this.KINDS.userBroadcast: return this._decodeUserBroadcast(e, t, r);
		}
	}
	_decodeUserBroadcast(e, t, n) {
		let r = t.getUint8(1), i = t.getUint8(2), a = t.getUint8(3), o = t.getUint8(4), s = this.HEADER_LENGTH + 4, c = n.decode(e.slice(s, s + r));
		s += r;
		let l = n.decode(e.slice(s, s + i));
		s += i;
		let u = n.decode(e.slice(s, s + a));
		s += a;
		let d = e.slice(s, e.byteLength), f = o === this.JSON_ENCODING ? JSON.parse(n.decode(d)) : d, p = {
			type: this.BROADCAST_EVENT,
			event: l,
			payload: f
		};
		return a > 0 && (p.meta = JSON.parse(u)), {
			join_ref: null,
			ref: null,
			topic: c,
			event: this.BROADCAST_EVENT,
			payload: p
		};
	}
	_isArrayBuffer(e) {
		return e instanceof ArrayBuffer || e?.constructor?.name === "ArrayBuffer";
	}
	_pick(e, t) {
		return !e || typeof e != "object" ? {} : Object.fromEntries(Object.entries(e).filter(([e]) => t.includes(e)));
	}
}, F;
(function(e) {
	e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange";
})(F ||= {});
var cn = (e, t, n = {}) => {
	let r = n.skipTypes ?? [];
	return t ? Object.keys(t).reduce((n, i) => (n[i] = ln(i, e, t, r), n), {}) : {};
}, ln = (e, t, n, r) => {
	let i = t.find((t) => t.name === e)?.type, a = n[e];
	return i && !r.includes(i) ? un(i, a) : dn(a);
}, un = (e, t) => {
	if (e.charAt(0) === "_") return hn(t, e.slice(1, e.length));
	switch (e) {
		case F.bool: return fn(t);
		case F.float4:
		case F.float8:
		case F.int2:
		case F.int4:
		case F.int8:
		case F.numeric:
		case F.oid: return pn(t);
		case F.json:
		case F.jsonb: return mn(t);
		case F.timestamp: return gn(t);
		case F.abstime:
		case F.date:
		case F.daterange:
		case F.int4range:
		case F.int8range:
		case F.money:
		case F.reltime:
		case F.text:
		case F.time:
		case F.timestamptz:
		case F.timetz:
		case F.tsrange:
		case F.tstzrange: return dn(t);
		default: return dn(t);
	}
}, dn = (e) => e, fn = (e) => {
	switch (e) {
		case "t": return !0;
		case "f": return !1;
		default: return e;
	}
}, pn = (e) => {
	if (typeof e == "string") {
		let t = parseFloat(e);
		if (!Number.isNaN(t)) return t;
	}
	return e;
}, mn = (e) => {
	if (typeof e == "string") try {
		return JSON.parse(e);
	} catch {
		return e;
	}
	return e;
}, hn = (e, t) => {
	if (typeof e != "string") return e;
	let n = e.length - 1, r = e[n];
	if (e[0] === "{" && r === "}") {
		let r, i = e.slice(1, n);
		try {
			r = JSON.parse("[" + i + "]");
		} catch {
			r = i ? i.split(",") : [];
		}
		return r.map((e) => un(t, e));
	}
	return e;
}, gn = (e) => typeof e == "string" ? e.replace(" ", "T") : e, _n = (e) => {
	let t = new URL(e);
	return t.protocol = t.protocol.replace(/^ws/i, "http"), t.pathname = t.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), t.pathname === "" || t.pathname === "/" ? t.pathname = "/api/broadcast" : t.pathname += "/api/broadcast", t.href;
}, vn = (e) => typeof e == "function" ? e : function() {
	return e;
}, yn = typeof self < "u" ? self : null, bn = typeof window < "u" ? window : null, I = yn || bn || globalThis, xn = "2.0.0", Sn = 1e4, Cn = 1e3, L = {
	connecting: 0,
	open: 1,
	closing: 2,
	closed: 3
}, R = {
	closed: "closed",
	errored: "errored",
	joined: "joined",
	joining: "joining",
	leaving: "leaving"
}, wn = {
	close: "phx_close",
	error: "phx_error",
	join: "phx_join",
	reply: "phx_reply",
	leave: "phx_leave"
}, Tn = {
	longpoll: "longpoll",
	websocket: "websocket"
}, En = { complete: 4 }, Dn = "base64url.bearer.phx.", On = class {
	constructor(e, t, n, r) {
		this.channel = e, this.event = t, this.payload = n || function() {
			return {};
		}, this.receivedResp = null, this.timeout = r, this.timeoutTimer = null, this.recHooks = [], this.sent = !1, this.ref = void 0;
	}
	resend(e) {
		this.timeout = e, this.reset(), this.send();
	}
	send() {
		this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
			topic: this.channel.topic,
			event: this.event,
			payload: this.payload(),
			ref: this.ref,
			join_ref: this.channel.joinRef()
		}));
	}
	receive(e, t) {
		return this.hasReceived(e) && t(this.receivedResp.response), this.recHooks.push({
			status: e,
			callback: t
		}), this;
	}
	reset() {
		this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1;
	}
	destroy() {
		this.cancelRefEvent(), this.cancelTimeout();
	}
	matchReceive({ status: e, response: t, _ref: n }) {
		this.recHooks.filter((t) => t.status === e).forEach((e) => e.callback(t));
	}
	cancelRefEvent() {
		this.refEvent && this.channel.off(this.refEvent);
	}
	cancelTimeout() {
		clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
	}
	startTimeout() {
		this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, (e) => {
			this.cancelRefEvent(), this.cancelTimeout(), this.receivedResp = e, this.matchReceive(e);
		}), this.timeoutTimer = setTimeout(() => {
			this.trigger("timeout", {});
		}, this.timeout);
	}
	hasReceived(e) {
		return this.receivedResp && this.receivedResp.status === e;
	}
	trigger(e, t) {
		this.channel.trigger(this.refEvent, {
			status: e,
			response: t
		});
	}
}, kn = class {
	constructor(e, t) {
		this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0;
	}
	reset() {
		this.tries = 0, clearTimeout(this.timer);
	}
	scheduleTimeout() {
		clearTimeout(this.timer), this.timer = setTimeout(() => {
			this.tries += 1, this.callback();
		}, this.timerCalc(this.tries + 1));
	}
}, An = class {
	constructor(e, t, n) {
		this.state = R.closed, this.topic = e, this.params = vn(t || {}), this.socket = n, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new On(this, wn.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new kn(() => {
			this.socket.isConnected() && this.rejoin();
		}, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(this.socket.onOpen(() => {
			this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
		})), this.joinPush.receive("ok", () => {
			this.state = R.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((e) => e.send()), this.pushBuffer = [];
		}), this.joinPush.receive("error", (e) => {
			this.state = R.errored, this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, e), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
		}), this.onClose(() => {
			this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`), this.state = R.closed, this.socket.remove(this);
		}), this.onError((e) => {
			this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, e), this.isJoining() && this.joinPush.reset(), this.state = R.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
		}), this.joinPush.receive("timeout", () => {
			this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), new On(this, wn.leave, vn({}), this.timeout).send(), this.state = R.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
		}), this.on(wn.reply, (e, t) => {
			this.trigger(this.replyEventName(t), e);
		});
	}
	join(e = this.timeout) {
		if (this.joinedOnce) throw Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
		return this.timeout = e, this.joinedOnce = !0, this.rejoin(), this.joinPush;
	}
	teardown() {
		this.pushBuffer.forEach((e) => e.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = R.closed, this.bindings = [];
	}
	onClose(e) {
		this.on(wn.close, e);
	}
	onError(e) {
		return this.on(wn.error, (t) => e(t));
	}
	on(e, t) {
		let n = this.bindingRef++;
		return this.bindings.push({
			event: e,
			ref: n,
			callback: t
		}), n;
	}
	off(e, t) {
		this.bindings = this.bindings.filter((n) => !(n.event === e && (t === void 0 || t === n.ref)));
	}
	canPush() {
		return this.socket.isConnected() && this.isJoined();
	}
	push(e, t, n = this.timeout) {
		if (t ||= {}, !this.joinedOnce) throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
		let r = new On(this, e, function() {
			return t;
		}, n);
		return this.canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r;
	}
	leave(e = this.timeout) {
		this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = R.leaving;
		let t = () => {
			this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(wn.close, "leave");
		}, n = new On(this, wn.leave, vn({}), e);
		return n.receive("ok", () => t()).receive("timeout", () => t()), n.send(), this.canPush() || n.trigger("ok", {}), n;
	}
	onMessage(e, t, n) {
		return t;
	}
	filterBindings(e, t, n) {
		return !0;
	}
	isMember(e, t, n, r) {
		return this.topic === e ? r && r !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
			topic: e,
			event: t,
			payload: n,
			joinRef: r
		}), !1) : !0 : !1;
	}
	joinRef() {
		return this.joinPush.ref;
	}
	rejoin(e = this.timeout) {
		this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = R.joining, this.joinPush.resend(e));
	}
	trigger(e, t, n, r) {
		let i = this.onMessage(e, t, n, r);
		if (t && !i) throw Error("channel onMessage callbacks must return the payload, modified or unmodified");
		let a = this.bindings.filter((r) => r.event === e && this.filterBindings(r, t, n));
		for (let e = 0; e < a.length; e++) a[e].callback(i, n, r || this.joinRef());
	}
	replyEventName(e) {
		return `chan_reply_${e}`;
	}
	isClosed() {
		return this.state === R.closed;
	}
	isErrored() {
		return this.state === R.errored;
	}
	isJoined() {
		return this.state === R.joined;
	}
	isJoining() {
		return this.state === R.joining;
	}
	isLeaving() {
		return this.state === R.leaving;
	}
}, jn = class {
	static request(e, t, n, r, i, a, o) {
		if (I.XDomainRequest) {
			let n = new I.XDomainRequest();
			return this.xdomainRequest(n, e, t, r, i, a, o);
		} else if (I.XMLHttpRequest) {
			let s = new I.XMLHttpRequest();
			return this.xhrRequest(s, e, t, n, r, i, a, o);
		} else if (I.fetch && I.AbortController) return this.fetchRequest(e, t, n, r, i, a, o);
		else throw Error("No suitable XMLHttpRequest implementation found");
	}
	static fetchRequest(e, t, n, r, i, a, o) {
		let s = {
			method: e,
			headers: n,
			body: r
		}, c = null;
		return i && (c = new AbortController(), setTimeout(() => c.abort(), i), s.signal = c.signal), I.fetch(t, s).then((e) => e.text()).then((e) => this.parseJSON(e)).then((e) => o && o(e)).catch((e) => {
			e.name === "AbortError" && a ? a() : o && o(null);
		}), c;
	}
	static xdomainRequest(e, t, n, r, i, a, o) {
		return e.timeout = i, e.open(t, n), e.onload = () => {
			let t = this.parseJSON(e.responseText);
			o && o(t);
		}, a && (e.ontimeout = a), e.onprogress = () => {}, e.send(r), e;
	}
	static xhrRequest(e, t, n, r, i, a, o, s) {
		e.open(t, n, !0), e.timeout = a;
		for (let [t, n] of Object.entries(r)) e.setRequestHeader(t, n);
		return e.onerror = () => s && s(null), e.onreadystatechange = () => {
			e.readyState === En.complete && s && s(this.parseJSON(e.responseText));
		}, o && (e.ontimeout = o), e.send(i), e;
	}
	static parseJSON(e) {
		if (!e || e === "") return null;
		try {
			return JSON.parse(e);
		} catch {
			return console && console.log("failed to parse JSON response", e), null;
		}
	}
	static serialize(e, t) {
		let n = [];
		for (var r in e) {
			if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
			let i = t ? `${t}[${r}]` : r, a = e[r];
			typeof a == "object" ? n.push(this.serialize(a, i)) : n.push(encodeURIComponent(i) + "=" + encodeURIComponent(a));
		}
		return n.join("&");
	}
	static appendParams(e, t) {
		return Object.keys(t).length === 0 ? e : `${e}${e.match(/\?/) ? "&" : "?"}${this.serialize(t)}`;
	}
}, Mn = (e) => {
	let t = "", n = new Uint8Array(e), r = n.byteLength;
	for (let e = 0; e < r; e++) t += String.fromCharCode(n[e]);
	return btoa(t);
}, Nn = class {
	constructor(e, t) {
		t && t.length === 2 && t[1].startsWith(Dn) && (this.authToken = atob(t[1].slice(Dn.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = /* @__PURE__ */ new Set(), this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {}, this.onerror = function() {}, this.onmessage = function() {}, this.onclose = function() {}, this.pollEndpoint = this.normalizeEndpoint(e), this.readyState = L.connecting, setTimeout(() => this.poll(), 0);
	}
	normalizeEndpoint(e) {
		return e.replace("ws://", "http://").replace("wss://", "https://").replace(RegExp("(.*)/" + Tn.websocket), "$1/" + Tn.longpoll);
	}
	endpointURL() {
		return jn.appendParams(this.pollEndpoint, { token: this.token });
	}
	closeAndRetry(e, t, n) {
		this.close(e, t, n), this.readyState = L.connecting;
	}
	ontimeout() {
		this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1);
	}
	isActive() {
		return this.readyState === L.open || this.readyState === L.connecting;
	}
	poll() {
		let e = { Accept: "application/json" };
		this.authToken && (e["X-Phoenix-AuthToken"] = this.authToken), this.ajax("GET", e, null, () => this.ontimeout(), (e) => {
			if (e) {
				var { status: t, token: n, messages: r } = e;
				if (t === 410 && this.token !== null) {
					this.onerror(410), this.closeAndRetry(3410, "session_gone", !1);
					return;
				}
				this.token = n;
			} else t = 0;
			switch (t) {
				case 200:
					r.forEach((e) => {
						setTimeout(() => this.onmessage({ data: e }), 0);
					}), this.poll();
					break;
				case 204:
					this.poll();
					break;
				case 410:
					this.readyState = L.open, this.onopen({}), this.poll();
					break;
				case 403:
					this.onerror(403), this.close(1008, "forbidden", !1);
					break;
				case 0:
				case 500:
					this.onerror(500), this.closeAndRetry(1011, "internal server error", 500);
					break;
				default: throw Error(`unhandled poll status ${t}`);
			}
		});
	}
	send(e) {
		typeof e != "string" && (e = Mn(e)), this.currentBatch ? this.currentBatch.push(e) : this.awaitingBatchAck ? this.batchBuffer.push(e) : (this.currentBatch = [e], this.currentBatchTimer = setTimeout(() => {
			this.batchSend(this.currentBatch), this.currentBatch = null;
		}, 0));
	}
	batchSend(e) {
		this.awaitingBatchAck = !0, this.ajax("POST", { "Content-Type": "application/x-ndjson" }, e.join("\n"), () => this.onerror("timeout"), (e) => {
			this.awaitingBatchAck = !1, !e || e.status !== 200 ? (this.onerror(e && e.status), this.closeAndRetry(1011, "internal server error", !1)) : this.batchBuffer.length > 0 && (this.batchSend(this.batchBuffer), this.batchBuffer = []);
		});
	}
	close(e, t, n) {
		for (let e of this.reqs) e.abort();
		this.readyState = L.closed;
		let r = Object.assign({
			code: 1e3,
			reason: void 0,
			wasClean: !0
		}, {
			code: e,
			reason: t,
			wasClean: n
		});
		this.batchBuffer = [], clearTimeout(this.currentBatchTimer), this.currentBatchTimer = null, typeof CloseEvent < "u" ? this.onclose(new CloseEvent("close", r)) : this.onclose(r);
	}
	ajax(e, t, n, r, i) {
		let a;
		a = jn.request(e, this.endpointURL(), t, n, this.timeout, () => {
			this.reqs.delete(a), r();
		}, (e) => {
			this.reqs.delete(a), this.isActive() && i(e);
		}), this.reqs.add(a);
	}
}, Pn = class e {
	constructor(t, n = {}) {
		let r = n.events || {
			state: "presence_state",
			diff: "presence_diff"
		};
		this.state = {}, this.pendingDiffs = [], this.channel = t, this.joinRef = null, this.caller = {
			onJoin: function() {},
			onLeave: function() {},
			onSync: function() {}
		}, this.channel.on(r.state, (t) => {
			let { onJoin: n, onLeave: r, onSync: i } = this.caller;
			this.joinRef = this.channel.joinRef(), this.state = e.syncState(this.state, t, n, r), this.pendingDiffs.forEach((t) => {
				this.state = e.syncDiff(this.state, t, n, r);
			}), this.pendingDiffs = [], i();
		}), this.channel.on(r.diff, (t) => {
			let { onJoin: n, onLeave: r, onSync: i } = this.caller;
			this.inPendingSyncState() ? this.pendingDiffs.push(t) : (this.state = e.syncDiff(this.state, t, n, r), i());
		});
	}
	onJoin(e) {
		this.caller.onJoin = e;
	}
	onLeave(e) {
		this.caller.onLeave = e;
	}
	onSync(e) {
		this.caller.onSync = e;
	}
	list(t) {
		return e.list(this.state, t);
	}
	inPendingSyncState() {
		return !this.joinRef || this.joinRef !== this.channel.joinRef();
	}
	static syncState(e, t, n, r) {
		let i = this.clone(e), a = {}, o = {};
		return this.map(i, (e, n) => {
			t[e] || (o[e] = n);
		}), this.map(t, (e, t) => {
			let n = i[e];
			if (n) {
				let r = t.metas.map((e) => e.phx_ref), i = n.metas.map((e) => e.phx_ref), s = t.metas.filter((e) => i.indexOf(e.phx_ref) < 0), c = n.metas.filter((e) => r.indexOf(e.phx_ref) < 0);
				s.length > 0 && (a[e] = t, a[e].metas = s), c.length > 0 && (o[e] = this.clone(n), o[e].metas = c);
			} else a[e] = t;
		}), this.syncDiff(i, {
			joins: a,
			leaves: o
		}, n, r);
	}
	static syncDiff(e, t, n, r) {
		let { joins: i, leaves: a } = this.clone(t);
		return n ||= function() {}, r ||= function() {}, this.map(i, (t, r) => {
			let i = e[t];
			if (e[t] = this.clone(r), i) {
				let n = e[t].metas.map((e) => e.phx_ref), r = i.metas.filter((e) => n.indexOf(e.phx_ref) < 0);
				e[t].metas.unshift(...r);
			}
			n(t, i, r);
		}), this.map(a, (t, n) => {
			let i = e[t];
			if (!i) return;
			let a = n.metas.map((e) => e.phx_ref);
			i.metas = i.metas.filter((e) => a.indexOf(e.phx_ref) < 0), r(t, i, n), i.metas.length === 0 && delete e[t];
		}), e;
	}
	static list(e, t) {
		return t ||= function(e, t) {
			return t;
		}, this.map(e, (e, n) => t(e, n));
	}
	static map(e, t) {
		return Object.getOwnPropertyNames(e).map((n) => t(n, e[n]));
	}
	static clone(e) {
		return JSON.parse(JSON.stringify(e));
	}
}, Fn = {
	HEADER_LENGTH: 1,
	META_LENGTH: 4,
	KINDS: {
		push: 0,
		reply: 1,
		broadcast: 2
	},
	encode(e, t) {
		if (e.payload.constructor === ArrayBuffer) return t(this.binaryEncode(e));
		{
			let n = [
				e.join_ref,
				e.ref,
				e.topic,
				e.event,
				e.payload
			];
			return t(JSON.stringify(n));
		}
	},
	decode(e, t) {
		if (e.constructor === ArrayBuffer) return t(this.binaryDecode(e));
		{
			let [n, r, i, a, o] = JSON.parse(e);
			return t({
				join_ref: n,
				ref: r,
				topic: i,
				event: a,
				payload: o
			});
		}
	},
	binaryEncode(e) {
		let { join_ref: t, ref: n, event: r, topic: i, payload: a } = e, o = this.META_LENGTH + t.length + n.length + i.length + r.length, s = new ArrayBuffer(this.HEADER_LENGTH + o), c = new DataView(s), l = 0;
		c.setUint8(l++, this.KINDS.push), c.setUint8(l++, t.length), c.setUint8(l++, n.length), c.setUint8(l++, i.length), c.setUint8(l++, r.length), Array.from(t, (e) => c.setUint8(l++, e.charCodeAt(0))), Array.from(n, (e) => c.setUint8(l++, e.charCodeAt(0))), Array.from(i, (e) => c.setUint8(l++, e.charCodeAt(0))), Array.from(r, (e) => c.setUint8(l++, e.charCodeAt(0)));
		var u = new Uint8Array(s.byteLength + a.byteLength);
		return u.set(new Uint8Array(s), 0), u.set(new Uint8Array(a), s.byteLength), u.buffer;
	},
	binaryDecode(e) {
		let t = new DataView(e), n = t.getUint8(0), r = new TextDecoder();
		switch (n) {
			case this.KINDS.push: return this.decodePush(e, t, r);
			case this.KINDS.reply: return this.decodeReply(e, t, r);
			case this.KINDS.broadcast: return this.decodeBroadcast(e, t, r);
		}
	},
	decodePush(e, t, n) {
		let r = t.getUint8(1), i = t.getUint8(2), a = t.getUint8(3), o = this.HEADER_LENGTH + this.META_LENGTH - 1, s = n.decode(e.slice(o, o + r));
		o += r;
		let c = n.decode(e.slice(o, o + i));
		o += i;
		let l = n.decode(e.slice(o, o + a));
		return o += a, {
			join_ref: s,
			ref: null,
			topic: c,
			event: l,
			payload: e.slice(o, e.byteLength)
		};
	},
	decodeReply(e, t, n) {
		let r = t.getUint8(1), i = t.getUint8(2), a = t.getUint8(3), o = t.getUint8(4), s = this.HEADER_LENGTH + this.META_LENGTH, c = n.decode(e.slice(s, s + r));
		s += r;
		let l = n.decode(e.slice(s, s + i));
		s += i;
		let u = n.decode(e.slice(s, s + a));
		s += a;
		let d = n.decode(e.slice(s, s + o));
		s += o;
		let f = {
			status: d,
			response: e.slice(s, e.byteLength)
		};
		return {
			join_ref: c,
			ref: l,
			topic: u,
			event: wn.reply,
			payload: f
		};
	},
	decodeBroadcast(e, t, n) {
		let r = t.getUint8(1), i = t.getUint8(2), a = this.HEADER_LENGTH + 2, o = n.decode(e.slice(a, a + r));
		a += r;
		let s = n.decode(e.slice(a, a + i));
		return a += i, {
			join_ref: null,
			ref: null,
			topic: o,
			event: s,
			payload: e.slice(a, e.byteLength)
		};
	}
}, In = class {
	constructor(e, t = {}) {
		this.stateChangeCallbacks = {
			open: [],
			close: [],
			error: [],
			message: []
		}, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = t.timeout || Sn, this.transport = t.transport || I.WebSocket || Nn, this.conn = void 0, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = t.longPollFallbackMs, this.fallbackTimer = null, this.sessionStore = t.sessionStorage || I && I.sessionStorage, this.establishedConnections = 0, this.defaultEncoder = Fn.encode.bind(Fn), this.defaultDecoder = Fn.decode.bind(Fn), this.closeWasClean = !0, this.disconnecting = !1, this.binaryType = t.binaryType || "arraybuffer", this.connectClock = 1, this.pageHidden = !1, this.encode = void 0, this.decode = void 0, this.transport === Nn ? (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder) : (this.encode = t.encode || this.defaultEncoder, this.decode = t.decode || this.defaultDecoder);
		let n = null;
		bn && bn.addEventListener && (bn.addEventListener("pagehide", (e) => {
			this.conn && (this.disconnect(), n = this.connectClock);
		}), bn.addEventListener("pageshow", (e) => {
			n === this.connectClock && (n = null, this.connect());
		}), bn.addEventListener("visibilitychange", () => {
			document.visibilityState === "hidden" ? this.pageHidden = !0 : (this.pageHidden = !1, !this.isConnected() && !this.closeWasClean && this.teardown(() => this.connect()));
		})), this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4, this.autoSendHeartbeat = t.autoSendHeartbeat ?? !0, this.heartbeatCallback = t.heartbeatCallback ?? (() => {}), this.rejoinAfterMs = (e) => t.rejoinAfterMs ? t.rejoinAfterMs(e) : [
			1e3,
			2e3,
			5e3
		][e - 1] || 1e4, this.reconnectAfterMs = (e) => t.reconnectAfterMs ? t.reconnectAfterMs(e) : [
			10,
			50,
			100,
			150,
			200,
			250,
			500,
			1e3,
			2e3
		][e - 1] || 5e3, this.logger = t.logger || null, !this.logger && t.debug && (this.logger = (e, t, n) => {
			console.log(`${e}: ${t}`, n);
		}), this.longpollerTimeout = t.longpollerTimeout || 2e4, this.params = vn(t.params || {}), this.endPoint = `${e}/${Tn.websocket}`, this.vsn = t.vsn || xn, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new kn(() => {
			if (this.pageHidden) {
				this.log("Not reconnecting as page is hidden!"), this.teardown();
				return;
			}
			this.teardown(async () => {
				t.beforeReconnect && await t.beforeReconnect(), this.connect();
			});
		}, this.reconnectAfterMs), this.authToken = t.authToken;
	}
	getLongPollTransport() {
		return Nn;
	}
	replaceTransport(e) {
		this.connectClock++, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn &&= (this.conn.close(), null), this.transport = e;
	}
	protocol() {
		return location.protocol.match(/^https/) ? "wss" : "ws";
	}
	endPointURL() {
		let e = jn.appendParams(jn.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
		return e.charAt(0) === "/" ? e.charAt(1) === "/" ? `${this.protocol()}:${e}` : `${this.protocol()}://${location.host}${e}` : e;
	}
	disconnect(e, t, n) {
		this.connectClock++, this.disconnecting = !0, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.teardown(() => {
			this.disconnecting = !1, e && e();
		}, t, n);
	}
	connect(e) {
		e && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = vn(e)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== Nn ? this.connectWithFallback(Nn, this.longPollFallbackMs) : this.transportConnect());
	}
	log(e, t, n) {
		this.logger && this.logger(e, t, n);
	}
	hasLogger() {
		return this.logger !== null;
	}
	onOpen(e) {
		let t = this.makeRef();
		return this.stateChangeCallbacks.open.push([t, e]), t;
	}
	onClose(e) {
		let t = this.makeRef();
		return this.stateChangeCallbacks.close.push([t, e]), t;
	}
	onError(e) {
		let t = this.makeRef();
		return this.stateChangeCallbacks.error.push([t, e]), t;
	}
	onMessage(e) {
		let t = this.makeRef();
		return this.stateChangeCallbacks.message.push([t, e]), t;
	}
	onHeartbeat(e) {
		this.heartbeatCallback = e;
	}
	ping(e) {
		if (!this.isConnected()) return !1;
		let t = this.makeRef(), n = Date.now();
		this.push({
			topic: "phoenix",
			event: "heartbeat",
			payload: {},
			ref: t
		});
		let r = this.onMessage((i) => {
			i.ref === t && (this.off([r]), e(Date.now() - n));
		});
		return !0;
	}
	transportName(e) {
		switch (e) {
			case Nn: return "LongPoll";
			default: return e.name;
		}
	}
	transportConnect() {
		this.connectClock++, this.closeWasClean = !1;
		let e;
		this.authToken && (e = ["phoenix", `${Dn}${btoa(this.authToken).replace(/=/g, "")}`]), this.conn = new this.transport(this.endPointURL(), e), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = () => this.onConnOpen(), this.conn.onerror = (e) => this.onConnError(e), this.conn.onmessage = (e) => this.onConnMessage(e), this.conn.onclose = (e) => this.onConnClose(e);
	}
	getSession(e) {
		return this.sessionStore && this.sessionStore.getItem(e);
	}
	storeSession(e, t) {
		this.sessionStore && this.sessionStore.setItem(e, t);
	}
	connectWithFallback(e, t = 2500) {
		clearTimeout(this.fallbackTimer);
		let n = !1, r = !0, i, a = this.transportName(e), o = (t) => {
			this.log("transport", `falling back to ${a}...`, t), this.off([void 0, i]), r = !1, this.replaceTransport(e), this.transportConnect();
		};
		if (this.getSession(`phx:fallback:${a}`)) return o("memorized");
		this.fallbackTimer = setTimeout(o, t), i = this.onError((e) => {
			this.log("transport", "error", e), r && !n && (clearTimeout(this.fallbackTimer), o(e));
		}), this.fallbackRef && this.off([this.fallbackRef]), this.fallbackRef = this.onOpen(() => {
			if (n = !0, !r) {
				let t = this.transportName(e);
				return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${t}`, "true"), this.log("transport", `established ${t} fallback`);
			}
			clearTimeout(this.fallbackTimer), this.fallbackTimer = setTimeout(o, t), this.ping((e) => {
				this.log("transport", "connected to primary after", e), this.primaryPassedHealthCheck = !0, clearTimeout(this.fallbackTimer);
			});
		}), this.transportConnect();
	}
	clearHeartbeats() {
		clearTimeout(this.heartbeatTimer), clearTimeout(this.heartbeatTimeoutTimer);
	}
	onConnOpen() {
		this.hasLogger() && this.log("transport", `connected to ${this.endPointURL()}`), this.closeWasClean = !1, this.disconnecting = !1, this.establishedConnections++, this.flushSendBuffer(), this.reconnectTimer.reset(), this.autoSendHeartbeat && this.resetHeartbeat(), this.triggerStateCallbacks("open");
	}
	heartbeatTimeout() {
		if (this.pendingHeartbeatRef) {
			this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
			try {
				this.heartbeatCallback("timeout");
			} catch (e) {
				this.log("error", "error in heartbeat callback", e);
			}
			this.triggerChanError(/* @__PURE__ */ Error("heartbeat timeout")), this.closeWasClean = !1, this.teardown(() => this.reconnectTimer.scheduleTimeout(), Cn, "heartbeat timeout");
		}
	}
	resetHeartbeat() {
		this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, this.clearHeartbeats(), this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
	}
	teardown(e, t, n) {
		if (!this.conn) return e && e();
		let r = this.conn;
		this.waitForBufferDone(r, () => {
			t ? r.close(t, n || "") : r.close(), this.waitForSocketClosed(r, () => {
				this.conn === r && (this.conn.onopen = function() {}, this.conn.onerror = function() {}, this.conn.onmessage = function() {}, this.conn.onclose = function() {}, this.conn = null), e && e();
			});
		});
	}
	waitForBufferDone(e, t, n = 1) {
		if (n === 5 || !e.bufferedAmount) {
			t();
			return;
		}
		setTimeout(() => {
			this.waitForBufferDone(e, t, n + 1);
		}, 150 * n);
	}
	waitForSocketClosed(e, t, n = 1) {
		if (n === 5 || e.readyState === L.closed) {
			t();
			return;
		}
		setTimeout(() => {
			this.waitForSocketClosed(e, t, n + 1);
		}, 150 * n);
	}
	onConnClose(e) {
		this.conn && (this.conn.onclose = () => {}), this.hasLogger() && this.log("transport", "close", e), this.triggerChanError(e), this.clearHeartbeats(), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.triggerStateCallbacks("close", e);
	}
	onConnError(e) {
		this.hasLogger() && this.log("transport", "error", e);
		let t = this.transport, n = this.establishedConnections;
		this.triggerStateCallbacks("error", e, t, n), (t === this.transport || n > 0) && this.triggerChanError(e);
	}
	triggerChanError(e) {
		this.channels.forEach((t) => {
			t.isErrored() || t.isLeaving() || t.isClosed() || t.trigger(wn.error, e);
		});
	}
	connectionState() {
		switch (this.conn && this.conn.readyState) {
			case L.connecting: return "connecting";
			case L.open: return "open";
			case L.closing: return "closing";
			default: return "closed";
		}
	}
	isConnected() {
		return this.connectionState() === "open";
	}
	remove(e) {
		this.off(e.stateChangeRefs), this.channels = this.channels.filter((t) => t !== e);
	}
	off(e) {
		for (let t in this.stateChangeCallbacks) this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(([t]) => e.indexOf(t) === -1);
	}
	channel(e, t = {}) {
		let n = new An(e, t, this);
		return this.channels.push(n), n;
	}
	push(e) {
		if (this.hasLogger()) {
			let { topic: t, event: n, payload: r, ref: i, join_ref: a } = e;
			this.log("push", `${t} ${n} (${a}, ${i})`, r);
		}
		this.isConnected() ? this.encode(e, (e) => this.conn.send(e)) : this.sendBuffer.push(() => this.encode(e, (e) => this.conn.send(e)));
	}
	makeRef() {
		let e = this.ref + 1;
		return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
	}
	sendHeartbeat() {
		if (!this.isConnected()) {
			try {
				this.heartbeatCallback("disconnected");
			} catch (e) {
				this.log("error", "error in heartbeat callback", e);
			}
			return;
		}
		if (this.pendingHeartbeatRef) {
			this.heartbeatTimeout();
			return;
		}
		this.pendingHeartbeatRef = this.makeRef(), this.heartbeatSentAt = Date.now(), this.push({
			topic: "phoenix",
			event: "heartbeat",
			payload: {},
			ref: this.pendingHeartbeatRef
		});
		try {
			this.heartbeatCallback("sent");
		} catch (e) {
			this.log("error", "error in heartbeat callback", e);
		}
		this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
	}
	flushSendBuffer() {
		this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
	}
	onConnMessage(e) {
		this.decode(e.data, (e) => {
			let { topic: t, event: n, payload: r, ref: i, join_ref: a } = e;
			if (i && i === this.pendingHeartbeatRef) {
				let e = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
				this.clearHeartbeats();
				try {
					this.heartbeatCallback(r.status === "ok" ? "ok" : "error", e);
				} catch (e) {
					this.log("error", "error in heartbeat callback", e);
				}
				this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
			}
			this.hasLogger() && this.log("receive", `${r.status || ""} ${t} ${n} ${i && "(" + i + ")" || ""}`.trim(), r);
			for (let e = 0; e < this.channels.length; e++) {
				let o = this.channels[e];
				o.isMember(t, n, r, a) && o.trigger(n, r, i, a);
			}
			this.triggerStateCallbacks("message", e);
		});
	}
	triggerStateCallbacks(e, ...t) {
		try {
			this.stateChangeCallbacks[e].forEach(([n, r]) => {
				try {
					r(...t);
				} catch (t) {
					this.log("error", `error in ${e} callback`, t);
				}
			});
		} catch (t) {
			this.log("error", `error triggering ${e} callbacks`, t);
		}
	}
	leaveOpenTopic(e) {
		let t = this.channels.find((t) => t.topic === e && (t.isJoined() || t.isJoining()));
		t && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${e}"`), t.leave());
	}
}, Ln = class e {
	constructor(t, n) {
		let r = Bn(n);
		this.presence = new Pn(t.getChannel(), r), this.presence.onJoin((n, r, i) => {
			let a = e.onJoinPayload(n, r, i);
			t.getChannel().trigger("presence", a);
		}), this.presence.onLeave((n, r, i) => {
			let a = e.onLeavePayload(n, r, i);
			t.getChannel().trigger("presence", a);
		}), this.presence.onSync(() => {
			t.getChannel().trigger("presence", { event: "sync" });
		});
	}
	get state() {
		return e.transformState(this.presence.state);
	}
	static transformState(e) {
		return e = zn(e), Object.getOwnPropertyNames(e).reduce((t, n) => {
			let r = e[n];
			return t[n] = Rn(r), t;
		}, {});
	}
	static onJoinPayload(e, t, n) {
		return {
			event: "join",
			key: e,
			currentPresences: Vn(t),
			newPresences: Rn(n)
		};
	}
	static onLeavePayload(e, t, n) {
		return {
			event: "leave",
			key: e,
			currentPresences: Vn(t),
			leftPresences: Rn(n)
		};
	}
};
function Rn(e) {
	return e.metas.map((e) => (e.presence_ref = e.phx_ref, delete e.phx_ref, delete e.phx_ref_prev, e));
}
function zn(e) {
	return JSON.parse(JSON.stringify(e));
}
function Bn(e) {
	return e?.events && { events: e.events };
}
function Vn(e) {
	return e?.metas ? Rn(e) : [];
}
//#endregion
//#region node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js
var Hn;
(function(e) {
	e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave";
})(Hn ||= {});
var Un = class {
	get state() {
		return this.presenceAdapter.state;
	}
	constructor(e, t) {
		this.channel = e, this.presenceAdapter = new Ln(this.channel.channelAdapter, t);
	}
};
//#endregion
//#region node_modules/@supabase/realtime-js/dist/module/lib/normalizeChannelError.js
function Wn(e) {
	if (e instanceof Error) return e;
	if (typeof e == "string") return Error(e);
	if (e && typeof e == "object") {
		let t = e;
		if (typeof t.code == "number") {
			let n = typeof t.reason == "string" && t.reason ? ` (${t.reason})` : "";
			return Error(`socket closed: ${t.code}${n}`, { cause: e });
		}
		return Error("channel error: transport failure", { cause: e });
	}
	return /* @__PURE__ */ Error("channel error: connection lost");
}
//#endregion
//#region node_modules/@supabase/realtime-js/dist/module/phoenix/channelAdapter.js
var Gn = class {
	constructor(e, t, n) {
		let r = Kn(n);
		this.channel = e.getSocket().channel(t, r), this.socket = e;
	}
	get state() {
		return this.channel.state;
	}
	set state(e) {
		this.channel.state = e;
	}
	get joinedOnce() {
		return this.channel.joinedOnce;
	}
	get joinPush() {
		return this.channel.joinPush;
	}
	get rejoinTimer() {
		return this.channel.rejoinTimer;
	}
	on(e, t) {
		return this.channel.on(e, t);
	}
	off(e, t) {
		this.channel.off(e, t);
	}
	subscribe(e) {
		return this.channel.join(e);
	}
	unsubscribe(e) {
		return this.channel.leave(e);
	}
	teardown() {
		this.channel.teardown();
	}
	onClose(e) {
		this.channel.onClose(e);
	}
	onError(e) {
		return this.channel.onError(e);
	}
	push(e, t, n) {
		let r;
		try {
			r = this.channel.push(e, t, n);
		} catch {
			throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`);
		}
		if (this.channel.pushBuffer.length > 100) {
			let e = this.channel.pushBuffer.shift();
			e.cancelTimeout(), this.socket.log("channel", `discarded push due to buffer overflow: ${e.event}`, e.payload());
		}
		return r;
	}
	updateJoinPayload(e) {
		let t = this.channel.joinPush.payload();
		this.channel.joinPush.payload = () => Object.assign(Object.assign({}, t), e);
	}
	canPush() {
		return this.socket.isConnected() && this.state === rn.joined;
	}
	isJoined() {
		return this.state === rn.joined;
	}
	isJoining() {
		return this.state === rn.joining;
	}
	isClosed() {
		return this.state === rn.closed;
	}
	isLeaving() {
		return this.state === rn.leaving;
	}
	updateFilterBindings(e) {
		this.channel.filterBindings = e;
	}
	updatePayloadTransform(e) {
		this.channel.onMessage = e;
	}
	getChannel() {
		return this.channel;
	}
};
function Kn(e) {
	return { config: Object.assign({
		broadcast: {
			ack: !1,
			self: !1
		},
		presence: {
			key: "",
			enabled: !1
		},
		private: !1
	}, e.config) };
}
//#endregion
//#region node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js
var qn;
(function(e) {
	e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE";
})(qn ||= {});
var Jn;
(function(e) {
	e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes", e.SYSTEM = "system";
})(Jn ||= {});
var Yn;
(function(e) {
	e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Yn ||= {});
var Xn = class e {
	get state() {
		return this.channelAdapter.state;
	}
	set state(e) {
		this.channelAdapter.state = e;
	}
	get joinedOnce() {
		return this.channelAdapter.joinedOnce;
	}
	get timeout() {
		return this.socket.timeout;
	}
	get joinPush() {
		return this.channelAdapter.joinPush;
	}
	get rejoinTimer() {
		return this.channelAdapter.rejoinTimer;
	}
	constructor(e, t = { config: {} }, n) {
		if (this.topic = e, this.params = t, this.socket = n, this.bindings = {}, this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
			broadcast: {
				ack: !1,
				self: !1
			},
			presence: {
				key: "",
				enabled: !1
			},
			private: !1
		}, t.config), this.channelAdapter = new Gn(this.socket.socketAdapter, e, this.params), this.presence = new Un(this), this._onClose(() => {
			this.socket._remove(this);
		}), this._updateFilterTransform(), this.broadcastEndpointURL = _n(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || !1, !this.private && this.params.config?.broadcast?.replay) throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
	}
	subscribe(e, t = this.timeout) {
		if (this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed()) {
			let { config: { broadcast: n, presence: r, private: i } } = this.params, a = this.bindings.postgres_changes?.map((e) => e.filter) ?? [], o = !!this.bindings[Jn.PRESENCE] && this.bindings[Jn.PRESENCE].length > 0 || this.params.config.presence?.enabled === !0, s = {}, c = {
				broadcast: n,
				presence: Object.assign(Object.assign({}, r), { enabled: o }),
				postgres_changes: a,
				private: i
			};
			this.socket.accessTokenValue && (s.access_token = this.socket.accessTokenValue), this._onError((t) => {
				e?.(Yn.CHANNEL_ERROR, Wn(t));
			}), this._onClose(() => e?.(Yn.CLOSED)), this.updateJoinPayload(Object.assign({ config: c }, s)), this._updateFilterMessage(), this.channelAdapter.subscribe(t).receive("ok", async ({ postgres_changes: t }) => {
				if (this.socket._isManualToken() || this.socket.setAuth(), t === void 0) {
					e?.(Yn.SUBSCRIBED);
					return;
				}
				this._updatePostgresBindings(t, e);
			}).receive("error", (t) => {
				this.state = rn.errored;
				let n = Object.values(t).join(", ") || "error";
				e?.(Yn.CHANNEL_ERROR, Error(n, { cause: t }));
			}).receive("timeout", () => {
				e?.(Yn.TIMED_OUT);
			});
		}
		return this;
	}
	_updatePostgresBindings(t, n) {
		let r = this.bindings.postgres_changes, i = r?.length ?? 0, a = [];
		for (let o = 0; o < i; o++) {
			let i = r[o], { filter: { event: s, schema: c, table: l, filter: u } } = i, d = t && t[o];
			if (d && d.event === s && e.isFilterValueEqual(d.schema, c) && e.isFilterValueEqual(d.table, l) && e.isFilterValueEqual(d.filter, u)) a.push(Object.assign(Object.assign({}, i), { id: d.id }));
			else {
				this.unsubscribe(), this.state = rn.errored, n?.(Yn.CHANNEL_ERROR, /* @__PURE__ */ Error("mismatch between server and client bindings for postgres changes"));
				return;
			}
		}
		this.bindings.postgres_changes = a, this.state != rn.errored && n && n(Yn.SUBSCRIBED);
	}
	presenceState() {
		return this.presence.state;
	}
	async track(e, t = {}) {
		return await this.send({
			type: "presence",
			event: "track",
			payload: e
		}, t.timeout || this.timeout);
	}
	async untrack(e = {}) {
		return await this.send({
			type: "presence",
			event: "untrack"
		}, e);
	}
	on(e, t, n) {
		let r = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(), i = e === Jn.PRESENCE || e === Jn.POSTGRES_CHANGES;
		if (r && i) throw this.socket.log("channel", `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`), Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
		return this._on(e, t, n);
	}
	async httpSend(e, t, n = {}) {
		if (t == null) return Promise.reject(/* @__PURE__ */ Error("Payload is required for httpSend()"));
		let r = {
			apikey: this.socket.apiKey ? this.socket.apiKey : "",
			"Content-Type": "application/json"
		};
		this.socket.accessTokenValue && (r.Authorization = `Bearer ${this.socket.accessTokenValue}`);
		let i = {
			method: "POST",
			headers: r,
			body: JSON.stringify({ messages: [{
				topic: this.subTopic,
				event: e,
				payload: t,
				private: this.private
			}] })
		}, a = await this._fetchWithTimeout(this.broadcastEndpointURL, i, n.timeout ?? this.timeout);
		if (a.status === 202) return { success: !0 };
		let o = a.statusText;
		try {
			let e = await a.json();
			o = e.error || e.message || o;
		} catch {}
		return Promise.reject(Error(o));
	}
	async send(e, t = {}) {
		if (!this.channelAdapter.canPush() && e.type === "broadcast") {
			console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
			let { event: n, payload: r } = e, i = {
				apikey: this.socket.apiKey ? this.socket.apiKey : "",
				"Content-Type": "application/json"
			};
			this.socket.accessTokenValue && (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
			let a = {
				method: "POST",
				headers: i,
				body: JSON.stringify({ messages: [{
					topic: this.subTopic,
					event: n,
					payload: r,
					private: this.private
				}] })
			};
			try {
				let e = await this._fetchWithTimeout(this.broadcastEndpointURL, a, t.timeout ?? this.timeout);
				return await e.body?.cancel(), e.ok ? "ok" : "error";
			} catch (e) {
				return e.name === "AbortError" ? "timed out" : "error";
			}
		} else return new Promise((n) => {
			let r = this.channelAdapter.push(e.type, e, t.timeout || this.timeout);
			e.type === "broadcast" && !this.params?.config?.broadcast?.ack && n("ok"), r.receive("ok", () => n("ok")), r.receive("error", () => n("error")), r.receive("timeout", () => n("timed out"));
		});
	}
	updateJoinPayload(e) {
		this.channelAdapter.updateJoinPayload(e);
	}
	async unsubscribe(e = this.timeout) {
		return new Promise((t) => {
			this.channelAdapter.unsubscribe(e).receive("ok", () => t("ok")).receive("timeout", () => t("timed out")).receive("error", () => t("error"));
		});
	}
	teardown() {
		this.channelAdapter.teardown();
	}
	async _fetchWithTimeout(e, t, n) {
		let r = new AbortController(), i = setTimeout(() => r.abort(), n), a = await this.socket.fetch(e, Object.assign(Object.assign({}, t), { signal: r.signal }));
		return clearTimeout(i), a;
	}
	_on(e, t, n) {
		let r = e.toLocaleLowerCase(), i = {
			type: r,
			filter: t,
			callback: n,
			ref: this.channelAdapter.on(e, n)
		};
		return this.bindings[r] ? this.bindings[r].push(i) : this.bindings[r] = [i], this._updateFilterMessage(), this;
	}
	_onClose(e) {
		this.channelAdapter.onClose(e);
	}
	_onError(e) {
		this.channelAdapter.onError(e);
	}
	_updateFilterMessage() {
		this.channelAdapter.updateFilterBindings((e, t, n) => {
			let r = e.event.toLocaleLowerCase();
			if (this._notThisChannelEvent(r, n)) return !1;
			let i = this.bindings[r]?.find((t) => t.ref === e.ref);
			if (!i) return !0;
			if ([
				"broadcast",
				"presence",
				"postgres_changes"
			].includes(r)) if ("id" in i) {
				let e = i.id, n = i.filter?.event;
				return e && t.ids?.includes(e) && (n === "*" || n?.toLocaleLowerCase() === t.data?.type.toLocaleLowerCase());
			} else {
				let e = (i?.filter?.event)?.toLocaleLowerCase();
				return e === "*" || e === (t?.event)?.toLocaleLowerCase();
			}
			else return i.type.toLocaleLowerCase() === r;
		});
	}
	_notThisChannelEvent(e, t) {
		let { close: n, error: r, leave: i, join: a } = an;
		return t && [
			n,
			r,
			i,
			a
		].includes(e) && t !== this.joinPush.ref;
	}
	_updateFilterTransform() {
		this.channelAdapter.updatePayloadTransform((e, t, n) => {
			if (typeof t == "object" && "ids" in t) {
				let e = t.data, { schema: n, table: r, commit_timestamp: i, type: a, errors: o } = e;
				return Object.assign(Object.assign({}, {
					schema: n,
					table: r,
					commit_timestamp: i,
					eventType: a,
					new: {},
					old: {},
					errors: o
				}), this._getPayloadRecords(e));
			}
			return t;
		});
	}
	copyBindings(e) {
		if (this.joinedOnce) throw Error("cannot copy bindings into joined channel");
		for (let t in e.bindings) for (let n of e.bindings[t]) this._on(n.type, n.filter, n.callback);
	}
	static isFilterValueEqual(e, t) {
		return (e ?? void 0) === (t ?? void 0);
	}
	_getPayloadRecords(e) {
		let t = {
			new: {},
			old: {}
		};
		return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = cn(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = cn(e.columns, e.old_record)), t;
	}
}, Zn = class {
	constructor(e, t) {
		this.socket = new In(e, t);
	}
	get timeout() {
		return this.socket.timeout;
	}
	get endPoint() {
		return this.socket.endPoint;
	}
	get transport() {
		return this.socket.transport;
	}
	get heartbeatIntervalMs() {
		return this.socket.heartbeatIntervalMs;
	}
	get heartbeatCallback() {
		return this.socket.heartbeatCallback;
	}
	set heartbeatCallback(e) {
		this.socket.heartbeatCallback = e;
	}
	get heartbeatTimer() {
		return this.socket.heartbeatTimer;
	}
	get pendingHeartbeatRef() {
		return this.socket.pendingHeartbeatRef;
	}
	get reconnectTimer() {
		return this.socket.reconnectTimer;
	}
	get vsn() {
		return this.socket.vsn;
	}
	get encode() {
		return this.socket.encode;
	}
	get decode() {
		return this.socket.decode;
	}
	get reconnectAfterMs() {
		return this.socket.reconnectAfterMs;
	}
	get sendBuffer() {
		return this.socket.sendBuffer;
	}
	get stateChangeCallbacks() {
		return this.socket.stateChangeCallbacks;
	}
	connect() {
		this.socket.connect();
	}
	disconnect(e, t, n, r = 1e4) {
		return new Promise((i) => {
			setTimeout(() => i("timeout"), r), this.socket.disconnect(() => {
				e(), i("ok");
			}, t, n);
		});
	}
	push(e) {
		this.socket.push(e);
	}
	log(e, t, n) {
		this.socket.log(e, t, n);
	}
	makeRef() {
		return this.socket.makeRef();
	}
	onOpen(e) {
		this.socket.onOpen(e);
	}
	onClose(e) {
		this.socket.onClose(e);
	}
	onError(e) {
		this.socket.onError(e);
	}
	onMessage(e) {
		this.socket.onMessage(e);
	}
	isConnected() {
		return this.socket.isConnected();
	}
	isConnecting() {
		return this.socket.connectionState() == on.connecting;
	}
	isDisconnecting() {
		return this.socket.connectionState() == on.closing;
	}
	connectionState() {
		return this.socket.connectionState();
	}
	endPointURL() {
		return this.socket.endPointURL();
	}
	sendHeartbeat() {
		this.socket.sendHeartbeat();
	}
	getSocket() {
		return this.socket;
	}
}, Qn = {
	HEARTBEAT_INTERVAL: 25e3,
	RECONNECT_DELAY: 10,
	HEARTBEAT_TIMEOUT_FALLBACK: 100
}, $n = [
	1e3,
	2e3,
	5e3,
	1e4
], er = 1e4, tr = "\n  addEventListener(\"message\", (e) => {\n    if (e.data.event === \"start\") {\n      setInterval(() => postMessage({ event: \"keepAlive\" }), e.data.interval);\n    }\n  });", nr = class {
	get endPoint() {
		return this.socketAdapter.endPoint;
	}
	get timeout() {
		return this.socketAdapter.timeout;
	}
	get transport() {
		return this.socketAdapter.transport;
	}
	get heartbeatCallback() {
		return this.socketAdapter.heartbeatCallback;
	}
	get heartbeatIntervalMs() {
		return this.socketAdapter.heartbeatIntervalMs;
	}
	get heartbeatTimer() {
		return this.worker ? this._workerHeartbeatTimer : this.socketAdapter.heartbeatTimer;
	}
	get pendingHeartbeatRef() {
		return this.worker ? this._pendingWorkerHeartbeatRef : this.socketAdapter.pendingHeartbeatRef;
	}
	get reconnectTimer() {
		return this.socketAdapter.reconnectTimer;
	}
	get vsn() {
		return this.socketAdapter.vsn;
	}
	get encode() {
		return this.socketAdapter.encode;
	}
	get decode() {
		return this.socketAdapter.decode;
	}
	get reconnectAfterMs() {
		return this.socketAdapter.reconnectAfterMs;
	}
	get sendBuffer() {
		return this.socketAdapter.sendBuffer;
	}
	get stateChangeCallbacks() {
		return this.socketAdapter.stateChangeCallbacks;
	}
	constructor(e, t) {
		if (this.channels = [], this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = "", this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new sn(), this._manuallySetToken = !1, this._authPromise = null, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._pendingDisconnectTimer = null, this._disconnectOnEmptyChannelsAfterMs = 0, this._resolveFetch = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), !t?.params?.apikey) throw Error("API key is required to connect to Realtime");
		this.apiKey = t.params.apikey;
		let n = this._initializeOptions(t);
		this.socketAdapter = new Zn(e, n), this.httpEndpoint = _n(e), this.fetch = this._resolveFetch(t?.fetch);
	}
	connect() {
		if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
			this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this._setupConnectionHandlers();
			try {
				this.socketAdapter.connect();
			} catch (e) {
				let t = e.message;
				throw t.includes("Node.js") ? Error(`${t}\n\nTo use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : Error(`WebSocket not available: ${t}`);
			}
			this._handleNodeJsRaceCondition();
		}
	}
	endpointURL() {
		return this.socketAdapter.endPointURL();
	}
	async disconnect(e, t) {
		return this._cancelPendingDisconnect(), this.isDisconnecting() ? "ok" : await this.socketAdapter.disconnect(() => {
			clearInterval(this._workerHeartbeatTimer), this._terminateWorker();
		}, e, t);
	}
	getChannels() {
		return this.channels;
	}
	async removeChannel(e) {
		let t = await e.unsubscribe();
		return t === "ok" && e.teardown(), t;
	}
	async removeAllChannels() {
		let e = this.channels.map(async (e) => {
			let t = await e.unsubscribe();
			return e.teardown(), t;
		}), t = await Promise.all(e);
		return await this.disconnect(), t;
	}
	log(e, t, n) {
		this.socketAdapter.log(e, t, n);
	}
	connectionState() {
		return this.socketAdapter.connectionState() || on.closed;
	}
	isConnected() {
		return this.socketAdapter.isConnected();
	}
	isConnecting() {
		return this.socketAdapter.isConnecting();
	}
	isDisconnecting() {
		return this.socketAdapter.isDisconnecting();
	}
	channel(e, t = { config: {} }) {
		let n = `realtime:${e}`, r = this.getChannels().find((e) => e.topic === n);
		if (r) return r;
		{
			let n = new Xn(`realtime:${e}`, t, this);
			return this._cancelPendingDisconnect(), this.channels.push(n), n;
		}
	}
	push(e) {
		this.socketAdapter.push(e);
	}
	async setAuth(e = null) {
		this._authPromise = this._performAuth(e);
		try {
			await this._authPromise;
		} finally {
			this._authPromise = null;
		}
	}
	_isManualToken() {
		return this._manuallySetToken;
	}
	async sendHeartbeat() {
		this.socketAdapter.sendHeartbeat();
	}
	onHeartbeat(e) {
		this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e);
	}
	_makeRef() {
		return this.socketAdapter.makeRef();
	}
	_remove(e) {
		this.channels = this.channels.filter((t) => t.topic !== e.topic), this.channels.length === 0 && (this.log("transport", "no channels remaining, scheduling disconnect"), this._schedulePendingDisconnect());
	}
	_schedulePendingDisconnect() {
		if (this._cancelPendingDisconnect(), this._disconnectOnEmptyChannelsAfterMs === 0) {
			this.log("transport", "disconnecting immediately - no channels"), this.disconnect();
			return;
		}
		this._pendingDisconnectTimer = setTimeout(() => {
			this._pendingDisconnectTimer = null, this.channels.length === 0 && (this.log("transport", "deferred disconnect fired - no channels, disconnecting"), this.disconnect());
		}, this._disconnectOnEmptyChannelsAfterMs), this.log("transport", `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`);
	}
	_cancelPendingDisconnect() {
		this._pendingDisconnectTimer !== null && (this.log("transport", "pending disconnect cancelled - channel activity detected"), clearTimeout(this._pendingDisconnectTimer), this._pendingDisconnectTimer = null);
	}
	async _performAuth(e = null) {
		let t, n = !1;
		if (e) t = e, n = !0;
		else if (this.accessToken) try {
			t = await this.accessToken();
		} catch (e) {
			this.log("error", "Error fetching access token from callback", e), t = this.accessTokenValue;
		}
		else t = this.accessTokenValue;
		n ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1), this.accessTokenValue != t && (this.accessTokenValue = t, this.channels.forEach((e) => {
			let n = {
				access_token: t,
				version: Qt
			};
			t && e.updateJoinPayload(n), e.joinedOnce && e.channelAdapter.isJoined() && e.channelAdapter.push(an.access_token, { access_token: t });
		}));
	}
	async _waitForAuthIfNeeded() {
		this._authPromise && await this._authPromise;
	}
	_setAuthSafely(e = "general") {
		this._isManualToken() || this.setAuth().catch((t) => {
			this.log("error", `Error setting auth in ${e}`, t);
		});
	}
	_setupConnectionHandlers() {
		this.socketAdapter.onOpen(() => {
			(this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch((e) => {
				this.log("error", "error waiting for auth on connect", e);
			}), this.worker && !this.workerRef && this._startWorkerHeartbeat();
		}), this.socketAdapter.onClose(() => {
			this.worker && this.workerRef && this._terminateWorker();
		}), this.socketAdapter.onMessage((e) => {
			e.ref && e.ref === this._pendingWorkerHeartbeatRef && (this._pendingWorkerHeartbeatRef = null);
		});
	}
	_handleNodeJsRaceCondition() {
		this.socketAdapter.isConnected() && this.socketAdapter.getSocket().onConnOpen();
	}
	_wrapHeartbeatCallback(e) {
		return (t, n) => {
			t == "sent" && this._setAuthSafely(), e && e(t, n);
		};
	}
	_startWorkerHeartbeat() {
		this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
		let e = this._workerObjectUrl(this.workerUrl);
		this.workerRef = new Worker(e), this.workerRef.onerror = (e) => {
			this.log("worker", "worker error", e.message), this._terminateWorker(), this.disconnect();
		}, this.workerRef.onmessage = (e) => {
			e.data.event === "keepAlive" && this.sendHeartbeat();
		}, this.workerRef.postMessage({
			event: "start",
			interval: this.heartbeatIntervalMs
		});
	}
	_terminateWorker() {
		this.workerRef &&= (this.log("worker", "terminating worker"), this.workerRef.terminate(), void 0);
	}
	_workerObjectUrl(e) {
		let t;
		if (e) t = e;
		else {
			let e = new Blob([tr], { type: "application/javascript" });
			t = URL.createObjectURL(e);
		}
		return t;
	}
	_initializeOptions(e) {
		this.worker = e?.worker ?? !1, this.accessToken = e?.accessToken ?? null;
		let t = {};
		t.timeout = e?.timeout ?? nn, t.heartbeatIntervalMs = e?.heartbeatIntervalMs ?? Qn.HEARTBEAT_INTERVAL, this._disconnectOnEmptyChannelsAfterMs = e?.disconnectOnEmptyChannelsAfterMs ?? 2 * (e?.heartbeatIntervalMs ?? Qn.HEARTBEAT_INTERVAL), t.transport = e?.transport ?? Zt.getWebSocketConstructor(), t.params = e?.params, t.logger = e?.logger, t.heartbeatCallback = this._wrapHeartbeatCallback(e?.heartbeatCallback), t.reconnectAfterMs = e?.reconnectAfterMs ?? ((e) => $n[e - 1] || er);
		let n, r, i = e?.vsn ?? tn;
		switch (i) {
			case $t:
				n = (e, t) => t(JSON.stringify(e)), r = (e, t) => t(JSON.parse(e));
				break;
			case en:
				n = this.serializer.encode.bind(this.serializer), r = this.serializer.decode.bind(this.serializer);
				break;
			default: throw Error(`Unsupported serializer version: ${t.vsn}`);
		}
		if (t.vsn = i, t.encode = e?.encode ?? n, t.decode = e?.decode ?? r, t.beforeReconnect = this._reconnectAuth.bind(this), (e?.logLevel || e?.log_level) && (this.logLevel = e.logLevel || e.log_level, t.params = Object.assign(Object.assign({}, t.params), { log_level: this.logLevel })), this.worker) {
			if (typeof window < "u" && !window.Worker) throw Error("Web Worker is not supported");
			this.workerUrl = e?.workerUrl, t.autoSendHeartbeat = !this.worker;
		}
		return t;
	}
	async _reconnectAuth() {
		await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
	}
}, rr = class extends Error {
	constructor(e, t) {
		super(e), this.name = "IcebergError", this.status = t.status, this.icebergType = t.icebergType, this.icebergCode = t.icebergCode, this.details = t.details, this.isCommitStateUnknown = t.icebergType === "CommitStateUnknownException" || [
			500,
			502,
			504
		].includes(t.status) && t.icebergType?.includes("CommitState") === !0;
	}
	isNotFound() {
		return this.status === 404;
	}
	isConflict() {
		return this.status === 409;
	}
	isAuthenticationTimeout() {
		return this.status === 419;
	}
};
function ir(e, t, n) {
	let r = new URL(t, e);
	if (n) for (let [e, t] of Object.entries(n)) t !== void 0 && r.searchParams.set(e, t);
	return r.toString();
}
async function ar(e) {
	return !e || e.type === "none" ? {} : e.type === "bearer" ? { Authorization: `Bearer ${e.token}` } : e.type === "header" ? { [e.name]: e.value } : e.type === "custom" ? await e.getHeaders() : {};
}
function or(e) {
	let t = e.fetchImpl ?? globalThis.fetch;
	return { async request({ method: n, path: r, query: i, body: a, headers: o }) {
		let s = ir(e.baseUrl, r, i), c = await ar(e.auth), l = await t(s, {
			method: n,
			headers: {
				...a ? { "Content-Type": "application/json" } : {},
				...c,
				...o
			},
			body: a ? JSON.stringify(a) : void 0
		}), u = await l.text(), d = (l.headers.get("content-type") || "").includes("application/json"), f = d && u ? JSON.parse(u) : u;
		if (!l.ok) {
			let e = d ? f : void 0, t = e?.error;
			throw new rr(t?.message ?? `Request failed with status ${l.status}`, {
				status: l.status,
				icebergType: t?.type,
				icebergCode: t?.code,
				details: e
			});
		}
		return {
			status: l.status,
			headers: l.headers,
			data: f
		};
	} };
}
function sr(e) {
	return e.join("");
}
var cr = class {
	constructor(e, t = "") {
		this.client = e, this.prefix = t;
	}
	async listNamespaces(e) {
		let t = e ? { parent: sr(e.namespace) } : void 0;
		return (await this.client.request({
			method: "GET",
			path: `${this.prefix}/namespaces`,
			query: t
		})).data.namespaces.map((e) => ({ namespace: e }));
	}
	async createNamespace(e, t) {
		let n = {
			namespace: e.namespace,
			properties: t?.properties
		};
		return (await this.client.request({
			method: "POST",
			path: `${this.prefix}/namespaces`,
			body: n
		})).data;
	}
	async dropNamespace(e) {
		await this.client.request({
			method: "DELETE",
			path: `${this.prefix}/namespaces/${sr(e.namespace)}`
		});
	}
	async loadNamespaceMetadata(e) {
		return { properties: (await this.client.request({
			method: "GET",
			path: `${this.prefix}/namespaces/${sr(e.namespace)}`
		})).data.properties };
	}
	async namespaceExists(e) {
		try {
			return await this.client.request({
				method: "HEAD",
				path: `${this.prefix}/namespaces/${sr(e.namespace)}`
			}), !0;
		} catch (e) {
			if (e instanceof rr && e.status === 404) return !1;
			throw e;
		}
	}
	async createNamespaceIfNotExists(e, t) {
		try {
			return await this.createNamespace(e, t);
		} catch (e) {
			if (e instanceof rr && e.status === 409) return;
			throw e;
		}
	}
};
function lr(e) {
	return e.join("");
}
var ur = class {
	constructor(e, t = "", n) {
		this.client = e, this.prefix = t, this.accessDelegation = n;
	}
	async listTables(e) {
		return (await this.client.request({
			method: "GET",
			path: `${this.prefix}/namespaces/${lr(e.namespace)}/tables`
		})).data.identifiers;
	}
	async createTable(e, t) {
		let n = {};
		return this.accessDelegation && (n["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
			method: "POST",
			path: `${this.prefix}/namespaces/${lr(e.namespace)}/tables`,
			body: t,
			headers: n
		})).data.metadata;
	}
	async updateTable(e, t) {
		let n = await this.client.request({
			method: "POST",
			path: `${this.prefix}/namespaces/${lr(e.namespace)}/tables/${e.name}`,
			body: t
		});
		return {
			"metadata-location": n.data["metadata-location"],
			metadata: n.data.metadata
		};
	}
	async dropTable(e, t) {
		await this.client.request({
			method: "DELETE",
			path: `${this.prefix}/namespaces/${lr(e.namespace)}/tables/${e.name}`,
			query: { purgeRequested: String(t?.purge ?? !1) }
		});
	}
	async loadTable(e) {
		let t = {};
		return this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
			method: "GET",
			path: `${this.prefix}/namespaces/${lr(e.namespace)}/tables/${e.name}`,
			headers: t
		})).data.metadata;
	}
	async tableExists(e) {
		let t = {};
		this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
		try {
			return await this.client.request({
				method: "HEAD",
				path: `${this.prefix}/namespaces/${lr(e.namespace)}/tables/${e.name}`,
				headers: t
			}), !0;
		} catch (e) {
			if (e instanceof rr && e.status === 404) return !1;
			throw e;
		}
	}
	async createTableIfNotExists(e, t) {
		try {
			return await this.createTable(e, t);
		} catch (n) {
			if (n instanceof rr && n.status === 409) return await this.loadTable({
				namespace: e.namespace,
				name: t.name
			});
			throw n;
		}
	}
}, dr = class {
	constructor(e) {
		let t = "v1";
		e.catalogName && (t += `/${e.catalogName}`);
		let n = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
		this.client = or({
			baseUrl: n,
			auth: e.auth,
			fetchImpl: e.fetch
		}), this.accessDelegation = e.accessDelegation?.join(","), this.namespaceOps = new cr(this.client, t), this.tableOps = new ur(this.client, t, this.accessDelegation);
	}
	async listNamespaces(e) {
		return this.namespaceOps.listNamespaces(e);
	}
	async createNamespace(e, t) {
		return this.namespaceOps.createNamespace(e, t);
	}
	async dropNamespace(e) {
		await this.namespaceOps.dropNamespace(e);
	}
	async loadNamespaceMetadata(e) {
		return this.namespaceOps.loadNamespaceMetadata(e);
	}
	async listTables(e) {
		return this.tableOps.listTables(e);
	}
	async createTable(e, t) {
		return this.tableOps.createTable(e, t);
	}
	async updateTable(e, t) {
		return this.tableOps.updateTable(e, t);
	}
	async dropTable(e, t) {
		await this.tableOps.dropTable(e, t);
	}
	async loadTable(e) {
		return this.tableOps.loadTable(e);
	}
	async namespaceExists(e) {
		return this.namespaceOps.namespaceExists(e);
	}
	async tableExists(e) {
		return this.tableOps.tableExists(e);
	}
	async createNamespaceIfNotExists(e, t) {
		return this.namespaceOps.createNamespaceIfNotExists(e, t);
	}
	async createTableIfNotExists(e, t) {
		return this.tableOps.createTableIfNotExists(e, t);
	}
};
//#endregion
//#region node_modules/@supabase/storage-js/dist/index.mjs
function fr(e) {
	"@babel/helpers - typeof";
	return fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, fr(e);
}
function pr(e, t) {
	if (fr(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (fr(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function mr(e) {
	var t = pr(e, "string");
	return fr(t) == "symbol" ? t : t + "";
}
function hr(e, t, n) {
	return (t = mr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function gr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function z(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? gr(Object(n), !0).forEach(function(t) {
			hr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var _r = class extends Error {
	constructor(e, t = "storage", n, r) {
		super(e), this.__isStorageError = !0, this.namespace = t, this.name = t === "vectors" ? "StorageVectorsError" : "StorageError", this.status = n, this.statusCode = r;
	}
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			status: this.status,
			statusCode: this.statusCode
		};
	}
};
function vr(e) {
	return typeof e == "object" && !!e && "__isStorageError" in e;
}
var yr = class extends _r {
	constructor(e, t, n, r = "storage") {
		super(e, r, t, n), this.name = r === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = t, this.statusCode = n;
	}
	toJSON() {
		return z({}, super.toJSON());
	}
}, br = class extends _r {
	constructor(e, t, n = "storage") {
		super(e, n), this.name = n === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = t;
	}
};
function xr(e, t, n) {
	let r = z({}, e), i = t.toLowerCase();
	for (let e of Object.keys(r)) e.toLowerCase() === i && delete r[e];
	return r[i] = n, r;
}
function Sr(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n.toLowerCase()] = r;
	return t;
}
var Cr = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), wr = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Tr = (e) => {
	if (Array.isArray(e)) return e.map((e) => Tr(e));
	if (typeof e == "function" || e !== Object(e)) return e;
	let t = {};
	return Object.entries(e).forEach(([e, n]) => {
		let r = e.replace(/([-_][a-z])/gi, (e) => e.toUpperCase().replace(/[-_]/g, ""));
		t[r] = Tr(n);
	}), t;
}, Er = (e) => !e || typeof e != "string" || e.length === 0 || e.length > 100 || e.trim() !== e || e.includes("/") || e.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e), Dr = (e) => e.msg || e.message || e.error_description || (typeof e.error == "string" ? e.error : e.error?.message) || JSON.stringify(e), Or = async (e, t, n, r) => {
	if (typeof e == "object" && e && typeof e.json == "function") {
		let n = e, i = parseInt(n.status, 10);
		Number.isFinite(i) || (i = 500), n.json().then((e) => {
			let n = e?.statusCode || e?.code || i + "";
			t(new yr(Dr(e), i, n, r));
		}).catch(() => {
			let e = i + "";
			t(new yr(n.statusText || `HTTP ${i} error`, i, e, r));
		});
	} else t(new br(Dr(e), e, r));
}, kr = (e, t, n, r) => {
	let i = {
		method: e,
		headers: t?.headers || {}
	};
	if (e === "GET" || e === "HEAD" || !r) return z(z({}, i), n);
	if (wr(r)) {
		let e = t?.headers || {}, n;
		for (let [t, r] of Object.entries(e)) t.toLowerCase() === "content-type" && (n = r);
		i.headers = xr(e, "Content-Type", n ?? "application/json"), i.body = JSON.stringify(r);
	} else i.body = r;
	return t?.duplex && (i.duplex = t.duplex), z(z({}, i), n);
};
async function Ar(e, t, n, r, i, a, o) {
	return new Promise((s, c) => {
		e(n, kr(t, r, i, a)).then((e) => {
			if (!e.ok) throw e;
			if (r?.noResolveJson) return e;
			if (o === "vectors") {
				let t = e.headers.get("content-type");
				if (e.headers.get("content-length") === "0" || e.status === 204 || !t || !t.includes("application/json")) return {};
			}
			return e.json();
		}).then((e) => s(e)).catch((e) => Or(e, c, r, o));
	});
}
function jr(e = "storage") {
	return {
		get: async (t, n, r, i) => Ar(t, "GET", n, r, i, void 0, e),
		post: async (t, n, r, i, a) => Ar(t, "POST", n, i, a, r, e),
		put: async (t, n, r, i, a) => Ar(t, "PUT", n, i, a, r, e),
		head: async (t, n, r, i) => Ar(t, "HEAD", n, z(z({}, r), {}, { noResolveJson: !0 }), i, void 0, e),
		remove: async (t, n, r, i, a) => Ar(t, "DELETE", n, i, a, r, e)
	};
}
var { get: Mr, post: B, put: Nr, head: Pr, remove: Fr } = jr("storage"), V = jr("vectors"), Ir = class {
	constructor(e, t = {}, n, r = "storage") {
		this.shouldThrowOnError = !1, this.url = e, this.headers = Sr(t), this.fetch = Cr(n), this.namespace = r;
	}
	throwOnError() {
		return this.shouldThrowOnError = !0, this;
	}
	setHeader(e, t) {
		return this.headers = xr(this.headers, e, t), this;
	}
	async handleOperation(e) {
		var t = this;
		try {
			return {
				data: await e(),
				error: null
			};
		} catch (e) {
			if (t.shouldThrowOnError) throw e;
			if (vr(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
}, Lr = class {
	constructor(e, t) {
		this.downloadFn = e, this.shouldThrowOnError = t;
	}
	then(e, t) {
		return this.execute().then(e, t);
	}
	async execute() {
		var e = this;
		try {
			return {
				data: (await e.downloadFn()).body,
				error: null
			};
		} catch (t) {
			if (e.shouldThrowOnError) throw t;
			if (vr(t)) return {
				data: null,
				error: t
			};
			throw t;
		}
	}
}, Rr = Symbol.toStringTag, zr = class {
	constructor(e, t) {
		this.downloadFn = e, this.shouldThrowOnError = t, this[Rr] = "BlobDownloadBuilder", this.promise = null;
	}
	asStream() {
		return new Lr(this.downloadFn, this.shouldThrowOnError);
	}
	then(e, t) {
		return this.getPromise().then(e, t);
	}
	catch(e) {
		return this.getPromise().catch(e);
	}
	finally(e) {
		return this.getPromise().finally(e);
	}
	getPromise() {
		return this.promise ||= this.execute(), this.promise;
	}
	async execute() {
		var e = this;
		try {
			return {
				data: await (await e.downloadFn()).blob(),
				error: null
			};
		} catch (t) {
			if (e.shouldThrowOnError) throw t;
			if (vr(t)) return {
				data: null,
				error: t
			};
			throw t;
		}
	}
}, Br = {
	limit: 100,
	offset: 0,
	sortBy: {
		column: "name",
		order: "asc"
	}
}, Vr = {
	cacheControl: "3600",
	contentType: "text/plain;charset=UTF-8",
	upsert: !1
}, Hr = class extends Ir {
	constructor(e, t = {}, n, r) {
		super(e, t, r, "storage"), this.bucketId = n;
	}
	async uploadOrUpdate(e, t, n, r) {
		var i = this;
		return i.handleOperation(async () => {
			let a, o = z(z({}, Vr), r), s = z(z({}, i.headers), e === "POST" && { "x-upsert": String(o.upsert) }), c = o.metadata;
			if (typeof Blob < "u" && n instanceof Blob ? (a = new FormData(), a.append("cacheControl", o.cacheControl), c && a.append("metadata", i.encodeMetadata(c)), a.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (a = n, a.has("cacheControl") || a.append("cacheControl", o.cacheControl), c && !a.has("metadata") && a.append("metadata", i.encodeMetadata(c))) : (a = n, s["cache-control"] = `max-age=${o.cacheControl}`, s["content-type"] = o.contentType, c && (s["x-metadata"] = i.toBase64(i.encodeMetadata(c))), (typeof ReadableStream < "u" && a instanceof ReadableStream || a && typeof a == "object" && "pipe" in a && typeof a.pipe == "function") && !o.duplex && (o.duplex = "half")), r?.headers) for (let [e, t] of Object.entries(r.headers)) s = xr(s, e, t);
			let l = i._removeEmptyFolders(t), u = i._getFinalPath(l), d = await (e == "PUT" ? Nr : B)(i.fetch, `${i.url}/object/${u}`, a, z({ headers: s }, o?.duplex ? { duplex: o.duplex } : {}));
			return {
				path: l,
				id: d.Id,
				fullPath: d.Key
			};
		});
	}
	async upload(e, t, n) {
		return this.uploadOrUpdate("POST", e, t, n);
	}
	async uploadToSignedUrl(e, t, n, r) {
		var i = this;
		let a = i._removeEmptyFolders(e), o = i._getFinalPath(a), s = new URL(i.url + `/object/upload/sign/${o}`);
		return s.searchParams.set("token", t), i.handleOperation(async () => {
			let e, t = z(z({}, Vr), r), o = z(z({}, i.headers), { "x-upsert": String(t.upsert) }), c = t.metadata;
			if (typeof Blob < "u" && n instanceof Blob ? (e = new FormData(), e.append("cacheControl", t.cacheControl), c && e.append("metadata", i.encodeMetadata(c)), e.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (e = n, e.has("cacheControl") || e.append("cacheControl", t.cacheControl), c && !e.has("metadata") && e.append("metadata", i.encodeMetadata(c))) : (e = n, o["cache-control"] = `max-age=${t.cacheControl}`, o["content-type"] = t.contentType, c && (o["x-metadata"] = i.toBase64(i.encodeMetadata(c))), (typeof ReadableStream < "u" && e instanceof ReadableStream || e && typeof e == "object" && "pipe" in e && typeof e.pipe == "function") && !t.duplex && (t.duplex = "half")), r?.headers) for (let [e, t] of Object.entries(r.headers)) o = xr(o, e, t);
			return {
				path: a,
				fullPath: (await Nr(i.fetch, s.toString(), e, z({ headers: o }, t?.duplex ? { duplex: t.duplex } : {}))).Key
			};
		});
	}
	async createSignedUploadUrl(e, t) {
		var n = this;
		return n.handleOperation(async () => {
			let r = n._getFinalPath(e), i = z({}, n.headers);
			t?.upsert && (i["x-upsert"] = "true");
			let a = await B(n.fetch, `${n.url}/object/upload/sign/${r}`, {}, { headers: i }), o = new URL(n.url + a.url), s = o.searchParams.get("token");
			if (!s) throw new _r("No token returned by API");
			return {
				signedUrl: o.toString(),
				path: e,
				token: s
			};
		});
	}
	async update(e, t, n) {
		return this.uploadOrUpdate("PUT", e, t, n);
	}
	async move(e, t, n) {
		var r = this;
		return r.handleOperation(async () => await B(r.fetch, `${r.url}/object/move`, {
			bucketId: r.bucketId,
			sourceKey: e,
			destinationKey: t,
			destinationBucket: n?.destinationBucket
		}, { headers: r.headers }));
	}
	async copy(e, t, n) {
		var r = this;
		return r.handleOperation(async () => ({ path: (await B(r.fetch, `${r.url}/object/copy`, {
			bucketId: r.bucketId,
			sourceKey: e,
			destinationKey: t,
			destinationBucket: n?.destinationBucket
		}, { headers: r.headers })).Key }));
	}
	async createSignedUrl(e, t, n) {
		var r = this;
		return r.handleOperation(async () => {
			let i = r._getFinalPath(e), a = typeof n?.transform == "object" && n.transform !== null && Object.keys(n.transform).length > 0, o = await B(r.fetch, `${r.url}/object/sign/${i}`, z({ expiresIn: t }, a ? { transform: n.transform } : {}), { headers: r.headers }), s = new URLSearchParams();
			n?.download && s.set("download", n.download === !0 ? "" : n.download), n?.cacheNonce != null && s.set("cacheNonce", String(n.cacheNonce));
			let c = s.toString();
			return { signedUrl: encodeURI(`${r.url}${o.signedURL}${c ? `&${c}` : ""}`) };
		});
	}
	async createSignedUrls(e, t, n) {
		var r = this;
		return r.handleOperation(async () => {
			let i = await B(r.fetch, `${r.url}/object/sign/${r.bucketId}`, {
				expiresIn: t,
				paths: e
			}, { headers: r.headers }), a = new URLSearchParams();
			n?.download && a.set("download", n.download === !0 ? "" : n.download), n?.cacheNonce != null && a.set("cacheNonce", String(n.cacheNonce));
			let o = a.toString();
			return i.map((e) => z(z({}, e), {}, { signedUrl: e.signedURL ? encodeURI(`${r.url}${e.signedURL}${o ? `&${o}` : ""}`) : null }));
		});
	}
	download(e, t, n) {
		let r = typeof t?.transform == "object" && t.transform !== null && Object.keys(t.transform).length > 0 ? "render/image/authenticated" : "object", i = new URLSearchParams();
		t?.transform && this.applyTransformOptsToQuery(i, t.transform), t?.cacheNonce != null && i.set("cacheNonce", String(t.cacheNonce));
		let a = i.toString(), o = this._getFinalPath(e);
		return new zr(() => Mr(this.fetch, `${this.url}/${r}/${o}${a ? `?${a}` : ""}`, {
			headers: this.headers,
			noResolveJson: !0
		}, n), this.shouldThrowOnError);
	}
	async info(e) {
		var t = this;
		let n = t._getFinalPath(e);
		return t.handleOperation(async () => Tr(await Mr(t.fetch, `${t.url}/object/info/${n}`, { headers: t.headers })));
	}
	async exists(e) {
		var t = this;
		let n = t._getFinalPath(e);
		try {
			return await Pr(t.fetch, `${t.url}/object/${n}`, { headers: t.headers }), {
				data: !0,
				error: null
			};
		} catch (e) {
			if (t.shouldThrowOnError) throw e;
			if (vr(e)) {
				let t = e instanceof yr ? e.status : e instanceof br ? e.originalError?.status : void 0;
				if (t !== void 0 && [400, 404].includes(t)) return {
					data: !1,
					error: e
				};
			}
			throw e;
		}
	}
	getPublicUrl(e, t) {
		let n = this._getFinalPath(e), r = new URLSearchParams();
		t?.download && r.set("download", t.download === !0 ? "" : t.download), t?.transform && this.applyTransformOptsToQuery(r, t.transform), t?.cacheNonce != null && r.set("cacheNonce", String(t.cacheNonce));
		let i = r.toString(), a = typeof t?.transform == "object" && t.transform !== null && Object.keys(t.transform).length > 0 ? "render/image" : "object";
		return { data: { publicUrl: encodeURI(`${this.url}/${a}/public/${n}`) + (i ? `?${i}` : "") } };
	}
	async remove(e) {
		var t = this;
		return t.handleOperation(async () => await Fr(t.fetch, `${t.url}/object/${t.bucketId}`, { prefixes: e }, { headers: t.headers }));
	}
	async list(e, t, n) {
		var r = this;
		return r.handleOperation(async () => {
			let i = z(z(z({}, Br), t), {}, { prefix: e || "" });
			return await B(r.fetch, `${r.url}/object/list/${r.bucketId}`, i, { headers: r.headers }, n);
		});
	}
	async listV2(e, t) {
		var n = this;
		return n.handleOperation(async () => {
			let r = z({}, e);
			return await B(n.fetch, `${n.url}/object/list-v2/${n.bucketId}`, r, { headers: n.headers }, t);
		});
	}
	encodeMetadata(e) {
		return JSON.stringify(e);
	}
	toBase64(e) {
		return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
	}
	_getFinalPath(e) {
		return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
	}
	_removeEmptyFolders(e) {
		return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
	}
	applyTransformOptsToQuery(e, t) {
		return t.width && e.set("width", t.width.toString()), t.height && e.set("height", t.height.toString()), t.resize && e.set("resize", t.resize), t.format && e.set("format", t.format), t.quality && e.set("quality", t.quality.toString()), e;
	}
}, Ur = { "X-Client-Info": "storage-js/2.105.1" }, Wr = class extends Ir {
	constructor(e, t = {}, n, r) {
		let i = new URL(e);
		r?.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase."));
		let a = i.href.replace(/\/$/, ""), o = z(z({}, Ur), t);
		super(a, o, n, "storage");
	}
	async listBuckets(e) {
		var t = this;
		return t.handleOperation(async () => {
			let n = t.listBucketOptionsToQueryString(e);
			return await Mr(t.fetch, `${t.url}/bucket${n}`, { headers: t.headers });
		});
	}
	async getBucket(e) {
		var t = this;
		return t.handleOperation(async () => await Mr(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }));
	}
	async createBucket(e, t = { public: !1 }) {
		var n = this;
		return n.handleOperation(async () => await B(n.fetch, `${n.url}/bucket`, {
			id: e,
			name: e,
			type: t.type,
			public: t.public,
			file_size_limit: t.fileSizeLimit,
			allowed_mime_types: t.allowedMimeTypes
		}, { headers: n.headers }));
	}
	async updateBucket(e, t) {
		var n = this;
		return n.handleOperation(async () => await Nr(n.fetch, `${n.url}/bucket/${e}`, {
			id: e,
			name: e,
			public: t.public,
			file_size_limit: t.fileSizeLimit,
			allowed_mime_types: t.allowedMimeTypes
		}, { headers: n.headers }));
	}
	async emptyBucket(e) {
		var t = this;
		return t.handleOperation(async () => await B(t.fetch, `${t.url}/bucket/${e}/empty`, {}, { headers: t.headers }));
	}
	async deleteBucket(e) {
		var t = this;
		return t.handleOperation(async () => await Fr(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
	}
	listBucketOptionsToQueryString(e) {
		let t = {};
		return e && ("limit" in e && (t.limit = String(e.limit)), "offset" in e && (t.offset = String(e.offset)), e.search && (t.search = e.search), e.sortColumn && (t.sortColumn = e.sortColumn), e.sortOrder && (t.sortOrder = e.sortOrder)), Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : "";
	}
}, Gr = class extends Ir {
	constructor(e, t = {}, n) {
		let r = e.replace(/\/$/, ""), i = z(z({}, Ur), t);
		super(r, i, n, "storage");
	}
	async createBucket(e) {
		var t = this;
		return t.handleOperation(async () => await B(t.fetch, `${t.url}/bucket`, { name: e }, { headers: t.headers }));
	}
	async listBuckets(e) {
		var t = this;
		return t.handleOperation(async () => {
			let n = new URLSearchParams();
			e?.limit !== void 0 && n.set("limit", e.limit.toString()), e?.offset !== void 0 && n.set("offset", e.offset.toString()), e?.sortColumn && n.set("sortColumn", e.sortColumn), e?.sortOrder && n.set("sortOrder", e.sortOrder), e?.search && n.set("search", e.search);
			let r = n.toString(), i = r ? `${t.url}/bucket?${r}` : `${t.url}/bucket`;
			return await Mr(t.fetch, i, { headers: t.headers });
		});
	}
	async deleteBucket(e) {
		var t = this;
		return t.handleOperation(async () => await Fr(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
	}
	from(e) {
		var t = this;
		if (!Er(e)) throw new _r("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
		let n = new dr({
			baseUrl: this.url,
			catalogName: e,
			auth: {
				type: "custom",
				getHeaders: async () => t.headers
			},
			fetch: this.fetch
		}), r = this.shouldThrowOnError;
		return new Proxy(n, { get(e, t) {
			let n = e[t];
			return typeof n == "function" ? async (...t) => {
				try {
					return {
						data: await n.apply(e, t),
						error: null
					};
				} catch (e) {
					if (r) throw e;
					return {
						data: null,
						error: e
					};
				}
			} : n;
		} });
	}
}, Kr = class extends Ir {
	constructor(e, t = {}, n) {
		let r = e.replace(/\/$/, ""), i = z(z({}, Ur), {}, { "Content-Type": "application/json" }, t);
		super(r, i, n, "vectors");
	}
	async createIndex(e) {
		var t = this;
		return t.handleOperation(async () => await V.post(t.fetch, `${t.url}/CreateIndex`, e, { headers: t.headers }) || {});
	}
	async getIndex(e, t) {
		var n = this;
		return n.handleOperation(async () => await V.post(n.fetch, `${n.url}/GetIndex`, {
			vectorBucketName: e,
			indexName: t
		}, { headers: n.headers }));
	}
	async listIndexes(e) {
		var t = this;
		return t.handleOperation(async () => await V.post(t.fetch, `${t.url}/ListIndexes`, e, { headers: t.headers }));
	}
	async deleteIndex(e, t) {
		var n = this;
		return n.handleOperation(async () => await V.post(n.fetch, `${n.url}/DeleteIndex`, {
			vectorBucketName: e,
			indexName: t
		}, { headers: n.headers }) || {});
	}
}, qr = class extends Ir {
	constructor(e, t = {}, n) {
		let r = e.replace(/\/$/, ""), i = z(z({}, Ur), {}, { "Content-Type": "application/json" }, t);
		super(r, i, n, "vectors");
	}
	async putVectors(e) {
		var t = this;
		if (e.vectors.length < 1 || e.vectors.length > 500) throw Error("Vector batch size must be between 1 and 500 items");
		return t.handleOperation(async () => await V.post(t.fetch, `${t.url}/PutVectors`, e, { headers: t.headers }) || {});
	}
	async getVectors(e) {
		var t = this;
		return t.handleOperation(async () => await V.post(t.fetch, `${t.url}/GetVectors`, e, { headers: t.headers }));
	}
	async listVectors(e) {
		var t = this;
		if (e.segmentCount !== void 0) {
			if (e.segmentCount < 1 || e.segmentCount > 16) throw Error("segmentCount must be between 1 and 16");
			if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)) throw Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`);
		}
		return t.handleOperation(async () => await V.post(t.fetch, `${t.url}/ListVectors`, e, { headers: t.headers }));
	}
	async queryVectors(e) {
		var t = this;
		return t.handleOperation(async () => await V.post(t.fetch, `${t.url}/QueryVectors`, e, { headers: t.headers }));
	}
	async deleteVectors(e) {
		var t = this;
		if (e.keys.length < 1 || e.keys.length > 500) throw Error("Keys batch size must be between 1 and 500 items");
		return t.handleOperation(async () => await V.post(t.fetch, `${t.url}/DeleteVectors`, e, { headers: t.headers }) || {});
	}
}, Jr = class extends Ir {
	constructor(e, t = {}, n) {
		let r = e.replace(/\/$/, ""), i = z(z({}, Ur), {}, { "Content-Type": "application/json" }, t);
		super(r, i, n, "vectors");
	}
	async createBucket(e) {
		var t = this;
		return t.handleOperation(async () => await V.post(t.fetch, `${t.url}/CreateVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
	}
	async getBucket(e) {
		var t = this;
		return t.handleOperation(async () => await V.post(t.fetch, `${t.url}/GetVectorBucket`, { vectorBucketName: e }, { headers: t.headers }));
	}
	async listBuckets(e = {}) {
		var t = this;
		return t.handleOperation(async () => await V.post(t.fetch, `${t.url}/ListVectorBuckets`, e, { headers: t.headers }));
	}
	async deleteBucket(e) {
		var t = this;
		return t.handleOperation(async () => await V.post(t.fetch, `${t.url}/DeleteVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
	}
}, Yr = class extends Jr {
	constructor(e, t = {}) {
		super(e, t.headers || {}, t.fetch);
	}
	from(e) {
		return new Xr(this.url, this.headers, e, this.fetch);
	}
	async createBucket(e) {
		var t = () => super.createBucket, n = this;
		return t().call(n, e);
	}
	async getBucket(e) {
		var t = () => super.getBucket, n = this;
		return t().call(n, e);
	}
	async listBuckets(e = {}) {
		var t = () => super.listBuckets, n = this;
		return t().call(n, e);
	}
	async deleteBucket(e) {
		var t = () => super.deleteBucket, n = this;
		return t().call(n, e);
	}
}, Xr = class extends Kr {
	constructor(e, t, n, r) {
		super(e, t, r), this.vectorBucketName = n;
	}
	async createIndex(e) {
		var t = () => super.createIndex, n = this;
		return t().call(n, z(z({}, e), {}, { vectorBucketName: n.vectorBucketName }));
	}
	async listIndexes(e = {}) {
		var t = () => super.listIndexes, n = this;
		return t().call(n, z(z({}, e), {}, { vectorBucketName: n.vectorBucketName }));
	}
	async getIndex(e) {
		var t = () => super.getIndex, n = this;
		return t().call(n, n.vectorBucketName, e);
	}
	async deleteIndex(e) {
		var t = () => super.deleteIndex, n = this;
		return t().call(n, n.vectorBucketName, e);
	}
	index(e) {
		return new Zr(this.url, this.headers, this.vectorBucketName, e, this.fetch);
	}
}, Zr = class extends qr {
	constructor(e, t, n, r, i) {
		super(e, t, i), this.vectorBucketName = n, this.indexName = r;
	}
	async putVectors(e) {
		var t = () => super.putVectors, n = this;
		return t().call(n, z(z({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
	async getVectors(e) {
		var t = () => super.getVectors, n = this;
		return t().call(n, z(z({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
	async listVectors(e = {}) {
		var t = () => super.listVectors, n = this;
		return t().call(n, z(z({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
	async queryVectors(e) {
		var t = () => super.queryVectors, n = this;
		return t().call(n, z(z({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
	async deleteVectors(e) {
		var t = () => super.deleteVectors, n = this;
		return t().call(n, z(z({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
}, Qr = class extends Wr {
	constructor(e, t = {}, n, r) {
		super(e, t, n, r);
	}
	from(e) {
		return new Hr(this.url, this.headers, e, this.fetch);
	}
	get vectors() {
		return new Yr(this.url + "/vector", {
			headers: this.headers,
			fetch: this.fetch
		});
	}
	get analytics() {
		return new Gr(this.url + "/iceberg", this.headers, this.fetch);
	}
}, $r = "2.105.1", ei = 30 * 1e3, ti = 3 * ei, ni = "http://localhost:9999", ri = "supabase.auth.token", ii = { "X-Client-Info": `gotrue-js/${$r}` }, ai = "X-Supabase-Api-Version", oi = { "2024-01-01": {
	timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
	name: "2024-01-01"
} }, si = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, ci = class extends Error {
	constructor(e, t, n) {
		super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = n;
	}
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			status: this.status,
			code: this.code
		};
	}
};
function H(e) {
	return typeof e == "object" && !!e && "__isAuthError" in e;
}
var li = class extends ci {
	constructor(e, t, n) {
		super(e, t, n), this.name = "AuthApiError", this.status = t, this.code = n;
	}
};
function ui(e) {
	return H(e) && e.name === "AuthApiError";
}
var U = class extends ci {
	constructor(e, t) {
		super(e), this.name = "AuthUnknownError", this.originalError = t;
	}
}, di = class extends ci {
	constructor(e, t, n, r) {
		super(e, n, r), this.name = t, this.status = n;
	}
}, W = class extends di {
	constructor() {
		super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
	}
};
function fi(e) {
	return H(e) && e.name === "AuthSessionMissingError";
}
var pi = class extends di {
	constructor() {
		super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
	}
}, mi = class extends di {
	constructor(e) {
		super(e, "AuthInvalidCredentialsError", 400, void 0);
	}
}, hi = class extends di {
	constructor(e, t = null) {
		super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t;
	}
	toJSON() {
		return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
	}
};
function gi(e) {
	return H(e) && e.name === "AuthImplicitGrantRedirectError";
}
var _i = class extends di {
	constructor(e, t = null) {
		super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t;
	}
	toJSON() {
		return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
	}
}, vi = class extends di {
	constructor() {
		super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
	}
}, yi = class extends di {
	constructor(e, t) {
		super(e, "AuthRetryableFetchError", t, void 0);
	}
};
function bi(e) {
	return H(e) && e.name === "AuthRetryableFetchError";
}
var xi = class extends di {
	constructor(e, t, n) {
		super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = n;
	}
	toJSON() {
		return Object.assign(Object.assign({}, super.toJSON()), { reasons: this.reasons });
	}
}, Si = class extends di {
	constructor(e) {
		super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
	}
}, Ci = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), wi = " 	\n\r=".split(""), Ti = (() => {
	let e = Array(128);
	for (let t = 0; t < e.length; t += 1) e[t] = -1;
	for (let t = 0; t < wi.length; t += 1) e[wi[t].charCodeAt(0)] = -2;
	for (let t = 0; t < Ci.length; t += 1) e[Ci[t].charCodeAt(0)] = t;
	return e;
})();
function Ei(e, t, n) {
	if (e !== null) for (t.queue = t.queue << 8 | e, t.queuedBits += 8; t.queuedBits >= 6;) n(Ci[t.queue >> t.queuedBits - 6 & 63]), t.queuedBits -= 6;
	else if (t.queuedBits > 0) for (t.queue <<= 6 - t.queuedBits, t.queuedBits = 6; t.queuedBits >= 6;) n(Ci[t.queue >> t.queuedBits - 6 & 63]), t.queuedBits -= 6;
}
function Di(e, t, n) {
	let r = Ti[e];
	if (r > -1) for (t.queue = t.queue << 6 | r, t.queuedBits += 6; t.queuedBits >= 8;) n(t.queue >> t.queuedBits - 8 & 255), t.queuedBits -= 8;
	else if (r === -2) return;
	else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
}
function Oi(e) {
	let t = [], n = (e) => {
		t.push(String.fromCodePoint(e));
	}, r = {
		utf8seq: 0,
		codepoint: 0
	}, i = {
		queue: 0,
		queuedBits: 0
	}, a = (e) => {
		ji(e, r, n);
	};
	for (let t = 0; t < e.length; t += 1) Di(e.charCodeAt(t), i, a);
	return t.join("");
}
function ki(e, t) {
	if (e <= 127) {
		t(e);
		return;
	} else if (e <= 2047) {
		t(192 | e >> 6), t(128 | e & 63);
		return;
	} else if (e <= 65535) {
		t(224 | e >> 12), t(128 | e >> 6 & 63), t(128 | e & 63);
		return;
	} else if (e <= 1114111) {
		t(240 | e >> 18), t(128 | e >> 12 & 63), t(128 | e >> 6 & 63), t(128 | e & 63);
		return;
	}
	throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function Ai(e, t) {
	for (let n = 0; n < e.length; n += 1) {
		let r = e.charCodeAt(n);
		if (r > 55295 && r <= 56319) {
			let t = (r - 55296) * 1024 & 65535;
			r = (e.charCodeAt(n + 1) - 56320 & 65535 | t) + 65536, n += 1;
		}
		ki(r, t);
	}
}
function ji(e, t, n) {
	if (t.utf8seq === 0) {
		if (e <= 127) {
			n(e);
			return;
		}
		for (let n = 1; n < 6; n += 1) if (!(e >> 7 - n & 1)) {
			t.utf8seq = n;
			break;
		}
		if (t.utf8seq === 2) t.codepoint = e & 31;
		else if (t.utf8seq === 3) t.codepoint = e & 15;
		else if (t.utf8seq === 4) t.codepoint = e & 7;
		else throw Error("Invalid UTF-8 sequence");
		--t.utf8seq;
	} else if (t.utf8seq > 0) {
		if (e <= 127) throw Error("Invalid UTF-8 sequence");
		t.codepoint = t.codepoint << 6 | e & 63, --t.utf8seq, t.utf8seq === 0 && n(t.codepoint);
	}
}
function Mi(e) {
	let t = [], n = {
		queue: 0,
		queuedBits: 0
	}, r = (e) => {
		t.push(e);
	};
	for (let t = 0; t < e.length; t += 1) Di(e.charCodeAt(t), n, r);
	return new Uint8Array(t);
}
function Ni(e) {
	let t = [];
	return Ai(e, (e) => t.push(e)), new Uint8Array(t);
}
function Pi(e) {
	let t = [], n = {
		queue: 0,
		queuedBits: 0
	}, r = (e) => {
		t.push(e);
	};
	return e.forEach((e) => Ei(e, n, r)), Ei(null, n, r), t.join("");
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/helpers.js
function Fi(e) {
	return Math.round(Date.now() / 1e3) + e;
}
function Ii() {
	return Symbol("auth-callback");
}
var G = () => typeof window < "u" && typeof document < "u", Li = {
	tested: !1,
	writable: !1
}, Ri = () => {
	if (!G()) return !1;
	try {
		if (typeof globalThis.localStorage != "object") return !1;
	} catch {
		return !1;
	}
	if (Li.tested) return Li.writable;
	let e = `lswt-${Math.random()}${Math.random()}`;
	try {
		globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), Li.tested = !0, Li.writable = !0;
	} catch {
		Li.tested = !0, Li.writable = !1;
	}
	return Li.writable;
};
function zi(e) {
	let t = {}, n = new URL(e);
	if (n.hash && n.hash[0] === "#") try {
		new URLSearchParams(n.hash.substring(1)).forEach((e, n) => {
			t[n] = e;
		});
	} catch {}
	return n.searchParams.forEach((e, n) => {
		t[n] = e;
	}), t;
}
var Bi = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), Vi = (e) => typeof e == "object" && !!e && "status" in e && "ok" in e && "json" in e && typeof e.json == "function", Hi = async (e, t, n) => {
	await e.setItem(t, JSON.stringify(n));
}, Ui = async (e, t) => {
	let n = await e.getItem(t);
	if (!n) return null;
	try {
		return JSON.parse(n);
	} catch {
		return n;
	}
}, K = async (e, t) => {
	await e.removeItem(t);
}, Wi = class e {
	constructor() {
		this.promise = new e.promiseConstructor((e, t) => {
			this.resolve = e, this.reject = t;
		});
	}
};
Wi.promiseConstructor = Promise;
function Gi(e) {
	let t = e.split(".");
	if (t.length !== 3) throw new Si("Invalid JWT structure");
	for (let e = 0; e < t.length; e++) if (!si.test(t[e])) throw new Si("JWT not in base64url format");
	return {
		header: JSON.parse(Oi(t[0])),
		payload: JSON.parse(Oi(t[1])),
		signature: Mi(t[2]),
		raw: {
			header: t[0],
			payload: t[1]
		}
	};
}
async function Ki(e) {
	return await new Promise((t) => {
		setTimeout(() => t(null), e);
	});
}
function qi(e, t) {
	return new Promise((n, r) => {
		(async () => {
			for (let i = 0; i < Infinity; i++) try {
				let r = await e(i);
				if (!t(i, null, r)) {
					n(r);
					return;
				}
			} catch (e) {
				if (!t(i, e)) {
					r(e);
					return;
				}
			}
		})();
	});
}
function Ji(e) {
	return ("0" + e.toString(16)).substr(-2);
}
function Yi() {
	let e = new Uint32Array(56);
	if (typeof crypto > "u") {
		let e = "";
		for (let t = 0; t < 56; t++) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~".charAt(Math.floor(Math.random() * 66));
		return e;
	}
	return crypto.getRandomValues(e), Array.from(e, Ji).join("");
}
async function Xi(e) {
	let t = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", t), r = new Uint8Array(n);
	return Array.from(r).map((e) => String.fromCharCode(e)).join("");
}
async function Zi(e) {
	if (!(typeof crypto < "u" && crypto.subtle !== void 0 && typeof TextEncoder < "u")) return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
	let t = await Xi(e);
	return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Qi(e, t, n = !1) {
	let r = Yi(), i = r;
	n && (i += "/recovery"), await Hi(e, `${t}-code-verifier`, i);
	let a = await Zi(r);
	return [a, r === a ? "plain" : "s256"];
}
var $i = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function ea(e) {
	let t = e.headers.get(ai);
	if (!t || !t.match($i)) return null;
	try {
		return /* @__PURE__ */ new Date(`${t}T00:00:00.0Z`);
	} catch {
		return null;
	}
}
function ta(e) {
	if (!e) throw Error("Missing exp claim");
	if (e <= Math.floor(Date.now() / 1e3)) throw Error("JWT has expired");
}
function na(e) {
	switch (e) {
		case "RS256": return {
			name: "RSASSA-PKCS1-v1_5",
			hash: { name: "SHA-256" }
		};
		case "ES256": return {
			name: "ECDSA",
			namedCurve: "P-256",
			hash: { name: "SHA-256" }
		};
		default: throw Error("Invalid alg claim");
	}
}
var ra = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function ia(e) {
	if (!ra.test(e)) throw Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function q(e) {
	if (!e.passkey) throw Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).");
}
function aa() {
	return new Proxy({}, {
		get: (e, t) => {
			if (t === "__isUserNotAvailableProxy") return !0;
			if (typeof t == "symbol") {
				let e = t.toString();
				if (e === "Symbol(Symbol.toPrimitive)" || e === "Symbol(Symbol.toStringTag)" || e === "Symbol(util.inspect.custom)") return;
			}
			throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`);
		},
		set: (e, t) => {
			throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
		},
		deleteProperty: (e, t) => {
			throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
		}
	});
}
function oa(e, t) {
	return new Proxy(e, { get: (e, n, r) => {
		if (n === "__isInsecureUserWarningProxy") return !0;
		if (typeof n == "symbol") {
			let t = n.toString();
			if (t === "Symbol(Symbol.toPrimitive)" || t === "Symbol(Symbol.toStringTag)" || t === "Symbol(util.inspect.custom)" || t === "Symbol(nodejs.util.inspect.custom)") return Reflect.get(e, n, r);
		}
		return !t.value && typeof n == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), t.value = !0), Reflect.get(e, n, r);
	} });
}
function sa(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/fetch.js
var ca = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e), la = [
	502,
	503,
	504,
	520,
	521,
	522,
	523,
	524,
	530
];
async function ua(e) {
	if (!Vi(e)) throw new yi(ca(e), 0);
	if (la.includes(e.status)) throw new yi(ca(e), e.status);
	let t;
	try {
		t = await e.json();
	} catch (e) {
		throw new U(ca(e), e);
	}
	let n, r = ea(e);
	if (r && r.getTime() >= oi["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? n = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (n = t.error_code), !n) {
		if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((e, t) => e && typeof t == "string", !0)) throw new xi(ca(t), e.status, t.weak_password.reasons);
	} else if (n === "weak_password") throw new xi(ca(t), e.status, t.weak_password?.reasons || []);
	else if (n === "session_not_found") throw new W();
	throw new li(ca(t), e.status || 500, n);
}
var da = (e, t, n, r) => {
	let i = {
		method: e,
		headers: t?.headers || {}
	};
	return e === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, t?.headers), i.body = JSON.stringify(r), Object.assign(Object.assign({}, i), n));
};
async function J(e, t, n, r) {
	let i = Object.assign({}, r?.headers);
	i["X-Supabase-Api-Version"] || (i[ai] = oi["2024-01-01"].name), r?.jwt && (i.Authorization = `Bearer ${r.jwt}`);
	let a = r?.query ?? {};
	r?.redirectTo && (a.redirect_to = r.redirectTo);
	let o = await fa(e, t, n + (Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : ""), {
		headers: i,
		noResolveJson: r?.noResolveJson
	}, {}, r?.body);
	return r?.xform ? r?.xform(o) : {
		data: Object.assign({}, o),
		error: null
	};
}
async function fa(e, t, n, r, i, a) {
	let o = da(t, r, i, a), s;
	try {
		s = await e(n, Object.assign({}, o));
	} catch (e) {
		throw console.error(e), new yi(ca(e), 0);
	}
	if (s.ok || await ua(s), r?.noResolveJson) return s;
	try {
		return await s.json();
	} catch (e) {
		await ua(e);
	}
}
function Y(e) {
	let t = null;
	va(e) && (t = Object.assign({}, e), e.expires_at || (t.expires_at = Fi(e.expires_in)));
	let n = e.user ?? e;
	return {
		data: {
			session: t,
			user: n
		},
		error: null
	};
}
function pa(e) {
	let t = Y(e);
	return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce((e, t) => e && typeof t == "string", !0) && (t.data.weak_password = e.weak_password), t;
}
function ma(e) {
	return {
		data: { user: e.user ?? e },
		error: null
	};
}
function ha(e) {
	return {
		data: e,
		error: null
	};
}
function ga(e) {
	let { action_link: t, email_otp: n, hashed_token: r, redirect_to: i, verification_type: a } = e, o = Ct(e, [
		"action_link",
		"email_otp",
		"hashed_token",
		"redirect_to",
		"verification_type"
	]);
	return {
		data: {
			properties: {
				action_link: t,
				email_otp: n,
				hashed_token: r,
				redirect_to: i,
				verification_type: a
			},
			user: Object.assign({}, o)
		},
		error: null
	};
}
function _a(e) {
	return e;
}
function va(e) {
	return e.access_token && e.refresh_token && e.expires_in;
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/types.js
var ya = [
	"global",
	"local",
	"others"
], ba = class {
	constructor({ url: e = "", headers: t = {}, fetch: n, experimental: r }) {
		this.url = e, this.headers = t, this.fetch = Bi(n), this.experimental = r ?? {}, this.mfa = {
			listFactors: this._listFactors.bind(this),
			deleteFactor: this._deleteFactor.bind(this)
		}, this.oauth = {
			listClients: this._listOAuthClients.bind(this),
			createClient: this._createOAuthClient.bind(this),
			getClient: this._getOAuthClient.bind(this),
			updateClient: this._updateOAuthClient.bind(this),
			deleteClient: this._deleteOAuthClient.bind(this),
			regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
		}, this.customProviders = {
			listProviders: this._listCustomProviders.bind(this),
			createProvider: this._createCustomProvider.bind(this),
			getProvider: this._getCustomProvider.bind(this),
			updateProvider: this._updateCustomProvider.bind(this),
			deleteProvider: this._deleteCustomProvider.bind(this)
		}, this.passkey = {
			listPasskeys: this._adminListPasskeys.bind(this),
			deletePasskey: this._adminDeletePasskey.bind(this)
		};
	}
	async signOut(e, t = ya[0]) {
		if (ya.indexOf(t) < 0) throw Error(`@supabase/auth-js: Parameter scope must be one of ${ya.join(", ")}`);
		try {
			return await J(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
				headers: this.headers,
				jwt: e,
				noResolveJson: !0
			}), {
				data: null,
				error: null
			};
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async inviteUserByEmail(e, t = {}) {
		try {
			return await J(this.fetch, "POST", `${this.url}/invite`, {
				body: {
					email: e,
					data: t.data
				},
				headers: this.headers,
				redirectTo: t.redirectTo,
				xform: ma
			});
		} catch (e) {
			if (H(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async generateLink(e) {
		try {
			let { options: t } = e, n = Ct(e, ["options"]), r = Object.assign(Object.assign({}, n), t);
			return "newEmail" in n && (r.new_email = n?.newEmail, delete r.newEmail), await J(this.fetch, "POST", `${this.url}/admin/generate_link`, {
				body: r,
				headers: this.headers,
				xform: ga,
				redirectTo: t?.redirectTo
			});
		} catch (e) {
			if (H(e)) return {
				data: {
					properties: null,
					user: null
				},
				error: e
			};
			throw e;
		}
	}
	async createUser(e) {
		try {
			return await J(this.fetch, "POST", `${this.url}/admin/users`, {
				body: e,
				headers: this.headers,
				xform: ma
			});
		} catch (e) {
			if (H(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async listUsers(e) {
		try {
			let t = {
				nextPage: null,
				lastPage: 0,
				total: 0
			}, n = await J(this.fetch, "GET", `${this.url}/admin/users`, {
				headers: this.headers,
				noResolveJson: !0,
				query: {
					page: (e?.page)?.toString() ?? "",
					per_page: (e?.perPage)?.toString() ?? ""
				},
				xform: _a
			});
			if (n.error) throw n.error;
			let r = await n.json(), i = n.headers.get("x-total-count") ?? 0, a = n.headers.get("link")?.split(",") ?? [];
			return a.length > 0 && (a.forEach((e) => {
				let n = parseInt(e.split(";")[0].split("=")[1].substring(0, 1)), r = JSON.parse(e.split(";")[1].split("=")[1]);
				t[`${r}Page`] = n;
			}), t.total = parseInt(i)), {
				data: Object.assign(Object.assign({}, r), t),
				error: null
			};
		} catch (e) {
			if (H(e)) return {
				data: { users: [] },
				error: e
			};
			throw e;
		}
	}
	async getUserById(e) {
		ia(e);
		try {
			return await J(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
				headers: this.headers,
				xform: ma
			});
		} catch (e) {
			if (H(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async updateUserById(e, t) {
		ia(e);
		try {
			return await J(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
				body: t,
				headers: this.headers,
				xform: ma
			});
		} catch (e) {
			if (H(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async deleteUser(e, t = !1) {
		ia(e);
		try {
			return await J(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
				headers: this.headers,
				body: { should_soft_delete: t },
				xform: ma
			});
		} catch (e) {
			if (H(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async _listFactors(e) {
		ia(e.userId);
		try {
			let { data: t, error: n } = await J(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
				headers: this.headers,
				xform: (e) => ({
					data: { factors: e },
					error: null
				})
			});
			return {
				data: t,
				error: n
			};
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _deleteFactor(e) {
		ia(e.userId), ia(e.id);
		try {
			return {
				data: await J(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, { headers: this.headers }),
				error: null
			};
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _listOAuthClients(e) {
		try {
			let t = {
				nextPage: null,
				lastPage: 0,
				total: 0
			}, n = await J(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
				headers: this.headers,
				noResolveJson: !0,
				query: {
					page: (e?.page)?.toString() ?? "",
					per_page: (e?.perPage)?.toString() ?? ""
				},
				xform: _a
			});
			if (n.error) throw n.error;
			let r = await n.json(), i = n.headers.get("x-total-count") ?? 0, a = n.headers.get("link")?.split(",") ?? [];
			return a.length > 0 && (a.forEach((e) => {
				let n = parseInt(e.split(";")[0].split("=")[1].substring(0, 1)), r = JSON.parse(e.split(";")[1].split("=")[1]);
				t[`${r}Page`] = n;
			}), t.total = parseInt(i)), {
				data: Object.assign(Object.assign({}, r), t),
				error: null
			};
		} catch (e) {
			if (H(e)) return {
				data: { clients: [] },
				error: e
			};
			throw e;
		}
	}
	async _createOAuthClient(e) {
		try {
			return await J(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
				body: e,
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _getOAuthClient(e) {
		try {
			return await J(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _updateOAuthClient(e, t) {
		try {
			return await J(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${e}`, {
				body: t,
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _deleteOAuthClient(e) {
		try {
			return await J(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
				headers: this.headers,
				noResolveJson: !0
			}), {
				data: null,
				error: null
			};
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _regenerateOAuthClientSecret(e) {
		try {
			return await J(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _listCustomProviders(e) {
		try {
			let t = {};
			return e?.type && (t.type = e.type), await J(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
				headers: this.headers,
				query: t,
				xform: (e) => ({
					data: { providers: e?.providers ?? [] },
					error: null
				})
			});
		} catch (e) {
			if (H(e)) return {
				data: { providers: [] },
				error: e
			};
			throw e;
		}
	}
	async _createCustomProvider(e) {
		try {
			return await J(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
				body: e,
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _getCustomProvider(e) {
		try {
			return await J(this.fetch, "GET", `${this.url}/admin/custom-providers/${e}`, {
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _updateCustomProvider(e, t) {
		try {
			return await J(this.fetch, "PUT", `${this.url}/admin/custom-providers/${e}`, {
				body: t,
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _deleteCustomProvider(e) {
		try {
			return await J(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${e}`, {
				headers: this.headers,
				noResolveJson: !0
			}), {
				data: null,
				error: null
			};
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _adminListPasskeys(e) {
		q(this.experimental), ia(e.userId);
		try {
			return await J(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/passkeys`, {
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _adminDeletePasskey(e) {
		q(this.experimental), ia(e.userId), ia(e.passkeyId);
		try {
			return await J(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`, {
				headers: this.headers,
				noResolveJson: !0
			}), {
				data: null,
				error: null
			};
		} catch (e) {
			if (H(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
};
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/local-storage.js
function xa(e = {}) {
	return {
		getItem: (t) => e[t] || null,
		setItem: (t, n) => {
			e[t] = n;
		},
		removeItem: (t) => {
			delete e[t];
		}
	};
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/locks.js
var X = { debug: !!(globalThis && Ri() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true") }, Sa = class extends Error {
	constructor(e) {
		super(e), this.isAcquireTimeout = !0;
	}
}, Ca = class extends Sa {};
async function wa(e, t, n) {
	X.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
	let r = new globalThis.AbortController(), i;
	t > 0 && (i = setTimeout(() => {
		r.abort(), X.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e);
	}, t)), await Promise.resolve();
	try {
		return await globalThis.navigator.locks.request(e, t === 0 ? {
			mode: "exclusive",
			ifAvailable: !0
		} : {
			mode: "exclusive",
			signal: r.signal
		}, async (r) => {
			if (r) {
				clearTimeout(i), X.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, r.name);
				try {
					return await n();
				} finally {
					X.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, r.name);
				}
			} else if (t === 0) throw X.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new Ca(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
			else {
				if (X.debug) try {
					let e = await globalThis.navigator.locks.query();
					console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(e, null, "  "));
				} catch (e) {
					console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e);
				}
				return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), clearTimeout(i), await n();
			}
		});
	} catch (a) {
		if (t > 0 && clearTimeout(i), a?.name === "AbortError" && t > 0) {
			if (r.signal.aborted) return X.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", e), console.warn(`@supabase/gotrue-js: Lock "${e}" was not released within ${t}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`), await Promise.resolve().then(() => globalThis.navigator.locks.request(e, {
				mode: "exclusive",
				steal: !0
			}, async (t) => {
				if (t) {
					X.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", e, t.name);
					try {
						return await n();
					} finally {
						X.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", e, t.name);
					}
				} else return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"), await n();
			}));
			throw X.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", e), new Ca(`Lock "${e}" was released because another request stole it`);
		}
		throw a;
	}
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/polyfills.js
function Ta() {
	if (typeof globalThis != "object") try {
		Object.defineProperty(Object.prototype, "__magic__", {
			get: function() {
				return this;
			},
			configurable: !0
		}), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
	} catch {
		typeof self < "u" && (self.globalThis = self);
	}
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/web3/ethereum.js
function Ea(e) {
	if (!/^0x[a-fA-F0-9]{40}$/.test(e)) throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);
	return e.toLowerCase();
}
function Da(e) {
	return parseInt(e, 16);
}
function Oa(e) {
	let t = new TextEncoder().encode(e);
	return "0x" + Array.from(t, (e) => e.toString(16).padStart(2, "0")).join("");
}
function ka(e) {
	let { chainId: t, domain: n, expirationTime: r, issuedAt: i = /* @__PURE__ */ new Date(), nonce: a, notBefore: o, requestId: s, resources: c, scheme: l, uri: u, version: d } = e;
	if (!Number.isInteger(t)) throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);
	if (!n) throw Error("@supabase/auth-js: Invalid SIWE message field \"domain\". Domain must be provided.");
	if (a && a.length < 8) throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);
	if (!u) throw Error("@supabase/auth-js: Invalid SIWE message field \"uri\". URI must be provided.");
	if (d !== "1") throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);
	if (e.statement?.includes("\n")) throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);
	let f = Ea(e.address), p = `${l ? `${l}://${n}` : n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement ? `${e.statement}\n` : ""}`, m = `URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a ? `\nNonce: ${a}` : ""}\nIssued At: ${i.toISOString()}`;
	if (r && (m += `\nExpiration Time: ${r.toISOString()}`), o && (m += `\nNot Before: ${o.toISOString()}`), s && (m += `\nRequest ID: ${s}`), c) {
		let e = "\nResources:";
		for (let t of c) {
			if (!t || typeof t != "string") throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);
			e += `\n- ${t}`;
		}
		m += e;
	}
	return `${p}\n${m}`;
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/webauthn.errors.js
var Z = class extends Error {
	constructor({ message: e, code: t, cause: n, name: r }) {
		super(e, { cause: n }), this.__isWebAuthnError = !0, this.name = r ?? (n instanceof Error ? n.name : void 0) ?? "Unknown Error", this.code = t;
	}
}, Aa = class extends Z {
	constructor(e, t) {
		super({
			code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
			cause: t,
			message: e
		}), this.name = "WebAuthnUnknownError", this.originalError = t;
	}
};
function ja({ error: e, options: t }) {
	let { publicKey: n } = t;
	if (!n) throw Error("options was missing required publicKey property");
	if (e.name === "AbortError") {
		if (t.signal instanceof AbortSignal) return new Z({
			message: "Registration ceremony was sent an abort signal",
			code: "ERROR_CEREMONY_ABORTED",
			cause: e
		});
	} else if (e.name === "ConstraintError") {
		if (n.authenticatorSelection?.requireResidentKey === !0) return new Z({
			message: "Discoverable credentials were required but no available authenticator supported it",
			code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
			cause: e
		});
		if (t.mediation === "conditional" && n.authenticatorSelection?.userVerification === "required") return new Z({
			message: "User verification was required during automatic registration but it could not be performed",
			code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
			cause: e
		});
		if (n.authenticatorSelection?.userVerification === "required") return new Z({
			message: "User verification was required but no available authenticator supported it",
			code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
			cause: e
		});
	} else if (e.name === "InvalidStateError") return new Z({
		message: "The authenticator was previously registered",
		code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
		cause: e
	});
	else if (e.name === "NotAllowedError") return new Z({
		message: e.message,
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
	else if (e.name === "NotSupportedError") return n.pubKeyCredParams.filter((e) => e.type === "public-key").length === 0 ? new Z({
		message: "No entry in pubKeyCredParams was of type \"public-key\"",
		code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
		cause: e
	}) : new Z({
		message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
		code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
		cause: e
	});
	else if (e.name === "SecurityError") {
		let t = window.location.hostname;
		if (!Ra(t)) return new Z({
			message: `${window.location.hostname} is an invalid domain`,
			code: "ERROR_INVALID_DOMAIN",
			cause: e
		});
		if (n.rp.id !== t) return new Z({
			message: `The RP ID "${n.rp.id}" is invalid for this domain`,
			code: "ERROR_INVALID_RP_ID",
			cause: e
		});
	} else if (e.name === "TypeError") {
		if (n.user.id.byteLength < 1 || n.user.id.byteLength > 64) return new Z({
			message: "User ID was not between 1 and 64 characters",
			code: "ERROR_INVALID_USER_ID_LENGTH",
			cause: e
		});
	} else if (e.name === "UnknownError") return new Z({
		message: "The authenticator was unable to process the specified options, or could not create a new credential",
		code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
		cause: e
	});
	return new Z({
		message: "a Non-Webauthn related error has occurred",
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
}
function Ma({ error: e, options: t }) {
	let { publicKey: n } = t;
	if (!n) throw Error("options was missing required publicKey property");
	if (e.name === "AbortError") {
		if (t.signal instanceof AbortSignal) return new Z({
			message: "Authentication ceremony was sent an abort signal",
			code: "ERROR_CEREMONY_ABORTED",
			cause: e
		});
	} else if (e.name === "NotAllowedError") return new Z({
		message: e.message,
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
	else if (e.name === "SecurityError") {
		let t = window.location.hostname;
		if (!Ra(t)) return new Z({
			message: `${window.location.hostname} is an invalid domain`,
			code: "ERROR_INVALID_DOMAIN",
			cause: e
		});
		if (n.rpId !== t) return new Z({
			message: `The RP ID "${n.rpId}" is invalid for this domain`,
			code: "ERROR_INVALID_RP_ID",
			cause: e
		});
	} else if (e.name === "UnknownError") return new Z({
		message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
		code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
		cause: e
	});
	return new Z({
		message: "a Non-Webauthn related error has occurred",
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
}
var Na = new class {
	createNewAbortSignal() {
		if (this.controller) {
			let e = /* @__PURE__ */ Error("Cancelling existing WebAuthn API call for new one");
			e.name = "AbortError", this.controller.abort(e);
		}
		let e = new AbortController();
		return this.controller = e, e.signal;
	}
	cancelCeremony() {
		if (this.controller) {
			let e = /* @__PURE__ */ Error("Manually cancelling existing WebAuthn API call");
			e.name = "AbortError", this.controller.abort(e), this.controller = void 0;
		}
	}
}();
function Pa(e) {
	if (!e) throw Error("Credential creation options are required");
	if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function") return PublicKeyCredential.parseCreationOptionsFromJSON(e);
	let { challenge: t, user: n, excludeCredentials: r } = e, i = Ct(e, [
		"challenge",
		"user",
		"excludeCredentials"
	]), a = Mi(t).buffer, o = Object.assign(Object.assign({}, n), { id: Mi(n.id).buffer }), s = Object.assign(Object.assign({}, i), {
		challenge: a,
		user: o
	});
	if (r && r.length > 0) {
		s.excludeCredentials = Array(r.length);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			s.excludeCredentials[e] = Object.assign(Object.assign({}, t), {
				id: Mi(t.id).buffer,
				type: t.type || "public-key",
				transports: t.transports
			});
		}
	}
	return s;
}
function Fa(e) {
	if (!e) throw Error("Credential request options are required");
	if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function") return PublicKeyCredential.parseRequestOptionsFromJSON(e);
	let { challenge: t, allowCredentials: n } = e, r = Ct(e, ["challenge", "allowCredentials"]), i = Mi(t).buffer, a = Object.assign(Object.assign({}, r), { challenge: i });
	if (n && n.length > 0) {
		a.allowCredentials = Array(n.length);
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			a.allowCredentials[e] = Object.assign(Object.assign({}, t), {
				id: Mi(t.id).buffer,
				type: t.type || "public-key",
				transports: t.transports
			});
		}
	}
	return a;
}
function Ia(e) {
	if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
	let t = e;
	return {
		id: e.id,
		rawId: e.id,
		response: {
			attestationObject: Pi(new Uint8Array(e.response.attestationObject)),
			clientDataJSON: Pi(new Uint8Array(e.response.clientDataJSON))
		},
		type: "public-key",
		clientExtensionResults: e.getClientExtensionResults(),
		authenticatorAttachment: t.authenticatorAttachment ?? void 0
	};
}
function La(e) {
	if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
	let t = e, n = e.getClientExtensionResults(), r = e.response;
	return {
		id: e.id,
		rawId: e.id,
		response: {
			authenticatorData: Pi(new Uint8Array(r.authenticatorData)),
			clientDataJSON: Pi(new Uint8Array(r.clientDataJSON)),
			signature: Pi(new Uint8Array(r.signature)),
			userHandle: r.userHandle ? Pi(new Uint8Array(r.userHandle)) : void 0
		},
		type: "public-key",
		clientExtensionResults: n,
		authenticatorAttachment: t.authenticatorAttachment ?? void 0
	};
}
function Ra(e) {
	return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function za() {
	return !!(G() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof (navigator == null ? void 0 : navigator.credentials)?.create == "function" && typeof (navigator == null ? void 0 : navigator.credentials)?.get == "function");
}
async function Ba(e) {
	try {
		let t = await navigator.credentials.create(e);
		return t ? t instanceof PublicKeyCredential ? {
			data: t,
			error: null
		} : {
			data: null,
			error: new Aa("Browser returned unexpected credential type", t)
		} : {
			data: null,
			error: new Aa("Empty credential response", t)
		};
	} catch (t) {
		return {
			data: null,
			error: ja({
				error: t,
				options: e
			})
		};
	}
}
async function Va(e) {
	try {
		let t = await navigator.credentials.get(e);
		return t ? t instanceof PublicKeyCredential ? {
			data: t,
			error: null
		} : {
			data: null,
			error: new Aa("Browser returned unexpected credential type", t)
		} : {
			data: null,
			error: new Aa("Empty credential response", t)
		};
	} catch (t) {
		return {
			data: null,
			error: Ma({
				error: t,
				options: e
			})
		};
	}
}
var Ha = {
	hints: ["security-key"],
	authenticatorSelection: {
		authenticatorAttachment: "cross-platform",
		requireResidentKey: !1,
		userVerification: "preferred",
		residentKey: "discouraged"
	},
	attestation: "direct"
}, Ua = {
	userVerification: "preferred",
	hints: ["security-key"],
	attestation: "direct"
};
function Wa(...e) {
	let t = (e) => typeof e == "object" && !!e && !Array.isArray(e), n = (e) => e instanceof ArrayBuffer || ArrayBuffer.isView(e), r = {};
	for (let i of e) if (i) for (let e in i) {
		let a = i[e];
		if (a !== void 0) if (Array.isArray(a)) r[e] = a;
		else if (n(a)) r[e] = a;
		else if (t(a)) {
			let n = r[e];
			t(n) ? r[e] = Wa(n, a) : r[e] = Wa(a);
		} else r[e] = a;
	}
	return r;
}
function Ga(e, t) {
	return Wa(Ha, e, t || {});
}
function Ka(e, t) {
	return Wa(Ua, e, t || {});
}
var qa = class {
	constructor(e) {
		this.client = e, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
	}
	async _enroll(e) {
		return this.client.mfa.enroll(Object.assign(Object.assign({}, e), { factorType: "webauthn" }));
	}
	async _challenge({ factorId: e, webauthn: t, friendlyName: n, signal: r }, i) {
		try {
			let { data: a, error: o } = await this.client.mfa.challenge({
				factorId: e,
				webauthn: t
			});
			if (!a) return {
				data: null,
				error: o
			};
			let s = r ?? Na.createNewAbortSignal();
			if (a.webauthn.type === "create") {
				let { user: e } = a.webauthn.credential_options.publicKey;
				if (!e.name) {
					let t = n;
					if (t) e.name = `${e.id}:${t}`;
					else {
						let t = (await this.client.getUser()).data.user, n = t?.user_metadata?.name || t?.email || t?.id || "User";
						e.name = `${e.id}:${n}`;
					}
				}
				e.displayName ||= e.name;
			}
			switch (a.webauthn.type) {
				case "create": {
					let { data: t, error: n } = await Ba({
						publicKey: Ga(a.webauthn.credential_options.publicKey, i?.create),
						signal: s
					});
					return t ? {
						data: {
							factorId: e,
							challengeId: a.id,
							webauthn: {
								type: a.webauthn.type,
								credential_response: t
							}
						},
						error: null
					} : {
						data: null,
						error: n
					};
				}
				case "request": {
					let t = Ka(a.webauthn.credential_options.publicKey, i?.request), { data: n, error: r } = await Va(Object.assign(Object.assign({}, a.webauthn.credential_options), {
						publicKey: t,
						signal: s
					}));
					return n ? {
						data: {
							factorId: e,
							challengeId: a.id,
							webauthn: {
								type: a.webauthn.type,
								credential_response: n
							}
						},
						error: null
					} : {
						data: null,
						error: r
					};
				}
			}
		} catch (e) {
			return H(e) ? {
				data: null,
				error: e
			} : {
				data: null,
				error: new U("Unexpected error in challenge", e)
			};
		}
	}
	async _verify({ challengeId: e, factorId: t, webauthn: n }) {
		return this.client.mfa.verify({
			factorId: t,
			challengeId: e,
			webauthn: n
		});
	}
	async _authenticate({ factorId: e, webauthn: { rpId: t = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: r } = {} }, i) {
		if (!t) return {
			data: null,
			error: new ci("rpId is required for WebAuthn authentication")
		};
		try {
			if (!za()) return {
				data: null,
				error: new U("Browser does not support WebAuthn", null)
			};
			let { data: a, error: o } = await this.challenge({
				factorId: e,
				webauthn: {
					rpId: t,
					rpOrigins: n
				},
				signal: r
			}, { request: i });
			if (!a) return {
				data: null,
				error: o
			};
			let { webauthn: s } = a;
			return this._verify({
				factorId: e,
				challengeId: a.challengeId,
				webauthn: {
					type: s.type,
					rpId: t,
					rpOrigins: n,
					credential_response: s.credential_response
				}
			});
		} catch (e) {
			return H(e) ? {
				data: null,
				error: e
			} : {
				data: null,
				error: new U("Unexpected error in authenticate", e)
			};
		}
	}
	async _register({ friendlyName: e, webauthn: { rpId: t = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: r } = {} }, i) {
		if (!t) return {
			data: null,
			error: new ci("rpId is required for WebAuthn registration")
		};
		try {
			if (!za()) return {
				data: null,
				error: new U("Browser does not support WebAuthn", null)
			};
			let { data: a, error: o } = await this._enroll({ friendlyName: e });
			if (!a) return await this.client.mfa.listFactors().then((t) => t.data?.all.find((t) => t.factor_type === "webauthn" && t.friendly_name === e && t.status !== "unverified")).then((e) => e ? this.client.mfa.unenroll({ factorId: e?.id }) : void 0), {
				data: null,
				error: o
			};
			let { data: s, error: c } = await this._challenge({
				factorId: a.id,
				friendlyName: a.friendly_name,
				webauthn: {
					rpId: t,
					rpOrigins: n
				},
				signal: r
			}, { create: i });
			return s ? this._verify({
				factorId: a.id,
				challengeId: s.challengeId,
				webauthn: {
					rpId: t,
					rpOrigins: n,
					type: s.webauthn.type,
					credential_response: s.webauthn.credential_response
				}
			}) : {
				data: null,
				error: c
			};
		} catch (e) {
			return H(e) ? {
				data: null,
				error: e
			} : {
				data: null,
				error: new U("Unexpected error in register", e)
			};
		}
	}
};
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/GoTrueClient.js
Ta();
var Ja = {
	url: ni,
	storageKey: ri,
	autoRefreshToken: !0,
	persistSession: !0,
	detectSessionInUrl: !0,
	headers: ii,
	flowType: "implicit",
	debug: !1,
	hasCustomAuthorizationHeader: !1,
	throwOnError: !1,
	lockAcquireTimeout: 5e3,
	skipAutoInitialize: !1,
	experimental: {}
};
async function Ya(e, t, n) {
	return await n();
}
var Xa = {}, Za = class e {
	get jwks() {
		return Xa[this.storageKey]?.jwks ?? { keys: [] };
	}
	set jwks(e) {
		Xa[this.storageKey] = Object.assign(Object.assign({}, Xa[this.storageKey]), { jwks: e });
	}
	get jwks_cached_at() {
		return Xa[this.storageKey]?.cachedAt ?? -(2 ** 53 - 1);
	}
	set jwks_cached_at(e) {
		Xa[this.storageKey] = Object.assign(Object.assign({}, Xa[this.storageKey]), { cachedAt: e });
	}
	constructor(t) {
		var n;
		this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
		let r = Object.assign(Object.assign({}, Ja), t);
		if (this.storageKey = r.storageKey, this.instanceID = e.nextInstanceID[this.storageKey] ?? 0, e.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!r.debug, typeof r.debug == "function" && (this.logger = r.debug), this.instanceID > 0 && G()) {
			let e = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
			console.warn(e), this.logDebugMessages && console.trace(e);
		}
		if (this.persistSession = r.persistSession, this.autoRefreshToken = r.autoRefreshToken, this.experimental = r.experimental ?? {}, this.admin = new ba({
			url: r.url,
			headers: r.headers,
			fetch: r.fetch,
			experimental: this.experimental
		}), this.url = r.url, this.headers = r.headers, this.fetch = Bi(r.fetch), this.lock = r.lock || Ya, this.detectSessionInUrl = r.detectSessionInUrl, this.flowType = r.flowType, this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader, this.throwOnError = r.throwOnError, this.lockAcquireTimeout = r.lockAcquireTimeout, r.lock ? this.lock = r.lock : this.persistSession && G() && (globalThis == null ? void 0 : globalThis.navigator)?.locks ? this.lock = wa : this.lock = Ya, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = -(2 ** 53 - 1)), this.mfa = {
			verify: this._verify.bind(this),
			enroll: this._enroll.bind(this),
			unenroll: this._unenroll.bind(this),
			challenge: this._challenge.bind(this),
			listFactors: this._listFactors.bind(this),
			challengeAndVerify: this._challengeAndVerify.bind(this),
			getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
			webauthn: new qa(this)
		}, this.oauth = {
			getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
			approveAuthorization: this._approveAuthorization.bind(this),
			denyAuthorization: this._denyAuthorization.bind(this),
			listGrants: this._listOAuthGrants.bind(this),
			revokeGrant: this._revokeOAuthGrant.bind(this)
		}, this.passkey = {
			startRegistration: this._startPasskeyRegistration.bind(this),
			verifyRegistration: this._verifyPasskeyRegistration.bind(this),
			startAuthentication: this._startPasskeyAuthentication.bind(this),
			verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
			list: this._listPasskeys.bind(this),
			update: this._updatePasskey.bind(this),
			delete: this._deletePasskey.bind(this)
		}, this.persistSession ? (r.storage ? this.storage = r.storage : Ri() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = xa(this.memoryStorage)), r.userStorage && (this.userStorage = r.userStorage)) : (this.memoryStorage = {}, this.storage = xa(this.memoryStorage)), G() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
			try {
				this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
			} catch (e) {
				console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e);
			}
			(n = this.broadcastChannel) == null || n.addEventListener("message", async (e) => {
				this._debug("received broadcast notification from other tab or client", e);
				try {
					await this._notifyAllSubscribers(e.data.event, e.data.session, !1);
				} catch (e) {
					this._debug("#broadcastChannel", "error", e);
				}
			});
		}
		r.skipAutoInitialize || this.initialize().catch((e) => {
			this._debug("#initialize()", "error", e);
		});
	}
	isThrowOnErrorEnabled() {
		return this.throwOnError;
	}
	_returnResult(e) {
		if (this.throwOnError && e && e.error) throw e.error;
		return e;
	}
	_logPrefix() {
		return `GoTrueClient@${this.storageKey}:${this.instanceID} (${$r}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
	}
	_debug(...e) {
		return this.logDebugMessages && this.logger(this._logPrefix(), ...e), this;
	}
	async initialize() {
		return this.initializePromise ||= (async () => await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))(), await this.initializePromise;
	}
	async _initialize() {
		try {
			let e = {}, t = "none";
			if (G() && (e = zi(window.location.href), this._isImplicitGrantCallback(e) ? t = "implicit" : await this._isPKCECallback(e) && (t = "pkce")), G() && this.detectSessionInUrl && t !== "none") {
				let { data: n, error: r } = await this._getSessionFromURL(e, t);
				if (r) {
					if (this._debug("#_initialize()", "error detecting session from URL", r), gi(r)) {
						let e = r.details?.code;
						if (e === "identity_already_exists" || e === "identity_not_found" || e === "single_identity_not_deletable") return { error: r };
					}
					return { error: r };
				}
				let { session: i, redirectType: a } = n;
				return this._debug("#_initialize()", "detected session in URL", i, "redirect type", a), await this._saveSession(i), setTimeout(async () => {
					a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i) : await this._notifyAllSubscribers("SIGNED_IN", i);
				}, 0), { error: null };
			}
			return await this._recoverAndRefresh(), { error: null };
		} catch (e) {
			return H(e) ? this._returnResult({ error: e }) : this._returnResult({ error: new U("Unexpected error during initialization", e) });
		} finally {
			await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
		}
	}
	async signInAnonymously(e) {
		try {
			let { data: t, error: n } = await J(this.fetch, "POST", `${this.url}/signup`, {
				headers: this.headers,
				body: {
					data: e?.options?.data ?? {},
					gotrue_meta_security: { captcha_token: e?.options?.captchaToken }
				},
				xform: Y
			});
			if (n || !t) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: n
			});
			let r = t.session, i = t.user;
			return t.session && (await this._saveSession(t.session), await this._notifyAllSubscribers("SIGNED_IN", r)), this._returnResult({
				data: {
					user: i,
					session: r
				},
				error: null
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: e
			});
			throw e;
		}
	}
	async signUp(e) {
		try {
			let t;
			if ("email" in e) {
				let { email: n, password: r, options: i } = e, a = null, o = null;
				this.flowType === "pkce" && ([a, o] = await Qi(this.storage, this.storageKey)), t = await J(this.fetch, "POST", `${this.url}/signup`, {
					headers: this.headers,
					redirectTo: i?.emailRedirectTo,
					body: {
						email: n,
						password: r,
						data: i?.data ?? {},
						gotrue_meta_security: { captcha_token: i?.captchaToken },
						code_challenge: a,
						code_challenge_method: o
					},
					xform: Y
				});
			} else if ("phone" in e) {
				let { phone: n, password: r, options: i } = e;
				t = await J(this.fetch, "POST", `${this.url}/signup`, {
					headers: this.headers,
					body: {
						phone: n,
						password: r,
						data: i?.data ?? {},
						channel: i?.channel ?? "sms",
						gotrue_meta_security: { captcha_token: i?.captchaToken }
					},
					xform: Y
				});
			} else throw new mi("You must provide either an email or phone number and a password");
			let { data: n, error: r } = t;
			if (r || !n) return await K(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: r
			});
			let i = n.session, a = n.user;
			return n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", i)), this._returnResult({
				data: {
					user: a,
					session: i
				},
				error: null
			});
		} catch (e) {
			if (await K(this.storage, `${this.storageKey}-code-verifier`), H(e)) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: e
			});
			throw e;
		}
	}
	async signInWithPassword(e) {
		try {
			let t;
			if ("email" in e) {
				let { email: n, password: r, options: i } = e;
				t = await J(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
					headers: this.headers,
					body: {
						email: n,
						password: r,
						gotrue_meta_security: { captcha_token: i?.captchaToken }
					},
					xform: pa
				});
			} else if ("phone" in e) {
				let { phone: n, password: r, options: i } = e;
				t = await J(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
					headers: this.headers,
					body: {
						phone: n,
						password: r,
						gotrue_meta_security: { captcha_token: i?.captchaToken }
					},
					xform: pa
				});
			} else throw new mi("You must provide either an email or phone number and a password");
			let { data: n, error: r } = t;
			if (r) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: r
			});
			if (!n || !n.session || !n.user) {
				let e = new pi();
				return this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: e
				});
			}
			return n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), this._returnResult({
				data: Object.assign({
					user: n.user,
					session: n.session
				}, n.weak_password ? { weakPassword: n.weak_password } : null),
				error: r
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: e
			});
			throw e;
		}
	}
	async signInWithOAuth(e) {
		return await this._handleProviderSignIn(e.provider, {
			redirectTo: e.options?.redirectTo,
			scopes: e.options?.scopes,
			queryParams: e.options?.queryParams,
			skipBrowserRedirect: e.options?.skipBrowserRedirect
		});
	}
	async exchangeCodeForSession(e) {
		return await this.initializePromise, this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(e));
	}
	async signInWithWeb3(e) {
		let { chain: t } = e;
		switch (t) {
			case "ethereum": return await this.signInWithEthereum(e);
			case "solana": return await this.signInWithSolana(e);
			default: throw Error(`@supabase/auth-js: Unsupported chain "${t}"`);
		}
	}
	async signInWithEthereum(e) {
		let t, n;
		if ("message" in e) t = e.message, n = e.signature;
		else {
			let { chain: r, wallet: i, statement: a, options: o } = e, s;
			if (!G()) {
				if (typeof i != "object" || !o?.url) throw Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
				s = i;
			} else if (typeof i == "object") s = i;
			else {
				let e = window;
				if ("ethereum" in e && typeof e.ethereum == "object" && "request" in e.ethereum && typeof e.ethereum.request == "function") s = e.ethereum;
				else throw Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
			}
			let c = new URL(o?.url ?? window.location.href), l = await s.request({ method: "eth_requestAccounts" }).then((e) => e).catch(() => {
				throw Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
			});
			if (!l || l.length === 0) throw Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
			let u = Ea(l[0]), d = o?.signInWithEthereum?.chainId;
			d ||= Da(await s.request({ method: "eth_chainId" })), t = ka({
				domain: c.host,
				address: u,
				statement: a,
				uri: c.href,
				version: "1",
				chainId: d,
				nonce: o?.signInWithEthereum?.nonce,
				issuedAt: o?.signInWithEthereum?.issuedAt ?? /* @__PURE__ */ new Date(),
				expirationTime: o?.signInWithEthereum?.expirationTime,
				notBefore: o?.signInWithEthereum?.notBefore,
				requestId: o?.signInWithEthereum?.requestId,
				resources: o?.signInWithEthereum?.resources
			}), n = await s.request({
				method: "personal_sign",
				params: [Oa(t), u]
			});
		}
		try {
			let { data: r, error: i } = await J(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
				headers: this.headers,
				body: Object.assign({
					chain: "ethereum",
					message: t,
					signature: n
				}, e.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e.options?.captchaToken } } : null),
				xform: Y
			});
			if (i) throw i;
			if (!r || !r.session || !r.user) {
				let e = new pi();
				return this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: e
				});
			}
			return r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), this._returnResult({
				data: Object.assign({}, r),
				error: i
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: e
			});
			throw e;
		}
	}
	async signInWithSolana(e) {
		let t, n;
		if ("message" in e) t = e.message, n = e.signature;
		else {
			let { chain: r, wallet: i, statement: a, options: o } = e, s;
			if (!G()) {
				if (typeof i != "object" || !o?.url) throw Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
				s = i;
			} else if (typeof i == "object") s = i;
			else {
				let e = window;
				if ("solana" in e && typeof e.solana == "object" && ("signIn" in e.solana && typeof e.solana.signIn == "function" || "signMessage" in e.solana && typeof e.solana.signMessage == "function")) s = e.solana;
				else throw Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
			}
			let c = new URL(o?.url ?? window.location.href);
			if ("signIn" in s && s.signIn) {
				let e = await s.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, o?.signInWithSolana), {
					version: "1",
					domain: c.host,
					uri: c.href
				}), a ? { statement: a } : null)), r;
				if (Array.isArray(e) && e[0] && typeof e[0] == "object") r = e[0];
				else if (e && typeof e == "object" && "signedMessage" in e && "signature" in e) r = e;
				else throw Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
				if ("signedMessage" in r && "signature" in r && (typeof r.signedMessage == "string" || r.signedMessage instanceof Uint8Array) && r.signature instanceof Uint8Array) t = typeof r.signedMessage == "string" ? r.signedMessage : new TextDecoder().decode(r.signedMessage), n = r.signature;
				else throw Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
			} else {
				if (!("signMessage" in s) || typeof s.signMessage != "function" || !("publicKey" in s) || typeof s != "object" || !s.publicKey || !("toBase58" in s.publicKey) || typeof s.publicKey.toBase58 != "function") throw Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
				t = [
					`${c.host} wants you to sign in with your Solana account:`,
					s.publicKey.toBase58(),
					...a ? [
						"",
						a,
						""
					] : [""],
					"Version: 1",
					`URI: ${c.href}`,
					`Issued At: ${o?.signInWithSolana?.issuedAt ?? (/* @__PURE__ */ new Date()).toISOString()}`,
					...o?.signInWithSolana?.notBefore ? [`Not Before: ${o.signInWithSolana.notBefore}`] : [],
					...o?.signInWithSolana?.expirationTime ? [`Expiration Time: ${o.signInWithSolana.expirationTime}`] : [],
					...o?.signInWithSolana?.chainId ? [`Chain ID: ${o.signInWithSolana.chainId}`] : [],
					...o?.signInWithSolana?.nonce ? [`Nonce: ${o.signInWithSolana.nonce}`] : [],
					...o?.signInWithSolana?.requestId ? [`Request ID: ${o.signInWithSolana.requestId}`] : [],
					...o?.signInWithSolana?.resources?.length ? ["Resources", ...o.signInWithSolana.resources.map((e) => `- ${e}`)] : []
				].join("\n");
				let e = await s.signMessage(new TextEncoder().encode(t), "utf8");
				if (!e || !(e instanceof Uint8Array)) throw Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
				n = e;
			}
		}
		try {
			let { data: r, error: i } = await J(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
				headers: this.headers,
				body: Object.assign({
					chain: "solana",
					message: t,
					signature: Pi(n)
				}, e.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e.options?.captchaToken } } : null),
				xform: Y
			});
			if (i) throw i;
			if (!r || !r.session || !r.user) {
				let e = new pi();
				return this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: e
				});
			}
			return r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), this._returnResult({
				data: Object.assign({}, r),
				error: i
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: e
			});
			throw e;
		}
	}
	async _exchangeCodeForSession(e) {
		let [t, n] = (await Ui(this.storage, `${this.storageKey}-code-verifier`) ?? "").split("/");
		try {
			if (!t && this.flowType === "pkce") throw new vi();
			let { data: r, error: i } = await J(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
				headers: this.headers,
				body: {
					auth_code: e,
					code_verifier: t
				},
				xform: Y
			});
			if (await K(this.storage, `${this.storageKey}-code-verifier`), i) throw i;
			if (!r || !r.session || !r.user) {
				let e = new pi();
				return this._returnResult({
					data: {
						user: null,
						session: null,
						redirectType: null
					},
					error: e
				});
			}
			return r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers(n === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", r.session)), this._returnResult({
				data: Object.assign(Object.assign({}, r), { redirectType: n ?? null }),
				error: i
			});
		} catch (e) {
			if (await K(this.storage, `${this.storageKey}-code-verifier`), H(e)) return this._returnResult({
				data: {
					user: null,
					session: null,
					redirectType: null
				},
				error: e
			});
			throw e;
		}
	}
	async signInWithIdToken(e) {
		try {
			let { options: t, provider: n, token: r, access_token: i, nonce: a } = e, { data: o, error: s } = await J(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
				headers: this.headers,
				body: {
					provider: n,
					id_token: r,
					access_token: i,
					nonce: a,
					gotrue_meta_security: { captcha_token: t?.captchaToken }
				},
				xform: Y
			});
			if (s) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: s
			});
			if (!o || !o.session || !o.user) {
				let e = new pi();
				return this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: e
				});
			}
			return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", o.session)), this._returnResult({
				data: o,
				error: s
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: e
			});
			throw e;
		}
	}
	async signInWithOtp(e) {
		try {
			if ("email" in e) {
				let { email: t, options: n } = e, r = null, i = null;
				this.flowType === "pkce" && ([r, i] = await Qi(this.storage, this.storageKey));
				let { error: a } = await J(this.fetch, "POST", `${this.url}/otp`, {
					headers: this.headers,
					body: {
						email: t,
						data: n?.data ?? {},
						create_user: n?.shouldCreateUser ?? !0,
						gotrue_meta_security: { captcha_token: n?.captchaToken },
						code_challenge: r,
						code_challenge_method: i
					},
					redirectTo: n?.emailRedirectTo
				});
				return this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: a
				});
			}
			if ("phone" in e) {
				let { phone: t, options: n } = e, { data: r, error: i } = await J(this.fetch, "POST", `${this.url}/otp`, {
					headers: this.headers,
					body: {
						phone: t,
						data: n?.data ?? {},
						create_user: n?.shouldCreateUser ?? !0,
						gotrue_meta_security: { captcha_token: n?.captchaToken },
						channel: n?.channel ?? "sms"
					}
				});
				return this._returnResult({
					data: {
						user: null,
						session: null,
						messageId: r?.message_id
					},
					error: i
				});
			}
			throw new mi("You must provide either an email or phone number.");
		} catch (e) {
			if (await K(this.storage, `${this.storageKey}-code-verifier`), H(e)) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: e
			});
			throw e;
		}
	}
	async verifyOtp(e) {
		try {
			let t, n;
			"options" in e && (t = e.options?.redirectTo, n = e.options?.captchaToken);
			let { data: r, error: i } = await J(this.fetch, "POST", `${this.url}/verify`, {
				headers: this.headers,
				body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: n } }),
				redirectTo: t,
				xform: Y
			});
			if (i) throw i;
			if (!r) throw /* @__PURE__ */ Error("An error occurred on token verification.");
			let a = r.session, o = r.user;
			return a?.access_token && (await this._saveSession(a), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", a)), this._returnResult({
				data: {
					user: o,
					session: a
				},
				error: null
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: e
			});
			throw e;
		}
	}
	async signInWithSSO(e) {
		try {
			let t = null, n = null;
			this.flowType === "pkce" && ([t, n] = await Qi(this.storage, this.storageKey));
			let r = await J(this.fetch, "POST", `${this.url}/sso`, {
				body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: e.options?.redirectTo ?? void 0 }), e?.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), {
					skip_http_redirect: !0,
					code_challenge: t,
					code_challenge_method: n
				}),
				headers: this.headers,
				xform: ha
			});
			return r.data?.url && G() && !e.options?.skipBrowserRedirect && window.location.assign(r.data.url), this._returnResult(r);
		} catch (e) {
			if (await K(this.storage, `${this.storageKey}-code-verifier`), H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async reauthenticate() {
		return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate());
	}
	async _reauthenticate() {
		try {
			return await this._useSession(async (e) => {
				let { data: { session: t }, error: n } = e;
				if (n) throw n;
				if (!t) throw new W();
				let { error: r } = await J(this.fetch, "GET", `${this.url}/reauthenticate`, {
					headers: this.headers,
					jwt: t.access_token
				});
				return this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: r
				});
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: e
			});
			throw e;
		}
	}
	async resend(e) {
		try {
			let t = `${this.url}/resend`;
			if ("email" in e) {
				let { email: n, type: r, options: i } = e, { error: a } = await J(this.fetch, "POST", t, {
					headers: this.headers,
					body: {
						email: n,
						type: r,
						gotrue_meta_security: { captcha_token: i?.captchaToken }
					},
					redirectTo: i?.emailRedirectTo
				});
				return this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: a
				});
			} else if ("phone" in e) {
				let { phone: n, type: r, options: i } = e, { data: a, error: o } = await J(this.fetch, "POST", t, {
					headers: this.headers,
					body: {
						phone: n,
						type: r,
						gotrue_meta_security: { captcha_token: i?.captchaToken }
					}
				});
				return this._returnResult({
					data: {
						user: null,
						session: null,
						messageId: a?.message_id
					},
					error: o
				});
			}
			throw new mi("You must provide either an email or phone number and a type");
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: e
			});
			throw e;
		}
	}
	async getSession() {
		return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async (e) => e));
	}
	async _acquireLock(e, t) {
		this._debug("#_acquireLock", "begin", e);
		try {
			if (this.lockAcquired) {
				let e = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), n = (async () => (await e, await t()))();
				return this.pendingInLock.push((async () => {
					try {
						await n;
					} catch {}
				})()), n;
			}
			return await this.lock(`lock:${this.storageKey}`, e, async () => {
				this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
				try {
					this.lockAcquired = !0;
					let e = t();
					for (this.pendingInLock.push((async () => {
						try {
							await e;
						} catch {}
					})()), await e; this.pendingInLock.length;) {
						let e = [...this.pendingInLock];
						await Promise.all(e), this.pendingInLock.splice(0, e.length);
					}
					return await e;
				} finally {
					this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
				}
			});
		} finally {
			this._debug("#_acquireLock", "end");
		}
	}
	async _useSession(e) {
		this._debug("#_useSession", "begin");
		try {
			return await e(await this.__loadSession());
		} finally {
			this._debug("#_useSession", "end");
		}
	}
	async __loadSession() {
		this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", (/* @__PURE__ */ Error()).stack);
		try {
			let e = null, t = await Ui(this.storage, this.storageKey);
			if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e) return {
				data: { session: null },
				error: null
			};
			let n = e.expires_at ? e.expires_at * 1e3 - Date.now() < ti : !1;
			if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", e.expires_at), !n) {
				if (this.userStorage) {
					let t = await Ui(this.userStorage, this.storageKey + "-user");
					t?.user ? e.user = t.user : e.user = aa();
				}
				if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
					let t = { value: this.suppressGetSessionWarning };
					e.user = oa(e.user, t), t.value && (this.suppressGetSessionWarning = !0);
				}
				return {
					data: { session: e },
					error: null
				};
			}
			let { data: r, error: i } = await this._callRefreshToken(e.refresh_token);
			return i ? this._returnResult({
				data: { session: null },
				error: i
			}) : this._returnResult({
				data: { session: r },
				error: null
			});
		} finally {
			this._debug("#__loadSession()", "end");
		}
	}
	async getUser(e) {
		if (e) return await this._getUser(e);
		await this.initializePromise;
		let t = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
		return t.data.user && (this.suppressGetSessionWarning = !0), t;
	}
	async _getUser(e) {
		try {
			return e ? await J(this.fetch, "GET", `${this.url}/user`, {
				headers: this.headers,
				jwt: e,
				xform: ma
			}) : await this._useSession(async (e) => {
				let { data: t, error: n } = e;
				if (n) throw n;
				return !t.session?.access_token && !this.hasCustomAuthorizationHeader ? {
					data: { user: null },
					error: new W()
				} : await J(this.fetch, "GET", `${this.url}/user`, {
					headers: this.headers,
					jwt: t.session?.access_token ?? void 0,
					xform: ma
				});
			});
		} catch (e) {
			if (H(e)) return fi(e) && (await this._removeSession(), await K(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({
				data: { user: null },
				error: e
			});
			throw e;
		}
	}
	async updateUser(e, t = {}) {
		return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(e, t));
	}
	async _updateUser(e, t = {}) {
		try {
			return await this._useSession(async (n) => {
				let { data: r, error: i } = n;
				if (i) throw i;
				if (!r.session) throw new W();
				let a = r.session, o = null, s = null;
				this.flowType === "pkce" && e.email != null && ([o, s] = await Qi(this.storage, this.storageKey));
				let { data: c, error: l } = await J(this.fetch, "PUT", `${this.url}/user`, {
					headers: this.headers,
					redirectTo: t?.emailRedirectTo,
					body: Object.assign(Object.assign({}, e), {
						code_challenge: o,
						code_challenge_method: s
					}),
					jwt: a.access_token,
					xform: ma
				});
				if (l) throw l;
				return a.user = c.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), this._returnResult({
					data: { user: a.user },
					error: null
				});
			});
		} catch (e) {
			if (await K(this.storage, `${this.storageKey}-code-verifier`), H(e)) return this._returnResult({
				data: { user: null },
				error: e
			});
			throw e;
		}
	}
	async setSession(e) {
		return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(e));
	}
	async _setSession(e) {
		try {
			if (!e.access_token || !e.refresh_token) throw new W();
			let t = Date.now() / 1e3, n = t, r = !0, i = null, { payload: a } = Gi(e.access_token);
			if (a.exp && (n = a.exp, r = n <= t), r) {
				let { data: t, error: n } = await this._callRefreshToken(e.refresh_token);
				if (n) return this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: n
				});
				if (!t) return {
					data: {
						user: null,
						session: null
					},
					error: null
				};
				i = t;
			} else {
				let { data: r, error: a } = await this._getUser(e.access_token);
				if (a) return this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: a
				});
				i = {
					access_token: e.access_token,
					refresh_token: e.refresh_token,
					user: r.user,
					token_type: "bearer",
					expires_in: n - t,
					expires_at: n
				}, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i);
			}
			return this._returnResult({
				data: {
					user: i.user,
					session: i
				},
				error: null
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: {
					session: null,
					user: null
				},
				error: e
			});
			throw e;
		}
	}
	async refreshSession(e) {
		return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(e));
	}
	async _refreshSession(e) {
		try {
			return await this._useSession(async (t) => {
				if (!e) {
					let { data: n, error: r } = t;
					if (r) throw r;
					e = n.session ?? void 0;
				}
				if (!e?.refresh_token) throw new W();
				let { data: n, error: r } = await this._callRefreshToken(e.refresh_token);
				return r ? this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: r
				}) : n ? this._returnResult({
					data: {
						user: n.user,
						session: n
					},
					error: null
				}) : this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: null
				});
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: e
			});
			throw e;
		}
	}
	async _getSessionFromURL(e, t) {
		try {
			if (!G()) throw new hi("No browser detected.");
			if (e.error || e.error_description || e.error_code) throw new hi(e.error_description || "Error in URL with unspecified error_description", {
				error: e.error || "unspecified_error",
				code: e.error_code || "unspecified_code"
			});
			switch (t) {
				case "implicit":
					if (this.flowType === "pkce") throw new _i("Not a valid PKCE flow url.");
					break;
				case "pkce":
					if (this.flowType === "implicit") throw new hi("Not a valid implicit grant flow url.");
					break;
				default:
			}
			if (t === "pkce") {
				if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code) throw new _i("No code detected.");
				let { data: t, error: n } = await this._exchangeCodeForSession(e.code);
				if (n) throw n;
				let r = new URL(window.location.href);
				return r.searchParams.delete("code"), window.history.replaceState(window.history.state, "", r.toString()), {
					data: {
						session: t.session,
						redirectType: t.redirectType ?? null
					},
					error: null
				};
			}
			let { provider_token: n, provider_refresh_token: r, access_token: i, refresh_token: a, expires_in: o, expires_at: s, token_type: c } = e;
			if (!i || !o || !a || !c) throw new hi("No session defined in URL");
			let l = Math.round(Date.now() / 1e3), u = parseInt(o), d = l + u;
			s && (d = parseInt(s));
			let f = d - l;
			f * 1e3 <= 3e4 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);
			let p = d - u;
			l - p >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", p, d, l) : l - p < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", p, d, l);
			let { data: m, error: h } = await this._getUser(i);
			if (h) throw h;
			let g = {
				provider_token: n,
				provider_refresh_token: r,
				access_token: i,
				expires_in: u,
				expires_at: d,
				refresh_token: a,
				token_type: c,
				user: m.user
			};
			return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({
				data: {
					session: g,
					redirectType: e.type
				},
				error: null
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: {
					session: null,
					redirectType: null
				},
				error: e
			});
			throw e;
		}
	}
	_isImplicitGrantCallback(e) {
		return typeof this.detectSessionInUrl == "function" ? this.detectSessionInUrl(new URL(window.location.href), e) : !!(e.access_token || e.error_description);
	}
	async _isPKCECallback(e) {
		let t = await Ui(this.storage, `${this.storageKey}-code-verifier`);
		return !!(e.code && t);
	}
	async signOut(e = { scope: "global" }) {
		return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e));
	}
	async _signOut({ scope: e } = { scope: "global" }) {
		return await this._useSession(async (t) => {
			let { data: n, error: r } = t;
			if (r && !fi(r)) return this._returnResult({ error: r });
			let i = n.session?.access_token;
			if (i) {
				let { error: t } = await this.admin.signOut(i, e);
				if (t && !(ui(t) && (t.status === 404 || t.status === 401 || t.status === 403) || fi(t))) return this._returnResult({ error: t });
			}
			return e !== "others" && (await this._removeSession(), await K(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
		});
	}
	onAuthStateChange(e) {
		let t = Ii(), n = {
			id: t,
			callback: e,
			unsubscribe: () => {
				this._debug("#unsubscribe()", "state change callback with id removed", t), this.stateChangeEmitters.delete(t);
			}
		};
		return this._debug("#onAuthStateChange()", "registered callback with id", t), this.stateChangeEmitters.set(t, n), (async () => {
			await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
				this._emitInitialSession(t);
			});
		})(), { data: { subscription: n } };
	}
	async _emitInitialSession(e) {
		return await this._useSession(async (t) => {
			try {
				let { data: { session: n }, error: r } = t;
				if (r) throw r;
				await this.stateChangeEmitters.get(e)?.callback("INITIAL_SESSION", n), this._debug("INITIAL_SESSION", "callback id", e, "session", n);
			} catch (t) {
				await this.stateChangeEmitters.get(e)?.callback("INITIAL_SESSION", null), this._debug("INITIAL_SESSION", "callback id", e, "error", t), fi(t) ? console.warn(t) : console.error(t);
			}
		});
	}
	async resetPasswordForEmail(e, t = {}) {
		let n = null, r = null;
		this.flowType === "pkce" && ([n, r] = await Qi(this.storage, this.storageKey, !0));
		try {
			return await J(this.fetch, "POST", `${this.url}/recover`, {
				body: {
					email: e,
					code_challenge: n,
					code_challenge_method: r,
					gotrue_meta_security: { captcha_token: t.captchaToken }
				},
				headers: this.headers,
				redirectTo: t.redirectTo
			});
		} catch (e) {
			if (await K(this.storage, `${this.storageKey}-code-verifier`), H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async getUserIdentities() {
		try {
			let { data: e, error: t } = await this.getUser();
			if (t) throw t;
			return this._returnResult({
				data: { identities: e.user.identities ?? [] },
				error: null
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async linkIdentity(e) {
		return "token" in e ? this.linkIdentityIdToken(e) : this.linkIdentityOAuth(e);
	}
	async linkIdentityOAuth(e) {
		try {
			let { data: t, error: n } = await this._useSession(async (t) => {
				let { data: n, error: r } = t;
				if (r) throw r;
				let i = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
					redirectTo: e.options?.redirectTo,
					scopes: e.options?.scopes,
					queryParams: e.options?.queryParams,
					skipBrowserRedirect: !0
				});
				return await J(this.fetch, "GET", i, {
					headers: this.headers,
					jwt: n.session?.access_token ?? void 0
				});
			});
			if (n) throw n;
			return G() && !e.options?.skipBrowserRedirect && window.location.assign(t?.url), this._returnResult({
				data: {
					provider: e.provider,
					url: t?.url
				},
				error: null
			});
		} catch (t) {
			if (H(t)) return this._returnResult({
				data: {
					provider: e.provider,
					url: null
				},
				error: t
			});
			throw t;
		}
	}
	async linkIdentityIdToken(e) {
		return await this._useSession(async (t) => {
			try {
				let { error: n, data: { session: r } } = t;
				if (n) throw n;
				let { options: i, provider: a, token: o, access_token: s, nonce: c } = e, { data: l, error: u } = await J(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
					headers: this.headers,
					jwt: r?.access_token ?? void 0,
					body: {
						provider: a,
						id_token: o,
						access_token: s,
						nonce: c,
						link_identity: !0,
						gotrue_meta_security: { captcha_token: i?.captchaToken }
					},
					xform: Y
				});
				return u ? this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: u
				}) : !l || !l.session || !l.user ? this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: new pi()
				}) : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("USER_UPDATED", l.session)), this._returnResult({
					data: l,
					error: u
				}));
			} catch (e) {
				if (await K(this.storage, `${this.storageKey}-code-verifier`), H(e)) return this._returnResult({
					data: {
						user: null,
						session: null
					},
					error: e
				});
				throw e;
			}
		});
	}
	async unlinkIdentity(e) {
		try {
			return await this._useSession(async (t) => {
				let { data: n, error: r } = t;
				if (r) throw r;
				return await J(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
					headers: this.headers,
					jwt: n.session?.access_token ?? void 0
				});
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _refreshAccessToken(e) {
		let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
		this._debug(t, "begin");
		try {
			let n = Date.now();
			return await qi(async (n) => (n > 0 && await Ki(200 * 2 ** (n - 1)), this._debug(t, "refreshing attempt", n), await J(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
				body: { refresh_token: e },
				headers: this.headers,
				xform: Y
			})), (e, t) => {
				let r = 200 * 2 ** e;
				return t && bi(t) && Date.now() + r - n < 3e4;
			});
		} catch (e) {
			if (this._debug(t, "error", e), H(e)) return this._returnResult({
				data: {
					session: null,
					user: null
				},
				error: e
			});
			throw e;
		} finally {
			this._debug(t, "end");
		}
	}
	_isValidSession(e) {
		return typeof e == "object" && !!e && "access_token" in e && "refresh_token" in e && "expires_at" in e;
	}
	async _handleProviderSignIn(e, t) {
		let n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
			redirectTo: t.redirectTo,
			scopes: t.scopes,
			queryParams: t.queryParams
		});
		return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", n), G() && !t.skipBrowserRedirect && window.location.assign(n), {
			data: {
				provider: e,
				url: n
			},
			error: null
		};
	}
	async _recoverAndRefresh() {
		let e = "#_recoverAndRefresh()";
		this._debug(e, "begin");
		try {
			let t = await Ui(this.storage, this.storageKey);
			if (t && this.userStorage) {
				let e = await Ui(this.userStorage, this.storageKey + "-user");
				!this.storage.isServer && Object.is(this.storage, this.userStorage) && !e && (e = { user: t.user }, await Hi(this.userStorage, this.storageKey + "-user", e)), t.user = e?.user ?? aa();
			} else if (t && !t.user && !t.user) {
				let e = await Ui(this.storage, this.storageKey + "-user");
				e && e?.user ? (t.user = e.user, await K(this.storage, this.storageKey + "-user"), await Hi(this.storage, this.storageKey, t)) : t.user = aa();
			}
			if (this._debug(e, "session from storage", t), !this._isValidSession(t)) {
				this._debug(e, "session is not valid"), t !== null && await this._removeSession();
				return;
			}
			let n = (t.expires_at ?? Infinity) * 1e3 - Date.now() < ti;
			if (this._debug(e, `session has${n ? "" : " not"} expired with margin of ${ti}s`), n) {
				if (this.autoRefreshToken && t.refresh_token) {
					let { error: n } = await this._callRefreshToken(t.refresh_token);
					n && (console.error(n), bi(n) || (this._debug(e, "refresh failed with a non-retryable error, removing the session", n), await this._removeSession()));
				}
			} else if (t.user && t.user.__isUserNotAvailableProxy === !0) try {
				let { data: n, error: r } = await this._getUser(t.access_token);
				!r && n?.user ? (t.user = n.user, await this._saveSession(t), await this._notifyAllSubscribers("SIGNED_IN", t)) : this._debug(e, "could not get user data, skipping SIGNED_IN notification");
			} catch (t) {
				console.error("Error getting user data:", t), this._debug(e, "error getting user data, skipping SIGNED_IN notification", t);
			}
			else await this._notifyAllSubscribers("SIGNED_IN", t);
		} catch (t) {
			this._debug(e, "error", t), console.error(t);
			return;
		} finally {
			this._debug(e, "end");
		}
	}
	async _callRefreshToken(e) {
		var t, n;
		if (!e) throw new W();
		if (this.refreshingDeferred) return this.refreshingDeferred.promise;
		let r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
		this._debug(r, "begin");
		try {
			this.refreshingDeferred = new Wi();
			let { data: t, error: n } = await this._refreshAccessToken(e);
			if (n) throw n;
			if (!t.session) throw new W();
			await this._saveSession(t.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
			let r = {
				data: t.session,
				error: null
			};
			return this.refreshingDeferred.resolve(r), r;
		} catch (e) {
			if (this._debug(r, "error", e), H(e)) {
				let n = {
					data: null,
					error: e
				};
				return bi(e) || await this._removeSession(), (t = this.refreshingDeferred) == null || t.resolve(n), n;
			}
			throw (n = this.refreshingDeferred) == null || n.reject(e), e;
		} finally {
			this.refreshingDeferred = null, this._debug(r, "end");
		}
	}
	async _notifyAllSubscribers(e, t, n = !0) {
		let r = `#_notifyAllSubscribers(${e})`;
		this._debug(r, "begin", t, `broadcast = ${n}`);
		try {
			this.broadcastChannel && n && this.broadcastChannel.postMessage({
				event: e,
				session: t
			});
			let r = [], i = Array.from(this.stateChangeEmitters.values()).map(async (n) => {
				try {
					await n.callback(e, t);
				} catch (e) {
					r.push(e);
				}
			});
			if (await Promise.all(i), r.length > 0) {
				for (let e = 0; e < r.length; e += 1) console.error(r[e]);
				throw r[0];
			}
		} finally {
			this._debug(r, "end");
		}
	}
	async _saveSession(e) {
		this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await K(this.storage, `${this.storageKey}-code-verifier`);
		let t = Object.assign({}, e), n = t.user && t.user.__isUserNotAvailableProxy === !0;
		if (this.userStorage) {
			!n && t.user && await Hi(this.userStorage, this.storageKey + "-user", { user: t.user });
			let e = Object.assign({}, t);
			delete e.user;
			let r = sa(e);
			await Hi(this.storage, this.storageKey, r);
		} else {
			let e = sa(t);
			await Hi(this.storage, this.storageKey, e);
		}
	}
	async _removeSession() {
		this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await K(this.storage, this.storageKey), await K(this.storage, this.storageKey + "-code-verifier"), await K(this.storage, this.storageKey + "-user"), this.userStorage && await K(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
	}
	_removeVisibilityChangedCallback() {
		this._debug("#_removeVisibilityChangedCallback()");
		let e = this.visibilityChangedCallback;
		this.visibilityChangedCallback = null;
		try {
			e && G() && window != null && window.removeEventListener && window.removeEventListener("visibilitychange", e);
		} catch (e) {
			console.error("removing visibilitychange callback failed", e);
		}
	}
	async _startAutoRefresh() {
		await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
		let e = setInterval(() => this._autoRefreshTokenTick(), ei);
		this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e);
		let t = setTimeout(async () => {
			await this.initializePromise, await this._autoRefreshTokenTick();
		}, 0);
		this.autoRefreshTickTimeout = t, t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t);
	}
	async _stopAutoRefresh() {
		this._debug("#_stopAutoRefresh()");
		let e = this.autoRefreshTicker;
		this.autoRefreshTicker = null, e && clearInterval(e);
		let t = this.autoRefreshTickTimeout;
		this.autoRefreshTickTimeout = null, t && clearTimeout(t);
	}
	async startAutoRefresh() {
		this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
	}
	async stopAutoRefresh() {
		this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
	}
	async _autoRefreshTokenTick() {
		this._debug("#_autoRefreshTokenTick()", "begin");
		try {
			await this._acquireLock(0, async () => {
				try {
					let e = Date.now();
					try {
						return await this._useSession(async (t) => {
							let { data: { session: n } } = t;
							if (!n || !n.refresh_token || !n.expires_at) {
								this._debug("#_autoRefreshTokenTick()", "no session");
								return;
							}
							let r = Math.floor((n.expires_at * 1e3 - e) / ei);
							this._debug("#_autoRefreshTokenTick()", `access token expires in ${r} ticks, a tick lasts ${ei}ms, refresh threshold is 3 ticks`), r <= 3 && await this._callRefreshToken(n.refresh_token);
						});
					} catch (e) {
						console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
					}
				} finally {
					this._debug("#_autoRefreshTokenTick()", "end");
				}
			});
		} catch (e) {
			if (e.isAcquireTimeout || e instanceof Sa) this._debug("auto refresh token tick lock not available");
			else throw e;
		}
	}
	async _handleVisibilityChange() {
		if (this._debug("#_handleVisibilityChange()"), !G() || !(window != null && window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1;
		try {
			this.visibilityChangedCallback = async () => {
				try {
					await this._onVisibilityChanged(!1);
				} catch (e) {
					this._debug("#visibilityChangedCallback", "error", e);
				}
			}, window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
		} catch (e) {
			console.error("_handleVisibilityChange", e);
		}
	}
	async _onVisibilityChanged(e) {
		let t = `#_onVisibilityChanged(${e})`;
		this._debug(t, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
			if (document.visibilityState !== "visible") {
				this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
				return;
			}
			await this._recoverAndRefresh();
		}))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
	}
	async _getUrlForProvider(e, t, n) {
		let r = [`provider=${encodeURIComponent(t)}`];
		if (n?.redirectTo && r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), n?.scopes && r.push(`scopes=${encodeURIComponent(n.scopes)}`), this.flowType === "pkce") {
			let [e, t] = await Qi(this.storage, this.storageKey), n = new URLSearchParams({
				code_challenge: `${encodeURIComponent(e)}`,
				code_challenge_method: `${encodeURIComponent(t)}`
			});
			r.push(n.toString());
		}
		if (n?.queryParams) {
			let e = new URLSearchParams(n.queryParams);
			r.push(e.toString());
		}
		return n?.skipBrowserRedirect && r.push(`skip_http_redirect=${n.skipBrowserRedirect}`), `${e}?${r.join("&")}`;
	}
	async _unenroll(e) {
		try {
			return await this._useSession(async (t) => {
				let { data: n, error: r } = t;
				return r ? this._returnResult({
					data: null,
					error: r
				}) : await J(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
					headers: this.headers,
					jwt: n?.session?.access_token
				});
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _enroll(e) {
		try {
			return await this._useSession(async (t) => {
				let { data: n, error: r } = t;
				if (r) return this._returnResult({
					data: null,
					error: r
				});
				let i = Object.assign({
					friendly_name: e.friendlyName,
					factor_type: e.factorType
				}, e.factorType === "phone" ? { phone: e.phone } : e.factorType === "totp" ? { issuer: e.issuer } : {}), { data: a, error: o } = await J(this.fetch, "POST", `${this.url}/factors`, {
					body: i,
					headers: this.headers,
					jwt: n?.session?.access_token
				});
				return o ? this._returnResult({
					data: null,
					error: o
				}) : (e.factorType === "totp" && a.type === "totp" && a?.totp?.qr_code && (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`), this._returnResult({
					data: a,
					error: null
				}));
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _verify(e) {
		return this._acquireLock(this.lockAcquireTimeout, async () => {
			try {
				return await this._useSession(async (t) => {
					let { data: n, error: r } = t;
					if (r) return this._returnResult({
						data: null,
						error: r
					});
					let i = Object.assign({ challenge_id: e.challengeId }, "webauthn" in e ? { webauthn: Object.assign(Object.assign({}, e.webauthn), { credential_response: e.webauthn.type === "create" ? Ia(e.webauthn.credential_response) : La(e.webauthn.credential_response) }) } : { code: e.code }), { data: a, error: o } = await J(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
						body: i,
						headers: this.headers,
						jwt: n?.session?.access_token
					});
					return o ? this._returnResult({
						data: null,
						error: o
					}) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), this._returnResult({
						data: a,
						error: o
					}));
				});
			} catch (e) {
				if (H(e)) return this._returnResult({
					data: null,
					error: e
				});
				throw e;
			}
		});
	}
	async _challenge(e) {
		return this._acquireLock(this.lockAcquireTimeout, async () => {
			try {
				return await this._useSession(async (t) => {
					let { data: n, error: r } = t;
					if (r) return this._returnResult({
						data: null,
						error: r
					});
					let i = await J(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
						body: e,
						headers: this.headers,
						jwt: n?.session?.access_token
					});
					if (i.error) return i;
					let { data: a } = i;
					if (a.type !== "webauthn") return {
						data: a,
						error: null
					};
					switch (a.webauthn.type) {
						case "create": return {
							data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: Pa(a.webauthn.credential_options.publicKey) }) }) }),
							error: null
						};
						case "request": return {
							data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: Fa(a.webauthn.credential_options.publicKey) }) }) }),
							error: null
						};
					}
				});
			} catch (e) {
				if (H(e)) return this._returnResult({
					data: null,
					error: e
				});
				throw e;
			}
		});
	}
	async _challengeAndVerify(e) {
		let { data: t, error: n } = await this._challenge({ factorId: e.factorId });
		return n ? this._returnResult({
			data: null,
			error: n
		}) : await this._verify({
			factorId: e.factorId,
			challengeId: t.id,
			code: e.code
		});
	}
	async _listFactors() {
		let { data: { user: e }, error: t } = await this.getUser();
		if (t) return {
			data: null,
			error: t
		};
		let n = {
			all: [],
			phone: [],
			totp: [],
			webauthn: []
		};
		for (let t of e?.factors ?? []) n.all.push(t), t.status === "verified" && n[t.factor_type].push(t);
		return {
			data: n,
			error: null
		};
	}
	async _getAuthenticatorAssuranceLevel(e) {
		if (e) try {
			let { payload: t } = Gi(e), n = null;
			t.aal && (n = t.aal);
			let r = n, { data: { user: i }, error: a } = await this.getUser(e);
			if (a) return this._returnResult({
				data: null,
				error: a
			});
			((i?.factors)?.filter((e) => e.status === "verified") ?? []).length > 0 && (r = "aal2");
			let o = t.amr || [];
			return {
				data: {
					currentLevel: n,
					nextLevel: r,
					currentAuthenticationMethods: o
				},
				error: null
			};
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
		let { data: { session: t }, error: n } = await this.getSession();
		if (n) return this._returnResult({
			data: null,
			error: n
		});
		if (!t) return {
			data: {
				currentLevel: null,
				nextLevel: null,
				currentAuthenticationMethods: []
			},
			error: null
		};
		let { payload: r } = Gi(t.access_token), i = null;
		r.aal && (i = r.aal);
		let a = i;
		(t.user.factors?.filter((e) => e.status === "verified") ?? []).length > 0 && (a = "aal2");
		let o = r.amr || [];
		return {
			data: {
				currentLevel: i,
				nextLevel: a,
				currentAuthenticationMethods: o
			},
			error: null
		};
	}
	async _getAuthorizationDetails(e) {
		try {
			return await this._useSession(async (t) => {
				let { data: { session: n }, error: r } = t;
				return r ? this._returnResult({
					data: null,
					error: r
				}) : n ? await J(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
					headers: this.headers,
					jwt: n.access_token,
					xform: (e) => ({
						data: e,
						error: null
					})
				}) : this._returnResult({
					data: null,
					error: new W()
				});
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _approveAuthorization(e, t) {
		try {
			return await this._useSession(async (n) => {
				let { data: { session: r }, error: i } = n;
				if (i) return this._returnResult({
					data: null,
					error: i
				});
				if (!r) return this._returnResult({
					data: null,
					error: new W()
				});
				let a = await J(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
					headers: this.headers,
					jwt: r.access_token,
					body: { action: "approve" },
					xform: (e) => ({
						data: e,
						error: null
					})
				});
				return a.data && a.data.redirect_url && G() && !t?.skipBrowserRedirect && window.location.assign(a.data.redirect_url), a;
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _denyAuthorization(e, t) {
		try {
			return await this._useSession(async (n) => {
				let { data: { session: r }, error: i } = n;
				if (i) return this._returnResult({
					data: null,
					error: i
				});
				if (!r) return this._returnResult({
					data: null,
					error: new W()
				});
				let a = await J(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
					headers: this.headers,
					jwt: r.access_token,
					body: { action: "deny" },
					xform: (e) => ({
						data: e,
						error: null
					})
				});
				return a.data && a.data.redirect_url && G() && !t?.skipBrowserRedirect && window.location.assign(a.data.redirect_url), a;
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _listOAuthGrants() {
		try {
			return await this._useSession(async (e) => {
				let { data: { session: t }, error: n } = e;
				return n ? this._returnResult({
					data: null,
					error: n
				}) : t ? await J(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
					headers: this.headers,
					jwt: t.access_token,
					xform: (e) => ({
						data: e,
						error: null
					})
				}) : this._returnResult({
					data: null,
					error: new W()
				});
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _revokeOAuthGrant(e) {
		try {
			return await this._useSession(async (t) => {
				let { data: { session: n }, error: r } = t;
				return r ? this._returnResult({
					data: null,
					error: r
				}) : n ? (await J(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
					headers: this.headers,
					jwt: n.access_token,
					query: { client_id: e.clientId },
					noResolveJson: !0
				}), {
					data: {},
					error: null
				}) : this._returnResult({
					data: null,
					error: new W()
				});
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async fetchJwk(e, t = { keys: [] }) {
		let n = t.keys.find((t) => t.kid === e);
		if (n) return n;
		let r = Date.now();
		if (n = this.jwks.keys.find((t) => t.kid === e), n && this.jwks_cached_at + 6e5 > r) return n;
		let { data: i, error: a } = await J(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, { headers: this.headers });
		if (a) throw a;
		return !i.keys || i.keys.length === 0 || (this.jwks = i, this.jwks_cached_at = r, n = i.keys.find((t) => t.kid === e), !n) ? null : n;
	}
	async getClaims(e, t = {}) {
		try {
			let n = e;
			if (!n) {
				let { data: e, error: t } = await this.getSession();
				if (t || !e.session) return this._returnResult({
					data: null,
					error: t
				});
				n = e.session.access_token;
			}
			let { header: r, payload: i, signature: a, raw: { header: o, payload: s } } = Gi(n);
			t?.allowExpired || ta(i.exp);
			let c = !r.alg || r.alg.startsWith("HS") || !r.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(r.kid, t?.keys ? { keys: t.keys } : t?.jwks);
			if (!c) {
				let { error: e } = await this.getUser(n);
				if (e) throw e;
				return {
					data: {
						claims: i,
						header: r,
						signature: a
					},
					error: null
				};
			}
			let l = na(r.alg), u = await crypto.subtle.importKey("jwk", c, l, !0, ["verify"]);
			if (!await crypto.subtle.verify(l, u, a, Ni(`${o}.${s}`))) throw new Si("Invalid JWT signature");
			return {
				data: {
					claims: i,
					header: r,
					signature: a
				},
				error: null
			};
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async signInWithPasskey(e) {
		q(this.experimental);
		try {
			if (!za()) return this._returnResult({
				data: null,
				error: new U("Browser does not support WebAuthn", null)
			});
			let { data: t, error: n } = await this._startPasskeyAuthentication({ options: { captchaToken: e?.options?.captchaToken } });
			if (n || !t) return this._returnResult({
				data: null,
				error: n
			});
			let { data: r, error: i } = await Va({
				publicKey: Fa(t.options),
				signal: e?.options?.signal ?? Na.createNewAbortSignal()
			});
			if (i || !r) return this._returnResult({
				data: null,
				error: i ?? new U("WebAuthn ceremony failed", null)
			});
			let a = La(r);
			return this._verifyPasskeyAuthentication({
				challengeId: t.challenge_id,
				credential: a
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async registerPasskey(e) {
		q(this.experimental);
		try {
			if (!za()) return this._returnResult({
				data: null,
				error: new U("Browser does not support WebAuthn", null)
			});
			let { data: t, error: n } = await this._startPasskeyRegistration();
			if (n || !t) return this._returnResult({
				data: null,
				error: n
			});
			let { data: r, error: i } = await Ba({
				publicKey: Pa(t.options),
				signal: e?.options?.signal ?? Na.createNewAbortSignal()
			});
			if (i || !r) return this._returnResult({
				data: null,
				error: i ?? new U("WebAuthn ceremony failed", null)
			});
			let a = Ia(r);
			return this._verifyPasskeyRegistration({
				challengeId: t.challenge_id,
				credential: a
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _startPasskeyRegistration() {
		q(this.experimental);
		try {
			return await this._useSession(async (e) => {
				let { data: { session: t }, error: n } = e;
				if (n) return this._returnResult({
					data: null,
					error: n
				});
				if (!t) return this._returnResult({
					data: null,
					error: new W()
				});
				let { data: r, error: i } = await J(this.fetch, "POST", `${this.url}/passkeys/registration/options`, {
					headers: this.headers,
					jwt: t.access_token,
					body: {}
				});
				return i ? this._returnResult({
					data: null,
					error: i
				}) : this._returnResult({
					data: r,
					error: null
				});
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _verifyPasskeyRegistration(e) {
		q(this.experimental);
		try {
			return await this._useSession(async (t) => {
				let { data: { session: n }, error: r } = t;
				if (r) return this._returnResult({
					data: null,
					error: r
				});
				if (!n) return this._returnResult({
					data: null,
					error: new W()
				});
				let { data: i, error: a } = await J(this.fetch, "POST", `${this.url}/passkeys/registration/verify`, {
					headers: this.headers,
					jwt: n.access_token,
					body: {
						challenge_id: e.challengeId,
						credential: e.credential
					}
				});
				return a ? this._returnResult({
					data: null,
					error: a
				}) : this._returnResult({
					data: i,
					error: null
				});
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _startPasskeyAuthentication(e) {
		q(this.experimental);
		try {
			let { data: t, error: n } = await J(this.fetch, "POST", `${this.url}/passkeys/authentication/options`, {
				headers: this.headers,
				body: { gotrue_meta_security: { captcha_token: e?.options?.captchaToken } }
			});
			return n ? this._returnResult({
				data: null,
				error: n
			}) : this._returnResult({
				data: t,
				error: null
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _verifyPasskeyAuthentication(e) {
		q(this.experimental);
		try {
			let { data: t, error: n } = await J(this.fetch, "POST", `${this.url}/passkeys/authentication/verify`, {
				headers: this.headers,
				body: {
					challenge_id: e.challengeId,
					credential: e.credential
				},
				xform: Y
			});
			return n ? this._returnResult({
				data: null,
				error: n
			}) : (t.session && (await this._saveSession(t.session), await this._notifyAllSubscribers("SIGNED_IN", t.session)), this._returnResult({
				data: t,
				error: null
			}));
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _listPasskeys() {
		q(this.experimental);
		try {
			return await this._useSession(async (e) => {
				let { data: { session: t }, error: n } = e;
				if (n) return this._returnResult({
					data: null,
					error: n
				});
				if (!t) return this._returnResult({
					data: null,
					error: new W()
				});
				let { data: r, error: i } = await J(this.fetch, "GET", `${this.url}/passkeys`, {
					headers: this.headers,
					jwt: t.access_token,
					xform: (e) => ({
						data: e,
						error: null
					})
				});
				return i ? this._returnResult({
					data: null,
					error: i
				}) : this._returnResult({
					data: r,
					error: null
				});
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _updatePasskey(e) {
		q(this.experimental);
		try {
			return await this._useSession(async (t) => {
				let { data: { session: n }, error: r } = t;
				if (r) return this._returnResult({
					data: null,
					error: r
				});
				if (!n) return this._returnResult({
					data: null,
					error: new W()
				});
				let { data: i, error: a } = await J(this.fetch, "PATCH", `${this.url}/passkeys/${e.passkeyId}`, {
					headers: this.headers,
					jwt: n.access_token,
					body: { friendly_name: e.friendlyName }
				});
				return a ? this._returnResult({
					data: null,
					error: a
				}) : this._returnResult({
					data: i,
					error: null
				});
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _deletePasskey(e) {
		q(this.experimental);
		try {
			return await this._useSession(async (t) => {
				let { data: { session: n }, error: r } = t;
				if (r) return this._returnResult({
					data: null,
					error: r
				});
				if (!n) return this._returnResult({
					data: null,
					error: new W()
				});
				let { error: i } = await J(this.fetch, "DELETE", `${this.url}/passkeys/${e.passkeyId}`, {
					headers: this.headers,
					jwt: n.access_token,
					noResolveJson: !0
				});
				return i ? this._returnResult({
					data: null,
					error: i
				}) : this._returnResult({
					data: null,
					error: null
				});
			});
		} catch (e) {
			if (H(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
};
Za.nextInstanceID = {};
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/AuthClient.js
var Qa = Za, $a = "2.105.1", eo = "";
eo = typeof Deno < "u" ? "deno" : typeof document < "u" ? "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? "react-native" : "node";
var to = { headers: { "X-Client-Info": `supabase-js-${eo}/${$a}` } }, no = { schema: "public" }, ro = {
	autoRefreshToken: !0,
	persistSession: !0,
	detectSessionInUrl: !0,
	flowType: "implicit"
}, io = {};
function ao(e) {
	"@babel/helpers - typeof";
	return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, ao(e);
}
function oo(e, t) {
	if (ao(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (ao(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function so(e) {
	var t = oo(e, "string");
	return ao(t) == "symbol" ? t : t + "";
}
function co(e, t, n) {
	return (t = so(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function lo(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Q(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? lo(Object(n), !0).forEach(function(t) {
			co(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lo(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var uo = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), fo = () => Headers, po = (e, t, n) => {
	let r = uo(n), i = fo();
	return async (n, a) => {
		let o = await t() ?? e, s = new i(a?.headers);
		return s.has("apikey") || s.set("apikey", e), s.has("Authorization") || s.set("Authorization", `Bearer ${o}`), r(n, Q(Q({}, a), {}, { headers: s }));
	};
};
function mo(e) {
	return e.endsWith("/") ? e : e + "/";
}
function ho(e, t) {
	let { db: n, auth: r, realtime: i, global: a } = e, { db: o, auth: s, realtime: c, global: l } = t, u = {
		db: Q(Q({}, o), n),
		auth: Q(Q({}, s), r),
		realtime: Q(Q({}, c), i),
		storage: {},
		global: Q(Q(Q({}, l), a), {}, { headers: Q(Q({}, l?.headers ?? {}), a?.headers ?? {}) }),
		accessToken: async () => ""
	};
	return e.accessToken ? u.accessToken = e.accessToken : delete u.accessToken, u;
}
function go(e) {
	let t = e?.trim();
	if (!t) throw Error("supabaseUrl is required.");
	if (!t.match(/^https?:\/\//i)) throw Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
	try {
		return new URL(mo(t));
	} catch {
		throw Error("Invalid supabaseUrl: Provided URL is malformed.");
	}
}
var _o = class extends Qa {
	constructor(e) {
		super(e);
	}
}, vo = class {
	constructor(e, t, n) {
		this.supabaseUrl = e, this.supabaseKey = t;
		let r = go(e);
		if (!t) throw Error("supabaseKey is required.");
		this.realtimeUrl = new URL("realtime/v1", r), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", r), this.storageUrl = new URL("storage/v1", r), this.functionsUrl = new URL("functions/v1", r);
		let i = `sb-${r.hostname.split(".")[0]}-auth-token`, a = {
			db: no,
			realtime: io,
			auth: Q(Q({}, ro), {}, { storageKey: i }),
			global: to
		}, o = ho(n ?? {}, a);
		this.storageKey = o.auth.storageKey ?? "", this.headers = o.global.headers ?? {}, o.accessToken ? (this.accessToken = o.accessToken, this.auth = new Proxy({}, { get: (e, t) => {
			throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`);
		} })) : this.auth = this._initSupabaseAuthClient(o.auth ?? {}, this.headers, o.global.fetch), this.fetch = po(t, this._getAccessToken.bind(this), o.global.fetch), this.realtime = this._initRealtimeClient(Q({
			headers: this.headers,
			accessToken: this._getAccessToken.bind(this),
			fetch: this.fetch
		}, o.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((e) => this.realtime.setAuth(e)).catch((e) => console.warn("Failed to set initial Realtime auth token:", e)), this.rest = new Xt(new URL("rest/v1", r).href, {
			headers: this.headers,
			schema: o.db.schema,
			fetch: this.fetch,
			timeout: o.db.timeout,
			urlLengthLimit: o.db.urlLengthLimit
		}), this.storage = new Qr(this.storageUrl.href, this.headers, this.fetch, n?.storage), o.accessToken || this._listenForAuthEvents();
	}
	get functions() {
		return new jt(this.functionsUrl.href, {
			headers: this.headers,
			customFetch: this.fetch
		});
	}
	from(e) {
		return this.rest.from(e);
	}
	schema(e) {
		return this.rest.schema(e);
	}
	rpc(e, t = {}, n = {
		head: !1,
		get: !1,
		count: void 0
	}) {
		return this.rest.rpc(e, t, n);
	}
	channel(e, t = { config: {} }) {
		return this.realtime.channel(e, t);
	}
	getChannels() {
		return this.realtime.getChannels();
	}
	removeChannel(e) {
		return this.realtime.removeChannel(e);
	}
	removeAllChannels() {
		return this.realtime.removeAllChannels();
	}
	async _getAccessToken() {
		var e = this;
		if (e.accessToken) return await e.accessToken();
		let { data: t } = await e.auth.getSession();
		return t.session?.access_token ?? e.supabaseKey;
	}
	_initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: n, storage: r, userStorage: i, storageKey: a, flowType: o, lock: s, debug: c, throwOnError: l, experimental: u }, d, f) {
		let p = {
			Authorization: `Bearer ${this.supabaseKey}`,
			apikey: `${this.supabaseKey}`
		};
		return new _o({
			url: this.authUrl.href,
			headers: Q(Q({}, p), d),
			storageKey: a,
			autoRefreshToken: e,
			persistSession: t,
			detectSessionInUrl: n,
			storage: r,
			userStorage: i,
			flowType: o,
			lock: s,
			debug: c,
			throwOnError: l,
			experimental: u,
			fetch: f,
			hasCustomAuthorizationHeader: Object.keys(this.headers).some((e) => e.toLowerCase() === "authorization")
		});
	}
	_initRealtimeClient(e) {
		return new nr(this.realtimeUrl.href, Q(Q({}, e), {}, { params: Q(Q({}, { apikey: this.supabaseKey }), e?.params) }));
	}
	_listenForAuthEvents() {
		return this.auth.onAuthStateChange((e, t) => {
			this._handleTokenChanged(e, "CLIENT", t?.access_token);
		});
	}
	_handleTokenChanged(e, t, n) {
		(e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== n ? (this.changedAccessToken = n, this.realtime.setAuth(n)) : e === "SIGNED_OUT" && (this.realtime.setAuth(), t == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
	}
}, yo = (e, t, n) => new vo(e, t, n);
function bo() {
	if (typeof window < "u") return !1;
	let e = globalThis.process;
	if (!e) return !1;
	let t = e.version;
	if (t == null) return !1;
	let n = t.match(/^v(\d+)\./);
	return n ? parseInt(n[1], 10) <= 18 : !1;
}
bo() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
//#endregion
//#region node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var xo = 0;
Array.isArray;
function $(e, n, r, i, a, o) {
	n ||= {};
	var s, c, l = n;
	if ("ref" in l) for (c in l = {}, n) c == "ref" ? s = n[c] : l[c] = n[c];
	var u = {
		type: e,
		props: l,
		key: r,
		ref: s,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --xo,
		__i: -1,
		__u: 0,
		__source: a,
		__self: o
	};
	if (typeof e == "function" && (s = e.defaultProps)) for (c in s) l[c] === void 0 && (l[c] = s[c]);
	return t.vnode && t.vnode(u), u;
}
//#endregion
//#region src/AuthWidget.tsx
function So(e, t) {
	if (typeof document > "u") return e && t ? yo(e, t, { auth: {
		persistSession: !0,
		autoRefreshToken: !0,
		detectSessionInUrl: !0
	} }) : null;
	let n = new CustomEvent("anubis-need-supabase", {
		detail: {},
		bubbles: !0,
		composed: !0
	});
	document.dispatchEvent(n);
	let r = n.detail.client;
	if (r) return r;
	if (!e || !t) return null;
	let i = yo(e, t, { auth: {
		persistSession: !0,
		autoRefreshToken: !0,
		detectSessionInUrl: !0
	} });
	return document.addEventListener("anubis-need-supabase", (e) => {
		let t = e.detail;
		t && !t.client && (t.client = i);
	}), i;
}
var Co = {
	en: {
		login: "Login",
		logout: "Logout",
		startTitle: "Sign in to Anubis World",
		startSubtitle: "Choose how you'd like to continue",
		continueWithEmail: "Continue with email",
		back: "Back",
		tabSignIn: "Sign In",
		tabSignUp: "Sign Up",
		emailLabel: "Email",
		passwordLabel: "Password",
		nicknameLabel: "Minecraft nickname",
		signInSubmit: "Sign in",
		signUpSubmit: "Create account",
		forgotPassword: "Forgot password?",
		forgotChoiceTitle: "How would you like to recover access?",
		forgotChoiceOtpTitle: "Sign in without password",
		forgotChoiceOtpHint: "We email an 8-digit code. Enter it to sign in once — your existing password stays.",
		forgotChoiceResetTitle: "Set a new password",
		forgotChoiceResetHint: "We email a link. Click it to choose a new password — no code needed.",
		forgotOtpIntro: "Enter your email — we'll send a one-time code to sign you in.",
		forgotResetIntro: "Enter your email — we'll send a link to set a new password.",
		forgotSendCode: "Send code",
		forgotCodeSent: "Code sent to",
		forgotCodeLabel: "One-time code",
		forgotVerify: "Verify and sign in",
		forgotResend: "Resend code",
		forgotBack: "Back to sign in",
		forgotEmailFirst: "Enter your email first",
		forgotInvalidCode: "Code must be 6-8 digits",
		forgotSendResetLink: "Send reset link",
		forgotResetSent: "Reset link sent to",
		forgotResetSentBody: "Open the email and click the button to set a new password.",
		forgotResetSentLauncherBody: "Open the email in your browser, set a new password, then return here and sign in.",
		forgotResetDone: "Done",
		needNickname: "No nickname on this account yet — set one below",
		nickFormatErr: "Nick 3-16 chars: letters, digits, underscore",
		nickTakenErr: "This nickname is already taken",
		orDivider: "or",
		signInDiscord: "Sign in with Discord",
		setNickTitle: "Choose your Minecraft nickname",
		setNickHint: "This name will be shown in-game. It cannot be changed later.",
		setNickPlaceholder: "Steve_99",
		setNickSubmit: "Save",
		welcome: "Welcome!",
		welcomeYourNick: "Your nickname:",
		welcomeContinue: "Continue",
		welcomeOpenLauncher: "Open launcher",
		welcomeOpenLauncherHint: "Already installed? Jump straight to the game.",
		resetTitle: "Set a new password",
		resetHint: "You're signed in via the recovery link. Choose a new password to use next time.",
		newPasswordLabel: "New password",
		confirmPasswordLabel: "Confirm password",
		resetSubmit: "Update password",
		passwordTooShort: "Password must be at least 6 characters",
		passwordMismatch: "Passwords don't match"
	},
	ru: {
		login: "Войти",
		logout: "Выйти",
		startTitle: "Вход в Anubis World",
		startSubtitle: "Выбери способ авторизации",
		continueWithEmail: "Продолжить через email",
		back: "Назад",
		tabSignIn: "Вход",
		tabSignUp: "Регистрация",
		emailLabel: "Email",
		passwordLabel: "Пароль",
		nicknameLabel: "Никнейм в Minecraft",
		signInSubmit: "Войти",
		signUpSubmit: "Создать аккаунт",
		forgotPassword: "Забыли пароль?",
		forgotChoiceTitle: "Как восстановить доступ?",
		forgotChoiceOtpTitle: "Войти без пароля",
		forgotChoiceOtpHint: "Пришлём 8-значный код на email. Введи его и войдёшь — пароль останется прежний.",
		forgotChoiceResetTitle: "Установить новый пароль",
		forgotChoiceResetHint: "Пришлём ссылку. Кликнешь — выберешь новый пароль (код не нужен).",
		forgotOtpIntro: "Введи свой email — мы отправим одноразовый код для входа.",
		forgotResetIntro: "Введи email — пришлём ссылку для установки нового пароля.",
		forgotSendCode: "Отправить код",
		forgotCodeSent: "Код отправлен на",
		forgotCodeLabel: "Одноразовый код",
		forgotVerify: "Проверить и войти",
		forgotResend: "Отправить код заново",
		forgotBack: "Назад к входу",
		forgotEmailFirst: "Сначала введите email",
		forgotInvalidCode: "Код должен быть 6-8 цифр",
		forgotSendResetLink: "Отправить ссылку",
		forgotResetSent: "Ссылка отправлена на",
		forgotResetSentBody: "Открой письмо и нажми на кнопку — выберешь новый пароль.",
		forgotResetSentLauncherBody: "Открой письмо в браузере, установи новый пароль, потом вернись сюда и войди.",
		forgotResetDone: "Готово",
		needNickname: "У аккаунта ещё нет ника — выбери ниже",
		nickFormatErr: "Ник 3-16 символов: латиница, цифры, _",
		nickTakenErr: "Этот ник уже занят",
		orDivider: "или",
		signInDiscord: "Войти через Discord",
		setNickTitle: "Выбери ник для Minecraft",
		setNickHint: "Этот ник будет отображаться в игре. Изменить позже нельзя.",
		setNickPlaceholder: "Steve_99",
		setNickSubmit: "Сохранить",
		welcome: "Добро пожаловать!",
		welcomeYourNick: "Твой ник:",
		welcomeContinue: "Продолжить",
		welcomeOpenLauncher: "Открыть лаунчер",
		welcomeOpenLauncherHint: "Уже установлен? Запусти и зайди в игру.",
		resetTitle: "Установи новый пароль",
		resetHint: "Ты вошёл по recovery-ссылке. Выбери новый пароль для входа в следующий раз.",
		newPasswordLabel: "Новый пароль",
		confirmPasswordLabel: "Подтверди пароль",
		resetSubmit: "Обновить пароль",
		passwordTooShort: "Пароль должен быть минимум 6 символов",
		passwordMismatch: "Пароли не совпадают"
	},
	uk: {
		login: "Увійти",
		logout: "Вийти",
		startTitle: "Вхід до Anubis World",
		startSubtitle: "Обери спосіб авторизації",
		continueWithEmail: "Продовжити через email",
		back: "Назад",
		tabSignIn: "Вхід",
		tabSignUp: "Реєстрація",
		emailLabel: "Email",
		passwordLabel: "Пароль",
		nicknameLabel: "Нікнейм у Minecraft",
		signInSubmit: "Увійти",
		signUpSubmit: "Створити акаунт",
		forgotPassword: "Забули пароль?",
		forgotChoiceTitle: "Як відновити доступ?",
		forgotChoiceOtpTitle: "Увійти без паролю",
		forgotChoiceOtpHint: "Надішлемо 8-значний код на email. Введи його — увійдеш, пароль залишиться старий.",
		forgotChoiceResetTitle: "Встановити новий пароль",
		forgotChoiceResetHint: "Надішлемо посилання. Клікнеш — обереш новий пароль (код не потрібен).",
		forgotOtpIntro: "Введи свій email — надішлемо одноразовий код для входу.",
		forgotResetIntro: "Введи email — надішлемо посилання для встановлення нового пароля.",
		forgotSendCode: "Надіслати код",
		forgotCodeSent: "Код надіслано на",
		forgotCodeLabel: "Одноразовий код",
		forgotVerify: "Перевірити та увійти",
		forgotResend: "Надіслати код повторно",
		forgotBack: "Назад до входу",
		forgotEmailFirst: "Спочатку вкажи email",
		forgotInvalidCode: "Код має містити 6-8 цифр",
		forgotSendResetLink: "Надіслати посилання",
		forgotResetSent: "Посилання надіслано на",
		forgotResetSentBody: "Відкрий лист і натисни кнопку — обереш новий пароль.",
		forgotResetSentLauncherBody: "Відкрий лист у браузері, встанови новий пароль, потім повернись сюди й увійди.",
		forgotResetDone: "Готово",
		needNickname: "У акаунта ще нема ніка — обери нижче",
		nickFormatErr: "Нік 3-16 символів: латиниця, цифри, _",
		nickTakenErr: "Цей нік вже зайнято",
		orDivider: "або",
		signInDiscord: "Увійти через Discord",
		setNickTitle: "Обери нік для Minecraft",
		setNickHint: "Цей нік буде відображатися у грі. Змінити пізніше не можна.",
		setNickPlaceholder: "Steve_99",
		setNickSubmit: "Зберегти",
		welcome: "Ласкаво просимо!",
		welcomeYourNick: "Твій нік:",
		welcomeContinue: "Продовжити",
		welcomeOpenLauncher: "Відкрити лаунчер",
		welcomeOpenLauncherHint: "Вже встановлено? Запусти та заходь у гру.",
		resetTitle: "Встанови новий пароль",
		resetHint: "Ти увійшов через recovery-посилання. Обери новий пароль для наступного входу.",
		newPasswordLabel: "Новий пароль",
		confirmPasswordLabel: "Підтверди пароль",
		resetSubmit: "Оновити пароль",
		passwordTooShort: "Пароль має бути мінімум 6 символів",
		passwordMismatch: "Паролі не співпадають"
	},
	de: {
		login: "Anmelden",
		logout: "Abmelden",
		startTitle: "Anmeldung bei Anubis World",
		startSubtitle: "Wähle, wie du fortfahren möchtest",
		continueWithEmail: "Weiter mit E-Mail",
		back: "Zurück",
		tabSignIn: "Anmeldung",
		tabSignUp: "Registrierung",
		emailLabel: "E-Mail",
		passwordLabel: "Passwort",
		nicknameLabel: "Minecraft-Nickname",
		signInSubmit: "Anmelden",
		signUpSubmit: "Konto erstellen",
		forgotPassword: "Passwort vergessen?",
		forgotChoiceTitle: "Wie möchtest du den Zugang wiederherstellen?",
		forgotChoiceOtpTitle: "Ohne Passwort anmelden",
		forgotChoiceOtpHint: "Wir senden einen 8-stelligen Code per E-Mail. Gib ihn ein, um dich anzumelden — dein Passwort bleibt unverändert.",
		forgotChoiceResetTitle: "Neues Passwort festlegen",
		forgotChoiceResetHint: "Wir senden einen Link. Klicke ihn an, um ein neues Passwort zu wählen — kein Code nötig.",
		forgotOtpIntro: "Gib deine E-Mail ein — wir senden dir einen Einmal-Code zur Anmeldung.",
		forgotResetIntro: "Gib deine E-Mail ein — wir senden dir einen Link zum Festlegen eines neuen Passworts.",
		forgotSendCode: "Code senden",
		forgotCodeSent: "Code gesendet an",
		forgotCodeLabel: "Einmal-Code",
		forgotVerify: "Bestätigen und anmelden",
		forgotResend: "Code erneut senden",
		forgotBack: "Zurück zur Anmeldung",
		forgotEmailFirst: "Bitte zuerst E-Mail eingeben",
		forgotInvalidCode: "Der Code muss 6-8 Ziffern enthalten",
		forgotSendResetLink: "Link senden",
		forgotResetSent: "Link gesendet an",
		forgotResetSentBody: "Öffne die E-Mail und klicke auf den Button, um ein neues Passwort zu wählen.",
		forgotResetSentLauncherBody: "Öffne die E-Mail im Browser, lege ein neues Passwort fest und kehre dann hierher zurück, um dich anzumelden.",
		forgotResetDone: "Fertig",
		needNickname: "Dieses Konto hat noch keinen Nick — wähle unten einen",
		nickFormatErr: "Nick 3-16 Zeichen: Buchstaben, Ziffern, _",
		nickTakenErr: "Dieser Nickname ist bereits vergeben",
		orDivider: "oder",
		signInDiscord: "Mit Discord anmelden",
		setNickTitle: "Wähle deinen Minecraft-Nickname",
		setNickHint: "Dieser Name wird im Spiel angezeigt. Kann später nicht geändert werden.",
		setNickPlaceholder: "Steve_99",
		setNickSubmit: "Speichern",
		welcome: "Willkommen!",
		welcomeYourNick: "Dein Nickname:",
		welcomeContinue: "Weiter",
		welcomeOpenLauncher: "Launcher öffnen",
		welcomeOpenLauncherHint: "Schon installiert? Direkt ins Spiel springen.",
		resetTitle: "Neues Passwort festlegen",
		resetHint: "Du bist über den Recovery-Link angemeldet. Wähle ein neues Passwort für die nächste Anmeldung.",
		newPasswordLabel: "Neues Passwort",
		confirmPasswordLabel: "Passwort bestätigen",
		resetSubmit: "Passwort aktualisieren",
		passwordTooShort: "Passwort muss mindestens 6 Zeichen haben",
		passwordMismatch: "Passwörter stimmen nicht überein"
	},
	pl: {
		login: "Zaloguj",
		logout: "Wyloguj",
		startTitle: "Zaloguj do Anubis World",
		startSubtitle: "Wybierz sposób logowania",
		continueWithEmail: "Kontynuuj z e-mailem",
		back: "Wstecz",
		tabSignIn: "Logowanie",
		tabSignUp: "Rejestracja",
		emailLabel: "Email",
		passwordLabel: "Hasło",
		nicknameLabel: "Nick w Minecraft",
		signInSubmit: "Zaloguj",
		signUpSubmit: "Utwórz konto",
		forgotPassword: "Zapomniałeś hasła?",
		forgotChoiceTitle: "Jak chcesz odzyskać dostęp?",
		forgotChoiceOtpTitle: "Zaloguj bez hasła",
		forgotChoiceOtpHint: "Wyślemy 8-cyfrowy kod na email. Wpisz go, aby się zalogować — hasło pozostanie bez zmian.",
		forgotChoiceResetTitle: "Ustaw nowe hasło",
		forgotChoiceResetHint: "Wyślemy link. Kliknij go, aby ustawić nowe hasło (kod niepotrzebny).",
		forgotOtpIntro: "Wpisz email — wyślemy jednorazowy kod do zalogowania.",
		forgotResetIntro: "Wpisz email — wyślemy link do ustawienia nowego hasła.",
		forgotSendCode: "Wyślij kod",
		forgotCodeSent: "Kod wysłany na",
		forgotCodeLabel: "Kod jednorazowy",
		forgotVerify: "Zweryfikuj i zaloguj",
		forgotResend: "Wyślij kod ponownie",
		forgotBack: "Wstecz",
		forgotEmailFirst: "Najpierw wpisz email",
		forgotInvalidCode: "Kod musi mieć 6-8 cyfr",
		forgotSendResetLink: "Wyślij link",
		forgotResetSent: "Link wysłany na",
		forgotResetSentBody: "Otwórz email i kliknij przycisk, aby wybrać nowe hasło.",
		forgotResetSentLauncherBody: "Otwórz email w przeglądarce, ustaw nowe hasło, potem wróć tutaj i zaloguj się.",
		forgotResetDone: "Gotowe",
		needNickname: "To konto nie ma jeszcze nicka — wybierz poniżej",
		nickFormatErr: "Nick 3-16 znaków: litery, cyfry, _",
		nickTakenErr: "Ten nick jest już zajęty",
		orDivider: "lub",
		signInDiscord: "Zaloguj przez Discord",
		setNickTitle: "Wybierz swój nick w Minecraft",
		setNickHint: "Ta nazwa będzie wyświetlana w grze. Nie można jej później zmienić.",
		setNickPlaceholder: "Steve_99",
		setNickSubmit: "Zapisz",
		welcome: "Witaj!",
		welcomeYourNick: "Twój nick:",
		welcomeContinue: "Kontynuuj",
		welcomeOpenLauncher: "Otwórz launcher",
		welcomeOpenLauncherHint: "Już zainstalowany? Skacz prosto do gry.",
		resetTitle: "Ustaw nowe hasło",
		resetHint: "Zalogowałeś się przez link recovery. Wybierz nowe hasło na następne logowanie.",
		newPasswordLabel: "Nowe hasło",
		confirmPasswordLabel: "Potwierdź hasło",
		resetSubmit: "Aktualizuj hasło",
		passwordTooShort: "Hasło musi mieć co najmniej 6 znaków",
		passwordMismatch: "Hasła nie zgadzają się"
	}
};
function wo(e) {
	let t = (e || "en").slice(0, 2).toLowerCase();
	return t in Co ? Co[t] : Co.en;
}
function To() {
	if (!(typeof window > "u")) return window.location.origin + window.location.pathname + window.location.search;
}
var Eo = /^[a-zA-Z0-9_]{3,16}$/;
function Do({ supabaseUrl: e, supabaseKey: t, lang: n, launcherProtocol: r, mode: i }) {
	let a = wo(n), o = (r || "anubisworld").replace(/[^a-z0-9-]/gi, ""), s = i === "launcher", c = He(null);
	c.current ||= So(e, t);
	let l = c.current, [u, d] = P(null), [f, p] = P(null), [m, h] = P(!0), [g, _] = P(s), [v, y] = P("auth"), [b, x] = P(!1), S = He(""), C = He(!1);
	Ve(() => {
		C.current = g;
	}, [g]);
	let w = He(null);
	function T(e) {
		document.dispatchEvent(new CustomEvent("auth-changed", {
			detail: e,
			bubbles: !0,
			composed: !0
		}));
	}
	Ve(() => {
		if (!u?.user || !f) {
			S.current = "";
			return;
		}
		let e = `${u.user.id}:${f}`;
		S.current !== e && (S.current = e, document.dispatchEvent(new CustomEvent("anubis-auth-success", {
			detail: {
				userId: u.user.id,
				email: u.user.email ?? null,
				nick: f,
				accessToken: u.access_token,
				refreshToken: u.refresh_token
			},
			bubbles: !0,
			composed: !0
		})));
	}, [u?.user?.id, f]);
	async function ee(e, t = {}) {
		if (!l || !e) {
			p(null), T({
				user: null,
				nick: null
			});
			return;
		}
		let { data: n } = await l.from("profiles").select("minecraft_nick").eq("id", e.id).maybeSingle();
		if (n?.minecraft_nick) w.current = null, p(n.minecraft_nick), T({
			user: e,
			nick: n.minecraft_nick
		}), t.freshSignIn && C.current && y("welcome");
		else if (w.current) {
			let n = w.current;
			p(n), T({
				user: e,
				nick: n
			}), t.freshSignIn && C.current && y("welcome");
		} else p(null), y("setnick"), _(!0), T({
			user: e,
			nick: null
		});
	}
	Ve(() => {
		if (!l) {
			h(!1);
			return;
		}
		let { data: e } = l.auth.onAuthStateChange((e, t) => {
			if (d(t), h(!1), e === "PASSWORD_RECOVERY") {
				y("reset-password"), _(!0);
				return;
			}
			ee(t?.user ?? null, { freshSignIn: e === "SIGNED_IN" });
		});
		return () => e.subscription.unsubscribe();
	}, [l]);
	async function E() {
		w.current = null, await l?.auth.signOut(), x(!1);
	}
	return l ? /* @__PURE__ */ $("div", {
		class: "aw-scope",
		children: [s ? null : m ? /* @__PURE__ */ $("div", {
			class: "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-500/10 text-gray-400 text-sm",
			children: /* @__PURE__ */ $("div", { class: "w-4 h-4 rounded-full border-2 border-brand-500/30 border-t-brand-400 animate-spin" })
		}) : u ? f ? /* @__PURE__ */ $(Ao, {
			nick: f,
			open: b,
			onToggle: () => x(!b),
			onLogout: E,
			logoutLabel: a.logout,
			openLauncherLabel: a.welcomeOpenLauncher,
			launcherScheme: o,
			onOpenLauncher: () => {
				x(!1), window.location.href = `${o}://signed-in?nick=${encodeURIComponent(f)}`;
			}
		}) : /* @__PURE__ */ $("button", {
			type: "button",
			onClick: () => {
				y("setnick"), _(!0);
			},
			class: "inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 px-3 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/30 transition",
			children: [/* @__PURE__ */ $("svg", {
				class: "w-4 h-4",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ $("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
				})
			}), /* @__PURE__ */ $("span", { children: a.setNickTitle })]
		}) : /* @__PURE__ */ $("button", {
			type: "button",
			onClick: () => {
				y("auth"), _(!0);
			},
			class: "inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-brand-400 px-3 py-2 rounded-lg hover:bg-brand-500/10 transition",
			children: [/* @__PURE__ */ $("svg", {
				class: "w-4 h-4",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ $("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M22 17l-2 2-2-2M20 19V7m-8-2a4 4 0 11-8 0 4 4 0 018 0z"
				})
			}), /* @__PURE__ */ $("span", { children: a.login })]
		}), g && /* @__PURE__ */ $(ko, {
			onClose: () => _(!1),
			embedded: s,
			children: [
				v === "auth" && /* @__PURE__ */ $(Oo, {
					sb: l,
					t: a,
					inLauncher: s,
					supabaseUrl: e ?? "",
					pendingSignupNickRef: w
				}),
				v === "setnick" && u && /* @__PURE__ */ $(jo, {
					sb: l,
					user: u.user,
					t: a,
					onSaved: (e) => {
						p(e), y("welcome"), T({
							user: u.user,
							nick: e
						});
					}
				}),
				v === "welcome" && f && !s && /* @__PURE__ */ $(No, {
					nick: f,
					t: a,
					launcherScheme: o,
					onContinue: () => _(!1)
				}),
				v === "welcome" && f && s && /* @__PURE__ */ $("div", {
					class: "flex flex-col items-center gap-3 py-6",
					children: [/* @__PURE__ */ $("div", { class: "w-8 h-8 rounded-full border-2 border-brand-500/30 border-t-brand-400 animate-spin" }), /* @__PURE__ */ $("p", {
						class: "text-sm text-gray-400",
						children: [
							a.welcome,
							" ",
							/* @__PURE__ */ $("span", {
								class: "font-mono text-brand-300",
								children: f
							})
						]
					})]
				}),
				v === "reset-password" && /* @__PURE__ */ $(Mo, {
					sb: l,
					t: a,
					onDone: async () => {
						if (!u?.user) {
							_(!1);
							return;
						}
						let { data: e } = await l.from("profiles").select("minecraft_nick").eq("id", u.user.id).maybeSingle();
						e?.minecraft_nick ? (p(e.minecraft_nick), y("welcome")) : y("setnick");
					}
				})
			]
		})]
	}) : /* @__PURE__ */ $("div", {
		class: "px-3 py-2 text-xs text-rose-400",
		children: "missing supabase-url/key"
	});
}
function Oo({ sb: e, t, inLauncher: n, supabaseUrl: r, pendingSignupNickRef: i }) {
	let [a, o] = P("start"), [s, c] = P("signin"), [l, u] = P(""), [d, f] = P(""), [p, m] = P(""), [h, g] = P(!1), [_, v] = P(""), [y, b] = P(""), [x, C] = P(""), [w, T] = P(""), [ee, E] = P(!1), [D, te] = P(""), [ne, re] = P(!1), [O, k] = P(""), [ie, A] = P(""), [ae, oe] = P(!1), [se, ce] = P(""), [le, ue] = P(!1), [de, fe] = P(""), [pe, me] = P(!1), [he, ge] = P(!1);
	async function _e(t) {
		t.preventDefault(), m(""), g(!0);
		try {
			let { error: t } = await e.auth.signInWithPassword({
				email: l.trim(),
				password: d
			});
			t && m(t.message);
		} finally {
			g(!1);
		}
	}
	async function ve(n) {
		if (n.preventDefault(), T(""), !Eo.test(x)) {
			T(t.nickFormatErr);
			return;
		}
		E(!0);
		try {
			let { data: n } = await e.from("profiles").select("id").eq("minecraft_nick", x).maybeSingle();
			if (n) {
				T(t.nickTakenErr);
				return;
			}
			i.current = x;
			let { data: r, error: a } = await e.auth.signUp({
				email: _.trim(),
				password: y
			});
			if (a) {
				i.current = null, T(a.message);
				return;
			}
			let o = r.user?.id;
			if (!o) {
				i.current = null, T("No user");
				return;
			}
			let { error: s } = await e.from("profiles").upsert({
				id: o,
				minecraft_nick: x
			});
			s && (i.current = null, T(s.message));
		} finally {
			E(!1);
		}
	}
	async function ye() {
		if (A(""), !D.trim()) {
			A(t.forgotEmailFirst);
			return;
		}
		oe(!0);
		try {
			let { error: t } = await e.auth.signInWithOtp({
				email: D.trim(),
				options: {
					shouldCreateUser: !1,
					emailRedirectTo: To()
				}
			});
			if (t) {
				A(t.message);
				return;
			}
			re(!0);
		} finally {
			oe(!1);
		}
	}
	async function be() {
		if (A(""), !/^\d{6,8}$/.test(O.trim())) {
			A(t.forgotInvalidCode);
			return;
		}
		oe(!0);
		try {
			let { error: t } = await e.auth.verifyOtp({
				email: D.trim(),
				token: O.trim(),
				type: "email"
			});
			t && A(t.message);
		} finally {
			oe(!1);
		}
	}
	async function xe() {
		if (fe(""), !se.trim()) {
			fe(t.forgotEmailFirst);
			return;
		}
		me(!0);
		try {
			let { error: t } = await e.auth.resetPasswordForEmail(se.trim(), { redirectTo: To() });
			if (t) {
				fe(t.message);
				return;
			}
			ue(!0);
		} finally {
			me(!1);
		}
	}
	async function Se() {
		ge(!0);
		try {
			if (n) {
				let { data: t, error: n } = await e.auth.signInWithOAuth({
					provider: "discord",
					options: {
						skipBrowserRedirect: !0,
						redirectTo: `${r}/auth/v1/callback`
					}
				});
				if (n || !t?.url) {
					ge(!1), alert(n?.message || "Discord OAuth init failed");
					return;
				}
				document.dispatchEvent(new CustomEvent("anubis-auth-discord-request", {
					detail: {
						url: t.url,
						onTokens: async (t) => {
							try {
								if (!t) {
									ge(!1);
									return;
								}
								let { error: n } = await e.auth.setSession(t);
								n && alert(n.message);
							} finally {
								ge(!1);
							}
						},
						onError: (e) => {
							ge(!1), alert(e || "Discord auth failed");
						}
					},
					bubbles: !0,
					composed: !0
				}));
				return;
			}
			let { error: t } = await e.auth.signInWithOAuth({
				provider: "discord",
				options: { redirectTo: To() }
			});
			t && (ge(!1), alert(t.message));
		} catch (e) {
			ge(!1), alert(e?.message || String(e));
		}
	}
	let Ce = (e) => `flex-1 px-4 py-2 text-sm font-semibold rounded-lg transition ${e ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-md shadow-brand-600/30" : "text-gray-400 hover:text-white"}`, j = "w-full px-4 py-3 bg-brand-500/10 border border-brand-500/30 rounded-xl text-white placeholder-gray-500 focus:border-brand-400 focus:bg-brand-500/15 focus:outline-none transition", we = "btn-glow w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-brand-600/30 disabled:opacity-50 disabled:pointer-events-none", Te = ({ onClick: e }) => /* @__PURE__ */ $("button", {
		type: "button",
		onClick: e,
		class: "inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition -ml-1 px-2 py-1 rounded-md hover:bg-brand-500/10",
		children: [/* @__PURE__ */ $("svg", {
			class: "w-3.5 h-3.5",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2.4",
			viewBox: "0 0 24 24",
			children: /* @__PURE__ */ $("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M15 19l-7-7 7-7"
			})
		}), /* @__PURE__ */ $("span", { children: t.back })]
	});
	if (a === "start") return /* @__PURE__ */ $("div", {
		class: "space-y-5",
		children: [
			/* @__PURE__ */ $("div", {
				class: "text-center space-y-1.5",
				children: [
					/* @__PURE__ */ $("div", {
						class: "w-14 h-14 mx-auto rounded-2xl flex items-center justify-center",
						style: "background:linear-gradient(135deg,#7c3aed,#a855f7);box-shadow:0 10px 30px rgba(124,58,237,0.4)",
						children: /* @__PURE__ */ $("svg", {
							class: "w-7 h-7 text-white",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ $("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								d: "M12 11c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3zM3 21h18v-2c0-2.76-2.24-5-5-5h-1l-1 2-1-2H8c-2.76 0-5 2.24-5 5v2zM7 7a3 3 0 100-6 3 3 0 000 6z"
							})
						})
					}),
					/* @__PURE__ */ $("h3", {
						class: "text-lg font-bold text-white",
						children: t.startTitle
					}),
					/* @__PURE__ */ $("p", {
						class: "text-xs text-gray-400",
						children: t.startSubtitle
					})
				]
			}),
			/* @__PURE__ */ $("button", {
				type: "button",
				onClick: Se,
				disabled: he,
				class: "w-full inline-flex items-center justify-center gap-2.5 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold px-6 py-3 rounded-xl transition shadow-lg shadow-[#5865F2]/20 disabled:opacity-50 disabled:pointer-events-none",
				children: [/* @__PURE__ */ $("svg", {
					class: "w-5 h-5",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					children: /* @__PURE__ */ $("path", { d: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" })
				}), /* @__PURE__ */ $("span", { children: t.signInDiscord })]
			}),
			/* @__PURE__ */ $("div", {
				class: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ $("div", { class: "flex-1 h-px bg-brand-500/20" }),
					/* @__PURE__ */ $("span", {
						class: "text-[10px] text-gray-500 uppercase tracking-wider",
						children: t.orDivider
					}),
					/* @__PURE__ */ $("div", { class: "flex-1 h-px bg-brand-500/20" })
				]
			}),
			/* @__PURE__ */ $("button", {
				type: "button",
				onClick: () => o("email"),
				class: "w-full inline-flex items-center justify-center gap-2.5 bg-brand-500/10 hover:bg-brand-500/15 border border-brand-500/30 hover:border-brand-400/50 text-white font-semibold px-6 py-3 rounded-xl transition",
				children: [/* @__PURE__ */ $("svg", {
					class: "w-5 h-5 text-brand-300",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ $("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					})
				}), /* @__PURE__ */ $("span", { children: t.continueWithEmail })]
			})
		]
	});
	if (a === "forgot-choice") {
		let e = "group w-full text-left p-4 rounded-2xl border border-brand-500/25 bg-brand-500/5 hover:bg-brand-500/12 hover:border-brand-400/55 transition flex items-start gap-3";
		return /* @__PURE__ */ $("div", {
			class: "space-y-4",
			children: [
				/* @__PURE__ */ $(Te, { onClick: () => o("email") }),
				/* @__PURE__ */ $("h3", {
					class: "text-base font-bold text-white text-center",
					children: t.forgotChoiceTitle
				}),
				/* @__PURE__ */ $("button", {
					type: "button",
					onClick: () => {
						te(l), re(!1), k(""), A(""), o("forgot-otp");
					},
					class: e,
					children: [/* @__PURE__ */ $("div", {
						class: "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
						style: "background:linear-gradient(135deg,#7c3aed,#a855f7)",
						children: /* @__PURE__ */ $("svg", {
							class: "w-5 h-5 text-white",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ $("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								d: "M13 10V3L4 14h7v7l9-11h-7z"
							})
						})
					}), /* @__PURE__ */ $("div", {
						class: "space-y-0.5 min-w-0",
						children: [/* @__PURE__ */ $("div", {
							class: "text-sm font-bold text-white group-hover:text-brand-200",
							children: t.forgotChoiceOtpTitle
						}), /* @__PURE__ */ $("div", {
							class: "text-[11px] text-gray-400 leading-snug",
							children: t.forgotChoiceOtpHint
						})]
					})]
				}),
				/* @__PURE__ */ $("button", {
					type: "button",
					onClick: () => {
						ce(l), ue(!1), fe(""), o("forgot-reset");
					},
					class: e,
					children: [/* @__PURE__ */ $("div", {
						class: "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
						style: "background:linear-gradient(135deg,#22d3ee,#a855f7)",
						children: /* @__PURE__ */ $("svg", {
							class: "w-5 h-5 text-white",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ $("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								d: "M12 15v2m0 4a9 9 0 110-18 9 9 0 010 18zM7.5 11V7a4.5 4.5 0 119 0v4"
							})
						})
					}), /* @__PURE__ */ $("div", {
						class: "space-y-0.5 min-w-0",
						children: [/* @__PURE__ */ $("div", {
							class: "text-sm font-bold text-white group-hover:text-brand-200",
							children: t.forgotChoiceResetTitle
						}), /* @__PURE__ */ $("div", {
							class: "text-[11px] text-gray-400 leading-snug",
							children: t.forgotChoiceResetHint
						})]
					})]
				})
			]
		});
	}
	return a === "forgot-otp" ? /* @__PURE__ */ $("div", {
		class: "space-y-3",
		children: [
			/* @__PURE__ */ $(Te, { onClick: () => o("forgot-choice") }),
			/* @__PURE__ */ $("p", {
				class: "text-xs text-gray-400 text-center leading-relaxed",
				children: t.forgotOtpIntro
			}),
			/* @__PURE__ */ $("label", {
				class: "block",
				children: [/* @__PURE__ */ $("span", {
					class: "text-xs font-medium text-gray-400 mb-1.5 block",
					children: t.emailLabel
				}), /* @__PURE__ */ $("input", {
					type: "email",
					required: !0,
					disabled: ne,
					value: D,
					onInput: (e) => te(e.target.value),
					class: j,
					placeholder: "you@example.com"
				})]
			}),
			ne ? /* @__PURE__ */ $("div", {
				class: "space-y-3 pt-3 border-t border-brand-500/20",
				children: [
					/* @__PURE__ */ $("p", {
						class: "text-xs text-gray-400 text-center",
						children: [
							t.forgotCodeSent,
							" ",
							/* @__PURE__ */ $("strong", {
								class: "text-brand-300 font-mono",
								children: D
							})
						]
					}),
					/* @__PURE__ */ $("label", {
						class: "block",
						children: [/* @__PURE__ */ $("span", {
							class: "text-xs font-medium text-gray-400 mb-1.5 block",
							children: t.forgotCodeLabel
						}), /* @__PURE__ */ $("input", {
							type: "text",
							inputMode: "numeric",
							autoComplete: "one-time-code",
							maxLength: 8,
							pattern: "[0-9]{6,8}",
							value: O,
							onInput: (e) => k(e.target.value),
							class: j + " text-center font-mono text-lg tracking-[0.4em]",
							placeholder: "12345678"
						})]
					}),
					/* @__PURE__ */ $("button", {
						type: "button",
						onClick: be,
						disabled: ae,
						class: we,
						children: t.forgotVerify
					}),
					/* @__PURE__ */ $("button", {
						type: "button",
						onClick: ye,
						class: "block mx-auto text-xs text-brand-400 hover:text-brand-300",
						children: t.forgotResend
					})
				]
			}) : /* @__PURE__ */ $("button", {
				type: "button",
				onClick: ye,
				disabled: ae,
				class: we,
				children: t.forgotSendCode
			}),
			/* @__PURE__ */ $("p", {
				class: "text-xs text-rose-400 min-h-[1rem]",
				children: ie
			})
		]
	}) : a === "forgot-reset" ? /* @__PURE__ */ $("div", {
		class: "space-y-3",
		children: [/* @__PURE__ */ $(Te, { onClick: () => o("forgot-choice") }), le ? /* @__PURE__ */ $("div", {
			class: "space-y-3 text-center py-2",
			children: [
				/* @__PURE__ */ $("div", {
					class: "w-12 h-12 mx-auto rounded-full flex items-center justify-center",
					style: "background:linear-gradient(135deg,#22d3ee,#a855f7)",
					children: /* @__PURE__ */ $("svg", {
						class: "w-6 h-6 text-white",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2.5",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ $("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M5 13l4 4L19 7"
						})
					})
				}),
				/* @__PURE__ */ $("p", {
					class: "text-sm text-white",
					children: [
						t.forgotResetSent,
						" ",
						/* @__PURE__ */ $("strong", {
							class: "text-brand-300 font-mono",
							children: se
						})
					]
				}),
				/* @__PURE__ */ $("p", {
					class: "text-xs text-gray-400 leading-relaxed px-2",
					children: n ? t.forgotResetSentLauncherBody : t.forgotResetSentBody
				}),
				/* @__PURE__ */ $("button", {
					type: "button",
					onClick: () => o("email"),
					class: we,
					children: t.forgotResetDone
				})
			]
		}) : /* @__PURE__ */ $(S, { children: [
			/* @__PURE__ */ $("p", {
				class: "text-xs text-gray-400 text-center leading-relaxed",
				children: t.forgotResetIntro
			}),
			/* @__PURE__ */ $("label", {
				class: "block",
				children: [/* @__PURE__ */ $("span", {
					class: "text-xs font-medium text-gray-400 mb-1.5 block",
					children: t.emailLabel
				}), /* @__PURE__ */ $("input", {
					type: "email",
					required: !0,
					value: se,
					onInput: (e) => ce(e.target.value),
					class: j,
					placeholder: "you@example.com"
				})]
			}),
			/* @__PURE__ */ $("button", {
				type: "button",
				onClick: xe,
				disabled: pe,
				class: we,
				children: t.forgotSendResetLink
			}),
			/* @__PURE__ */ $("p", {
				class: "text-xs text-rose-400 min-h-[1rem]",
				children: de
			})
		] })]
	}) : /* @__PURE__ */ $("div", {
		class: "space-y-4",
		children: [
			/* @__PURE__ */ $(Te, { onClick: () => o("start") }),
			/* @__PURE__ */ $("div", {
				class: "flex gap-1 p-1 bg-brand-500/10 border border-brand-500/20 rounded-xl",
				children: [/* @__PURE__ */ $("button", {
					type: "button",
					onClick: () => c("signin"),
					class: Ce(s === "signin"),
					children: t.tabSignIn
				}), /* @__PURE__ */ $("button", {
					type: "button",
					onClick: () => c("signup"),
					class: Ce(s === "signup"),
					children: t.tabSignUp
				})]
			}),
			s === "signin" && /* @__PURE__ */ $("form", {
				onSubmit: _e,
				class: "space-y-3",
				children: [
					/* @__PURE__ */ $("label", {
						class: "block",
						children: [/* @__PURE__ */ $("span", {
							class: "text-xs font-medium text-gray-400 mb-1.5 block",
							children: t.emailLabel
						}), /* @__PURE__ */ $("input", {
							type: "email",
							required: !0,
							value: l,
							onInput: (e) => u(e.target.value),
							class: j,
							placeholder: "you@example.com"
						})]
					}),
					/* @__PURE__ */ $("label", {
						class: "block",
						children: [/* @__PURE__ */ $("span", {
							class: "text-xs font-medium text-gray-400 mb-1.5 block",
							children: t.passwordLabel
						}), /* @__PURE__ */ $("input", {
							type: "password",
							required: !0,
							minLength: 6,
							value: d,
							onInput: (e) => f(e.target.value),
							class: j,
							placeholder: "••••••"
						})]
					}),
					/* @__PURE__ */ $("p", {
						class: "text-xs text-rose-400 min-h-[1rem]",
						children: p
					}),
					/* @__PURE__ */ $("button", {
						type: "submit",
						disabled: h,
						class: we,
						children: t.signInSubmit
					}),
					/* @__PURE__ */ $("button", {
						type: "button",
						onClick: () => o("forgot-choice"),
						class: "block mx-auto text-xs text-brand-400 hover:text-brand-300 hover:underline",
						children: t.forgotPassword
					})
				]
			}),
			s === "signup" && /* @__PURE__ */ $("form", {
				onSubmit: ve,
				class: "space-y-3",
				children: [
					/* @__PURE__ */ $("label", {
						class: "block",
						children: [/* @__PURE__ */ $("span", {
							class: "text-xs font-medium text-gray-400 mb-1.5 block",
							children: t.emailLabel
						}), /* @__PURE__ */ $("input", {
							type: "email",
							required: !0,
							value: _,
							onInput: (e) => v(e.target.value),
							class: j,
							placeholder: "you@example.com"
						})]
					}),
					/* @__PURE__ */ $("label", {
						class: "block",
						children: [/* @__PURE__ */ $("span", {
							class: "text-xs font-medium text-gray-400 mb-1.5 block",
							children: t.passwordLabel
						}), /* @__PURE__ */ $("input", {
							type: "password",
							required: !0,
							minLength: 6,
							value: y,
							onInput: (e) => b(e.target.value),
							class: j,
							placeholder: "6+"
						})]
					}),
					/* @__PURE__ */ $("label", {
						class: "block",
						children: [/* @__PURE__ */ $("span", {
							class: "text-xs font-medium text-gray-400 mb-1.5 block",
							children: t.nicknameLabel
						}), /* @__PURE__ */ $("input", {
							type: "text",
							required: !0,
							minLength: 3,
							maxLength: 16,
							pattern: "[a-zA-Z0-9_]{3,16}",
							value: x,
							onInput: (e) => C(e.target.value),
							class: j,
							placeholder: t.setNickPlaceholder,
							style: "font-family:ui-monospace,SFMono-Regular,monospace"
						})]
					}),
					/* @__PURE__ */ $("p", {
						class: "text-xs text-rose-400 min-h-[1rem]",
						children: w
					}),
					/* @__PURE__ */ $("button", {
						type: "submit",
						disabled: ee,
						class: we,
						children: t.signUpSubmit
					})
				]
			})
		]
	});
}
function ko({ children: e, onClose: t, embedded: n }) {
	function r(e) {
		e.target === e.currentTarget && t();
	}
	return typeof document > "u" ? null : n ? /* @__PURE__ */ $("div", {
		class: "aw-modal-card glass rounded-2xl p-7 w-full max-w-[440px] mx-auto",
		children: e
	}) : dt(/* @__PURE__ */ $("div", {
		class: "aw-scope",
		children: /* @__PURE__ */ $("div", {
			class: "aw-modal-backdrop",
			onClick: r,
			children: /* @__PURE__ */ $("div", {
				class: "aw-modal-card glass rounded-2xl p-7 w-[min(440px,calc(100vw-2rem))] max-h-[90vh] overflow-y-auto relative",
				children: [/* @__PURE__ */ $("button", {
					type: "button",
					onClick: t,
					"aria-label": "close",
					class: "absolute top-4 right-4 text-gray-400 hover:text-white transition w-8 h-8 flex items-center justify-center rounded-lg hover:bg-brand-500/15",
					children: /* @__PURE__ */ $("svg", {
						class: "w-5 h-5",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ $("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M6 18L18 6M6 6l12 12"
						})
					})
				}), e]
			})
		})
	}), document.body);
}
function Ao({ nick: e, open: t, onToggle: n, onLogout: r, logoutLabel: i, onOpenLauncher: a, openLauncherLabel: o, launcherScheme: s }) {
	return /* @__PURE__ */ $("div", {
		class: "relative inline-flex",
		children: [/* @__PURE__ */ $("button", {
			type: "button",
			onClick: n,
			class: "inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-brand-500/10 border border-brand-500/25 hover:bg-brand-500/15 transition",
			children: [
				/* @__PURE__ */ $("span", {
					class: "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white",
					style: "background:linear-gradient(135deg,#8b5cf6,#a855f7)",
					children: e[0].toUpperCase()
				}),
				/* @__PURE__ */ $("span", {
					class: "text-sm font-semibold text-white max-w-[140px] truncate",
					children: e
				}),
				/* @__PURE__ */ $("svg", {
					class: `w-3.5 h-3.5 text-gray-400 transition-transform ${t ? "rotate-180" : ""}`,
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ $("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M19 9l-7 7-7-7"
					})
				})
			]
		}), t && /* @__PURE__ */ $("div", {
			class: "absolute right-0 top-full mt-1 glass rounded-xl py-1 min-w-[180px] z-10",
			children: [
				/* @__PURE__ */ $("a", {
					href: `${s}://signed-in?nick=${encodeURIComponent(e)}`,
					onClick: (e) => {
						e.preventDefault(), a();
					},
					class: "w-full flex items-center gap-2 px-4 py-2 text-sm text-brand-300 hover:text-brand-200 hover:bg-brand-500/10 transition cursor-pointer",
					children: [/* @__PURE__ */ $("svg", {
						class: "w-4 h-4",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ $("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M14 3l7 7m0 0l-7 7m7-7H3"
						})
					}), o]
				}),
				/* @__PURE__ */ $("div", { class: "my-1 mx-2 h-px bg-brand-500/15" }),
				/* @__PURE__ */ $("button", {
					type: "button",
					onClick: r,
					class: "w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-rose-300 hover:bg-rose-500/10 transition",
					children: [/* @__PURE__ */ $("svg", {
						class: "w-4 h-4",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ $("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
						})
					}), i]
				})
			]
		})]
	});
}
function jo({ sb: e, user: t, t: n, onSaved: r }) {
	let [i, a] = P(""), [o, s] = P(""), [c, l] = P(!1);
	async function u(a) {
		if (a.preventDefault(), s(""), !Eo.test(i)) {
			s(n.nickFormatErr);
			return;
		}
		l(!0);
		let { data: o } = await e.from("profiles").select("id").eq("minecraft_nick", i).maybeSingle();
		if (o) {
			s(n.nickTakenErr), l(!1);
			return;
		}
		let { error: c } = await e.from("profiles").upsert({
			id: t.id,
			minecraft_nick: i
		});
		if (l(!1), c) {
			s(c.message);
			return;
		}
		r(i);
	}
	return /* @__PURE__ */ $("form", {
		onSubmit: u,
		class: "space-y-4",
		children: [
			/* @__PURE__ */ $("div", {
				class: "flex items-center justify-center mb-2",
				children: /* @__PURE__ */ $("div", {
					class: "w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center",
					children: /* @__PURE__ */ $("svg", {
						class: "w-6 h-6 text-white",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ $("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						})
					})
				})
			}),
			/* @__PURE__ */ $("h3", {
				class: "text-lg font-bold text-white text-center",
				children: n.setNickTitle
			}),
			/* @__PURE__ */ $("p", {
				class: "text-xs text-gray-400 text-center",
				children: n.setNickHint
			}),
			/* @__PURE__ */ $("input", {
				type: "text",
				required: !0,
				minLength: 3,
				maxLength: 16,
				pattern: "[a-zA-Z0-9_]{3,16}",
				value: i,
				onInput: (e) => a(e.target.value),
				placeholder: n.setNickPlaceholder,
				class: "w-full px-4 py-3 bg-brand-500/10 border border-brand-500/30 rounded-xl text-white placeholder-gray-500 focus:border-brand-400 focus:bg-brand-500/15 focus:outline-none transition",
				style: "font-family:ui-monospace,SFMono-Regular,monospace"
			}),
			/* @__PURE__ */ $("p", {
				class: "text-xs text-rose-400 min-h-[1rem]",
				children: o
			}),
			/* @__PURE__ */ $("button", {
				type: "submit",
				disabled: c,
				class: "btn-glow w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-brand-600/30 disabled:opacity-50 disabled:pointer-events-none",
				children: n.setNickSubmit
			})
		]
	});
}
function Mo({ sb: e, t, onDone: n }) {
	let [r, i] = P(""), [a, o] = P(""), [s, c] = P(""), [l, u] = P(!1);
	async function d(i) {
		if (i.preventDefault(), c(""), r.length < 6) {
			c(t.passwordTooShort);
			return;
		}
		if (r !== a) {
			c(t.passwordMismatch);
			return;
		}
		u(!0);
		let { error: o } = await e.auth.updateUser({ password: r });
		if (u(!1), o) {
			c(o.message);
			return;
		}
		typeof history < "u" && history.replaceState && history.replaceState(null, "", window.location.pathname + window.location.search), n();
	}
	let f = "w-full px-4 py-3 bg-brand-500/10 border border-brand-500/30 rounded-xl text-white placeholder-gray-500 focus:border-brand-400 focus:bg-brand-500/15 focus:outline-none transition";
	return /* @__PURE__ */ $("form", {
		onSubmit: d,
		class: "space-y-4",
		children: [
			/* @__PURE__ */ $("div", {
				class: "flex items-center justify-center mb-2",
				children: /* @__PURE__ */ $("div", {
					class: "w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center",
					children: /* @__PURE__ */ $("svg", {
						class: "w-6 h-6 text-white",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ $("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M12 15v2m0 4a9 9 0 110-18 9 9 0 010 18zM7.5 11V7a4.5 4.5 0 119 0v4"
						})
					})
				})
			}),
			/* @__PURE__ */ $("h3", {
				class: "text-lg font-bold text-white text-center",
				children: t.resetTitle
			}),
			/* @__PURE__ */ $("p", {
				class: "text-xs text-gray-400 text-center leading-relaxed",
				children: t.resetHint
			}),
			/* @__PURE__ */ $("label", {
				class: "block",
				children: [/* @__PURE__ */ $("span", {
					class: "text-xs font-medium text-gray-400 mb-1.5 block",
					children: t.newPasswordLabel
				}), /* @__PURE__ */ $("input", {
					type: "password",
					required: !0,
					minLength: 6,
					autoComplete: "new-password",
					value: r,
					onInput: (e) => i(e.target.value),
					class: f,
					placeholder: "6+"
				})]
			}),
			/* @__PURE__ */ $("label", {
				class: "block",
				children: [/* @__PURE__ */ $("span", {
					class: "text-xs font-medium text-gray-400 mb-1.5 block",
					children: t.confirmPasswordLabel
				}), /* @__PURE__ */ $("input", {
					type: "password",
					required: !0,
					minLength: 6,
					autoComplete: "new-password",
					value: a,
					onInput: (e) => o(e.target.value),
					class: f,
					placeholder: "6+"
				})]
			}),
			/* @__PURE__ */ $("p", {
				class: "text-xs text-rose-400 min-h-[1rem]",
				children: s
			}),
			/* @__PURE__ */ $("button", {
				type: "submit",
				disabled: l,
				class: "btn-glow w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-brand-600/30 disabled:opacity-50 disabled:pointer-events-none",
				children: t.resetSubmit
			})
		]
	});
}
function No({ nick: e, t, launcherScheme: n, onContinue: r }) {
	function i() {
		window.location.href = `${n}://signed-in?nick=${encodeURIComponent(e)}`;
	}
	return /* @__PURE__ */ $("div", {
		class: "space-y-4 text-center",
		children: [
			/* @__PURE__ */ $("div", {
				class: "w-16 h-16 mx-auto rounded-full flex items-center justify-center",
				style: "background:linear-gradient(135deg,#8b5cf6,#22d3ee)",
				children: /* @__PURE__ */ $("svg", {
					class: "w-8 h-8 text-white",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.5",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ $("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M5 13l4 4L19 7"
					})
				})
			}),
			/* @__PURE__ */ $("h3", {
				class: "text-xl font-bold gold-text inline-block",
				children: t.welcome
			}),
			/* @__PURE__ */ $("p", {
				class: "text-xs text-gray-500",
				children: [
					/* @__PURE__ */ $("span", { children: t.welcomeYourNick }),
					" ",
					/* @__PURE__ */ $("span", {
						class: "font-bold text-brand-400",
						style: "font-family:ui-monospace,SFMono-Regular,monospace",
						children: e
					})
				]
			}),
			/* @__PURE__ */ $("button", {
				type: "button",
				onClick: i,
				class: "btn-glow w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-brand-600/30",
				children: [/* @__PURE__ */ $("svg", {
					class: "w-4 h-4",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ $("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M14 3l7 7m0 0l-7 7m7-7H3"
					})
				}), /* @__PURE__ */ $("span", { children: t.welcomeOpenLauncher })]
			}),
			/* @__PURE__ */ $("p", {
				class: "text-[10px] text-gray-500",
				children: t.welcomeOpenLauncherHint
			}),
			/* @__PURE__ */ $("button", {
				type: "button",
				onClick: r,
				class: "text-xs text-gray-400 hover:text-gray-200 hover:underline",
				children: t.welcomeContinue
			})
		]
	});
}
//#endregion
//#region src/widget.css?inline
var Po = ".aw-scope,.aw-scope :before,.aw-scope :after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.aw-scope ::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.aw-scope .static{position:static}.aw-scope .fixed{position:fixed}.aw-scope .absolute{position:absolute}.aw-scope .relative{position:relative}.aw-scope .right-0{right:0}.aw-scope .right-4{right:1rem}.aw-scope .top-4{top:1rem}.aw-scope .top-full{top:100%}.aw-scope .z-10{z-index:10}.aw-scope .mx-2{margin-left:.5rem;margin-right:.5rem}.aw-scope .mx-auto{margin-left:auto;margin-right:auto}.aw-scope .my-1{margin-top:.25rem;margin-bottom:.25rem}.aw-scope .-ml-1{margin-left:-.25rem}.aw-scope .mb-1\\.5{margin-bottom:.375rem}.aw-scope .mb-2{margin-bottom:.5rem}.aw-scope .mb-3{margin-bottom:.75rem}.aw-scope .mb-6{margin-bottom:1.5rem}.aw-scope .mb-8{margin-bottom:2rem}.aw-scope .mt-1{margin-top:.25rem}.aw-scope .mt-2{margin-top:.5rem}.aw-scope .block{display:block}.aw-scope .inline-block{display:inline-block}.aw-scope .inline{display:inline}.aw-scope .flex{display:flex}.aw-scope .inline-flex{display:inline-flex}.aw-scope .hidden{display:none}.aw-scope .h-12{height:3rem}.aw-scope .h-14{height:3.5rem}.aw-scope .h-16{height:4rem}.aw-scope .h-3\\.5{height:.875rem}.aw-scope .h-4{height:1rem}.aw-scope .h-5{height:1.25rem}.aw-scope .h-6{height:1.5rem}.aw-scope .h-7{height:1.75rem}.aw-scope .h-8{height:2rem}.aw-scope .h-9{height:2.25rem}.aw-scope .h-px{height:1px}.aw-scope .max-h-\\[90vh\\]{max-height:90vh}.aw-scope .min-h-\\[1rem\\]{min-height:1rem}.aw-scope .min-h-screen{min-height:100vh}.aw-scope .w-12{width:3rem}.aw-scope .w-14{width:3.5rem}.aw-scope .w-16{width:4rem}.aw-scope .w-3\\.5{width:.875rem}.aw-scope .w-4{width:1rem}.aw-scope .w-5{width:1.25rem}.aw-scope .w-6{width:1.5rem}.aw-scope .w-7{width:1.75rem}.aw-scope .w-8{width:2rem}.aw-scope .w-9{width:2.25rem}.aw-scope .w-\\[min\\(440px\\,calc\\(100vw-2rem\\)\\)\\]{width:min(440px,100vw - 2rem)}.aw-scope .w-full{width:100%}.aw-scope .min-w-0{min-width:0}.aw-scope .min-w-\\[180px\\]{min-width:180px}.aw-scope .max-w-3xl{max-width:48rem}.aw-scope .max-w-\\[140px\\]{max-width:140px}.aw-scope .max-w-\\[440px\\]{max-width:440px}.aw-scope .flex-1{flex:1}.aw-scope .flex-shrink-0{flex-shrink:0}.aw-scope .rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.aw-scope .transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(360deg)}}.aw-scope .animate-spin{animation:1s linear infinite spin}.aw-scope .cursor-pointer{cursor:pointer}.aw-scope .flex-col{flex-direction:column}.aw-scope .flex-wrap{flex-wrap:wrap}.aw-scope .items-start{align-items:flex-start}.aw-scope .items-center{align-items:center}.aw-scope .justify-center{justify-content:center}.aw-scope .gap-1{gap:.25rem}.aw-scope .gap-1\\.5{gap:.375rem}.aw-scope .gap-2{gap:.5rem}.aw-scope .gap-2\\.5{gap:.625rem}.aw-scope .gap-3{gap:.75rem}.aw-scope :is(.space-y-0\\.5>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(.125rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.125rem * var(--tw-space-y-reverse))}.aw-scope :is(.space-y-1\\.5>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.aw-scope :is(.space-y-3>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.aw-scope :is(.space-y-4>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.aw-scope :is(.space-y-5>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.aw-scope .overflow-auto{overflow:auto}.aw-scope .overflow-y-auto{overflow-y:auto}.aw-scope .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.aw-scope .rounded{border-radius:.25rem}.aw-scope .rounded-2xl{border-radius:24px}.aw-scope .rounded-full{border-radius:9999px}.aw-scope .rounded-lg{border-radius:16px}.aw-scope .rounded-md{border-radius:12px}.aw-scope .rounded-xl{border-radius:20px}.aw-scope .border{border-width:1px}.aw-scope .border-2{border-width:2px}.aw-scope .border-t{border-top-width:1px}.aw-scope .border-dashed{border-style:dashed}.aw-scope .border-amber-500\\/30{border-color:#f59e0b4d}.aw-scope .border-brand-500{--tw-border-opacity:1;border-color:rgb(139 92 246/var(--tw-border-opacity,1))}.aw-scope .border-brand-500\\/20{border-color:#8b5cf633}.aw-scope .border-brand-500\\/25{border-color:#8b5cf640}.aw-scope .border-brand-500\\/30{border-color:#8b5cf64d}.aw-scope .border-t-brand-400{--tw-border-opacity:1;border-top-color:rgb(167 139 250/var(--tw-border-opacity,1))}.aw-scope .bg-\\[\\#5865F2\\]{--tw-bg-opacity:1;background-color:rgb(88 101 242/var(--tw-bg-opacity,1))}.aw-scope .bg-amber-500\\/10{background-color:#f59e0b1a}.aw-scope .bg-brand-500\\/10{background-color:#8b5cf61a}.aw-scope .bg-brand-500\\/15{background-color:#8b5cf626}.aw-scope .bg-brand-500\\/20{background-color:#8b5cf633}.aw-scope .bg-brand-500\\/5{background-color:#8b5cf60d}.aw-scope .bg-brand-600\\/50{background-color:#7c3aed80}.aw-scope .bg-surface-900{--tw-bg-opacity:1;background-color:rgb(7 6 18/var(--tw-bg-opacity,1))}.aw-scope .bg-surface-950{--tw-bg-opacity:1;background-color:rgb(4 3 9/var(--tw-bg-opacity,1))}.aw-scope .bg-gradient-to-br{background-image:linear-gradient(to bottom right, var(--tw-gradient-stops))}.aw-scope .bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.aw-scope .from-brand-500{--tw-gradient-from:#8b5cf6 var(--tw-gradient-from-position);--tw-gradient-to:#8b5cf600 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.aw-scope .from-brand-600{--tw-gradient-from:#7c3aed var(--tw-gradient-from-position);--tw-gradient-to:#7c3aed00 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.aw-scope .to-brand-500{--tw-gradient-to:#8b5cf6 var(--tw-gradient-to-position)}.aw-scope .to-violet-500{--tw-gradient-to:#a855f7 var(--tw-gradient-to-position)}.aw-scope .p-1{padding:.25rem}.aw-scope .p-12{padding:3rem}.aw-scope .p-3{padding:.75rem}.aw-scope .p-4{padding:1rem}.aw-scope .p-6{padding:1.5rem}.aw-scope .p-7{padding:1.75rem}.aw-scope .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.aw-scope .px-2{padding-left:.5rem;padding-right:.5rem}.aw-scope .px-3{padding-left:.75rem;padding-right:.75rem}.aw-scope .px-4{padding-left:1rem;padding-right:1rem}.aw-scope .px-6{padding-left:1.5rem;padding-right:1.5rem}.aw-scope .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.aw-scope .py-1{padding-top:.25rem;padding-bottom:.25rem}.aw-scope .py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.aw-scope .py-2{padding-top:.5rem;padding-bottom:.5rem}.aw-scope .py-3{padding-top:.75rem;padding-bottom:.75rem}.aw-scope .py-6{padding-top:1.5rem;padding-bottom:1.5rem}.aw-scope .pt-3{padding-top:.75rem}.aw-scope .text-left{text-align:left}.aw-scope .text-center{text-align:center}.aw-scope .font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.aw-scope .font-sans{font-family:Inter,system-ui,sans-serif}.aw-scope .text-3xl{font-size:30px}.aw-scope .text-\\[10px\\]{font-size:10px}.aw-scope .text-\\[11px\\]{font-size:11px}.aw-scope .text-base{font-size:16px}.aw-scope .text-lg{font-size:18px}.aw-scope .text-sm{font-size:14px}.aw-scope .text-xl{font-size:20px}.aw-scope .text-xs{font-size:12px}.aw-scope .font-black{font-weight:900}.aw-scope .font-bold{font-weight:700}.aw-scope .font-medium{font-weight:500}.aw-scope .font-semibold{font-weight:600}.aw-scope .uppercase{text-transform:uppercase}.aw-scope .leading-relaxed{line-height:1.75}.aw-scope .leading-snug{line-height:1.375}.aw-scope .tracking-\\[0\\.4em\\]{letter-spacing:.4em}.aw-scope .tracking-tight{letter-spacing:-.025em}.aw-scope .tracking-wider{letter-spacing:.05em}.aw-scope .text-amber-400{--tw-text-opacity:1;color:rgb(251 191 36/var(--tw-text-opacity,1))}.aw-scope .text-brand-300{--tw-text-opacity:1;color:rgb(196 181 253/var(--tw-text-opacity,1))}.aw-scope .text-brand-400{--tw-text-opacity:1;color:rgb(167 139 250/var(--tw-text-opacity,1))}.aw-scope .text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1))}.aw-scope .text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.aw-scope .text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.aw-scope .text-rose-400{--tw-text-opacity:1;color:rgb(251 113 133/var(--tw-text-opacity,1))}.aw-scope .text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.aw-scope .placeholder-gray-500::placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity,1))}.aw-scope .shadow{--tw-shadow:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.aw-scope .shadow-lg{--tw-shadow:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.aw-scope .shadow-md{--tw-shadow:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.aw-scope .shadow-\\[\\#5865F2\\]\\/20{--tw-shadow-color:#5865f233;--tw-shadow:var(--tw-shadow-colored)}.aw-scope .shadow-brand-600\\/30{--tw-shadow-color:#7c3aed4d;--tw-shadow:var(--tw-shadow-colored)}.aw-scope .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.aw-scope .transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.aw-scope .glass{-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);background:#8b5cf60f;border:1px solid #8b5cf62e}.aw-scope .btn-glow{position:relative;overflow:hidden}.aw-scope .btn-glow:after{content:\"\";pointer-events:none;background:linear-gradient(90deg,#0000,#ffffff2e,#0000);transition:transform .5s;position:absolute;inset:0;transform:translate(-100%)}.aw-scope .btn-glow:hover:after{transform:translate(100%)}.aw-scope .gold-text{color:#0000;background:linear-gradient(135deg,#c084fc 0%,#a855f7 50%,#22d3ee 100%);-webkit-background-clip:text;background-clip:text}.aw-scope .aw-modal-backdrop{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:9999;background:#040309b3;justify-content:center;align-items:center;padding:1rem;animation:.15s ease-out awFadeIn;display:flex;position:fixed;inset:0}.aw-scope .aw-modal-card{animation:.2s ease-out awSlideIn}@keyframes awFadeIn{0%{opacity:0}to{opacity:1}}@keyframes awSlideIn{0%{opacity:0;transform:translateY(8px)scale(.98)}to{opacity:1;transform:translateY(0)scale(1)}}.aw-scope .hover\\:border-brand-400\\/50:hover{border-color:#a78bfa80}.aw-scope .hover\\:border-brand-400\\/55:hover{border-color:#a78bfa8c}.aw-scope .hover\\:bg-\\[\\#4752C4\\]:hover{--tw-bg-opacity:1;background-color:rgb(71 82 196/var(--tw-bg-opacity,1))}.aw-scope .hover\\:bg-amber-500\\/15:hover{background-color:#f59e0b26}.aw-scope .hover\\:bg-brand-500\\/10:hover{background-color:#8b5cf61a}.aw-scope .hover\\:bg-brand-500\\/15:hover{background-color:#8b5cf626}.aw-scope .hover\\:bg-rose-500\\/10:hover{background-color:#f43f5e1a}.aw-scope .hover\\:from-brand-700:hover{--tw-gradient-from:#6d28d9 var(--tw-gradient-from-position);--tw-gradient-to:#6d28d900 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.aw-scope .hover\\:to-brand-600:hover{--tw-gradient-to:#7c3aed var(--tw-gradient-to-position)}.aw-scope .hover\\:text-amber-300:hover{--tw-text-opacity:1;color:rgb(252 211 77/var(--tw-text-opacity,1))}.aw-scope .hover\\:text-brand-200:hover{--tw-text-opacity:1;color:rgb(221 214 254/var(--tw-text-opacity,1))}.aw-scope .hover\\:text-brand-300:hover{--tw-text-opacity:1;color:rgb(196 181 253/var(--tw-text-opacity,1))}.aw-scope .hover\\:text-brand-400:hover{--tw-text-opacity:1;color:rgb(167 139 250/var(--tw-text-opacity,1))}.aw-scope .hover\\:text-gray-200:hover{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity,1))}.aw-scope .hover\\:text-gray-300:hover{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1))}.aw-scope .hover\\:text-rose-300:hover{--tw-text-opacity:1;color:rgb(253 164 175/var(--tw-text-opacity,1))}.aw-scope .hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.aw-scope .hover\\:underline:hover{text-decoration-line:underline}.aw-scope .focus\\:border-brand-400:focus{--tw-border-opacity:1;border-color:rgb(167 139 250/var(--tw-border-opacity,1))}.aw-scope .focus\\:bg-brand-500\\/15:focus{background-color:#8b5cf626}.aw-scope .focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.aw-scope .disabled\\:pointer-events-none:disabled{pointer-events:none}.aw-scope .disabled\\:opacity-50:disabled{opacity:.5}.aw-scope :is(.group:hover .group-hover\\:text-brand-200){--tw-text-opacity:1;color:rgb(221 214 254/var(--tw-text-opacity,1))}", Fo = "anubis-auth-styles";
if (typeof document < "u" && !document.getElementById(Fo)) {
	let e = document.createElement("style");
	e.id = Fo, e.textContent = Po, document.head.appendChild(e);
}
if (typeof window < "u" && window.location.hash.startsWith("##")) {
	let e = "#" + window.location.hash.replace(/^#+/, "");
	try {
		window.history.replaceState(null, "", window.location.pathname + window.location.search + e);
	} catch {}
}
xe(Do, "anubis-auth", [
	"supabase-url",
	"supabase-key",
	"lang",
	"launcher-protocol",
	"mode"
], { shadow: !1 });
//#endregion
