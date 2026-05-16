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
		o.__v = n.__v + 1, t.vnode && t.vnode(o), te(e.__P, o, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [r] : null, i, r ?? w(n), !!(32 & n.__u), a), o.__v = n.__v, o.__.__k[o.__i] = o, re(i, o, a), n.__e = n.__ = null, o.__e != r && E(o);
	}
}
function E(e) {
	if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
		if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
	}), E(e);
}
function D(e) {
	(!e.__d && (e.__d = !0) && r.push(e) && !O.__r++ || i != t.debounceRendering) && ((i = t.debounceRendering) || a)(O);
}
function O() {
	try {
		for (var e, t = 1; r.length;) r.length > t && r.sort(o), e = r.shift(), t = r.length, T(e);
	} finally {
		r.length = O.__r = 0;
	}
}
function k(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f, p, g, _, v, y, b = r && r.__k || h, x = t.length;
	for (c = A(n, t, b, c, x), d = 0; d < x; d++) (p = n.__k[d]) != null && (f = p.__i != -1 && b[p.__i] || m, p.__i = d, v = te(e, p, f, i, a, o, s, c, l, u), g = p.__e, p.ref && f.ref != p.ref && (f.ref && oe(f.ref, null, p), u.push(p.ref, p.__c || g, p)), _ == null && g != null && (_ = g), (y = !!(4 & p.__u)) || f.__k === p.__k ? (c = j(p, c, e, y), y && f.__e && (f.__e = null)) : typeof p.type == "function" && v !== void 0 ? c = v : g && (c = g.nextSibling), p.__u &= -7);
	return n.__e = _, c;
}
function A(e, t, n, r, i) {
	var a, o, s, c, l, u = n.length, d = u, f = 0;
	for (e.__k = Array(i), a = 0; a < i; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = x(null, o, null, null, null) : _(o) ? o = e.__k[a] = x(S, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = x(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, c = a + f, o.__ = e, o.__b = e.__b + 1, s = null, (l = o.__i = M(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (i > u ? f-- : i < u && f++), typeof o.type != "function" && (o.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, o.__u |= 4))) : e.__k[a] = null;
	if (d) for (a = 0; a < u; a++) (s = n[a]) != null && !(2 & s.__u) && (s.__e == r && (r = w(s)), se(s, s));
	return r;
}
function j(e, t, n, r) {
	var i, a;
	if (typeof e.type == "function") {
		for (i = e.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = e, t = j(i[a], t, n, r));
		return t;
	}
	e.__e != t && (r && (t && e.type && !t.parentNode && (t = w(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
	do
		t &&= t.nextSibling;
	while (t != null && t.nodeType == 8);
	return t;
}
function M(e, t, n, r) {
	var i, a, o, s = e.key, c = e.type, l = t[n], u = l != null && (2 & l.__u) == 0;
	if (l === null && s == null || u && s == l.key && c == l.type) return n;
	if (r > +!!u) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length;) if ((l = t[o = i >= 0 ? i-- : a++]) != null && !(2 & l.__u) && s == l.key && c == l.type) return o;
	}
	return -1;
}
function N(e, t, n) {
	t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || g.test(t) ? n : n + "px";
}
function ee(e, t, n, r, i) {
	var a, o;
	n: if (t == "style") if (typeof n == "string") e.style.cssText = n;
	else {
		if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || N(e.style, t, "");
		if (n) for (t in n) r && n[t] == r[t] || N(e.style, t, n[t]);
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
function P(e) {
	return function(n) {
		if (this.l) {
			var r = this.l[n.type + e];
			if (n[c] == null) n[c] = d++;
			else if (n[c] < r[l]) return;
			return r(t.event ? t.event(n) : n);
		}
	};
}
function te(e, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, g, b, x, w, T, E, D, O, A, j, M, N = n.type;
	if (n.constructor !== void 0) return null;
	128 & r.__u && (l = !!(32 & r.__u), o = [c = n.__e = r.__e]), (d = t.__b) && d(n);
	n: if (typeof N == "function") try {
		if (w = n.props, T = N.prototype && N.prototype.render, E = (d = N.contextType) && i[d.__c], D = d ? E ? E.props.value : d.__ : i, r.__c ? x = (f = n.__c = r.__c).__ = f.__E : (T ? n.__c = f = new N(w, D) : (n.__c = f = new C(w, D), f.constructor = N, f.render = ce), E && E.sub(f), f.state ||= {}, f.__n = i, p = f.__d = !0, f.__h = [], f._sb = []), T && f.__s == null && (f.__s = f.state), T && N.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = v({}, f.__s)), v(f.__s, N.getDerivedStateFromProps(w, f.__s))), m = f.props, g = f.state, f.__v = n, p) T && N.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), T && f.componentDidMount != null && f.__h.push(f.componentDidMount);
		else {
			if (T && N.getDerivedStateFromProps == null && w !== m && f.componentWillReceiveProps != null && f.componentWillReceiveProps(w, D), n.__v == r.__v || !f.__e && f.shouldComponentUpdate != null && !1 === f.shouldComponentUpdate(w, f.__s, D)) {
				n.__v != r.__v && (f.props = w, f.state = f.__s, f.__d = !1), n.__e = r.__e, n.__k = r.__k, n.__k.some(function(e) {
					e && (e.__ = n);
				}), h.push.apply(f.__h, f._sb), f._sb = [], f.__h.length && s.push(f);
				break n;
			}
			f.componentWillUpdate != null && f.componentWillUpdate(w, f.__s, D), T && f.componentDidUpdate != null && f.__h.push(function() {
				f.componentDidUpdate(m, g, b);
			});
		}
		if (f.context = D, f.props = w, f.__P = e, f.__e = !1, O = t.__r, A = 0, T) f.state = f.__s, f.__d = !1, O && O(n), d = f.render(f.props, f.state, f.context), h.push.apply(f.__h, f._sb), f._sb = [];
		else do
			f.__d = !1, O && O(n), d = f.render(f.props, f.state, f.context), f.state = f.__s;
		while (f.__d && ++A < 25);
		f.state = f.__s, f.getChildContext != null && (i = v(v({}, i), f.getChildContext())), T && !p && f.getSnapshotBeforeUpdate != null && (b = f.getSnapshotBeforeUpdate(m, g)), j = d != null && d.type === S && d.key == null ? ie(d.props.children) : d, c = k(e, _(j) ? j : [j], n, r, i, a, o, s, c, l, u), f.base = n.__e, n.__u &= -161, f.__h.length && s.push(f), x && (f.__E = f.__ = null);
	} catch (e) {
		if (n.__v = null, l || o != null) if (e.then) {
			for (n.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling;) c = c.nextSibling;
			o[o.indexOf(c)] = null, n.__e = c;
		} else {
			for (M = o.length; M--;) y(o[M]);
			ne(n);
		}
		else n.__e = r.__e, n.__k = r.__k, e.then || ne(n);
		t.__e(e, n, r);
	}
	else o == null && n.__v == r.__v ? (n.__k = r.__k, n.__e = r.__e) : c = n.__e = ae(r.__e, n, r, i, a, o, s, l, u);
	return (d = t.diffed) && d(n), 128 & n.__u ? void 0 : c;
}
function ne(e) {
	e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(ne));
}
function re(e, n, r) {
	for (var i = 0; i < r.length; i++) oe(r[i], r[++i], r[++i]);
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
function ie(e) {
	return typeof e != "object" || !e || e.__b > 0 ? e : _(e) ? e.map(ie) : v({}, e);
}
function ae(n, r, i, a, o, s, c, l, u) {
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
		for (d in x) g = x[d], d == "dangerouslySetInnerHTML" ? p = g : d == "children" || d in S || d == "value" && "defaultValue" in S || d == "checked" && "defaultChecked" in S || ee(n, d, null, g, o);
		for (d in S) g = S[d], d == "children" ? h = g : d == "dangerouslySetInnerHTML" ? f = g : d == "value" ? v = g : d == "checked" ? b = g : l && typeof g != "function" || x[d] === g || ee(n, d, g, x[d], o);
		if (f) l || p && (f.__html == p.__html || f.__html == n.innerHTML) || (n.innerHTML = f.__html), r.__k = [];
		else if (p && (n.innerHTML = ""), k(r.type == "template" ? n.content : n, _(h) ? h : [h], r, i, a, C == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, s, c, s ? s[0] : i.__k && w(i, 0), l, u), s != null) for (d = s.length; d--;) y(s[d]);
		l || (d = "value", C == "progress" && v == null ? n.removeAttribute("value") : v != null && (v !== n[d] || C == "progress" && !v || C == "option" && v != x[d]) && ee(n, d, v, x[d], o), d = "checked", b != null && b != n[d] && ee(n, d, b, x[d], o));
	}
	return n;
}
function oe(e, n, r) {
	try {
		if (typeof e == "function") {
			var i = typeof e.__u == "function";
			i && e.__u(), i && n == null || (e.__u = e(n));
		} else e.current = n;
	} catch (e) {
		t.__e(e, r);
	}
}
function se(e, n, r) {
	var i, a;
	if (t.unmount && t.unmount(e), (i = e.ref) && (i.current && i.current != e.__e || oe(i, null, n)), (i = e.__c) != null) {
		if (i.componentWillUnmount) try {
			i.componentWillUnmount();
		} catch (e) {
			t.__e(e, n);
		}
		i.base = i.__P = null;
	}
	if (i = e.__k) for (a = 0; a < i.length; a++) i[a] && se(i[a], n, r || typeof e.type != "function");
	r || y(e.__e), e.__c = e.__ = e.__e = void 0;
}
function ce(e, t, n) {
	return this.constructor(e, n);
}
function le(n, r, i) {
	var a, o, s, c;
	r == document && (r = document.documentElement), t.__ && t.__(n, r), o = (a = typeof i == "function") ? null : i && i.__k || r.__k, s = [], c = [], te(r, n = (!a && i || r).__k = b(S, null, [n]), o || m, m, r.namespaceURI, !a && i ? [i] : o ? null : r.firstChild ? e.call(r.childNodes) : null, s, !a && i ? i : o ? o.__e : r.firstChild, a, c), re(s, n, c);
}
function ue(e, t) {
	le(e, t, ue);
}
function de(t, n, r) {
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
	typeof e == "function" && (e = e(v({}, n), this.props)), e && v(n, e), e != null && this.__v && (t && this._sb.push(t), D(this));
}, C.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), D(this));
}, C.prototype.render = S, r = [], a = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = function(e, t) {
	return e.__v.__b - t.__v.__b;
}, O.__r = 0, s = Math.random().toString(8), c = "__d" + s, l = "__a" + s, u = /(PointerCapture)$|Capture$/i, d = 0, f = P(!1), p = P(!0);
//#endregion
//#region node_modules/preact-custom-element/dist/preact-custom-element.esm.js
function F() {
	return F = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, F.apply(this, arguments);
}
function fe(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
var I = ["context", "children"], L = ["useFragment"];
function R(e, t, n, r) {
	function i() {
		var t, n = Reflect.construct(HTMLElement, [], i);
		return n._vdomComponent = e, r && r.shadow ? (n._root = n.attachShadow({
			mode: r.mode || "open",
			serializable: (t = r.serializable) != null && t
		}), r.adoptedStyleSheets && (n._root.adoptedStyleSheets = r.adoptedStyleSheets)) : n._root = n, n;
	}
	return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = function() {
		z.call(this, r);
	}, i.prototype.attributeChangedCallback = me, i.prototype.disconnectedCallback = he, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), i.observedAttributes = n, e.formAssociated && (i.formAssociated = !0), n.forEach(function(e) {
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
function pe(e) {
	this.getChildContext = function() {
		return e.context;
	};
	var t = e.children;
	return de(t, fe(e, I));
}
function z(e) {
	var t = new CustomEvent("_preact", {
		detail: {},
		bubbles: !0,
		cancelable: !0
	});
	this.dispatchEvent(t), this._vdom = b(pe, F({}, this._props, { context: t.detail.context }), _e(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? ue : le)(this._vdom, this._root);
}
function B(e) {
	return e.replace(/-(\w)/g, function(e, t) {
		return t ? t.toUpperCase() : "";
	});
}
function me(e, t, n) {
	if (this._vdom) {
		var r = {};
		r[e] = n ??= void 0, r[B(e)] = n, this._vdom = de(this._vdom, r), le(this._vdom, this._root);
	}
}
function he() {
	le(this._vdom = null, this._root);
}
function ge(e, t) {
	var n = this, r = e.useFragment, i = fe(e, L);
	return b(r ? S : "slot", F({}, i, { ref: function(e) {
		e ? (n.ref = e, n._listener || (n._listener = function(e) {
			e.stopPropagation(), e.detail.context = t;
		}, e.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
	} }));
}
function _e(e, t, n) {
	if (e.nodeType === 3) return e.data;
	if (e.nodeType !== 1) return null;
	var r = [], i = {}, a = 0, o = e.attributes, s = e.childNodes;
	for (a = o.length; a--;) o[a].name !== "slot" && (i[o[a].name] = o[a].value, i[B(o[a].name)] = o[a].value);
	for (a = s.length; a--;) {
		var c = _e(s[a], null, n), l = s[a].slot;
		l ? i[l] = b(ge, { name: l }, c) : r[a] = c;
	}
	var u = !(!n || !n.shadow), d = t ? b(ge, { useFragment: !u }, r) : r;
	return !u && t && (e.innerHTML = ""), b(t || e.nodeName.toLowerCase(), i, d);
}
//#endregion
//#region node_modules/preact/hooks/dist/hooks.module.js
var ve, V, ye, be, xe = 0, Se = [], H = t, Ce = H.__b, we = H.__r, Te = H.diffed, Ee = H.__c, De = H.unmount, Oe = H.__;
function ke(e, t) {
	H.__h && H.__h(V, e, xe || t), xe = 0;
	var n = V.__H ||= {
		__: [],
		__h: []
	};
	return e >= n.__.length && n.__.push({}), n.__[e];
}
function U(e) {
	return xe = 1, Ae(Ve, e);
}
function Ae(e, t, n) {
	var r = ke(ve++, 2);
	if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ve(void 0, t), function(e) {
		var t = r.__N ? r.__N[0] : r.__[0], n = r.t(t, e);
		t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}));
	}], r.__c = V, !V.__f)) {
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
		V.__f = !0;
		var a = V.shouldComponentUpdate, o = V.componentWillUpdate;
		V.componentWillUpdate = function(e, t, n) {
			if (this.__e) {
				var r = a;
				a = void 0, i(e, t, n), a = r;
			}
			o && o.call(this, e, t, n);
		}, V.shouldComponentUpdate = i;
	}
	return r.__N || r.__;
}
function je(e, t) {
	var n = ke(ve++, 3);
	!H.__s && Be(n.__H, t) && (n.__ = e, n.u = t, V.__H.__h.push(n));
}
function Me(e) {
	return xe = 5, Ne(function() {
		return { current: e };
	}, []);
}
function Ne(e, t) {
	var n = ke(ve++, 7);
	return Be(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function Pe(e, t) {
	return xe = 8, Ne(function() {
		return e;
	}, t);
}
function Fe() {
	for (var e; e = Se.shift();) {
		var t = e.__H;
		if (e.__P && t) try {
			t.__h.some(Re), t.__h.some(ze), t.__h = [];
		} catch (n) {
			t.__h = [], H.__e(n, e.__v);
		}
	}
}
H.__b = function(e) {
	V = null, Ce && Ce(e);
}, H.__ = function(e, t) {
	e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Oe && Oe(e, t);
}, H.__r = function(e) {
	we && we(e), ve = 0;
	var t = (V = e.__c).__H;
	t && (ye === V ? (t.__h = [], V.__h = [], t.__.some(function(e) {
		e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
	})) : (t.__h.some(Re), t.__h.some(ze), t.__h = [], ve = 0)), ye = V;
}, H.diffed = function(e) {
	Te && Te(e);
	var t = e.__c;
	t && t.__H && (t.__H.__h.length && (Se.push(t) !== 1 && be === H.requestAnimationFrame || ((be = H.requestAnimationFrame) || Le)(Fe)), t.__H.__.some(function(e) {
		e.u && (e.__H = e.u), e.u = void 0;
	})), ye = V = null;
}, H.__c = function(e, t) {
	t.some(function(e) {
		try {
			e.__h.some(Re), e.__h = e.__h.filter(function(e) {
				return !e.__ || ze(e);
			});
		} catch (n) {
			t.some(function(e) {
				e.__h &&= [];
			}), t = [], H.__e(n, e.__v);
		}
	}), Ee && Ee(e, t);
}, H.unmount = function(e) {
	De && De(e);
	var t, n = e.__c;
	n && n.__H && (n.__H.__.some(function(e) {
		try {
			Re(e);
		} catch (e) {
			t = e;
		}
	}), n.__H = void 0, t && H.__e(t, n.__v));
};
var Ie = typeof requestAnimationFrame == "function";
function Le(e) {
	var t, n = function() {
		clearTimeout(r), Ie && cancelAnimationFrame(t), setTimeout(e);
	}, r = setTimeout(n, 35);
	Ie && (t = requestAnimationFrame(n));
}
function Re(e) {
	var t = V, n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), V = t;
}
function ze(e) {
	var t = V;
	e.__c = e.__(), V = t;
}
function Be(e, t) {
	return !e || e.length !== t.length || t.some(function(t, n) {
		return t !== e[n];
	});
}
function Ve(e, t) {
	return typeof t == "function" ? t(e) : t;
}
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
function He(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Ue(e, t, n, r) {
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
var We = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), Ge = class extends Error {
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
}, Ke = class extends Ge {
	constructor(e) {
		super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
	}
}, qe = class extends Ge {
	constructor(e) {
		super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
	}
}, Je = class extends Ge {
	constructor(e) {
		super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
	}
}, Ye;
(function(e) {
	e.Any = "any", e.ApNortheast1 = "ap-northeast-1", e.ApNortheast2 = "ap-northeast-2", e.ApSouth1 = "ap-south-1", e.ApSoutheast1 = "ap-southeast-1", e.ApSoutheast2 = "ap-southeast-2", e.CaCentral1 = "ca-central-1", e.EuCentral1 = "eu-central-1", e.EuWest1 = "eu-west-1", e.EuWest2 = "eu-west-2", e.EuWest3 = "eu-west-3", e.SaEast1 = "sa-east-1", e.UsEast1 = "us-east-1", e.UsWest1 = "us-west-1", e.UsWest2 = "us-west-2";
})(Ye ||= {});
//#endregion
//#region node_modules/@supabase/functions-js/dist/module/FunctionsClient.js
var Xe = class {
	constructor(e, { headers: t = {}, customFetch: n, region: r = Ye.Any } = {}) {
		this.url = e, this.headers = t, this.region = r, this.fetch = We(n);
	}
	setAuth(e) {
		this.headers.Authorization = `Bearer ${e}`;
	}
	invoke(e) {
		return Ue(this, arguments, void 0, function* (e, t = {}) {
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
					throw new Ke(e);
				}), h = m.headers.get("x-relay-error");
				if (h && h === "true") throw new qe(m);
				if (!m.ok) throw new Je(m);
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
					response: e instanceof Je || e instanceof qe ? e.context : void 0
				};
			} finally {
				n && clearTimeout(n);
			}
		});
	}
}, Ze = 3, Qe = (e) => Math.min(1e3 * 2 ** e, 3e4), $e = [520, 503], et = [
	"GET",
	"HEAD",
	"OPTIONS"
], tt = class extends Error {
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
function nt(e, t) {
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
function rt(e, t, n, r) {
	return !(!r || n >= Ze || !et.includes(e) || !$e.includes(t));
}
var it = class {
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
					if (t?.name === "AbortError" || t?.code === "ABORT_ERR" || !et.includes(n.method)) throw t;
					if (n.retryEnabled && e < Ze) {
						let t = Qe(e);
						e++, await nt(t, n.signal);
						continue;
					}
					throw t;
				}
				if (rt(n.method, i.status, e, n.retryEnabled)) {
					let t = i.headers?.get("Retry-After") ?? null, r = t === null ? Qe(e) : Math.max(0, parseInt(t, 10) || 0) * 1e3;
					await i.text(), e++, await nt(r, n.signal);
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
			if (n && t.shouldThrowOnError) throw new tt(n);
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
}, at = class extends it {
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
}, ot = /* @__PURE__ */ RegExp("[,()]"), st = class extends at {
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
		let n = Array.from(new Set(t)).map((e) => typeof e == "string" && ot.test(e) ? `"${e}"` : `${e}`).join(",");
		return this.url.searchParams.append(e, `in.(${n})`), this;
	}
	notIn(e, t) {
		let n = Array.from(new Set(t)).map((e) => typeof e == "string" && ot.test(e) ? `"${e}"` : `${e}`).join(",");
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
}, ct = class {
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
		return s.searchParams.set("select", o), r && c.append("Prefer", `count=${r}`), new st({
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
		return new st({
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
		return new st({
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
		return t && r.append("Prefer", `count=${t}`), new st({
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
		return e && n.append("Prefer", `count=${e}`), new st({
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
function lt(e) {
	"@babel/helpers - typeof";
	return lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, lt(e);
}
function ut(e, t) {
	if (lt(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (lt(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function dt(e) {
	var t = ut(e, "string");
	return lt(t) == "symbol" ? t : t + "";
}
function ft(e, t, n) {
	return (t = dt(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function pt(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function mt(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? pt(Object(n), !0).forEach(function(t) {
			ft(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pt(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var ht = class e {
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
				return a.addEventListener("abort", i, { once: !0 }), s(e, mt(mt({}, t), {}, { signal: n.signal })).finally(() => {
					clearTimeout(r), a.removeEventListener("abort", i);
				});
			}
			return s(e, mt(mt({}, t), {}, { signal: n.signal })).finally(() => clearTimeout(r));
		} : this.fetch = s, this.retry = o;
	}
	from(e) {
		if (!e || typeof e != "string" || e.trim() === "") throw Error("Invalid relation name: relation must be a non-empty string.");
		return new ct(new URL(`${this.url}/${e}`), {
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
		return l ? u.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal") : i && u.set("Prefer", `count=${i}`), new st({
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
}, gt = class {
	constructor() {}
	static detectEnvironment() {
		if (typeof WebSocket < "u") return {
			type: "native",
			wsConstructor: WebSocket
		};
		let e = globalThis;
		if (typeof globalThis < "u" && e.WebSocket !== void 0) return {
			type: "native",
			wsConstructor: e.WebSocket
		};
		let t = typeof global < "u" ? global : void 0;
		if (t && t.WebSocket !== void 0) return {
			type: "native",
			wsConstructor: t.WebSocket
		};
		if (typeof globalThis < "u" && e.WebSocketPair !== void 0 && globalThis.WebSocket === void 0) return {
			type: "cloudflare",
			error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
			workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
		};
		if (typeof globalThis < "u" && e.EdgeRuntime || typeof navigator < "u" && navigator.userAgent?.includes("Vercel-Edge")) return {
			type: "unsupported",
			error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
			workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
		};
		let n = globalThis.process;
		if (n) {
			let e = n.versions;
			if (e && e.node) {
				let t = e.node, n = parseInt(t.replace(/^v/, "").split(".")[0]);
				return n >= 22 ? globalThis.WebSocket === void 0 ? {
					type: "unsupported",
					error: `Node.js ${n} detected but native WebSocket not found.`,
					workaround: "Provide a WebSocket implementation via the transport option."
				} : {
					type: "native",
					wsConstructor: globalThis.WebSocket
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
		if (e.wsConstructor) return e.wsConstructor;
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
}, _t = "realtime-js/2.105.4", vt = "1.0.0", yt = "2.0.0", bt = yt, xt = 1e4, St = {
	closed: "closed",
	errored: "errored",
	joined: "joined",
	joining: "joining",
	leaving: "leaving"
}, Ct = {
	close: "phx_close",
	error: "phx_error",
	join: "phx_join",
	reply: "phx_reply",
	leave: "phx_leave",
	access_token: "access_token"
}, wt = {
	connecting: "connecting",
	open: "open",
	closing: "closing",
	closed: "closed"
}, Tt = class {
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
}, Et;
(function(e) {
	e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange";
})(Et ||= {});
var Dt = (e, t, n = {}) => {
	let r = n.skipTypes ?? [];
	return t ? Object.keys(t).reduce((n, i) => (n[i] = Ot(i, e, t, r), n), {}) : {};
}, Ot = (e, t, n, r) => {
	let i = t.find((t) => t.name === e)?.type, a = n[e];
	return i && !r.includes(i) ? kt(i, a) : At(a);
}, kt = (e, t) => {
	if (e.charAt(0) === "_") return Pt(t, e.slice(1, e.length));
	switch (e) {
		case Et.bool: return jt(t);
		case Et.float4:
		case Et.float8:
		case Et.int2:
		case Et.int4:
		case Et.int8:
		case Et.numeric:
		case Et.oid: return Mt(t);
		case Et.json:
		case Et.jsonb: return Nt(t);
		case Et.timestamp: return Ft(t);
		case Et.abstime:
		case Et.date:
		case Et.daterange:
		case Et.int4range:
		case Et.int8range:
		case Et.money:
		case Et.reltime:
		case Et.text:
		case Et.time:
		case Et.timestamptz:
		case Et.timetz:
		case Et.tsrange:
		case Et.tstzrange: return At(t);
		default: return At(t);
	}
}, At = (e) => e, jt = (e) => {
	switch (e) {
		case "t": return !0;
		case "f": return !1;
		default: return e;
	}
}, Mt = (e) => {
	if (typeof e == "string") {
		let t = parseFloat(e);
		if (!Number.isNaN(t)) return t;
	}
	return e;
}, Nt = (e) => {
	if (typeof e == "string") try {
		return JSON.parse(e);
	} catch {
		return e;
	}
	return e;
}, Pt = (e, t) => {
	if (typeof e != "string") return e;
	let n = e.length - 1, r = e[n];
	if (e[0] === "{" && r === "}") {
		let r, i = e.slice(1, n);
		try {
			r = JSON.parse("[" + i + "]");
		} catch {
			r = i ? i.split(",") : [];
		}
		return r.map((e) => kt(t, e));
	}
	return e;
}, Ft = (e) => typeof e == "string" ? e.replace(" ", "T") : e, It = (e) => {
	let t = new URL(e);
	return t.protocol = t.protocol.replace(/^ws/i, "http"), t.pathname = t.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), t.pathname === "" || t.pathname === "/" ? t.pathname = "/api/broadcast" : t.pathname += "/api/broadcast", t.href;
}, Lt = (e) => typeof e == "function" ? e : function() {
	return e;
}, Rt = typeof self < "u" ? self : null, zt = typeof window < "u" ? window : null, Bt = Rt || zt || globalThis, Vt = "2.0.0", Ht = 1e4, Ut = 1e3, Wt = {
	connecting: 0,
	open: 1,
	closing: 2,
	closed: 3
}, Gt = {
	closed: "closed",
	errored: "errored",
	joined: "joined",
	joining: "joining",
	leaving: "leaving"
}, Kt = {
	close: "phx_close",
	error: "phx_error",
	join: "phx_join",
	reply: "phx_reply",
	leave: "phx_leave"
}, qt = {
	longpoll: "longpoll",
	websocket: "websocket"
}, Jt = { complete: 4 }, Yt = "base64url.bearer.phx.", Xt = class {
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
}, Zt = class {
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
}, Qt = class {
	constructor(e, t, n) {
		this.state = Gt.closed, this.topic = e, this.params = Lt(t || {}), this.socket = n, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new Xt(this, Kt.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new Zt(() => {
			this.socket.isConnected() && this.rejoin();
		}, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(this.socket.onOpen(() => {
			this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
		})), this.joinPush.receive("ok", () => {
			this.state = Gt.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((e) => e.send()), this.pushBuffer = [];
		}), this.joinPush.receive("error", (e) => {
			this.state = Gt.errored, this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, e), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
		}), this.onClose(() => {
			this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`), this.state = Gt.closed, this.socket.remove(this);
		}), this.onError((e) => {
			this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, e), this.isJoining() && this.joinPush.reset(), this.state = Gt.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
		}), this.joinPush.receive("timeout", () => {
			this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), new Xt(this, Kt.leave, Lt({}), this.timeout).send(), this.state = Gt.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
		}), this.on(Kt.reply, (e, t) => {
			this.trigger(this.replyEventName(t), e);
		});
	}
	join(e = this.timeout) {
		if (this.joinedOnce) throw Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
		return this.timeout = e, this.joinedOnce = !0, this.rejoin(), this.joinPush;
	}
	teardown() {
		this.pushBuffer.forEach((e) => e.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = Gt.closed, this.bindings = [];
	}
	onClose(e) {
		this.on(Kt.close, e);
	}
	onError(e) {
		return this.on(Kt.error, (t) => e(t));
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
		let r = new Xt(this, e, function() {
			return t;
		}, n);
		return this.canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r;
	}
	leave(e = this.timeout) {
		this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = Gt.leaving;
		let t = () => {
			this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(Kt.close, "leave");
		}, n = new Xt(this, Kt.leave, Lt({}), e);
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
		this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = Gt.joining, this.joinPush.resend(e));
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
		return this.state === Gt.closed;
	}
	isErrored() {
		return this.state === Gt.errored;
	}
	isJoined() {
		return this.state === Gt.joined;
	}
	isJoining() {
		return this.state === Gt.joining;
	}
	isLeaving() {
		return this.state === Gt.leaving;
	}
}, $t = class {
	static request(e, t, n, r, i, a, o) {
		if (Bt.XDomainRequest) {
			let n = new Bt.XDomainRequest();
			return this.xdomainRequest(n, e, t, r, i, a, o);
		} else if (Bt.XMLHttpRequest) {
			let s = new Bt.XMLHttpRequest();
			return this.xhrRequest(s, e, t, n, r, i, a, o);
		} else if (Bt.fetch && Bt.AbortController) return this.fetchRequest(e, t, n, r, i, a, o);
		else throw Error("No suitable XMLHttpRequest implementation found");
	}
	static fetchRequest(e, t, n, r, i, a, o) {
		let s = {
			method: e,
			headers: n,
			body: r
		}, c = null;
		return i && (c = new AbortController(), setTimeout(() => c.abort(), i), s.signal = c.signal), Bt.fetch(t, s).then((e) => e.text()).then((e) => this.parseJSON(e)).then((e) => o && o(e)).catch((e) => {
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
			e.readyState === Jt.complete && s && s(this.parseJSON(e.responseText));
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
}, en = (e) => {
	let t = "", n = new Uint8Array(e), r = n.byteLength;
	for (let e = 0; e < r; e++) t += String.fromCharCode(n[e]);
	return btoa(t);
}, tn = class {
	constructor(e, t) {
		t && t.length === 2 && t[1].startsWith(Yt) && (this.authToken = atob(t[1].slice(Yt.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = /* @__PURE__ */ new Set(), this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {}, this.onerror = function() {}, this.onmessage = function() {}, this.onclose = function() {}, this.pollEndpoint = this.normalizeEndpoint(e), this.readyState = Wt.connecting, setTimeout(() => this.poll(), 0);
	}
	normalizeEndpoint(e) {
		return e.replace("ws://", "http://").replace("wss://", "https://").replace(RegExp("(.*)/" + qt.websocket), "$1/" + qt.longpoll);
	}
	endpointURL() {
		return $t.appendParams(this.pollEndpoint, { token: this.token });
	}
	closeAndRetry(e, t, n) {
		this.close(e, t, n), this.readyState = Wt.connecting;
	}
	ontimeout() {
		this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1);
	}
	isActive() {
		return this.readyState === Wt.open || this.readyState === Wt.connecting;
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
					this.readyState = Wt.open, this.onopen({}), this.poll();
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
		typeof e != "string" && (e = en(e)), this.currentBatch ? this.currentBatch.push(e) : this.awaitingBatchAck ? this.batchBuffer.push(e) : (this.currentBatch = [e], this.currentBatchTimer = setTimeout(() => {
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
		this.readyState = Wt.closed;
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
		a = $t.request(e, this.endpointURL(), t, n, this.timeout, () => {
			this.reqs.delete(a), r();
		}, (e) => {
			this.reqs.delete(a), this.isActive() && i(e);
		}), this.reqs.add(a);
	}
}, nn = class e {
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
}, rn = {
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
			event: Kt.reply,
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
}, an = class {
	constructor(e, t = {}) {
		this.stateChangeCallbacks = {
			open: [],
			close: [],
			error: [],
			message: []
		}, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = t.timeout || Ht, this.transport = t.transport || Bt.WebSocket || tn, this.conn = void 0, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = t.longPollFallbackMs, this.fallbackTimer = null;
		let n = null;
		try {
			n = Bt && Bt.sessionStorage;
		} catch {}
		this.sessionStore = t.sessionStorage || n, this.establishedConnections = 0, this.defaultEncoder = rn.encode.bind(rn), this.defaultDecoder = rn.decode.bind(rn), this.closeWasClean = !0, this.disconnecting = !1, this.binaryType = t.binaryType || "arraybuffer", this.connectClock = 1, this.pageHidden = !1, this.encode = void 0, this.decode = void 0, this.transport === tn ? (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder) : (this.encode = t.encode || this.defaultEncoder, this.decode = t.decode || this.defaultDecoder);
		let r = null;
		zt && zt.addEventListener && (zt.addEventListener("pagehide", (e) => {
			this.conn && (this.disconnect(), r = this.connectClock);
		}), zt.addEventListener("pageshow", (e) => {
			r === this.connectClock && (r = null, this.connect());
		}), zt.addEventListener("visibilitychange", () => {
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
		}), this.longpollerTimeout = t.longpollerTimeout || 2e4, this.params = Lt(t.params || {}), this.endPoint = `${e}/${qt.websocket}`, this.vsn = t.vsn || Vt, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new Zt(() => {
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
		return tn;
	}
	replaceTransport(e) {
		this.connectClock++, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn &&= (this.conn.close(), null), this.transport = e;
	}
	protocol() {
		return location.protocol.match(/^https/) ? "wss" : "ws";
	}
	endPointURL() {
		let e = $t.appendParams($t.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
		return e.charAt(0) === "/" ? e.charAt(1) === "/" ? `${this.protocol()}:${e}` : `${this.protocol()}://${location.host}${e}` : e;
	}
	disconnect(e, t, n) {
		this.connectClock++, this.disconnecting = !0, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.teardown(() => {
			this.disconnecting = !1, e && e();
		}, t, n);
	}
	connect(e) {
		e && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = Lt(e)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== tn ? this.connectWithFallback(tn, this.longPollFallbackMs) : this.transportConnect());
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
			case tn: return "LongPoll";
			default: return e.name;
		}
	}
	transportConnect() {
		this.connectClock++, this.closeWasClean = !1;
		let e;
		this.authToken && (e = ["phoenix", `${Yt}${btoa(this.authToken).replace(/=/g, "")}`]), this.conn = new this.transport(this.endPointURL(), e), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = () => this.onConnOpen(), this.conn.onerror = (e) => this.onConnError(e), this.conn.onmessage = (e) => this.onConnMessage(e), this.conn.onclose = (e) => this.onConnClose(e);
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
			this.triggerChanError(/* @__PURE__ */ Error("heartbeat timeout")), this.closeWasClean = !1, this.teardown(() => this.reconnectTimer.scheduleTimeout(), Ut, "heartbeat timeout");
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
		if (n === 5 || e.readyState === Wt.closed) {
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
			t.isErrored() || t.isLeaving() || t.isClosed() || t.trigger(Kt.error, e);
		});
	}
	connectionState() {
		switch (this.conn && this.conn.readyState) {
			case Wt.connecting: return "connecting";
			case Wt.open: return "open";
			case Wt.closing: return "closing";
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
		let n = new Qt(e, t, this);
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
}, on = class e {
	constructor(t, n) {
		let r = ln(n);
		this.presence = new nn(t.getChannel(), r), this.presence.onJoin((n, r, i) => {
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
		return e = cn(e), Object.getOwnPropertyNames(e).reduce((t, n) => {
			let r = e[n];
			return t[n] = sn(r), t;
		}, {});
	}
	static onJoinPayload(e, t, n) {
		return {
			event: "join",
			key: e,
			currentPresences: un(t),
			newPresences: sn(n)
		};
	}
	static onLeavePayload(e, t, n) {
		return {
			event: "leave",
			key: e,
			currentPresences: un(t),
			leftPresences: sn(n)
		};
	}
};
function sn(e) {
	return e.metas.map((e) => (e.presence_ref = e.phx_ref, delete e.phx_ref, delete e.phx_ref_prev, e));
}
function cn(e) {
	return JSON.parse(JSON.stringify(e));
}
function ln(e) {
	return e?.events && { events: e.events };
}
function un(e) {
	return e?.metas ? sn(e) : [];
}
//#endregion
//#region node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js
var dn;
(function(e) {
	e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave";
})(dn ||= {});
var fn = class {
	get state() {
		return this.presenceAdapter.state;
	}
	constructor(e, t) {
		this.channel = e, this.presenceAdapter = new on(this.channel.channelAdapter, t);
	}
};
//#endregion
//#region node_modules/@supabase/realtime-js/dist/module/lib/normalizeChannelError.js
function pn(e) {
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
var mn = class {
	constructor(e, t, n) {
		let r = hn(n);
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
		return this.socket.isConnected() && this.state === St.joined;
	}
	isJoined() {
		return this.state === St.joined;
	}
	isJoining() {
		return this.state === St.joining;
	}
	isClosed() {
		return this.state === St.closed;
	}
	isLeaving() {
		return this.state === St.leaving;
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
function hn(e) {
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
var gn;
(function(e) {
	e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE";
})(gn ||= {});
var _n;
(function(e) {
	e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes", e.SYSTEM = "system";
})(_n ||= {});
var vn;
(function(e) {
	e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR";
})(vn ||= {});
var yn = class e {
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
		}, t.config), this.channelAdapter = new mn(this.socket.socketAdapter, e, this.params), this.presence = new fn(this), this._onClose(() => {
			this.socket._remove(this);
		}), this._updateFilterTransform(), this.broadcastEndpointURL = It(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || !1, !this.private && this.params.config?.broadcast?.replay) throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
	}
	subscribe(e, t = this.timeout) {
		if (this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed()) {
			let { config: { broadcast: n, presence: r, private: i } } = this.params, a = this.bindings.postgres_changes?.map((e) => e.filter) ?? [], o = !!this.bindings[_n.PRESENCE] && this.bindings[_n.PRESENCE].length > 0 || this.params.config.presence?.enabled === !0, s = {}, c = {
				broadcast: n,
				presence: Object.assign(Object.assign({}, r), { enabled: o }),
				postgres_changes: a,
				private: i
			};
			this.socket.accessTokenValue && (s.access_token = this.socket.accessTokenValue), this._onError((t) => {
				e?.(vn.CHANNEL_ERROR, pn(t));
			}), this._onClose(() => e?.(vn.CLOSED)), this.updateJoinPayload(Object.assign({ config: c }, s)), this._updateFilterMessage(), this.channelAdapter.subscribe(t).receive("ok", async ({ postgres_changes: t }) => {
				if (this.socket._isManualToken() || this.socket.setAuth(), t === void 0) {
					e?.(vn.SUBSCRIBED);
					return;
				}
				this._updatePostgresBindings(t, e);
			}).receive("error", (t) => {
				this.state = St.errored;
				let n = Object.values(t).join(", ") || "error";
				e?.(vn.CHANNEL_ERROR, Error(n, { cause: t }));
			}).receive("timeout", () => {
				e?.(vn.TIMED_OUT);
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
				this.unsubscribe(), this.state = St.errored, n?.(vn.CHANNEL_ERROR, /* @__PURE__ */ Error("mismatch between server and client bindings for postgres changes"));
				return;
			}
		}
		this.bindings.postgres_changes = a, this.state != St.errored && n && n(vn.SUBSCRIBED);
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
		let r = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(), i = e === _n.PRESENCE || e === _n.POSTGRES_CHANGES;
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
				return e instanceof Error && e.name === "AbortError" ? "timed out" : "error";
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
		let { close: n, error: r, leave: i, join: a } = Ct;
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
		return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = Dt(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = Dt(e.columns, e.old_record)), t;
	}
}, bn = class {
	constructor(e, t) {
		this.socket = new an(e, t);
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
		return this.socket.connectionState() == wt.connecting;
	}
	isDisconnecting() {
		return this.socket.connectionState() == wt.closing;
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
}, xn = {
	HEARTBEAT_INTERVAL: 25e3,
	RECONNECT_DELAY: 10,
	HEARTBEAT_TIMEOUT_FALLBACK: 100
}, Sn = [
	1e3,
	2e3,
	5e3,
	1e4
], Cn = 1e4;
function wn() {
	let e = /* @__PURE__ */ new Map();
	return {
		get length() {
			return e.size;
		},
		clear() {
			e.clear();
		},
		getItem(t) {
			return e.has(t) ? e.get(t) : null;
		},
		key(t) {
			return Array.from(e.keys())[t] ?? null;
		},
		removeItem(t) {
			e.delete(t);
		},
		setItem(t, n) {
			e.set(t, String(n));
		}
	};
}
function Tn() {
	try {
		if (typeof globalThis < "u" && globalThis.sessionStorage) return globalThis.sessionStorage;
	} catch {}
	return wn();
}
var En = "\n  addEventListener(\"message\", (e) => {\n    if (e.data.event === \"start\") {\n      setInterval(() => postMessage({ event: \"keepAlive\" }), e.data.interval);\n    }\n  });", Dn = class {
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
		if (this.channels = [], this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = "", this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new Tt(), this._manuallySetToken = !1, this._authPromise = null, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._pendingDisconnectTimer = null, this._disconnectOnEmptyChannelsAfterMs = 0, this._resolveFetch = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), !t?.params?.apikey) throw Error("API key is required to connect to Realtime");
		this.apiKey = t.params.apikey;
		let n = this._initializeOptions(t);
		this.socketAdapter = new bn(e, n), this.httpEndpoint = It(e), this.fetch = this._resolveFetch(t?.fetch);
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
		return this.socketAdapter.connectionState() || wt.closed;
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
			let n = new yn(`realtime:${e}`, t, this);
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
				version: _t
			};
			t && e.updateJoinPayload(n), e.joinedOnce && e.channelAdapter.isJoined() && e.channelAdapter.push(Ct.access_token, { access_token: t });
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
			let e = new Blob([En], { type: "application/javascript" });
			t = URL.createObjectURL(e);
		}
		return t;
	}
	_initializeOptions(e) {
		this.worker = e?.worker ?? !1, this.accessToken = e?.accessToken ?? null;
		let t = {};
		t.timeout = e?.timeout ?? xt, t.heartbeatIntervalMs = e?.heartbeatIntervalMs ?? xn.HEARTBEAT_INTERVAL, this._disconnectOnEmptyChannelsAfterMs = e?.disconnectOnEmptyChannelsAfterMs ?? 2 * (e?.heartbeatIntervalMs ?? xn.HEARTBEAT_INTERVAL), t.transport = e?.transport ?? gt.getWebSocketConstructor(), t.params = e?.params, t.logger = e?.logger, t.heartbeatCallback = this._wrapHeartbeatCallback(e?.heartbeatCallback), t.sessionStorage = e?.sessionStorage ?? Tn(), t.reconnectAfterMs = e?.reconnectAfterMs ?? ((e) => Sn[e - 1] || Cn);
		let n, r, i = e?.vsn ?? bt;
		switch (i) {
			case vt:
				n = (e, t) => t(JSON.stringify(e)), r = (e, t) => t(JSON.parse(e));
				break;
			case yt:
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
}, On = class extends Error {
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
function kn(e, t, n) {
	let r = new URL(t, e);
	if (n) for (let [e, t] of Object.entries(n)) t !== void 0 && r.searchParams.set(e, t);
	return r.toString();
}
async function An(e) {
	return !e || e.type === "none" ? {} : e.type === "bearer" ? { Authorization: `Bearer ${e.token}` } : e.type === "header" ? { [e.name]: e.value } : e.type === "custom" ? await e.getHeaders() : {};
}
function jn(e) {
	let t = e.fetchImpl ?? globalThis.fetch;
	return { async request({ method: n, path: r, query: i, body: a, headers: o }) {
		let s = kn(e.baseUrl, r, i), c = await An(e.auth), l = await t(s, {
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
			throw new On(t?.message ?? `Request failed with status ${l.status}`, {
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
function Mn(e) {
	return e.join("");
}
var Nn = class {
	constructor(e, t = "") {
		this.client = e, this.prefix = t;
	}
	async listNamespaces(e) {
		let t = e ? { parent: Mn(e.namespace) } : void 0;
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
			path: `${this.prefix}/namespaces/${Mn(e.namespace)}`
		});
	}
	async loadNamespaceMetadata(e) {
		return { properties: (await this.client.request({
			method: "GET",
			path: `${this.prefix}/namespaces/${Mn(e.namespace)}`
		})).data.properties };
	}
	async namespaceExists(e) {
		try {
			return await this.client.request({
				method: "HEAD",
				path: `${this.prefix}/namespaces/${Mn(e.namespace)}`
			}), !0;
		} catch (e) {
			if (e instanceof On && e.status === 404) return !1;
			throw e;
		}
	}
	async createNamespaceIfNotExists(e, t) {
		try {
			return await this.createNamespace(e, t);
		} catch (e) {
			if (e instanceof On && e.status === 409) return;
			throw e;
		}
	}
};
function Pn(e) {
	return e.join("");
}
var Fn = class {
	constructor(e, t = "", n) {
		this.client = e, this.prefix = t, this.accessDelegation = n;
	}
	async listTables(e) {
		return (await this.client.request({
			method: "GET",
			path: `${this.prefix}/namespaces/${Pn(e.namespace)}/tables`
		})).data.identifiers;
	}
	async createTable(e, t) {
		let n = {};
		return this.accessDelegation && (n["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
			method: "POST",
			path: `${this.prefix}/namespaces/${Pn(e.namespace)}/tables`,
			body: t,
			headers: n
		})).data.metadata;
	}
	async updateTable(e, t) {
		let n = await this.client.request({
			method: "POST",
			path: `${this.prefix}/namespaces/${Pn(e.namespace)}/tables/${e.name}`,
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
			path: `${this.prefix}/namespaces/${Pn(e.namespace)}/tables/${e.name}`,
			query: { purgeRequested: String(t?.purge ?? !1) }
		});
	}
	async loadTable(e) {
		let t = {};
		return this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
			method: "GET",
			path: `${this.prefix}/namespaces/${Pn(e.namespace)}/tables/${e.name}`,
			headers: t
		})).data.metadata;
	}
	async tableExists(e) {
		let t = {};
		this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
		try {
			return await this.client.request({
				method: "HEAD",
				path: `${this.prefix}/namespaces/${Pn(e.namespace)}/tables/${e.name}`,
				headers: t
			}), !0;
		} catch (e) {
			if (e instanceof On && e.status === 404) return !1;
			throw e;
		}
	}
	async createTableIfNotExists(e, t) {
		try {
			return await this.createTable(e, t);
		} catch (n) {
			if (n instanceof On && n.status === 409) return await this.loadTable({
				namespace: e.namespace,
				name: t.name
			});
			throw n;
		}
	}
}, In = class {
	constructor(e) {
		let t = "v1";
		e.catalogName && (t += `/${e.catalogName}`);
		let n = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
		this.client = jn({
			baseUrl: n,
			auth: e.auth,
			fetchImpl: e.fetch
		}), this.accessDelegation = e.accessDelegation?.join(","), this.namespaceOps = new Nn(this.client, t), this.tableOps = new Fn(this.client, t, this.accessDelegation);
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
function Ln(e) {
	"@babel/helpers - typeof";
	return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ln(e);
}
function Rn(e, t) {
	if (Ln(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ln(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function zn(e) {
	var t = Rn(e, "string");
	return Ln(t) == "symbol" ? t : t + "";
}
function Bn(e, t, n) {
	return (t = zn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Vn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function W(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Vn(Object(n), !0).forEach(function(t) {
			Bn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Hn = class extends Error {
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
function Un(e) {
	return typeof e == "object" && !!e && "__isStorageError" in e;
}
var Wn = class extends Hn {
	constructor(e, t, n, r = "storage") {
		super(e, r, t, n), this.name = r === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = t, this.statusCode = n;
	}
	toJSON() {
		return W({}, super.toJSON());
	}
}, Gn = class extends Hn {
	constructor(e, t, n = "storage") {
		super(e, n), this.name = n === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = t;
	}
};
function Kn(e, t, n) {
	let r = W({}, e), i = t.toLowerCase();
	for (let e of Object.keys(r)) e.toLowerCase() === i && delete r[e];
	return r[i] = n, r;
}
function qn(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n.toLowerCase()] = r;
	return t;
}
var Jn = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), Yn = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Xn = (e) => {
	if (Array.isArray(e)) return e.map((e) => Xn(e));
	if (typeof e == "function" || e !== Object(e)) return e;
	let t = {};
	return Object.entries(e).forEach(([e, n]) => {
		let r = e.replace(/([-_][a-z])/gi, (e) => e.toUpperCase().replace(/[-_]/g, ""));
		t[r] = Xn(n);
	}), t;
}, Zn = (e) => !e || typeof e != "string" || e.length === 0 || e.length > 100 || e.trim() !== e || e.includes("/") || e.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e), Qn = (e) => {
	if (typeof e == "object" && e) {
		let t = e;
		if (typeof t.msg == "string") return t.msg;
		if (typeof t.message == "string") return t.message;
		if (typeof t.error_description == "string") return t.error_description;
		if (typeof t.error == "string") return t.error;
		if (typeof t.error == "object" && t.error !== null) {
			let e = t.error;
			if (typeof e.message == "string") return e.message;
		}
	}
	return JSON.stringify(e);
}, $n = async (e, t, n, r) => {
	if (typeof e == "object" && e && "json" in e && typeof e.json == "function") {
		let n = e, i = parseInt(String(n.status), 10);
		Number.isFinite(i) || (i = 500), n.json().then((e) => {
			let n = e?.statusCode || e?.code || i + "";
			t(new Wn(Qn(e), i, n, r));
		}).catch(() => {
			let e = i + "";
			t(new Wn(n.statusText || `HTTP ${i} error`, i, e, r));
		});
	} else t(new Gn(Qn(e), e, r));
}, er = (e, t, n, r) => {
	let i = {
		method: e,
		headers: t?.headers || {}
	};
	if (e === "GET" || e === "HEAD" || !r) return W(W({}, i), n);
	if (Yn(r)) {
		let e = t?.headers || {}, n;
		for (let [t, r] of Object.entries(e)) t.toLowerCase() === "content-type" && (n = r);
		i.headers = Kn(e, "Content-Type", n ?? "application/json"), i.body = JSON.stringify(r);
	} else i.body = r;
	return t?.duplex && (i.duplex = t.duplex), W(W({}, i), n);
};
async function tr(e, t, n, r, i, a, o) {
	return new Promise((s, c) => {
		e(n, er(t, r, i, a)).then((e) => {
			if (!e.ok) throw e;
			if (r?.noResolveJson) return e;
			if (o === "vectors") {
				let t = e.headers.get("content-type");
				if (e.headers.get("content-length") === "0" || e.status === 204 || !t || !t.includes("application/json")) return {};
			}
			return e.json();
		}).then((e) => s(e)).catch((e) => $n(e, c, r, o));
	});
}
function nr(e = "storage") {
	return {
		get: async (t, n, r, i) => tr(t, "GET", n, r, i, void 0, e),
		post: async (t, n, r, i, a) => tr(t, "POST", n, i, a, r, e),
		put: async (t, n, r, i, a) => tr(t, "PUT", n, i, a, r, e),
		head: async (t, n, r, i) => tr(t, "HEAD", n, W(W({}, r), {}, { noResolveJson: !0 }), i, void 0, e),
		remove: async (t, n, r, i, a) => tr(t, "DELETE", n, i, a, r, e)
	};
}
var { get: rr, post: ir, put: ar, head: or, remove: sr } = nr("storage"), cr = nr("vectors"), lr = class {
	constructor(e, t = {}, n, r = "storage") {
		this.shouldThrowOnError = !1, this.url = e, this.headers = qn(t), this.fetch = Jn(n), this.namespace = r;
	}
	throwOnError() {
		return this.shouldThrowOnError = !0, this;
	}
	setHeader(e, t) {
		return this.headers = Kn(this.headers, e, t), this;
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
			if (Un(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
}, ur = class {
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
			if (Un(t)) return {
				data: null,
				error: t
			};
			throw t;
		}
	}
}, dr = Symbol.toStringTag, fr = class {
	constructor(e, t) {
		this.downloadFn = e, this.shouldThrowOnError = t, this[dr] = "BlobDownloadBuilder", this.promise = null;
	}
	asStream() {
		return new ur(this.downloadFn, this.shouldThrowOnError);
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
			if (Un(t)) return {
				data: null,
				error: t
			};
			throw t;
		}
	}
}, pr = {
	limit: 100,
	offset: 0,
	sortBy: {
		column: "name",
		order: "asc"
	}
}, mr = {
	cacheControl: "3600",
	contentType: "text/plain;charset=UTF-8",
	upsert: !1
}, hr = class extends lr {
	constructor(e, t = {}, n, r) {
		super(e, t, r, "storage"), this.bucketId = n;
	}
	async uploadOrUpdate(e, t, n, r) {
		var i = this;
		return i.handleOperation(async () => {
			let a, o = W(W({}, mr), r), s = W(W({}, i.headers), e === "POST" && { "x-upsert": String(o.upsert) }), c = o.metadata;
			if (typeof Blob < "u" && n instanceof Blob ? (a = new FormData(), a.append("cacheControl", o.cacheControl), c && a.append("metadata", i.encodeMetadata(c)), a.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (a = n, a.has("cacheControl") || a.append("cacheControl", o.cacheControl), c && !a.has("metadata") && a.append("metadata", i.encodeMetadata(c))) : (a = n, s["cache-control"] = `max-age=${o.cacheControl}`, s["content-type"] = o.contentType, c && (s["x-metadata"] = i.toBase64(i.encodeMetadata(c))), (typeof ReadableStream < "u" && a instanceof ReadableStream || a && typeof a == "object" && "pipe" in a && typeof a.pipe == "function") && !o.duplex && (o.duplex = "half")), r?.headers) for (let [e, t] of Object.entries(r.headers)) s = Kn(s, e, t);
			let l = i._removeEmptyFolders(t), u = i._getFinalPath(l), d = await (e == "PUT" ? ar : ir)(i.fetch, `${i.url}/object/${u}`, a, W({ headers: s }, o?.duplex ? { duplex: o.duplex } : {}));
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
			let e, t = W(W({}, mr), r), o = W(W({}, i.headers), { "x-upsert": String(t.upsert) }), c = t.metadata;
			if (typeof Blob < "u" && n instanceof Blob ? (e = new FormData(), e.append("cacheControl", t.cacheControl), c && e.append("metadata", i.encodeMetadata(c)), e.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (e = n, e.has("cacheControl") || e.append("cacheControl", t.cacheControl), c && !e.has("metadata") && e.append("metadata", i.encodeMetadata(c))) : (e = n, o["cache-control"] = `max-age=${t.cacheControl}`, o["content-type"] = t.contentType, c && (o["x-metadata"] = i.toBase64(i.encodeMetadata(c))), (typeof ReadableStream < "u" && e instanceof ReadableStream || e && typeof e == "object" && "pipe" in e && typeof e.pipe == "function") && !t.duplex && (t.duplex = "half")), r?.headers) for (let [e, t] of Object.entries(r.headers)) o = Kn(o, e, t);
			return {
				path: a,
				fullPath: (await ar(i.fetch, s.toString(), e, W({ headers: o }, t?.duplex ? { duplex: t.duplex } : {}))).Key
			};
		});
	}
	async createSignedUploadUrl(e, t) {
		var n = this;
		return n.handleOperation(async () => {
			let r = n._getFinalPath(e), i = W({}, n.headers);
			t?.upsert && (i["x-upsert"] = "true");
			let a = await ir(n.fetch, `${n.url}/object/upload/sign/${r}`, {}, { headers: i }), o = new URL(n.url + a.url), s = o.searchParams.get("token");
			if (!s) throw new Hn("No token returned by API");
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
		return r.handleOperation(async () => await ir(r.fetch, `${r.url}/object/move`, {
			bucketId: r.bucketId,
			sourceKey: e,
			destinationKey: t,
			destinationBucket: n?.destinationBucket
		}, { headers: r.headers }));
	}
	async copy(e, t, n) {
		var r = this;
		return r.handleOperation(async () => ({ path: (await ir(r.fetch, `${r.url}/object/copy`, {
			bucketId: r.bucketId,
			sourceKey: e,
			destinationKey: t,
			destinationBucket: n?.destinationBucket
		}, { headers: r.headers })).Key }));
	}
	async createSignedUrl(e, t, n) {
		var r = this;
		return r.handleOperation(async () => {
			let i = r._getFinalPath(e), a = typeof n?.transform == "object" && n.transform !== null && Object.keys(n.transform).length > 0, o = await ir(r.fetch, `${r.url}/object/sign/${i}`, W({ expiresIn: t }, a ? { transform: n.transform } : {}), { headers: r.headers }), s = new URLSearchParams();
			n?.download && s.set("download", n.download === !0 ? "" : n.download), n?.cacheNonce != null && s.set("cacheNonce", String(n.cacheNonce));
			let c = s.toString();
			return { signedUrl: encodeURI(`${r.url}${o.signedURL}${c ? `&${c}` : ""}`) };
		});
	}
	async createSignedUrls(e, t, n) {
		var r = this;
		return r.handleOperation(async () => {
			let i = await ir(r.fetch, `${r.url}/object/sign/${r.bucketId}`, {
				expiresIn: t,
				paths: e
			}, { headers: r.headers }), a = new URLSearchParams();
			n?.download && a.set("download", n.download === !0 ? "" : n.download), n?.cacheNonce != null && a.set("cacheNonce", String(n.cacheNonce));
			let o = a.toString();
			return i.map((e) => W(W({}, e), {}, { signedUrl: e.signedURL ? encodeURI(`${r.url}${e.signedURL}${o ? `&${o}` : ""}`) : null }));
		});
	}
	download(e, t, n) {
		let r = typeof t?.transform == "object" && t.transform !== null && Object.keys(t.transform).length > 0 ? "render/image/authenticated" : "object", i = new URLSearchParams();
		t?.transform && this.applyTransformOptsToQuery(i, t.transform), t?.cacheNonce != null && i.set("cacheNonce", String(t.cacheNonce));
		let a = i.toString(), o = this._getFinalPath(e);
		return new fr(() => rr(this.fetch, `${this.url}/${r}/${o}${a ? `?${a}` : ""}`, {
			headers: this.headers,
			noResolveJson: !0
		}, n), this.shouldThrowOnError);
	}
	async info(e) {
		var t = this;
		let n = t._getFinalPath(e);
		return t.handleOperation(async () => Xn(await rr(t.fetch, `${t.url}/object/info/${n}`, { headers: t.headers })));
	}
	async exists(e) {
		var t = this;
		let n = t._getFinalPath(e);
		try {
			return await or(t.fetch, `${t.url}/object/${n}`, { headers: t.headers }), {
				data: !0,
				error: null
			};
		} catch (e) {
			if (t.shouldThrowOnError) throw e;
			if (Un(e)) {
				let t = e instanceof Wn ? e.status : e instanceof Gn ? e.originalError?.status : void 0;
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
		return t.handleOperation(async () => await sr(t.fetch, `${t.url}/object/${t.bucketId}`, { prefixes: e }, { headers: t.headers }));
	}
	async list(e, t, n) {
		var r = this;
		return r.handleOperation(async () => {
			let i = W(W(W({}, pr), t), {}, { prefix: e || "" });
			return await ir(r.fetch, `${r.url}/object/list/${r.bucketId}`, i, { headers: r.headers }, n);
		});
	}
	async listV2(e, t) {
		var n = this;
		return n.handleOperation(async () => {
			let r = W({}, e);
			return await ir(n.fetch, `${n.url}/object/list-v2/${n.bucketId}`, r, { headers: n.headers }, t);
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
}, gr = { "X-Client-Info": "storage-js/2.105.4" }, _r = class extends lr {
	constructor(e, t = {}, n, r) {
		let i = new URL(e);
		r?.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase."));
		let a = i.href.replace(/\/$/, ""), o = W(W({}, gr), t);
		super(a, o, n, "storage");
	}
	async listBuckets(e) {
		var t = this;
		return t.handleOperation(async () => {
			let n = t.listBucketOptionsToQueryString(e);
			return await rr(t.fetch, `${t.url}/bucket${n}`, { headers: t.headers });
		});
	}
	async getBucket(e) {
		var t = this;
		return t.handleOperation(async () => await rr(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }));
	}
	async createBucket(e, t = { public: !1 }) {
		var n = this;
		return n.handleOperation(async () => await ir(n.fetch, `${n.url}/bucket`, {
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
		return n.handleOperation(async () => await ar(n.fetch, `${n.url}/bucket/${e}`, {
			id: e,
			name: e,
			public: t.public,
			file_size_limit: t.fileSizeLimit,
			allowed_mime_types: t.allowedMimeTypes
		}, { headers: n.headers }));
	}
	async emptyBucket(e) {
		var t = this;
		return t.handleOperation(async () => await ir(t.fetch, `${t.url}/bucket/${e}/empty`, {}, { headers: t.headers }));
	}
	async deleteBucket(e) {
		var t = this;
		return t.handleOperation(async () => await sr(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
	}
	listBucketOptionsToQueryString(e) {
		let t = {};
		return e && ("limit" in e && (t.limit = String(e.limit)), "offset" in e && (t.offset = String(e.offset)), e.search && (t.search = e.search), e.sortColumn && (t.sortColumn = e.sortColumn), e.sortOrder && (t.sortOrder = e.sortOrder)), Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : "";
	}
}, vr = class extends lr {
	constructor(e, t = {}, n) {
		let r = e.replace(/\/$/, ""), i = W(W({}, gr), t);
		super(r, i, n, "storage");
	}
	async createBucket(e) {
		var t = this;
		return t.handleOperation(async () => await ir(t.fetch, `${t.url}/bucket`, { name: e }, { headers: t.headers }));
	}
	async listBuckets(e) {
		var t = this;
		return t.handleOperation(async () => {
			let n = new URLSearchParams();
			e?.limit !== void 0 && n.set("limit", e.limit.toString()), e?.offset !== void 0 && n.set("offset", e.offset.toString()), e?.sortColumn && n.set("sortColumn", e.sortColumn), e?.sortOrder && n.set("sortOrder", e.sortOrder), e?.search && n.set("search", e.search);
			let r = n.toString(), i = r ? `${t.url}/bucket?${r}` : `${t.url}/bucket`;
			return await rr(t.fetch, i, { headers: t.headers });
		});
	}
	async deleteBucket(e) {
		var t = this;
		return t.handleOperation(async () => await sr(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
	}
	from(e) {
		var t = this;
		if (!Zn(e)) throw new Hn("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
		let n = new In({
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
}, yr = class extends lr {
	constructor(e, t = {}, n) {
		let r = e.replace(/\/$/, ""), i = W(W({}, gr), {}, { "Content-Type": "application/json" }, t);
		super(r, i, n, "vectors");
	}
	async createIndex(e) {
		var t = this;
		return t.handleOperation(async () => await cr.post(t.fetch, `${t.url}/CreateIndex`, e, { headers: t.headers }) || {});
	}
	async getIndex(e, t) {
		var n = this;
		return n.handleOperation(async () => await cr.post(n.fetch, `${n.url}/GetIndex`, {
			vectorBucketName: e,
			indexName: t
		}, { headers: n.headers }));
	}
	async listIndexes(e) {
		var t = this;
		return t.handleOperation(async () => await cr.post(t.fetch, `${t.url}/ListIndexes`, e, { headers: t.headers }));
	}
	async deleteIndex(e, t) {
		var n = this;
		return n.handleOperation(async () => await cr.post(n.fetch, `${n.url}/DeleteIndex`, {
			vectorBucketName: e,
			indexName: t
		}, { headers: n.headers }) || {});
	}
}, br = class extends lr {
	constructor(e, t = {}, n) {
		let r = e.replace(/\/$/, ""), i = W(W({}, gr), {}, { "Content-Type": "application/json" }, t);
		super(r, i, n, "vectors");
	}
	async putVectors(e) {
		var t = this;
		if (e.vectors.length < 1 || e.vectors.length > 500) throw Error("Vector batch size must be between 1 and 500 items");
		return t.handleOperation(async () => await cr.post(t.fetch, `${t.url}/PutVectors`, e, { headers: t.headers }) || {});
	}
	async getVectors(e) {
		var t = this;
		return t.handleOperation(async () => await cr.post(t.fetch, `${t.url}/GetVectors`, e, { headers: t.headers }));
	}
	async listVectors(e) {
		var t = this;
		if (e.segmentCount !== void 0) {
			if (e.segmentCount < 1 || e.segmentCount > 16) throw Error("segmentCount must be between 1 and 16");
			if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)) throw Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`);
		}
		return t.handleOperation(async () => await cr.post(t.fetch, `${t.url}/ListVectors`, e, { headers: t.headers }));
	}
	async queryVectors(e) {
		var t = this;
		return t.handleOperation(async () => await cr.post(t.fetch, `${t.url}/QueryVectors`, e, { headers: t.headers }));
	}
	async deleteVectors(e) {
		var t = this;
		if (e.keys.length < 1 || e.keys.length > 500) throw Error("Keys batch size must be between 1 and 500 items");
		return t.handleOperation(async () => await cr.post(t.fetch, `${t.url}/DeleteVectors`, e, { headers: t.headers }) || {});
	}
}, xr = class extends lr {
	constructor(e, t = {}, n) {
		let r = e.replace(/\/$/, ""), i = W(W({}, gr), {}, { "Content-Type": "application/json" }, t);
		super(r, i, n, "vectors");
	}
	async createBucket(e) {
		var t = this;
		return t.handleOperation(async () => await cr.post(t.fetch, `${t.url}/CreateVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
	}
	async getBucket(e) {
		var t = this;
		return t.handleOperation(async () => await cr.post(t.fetch, `${t.url}/GetVectorBucket`, { vectorBucketName: e }, { headers: t.headers }));
	}
	async listBuckets(e = {}) {
		var t = this;
		return t.handleOperation(async () => await cr.post(t.fetch, `${t.url}/ListVectorBuckets`, e, { headers: t.headers }));
	}
	async deleteBucket(e) {
		var t = this;
		return t.handleOperation(async () => await cr.post(t.fetch, `${t.url}/DeleteVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
	}
}, Sr = class extends xr {
	constructor(e, t = {}) {
		super(e, t.headers || {}, t.fetch);
	}
	from(e) {
		return new Cr(this.url, this.headers, e, this.fetch);
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
}, Cr = class extends yr {
	constructor(e, t, n, r) {
		super(e, t, r), this.vectorBucketName = n;
	}
	async createIndex(e) {
		var t = () => super.createIndex, n = this;
		return t().call(n, W(W({}, e), {}, { vectorBucketName: n.vectorBucketName }));
	}
	async listIndexes(e = {}) {
		var t = () => super.listIndexes, n = this;
		return t().call(n, W(W({}, e), {}, { vectorBucketName: n.vectorBucketName }));
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
		return new wr(this.url, this.headers, this.vectorBucketName, e, this.fetch);
	}
}, wr = class extends br {
	constructor(e, t, n, r, i) {
		super(e, t, i), this.vectorBucketName = n, this.indexName = r;
	}
	async putVectors(e) {
		var t = () => super.putVectors, n = this;
		return t().call(n, W(W({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
	async getVectors(e) {
		var t = () => super.getVectors, n = this;
		return t().call(n, W(W({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
	async listVectors(e = {}) {
		var t = () => super.listVectors, n = this;
		return t().call(n, W(W({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
	async queryVectors(e) {
		var t = () => super.queryVectors, n = this;
		return t().call(n, W(W({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
	async deleteVectors(e) {
		var t = () => super.deleteVectors, n = this;
		return t().call(n, W(W({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
}, Tr = class extends _r {
	constructor(e, t = {}, n, r) {
		super(e, t, n, r);
	}
	from(e) {
		return new hr(this.url, this.headers, e, this.fetch);
	}
	get vectors() {
		return new Sr(this.url + "/vector", {
			headers: this.headers,
			fetch: this.fetch
		});
	}
	get analytics() {
		return new vr(this.url + "/iceberg", this.headers, this.fetch);
	}
}, Er = "2.105.4", Dr = 30 * 1e3, Or = 3 * Dr, kr = "http://localhost:9999", Ar = "supabase.auth.token", jr = { "X-Client-Info": `gotrue-js/${Er}` }, Mr = "X-Supabase-Api-Version", Nr = { "2024-01-01": {
	timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
	name: "2024-01-01"
} }, Pr = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Fr = class extends Error {
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
function G(e) {
	return typeof e == "object" && !!e && "__isAuthError" in e;
}
var Ir = class extends Fr {
	constructor(e, t, n) {
		super(e, t, n), this.name = "AuthApiError", this.status = t, this.code = n;
	}
};
function Lr(e) {
	return G(e) && e.name === "AuthApiError";
}
var Rr = class extends Fr {
	constructor(e, t) {
		super(e), this.name = "AuthUnknownError", this.originalError = t;
	}
}, zr = class extends Fr {
	constructor(e, t, n, r) {
		super(e, n, r), this.name = t, this.status = n;
	}
}, Br = class extends zr {
	constructor() {
		super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
	}
};
function Vr(e) {
	return G(e) && e.name === "AuthSessionMissingError";
}
var Hr = class extends zr {
	constructor() {
		super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
	}
}, Ur = class extends zr {
	constructor(e) {
		super(e, "AuthInvalidCredentialsError", 400, void 0);
	}
}, Wr = class extends zr {
	constructor(e, t = null) {
		super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t;
	}
	toJSON() {
		return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
	}
};
function Gr(e) {
	return G(e) && e.name === "AuthImplicitGrantRedirectError";
}
var Kr = class extends zr {
	constructor(e, t = null) {
		super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t;
	}
	toJSON() {
		return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
	}
}, qr = class extends zr {
	constructor() {
		super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
	}
}, Jr = class extends zr {
	constructor(e, t) {
		super(e, "AuthRetryableFetchError", t, void 0);
	}
};
function Yr(e) {
	return G(e) && e.name === "AuthRetryableFetchError";
}
var Xr = class extends zr {
	constructor(e, t, n) {
		super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = n;
	}
	toJSON() {
		return Object.assign(Object.assign({}, super.toJSON()), { reasons: this.reasons });
	}
}, Zr = class extends zr {
	constructor(e) {
		super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
	}
}, Qr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), $r = " 	\n\r=".split(""), ei = (() => {
	let e = Array(128);
	for (let t = 0; t < e.length; t += 1) e[t] = -1;
	for (let t = 0; t < $r.length; t += 1) e[$r[t].charCodeAt(0)] = -2;
	for (let t = 0; t < Qr.length; t += 1) e[Qr[t].charCodeAt(0)] = t;
	return e;
})();
function ti(e, t, n) {
	if (e !== null) for (t.queue = t.queue << 8 | e, t.queuedBits += 8; t.queuedBits >= 6;) n(Qr[t.queue >> t.queuedBits - 6 & 63]), t.queuedBits -= 6;
	else if (t.queuedBits > 0) for (t.queue <<= 6 - t.queuedBits, t.queuedBits = 6; t.queuedBits >= 6;) n(Qr[t.queue >> t.queuedBits - 6 & 63]), t.queuedBits -= 6;
}
function ni(e, t, n) {
	let r = ei[e];
	if (r > -1) for (t.queue = t.queue << 6 | r, t.queuedBits += 6; t.queuedBits >= 8;) n(t.queue >> t.queuedBits - 8 & 255), t.queuedBits -= 8;
	else if (r === -2) return;
	else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
}
function ri(e) {
	let t = [], n = (e) => {
		t.push(String.fromCodePoint(e));
	}, r = {
		utf8seq: 0,
		codepoint: 0
	}, i = {
		queue: 0,
		queuedBits: 0
	}, a = (e) => {
		oi(e, r, n);
	};
	for (let t = 0; t < e.length; t += 1) ni(e.charCodeAt(t), i, a);
	return t.join("");
}
function ii(e, t) {
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
function ai(e, t) {
	for (let n = 0; n < e.length; n += 1) {
		let r = e.charCodeAt(n);
		if (r > 55295 && r <= 56319) {
			let t = (r - 55296) * 1024 & 65535;
			r = (e.charCodeAt(n + 1) - 56320 & 65535 | t) + 65536, n += 1;
		}
		ii(r, t);
	}
}
function oi(e, t, n) {
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
function si(e) {
	let t = [], n = {
		queue: 0,
		queuedBits: 0
	}, r = (e) => {
		t.push(e);
	};
	for (let t = 0; t < e.length; t += 1) ni(e.charCodeAt(t), n, r);
	return new Uint8Array(t);
}
function ci(e) {
	let t = [];
	return ai(e, (e) => t.push(e)), new Uint8Array(t);
}
function li(e) {
	let t = [], n = {
		queue: 0,
		queuedBits: 0
	}, r = (e) => {
		t.push(e);
	};
	return e.forEach((e) => ti(e, n, r)), ti(null, n, r), t.join("");
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/helpers.js
function ui(e) {
	return Math.round(Date.now() / 1e3) + e;
}
function di() {
	return Symbol("auth-callback");
}
var fi = () => typeof window < "u" && typeof document < "u", pi = {
	tested: !1,
	writable: !1
}, mi = () => {
	if (!fi()) return !1;
	try {
		if (typeof globalThis.localStorage != "object") return !1;
	} catch {
		return !1;
	}
	if (pi.tested) return pi.writable;
	let e = `lswt-${Math.random()}${Math.random()}`;
	try {
		globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), pi.tested = !0, pi.writable = !0;
	} catch {
		pi.tested = !0, pi.writable = !1;
	}
	return pi.writable;
};
function hi(e) {
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
var gi = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), _i = (e) => typeof e == "object" && !!e && "status" in e && "ok" in e && "json" in e && typeof e.json == "function", vi = async (e, t, n) => {
	await e.setItem(t, JSON.stringify(n));
}, yi = async (e, t) => {
	let n = await e.getItem(t);
	if (!n) return null;
	try {
		return JSON.parse(n);
	} catch {
		return null;
	}
}, bi = async (e, t) => {
	await e.removeItem(t);
}, xi = class e {
	constructor() {
		this.promise = new e.promiseConstructor((e, t) => {
			this.resolve = e, this.reject = t;
		});
	}
};
xi.promiseConstructor = Promise;
function Si(e) {
	let t = e.split(".");
	if (t.length !== 3) throw new Zr("Invalid JWT structure");
	for (let e = 0; e < t.length; e++) if (!Pr.test(t[e])) throw new Zr("JWT not in base64url format");
	return {
		header: JSON.parse(ri(t[0])),
		payload: JSON.parse(ri(t[1])),
		signature: si(t[2]),
		raw: {
			header: t[0],
			payload: t[1]
		}
	};
}
async function Ci(e) {
	return await new Promise((t) => {
		setTimeout(() => t(null), e);
	});
}
function wi(e, t) {
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
function Ti(e) {
	return ("0" + e.toString(16)).substr(-2);
}
function Ei() {
	let e = new Uint32Array(56);
	if (typeof crypto > "u") {
		let e = "";
		for (let t = 0; t < 56; t++) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~".charAt(Math.floor(Math.random() * 66));
		return e;
	}
	return crypto.getRandomValues(e), Array.from(e, Ti).join("");
}
async function Di(e) {
	let t = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", t), r = new Uint8Array(n);
	return Array.from(r).map((e) => String.fromCharCode(e)).join("");
}
async function Oi(e) {
	if (!(typeof crypto < "u" && crypto.subtle !== void 0 && typeof TextEncoder < "u")) return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
	let t = await Di(e);
	return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function ki(e, t, n = !1) {
	let r = Ei(), i = r;
	n && (i += "/recovery"), await vi(e, `${t}-code-verifier`, i);
	let a = await Oi(r);
	return [a, r === a ? "plain" : "s256"];
}
var Ai = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function ji(e) {
	let t = e.headers.get(Mr);
	if (!t || !t.match(Ai)) return null;
	try {
		return /* @__PURE__ */ new Date(`${t}T00:00:00.0Z`);
	} catch {
		return null;
	}
}
function Mi(e) {
	if (!e) throw Error("Missing exp claim");
	if (e <= Math.floor(Date.now() / 1e3)) throw Error("JWT has expired");
}
function Ni(e) {
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
var Pi = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Fi(e) {
	if (!Pi.test(e)) throw Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function Ii(e) {
	if (!e.passkey) throw Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).");
}
function Li() {
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
function Ri(e, t) {
	return new Proxy(e, { get: (e, n, r) => {
		if (n === "__isInsecureUserWarningProxy") return !0;
		if (typeof n == "symbol") {
			let t = n.toString();
			if (t === "Symbol(Symbol.toPrimitive)" || t === "Symbol(Symbol.toStringTag)" || t === "Symbol(util.inspect.custom)" || t === "Symbol(nodejs.util.inspect.custom)") return Reflect.get(e, n, r);
		}
		return !t.value && typeof n == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), t.value = !0), Reflect.get(e, n, r);
	} });
}
function zi(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/fetch.js
var Bi = (e) => {
	if (typeof e == "object" && e) {
		let t = e;
		if (typeof t.msg == "string") return t.msg;
		if (typeof t.message == "string") return t.message;
		if (typeof t.error_description == "string") return t.error_description;
		if (typeof t.error == "string") return t.error;
	}
	return JSON.stringify(e);
}, Vi = [
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
async function Hi(e) {
	if (!_i(e)) throw new Jr(Bi(e), 0);
	if (Vi.includes(e.status)) throw new Jr(Bi(e), e.status);
	let t;
	try {
		t = await e.json();
	} catch (e) {
		throw new Rr(Bi(e), e);
	}
	let n, r = ji(e);
	if (r && r.getTime() >= Nr["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? n = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (n = t.error_code), !n) {
		if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((e, t) => e && typeof t == "string", !0)) throw new Xr(Bi(t), e.status, t.weak_password.reasons);
	} else if (n === "weak_password") throw new Xr(Bi(t), e.status, t.weak_password?.reasons || []);
	else if (n === "session_not_found") throw new Br();
	throw new Ir(Bi(t), e.status || 500, n);
}
var Ui = (e, t, n, r) => {
	let i = {
		method: e,
		headers: t?.headers || {}
	};
	return e === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, t?.headers), i.body = JSON.stringify(r), Object.assign(Object.assign({}, i), n));
};
async function K(e, t, n, r) {
	let i = Object.assign({}, r?.headers);
	i["X-Supabase-Api-Version"] || (i[Mr] = Nr["2024-01-01"].name), r?.jwt && (i.Authorization = `Bearer ${r.jwt}`);
	let a = r?.query ?? {};
	r?.redirectTo && (a.redirect_to = r.redirectTo);
	let o = await Wi(e, t, n + (Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : ""), {
		headers: i,
		noResolveJson: r?.noResolveJson
	}, {}, r?.body);
	return r?.xform ? r?.xform(o) : {
		data: Object.assign({}, o),
		error: null
	};
}
async function Wi(e, t, n, r, i, a) {
	let o = Ui(t, r, i, a), s;
	try {
		s = await e(n, Object.assign({}, o));
	} catch (e) {
		throw console.error(e), new Jr(Bi(e), 0);
	}
	if (s.ok || await Hi(s), r?.noResolveJson) return s;
	try {
		return await s.json();
	} catch (e) {
		await Hi(e);
	}
}
function Gi(e) {
	let t = null;
	Zi(e) && (t = Object.assign({}, e), e.expires_at || (t.expires_at = ui(e.expires_in)));
	let n = e.user ?? e;
	return {
		data: {
			session: t,
			user: n
		},
		error: null
	};
}
function Ki(e) {
	let t = Gi(e);
	return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce((e, t) => e && typeof t == "string", !0) && (t.data.weak_password = e.weak_password), t;
}
function qi(e) {
	return {
		data: { user: e.user ?? e },
		error: null
	};
}
function Ji(e) {
	return {
		data: e,
		error: null
	};
}
function Yi(e) {
	let { action_link: t, email_otp: n, hashed_token: r, redirect_to: i, verification_type: a } = e, o = He(e, [
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
function Xi(e) {
	return e;
}
function Zi(e) {
	return !!e.access_token && !!e.refresh_token && !!e.expires_in;
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/types.js
var Qi = [
	"global",
	"local",
	"others"
], $i = class {
	constructor({ url: e = "", headers: t = {}, fetch: n, experimental: r }) {
		this.url = e, this.headers = t, this.fetch = gi(n), this.experimental = r ?? {}, this.mfa = {
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
	async signOut(e, t = Qi[0]) {
		if (Qi.indexOf(t) < 0) throw Error(`@supabase/auth-js: Parameter scope must be one of ${Qi.join(", ")}`);
		try {
			return await K(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
				headers: this.headers,
				jwt: e,
				noResolveJson: !0
			}), {
				data: null,
				error: null
			};
		} catch (e) {
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async inviteUserByEmail(e, t = {}) {
		try {
			return await K(this.fetch, "POST", `${this.url}/invite`, {
				body: {
					email: e,
					data: t.data
				},
				headers: this.headers,
				redirectTo: t.redirectTo,
				xform: qi
			});
		} catch (e) {
			if (G(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async generateLink(e) {
		try {
			let { options: t } = e, n = He(e, ["options"]), r = Object.assign(Object.assign({}, n), t);
			return "newEmail" in n && (r.new_email = n?.newEmail, delete r.newEmail), await K(this.fetch, "POST", `${this.url}/admin/generate_link`, {
				body: r,
				headers: this.headers,
				xform: Yi,
				redirectTo: t?.redirectTo
			});
		} catch (e) {
			if (G(e)) return {
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
			return await K(this.fetch, "POST", `${this.url}/admin/users`, {
				body: e,
				headers: this.headers,
				xform: qi
			});
		} catch (e) {
			if (G(e)) return {
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
			}, n = await K(this.fetch, "GET", `${this.url}/admin/users`, {
				headers: this.headers,
				noResolveJson: !0,
				query: {
					page: (e?.page)?.toString() ?? "",
					per_page: (e?.perPage)?.toString() ?? ""
				},
				xform: Xi
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
			if (G(e)) return {
				data: { users: [] },
				error: e
			};
			throw e;
		}
	}
	async getUserById(e) {
		Fi(e);
		try {
			return await K(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
				headers: this.headers,
				xform: qi
			});
		} catch (e) {
			if (G(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async updateUserById(e, t) {
		Fi(e);
		try {
			return await K(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
				body: t,
				headers: this.headers,
				xform: qi
			});
		} catch (e) {
			if (G(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async deleteUser(e, t = !1) {
		Fi(e);
		try {
			return await K(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
				headers: this.headers,
				body: { should_soft_delete: t },
				xform: qi
			});
		} catch (e) {
			if (G(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async _listFactors(e) {
		Fi(e.userId);
		try {
			let { data: t, error: n } = await K(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
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
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _deleteFactor(e) {
		Fi(e.userId), Fi(e.id);
		try {
			return {
				data: await K(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, { headers: this.headers }),
				error: null
			};
		} catch (e) {
			if (G(e)) return {
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
			}, n = await K(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
				headers: this.headers,
				noResolveJson: !0,
				query: {
					page: (e?.page)?.toString() ?? "",
					per_page: (e?.perPage)?.toString() ?? ""
				},
				xform: Xi
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
			if (G(e)) return {
				data: { clients: [] },
				error: e
			};
			throw e;
		}
	}
	async _createOAuthClient(e) {
		try {
			return await K(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
				body: e,
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _getOAuthClient(e) {
		try {
			return await K(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _updateOAuthClient(e, t) {
		try {
			return await K(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${e}`, {
				body: t,
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _deleteOAuthClient(e) {
		try {
			return await K(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
				headers: this.headers,
				noResolveJson: !0
			}), {
				data: null,
				error: null
			};
		} catch (e) {
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _regenerateOAuthClientSecret(e) {
		try {
			return await K(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _listCustomProviders(e) {
		try {
			let t = {};
			return e?.type && (t.type = e.type), await K(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
				headers: this.headers,
				query: t,
				xform: (e) => ({
					data: { providers: e?.providers ?? [] },
					error: null
				})
			});
		} catch (e) {
			if (G(e)) return {
				data: { providers: [] },
				error: e
			};
			throw e;
		}
	}
	async _createCustomProvider(e) {
		try {
			return await K(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
				body: e,
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _getCustomProvider(e) {
		try {
			return await K(this.fetch, "GET", `${this.url}/admin/custom-providers/${e}`, {
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _updateCustomProvider(e, t) {
		try {
			return await K(this.fetch, "PUT", `${this.url}/admin/custom-providers/${e}`, {
				body: t,
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _deleteCustomProvider(e) {
		try {
			return await K(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${e}`, {
				headers: this.headers,
				noResolveJson: !0
			}), {
				data: null,
				error: null
			};
		} catch (e) {
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _adminListPasskeys(e) {
		Ii(this.experimental), Fi(e.userId);
		try {
			return await K(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/passkeys`, {
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _adminDeletePasskey(e) {
		Ii(this.experimental), Fi(e.userId), Fi(e.passkeyId);
		try {
			return await K(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`, {
				headers: this.headers,
				noResolveJson: !0
			}), {
				data: null,
				error: null
			};
		} catch (e) {
			if (G(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
};
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/local-storage.js
function ea(e = {}) {
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
var ta = { debug: !!(globalThis && mi() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true") }, na = class extends Error {
	constructor(e) {
		super(e), this.isAcquireTimeout = !0;
	}
}, ra = class extends na {};
async function ia(e, t, n) {
	ta.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
	let r = new globalThis.AbortController(), i;
	t > 0 && (i = setTimeout(() => {
		r.abort(), ta.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e);
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
				clearTimeout(i), ta.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, r.name);
				try {
					return await n();
				} finally {
					ta.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, r.name);
				}
			} else if (t === 0) throw ta.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new ra(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
			else {
				if (ta.debug) try {
					let e = await globalThis.navigator.locks.query();
					console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(e, null, "  "));
				} catch (e) {
					console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e);
				}
				return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), clearTimeout(i), await n();
			}
		});
	} catch (a) {
		if (t > 0 && clearTimeout(i), typeof a == "object" && a && "name" in a && a.name === "AbortError" && t > 0) {
			if (r.signal.aborted) return ta.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", e), console.warn(`@supabase/gotrue-js: Lock "${e}" was not released within ${t}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`), await Promise.resolve().then(() => globalThis.navigator.locks.request(e, {
				mode: "exclusive",
				steal: !0
			}, async (t) => {
				if (t) {
					ta.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", e, t.name);
					try {
						return await n();
					} finally {
						ta.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", e, t.name);
					}
				} else return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"), await n();
			}));
			throw ta.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", e), new ra(`Lock "${e}" was released because another request stole it`);
		}
		throw a;
	}
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/polyfills.js
function aa() {
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
function oa(e) {
	if (!/^0x[a-fA-F0-9]{40}$/.test(e)) throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);
	return e.toLowerCase();
}
function sa(e) {
	return parseInt(e, 16);
}
function ca(e) {
	let t = new TextEncoder().encode(e);
	return "0x" + Array.from(t, (e) => e.toString(16).padStart(2, "0")).join("");
}
function la(e) {
	let { chainId: t, domain: n, expirationTime: r, issuedAt: i = /* @__PURE__ */ new Date(), nonce: a, notBefore: o, requestId: s, resources: c, scheme: l, uri: u, version: d } = e;
	if (!Number.isInteger(t)) throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);
	if (!n) throw Error("@supabase/auth-js: Invalid SIWE message field \"domain\". Domain must be provided.");
	if (a && a.length < 8) throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);
	if (!u) throw Error("@supabase/auth-js: Invalid SIWE message field \"uri\". URI must be provided.");
	if (d !== "1") throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);
	if (e.statement?.includes("\n")) throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);
	let f = oa(e.address), p = `${l ? `${l}://${n}` : n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement ? `${e.statement}\n` : ""}`, m = `URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a ? `\nNonce: ${a}` : ""}\nIssued At: ${i.toISOString()}`;
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
var ua = class extends Error {
	constructor({ message: e, code: t, cause: n, name: r }) {
		super(e, { cause: n }), this.__isWebAuthnError = !0, this.name = r ?? (n instanceof Error ? n.name : void 0) ?? "Unknown Error", this.code = t;
	}
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			code: this.code
		};
	}
}, da = class extends ua {
	constructor(e, t) {
		super({
			code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
			cause: t,
			message: e
		}), this.name = "WebAuthnUnknownError", this.originalError = t;
	}
};
function fa({ error: e, options: t }) {
	let { publicKey: n } = t;
	if (!n) throw Error("options was missing required publicKey property");
	if (e.name === "AbortError") {
		if (t.signal instanceof AbortSignal) return new ua({
			message: "Registration ceremony was sent an abort signal",
			code: "ERROR_CEREMONY_ABORTED",
			cause: e
		});
	} else if (e.name === "ConstraintError") {
		if (n.authenticatorSelection?.requireResidentKey === !0) return new ua({
			message: "Discoverable credentials were required but no available authenticator supported it",
			code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
			cause: e
		});
		if (t.mediation === "conditional" && n.authenticatorSelection?.userVerification === "required") return new ua({
			message: "User verification was required during automatic registration but it could not be performed",
			code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
			cause: e
		});
		if (n.authenticatorSelection?.userVerification === "required") return new ua({
			message: "User verification was required but no available authenticator supported it",
			code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
			cause: e
		});
	} else if (e.name === "InvalidStateError") return new ua({
		message: "The authenticator was previously registered",
		code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
		cause: e
	});
	else if (e.name === "NotAllowedError") return new ua({
		message: e.message,
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
	else if (e.name === "NotSupportedError") return n.pubKeyCredParams.filter((e) => e.type === "public-key").length === 0 ? new ua({
		message: "No entry in pubKeyCredParams was of type \"public-key\"",
		code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
		cause: e
	}) : new ua({
		message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
		code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
		cause: e
	});
	else if (e.name === "SecurityError") {
		let t = window.location.hostname;
		if (!ya(t)) return new ua({
			message: `${window.location.hostname} is an invalid domain`,
			code: "ERROR_INVALID_DOMAIN",
			cause: e
		});
		if (n.rp.id !== t) return new ua({
			message: `The RP ID "${n.rp.id}" is invalid for this domain`,
			code: "ERROR_INVALID_RP_ID",
			cause: e
		});
	} else if (e.name === "TypeError") {
		if (n.user.id.byteLength < 1 || n.user.id.byteLength > 64) return new ua({
			message: "User ID was not between 1 and 64 characters",
			code: "ERROR_INVALID_USER_ID_LENGTH",
			cause: e
		});
	} else if (e.name === "UnknownError") return new ua({
		message: "The authenticator was unable to process the specified options, or could not create a new credential",
		code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
		cause: e
	});
	return new ua({
		message: "a Non-Webauthn related error has occurred",
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
}
function pa({ error: e, options: t }) {
	let { publicKey: n } = t;
	if (!n) throw Error("options was missing required publicKey property");
	if (e.name === "AbortError") {
		if (t.signal instanceof AbortSignal) return new ua({
			message: "Authentication ceremony was sent an abort signal",
			code: "ERROR_CEREMONY_ABORTED",
			cause: e
		});
	} else if (e.name === "NotAllowedError") return new ua({
		message: e.message,
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
	else if (e.name === "SecurityError") {
		let t = window.location.hostname;
		if (!ya(t)) return new ua({
			message: `${window.location.hostname} is an invalid domain`,
			code: "ERROR_INVALID_DOMAIN",
			cause: e
		});
		if (n.rpId !== t) return new ua({
			message: `The RP ID "${n.rpId}" is invalid for this domain`,
			code: "ERROR_INVALID_RP_ID",
			cause: e
		});
	} else if (e.name === "UnknownError") return new ua({
		message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
		code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
		cause: e
	});
	return new ua({
		message: "a Non-Webauthn related error has occurred",
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
}
var ma = new class {
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
function ha(e) {
	if (!e) throw Error("Credential creation options are required");
	if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function") return PublicKeyCredential.parseCreationOptionsFromJSON(e);
	let { challenge: t, user: n, excludeCredentials: r } = e, i = He(e, [
		"challenge",
		"user",
		"excludeCredentials"
	]), a = si(t).buffer, o = Object.assign(Object.assign({}, n), { id: si(n.id).buffer }), s = Object.assign(Object.assign({}, i), {
		challenge: a,
		user: o
	});
	if (r && r.length > 0) {
		s.excludeCredentials = Array(r.length);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			s.excludeCredentials[e] = Object.assign(Object.assign({}, t), {
				id: si(t.id).buffer,
				type: t.type || "public-key",
				transports: t.transports
			});
		}
	}
	return s;
}
function ga(e) {
	if (!e) throw Error("Credential request options are required");
	if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function") return PublicKeyCredential.parseRequestOptionsFromJSON(e);
	let { challenge: t, allowCredentials: n } = e, r = He(e, ["challenge", "allowCredentials"]), i = si(t).buffer, a = Object.assign(Object.assign({}, r), { challenge: i });
	if (n && n.length > 0) {
		a.allowCredentials = Array(n.length);
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			a.allowCredentials[e] = Object.assign(Object.assign({}, t), {
				id: si(t.id).buffer,
				type: t.type || "public-key",
				transports: t.transports
			});
		}
	}
	return a;
}
function _a(e) {
	if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
	let t = e;
	return {
		id: e.id,
		rawId: e.id,
		response: {
			attestationObject: li(new Uint8Array(e.response.attestationObject)),
			clientDataJSON: li(new Uint8Array(e.response.clientDataJSON))
		},
		type: "public-key",
		clientExtensionResults: e.getClientExtensionResults(),
		authenticatorAttachment: t.authenticatorAttachment ?? void 0
	};
}
function va(e) {
	if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
	let t = e, n = e.getClientExtensionResults(), r = e.response;
	return {
		id: e.id,
		rawId: e.id,
		response: {
			authenticatorData: li(new Uint8Array(r.authenticatorData)),
			clientDataJSON: li(new Uint8Array(r.clientDataJSON)),
			signature: li(new Uint8Array(r.signature)),
			userHandle: r.userHandle ? li(new Uint8Array(r.userHandle)) : void 0
		},
		type: "public-key",
		clientExtensionResults: n,
		authenticatorAttachment: t.authenticatorAttachment ?? void 0
	};
}
function ya(e) {
	return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function ba() {
	return !!(fi() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof (navigator == null ? void 0 : navigator.credentials)?.create == "function" && typeof (navigator == null ? void 0 : navigator.credentials)?.get == "function");
}
async function xa(e) {
	try {
		let t = await navigator.credentials.create(e);
		return t ? t instanceof PublicKeyCredential ? {
			data: t,
			error: null
		} : {
			data: null,
			error: new da("Browser returned unexpected credential type", t)
		} : {
			data: null,
			error: new da("Empty credential response", t)
		};
	} catch (t) {
		return {
			data: null,
			error: fa({
				error: t,
				options: e
			})
		};
	}
}
async function Sa(e) {
	try {
		let t = await navigator.credentials.get(e);
		return t ? t instanceof PublicKeyCredential ? {
			data: t,
			error: null
		} : {
			data: null,
			error: new da("Browser returned unexpected credential type", t)
		} : {
			data: null,
			error: new da("Empty credential response", t)
		};
	} catch (t) {
		return {
			data: null,
			error: pa({
				error: t,
				options: e
			})
		};
	}
}
var Ca = {
	hints: ["security-key"],
	authenticatorSelection: {
		authenticatorAttachment: "cross-platform",
		requireResidentKey: !1,
		userVerification: "preferred",
		residentKey: "discouraged"
	},
	attestation: "direct"
}, wa = {
	userVerification: "preferred",
	hints: ["security-key"],
	attestation: "direct"
};
function Ta(...e) {
	let t = (e) => typeof e == "object" && !!e && !Array.isArray(e), n = (e) => e instanceof ArrayBuffer || ArrayBuffer.isView(e), r = {};
	for (let i of e) if (i) for (let e in i) {
		let a = i[e];
		if (a !== void 0) if (Array.isArray(a)) r[e] = a;
		else if (n(a)) r[e] = a;
		else if (t(a)) {
			let n = r[e];
			t(n) ? r[e] = Ta(n, a) : r[e] = Ta(a);
		} else r[e] = a;
	}
	return r;
}
function Ea(e, t) {
	return Ta(Ca, e, t || {});
}
function Da(e, t) {
	return Ta(wa, e, t || {});
}
var Oa = class {
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
			let s = r ?? ma.createNewAbortSignal();
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
					let { data: t, error: n } = await xa({
						publicKey: Ea(a.webauthn.credential_options.publicKey, i?.create),
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
					let t = Da(a.webauthn.credential_options.publicKey, i?.request), { data: n, error: r } = await Sa(Object.assign(Object.assign({}, a.webauthn.credential_options), {
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
			return G(e) ? {
				data: null,
				error: e
			} : {
				data: null,
				error: new Rr("Unexpected error in challenge", e)
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
			error: new Fr("rpId is required for WebAuthn authentication")
		};
		try {
			if (!ba()) return {
				data: null,
				error: new Rr("Browser does not support WebAuthn", null)
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
			return G(e) ? {
				data: null,
				error: e
			} : {
				data: null,
				error: new Rr("Unexpected error in authenticate", e)
			};
		}
	}
	async _register({ friendlyName: e, webauthn: { rpId: t = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: r } = {} }, i) {
		if (!t) return {
			data: null,
			error: new Fr("rpId is required for WebAuthn registration")
		};
		try {
			if (!ba()) return {
				data: null,
				error: new Rr("Browser does not support WebAuthn", null)
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
			return G(e) ? {
				data: null,
				error: e
			} : {
				data: null,
				error: new Rr("Unexpected error in register", e)
			};
		}
	}
};
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/GoTrueClient.js
aa();
var ka = {
	url: kr,
	storageKey: Ar,
	autoRefreshToken: !0,
	persistSession: !0,
	detectSessionInUrl: !0,
	headers: jr,
	flowType: "implicit",
	debug: !1,
	hasCustomAuthorizationHeader: !1,
	throwOnError: !1,
	lockAcquireTimeout: 5e3,
	skipAutoInitialize: !1,
	experimental: {}
};
async function Aa(e, t, n) {
	return await n();
}
var ja = {}, Ma = class e {
	get jwks() {
		return ja[this.storageKey]?.jwks ?? { keys: [] };
	}
	set jwks(e) {
		ja[this.storageKey] = Object.assign(Object.assign({}, ja[this.storageKey]), { jwks: e });
	}
	get jwks_cached_at() {
		return ja[this.storageKey]?.cachedAt ?? -(2 ** 53 - 1);
	}
	set jwks_cached_at(e) {
		ja[this.storageKey] = Object.assign(Object.assign({}, ja[this.storageKey]), { cachedAt: e });
	}
	constructor(t) {
		var n;
		this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
		let r = Object.assign(Object.assign({}, ka), t);
		if (this.storageKey = r.storageKey, this.instanceID = e.nextInstanceID[this.storageKey] ?? 0, e.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!r.debug, typeof r.debug == "function" && (this.logger = r.debug), this.instanceID > 0 && fi()) {
			let e = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
			console.warn(e), this.logDebugMessages && console.trace(e);
		}
		if (this.persistSession = r.persistSession, this.autoRefreshToken = r.autoRefreshToken, this.experimental = r.experimental ?? {}, this.admin = new $i({
			url: r.url,
			headers: r.headers,
			fetch: r.fetch,
			experimental: this.experimental
		}), this.url = r.url, this.headers = r.headers, this.fetch = gi(r.fetch), this.lock = r.lock || Aa, this.detectSessionInUrl = r.detectSessionInUrl, this.flowType = r.flowType, this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader, this.throwOnError = r.throwOnError, this.lockAcquireTimeout = r.lockAcquireTimeout, r.lock ? this.lock = r.lock : this.persistSession && fi() && (globalThis == null ? void 0 : globalThis.navigator)?.locks ? this.lock = ia : this.lock = Aa, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = -(2 ** 53 - 1)), this.mfa = {
			verify: this._verify.bind(this),
			enroll: this._enroll.bind(this),
			unenroll: this._unenroll.bind(this),
			challenge: this._challenge.bind(this),
			listFactors: this._listFactors.bind(this),
			challengeAndVerify: this._challengeAndVerify.bind(this),
			getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
			webauthn: new Oa(this)
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
		}, this.persistSession ? (r.storage ? this.storage = r.storage : mi() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = ea(this.memoryStorage)), r.userStorage && (this.userStorage = r.userStorage)) : (this.memoryStorage = {}, this.storage = ea(this.memoryStorage)), fi() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
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
		return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Er}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
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
			if (fi() && (e = hi(window.location.href), this._isImplicitGrantCallback(e) ? t = "implicit" : await this._isPKCECallback(e) && (t = "pkce")), fi() && this.detectSessionInUrl && t !== "none") {
				let { data: n, error: r } = await this._getSessionFromURL(e, t);
				if (r) {
					if (this._debug("#_initialize()", "error detecting session from URL", r), Gr(r)) {
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
			return G(e) ? this._returnResult({ error: e }) : this._returnResult({ error: new Rr("Unexpected error during initialization", e) });
		} finally {
			await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
		}
	}
	async signInAnonymously(e) {
		try {
			let { data: t, error: n } = await K(this.fetch, "POST", `${this.url}/signup`, {
				headers: this.headers,
				body: {
					data: e?.options?.data ?? {},
					gotrue_meta_security: { captcha_token: e?.options?.captchaToken }
				},
				xform: Gi
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
			if (G(e)) return this._returnResult({
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
				this.flowType === "pkce" && ([a, o] = await ki(this.storage, this.storageKey)), t = await K(this.fetch, "POST", `${this.url}/signup`, {
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
					xform: Gi
				});
			} else if ("phone" in e) {
				let { phone: n, password: r, options: i } = e;
				t = await K(this.fetch, "POST", `${this.url}/signup`, {
					headers: this.headers,
					body: {
						phone: n,
						password: r,
						data: i?.data ?? {},
						channel: i?.channel ?? "sms",
						gotrue_meta_security: { captcha_token: i?.captchaToken }
					},
					xform: Gi
				});
			} else throw new Ur("You must provide either an email or phone number and a password");
			let { data: n, error: r } = t;
			if (r || !n) return await bi(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({
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
			if (await bi(this.storage, `${this.storageKey}-code-verifier`), G(e)) return this._returnResult({
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
				t = await K(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
					headers: this.headers,
					body: {
						email: n,
						password: r,
						gotrue_meta_security: { captcha_token: i?.captchaToken }
					},
					xform: Ki
				});
			} else if ("phone" in e) {
				let { phone: n, password: r, options: i } = e;
				t = await K(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
					headers: this.headers,
					body: {
						phone: n,
						password: r,
						gotrue_meta_security: { captcha_token: i?.captchaToken }
					},
					xform: Ki
				});
			} else throw new Ur("You must provide either an email or phone number and a password");
			let { data: n, error: r } = t;
			if (r) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: r
			});
			if (!n || !n.session || !n.user) {
				let e = new Hr();
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
			if (G(e)) return this._returnResult({
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
			if (!fi()) {
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
			let u = oa(l[0]), d = o?.signInWithEthereum?.chainId;
			d ||= sa(await s.request({ method: "eth_chainId" })), t = la({
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
				params: [ca(t), u]
			});
		}
		try {
			let { data: r, error: i } = await K(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
				headers: this.headers,
				body: Object.assign({
					chain: "ethereum",
					message: t,
					signature: n
				}, e.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e.options?.captchaToken } } : null),
				xform: Gi
			});
			if (i) throw i;
			if (!r || !r.session || !r.user) {
				let e = new Hr();
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
			if (G(e)) return this._returnResult({
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
			if (!fi()) {
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
			let { data: r, error: i } = await K(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
				headers: this.headers,
				body: Object.assign({
					chain: "solana",
					message: t,
					signature: li(n)
				}, e.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e.options?.captchaToken } } : null),
				xform: Gi
			});
			if (i) throw i;
			if (!r || !r.session || !r.user) {
				let e = new Hr();
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
			if (G(e)) return this._returnResult({
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
		let [t, n] = (await yi(this.storage, `${this.storageKey}-code-verifier`) ?? "").split("/");
		try {
			if (!t && this.flowType === "pkce") throw new qr();
			let { data: r, error: i } = await K(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
				headers: this.headers,
				body: {
					auth_code: e,
					code_verifier: t
				},
				xform: Gi
			});
			if (await bi(this.storage, `${this.storageKey}-code-verifier`), i) throw i;
			if (!r || !r.session || !r.user) {
				let e = new Hr();
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
			if (await bi(this.storage, `${this.storageKey}-code-verifier`), G(e)) return this._returnResult({
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
			let { options: t, provider: n, token: r, access_token: i, nonce: a } = e, { data: o, error: s } = await K(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
				headers: this.headers,
				body: {
					provider: n,
					id_token: r,
					access_token: i,
					nonce: a,
					gotrue_meta_security: { captcha_token: t?.captchaToken }
				},
				xform: Gi
			});
			if (s) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: s
			});
			if (!o || !o.session || !o.user) {
				let e = new Hr();
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
			if (G(e)) return this._returnResult({
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
				this.flowType === "pkce" && ([r, i] = await ki(this.storage, this.storageKey));
				let { error: a } = await K(this.fetch, "POST", `${this.url}/otp`, {
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
				let { phone: t, options: n } = e, { data: r, error: i } = await K(this.fetch, "POST", `${this.url}/otp`, {
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
			throw new Ur("You must provide either an email or phone number.");
		} catch (e) {
			if (await bi(this.storage, `${this.storageKey}-code-verifier`), G(e)) return this._returnResult({
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
			let { data: r, error: i } = await K(this.fetch, "POST", `${this.url}/verify`, {
				headers: this.headers,
				body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: n } }),
				redirectTo: t,
				xform: Gi
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
			if (G(e)) return this._returnResult({
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
			this.flowType === "pkce" && ([t, n] = await ki(this.storage, this.storageKey));
			let r = await K(this.fetch, "POST", `${this.url}/sso`, {
				body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: e.options?.redirectTo ?? void 0 }), e?.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), {
					skip_http_redirect: !0,
					code_challenge: t,
					code_challenge_method: n
				}),
				headers: this.headers,
				xform: Ji
			});
			return r.data?.url && fi() && !e.options?.skipBrowserRedirect && window.location.assign(r.data.url), this._returnResult(r);
		} catch (e) {
			if (await bi(this.storage, `${this.storageKey}-code-verifier`), G(e)) return this._returnResult({
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
				if (!t) throw new Br();
				let { error: r } = await K(this.fetch, "GET", `${this.url}/reauthenticate`, {
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
			if (G(e)) return this._returnResult({
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
				let { email: n, type: r, options: i } = e, { error: a } = await K(this.fetch, "POST", t, {
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
				let { phone: n, type: r, options: i } = e, { data: a, error: o } = await K(this.fetch, "POST", t, {
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
			throw new Ur("You must provide either an email or phone number and a type");
		} catch (e) {
			if (G(e)) return this._returnResult({
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
			let e = null, t = await yi(this.storage, this.storageKey);
			if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e) return {
				data: { session: null },
				error: null
			};
			let n = e.expires_at ? e.expires_at * 1e3 - Date.now() < Or : !1;
			if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", e.expires_at), !n) {
				if (this.userStorage) {
					let t = await yi(this.userStorage, this.storageKey + "-user");
					t?.user ? e.user = t.user : e.user = Li();
				}
				if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
					let t = { value: this.suppressGetSessionWarning };
					e.user = Ri(e.user, t), t.value && (this.suppressGetSessionWarning = !0);
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
			return e ? await K(this.fetch, "GET", `${this.url}/user`, {
				headers: this.headers,
				jwt: e,
				xform: qi
			}) : await this._useSession(async (e) => {
				let { data: t, error: n } = e;
				if (n) throw n;
				return !t.session?.access_token && !this.hasCustomAuthorizationHeader ? {
					data: { user: null },
					error: new Br()
				} : await K(this.fetch, "GET", `${this.url}/user`, {
					headers: this.headers,
					jwt: t.session?.access_token ?? void 0,
					xform: qi
				});
			});
		} catch (e) {
			if (G(e)) return Vr(e) && (await this._removeSession(), await bi(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({
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
				if (!r.session) throw new Br();
				let a = r.session, o = null, s = null;
				this.flowType === "pkce" && e.email != null && ([o, s] = await ki(this.storage, this.storageKey));
				let { data: c, error: l } = await K(this.fetch, "PUT", `${this.url}/user`, {
					headers: this.headers,
					redirectTo: t?.emailRedirectTo,
					body: Object.assign(Object.assign({}, e), {
						code_challenge: o,
						code_challenge_method: s
					}),
					jwt: a.access_token,
					xform: qi
				});
				if (l) throw l;
				return a.user = c.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), this._returnResult({
					data: { user: a.user },
					error: null
				});
			});
		} catch (e) {
			if (await bi(this.storage, `${this.storageKey}-code-verifier`), G(e)) return this._returnResult({
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
			if (!e.access_token || !e.refresh_token) throw new Br();
			let t = Date.now() / 1e3, n = t, r = !0, i = null, { payload: a } = Si(e.access_token);
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
			if (G(e)) return this._returnResult({
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
				if (!e?.refresh_token) throw new Br();
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
			if (G(e)) return this._returnResult({
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
			if (!fi()) throw new Wr("No browser detected.");
			if (e.error || e.error_description || e.error_code) throw new Wr(e.error_description || "Error in URL with unspecified error_description", {
				error: e.error || "unspecified_error",
				code: e.error_code || "unspecified_code"
			});
			switch (t) {
				case "implicit":
					if (this.flowType === "pkce") throw new Kr("Not a valid PKCE flow url.");
					break;
				case "pkce":
					if (this.flowType === "implicit") throw new Wr("Not a valid implicit grant flow url.");
					break;
				default:
			}
			if (t === "pkce") {
				if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code) throw new Kr("No code detected.");
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
			if (!i || !o || !a || !c) throw new Wr("No session defined in URL");
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
			if (G(e)) return this._returnResult({
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
		let t = await yi(this.storage, `${this.storageKey}-code-verifier`);
		return !!(e.code && t);
	}
	async signOut(e = { scope: "global" }) {
		return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e));
	}
	async _signOut({ scope: e } = { scope: "global" }) {
		return await this._useSession(async (t) => {
			let { data: n, error: r } = t;
			if (r && !Vr(r)) return this._returnResult({ error: r });
			let i = n.session?.access_token;
			if (i) {
				let { error: t } = await this.admin.signOut(i, e);
				if (t && !(Lr(t) && (t.status === 404 || t.status === 401 || t.status === 403) || Vr(t))) return this._returnResult({ error: t });
			}
			return e !== "others" && (await this._removeSession(), await bi(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
		});
	}
	onAuthStateChange(e) {
		let t = di(), n = {
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
				await this.stateChangeEmitters.get(e)?.callback("INITIAL_SESSION", null), this._debug("INITIAL_SESSION", "callback id", e, "error", t), Vr(t) ? console.warn(t) : console.error(t);
			}
		});
	}
	async resetPasswordForEmail(e, t = {}) {
		let n = null, r = null;
		this.flowType === "pkce" && ([n, r] = await ki(this.storage, this.storageKey, !0));
		try {
			return await K(this.fetch, "POST", `${this.url}/recover`, {
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
			if (await bi(this.storage, `${this.storageKey}-code-verifier`), G(e)) return this._returnResult({
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
			if (G(e)) return this._returnResult({
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
				return await K(this.fetch, "GET", i, {
					headers: this.headers,
					jwt: n.session?.access_token ?? void 0
				});
			});
			if (n) throw n;
			return fi() && !e.options?.skipBrowserRedirect && window.location.assign(t?.url), this._returnResult({
				data: {
					provider: e.provider,
					url: t?.url
				},
				error: null
			});
		} catch (t) {
			if (G(t)) return this._returnResult({
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
				let { options: i, provider: a, token: o, access_token: s, nonce: c } = e, { data: l, error: u } = await K(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
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
					xform: Gi
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
					error: new Hr()
				}) : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("USER_UPDATED", l.session)), this._returnResult({
					data: l,
					error: u
				}));
			} catch (e) {
				if (await bi(this.storage, `${this.storageKey}-code-verifier`), G(e)) return this._returnResult({
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
				return await K(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
					headers: this.headers,
					jwt: n.session?.access_token ?? void 0
				});
			});
		} catch (e) {
			if (G(e)) return this._returnResult({
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
			return await wi(async (n) => (n > 0 && await Ci(200 * 2 ** (n - 1)), this._debug(t, "refreshing attempt", n), await K(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
				body: { refresh_token: e },
				headers: this.headers,
				xform: Gi
			})), (e, t) => {
				let r = 200 * 2 ** e;
				return t && Yr(t) && Date.now() + r - n < 3e4;
			});
		} catch (e) {
			if (this._debug(t, "error", e), G(e)) return this._returnResult({
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
		return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", n), fi() && !t.skipBrowserRedirect && window.location.assign(n), {
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
			let t = await yi(this.storage, this.storageKey);
			if (t && this.userStorage) {
				let e = await yi(this.userStorage, this.storageKey + "-user");
				!this.storage.isServer && Object.is(this.storage, this.userStorage) && !e && (e = { user: t.user }, await vi(this.userStorage, this.storageKey + "-user", e)), t.user = e?.user ?? Li();
			} else if (t && !t.user && !t.user) {
				let e = await yi(this.storage, this.storageKey + "-user");
				e && e?.user ? (t.user = e.user, await bi(this.storage, this.storageKey + "-user"), await vi(this.storage, this.storageKey, t)) : t.user = Li();
			}
			if (this._debug(e, "session from storage", t), !this._isValidSession(t)) {
				this._debug(e, "session is not valid"), t !== null && await this._removeSession();
				return;
			}
			let n = (t.expires_at ?? Infinity) * 1e3 - Date.now() < Or;
			if (this._debug(e, `session has${n ? "" : " not"} expired with margin of ${Or}s`), n) {
				if (this.autoRefreshToken && t.refresh_token) {
					let { error: n } = await this._callRefreshToken(t.refresh_token);
					n && (console.error(n), Yr(n) || (this._debug(e, "refresh failed with a non-retryable error, removing the session", n), await this._removeSession()));
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
		if (!e) throw new Br();
		if (this.refreshingDeferred) return this.refreshingDeferred.promise;
		let r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
		this._debug(r, "begin");
		try {
			this.refreshingDeferred = new xi();
			let { data: t, error: n } = await this._refreshAccessToken(e);
			if (n) throw n;
			if (!t.session) throw new Br();
			await this._saveSession(t.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
			let r = {
				data: t.session,
				error: null
			};
			return this.refreshingDeferred.resolve(r), r;
		} catch (e) {
			if (this._debug(r, "error", e), G(e)) {
				let n = {
					data: null,
					error: e
				};
				return Yr(e) || await this._removeSession(), (t = this.refreshingDeferred) == null || t.resolve(n), n;
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
		this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await bi(this.storage, `${this.storageKey}-code-verifier`);
		let t = Object.assign({}, e), n = t.user && t.user.__isUserNotAvailableProxy === !0;
		if (this.userStorage) {
			!n && t.user && await vi(this.userStorage, this.storageKey + "-user", { user: t.user });
			let e = Object.assign({}, t);
			delete e.user;
			let r = zi(e);
			await vi(this.storage, this.storageKey, r);
		} else {
			let e = zi(t);
			await vi(this.storage, this.storageKey, e);
		}
	}
	async _removeSession() {
		this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await bi(this.storage, this.storageKey), await bi(this.storage, this.storageKey + "-code-verifier"), await bi(this.storage, this.storageKey + "-user"), this.userStorage && await bi(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
	}
	_removeVisibilityChangedCallback() {
		this._debug("#_removeVisibilityChangedCallback()");
		let e = this.visibilityChangedCallback;
		this.visibilityChangedCallback = null;
		try {
			e && fi() && window != null && window.removeEventListener && window.removeEventListener("visibilitychange", e);
		} catch (e) {
			console.error("removing visibilitychange callback failed", e);
		}
	}
	async _startAutoRefresh() {
		await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
		let e = setInterval(() => this._autoRefreshTokenTick(), Dr);
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
							let r = Math.floor((n.expires_at * 1e3 - e) / Dr);
							this._debug("#_autoRefreshTokenTick()", `access token expires in ${r} ticks, a tick lasts ${Dr}ms, refresh threshold is 3 ticks`), r <= 3 && await this._callRefreshToken(n.refresh_token);
						});
					} catch (e) {
						console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
					}
				} finally {
					this._debug("#_autoRefreshTokenTick()", "end");
				}
			});
		} catch (e) {
			if (e instanceof na) this._debug("auto refresh token tick lock not available");
			else throw e;
		}
	}
	async _handleVisibilityChange() {
		if (this._debug("#_handleVisibilityChange()"), !fi() || !(window != null && window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1;
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
			let [e, t] = await ki(this.storage, this.storageKey), n = new URLSearchParams({
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
				}) : await K(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
					headers: this.headers,
					jwt: n?.session?.access_token
				});
			});
		} catch (e) {
			if (G(e)) return this._returnResult({
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
				}, e.factorType === "phone" ? { phone: e.phone } : e.factorType === "totp" ? { issuer: e.issuer } : {}), { data: a, error: o } = await K(this.fetch, "POST", `${this.url}/factors`, {
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
			if (G(e)) return this._returnResult({
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
					let i = Object.assign({ challenge_id: e.challengeId }, "webauthn" in e ? { webauthn: Object.assign(Object.assign({}, e.webauthn), { credential_response: e.webauthn.type === "create" ? _a(e.webauthn.credential_response) : va(e.webauthn.credential_response) }) } : { code: e.code }), { data: a, error: o } = await K(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
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
				if (G(e)) return this._returnResult({
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
					let i = await K(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
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
							data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: ha(a.webauthn.credential_options.publicKey) }) }) }),
							error: null
						};
						case "request": return {
							data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: ga(a.webauthn.credential_options.publicKey) }) }) }),
							error: null
						};
					}
				});
			} catch (e) {
				if (G(e)) return this._returnResult({
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
			let { payload: t } = Si(e), n = null;
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
			if (G(e)) return this._returnResult({
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
		let { payload: r } = Si(t.access_token), i = null;
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
				}) : n ? await K(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
					headers: this.headers,
					jwt: n.access_token,
					xform: (e) => ({
						data: e,
						error: null
					})
				}) : this._returnResult({
					data: null,
					error: new Br()
				});
			});
		} catch (e) {
			if (G(e)) return this._returnResult({
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
					error: new Br()
				});
				let a = await K(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
					headers: this.headers,
					jwt: r.access_token,
					body: { action: "approve" },
					xform: (e) => ({
						data: e,
						error: null
					})
				});
				return a.data && a.data.redirect_url && fi() && !t?.skipBrowserRedirect && window.location.assign(a.data.redirect_url), a;
			});
		} catch (e) {
			if (G(e)) return this._returnResult({
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
					error: new Br()
				});
				let a = await K(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
					headers: this.headers,
					jwt: r.access_token,
					body: { action: "deny" },
					xform: (e) => ({
						data: e,
						error: null
					})
				});
				return a.data && a.data.redirect_url && fi() && !t?.skipBrowserRedirect && window.location.assign(a.data.redirect_url), a;
			});
		} catch (e) {
			if (G(e)) return this._returnResult({
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
				}) : t ? await K(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
					headers: this.headers,
					jwt: t.access_token,
					xform: (e) => ({
						data: e,
						error: null
					})
				}) : this._returnResult({
					data: null,
					error: new Br()
				});
			});
		} catch (e) {
			if (G(e)) return this._returnResult({
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
				}) : n ? (await K(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
					headers: this.headers,
					jwt: n.access_token,
					query: { client_id: e.clientId },
					noResolveJson: !0
				}), {
					data: {},
					error: null
				}) : this._returnResult({
					data: null,
					error: new Br()
				});
			});
		} catch (e) {
			if (G(e)) return this._returnResult({
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
		let { data: i, error: a } = await K(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, { headers: this.headers });
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
			let { header: r, payload: i, signature: a, raw: { header: o, payload: s } } = Si(n);
			t?.allowExpired || Mi(i.exp);
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
			let l = Ni(r.alg), u = await crypto.subtle.importKey("jwk", c, l, !0, ["verify"]);
			if (!await crypto.subtle.verify(l, u, a, ci(`${o}.${s}`))) throw new Zr("Invalid JWT signature");
			return {
				data: {
					claims: i,
					header: r,
					signature: a
				},
				error: null
			};
		} catch (e) {
			if (G(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async signInWithPasskey(e) {
		Ii(this.experimental);
		try {
			if (!ba()) return this._returnResult({
				data: null,
				error: new Rr("Browser does not support WebAuthn", null)
			});
			let { data: t, error: n } = await this._startPasskeyAuthentication({ options: { captchaToken: e?.options?.captchaToken } });
			if (n || !t) return this._returnResult({
				data: null,
				error: n
			});
			let { data: r, error: i } = await Sa({
				publicKey: ga(t.options),
				signal: e?.options?.signal ?? ma.createNewAbortSignal()
			});
			if (i || !r) return this._returnResult({
				data: null,
				error: i ?? new Rr("WebAuthn ceremony failed", null)
			});
			let a = va(r);
			return this._verifyPasskeyAuthentication({
				challengeId: t.challenge_id,
				credential: a
			});
		} catch (e) {
			if (G(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async registerPasskey(e) {
		Ii(this.experimental);
		try {
			if (!ba()) return this._returnResult({
				data: null,
				error: new Rr("Browser does not support WebAuthn", null)
			});
			let { data: t, error: n } = await this._startPasskeyRegistration();
			if (n || !t) return this._returnResult({
				data: null,
				error: n
			});
			let { data: r, error: i } = await xa({
				publicKey: ha(t.options),
				signal: e?.options?.signal ?? ma.createNewAbortSignal()
			});
			if (i || !r) return this._returnResult({
				data: null,
				error: i ?? new Rr("WebAuthn ceremony failed", null)
			});
			let a = _a(r);
			return this._verifyPasskeyRegistration({
				challengeId: t.challenge_id,
				credential: a
			});
		} catch (e) {
			if (G(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _startPasskeyRegistration() {
		Ii(this.experimental);
		try {
			return await this._useSession(async (e) => {
				let { data: { session: t }, error: n } = e;
				if (n) return this._returnResult({
					data: null,
					error: n
				});
				if (!t) return this._returnResult({
					data: null,
					error: new Br()
				});
				let { data: r, error: i } = await K(this.fetch, "POST", `${this.url}/passkeys/registration/options`, {
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
			if (G(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _verifyPasskeyRegistration(e) {
		Ii(this.experimental);
		try {
			return await this._useSession(async (t) => {
				let { data: { session: n }, error: r } = t;
				if (r) return this._returnResult({
					data: null,
					error: r
				});
				if (!n) return this._returnResult({
					data: null,
					error: new Br()
				});
				let { data: i, error: a } = await K(this.fetch, "POST", `${this.url}/passkeys/registration/verify`, {
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
			if (G(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _startPasskeyAuthentication(e) {
		Ii(this.experimental);
		try {
			let { data: t, error: n } = await K(this.fetch, "POST", `${this.url}/passkeys/authentication/options`, {
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
			if (G(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _verifyPasskeyAuthentication(e) {
		Ii(this.experimental);
		try {
			let { data: t, error: n } = await K(this.fetch, "POST", `${this.url}/passkeys/authentication/verify`, {
				headers: this.headers,
				body: {
					challenge_id: e.challengeId,
					credential: e.credential
				},
				xform: Gi
			});
			return n ? this._returnResult({
				data: null,
				error: n
			}) : (t.session && (await this._saveSession(t.session), await this._notifyAllSubscribers("SIGNED_IN", t.session)), this._returnResult({
				data: t,
				error: null
			}));
		} catch (e) {
			if (G(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _listPasskeys() {
		Ii(this.experimental);
		try {
			return await this._useSession(async (e) => {
				let { data: { session: t }, error: n } = e;
				if (n) return this._returnResult({
					data: null,
					error: n
				});
				if (!t) return this._returnResult({
					data: null,
					error: new Br()
				});
				let { data: r, error: i } = await K(this.fetch, "GET", `${this.url}/passkeys`, {
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
			if (G(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _updatePasskey(e) {
		Ii(this.experimental);
		try {
			return await this._useSession(async (t) => {
				let { data: { session: n }, error: r } = t;
				if (r) return this._returnResult({
					data: null,
					error: r
				});
				if (!n) return this._returnResult({
					data: null,
					error: new Br()
				});
				let { data: i, error: a } = await K(this.fetch, "PATCH", `${this.url}/passkeys/${e.passkeyId}`, {
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
			if (G(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _deletePasskey(e) {
		Ii(this.experimental);
		try {
			return await this._useSession(async (t) => {
				let { data: { session: n }, error: r } = t;
				if (r) return this._returnResult({
					data: null,
					error: r
				});
				if (!n) return this._returnResult({
					data: null,
					error: new Br()
				});
				let { error: i } = await K(this.fetch, "DELETE", `${this.url}/passkeys/${e.passkeyId}`, {
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
			if (G(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
};
Ma.nextInstanceID = {};
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/AuthClient.js
var Na = Ma, Pa = "2.105.4", Fa = "";
Fa = typeof Deno < "u" ? "deno" : typeof document < "u" ? "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? "react-native" : "node";
var Ia = { headers: { "X-Client-Info": `supabase-js-${Fa}/${Pa}` } }, La = { schema: "public" }, Ra = {
	autoRefreshToken: !0,
	persistSession: !0,
	detectSessionInUrl: !0,
	flowType: "implicit"
}, za = {};
function Ba(e) {
	"@babel/helpers - typeof";
	return Ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ba(e);
}
function Va(e, t) {
	if (Ba(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ba(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ha(e) {
	var t = Va(e, "string");
	return Ba(t) == "symbol" ? t : t + "";
}
function Ua(e, t, n) {
	return (t = Ha(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Wa(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ga(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Wa(Object(n), !0).forEach(function(t) {
			Ua(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wa(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Ka = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), qa = () => Headers, Ja = (e, t, n) => {
	let r = Ka(n), i = qa();
	return async (n, a) => {
		let o = await t() ?? e, s = new i(a?.headers);
		return s.has("apikey") || s.set("apikey", e), s.has("Authorization") || s.set("Authorization", `Bearer ${o}`), r(n, Ga(Ga({}, a), {}, { headers: s }));
	};
};
function Ya(e) {
	return e.endsWith("/") ? e : e + "/";
}
function Xa(e, t) {
	let { db: n, auth: r, realtime: i, global: a } = e, { db: o, auth: s, realtime: c, global: l } = t, u = {
		db: Ga(Ga({}, o), n),
		auth: Ga(Ga({}, s), r),
		realtime: Ga(Ga({}, c), i),
		storage: {},
		global: Ga(Ga(Ga({}, l), a), {}, { headers: Ga(Ga({}, l?.headers ?? {}), a?.headers ?? {}) }),
		accessToken: async () => ""
	};
	return e.accessToken ? u.accessToken = e.accessToken : delete u.accessToken, u;
}
function Za(e) {
	let t = e?.trim();
	if (!t) throw Error("supabaseUrl is required.");
	if (!t.match(/^https?:\/\//i)) throw Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
	try {
		return new URL(Ya(t));
	} catch {
		throw Error("Invalid supabaseUrl: Provided URL is malformed.");
	}
}
var Qa = class extends Na {
	constructor(e) {
		super(e);
	}
}, $a = class {
	constructor(e, t, n) {
		this.supabaseUrl = e, this.supabaseKey = t;
		let r = Za(e);
		if (!t) throw Error("supabaseKey is required.");
		this.realtimeUrl = new URL("realtime/v1", r), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", r), this.storageUrl = new URL("storage/v1", r), this.functionsUrl = new URL("functions/v1", r);
		let i = `sb-${r.hostname.split(".")[0]}-auth-token`, a = {
			db: La,
			realtime: za,
			auth: Ga(Ga({}, Ra), {}, { storageKey: i }),
			global: Ia
		}, o = Xa(n ?? {}, a);
		this.storageKey = o.auth.storageKey ?? "", this.headers = o.global.headers ?? {}, o.accessToken ? (this.accessToken = o.accessToken, this.auth = new Proxy({}, { get: (e, t) => {
			throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`);
		} })) : this.auth = this._initSupabaseAuthClient(o.auth ?? {}, this.headers, o.global.fetch), this.fetch = Ja(t, this._getAccessToken.bind(this), o.global.fetch), this.realtime = this._initRealtimeClient(Ga({
			headers: this.headers,
			accessToken: this._getAccessToken.bind(this),
			fetch: this.fetch
		}, o.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((e) => this.realtime.setAuth(e)).catch((e) => console.warn("Failed to set initial Realtime auth token:", e)), this.rest = new ht(new URL("rest/v1", r).href, {
			headers: this.headers,
			schema: o.db.schema,
			fetch: this.fetch,
			timeout: o.db.timeout,
			urlLengthLimit: o.db.urlLengthLimit
		}), this.storage = new Tr(this.storageUrl.href, this.headers, this.fetch, n?.storage), o.accessToken || this._listenForAuthEvents();
	}
	get functions() {
		return new Xe(this.functionsUrl.href, {
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
	_initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: n, storage: r, userStorage: i, storageKey: a, flowType: o, lock: s, debug: c, throwOnError: l, experimental: u, lockAcquireTimeout: d, skipAutoInitialize: f }, p, m) {
		let h = {
			Authorization: `Bearer ${this.supabaseKey}`,
			apikey: `${this.supabaseKey}`
		};
		return new Qa({
			url: this.authUrl.href,
			headers: Ga(Ga({}, h), p),
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
			fetch: m,
			lockAcquireTimeout: d,
			skipAutoInitialize: f,
			hasCustomAuthorizationHeader: Object.keys(this.headers).some((e) => e.toLowerCase() === "authorization")
		});
	}
	_initRealtimeClient(e) {
		return new Dn(this.realtimeUrl.href, Ga(Ga({}, e), {}, { params: Ga(Ga({}, { apikey: this.supabaseKey }), e?.params) }));
	}
	_listenForAuthEvents() {
		return this.auth.onAuthStateChange((e, t) => {
			this._handleTokenChanged(e, "CLIENT", t?.access_token);
		});
	}
	_handleTokenChanged(e, t, n) {
		(e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== n ? (this.changedAccessToken = n, this.realtime.setAuth(n)) : e === "SIGNED_OUT" && (this.realtime.setAuth(), t == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
	}
}, eo = (e, t, n) => new $a(e, t, n);
function to() {
	if (typeof window < "u") return !1;
	let e = globalThis.process;
	if (!e) return !1;
	let t = e.version;
	if (t == null) return !1;
	let n = t.match(/^v(\d+)\./);
	return n ? parseInt(n[1], 10) <= 18 : !1;
}
to() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
//#endregion
//#region src/locales.ts
var no = {
	en: {
		title: "Account",
		signedInAs: "Signed in as",
		signOut: "Sign out",
		navProfile: "Profile",
		navSkin: "Skin",
		navCape: "Cape",
		navPassword: "Password",
		profileTitle: "Your profile",
		profileNick: "Minecraft nickname",
		profileNickHint: "Locked at sign-up — your in-game identity.",
		profileEmail: "Email",
		profileSlimToggle: "Use slim model (Alex)",
		profileSlimHint: "Affects how the skin renders in-game. Toggle if your skin is drawn with thinner arms.",
		profileSaved: "Saved.",
		skinTitle: "Skin",
		skinHint: "PNG, 64×64 (or 128×128 HD). Drag-and-drop or browse.",
		skinUpload: "Upload skin",
		skinReplace: "Replace skin",
		skinRemove: "Remove skin",
		skinPreviewHint: "Drag to rotate · scroll to zoom",
		skinModelDefault: "Default (Steve)",
		skinModelSlim: "Slim (Alex)",
		capeTitle: "Cape",
		capeHint: "PNG, 64×32 (or 128×64 HD). Optional — leave empty for no cape.",
		capeUpload: "Upload cape",
		capeReplace: "Replace cape",
		capeRemove: "Remove cape",
		presetsTitle: "Presets",
		externalSkinSites: "Where to find more skins",
		passwordTitle: "Change password",
		passwordCurrent: "Current password",
		passwordNew: "New password",
		passwordConfirm: "Confirm new password",
		passwordSubmit: "Update password",
		passwordChanged: "Password updated.",
		passwordWeak: "Password must be at least 6 characters.",
		passwordMismatch: "Passwords don't match.",
		errInvalidPng: "File must be a PNG image.",
		errInvalidSize: "Skins must be 64×64 or 128×128. Capes 64×32 or 128×64.",
		errTooLarge: "File too large (max 1 MB).",
		errUploadFailed: "Upload failed:",
		errSignInRequired: "Sign in to manage your account.",
		loading: "Loading…",
		saving: "Saving…",
		uploading: "Uploading…",
		lockCapeTitle: "Capes are a donation perk",
		lockCapeBody: "Support the server to unlock your own cape — any 64×32 or 128×64 PNG.",
		lockHdSkinTitle: "HD skins are a donation perk",
		lockHdSkinBody: "This file is 128×128 (HD). Support the server to unlock HD-resolution uploads. 64×64 skins remain free for everyone.",
		lockPriceCape: 70,
		lockPriceHdSkin: 150,
		lockBuyCta: "Support the server",
		lockAlreadyPaidCta: "Already paid?",
		lockSupportPrefix: "Already paid? Message"
	},
	ru: {
		title: "Аккаунт",
		signedInAs: "Вошли как",
		signOut: "Выйти",
		navProfile: "Профиль",
		navSkin: "Скин",
		navCape: "Плащ",
		navPassword: "Пароль",
		profileTitle: "Профиль",
		profileNick: "Ник в Minecraft",
		profileNickHint: "Зафиксирован при регистрации — ваш идентификатор в игре.",
		profileEmail: "Email",
		profileSlimToggle: "Использовать тонкую модель (Alex)",
		profileSlimHint: "Влияет на рендер в игре. Включите, если у скина тонкие руки.",
		profileSaved: "Сохранено.",
		skinTitle: "Скин",
		skinHint: "PNG, 64×64 (или 128×128 HD). Перетащи файл или выбери вручную.",
		skinUpload: "Загрузить скин",
		skinReplace: "Заменить скин",
		skinRemove: "Удалить скин",
		skinPreviewHint: "Перетаскивай — поворот · колесо — приближение",
		skinModelDefault: "Default (Steve)",
		skinModelSlim: "Slim (Alex)",
		capeTitle: "Плащ",
		capeHint: "PNG, 64×32 (или 128×64 HD). Опционально — без плаща оставь пустым.",
		capeUpload: "Загрузить плащ",
		capeReplace: "Заменить плащ",
		capeRemove: "Удалить плащ",
		presetsTitle: "Готовые",
		externalSkinSites: "Где найти ещё скины",
		passwordTitle: "Сменить пароль",
		passwordCurrent: "Текущий пароль",
		passwordNew: "Новый пароль",
		passwordConfirm: "Повторите новый пароль",
		passwordSubmit: "Обновить пароль",
		passwordChanged: "Пароль обновлён.",
		passwordWeak: "Пароль должен быть минимум 6 символов.",
		passwordMismatch: "Пароли не совпадают.",
		errInvalidPng: "Файл должен быть PNG.",
		errInvalidSize: "Скин — 64×64 или 128×128. Плащ — 64×32 или 128×64.",
		errTooLarge: "Файл слишком большой (максимум 1 МБ).",
		errUploadFailed: "Ошибка загрузки:",
		errSignInRequired: "Войди, чтобы управлять аккаунтом.",
		loading: "Загрузка…",
		saving: "Сохранение…",
		uploading: "Загрузка…",
		lockCapeTitle: "Плащи — донат-перк",
		lockCapeBody: "Поддержи сервер, чтобы получить возможность загружать свой плащ (PNG 64×32 или 128×64).",
		lockHdSkinTitle: "HD-скины — донат-перк",
		lockHdSkinBody: "Это HD-скин (128×128). Чтобы загружать HD, поддержи сервер. Скины 64×64 остаются бесплатными.",
		lockPriceCape: 70,
		lockPriceHdSkin: 150,
		lockBuyCta: "Поддержать сервер",
		lockAlreadyPaidCta: "Уже оплатил?",
		lockSupportPrefix: "Уже оплатил? Напиши в Telegram"
	},
	uk: {
		title: "Акаунт",
		signedInAs: "Увійшли як",
		signOut: "Вийти",
		navProfile: "Профіль",
		navSkin: "Скін",
		navCape: "Плащ",
		navPassword: "Пароль",
		profileTitle: "Профіль",
		profileNick: "Нікнейм у Minecraft",
		profileNickHint: "Зафіксований при реєстрації — твій ідентифікатор у грі.",
		profileEmail: "Email",
		profileSlimToggle: "Використовувати тонку модель (Alex)",
		profileSlimHint: "Впливає на рендер у грі. Увімкни, якщо у скіна тонкі руки.",
		profileSaved: "Збережено.",
		skinTitle: "Скін",
		skinHint: "PNG, 64×64 (або 128×128 HD). Перетягни файл або обери вручну.",
		skinUpload: "Завантажити скін",
		skinReplace: "Замінити скін",
		skinRemove: "Видалити скін",
		skinPreviewHint: "Перетягуй — обертання · колесо — наближення",
		skinModelDefault: "Default (Steve)",
		skinModelSlim: "Slim (Alex)",
		capeTitle: "Плащ",
		capeHint: "PNG, 64×32 (або 128×64 HD). Опційно — без плаща залиш порожнім.",
		capeUpload: "Завантажити плащ",
		capeReplace: "Замінити плащ",
		capeRemove: "Видалити плащ",
		presetsTitle: "Готові",
		externalSkinSites: "Де знайти ще скіни",
		passwordTitle: "Змінити пароль",
		passwordCurrent: "Поточний пароль",
		passwordNew: "Новий пароль",
		passwordConfirm: "Повторіть новий пароль",
		passwordSubmit: "Оновити пароль",
		passwordChanged: "Пароль оновлено.",
		passwordWeak: "Пароль має бути мінімум 6 символів.",
		passwordMismatch: "Паролі не співпадають.",
		errInvalidPng: "Файл має бути PNG.",
		errInvalidSize: "Скін — 64×64 або 128×128. Плащ — 64×32 або 128×64.",
		errTooLarge: "Файл занадто великий (максимум 1 МБ).",
		errUploadFailed: "Помилка завантаження:",
		errSignInRequired: "Увійди, щоб керувати акаунтом.",
		loading: "Завантаження…",
		saving: "Збереження…",
		uploading: "Завантаження…",
		lockCapeTitle: "Плащі — донат-перк",
		lockCapeBody: "Підтримай сервер, щоб отримати можливість завантажувати свій плащ (PNG 64×32 або 128×64).",
		lockHdSkinTitle: "HD-скіни — донат-перк",
		lockHdSkinBody: "Це HD-скін (128×128). Щоб завантажувати HD — підтримай сервер. Скіни 64×64 залишаються безкоштовними.",
		lockPriceCape: 70,
		lockPriceHdSkin: 150,
		lockBuyCta: "Підтримати сервер",
		lockAlreadyPaidCta: "Вже оплатив?",
		lockSupportPrefix: "Вже оплатив? Напиши в Telegram"
	},
	de: {
		title: "Konto",
		signedInAs: "Angemeldet als",
		signOut: "Abmelden",
		navProfile: "Profil",
		navSkin: "Skin",
		navCape: "Umhang",
		navPassword: "Passwort",
		profileTitle: "Dein Profil",
		profileNick: "Minecraft-Nickname",
		profileNickHint: "Bei der Registrierung gesperrt — deine In-Game-Identität.",
		profileEmail: "E-Mail",
		profileSlimToggle: "Schlankes Modell (Alex) verwenden",
		profileSlimHint: "Beeinflusst, wie der Skin im Spiel gerendert wird. Aktivieren, wenn dein Skin dünne Arme hat.",
		profileSaved: "Gespeichert.",
		skinTitle: "Skin",
		skinHint: "PNG, 64×64 (oder 128×128 HD). Per Drag-and-Drop oder Auswahl.",
		skinUpload: "Skin hochladen",
		skinReplace: "Skin ersetzen",
		skinRemove: "Skin entfernen",
		skinPreviewHint: "Ziehen zum Drehen · Scrollen zum Zoomen",
		skinModelDefault: "Default (Steve)",
		skinModelSlim: "Slim (Alex)",
		capeTitle: "Umhang",
		capeHint: "PNG, 64×32 (oder 128×64 HD). Optional — leer lassen für keinen Umhang.",
		capeUpload: "Umhang hochladen",
		capeReplace: "Umhang ersetzen",
		capeRemove: "Umhang entfernen",
		presetsTitle: "Vorlagen",
		externalSkinSites: "Mehr Skins finden",
		passwordTitle: "Passwort ändern",
		passwordCurrent: "Aktuelles Passwort",
		passwordNew: "Neues Passwort",
		passwordConfirm: "Neues Passwort bestätigen",
		passwordSubmit: "Passwort aktualisieren",
		passwordChanged: "Passwort aktualisiert.",
		passwordWeak: "Das Passwort muss mindestens 6 Zeichen haben.",
		passwordMismatch: "Passwörter stimmen nicht überein.",
		errInvalidPng: "Datei muss ein PNG-Bild sein.",
		errInvalidSize: "Skins 64×64 oder 128×128. Umhänge 64×32 oder 128×64.",
		errTooLarge: "Datei zu groß (max. 1 MB).",
		errUploadFailed: "Upload fehlgeschlagen:",
		errSignInRequired: "Anmelden, um das Konto zu verwalten.",
		loading: "Lädt…",
		saving: "Speichert…",
		uploading: "Lädt hoch…",
		lockCapeTitle: "Umhänge sind ein Spender-Perk",
		lockCapeBody: "Unterstütze den Server, um einen eigenen Umhang hochzuladen (PNG 64×32 oder 128×64).",
		lockHdSkinTitle: "HD-Skins sind ein Spender-Perk",
		lockHdSkinBody: "Diese Datei ist 128×128 (HD). Unterstütze den Server, um HD-Skins hochzuladen. 64×64 bleibt für alle frei.",
		lockPriceCape: 70,
		lockPriceHdSkin: 150,
		lockBuyCta: "Server unterstützen",
		lockAlreadyPaidCta: "Schon bezahlt?",
		lockSupportPrefix: "Schon bezahlt? Schreib uns auf Telegram"
	},
	pl: {
		title: "Konto",
		signedInAs: "Zalogowano jako",
		signOut: "Wyloguj",
		navProfile: "Profil",
		navSkin: "Skórka",
		navCape: "Peleryna",
		navPassword: "Hasło",
		profileTitle: "Twój profil",
		profileNick: "Nick w Minecraft",
		profileNickHint: "Ustawiony przy rejestracji — twoja tożsamość w grze.",
		profileEmail: "Email",
		profileSlimToggle: "Użyj smukłego modelu (Alex)",
		profileSlimHint: "Wpływa na renderowanie w grze. Włącz jeśli twoja skórka ma cienkie ręce.",
		profileSaved: "Zapisano.",
		skinTitle: "Skórka",
		skinHint: "PNG, 64×64 (lub 128×128 HD). Przeciągnij plik albo wybierz ręcznie.",
		skinUpload: "Wgraj skórkę",
		skinReplace: "Zamień skórkę",
		skinRemove: "Usuń skórkę",
		skinPreviewHint: "Przeciągnij — obrót · kółko — przybliżenie",
		skinModelDefault: "Default (Steve)",
		skinModelSlim: "Slim (Alex)",
		capeTitle: "Peleryna",
		capeHint: "PNG, 64×32 (lub 128×64 HD). Opcjonalna — zostaw puste, jeśli bez peleryny.",
		capeUpload: "Wgraj pelerynę",
		capeReplace: "Zamień pelerynę",
		capeRemove: "Usuń pelerynę",
		presetsTitle: "Szablony",
		externalSkinSites: "Gdzie szukać więcej skórek",
		passwordTitle: "Zmień hasło",
		passwordCurrent: "Obecne hasło",
		passwordNew: "Nowe hasło",
		passwordConfirm: "Potwierdź nowe hasło",
		passwordSubmit: "Aktualizuj hasło",
		passwordChanged: "Hasło zaktualizowane.",
		passwordWeak: "Hasło musi mieć co najmniej 6 znaków.",
		passwordMismatch: "Hasła nie zgadzają się.",
		errInvalidPng: "Plik musi być obrazem PNG.",
		errInvalidSize: "Skórki 64×64 lub 128×128. Peleryny 64×32 lub 128×64.",
		errTooLarge: "Plik za duży (max 1 MB).",
		errUploadFailed: "Błąd wgrywania:",
		errSignInRequired: "Zaloguj się, żeby zarządzać kontem.",
		loading: "Ładowanie…",
		saving: "Zapisywanie…",
		uploading: "Wgrywanie…",
		lockCapeTitle: "Peleryny — bonus za wsparcie",
		lockCapeBody: "Wesprzyj serwer, aby wgrywać swoją pelerynę (PNG 64×32 albo 128×64).",
		lockHdSkinTitle: "Skiny HD — bonus za wsparcie",
		lockHdSkinBody: "To skin HD (128×128). Wesprzyj serwer, aby wgrywać HD. Skiny 64×64 pozostają darmowe.",
		lockPriceCape: 70,
		lockPriceHdSkin: 150,
		lockBuyCta: "Wesprzyj serwer",
		lockAlreadyPaidCta: "Już zapłacono?",
		lockSupportPrefix: "Już zapłacono? Napisz na Telegrama"
	}
};
function ro(e) {
	let t = (e || "en").slice(0, 2).toLowerCase();
	return t in no ? no[t] : no.en;
}
//#endregion
//#region node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var io = 0;
Array.isArray;
function q(e, n, r, i, a, o) {
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
		__v: --io,
		__i: -1,
		__u: 0,
		__source: a,
		__self: o
	};
	if (typeof e == "function" && (s = e.defaultProps)) for (c in s) l[c] === void 0 && (l[c] = s[c]);
	return t.vnode && t.vnode(u), u;
}
//#endregion
//#region src/pages/ProfilePage.tsx
function ao({ sb: e, user: t, t: n, nick: r }) {
	let [i, a] = U(null), [o, s] = U(!1), [c, l] = U(!1);
	je(() => {
		e.from("skins").select("slim_model").eq("user_id", t.id).maybeSingle().then(({ data: e }) => a(e?.slim_model ?? !1));
	}, [e, t.id]);
	async function u() {
		if (i === null) return;
		s(!0);
		let n = !i;
		a(n);
		let { error: r } = await e.from("skins").update({
			slim_model: n,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("user_id", t.id);
		s(!1), r ? a(!n) : (l(!0), setTimeout(() => l(!1), 1500));
	}
	return /* @__PURE__ */ q("div", {
		class: "space-y-5",
		children: [
			/* @__PURE__ */ q("h2", {
				class: "text-lg font-bold text-white",
				children: n.profileTitle
			}),
			/* @__PURE__ */ q(oo, {
				label: n.profileNick,
				hint: n.profileNickHint,
				children: /* @__PURE__ */ q("code", {
					class: "block px-3 py-2 rounded-lg bg-brand-500/10 border border-brand-500/25 font-mono text-brand-200",
					children: r ?? "—"
				})
			}),
			/* @__PURE__ */ q(oo, {
				label: n.profileEmail,
				children: /* @__PURE__ */ q("code", {
					class: "block px-3 py-2 rounded-lg bg-brand-500/10 border border-brand-500/25 font-mono text-gray-200 text-sm",
					children: t.email ?? "—"
				})
			}),
			/* @__PURE__ */ q("div", {
				class: "pt-2 border-t border-brand-500/15",
				children: [/* @__PURE__ */ q("label", {
					class: "flex items-start gap-3 cursor-pointer group",
					children: [/* @__PURE__ */ q("span", {
						class: "relative inline-flex flex-shrink-0 mt-0.5",
						children: [
							/* @__PURE__ */ q("input", {
								type: "checkbox",
								disabled: i === null || o,
								checked: !!i,
								onChange: u,
								class: "sr-only peer"
							}),
							/* @__PURE__ */ q("span", { class: "w-10 h-6 rounded-full bg-brand-500/15 border border-brand-500/30 peer-checked:bg-brand-500/45 transition" }),
							/* @__PURE__ */ q("span", { class: "absolute top-[3px] left-[3px] w-4 h-4 rounded-full bg-white shadow transition peer-checked:translate-x-4" })
						]
					}), /* @__PURE__ */ q("span", { children: [/* @__PURE__ */ q("span", {
						class: "block text-sm font-semibold text-white",
						children: n.profileSlimToggle
					}), /* @__PURE__ */ q("span", {
						class: "block text-xs text-gray-400 mt-0.5",
						children: n.profileSlimHint
					})] })]
				}), c && /* @__PURE__ */ q("p", {
					class: "text-xs text-emerald-400 mt-2",
					children: n.profileSaved
				})]
			})
		]
	});
}
function oo({ label: e, hint: t, children: n }) {
	return /* @__PURE__ */ q("div", { children: [
		/* @__PURE__ */ q("div", {
			class: "text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5",
			children: e
		}),
		n,
		t && /* @__PURE__ */ q("p", {
			class: "text-[11px] text-gray-500 mt-1.5",
			children: t
		})
	] });
}
//#endregion
//#region src/lib/uploadTexture.ts
function so(e) {
	let t = "", n = 32768;
	for (let r = 0; r < e.length; r += n) t += String.fromCharCode(...e.subarray(r, r + n));
	return btoa(t);
}
var co = class extends Error {
	code;
	status;
	constructor(e, t, n) {
		super(n || e), this.code = e, this.status = t, this.name = "UploadError";
	}
};
async function lo(e, t, n, r = {}) {
	let { data: { session: i } } = await e.auth.getSession();
	if (!i) throw new co("not_signed_in", 401);
	let a = e.supabaseUrl, o = e.supabaseKey, s = await fetch(`${a}/functions/v1/skin-upload`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${i.access_token}`,
			apikey: o,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			kind: t,
			slim: r.slim,
			content_b64: so(n)
		})
	});
	if (!s.ok) {
		let e = `http_${s.status}`, t;
		try {
			let n = await s.json();
			n?.error && (e = String(n.error)), n?.message && (t = String(n.message));
		} catch {}
		throw new co(e, s.status, t);
	}
	let { sha: c } = await s.json();
	return c;
}
//#endregion
//#region src/components/SkinUploader.tsx
var uo = [
	137,
	80,
	78,
	71,
	13,
	10,
	26,
	10
];
function fo(e) {
	let t = new Uint8Array(e);
	if (t.length < 24) return null;
	for (let e = 0; e < 8; e++) if (t[e] !== uo[e]) return null;
	let n = new DataView(e);
	return {
		w: n.getUint32(16),
		h: n.getUint32(20)
	};
}
function po({ sb: e, user: t, t: n, kind: r, slim: i, accept: a, validateImage: o, onUploaded: s, paywallCheck: c, onPaywall: l, hint: u, label: d }) {
	let f = Me(null), [p, m] = U(!1), [h, g] = U(""), [_, v] = U(!1), y = Pe(async (t) => {
		if (g(""), t.type !== "image/png") {
			g(n.errInvalidPng);
			return;
		}
		if (t.size > 1024 * 1024) {
			g(n.errTooLarge);
			return;
		}
		let a = await t.arrayBuffer(), u = fo(a);
		if (!u) {
			g(n.errInvalidPng);
			return;
		}
		if (!o(u)) {
			g(n.errInvalidSize);
			return;
		}
		if (c?.(u)) {
			l?.();
			return;
		}
		m(!0);
		try {
			await s(await lo(e, r, new Uint8Array(a), { slim: i }));
		} catch (e) {
			if (e instanceof co && (e.code === "hd_skin_locked" || e.code === "cape_locked")) {
				l?.();
				return;
			}
			g(`${n.errUploadFailed} ${e?.message ?? String(e)}`);
		} finally {
			m(!1);
		}
	}, [
		e,
		n,
		r,
		i,
		o,
		s,
		c,
		l
	]), b = Pe((e) => {
		e.preventDefault(), v(!1);
		let t = e.dataTransfer?.files?.[0];
		t && y(t);
	}, [y]), x = Pe((e) => {
		e.preventDefault(), v(!0);
	}, []), S = Pe(() => v(!1), []);
	return /* @__PURE__ */ q("div", {
		class: "space-y-2",
		children: [/* @__PURE__ */ q("div", {
			class: `dropzone flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-2xl border-2 border-dashed border-brand-500/30 bg-brand-500/5 hover:bg-brand-500/8 cursor-pointer transition ${_ ? "is-active" : ""}`,
			onDragOver: x,
			onDragLeave: S,
			onDrop: b,
			onClick: () => f.current?.click(),
			children: [
				/* @__PURE__ */ q("input", {
					ref: f,
					type: "file",
					accept: a,
					style: "display:none",
					onChange: (e) => {
						let t = e.target.files?.[0];
						t && y(t), e.target.value = "";
					}
				}),
				/* @__PURE__ */ q("svg", {
					class: "w-8 h-8 text-brand-300",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.8",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ q("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M7 16a4 4 0 01-.88-7.9 5 5 0 019.39-1.83A5.5 5.5 0 1118 16h-1m-6-4l3-3m0 0l3 3m-3-3v12"
					})
				}),
				/* @__PURE__ */ q("button", {
					type: "button",
					disabled: p,
					class: "btn-glow inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-semibold px-5 py-2 rounded-xl text-sm shadow-lg shadow-brand-600/30 disabled:opacity-50 disabled:pointer-events-none",
					children: p ? n.uploading : d
				}),
				u && /* @__PURE__ */ q("p", {
					class: "text-[11px] text-gray-500 text-center max-w-xs leading-relaxed",
					children: u
				})
			]
		}), h && /* @__PURE__ */ q("p", {
			class: "text-xs text-rose-400 text-center",
			children: h
		})]
	});
}
var mo = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2
}, ho = {
	ROTATE: 0,
	PAN: 1,
	DOLLY_PAN: 2,
	DOLLY_ROTATE: 3
}, go = 1e3, _o = 1001, vo = 1002, yo = 1003, bo = 1004, xo = 1005, So = 1006, Co = 1007, wo = 1008, To = 1009, Eo = 1014, Do = 1015, Oo = 1016, ko = 1020, Ao = 1023, jo = 1026, Mo = 1027, No = 2300, Po = 2301, Fo = 2302, Io = 2400, Lo = 2401, Ro = 2402, zo = 3e3, Bo = 3001, Vo = 3200, Ho = 3201, Uo = "srgb", Wo = "srgb-linear", Go = "display-p3", Ko = 7680, qo = 35044, Jo = 1035, Yo = 2e3, Xo = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		if (this._listeners === void 0) return !1;
		let n = this._listeners;
		return n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		if (this._listeners === void 0) return;
		let n = this._listeners[e];
		if (n !== void 0) {
			let e = n.indexOf(t);
			e !== -1 && n.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		if (this._listeners === void 0) return;
		let t = this._listeners[e.type];
		if (t !== void 0) {
			e.target = this;
			let n = t.slice(0);
			for (let t = 0, r = n.length; t < r; t++) n[t].call(this, e);
			e.target = null;
		}
	}
}, Zo = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), Qo = 1234567, $o = Math.PI / 180, es = 180 / Math.PI;
function ts() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (Zo[e & 255] + Zo[e >> 8 & 255] + Zo[e >> 16 & 255] + Zo[e >> 24 & 255] + "-" + Zo[t & 255] + Zo[t >> 8 & 255] + "-" + Zo[t >> 16 & 15 | 64] + Zo[t >> 24 & 255] + "-" + Zo[n & 63 | 128] + Zo[n >> 8 & 255] + "-" + Zo[n >> 16 & 255] + Zo[n >> 24 & 255] + Zo[r & 255] + Zo[r >> 8 & 255] + Zo[r >> 16 & 255] + Zo[r >> 24 & 255]).toLowerCase();
}
function ns(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function rs(e, t) {
	return (e % t + t) % t;
}
function is(e, t, n, r, i) {
	return r + (e - t) * (i - r) / (n - t);
}
function as(e, t, n) {
	return e === t ? 0 : (n - e) / (t - e);
}
function os(e, t, n) {
	return (1 - n) * e + n * t;
}
function ss(e, t, n, r) {
	return os(e, t, 1 - Math.exp(-n * r));
}
function cs(e, t = 1) {
	return t - Math.abs(rs(e, t * 2) - t);
}
function ls(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function us(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function ds(e, t) {
	return e + Math.floor(Math.random() * (t - e + 1));
}
function fs(e, t) {
	return e + Math.random() * (t - e);
}
function ps(e) {
	return e * (.5 - Math.random());
}
function ms(e) {
	e !== void 0 && (Qo = e);
	let t = Qo += 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function hs(e) {
	return e * $o;
}
function gs(e) {
	return e * es;
}
function _s(e) {
	return (e & e - 1) == 0 && e !== 0;
}
function vs(e) {
	return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function ys(e) {
	return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function bs(e, t, n, r, i) {
	let a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), l = a((t + r) / 2), u = o((t + r) / 2), d = a((t - r) / 2), f = o((t - r) / 2), p = a((r - t) / 2), m = o((r - t) / 2);
	switch (i) {
		case "XYX":
			e.set(s * u, c * d, c * f, s * l);
			break;
		case "YZY":
			e.set(c * f, s * u, c * d, s * l);
			break;
		case "ZXZ":
			e.set(c * d, c * f, s * u, s * l);
			break;
		case "XZX":
			e.set(s * u, c * m, c * p, s * l);
			break;
		case "YXY":
			e.set(c * p, s * u, c * m, s * l);
			break;
		case "ZYZ":
			e.set(c * m, c * p, s * u, s * l);
			break;
		default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
	}
}
function xs(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return e / 4294967295;
		case Uint16Array: return e / 65535;
		case Uint8Array: return e / 255;
		case Int32Array: return Math.max(e / 2147483647, -1);
		case Int16Array: return Math.max(e / 32767, -1);
		case Int8Array: return Math.max(e / 127, -1);
		default: throw Error("Invalid component type.");
	}
}
function Ss(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return Math.round(e * 4294967295);
		case Uint16Array: return Math.round(e * 65535);
		case Uint8Array: return Math.round(e * 255);
		case Int32Array: return Math.round(e * 2147483647);
		case Int16Array: return Math.round(e * 32767);
		case Int8Array: return Math.round(e * 127);
		default: throw Error("Invalid component type.");
	}
}
var Cs = {
	DEG2RAD: $o,
	RAD2DEG: es,
	generateUUID: ts,
	clamp: ns,
	euclideanModulo: rs,
	mapLinear: is,
	inverseLerp: as,
	lerp: os,
	damp: ss,
	pingpong: cs,
	smoothstep: ls,
	smootherstep: us,
	randInt: ds,
	randFloat: fs,
	randFloatSpread: ps,
	seededRandom: ms,
	degToRad: hs,
	radToDeg: gs,
	isPowerOfTwo: _s,
	ceilPowerOfTwo: vs,
	floorPowerOfTwo: ys,
	setQuaternionFromProperEuler: bs,
	normalize: Ss,
	denormalize: xs
}, J = class e {
	constructor(t = 0, n = 0) {
		e.prototype.isVector2 = !0, this.x = t, this.y = n;
	}
	get width() {
		return this.x;
	}
	set width(e) {
		this.x = e;
	}
	get height() {
		return this.y;
	}
	set height(e) {
		this.y = e;
	}
	set(e, t) {
		return this.x = e, this.y = t, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
	}
	clampScalar(e, t) {
		return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y;
	}
	cross(e) {
		return this.x * e.y - this.y * e.x;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI;
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(ns(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
		return t * t + n * n;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this;
	}
	rotateAround(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}, Y = class e {
	constructor(t, n, r, i, a, o, s, c, l) {
		e.prototype.isMatrix3 = !0, this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], t !== void 0 && this.set(t, n, r, i, a, o, s, c, l);
	}
	set(e, t, n, r, i, a, o, s, c) {
		let l = this.elements;
		return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
		return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
		return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let m = 1 / p;
		return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, o) {
		let s = Math.cos(i), c = Math.sin(i);
		return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return this.premultiply(ws.makeScale(e, t)), this;
	}
	rotate(e) {
		return this.premultiply(ws.makeRotation(-e)), this;
	}
	translate(e, t) {
		return this.premultiply(ws.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}, ws = /* @__PURE__ */ new Y();
function Ts(e) {
	for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
	return !1;
}
function Es(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function Ds() {
	let e = Es("canvas");
	return e.style.display = "block", e;
}
var Os = {};
function ks(e) {
	e in Os || (Os[e] = !0, console.warn(e));
}
function As(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function js(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
var Ms = /* @__PURE__ */ new Y().fromArray([
	.8224621,
	.0331941,
	.0170827,
	.177538,
	.9668058,
	.0723974,
	-1e-7,
	1e-7,
	.9105199
]), Ns = /* @__PURE__ */ new Y().fromArray([
	1.2249401,
	-.0420569,
	-.0196376,
	-.2249404,
	1.0420571,
	-.0786361,
	1e-7,
	0,
	1.0982735
]);
function Ps(e) {
	return e.convertSRGBToLinear().applyMatrix3(Ns);
}
function Fs(e) {
	return e.applyMatrix3(Ms).convertLinearToSRGB();
}
var Is = {
	[Wo]: (e) => e,
	[Uo]: (e) => e.convertSRGBToLinear(),
	[Go]: Ps
}, Ls = {
	[Wo]: (e) => e,
	[Uo]: (e) => e.convertLinearToSRGB(),
	[Go]: Fs
}, Rs = {
	enabled: !0,
	get legacyMode() {
		return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
	},
	set legacyMode(e) {
		console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !e;
	},
	get workingColorSpace() {
		return Wo;
	},
	set workingColorSpace(e) {
		console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
	},
	convert: function(e, t, n) {
		if (this.enabled === !1 || t === n || !t || !n) return e;
		let r = Is[t], i = Ls[n];
		if (r === void 0 || i === void 0) throw Error(`Unsupported color space conversion, "${t}" to "${n}".`);
		return i(r(e));
	},
	fromWorkingColorSpace: function(e, t) {
		return this.convert(e, this.workingColorSpace, t);
	},
	toWorkingColorSpace: function(e, t) {
		return this.convert(e, t, this.workingColorSpace);
	}
}, zs, Bs = class {
	static getDataURL(e) {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let t;
		if (e instanceof HTMLCanvasElement) t = e;
		else {
			zs === void 0 && (zs = Es("canvas")), zs.width = e.width, zs.height = e.height;
			let n = zs.getContext("2d");
			e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = zs;
		}
		return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png");
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = Es("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = As(i[e] / 255) * 255;
			return n.putImageData(r, 0, 0), t;
		} else if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(As(t[e] / 255) * 255) : t[e] = As(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		} else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, Vs = 0, Hs = class {
	constructor(e = null) {
		this.isSource = !0, Object.defineProperty(this, "id", { value: Vs++ }), this.uuid = ts(), this.data = e, this.version = 0;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(Us(r[t].image)) : e.push(Us(r[t]));
			} else e = Us(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function Us(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? Bs.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
var Ws = 0, Gs = class e extends Xo {
	constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, r = _o, i = _o, a = So, o = wo, s = Ao, c = To, l = e.DEFAULT_ANISOTROPY, u = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Ws++ }), this.uuid = ts(), this.name = "", this.source = new Hs(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = r, this.wrapT = i, this.magFilter = a, this.minFilter = o, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = c, this.offset = new J(0, 0), this.repeat = new J(1, 1), this.center = new J(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Y(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : (ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === 3001 ? Uo : ""), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
	}
	get image() {
		return this.source.data;
	}
	set image(e = null) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.6,
				type: "Texture",
				generator: "Texture.toJSON"
			},
			uuid: this.uuid,
			name: this.name,
			image: this.source.toJSON(e).uuid,
			mapping: this.mapping,
			channel: this.channel,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			colorSpace: this.colorSpace,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	transformUv(e) {
		if (this.mapping !== 300) return e;
		if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
			case go:
				e.x -= Math.floor(e.x);
				break;
			case _o:
				e.x = e.x < 0 ? 0 : 1;
				break;
			case vo:
				Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
				break;
		}
		if (e.y < 0 || e.y > 1) switch (this.wrapT) {
			case go:
				e.y -= Math.floor(e.y);
				break;
			case _o:
				e.y = e.y < 0 ? 0 : 1;
				break;
			case vo:
				Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
				break;
		}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, this.source.needsUpdate = !0);
	}
	get encoding() {
		return ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === "srgb" ? Bo : zo;
	}
	set encoding(e) {
		ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === 3001 ? Uo : "";
	}
};
Gs.DEFAULT_IMAGE = null, Gs.DEFAULT_MAPPING = 300, Gs.DEFAULT_ANISOTROPY = 1;
var Ks = class e {
	constructor(t = 0, n = 0, r = 0, i = 1) {
		e.prototype.isVector4 = !0, this.x = t, this.y = n, this.z = r, this.w = i;
	}
	get width() {
		return this.z;
	}
	set width(e) {
		this.z = e;
	}
	get height() {
		return this.w;
	}
	set height(e) {
		this.w = e;
	}
	set(e, t, n, r) {
		return this.x = e, this.y = t, this.z = n, this.w = r, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this.w = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setW(e) {
		return this.w = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this.w += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
		return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		let t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
		if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
			if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			let e = (c + 1) / 2, s = (f + 1) / 2, _ = (g + 1) / 2, v = (l + d) / 4, y = (u + m) / 4, b = (p + h) / 4;
			return e > s && e > _ ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = v / n, i = y / n) : s > _ ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = v / r, i = b / r) : _ < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(_), n = y / i, r = b / i), this.set(n, r, i, t), this;
		}
		let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
		return Math.abs(_) < .001 && (_ = 1), this.x = (h - p) / _, this.y = (u - m) / _, this.z = (d - l) / _, this.w = Math.acos((c + f + g - 1) / 2), this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
	}
	clamp(e, t) {
		return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
	}
	clampScalar(e, t) {
		return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z, yield this.w;
	}
}, qs = class extends Xo {
	constructor(e = 1, t = 1, n = {}) {
		super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ks(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ks(0, 0, e, t);
		let r = {
			width: e,
			height: t,
			depth: 1
		};
		n.encoding !== void 0 && (ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === 3001 ? Uo : ""), this.texture = new Gs(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps === void 0 ? !1 : n.generateMipmaps, this.texture.internalFormat = n.internalFormat === void 0 ? null : n.internalFormat, this.texture.minFilter = n.minFilter === void 0 ? So : n.minFilter, this.depthBuffer = n.depthBuffer === void 0 ? !0 : n.depthBuffer, this.stencilBuffer = n.stencilBuffer === void 0 ? !1 : n.stencilBuffer, this.depthTexture = n.depthTexture === void 0 ? null : n.depthTexture, this.samples = n.samples === void 0 ? 0 : n.samples;
	}
	setSize(e, t, n = 1) {
		(this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
		let t = Object.assign({}, e.texture.image);
		return this.texture.source = new Hs(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Js = class extends qs {
	constructor(e = 1, t = 1, n = {}) {
		super(e, t, n), this.isWebGLRenderTarget = !0;
	}
}, Ys = class extends Gs {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isDataArrayTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = yo, this.minFilter = yo, this.wrapR = _o, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, Xs = class extends Gs {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isData3DTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = yo, this.minFilter = yo, this.wrapR = _o, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, Zs = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, o) {
		let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
		if (o === 0) {
			e[t + 0] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
			return;
		}
		if (o === 1) {
			e[t + 0] = d, e[t + 1] = f, e[t + 2] = p, e[t + 3] = m;
			return;
		}
		if (u !== m || s !== d || c !== f || l !== p) {
			let e = 1 - o, t = s * d + c * f + l * p + u * m, n = t >= 0 ? 1 : -1, r = 1 - t * t;
			if (r > 2 ** -52) {
				let i = Math.sqrt(r), a = Math.atan2(i, t * n);
				e = Math.sin(e * a) / i, o = Math.sin(o * a) / i;
			}
			let i = o * n;
			if (s = s * e + d * i, c = c * e + f * i, l = l * e + p * i, u = u * e + m * i, e === 1 - o) {
				let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
				s *= e, c *= e, l *= e, u *= e;
			}
		}
		e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
		return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get w() {
		return this._w;
	}
	set w(e) {
		this._w = e, this._onChangeCallback();
	}
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), d = s(n / 2), f = s(r / 2), p = s(i / 2);
		switch (a) {
			case "XYZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "YXZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "ZXY":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "ZYX":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "YZX":
				this._x = d * l * u + c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "XZY":
				this._x = d * l * u - c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u + d * f * p;
				break;
			default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return t !== !1 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
		if (d > 0) {
			let e = .5 / Math.sqrt(d + 1);
			this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
		} else if (n > o && n > u) {
			let e = 2 * Math.sqrt(1 + n - o - u);
			this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
		} else if (o > u) {
			let e = 2 * Math.sqrt(1 + o - n - u);
			this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
		} else {
			let e = 2 * Math.sqrt(1 + u - n - o);
			this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 2 ** -52 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(ns(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
	}
	identity() {
		return this.set(0, 0, 0, 1);
	}
	invert() {
		return this.conjugate();
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}
	normalize() {
		let e = this.length();
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
		return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		if (t === 0) return this;
		if (t === 1) return this.copy(e);
		let n = this._x, r = this._y, i = this._z, a = this._w, o = a * e._w + n * e._x + r * e._y + i * e._z;
		if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = i, this;
		let s = 1 - o * o;
		if (s <= 2 ** -52) {
			let e = 1 - t;
			return this._w = e * a + t * this._w, this._x = e * n + t * this._x, this._y = e * r + t * this._y, this._z = e * i + t * this._z, this.normalize(), this._onChangeCallback(), this;
		}
		let c = Math.sqrt(s), l = Math.atan2(c, o), u = Math.sin((1 - t) * l) / c, d = Math.sin(t * l) / c;
		return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = r * u + this._y * d, this._z = i * u + this._z * d, this._onChangeCallback(), this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), r = 2 * Math.PI * Math.random(), i = 2 * Math.PI * Math.random();
		return this.set(t * Math.cos(r), n * Math.sin(i), n * Math.cos(i), t * Math.sin(r));
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	}
	fromArray(e, t = 0) {
		return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
	}
	fromBufferAttribute(e, t) {
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}, X = class e {
	constructor(t = 0, n = 0, r = 0) {
		e.prototype.isVector3 = !0, this.x = t, this.y = n, this.z = r;
	}
	set(e, t, n) {
		return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this;
	}
	multiplyVectors(e, t) {
		return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
	}
	applyEuler(e) {
		return this.applyQuaternion($s.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion($s.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = s * t + a * r - o * n, l = s * n + o * t - i * r, u = s * r + i * n - a * t, d = -i * t - a * n - o * r;
		return this.x = c * s + d * -i + l * -o - u * -a, this.y = l * s + d * -a + u * -i - c * -o, this.z = u * s + d * -o + c * -a - l * -i, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
	}
	clamp(e, t) {
		return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
	}
	clampScalar(e, t) {
		return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
	}
	cross(e) {
		return this.crossVectors(this, e);
	}
	crossVectors(e, t) {
		let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
		return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return Qs.copy(this).projectOnVector(e), this.sub(Qs);
	}
	reflect(e) {
		return this.sub(Qs.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(ns(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, t * 4);
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, t * 3);
	}
	setFromEuler(e) {
		return this.x = e._x, this.y = e._y, this.z = e._z, this;
	}
	setFromColor(e) {
		return this.x = e.r, this.y = e.g, this.z = e.b, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
	}
	randomDirection() {
		let e = (Math.random() - .5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
		return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}, Qs = /* @__PURE__ */ new X(), $s = /* @__PURE__ */ new Zs(), ec = class {
	constructor(e = new X(Infinity, Infinity, Infinity), t = new X(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(nc.fromArray(e, t));
		return this;
	}
	setFromBufferAttribute(e) {
		this.makeEmpty();
		for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(nc.fromBufferAttribute(e, t));
		return this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = nc.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	setFromObject(e, t = !1) {
		return this.makeEmpty(), this.expandByObject(e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	expandByObject(e, t = !1) {
		if (e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0) e.boundingBox === null && e.computeBoundingBox(), rc.copy(e.boundingBox), rc.applyMatrix4(e.matrixWorld), this.union(rc);
		else {
			let n = e.geometry;
			if (n !== void 0) if (t && n.attributes !== void 0 && n.attributes.position !== void 0) {
				let t = n.attributes.position;
				for (let n = 0, r = t.count; n < r; n++) nc.fromBufferAttribute(t, n).applyMatrix4(e.matrixWorld), this.expandByPoint(nc);
			} else n.boundingBox === null && n.computeBoundingBox(), rc.copy(n.boundingBox), rc.applyMatrix4(e.matrixWorld), this.union(rc);
		}
		let n = e.children;
		for (let e = 0, r = n.length; e < r; e++) this.expandByObject(n[e], t);
		return this;
	}
	containsPoint(e) {
		return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, nc), nc.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(uc), dc.subVectors(this.max, uc), ic.subVectors(e.a, uc), ac.subVectors(e.b, uc), oc.subVectors(e.c, uc), sc.subVectors(ac, ic), cc.subVectors(oc, ac), lc.subVectors(ic, oc);
		let t = [
			0,
			-sc.z,
			sc.y,
			0,
			-cc.z,
			cc.y,
			0,
			-lc.z,
			lc.y,
			sc.z,
			0,
			-sc.x,
			cc.z,
			0,
			-cc.x,
			lc.z,
			0,
			-lc.x,
			-sc.y,
			sc.x,
			0,
			-cc.y,
			cc.x,
			0,
			-lc.y,
			lc.x,
			0
		];
		return !mc(t, ic, ac, oc, dc) || (t = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], !mc(t, ic, ac, oc, dc)) ? !1 : (fc.crossVectors(sc, cc), t = [
			fc.x,
			fc.y,
			fc.z
		], mc(t, ic, ac, oc, dc));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, nc).distanceTo(e);
	}
	getBoundingSphere(e) {
		return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(nc).length() * .5), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() ? this : (tc[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), tc[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), tc[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), tc[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), tc[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), tc[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), tc[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), tc[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(tc), this);
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
}, tc = [
	/* @__PURE__ */ new X(),
	/* @__PURE__ */ new X(),
	/* @__PURE__ */ new X(),
	/* @__PURE__ */ new X(),
	/* @__PURE__ */ new X(),
	/* @__PURE__ */ new X(),
	/* @__PURE__ */ new X(),
	/* @__PURE__ */ new X()
], nc = /* @__PURE__ */ new X(), rc = /* @__PURE__ */ new ec(), ic = /* @__PURE__ */ new X(), ac = /* @__PURE__ */ new X(), oc = /* @__PURE__ */ new X(), sc = /* @__PURE__ */ new X(), cc = /* @__PURE__ */ new X(), lc = /* @__PURE__ */ new X(), uc = /* @__PURE__ */ new X(), dc = /* @__PURE__ */ new X(), fc = /* @__PURE__ */ new X(), pc = /* @__PURE__ */ new X();
function mc(e, t, n, r, i) {
	for (let a = 0, o = e.length - 3; a <= o; a += 3) {
		pc.fromArray(e, a);
		let o = i.x * Math.abs(pc.x) + i.y * Math.abs(pc.y) + i.z * Math.abs(pc.z), s = t.dot(pc), c = n.dot(pc), l = r.dot(pc);
		if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
	}
	return !0;
}
var hc = /* @__PURE__ */ new ec(), gc = /* @__PURE__ */ new X(), _c = /* @__PURE__ */ new X(), vc = class {
	constructor(e = new X(), t = -1) {
		this.center = e, this.radius = t;
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this;
	}
	setFromPoints(e, t) {
		let n = this.center;
		t === void 0 ? hc.setFromPoints(e).getCenter(n) : n.copy(t);
		let r = 0;
		for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
		return this.radius = Math.sqrt(r), this;
	}
	copy(e) {
		return this.center.copy(e.center), this.radius = e.radius, this;
	}
	isEmpty() {
		return this.radius < 0;
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), this.radius = -1, this;
	}
	containsPoint(e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius;
	}
	distanceToPoint(e) {
		return e.distanceTo(this.center) - this.radius;
	}
	intersectsSphere(e) {
		let t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		let n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
		gc.subVectors(e, this.center);
		let t = gc.lengthSq();
		if (t > this.radius * this.radius) {
			let e = Math.sqrt(t), n = (e - this.radius) * .5;
			this.center.addScaledVector(gc, n / e), this.radius += n;
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (_c.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(gc.copy(e.center).add(_c)), this.expandByPoint(gc.copy(e.center).sub(_c))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, yc = /* @__PURE__ */ new X(), bc = /* @__PURE__ */ new X(), xc = /* @__PURE__ */ new X(), Sc = /* @__PURE__ */ new X(), Cc = /* @__PURE__ */ new X(), wc = /* @__PURE__ */ new X(), Tc = /* @__PURE__ */ new X(), Ec = class {
	constructor(e = new X(), t = new X(0, 0, -1)) {
		this.origin = e, this.direction = t;
	}
	set(e, t) {
		return this.origin.copy(e), this.direction.copy(t), this;
	}
	copy(e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
	}
	at(e, t) {
		return t.copy(this.origin).addScaledVector(this.direction, e);
	}
	lookAt(e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this;
	}
	recast(e) {
		return this.origin.copy(this.at(e, yc)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		let n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		let t = yc.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (yc.copy(this.origin).addScaledVector(this.direction, t), yc.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, n, r) {
		bc.copy(e).add(t).multiplyScalar(.5), xc.copy(t).sub(e).normalize(), Sc.copy(this.origin).sub(bc);
		let i = e.distanceTo(t) * .5, a = -this.direction.dot(xc), o = Sc.dot(this.direction), s = -Sc.dot(xc), c = Sc.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
		if (l > 0) if (u = a * s - o, d = a * o - s, p = i * l, u >= 0) if (d >= -p) if (d <= p) {
			let e = 1 / l;
			u *= e, d *= e, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
		} else d = i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		else d = -i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		else d <= -p ? (u = Math.max(0, -(-a * i + o)), d = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0, d = Math.min(Math.max(-i, -s), i), f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), d = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c);
		else d = a > 0 ? -i : i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(bc).addScaledVector(xc, d), f;
	}
	intersectSphere(e, t) {
		yc.subVectors(e.center, this.origin);
		let n = yc.dot(this.direction), r = yc.dot(yc) - n * n, i = e.radius * e.radius;
		if (r > i) return null;
		let a = Math.sqrt(i - r), o = n - a, s = n + a;
		return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
	}
	intersectsSphere(e) {
		return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		let t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		let n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	}
	intersectPlane(e, t) {
		let n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	}
	intersectsPlane(e) {
		let t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
		return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), l >= 0 ? (i = (e.min.y - d.y) * l, a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l, a = (e.min.y - d.y) * l), n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t);
	}
	intersectsBox(e) {
		return this.intersectBox(e, yc) !== null;
	}
	intersectTriangle(e, t, n, r, i) {
		Cc.subVectors(t, e), wc.subVectors(n, e), Tc.crossVectors(Cc, wc);
		let a = this.direction.dot(Tc), o;
		if (a > 0) {
			if (r) return null;
			o = 1;
		} else if (a < 0) o = -1, a = -a;
		else return null;
		Sc.subVectors(this.origin, e);
		let s = o * this.direction.dot(wc.crossVectors(Sc, wc));
		if (s < 0) return null;
		let c = o * this.direction.dot(Cc.cross(Sc));
		if (c < 0 || s + c > a) return null;
		let l = -o * Sc.dot(Tc);
		return l < 0 ? null : this.at(l / a, i);
	}
	applyMatrix4(e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
	}
	equals(e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Dc = class e {
	constructor(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
		e.prototype.isMatrix4 = !0, this.elements = [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		], t !== void 0 && this.set(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g);
	}
	set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		let g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		let t = this.elements, n = e.elements, r = 1 / Oc.setFromMatrixColumn(e, 0).length(), i = 1 / Oc.setFromMatrixColumn(e, 1).length(), a = 1 / Oc.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
		} else if (e.order === "YXZ") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
		} else if (e.order === "ZXY") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
		} else if (e.order === "ZYX") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
		} else if (e.order === "YZX") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
		} else if (e.order === "XZY") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(Ac, e, jc);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return Pc.subVectors(e, t), Pc.lengthSq() === 0 && (Pc.z = 1), Pc.normalize(), Mc.crossVectors(n, Pc), Mc.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Pc.x += 1e-4 : Pc.z += 1e-4, Pc.normalize(), Mc.crossVectors(n, Pc)), Mc.normalize(), Nc.crossVectors(Pc, Mc), r[0] = Mc.x, r[4] = Nc.x, r[8] = Pc.x, r[1] = Mc.y, r[5] = Nc.y, r[9] = Pc.y, r[2] = Mc.z, r[6] = Nc.z, r[10] = Pc.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], k = r[2], A = r[6], j = r[10], M = r[14], N = r[3], ee = r[7], P = r[11], te = r[15];
		return i[0] = a * x + o * T + s * k + c * N, i[4] = a * S + o * E + s * A + c * ee, i[8] = a * C + o * D + s * j + c * P, i[12] = a * w + o * O + s * M + c * te, i[1] = l * x + u * T + d * k + f * N, i[5] = l * S + u * E + d * A + f * ee, i[9] = l * C + u * D + d * j + f * P, i[13] = l * w + u * O + d * M + f * te, i[2] = p * x + m * T + h * k + g * N, i[6] = p * S + m * E + h * A + g * ee, i[10] = p * C + m * D + h * j + g * P, i[14] = p * w + m * O + h * M + g * te, i[3] = _ * x + v * T + y * k + b * N, i[7] = _ * S + v * E + y * A + b * ee, i[11] = _ * C + v * D + y * j + b * P, i[15] = _ * w + v * O + y * M + b * te, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15];
		return p * (+i * s * u - r * c * u - i * o * d + n * c * d + r * o * f - n * s * f) + m * (+t * s * f - t * c * d + i * a * d - r * a * f + r * c * l - i * s * l) + h * (+t * c * u - t * o * f - i * a * u + n * a * f + i * o * l - n * c * l) + g * (-r * o * l - t * s * u + t * o * d + r * a * u - n * a * d + n * s * l);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = u * h * c - m * d * c + m * s * f - o * h * f - u * s * g + o * d * g, v = p * d * c - l * h * c - p * s * f + a * h * f + l * s * g - a * d * g, y = l * m * c - p * u * c + p * o * f - a * m * f - l * o * g + a * u * g, b = p * u * s - l * m * s - p * o * d + a * m * d + l * o * h - a * u * h, x = t * _ + n * v + r * y + i * b;
		if (x === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let S = 1 / x;
		return e[0] = _ * S, e[1] = (m * d * i - u * h * i - m * r * f + n * h * f + u * r * g - n * d * g) * S, e[2] = (o * h * i - m * s * i + m * r * c - n * h * c - o * r * g + n * s * g) * S, e[3] = (u * s * i - o * d * i - u * r * c + n * d * c + o * r * f - n * s * f) * S, e[4] = v * S, e[5] = (l * h * i - p * d * i + p * r * f - t * h * f - l * r * g + t * d * g) * S, e[6] = (p * s * i - a * h * i - p * r * c + t * h * c + a * r * g - t * s * g) * S, e[7] = (a * d * i - l * s * i + l * r * c - t * d * c - a * r * f + t * s * f) * S, e[8] = y * S, e[9] = (p * u * i - l * m * i - p * n * f + t * m * f + l * n * g - t * u * g) * S, e[10] = (a * m * i - p * o * i + p * n * c - t * m * c - a * n * g + t * o * g) * S, e[11] = (l * o * i - a * u * i - l * n * c + t * u * c + a * n * f - t * o * f) * S, e[12] = b * S, e[13] = (l * m * r - p * u * r + p * n * d - t * m * d - l * n * h + t * u * h) * S, e[14] = (p * o * r - a * m * r - p * n * s + t * m * s + a * n * h - t * o * h) * S, e[15] = (a * u * r - l * o * r + l * n * s - t * u * s - a * n * d + t * o * d) * S, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
		return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
		return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements, i = Oc.set(r[0], r[1], r[2]).length(), a = Oc.set(r[4], r[5], r[6]).length(), o = Oc.set(r[8], r[9], r[10]).length();
		this.determinant() < 0 && (i = -i), e.x = r[12], e.y = r[13], e.z = r[14], kc.copy(this);
		let s = 1 / i, c = 1 / a, l = 1 / o;
		return kc.elements[0] *= s, kc.elements[1] *= s, kc.elements[2] *= s, kc.elements[4] *= c, kc.elements[5] *= c, kc.elements[6] *= c, kc.elements[8] *= l, kc.elements[9] *= l, kc.elements[10] *= l, t.setFromRotationMatrix(kc), n.x = i, n.y = a, n.z = o, this;
	}
	makePerspective(e, t, n, r, i, a, o = Yo) {
		let s = this.elements, c = 2 * i / (t - e), l = 2 * i / (n - r), u = (t + e) / (t - e), d = (n + r) / (n - r), f, p;
		if (o === 2e3) f = -(a + i) / (a - i), p = -2 * a * i / (a - i);
		else if (o === 2001) f = -a / (a - i), p = -a * i / (a - i);
		else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
		return s[0] = c, s[4] = 0, s[8] = u, s[12] = 0, s[1] = 0, s[5] = l, s[9] = d, s[13] = 0, s[2] = 0, s[6] = 0, s[10] = f, s[14] = p, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, o = Yo) {
		let s = this.elements, c = 1 / (t - e), l = 1 / (n - r), u = 1 / (a - i), d = (t + e) * c, f = (n + r) * l, p, m;
		if (o === 2e3) p = (a + i) * u, m = -2 * u;
		else if (o === 2001) p = i * u, m = -1 * u;
		else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
		return s[0] = 2 * c, s[4] = 0, s[8] = 0, s[12] = -d, s[1] = 0, s[5] = 2 * l, s[9] = 0, s[13] = -f, s[2] = 0, s[6] = 0, s[10] = m, s[14] = -p, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
}, Oc = /* @__PURE__ */ new X(), kc = /* @__PURE__ */ new Dc(), Ac = /* @__PURE__ */ new X(0, 0, 0), jc = /* @__PURE__ */ new X(1, 1, 1), Mc = /* @__PURE__ */ new X(), Nc = /* @__PURE__ */ new X(), Pc = /* @__PURE__ */ new X(), Fc = /* @__PURE__ */ new Dc(), Ic = /* @__PURE__ */ new Zs(), Lc = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(e) {
		this._order = e, this._onChangeCallback();
	}
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], l = r[9], u = r[2], d = r[6], f = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(ns(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-ns(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(ns(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
				break;
			case "ZYX":
				this._y = Math.asin(-ns(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
				break;
			case "YZX":
				this._z = Math.asin(ns(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, f));
				break;
			case "XZY":
				this._z = Math.asin(-ns(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f), this._y = 0);
				break;
			default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return Fc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Fc, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return Ic.setFromEuler(this), this.setFromQuaternion(Ic, e);
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	}
	fromArray(e) {
		return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
Lc.DEFAULT_ORDER = "XYZ";
var Rc = class {
	constructor() {
		this.mask = 1;
	}
	set(e) {
		this.mask = (1 << e | 0) >>> 0;
	}
	enable(e) {
		this.mask |= 1 << e | 0;
	}
	enableAll() {
		this.mask = -1;
	}
	toggle(e) {
		this.mask ^= 1 << e | 0;
	}
	disable(e) {
		this.mask &= ~(1 << e | 0);
	}
	disableAll() {
		this.mask = 0;
	}
	test(e) {
		return (this.mask & e.mask) !== 0;
	}
	isEnabled(e) {
		return (this.mask & (1 << e | 0)) != 0;
	}
}, zc = 0, Bc = /* @__PURE__ */ new X(), Vc = /* @__PURE__ */ new Zs(), Hc = /* @__PURE__ */ new Dc(), Uc = /* @__PURE__ */ new X(), Wc = /* @__PURE__ */ new X(), Gc = /* @__PURE__ */ new X(), Kc = /* @__PURE__ */ new Zs(), qc = /* @__PURE__ */ new X(1, 0, 0), Jc = /* @__PURE__ */ new X(0, 1, 0), Yc = /* @__PURE__ */ new X(0, 0, 1), Xc = { type: "added" }, Zc = { type: "removed" }, Qc = class e extends Xo {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: zc++ }), this.uuid = ts(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new X(), n = new Lc(), r = new Zs(), i = new X(1, 1, 1);
		function a() {
			r.setFromEuler(n, !1);
		}
		function o() {
			n.setFromQuaternion(r, void 0, !1);
		}
		n._onChange(a), r._onChange(o), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new Dc() },
			normalMatrix: { value: new Y() }
		}), this.matrix = new Dc(), this.matrixWorld = new Dc(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Rc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
	}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this;
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0);
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e);
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e);
	}
	rotateOnAxis(e, t) {
		return Vc.setFromAxisAngle(e, t), this.quaternion.multiply(Vc), this;
	}
	rotateOnWorldAxis(e, t) {
		return Vc.setFromAxisAngle(e, t), this.quaternion.premultiply(Vc), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(qc, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(Jc, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(Yc, e);
	}
	translateOnAxis(e, t) {
		return Bc.copy(e).applyQuaternion(this.quaternion), this.position.add(Bc.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(qc, e);
	}
	translateY(e) {
		return this.translateOnAxis(Jc, e);
	}
	translateZ(e) {
		return this.translateOnAxis(Yc, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Hc.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? Uc.copy(e) : Uc.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), Wc.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Hc.lookAt(Wc, Uc, this.up) : Hc.lookAt(Uc, Wc, this.up), this.quaternion.setFromRotationMatrix(Hc), r && (Hc.extractRotation(r.matrixWorld), Vc.setFromRotationMatrix(Hc), this.quaternion.premultiply(Vc.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Xc)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Zc)), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), Hc.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Hc.multiply(e.parent.matrixWorld)), e.applyMatrix4(Hc), this.add(e), e.updateWorldMatrix(!1, !0), this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t) {
		let n = [];
		this[e] === t && n.push(this);
		for (let r = 0, i = this.children.length; r < i; r++) {
			let i = this.children[r].getObjectsByProperty(e, t);
			i.length > 0 && (n = n.concat(i));
		}
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Wc, e, Gc), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Wc, Kc, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n];
			(r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
		}
	}
	updateWorldMatrix(e, t) {
		let n = this.parent;
		if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
			let e = this.children;
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t];
				n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!1, !0);
			}
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
		t && (e = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {},
			nodes: {}
		}, n.metadata = {
			version: 4.6,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON()));
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
			let t = [];
			for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
			r.material = t;
		} else r.material = i(e.materials, this.material);
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
};
Qc.DEFAULT_UP = /* @__PURE__ */ new X(0, 1, 0), Qc.DEFAULT_MATRIX_AUTO_UPDATE = !0, Qc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var $c = /* @__PURE__ */ new X(), el = /* @__PURE__ */ new X(), tl = /* @__PURE__ */ new X(), nl = /* @__PURE__ */ new X(), rl = /* @__PURE__ */ new X(), il = /* @__PURE__ */ new X(), al = /* @__PURE__ */ new X(), ol = /* @__PURE__ */ new X(), sl = /* @__PURE__ */ new X(), cl = /* @__PURE__ */ new X(), ll = !1, ul = class e {
	constructor(e = new X(), t = new X(), n = new X()) {
		this.a = e, this.b = t, this.c = n;
	}
	static getNormal(e, t, n, r) {
		r.subVectors(n, t), $c.subVectors(e, t), r.cross($c);
		let i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	}
	static getBarycoord(e, t, n, r, i) {
		$c.subVectors(r, t), el.subVectors(n, t), tl.subVectors(e, t);
		let a = $c.dot($c), o = $c.dot(el), s = $c.dot(tl), c = el.dot(el), l = el.dot(tl), u = a * c - o * o;
		if (u === 0) return i.set(-2, -1, -1);
		let d = 1 / u, f = (c * s - o * l) * d, p = (a * l - o * s) * d;
		return i.set(1 - f - p, p, f);
	}
	static containsPoint(e, t, n, r) {
		return this.getBarycoord(e, t, n, r, nl), nl.x >= 0 && nl.y >= 0 && nl.x + nl.y <= 1;
	}
	static getUV(e, t, n, r, i, a, o, s) {
		return ll === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), ll = !0), this.getInterpolation(e, t, n, r, i, a, o, s);
	}
	static getInterpolation(e, t, n, r, i, a, o, s) {
		return this.getBarycoord(e, t, n, r, nl), s.setScalar(0), s.addScaledVector(i, nl.x), s.addScaledVector(a, nl.y), s.addScaledVector(o, nl.z), s;
	}
	static isFrontFacing(e, t, n, r) {
		return $c.subVectors(n, t), el.subVectors(e, t), $c.cross(el).dot(r) < 0;
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	}
	setFromPointsAndIndices(e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	}
	setFromAttributeAndIndices(e, t, n, r) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return $c.subVectors(this.c, this.b), el.subVectors(this.a, this.b), $c.cross(el).length() * .5;
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}
	getNormal(t) {
		return e.getNormal(this.a, this.b, this.c, t);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(t, n) {
		return e.getBarycoord(t, this.a, this.b, this.c, n);
	}
	getUV(t, n, r, i, a) {
		return ll === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), ll = !0), e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	getInterpolation(t, n, r, i, a) {
		return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	containsPoint(t) {
		return e.containsPoint(t, this.a, this.b, this.c);
	}
	isFrontFacing(t) {
		return e.isFrontFacing(this.a, this.b, this.c, t);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		let n = this.a, r = this.b, i = this.c, a, o;
		rl.subVectors(r, n), il.subVectors(i, n), ol.subVectors(e, n);
		let s = rl.dot(ol), c = il.dot(ol);
		if (s <= 0 && c <= 0) return t.copy(n);
		sl.subVectors(e, r);
		let l = rl.dot(sl), u = il.dot(sl);
		if (l >= 0 && u <= l) return t.copy(r);
		let d = s * u - l * c;
		if (d <= 0 && s >= 0 && l <= 0) return a = s / (s - l), t.copy(n).addScaledVector(rl, a);
		cl.subVectors(e, i);
		let f = rl.dot(cl), p = il.dot(cl);
		if (p >= 0 && f <= p) return t.copy(i);
		let m = f * c - s * p;
		if (m <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(il, o);
		let h = l * p - f * u;
		if (h <= 0 && u - l >= 0 && f - p >= 0) return al.subVectors(i, r), o = (u - l) / (u - l + (f - p)), t.copy(r).addScaledVector(al, o);
		let g = 1 / (h + m + d);
		return a = m * g, o = d * g, t.copy(n).addScaledVector(rl, a).addScaledVector(il, o);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}, dl = 0, fl = class extends Xo {
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: dl++ }), this.uuid = ts(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ko, this.stencilZFail = Ko, this.stencilZPass = Ko, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
	}
	onBuild() {}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0) for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			if (r === void 0) {
				console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
				continue;
			}
			r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		let n = { metadata: {
			version: 4.6,
			type: "Material",
			generator: "Material.toJSON"
		} };
		n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = this.alphaHash), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
		function r(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
		if (t) {
			let t = r(e.textures), i = r(e.images);
			t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
		}
		return n;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		let t = e.clippingPlanes, n = null;
		if (t !== null) {
			let e = t.length;
			n = Array(e);
			for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
}, pl = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, ml = {
	h: 0,
	s: 0,
	l: 0
}, hl = {
	h: 0,
	s: 0,
	l: 0
};
function gl(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var Z = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = Uo) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Rs.toWorkingColorSpace(this, t), this;
	}
	setRGB(e, t, n, r = Rs.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, Rs.toWorkingColorSpace(this, r), this;
	}
	setHSL(e, t, n, r = Rs.workingColorSpace) {
		if (e = rs(e, 1), t = ns(t, 0, 1), n = ns(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = gl(i, r, e + 1 / 3), this.g = gl(i, r, e), this.b = gl(i, r, e - 1 / 3);
		}
		return Rs.toWorkingColorSpace(this, r), this;
	}
	setStyle(e, t = Uo) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], o = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: console.warn("THREE.Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			console.warn("THREE.Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = Uo) {
		let n = pl[e.toLowerCase()];
		return n === void 0 ? console.warn("THREE.Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = As(e.r), this.g = As(e.g), this.b = As(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = js(e.r), this.g = js(e.g), this.b = js(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = Uo) {
		return Rs.fromWorkingColorSpace(_l.copy(this), e), Math.round(ns(_l.r * 255, 0, 255)) * 65536 + Math.round(ns(_l.g * 255, 0, 255)) * 256 + Math.round(ns(_l.b * 255, 0, 255));
	}
	getHexString(e = Uo) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = Rs.workingColorSpace) {
		Rs.fromWorkingColorSpace(_l.copy(this), t);
		let n = _l.r, r = _l.g, i = _l.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
		if (o === a) s = 0, c = 0;
		else {
			let e = a - o;
			switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
				case n:
					s = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					s = (i - n) / e + 2;
					break;
				case i:
					s = (n - r) / e + 4;
					break;
			}
			s /= 6;
		}
		return e.h = s, e.s = c, e.l = l, e;
	}
	getRGB(e, t = Rs.workingColorSpace) {
		return Rs.fromWorkingColorSpace(_l.copy(this), t), e.r = _l.r, e.g = _l.g, e.b = _l.b, e;
	}
	getStyle(e = Uo) {
		Rs.fromWorkingColorSpace(_l.copy(this), e);
		let t = _l.r, n = _l.g, r = _l.b;
		return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(ml), ml.h += e, ml.s += t, ml.l += n, this.setHSL(ml.h, ml.s, ml.l), this;
	}
	add(e) {
		return this.r += e.r, this.g += e.g, this.b += e.b, this;
	}
	addColors(e, t) {
		return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
	}
	addScalar(e) {
		return this.r += e, this.g += e, this.b += e, this;
	}
	sub(e) {
		return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
	}
	multiply(e) {
		return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
	}
	multiplyScalar(e) {
		return this.r *= e, this.g *= e, this.b *= e, this;
	}
	lerp(e, t) {
		return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
	}
	lerpColors(e, t, n) {
		return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
	}
	lerpHSL(e, t) {
		this.getHSL(ml), e.getHSL(hl);
		let n = os(ml.h, hl.h, t), r = os(ml.s, hl.s, t), i = os(ml.l, hl.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	}
	fromArray(e, t = 0) {
		return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
	}
	fromBufferAttribute(e, t) {
		return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
	}
	toJSON() {
		return this.getHex();
	}
	*[Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b;
	}
}, _l = /* @__PURE__ */ new Z();
Z.NAMES = pl;
var vl = class extends fl {
	constructor(e) {
		super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Z(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, yl = /* @__PURE__ */ new X(), bl = /* @__PURE__ */ new J(), xl = class {
	constructor(e, t, n = !1) {
		if (Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = qo, this.updateRange = {
			offset: 0,
			count: -1
		}, this.gpuType = Do, this.version = 0;
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) bl.fromBufferAttribute(this, t), bl.applyMatrix3(e), this.setXY(t, bl.x, bl.y);
		else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) yl.fromBufferAttribute(this, t), yl.applyMatrix3(e), this.setXYZ(t, yl.x, yl.y, yl.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) yl.fromBufferAttribute(this, t), yl.applyMatrix4(e), this.setXYZ(t, yl.x, yl.y, yl.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) yl.fromBufferAttribute(this, t), yl.applyNormalMatrix(e), this.setXYZ(t, yl.x, yl.y, yl.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) yl.fromBufferAttribute(this, t), yl.transformDirection(e), this.setXYZ(t, yl.x, yl.y, yl.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.itemSize + t];
		return this.normalized && (n = xs(n, this.array)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = Ss(n, this.array)), this.array[e * this.itemSize + t] = n, this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = xs(t, this.array)), t;
	}
	setX(e, t) {
		return this.normalized && (t = Ss(t, this.array)), this.array[e * this.itemSize] = t, this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = xs(t, this.array)), t;
	}
	setY(e, t) {
		return this.normalized && (t = Ss(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = xs(t, this.array)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = Ss(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = xs(t, this.array)), t;
	}
	setW(e, t) {
		return this.normalized && (t = Ss(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = Ss(t, this.array), n = Ss(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = Ss(t, this.array), n = Ss(n, this.array), r = Ss(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = Ss(t, this.array), n = Ss(n, this.array), r = Ss(r, this.array), i = Ss(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		let e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
	}
}, Sl = class extends xl {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n);
	}
}, Cl = class extends xl {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n);
	}
}, wl = class extends xl {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n);
	}
}, Tl = 0, El = /* @__PURE__ */ new Dc(), Dl = /* @__PURE__ */ new Qc(), Ol = /* @__PURE__ */ new X(), kl = /* @__PURE__ */ new ec(), Al = /* @__PURE__ */ new ec(), jl = /* @__PURE__ */ new X(), Ml = class e extends Xo {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Tl++ }), this.uuid = ts(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: Infinity
		}, this.userData = {};
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return Array.isArray(e) ? this.index = new (Ts(e) ? Cl : Sl)(e, 1) : this.index = e, this;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	setAttribute(e, t) {
		return this.attributes[e] = t, this;
	}
	deleteAttribute(e) {
		return delete this.attributes[e], this;
	}
	hasAttribute(e) {
		return this.attributes[e] !== void 0;
	}
	addGroup(e, t, n = 0) {
		this.groups.push({
			start: e,
			count: t,
			materialIndex: n
		});
	}
	clearGroups() {
		this.groups = [];
	}
	setDrawRange(e, t) {
		this.drawRange.start = e, this.drawRange.count = t;
	}
	applyMatrix4(e) {
		let t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		let n = this.attributes.normal;
		if (n !== void 0) {
			let t = new Y().getNormalMatrix(e);
			n.applyNormalMatrix(t), n.needsUpdate = !0;
		}
		let r = this.attributes.tangent;
		return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
	}
	applyQuaternion(e) {
		return El.makeRotationFromQuaternion(e), this.applyMatrix4(El), this;
	}
	rotateX(e) {
		return El.makeRotationX(e), this.applyMatrix4(El), this;
	}
	rotateY(e) {
		return El.makeRotationY(e), this.applyMatrix4(El), this;
	}
	rotateZ(e) {
		return El.makeRotationZ(e), this.applyMatrix4(El), this;
	}
	translate(e, t, n) {
		return El.makeTranslation(e, t, n), this.applyMatrix4(El), this;
	}
	scale(e, t, n) {
		return El.makeScale(e, t, n), this.applyMatrix4(El), this;
	}
	lookAt(e) {
		return Dl.lookAt(e), Dl.updateMatrix(), this.applyMatrix4(Dl.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(Ol).negate(), this.translate(Ol.x, Ol.y, Ol.z), this;
	}
	setFromPoints(e) {
		let t = [];
		for (let n = 0, r = e.length; n < r; n++) {
			let r = e[n];
			t.push(r.x, r.y, r.z || 0);
		}
		return this.setAttribute("position", new wl(t, 3)), this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new ec());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set \"mesh.frustumCulled\" to \"false\".", this), this.boundingBox.set(new X(-Infinity, -Infinity, -Infinity), new X(Infinity, Infinity, Infinity));
			return;
		}
		if (e !== void 0) {
			if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				kl.setFromBufferAttribute(n), this.morphTargetsRelative ? (jl.addVectors(this.boundingBox.min, kl.min), this.boundingBox.expandByPoint(jl), jl.addVectors(this.boundingBox.max, kl.max), this.boundingBox.expandByPoint(jl)) : (this.boundingBox.expandByPoint(kl.min), this.boundingBox.expandByPoint(kl.max));
			}
		} else this.boundingBox.makeEmpty();
		(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error("THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new vc());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set \"mesh.frustumCulled\" to \"false\".", this), this.boundingSphere.set(new X(), Infinity);
			return;
		}
		if (e) {
			let n = this.boundingSphere.center;
			if (kl.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				Al.setFromBufferAttribute(n), this.morphTargetsRelative ? (jl.addVectors(kl.min, Al.min), kl.expandByPoint(jl), jl.addVectors(kl.max, Al.max), kl.expandByPoint(jl)) : (kl.expandByPoint(Al.min), kl.expandByPoint(Al.max));
			}
			kl.getCenter(n);
			let r = 0;
			for (let t = 0, i = e.count; t < i; t++) jl.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(jl));
			if (t) for (let i = 0, a = t.length; i < a; i++) {
				let a = t[i], o = this.morphTargetsRelative;
				for (let t = 0, i = a.count; t < i; t++) jl.fromBufferAttribute(a, t), o && (Ol.fromBufferAttribute(e, t), jl.add(Ol)), r = Math.max(r, n.distanceToSquared(jl));
			}
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error("THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeTangents() {
		let e = this.index, t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			return;
		}
		let n = e.array, r = t.position.array, i = t.normal.array, a = t.uv.array, o = r.length / 3;
		this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new xl(new Float32Array(4 * o), 4));
		let s = this.getAttribute("tangent").array, c = [], l = [];
		for (let e = 0; e < o; e++) c[e] = new X(), l[e] = new X();
		let u = new X(), d = new X(), f = new X(), p = new J(), m = new J(), h = new J(), g = new X(), _ = new X();
		function v(e, t, n) {
			u.fromArray(r, e * 3), d.fromArray(r, t * 3), f.fromArray(r, n * 3), p.fromArray(a, e * 2), m.fromArray(a, t * 2), h.fromArray(a, n * 2), d.sub(u), f.sub(u), m.sub(p), h.sub(p);
			let i = 1 / (m.x * h.y - h.x * m.y);
			isFinite(i) && (g.copy(d).multiplyScalar(h.y).addScaledVector(f, -m.y).multiplyScalar(i), _.copy(f).multiplyScalar(m.x).addScaledVector(d, -h.x).multiplyScalar(i), c[e].add(g), c[t].add(g), c[n].add(g), l[e].add(_), l[t].add(_), l[n].add(_));
		}
		let y = this.groups;
		y.length === 0 && (y = [{
			start: 0,
			count: n.length
		}]);
		for (let e = 0, t = y.length; e < t; ++e) {
			let t = y[e], r = t.start, i = t.count;
			for (let e = r, t = r + i; e < t; e += 3) v(n[e + 0], n[e + 1], n[e + 2]);
		}
		let b = new X(), x = new X(), S = new X(), C = new X();
		function w(e) {
			S.fromArray(i, e * 3), C.copy(S);
			let t = c[e];
			b.copy(t), b.sub(S.multiplyScalar(S.dot(t))).normalize(), x.crossVectors(C, t);
			let n = x.dot(l[e]) < 0 ? -1 : 1;
			s[e * 4] = b.x, s[e * 4 + 1] = b.y, s[e * 4 + 2] = b.z, s[e * 4 + 3] = n;
		}
		for (let e = 0, t = y.length; e < t; ++e) {
			let t = y[e], r = t.start, i = t.count;
			for (let e = r, t = r + i; e < t; e += 3) w(n[e + 0]), w(n[e + 1]), w(n[e + 2]);
		}
	}
	computeVertexNormals() {
		let e = this.index, t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0) n = new xl(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
			else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
			let r = new X(), i = new X(), a = new X(), o = new X(), s = new X(), c = new X(), l = new X(), u = new X();
			if (e) for (let d = 0, f = e.count; d < f; d += 3) {
				let f = e.getX(d + 0), p = e.getX(d + 1), m = e.getX(d + 2);
				r.fromBufferAttribute(t, f), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), o.fromBufferAttribute(n, f), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, m), o.add(l), s.add(l), c.add(l), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(m, c.x, c.y, c.z);
			}
			else for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), n.setXYZ(e + 0, l.x, l.y, l.z), n.setXYZ(e + 1, l.x, l.y, l.z), n.setXYZ(e + 2, l.x, l.y, l.z);
			this.normalizeNormals(), n.needsUpdate = !0;
		}
	}
	normalizeNormals() {
		let e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) jl.fromBufferAttribute(e, t), jl.normalize(), e.setXYZ(t, jl.x, jl.y, jl.z);
	}
	toNonIndexed() {
		function t(e, t) {
			let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0;
			for (let i = 0, c = t.length; i < c; i++) {
				o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
				for (let e = 0; e < r; e++) a[s++] = n[o++];
			}
			return new xl(a, r, i);
		}
		if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		let n = new e(), r = this.index.array, i = this.attributes;
		for (let e in i) {
			let a = i[e], o = t(a, r);
			n.setAttribute(e, o);
		}
		let a = this.morphAttributes;
		for (let e in a) {
			let i = [], o = a[e];
			for (let e = 0, n = o.length; e < n; e++) {
				let n = o[e], a = t(n, r);
				i.push(a);
			}
			n.morphAttributes[e] = i;
		}
		n.morphTargetsRelative = this.morphTargetsRelative;
		let o = this.groups;
		for (let e = 0, t = o.length; e < t; e++) {
			let t = o[e];
			n.addGroup(t.start, t.count, t.materialIndex);
		}
		return n;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.6,
			type: "BufferGeometry",
			generator: "BufferGeometry.toJSON"
		} };
		if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
			let t = this.parameters;
			for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		let t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		let n = this.attributes;
		for (let t in n) {
			let r = n[t];
			e.data.attributes[t] = r.toJSON(e.data);
		}
		let r = {}, i = !1;
		for (let t in this.morphAttributes) {
			let n = this.morphAttributes[t], a = [];
			for (let t = 0, r = n.length; t < r; t++) {
				let r = n[t];
				a.push(r.toJSON(e.data));
			}
			a.length > 0 && (r[t] = a, i = !0);
		}
		i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
		let a = this.groups;
		a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
		let o = this.boundingSphere;
		return o !== null && (e.data.boundingSphere = {
			center: o.center.toArray(),
			radius: o.radius
		}), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		let t = {};
		this.name = e.name;
		let n = e.index;
		n !== null && this.setIndex(n.clone(t));
		let r = e.attributes;
		for (let e in r) {
			let n = r[e];
			this.setAttribute(e, n.clone(t));
		}
		let i = e.morphAttributes;
		for (let e in i) {
			let n = [], r = i[e];
			for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
			this.morphAttributes[e] = n;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		let a = e.groups;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e];
			this.addGroup(t.start, t.count, t.materialIndex);
		}
		let o = e.boundingBox;
		o !== null && (this.boundingBox = o.clone());
		let s = e.boundingSphere;
		return s !== null && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Nl = /* @__PURE__ */ new Dc(), Pl = /* @__PURE__ */ new Ec(), Fl = /* @__PURE__ */ new vc(), Il = /* @__PURE__ */ new X(), Ll = /* @__PURE__ */ new X(), Rl = /* @__PURE__ */ new X(), zl = /* @__PURE__ */ new X(), Bl = /* @__PURE__ */ new X(), Vl = /* @__PURE__ */ new X(), Hl = /* @__PURE__ */ new J(), Ul = /* @__PURE__ */ new J(), Wl = /* @__PURE__ */ new J(), Gl = /* @__PURE__ */ new X(), Kl = /* @__PURE__ */ new X(), ql = /* @__PURE__ */ new X(), Jl = /* @__PURE__ */ new X(), Yl = /* @__PURE__ */ new X(), Xl = class extends Qc {
	constructor(e = new Ml(), t = new vl()) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
	getVertexPosition(e, t) {
		let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
		t.fromBufferAttribute(r, e);
		let o = this.morphTargetInfluences;
		if (i && o) {
			Vl.set(0, 0, 0);
			for (let n = 0, r = i.length; n < r; n++) {
				let r = o[n], s = i[n];
				r !== 0 && (Bl.fromBufferAttribute(s, e), a ? Vl.addScaledVector(Bl, r) : Vl.addScaledVector(Bl.sub(t), r));
			}
			t.add(Vl);
		}
		return t;
	}
	raycast(e, t) {
		let n = this.geometry, r = this.material, i = this.matrixWorld;
		r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Fl.copy(n.boundingSphere), Fl.applyMatrix4(i), Pl.copy(e.ray).recast(e.near), !(Fl.containsPoint(Pl.origin) === !1 && (Pl.intersectSphere(Fl, Il) === null || Pl.origin.distanceToSquared(Il) > (e.far - e.near) ** 2)) && (Nl.copy(i).invert(), Pl.copy(e.ray).applyMatrix4(Nl), !(n.boundingBox !== null && Pl.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Pl)));
	}
	_computeIntersections(e, t, n) {
		let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
		if (o !== null) if (Array.isArray(a)) for (let i = 0, s = d.length; i < s; i++) {
			let s = d[i], p = a[s.materialIndex], m = Math.max(s.start, f.start), h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
			for (let i = m, a = h; i < a; i += 3) {
				let a = o.getX(i), d = o.getX(i + 1), f = o.getX(i + 2);
				r = Ql(this, p, e, n, c, l, u, a, d, f), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
			}
		}
		else {
			let i = Math.max(0, f.start), s = Math.min(o.count, f.start + f.count);
			for (let d = i, f = s; d < f; d += 3) {
				let i = o.getX(d), s = o.getX(d + 1), f = o.getX(d + 2);
				r = Ql(this, a, e, n, c, l, u, i, s, f), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
			}
		}
		else if (s !== void 0) if (Array.isArray(a)) for (let i = 0, o = d.length; i < o; i++) {
			let o = d[i], p = a[o.materialIndex], m = Math.max(o.start, f.start), h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
			for (let i = m, a = h; i < a; i += 3) {
				let a = i, s = i + 1, d = i + 2;
				r = Ql(this, p, e, n, c, l, u, a, s, d), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = o.materialIndex, t.push(r));
			}
		}
		else {
			let i = Math.max(0, f.start), o = Math.min(s.count, f.start + f.count);
			for (let s = i, d = o; s < d; s += 3) {
				let i = s, o = s + 1, d = s + 2;
				r = Ql(this, a, e, n, c, l, u, i, o, d), r && (r.faceIndex = Math.floor(s / 3), t.push(r));
			}
		}
	}
};
function Zl(e, t, n, r, i, a, o, s) {
	let c;
	if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s), c === null) return null;
	Yl.copy(s), Yl.applyMatrix4(e.matrixWorld);
	let l = n.ray.origin.distanceTo(Yl);
	return l < n.near || l > n.far ? null : {
		distance: l,
		point: Yl.clone(),
		object: e
	};
}
function Ql(e, t, n, r, i, a, o, s, c, l) {
	e.getVertexPosition(s, Ll), e.getVertexPosition(c, Rl), e.getVertexPosition(l, zl);
	let u = Zl(e, t, n, r, Ll, Rl, zl, Jl);
	if (u) {
		i && (Hl.fromBufferAttribute(i, s), Ul.fromBufferAttribute(i, c), Wl.fromBufferAttribute(i, l), u.uv = ul.getInterpolation(Jl, Ll, Rl, zl, Hl, Ul, Wl, new J())), a && (Hl.fromBufferAttribute(a, s), Ul.fromBufferAttribute(a, c), Wl.fromBufferAttribute(a, l), u.uv1 = ul.getInterpolation(Jl, Ll, Rl, zl, Hl, Ul, Wl, new J()), u.uv2 = u.uv1), o && (Gl.fromBufferAttribute(o, s), Kl.fromBufferAttribute(o, c), ql.fromBufferAttribute(o, l), u.normal = ul.getInterpolation(Jl, Ll, Rl, zl, Gl, Kl, ql, new X()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
		let e = {
			a: s,
			b: c,
			c: l,
			normal: new X(),
			materialIndex: 0
		};
		ul.getNormal(Ll, Rl, zl, e.normal), u.face = e;
	}
	return u;
}
var $l = class e extends Ml {
	constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		};
		let o = this;
		r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
		let s = [], c = [], l = [], u = [], d = 0, f = 0;
		p("z", "y", "x", -1, -1, n, t, e, a, i, 0), p("z", "y", "x", 1, -1, n, t, -e, a, i, 1), p("x", "z", "y", 1, 1, e, n, t, r, a, 2), p("x", "z", "y", 1, -1, e, n, -t, r, a, 3), p("x", "y", "z", 1, -1, e, t, n, r, i, 4), p("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.setAttribute("position", new wl(c, 3)), this.setAttribute("normal", new wl(l, 3)), this.setAttribute("uv", new wl(u, 2));
		function p(e, t, n, r, i, a, p, m, h, g, _) {
			let v = a / h, y = p / g, b = a / 2, x = p / 2, S = m / 2, C = h + 1, w = g + 1, T = 0, E = 0, D = new X();
			for (let a = 0; a < w; a++) {
				let o = a * y - x;
				for (let s = 0; s < C; s++) D[e] = (s * v - b) * r, D[t] = o * i, D[n] = S, c.push(D.x, D.y, D.z), D[e] = 0, D[t] = 0, D[n] = m > 0 ? 1 : -1, l.push(D.x, D.y, D.z), u.push(s / h), u.push(1 - a / g), T += 1;
			}
			for (let e = 0; e < g; e++) for (let t = 0; t < h; t++) {
				let n = d + t + C * e, r = d + t + C * (e + 1), i = d + (t + 1) + C * (e + 1), a = d + (t + 1) + C * e;
				s.push(n, r, a), s.push(r, i, a), E += 6;
			}
			o.addGroup(f, E, _), f += E, d += T;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
	}
};
function eu(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i;
		}
	}
	return t;
}
function tu(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = eu(e[n]);
		for (let e in r) t[e] = r[e];
	}
	return t;
}
function nu(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(e[n].clone());
	return t;
}
function ru(e) {
	return e.getRenderTarget() === null ? e.outputColorSpace : Wo;
}
var iu = {
	clone: eu,
	merge: tu
}, au = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", ou = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", su = class extends fl {
	constructor(e) {
		super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = au, this.fragmentShader = ou, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
			derivatives: !1,
			fragDepth: !1,
			drawBuffers: !1,
			shaderTextureLOD: !1
		}, this.defaultAttributeValues = {
			color: [
				1,
				1,
				1
			],
			uv: [0, 0],
			uv1: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = eu(e.uniforms), this.uniformsGroups = nu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (let n in this.uniforms) {
			let r = this.uniforms[n].value;
			r && r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r && r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r && r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r && r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r && r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r && r.isMatrix3 ? t.uniforms[n] = {
				type: "m3",
				value: r.toArray()
			} : r && r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = { value: r };
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
		let n = {};
		for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t;
	}
}, cu = class extends Qc {
	constructor() {
		super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Dc(), this.projectionMatrix = new Dc(), this.projectionMatrixInverse = new Dc(), this.coordinateSystem = Yo;
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(-t[8], -t[9], -t[10]).normalize();
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
	}
	updateWorldMatrix(e, t) {
		super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, lu = class extends cu {
	constructor(e = 50, t = 1, n = .1, r = 2e3) {
		super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
	}
	setFocalLength(e) {
		let t = .5 * this.getFilmHeight() / e;
		this.fov = es * 2 * Math.atan(t), this.updateProjectionMatrix();
	}
	getFocalLength() {
		let e = Math.tan($o * .5 * this.fov);
		return .5 * this.getFilmHeight() / e;
	}
	getEffectiveFOV() {
		return es * 2 * Math.atan(Math.tan($o * .5 * this.fov) / this.zoom);
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1);
	}
	setViewOffset(e, t, n, r, i, a) {
		this.aspect = e / t, this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = this.near, t = e * Math.tan($o * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view;
		if (this.view !== null && this.view.enabled) {
			let e = a.fullWidth, o = a.fullHeight;
			i += a.offsetX * r / e, t -= a.offsetY * n / o, r *= a.width / e, n *= a.height / o;
		}
		let o = this.filmOffset;
		o !== 0 && (i += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
	}
}, uu = -90, du = 1, fu = class extends Qc {
	constructor(e, t, n) {
		super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null;
		let r = new lu(uu, du, e, t);
		r.layers = this.layers, this.add(r);
		let i = new lu(uu, du, e, t);
		i.layers = this.layers, this.add(i);
		let a = new lu(uu, du, e, t);
		a.layers = this.layers, this.add(a);
		let o = new lu(uu, du, e, t);
		o.layers = this.layers, this.add(o);
		let s = new lu(uu, du, e, t);
		s.layers = this.layers, this.add(s);
		let c = new lu(uu, du, e, t);
		c.layers = this.layers, this.add(c);
	}
	updateCoordinateSystem() {
		let e = this.coordinateSystem, t = this.children.concat(), [n, r, i, a, o, s] = t;
		for (let e of t) this.remove(e);
		if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), i.up.set(0, 0, -1), i.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), s.up.set(0, 1, 0), s.lookAt(0, 0, -1);
		else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), i.up.set(0, 0, 1), i.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), s.up.set(0, -1, 0), s.lookAt(0, 0, -1);
		else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
		for (let e of t) this.add(e), e.updateMatrixWorld();
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		let n = this.renderTarget;
		this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
		let [r, i, a, o, s, c] = this.children, l = e.getRenderTarget(), u = e.xr.enabled;
		e.xr.enabled = !1;
		let d = n.texture.generateMipmaps;
		n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, r), e.setRenderTarget(n, 1), e.render(t, i), e.setRenderTarget(n, 2), e.render(t, a), e.setRenderTarget(n, 3), e.render(t, o), e.setRenderTarget(n, 4), e.render(t, s), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(l), e.xr.enabled = u, n.texture.needsPMREMUpdate = !0;
	}
}, pu = class extends Gs {
	constructor(e, t, n, r, i, a, o, s, c, l) {
		e = e === void 0 ? [] : e, t = t === void 0 ? 301 : t, super(e, t, n, r, i, a, o, s, c, l), this.isCubeTexture = !0, this.flipY = !1;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, mu = class extends Js {
	constructor(e = 1, t = {}) {
		super(e, e, t), this.isWebGLCubeRenderTarget = !0;
		let n = {
			width: e,
			height: e,
			depth: 1
		}, r = [
			n,
			n,
			n,
			n,
			n,
			n
		];
		t.encoding !== void 0 && (ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === 3001 ? Uo : ""), this.texture = new pu(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps === void 0 ? !1 : t.generateMipmaps, this.texture.minFilter = t.minFilter === void 0 ? So : t.minFilter;
	}
	fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
		let n = {
			uniforms: { tEquirect: { value: null } },
			vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
			fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
		}, r = new $l(5, 5, 5), i = new su({
			name: "CubemapFromEquirect",
			uniforms: eu(n.uniforms),
			vertexShader: n.vertexShader,
			fragmentShader: n.fragmentShader,
			side: 1,
			blending: 0
		});
		i.uniforms.tEquirect.value = t;
		let a = new Xl(r, i), o = t.minFilter;
		return t.minFilter === 1008 && (t.minFilter = So), new fu(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
	}
	clear(e, t, n, r) {
		let i = e.getRenderTarget();
		for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
		e.setRenderTarget(i);
	}
}, hu = /* @__PURE__ */ new X(), gu = /* @__PURE__ */ new X(), _u = /* @__PURE__ */ new Y(), vu = class {
	constructor(e = new X(1, 0, 0), t = 0) {
		this.isPlane = !0, this.normal = e, this.constant = t;
	}
	set(e, t) {
		return this.normal.copy(e), this.constant = t, this;
	}
	setComponents(e, t, n, r) {
		return this.normal.set(e, t, n), this.constant = r, this;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
	}
	setFromCoplanarPoints(e, t, n) {
		let r = hu.subVectors(n, t).cross(gu.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(r, e), this;
	}
	copy(e) {
		return this.normal.copy(e.normal), this.constant = e.constant, this;
	}
	normalize() {
		let e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), this.constant *= e, this;
	}
	negate() {
		return this.constant *= -1, this.normal.negate(), this;
	}
	distanceToPoint(e) {
		return this.normal.dot(e) + this.constant;
	}
	distanceToSphere(e) {
		return this.distanceToPoint(e.center) - e.radius;
	}
	projectPoint(e, t) {
		return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
	}
	intersectLine(e, t) {
		let n = e.delta(hu), r = this.normal.dot(n);
		if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		let i = -(e.start.dot(this.normal) + this.constant) / r;
		return i < 0 || i > 1 ? null : t.copy(e.start).addScaledVector(n, i);
	}
	intersectsLine(e) {
		let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
		return t < 0 && n > 0 || n < 0 && t > 0;
	}
	intersectsBox(e) {
		return e.intersectsPlane(this);
	}
	intersectsSphere(e) {
		return e.intersectsPlane(this);
	}
	coplanarPoint(e) {
		return e.copy(this.normal).multiplyScalar(-this.constant);
	}
	applyMatrix4(e, t) {
		let n = t || _u.getNormalMatrix(e), r = this.coplanarPoint(hu).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
		return this.constant = -r.dot(i), this;
	}
	translate(e) {
		return this.constant -= e.dot(this.normal), this;
	}
	equals(e) {
		return e.normal.equals(this.normal) && e.constant === this.constant;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, yu = /* @__PURE__ */ new vc(), bu = /* @__PURE__ */ new X(), xu = class {
	constructor(e = new vu(), t = new vu(), n = new vu(), r = new vu(), i = new vu(), a = new vu()) {
		this.planes = [
			e,
			t,
			n,
			r,
			i,
			a
		];
	}
	set(e, t, n, r, i, a) {
		let o = this.planes;
		return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
	}
	copy(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this;
	}
	setFromProjectionMatrix(e, t = Yo) {
		let n = this.planes, r = e.elements, i = r[0], a = r[1], o = r[2], s = r[3], c = r[4], l = r[5], u = r[6], d = r[7], f = r[8], p = r[9], m = r[10], h = r[11], g = r[12], _ = r[13], v = r[14], y = r[15];
		if (n[0].setComponents(s - i, d - c, h - f, y - g).normalize(), n[1].setComponents(s + i, d + c, h + f, y + g).normalize(), n[2].setComponents(s + a, d + l, h + p, y + _).normalize(), n[3].setComponents(s - a, d - l, h - p, y - _).normalize(), n[4].setComponents(s - o, d - u, h - m, y - v).normalize(), t === 2e3) n[5].setComponents(s + o, d + u, h + m, y + v).normalize();
		else if (t === 2001) n[5].setComponents(o, u, m, v).normalize();
		else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
		return this;
	}
	intersectsObject(e) {
		if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), yu.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
		else {
			let t = e.geometry;
			t.boundingSphere === null && t.computeBoundingSphere(), yu.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
		}
		return this.intersectsSphere(yu);
	}
	intersectsSprite(e) {
		return yu.center.set(0, 0, 0), yu.radius = .7071067811865476, yu.applyMatrix4(e.matrixWorld), this.intersectsSphere(yu);
	}
	intersectsSphere(e) {
		let t = this.planes, n = e.center, r = -e.radius;
		for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
		return !0;
	}
	intersectsBox(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) {
			let r = t[n];
			if (bu.x = r.normal.x > 0 ? e.max.x : e.min.x, bu.y = r.normal.y > 0 ? e.max.y : e.min.y, bu.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(bu) < 0) return !1;
		}
		return !0;
	}
	containsPoint(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
		return !0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
};
function Su() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		n(t, a), r = e.requestAnimationFrame(i);
	}
	return {
		start: function() {
			t !== !0 && n !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function Cu(e, t) {
	let n = t.isWebGL2, r = /* @__PURE__ */ new WeakMap();
	function i(t, r) {
		let i = t.array, a = t.usage, o = e.createBuffer();
		e.bindBuffer(r, o), e.bufferData(r, i, a), t.onUploadCallback();
		let s;
		if (i instanceof Float32Array) s = e.FLOAT;
		else if (i instanceof Uint16Array) if (t.isFloat16BufferAttribute) if (n) s = e.HALF_FLOAT;
		else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
		else s = e.UNSIGNED_SHORT;
		else if (i instanceof Int16Array) s = e.SHORT;
		else if (i instanceof Uint32Array) s = e.UNSIGNED_INT;
		else if (i instanceof Int32Array) s = e.INT;
		else if (i instanceof Int8Array) s = e.BYTE;
		else if (i instanceof Uint8Array) s = e.UNSIGNED_BYTE;
		else if (i instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE;
		else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + i);
		return {
			buffer: o,
			type: s,
			bytesPerElement: i.BYTES_PER_ELEMENT,
			version: t.version
		};
	}
	function a(t, r, i) {
		let a = r.array, o = r.updateRange;
		e.bindBuffer(i, t), o.count === -1 ? e.bufferSubData(i, 0, a) : (n ? e.bufferSubData(i, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count) : e.bufferSubData(i, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count)), o.count = -1), r.onUploadCallback();
	}
	function o(e) {
		return e.isInterleavedBufferAttribute && (e = e.data), r.get(e);
	}
	function s(t) {
		t.isInterleavedBufferAttribute && (t = t.data);
		let n = r.get(t);
		n && (e.deleteBuffer(n.buffer), r.delete(t));
	}
	function c(e, t) {
		if (e.isGLBufferAttribute) {
			let t = r.get(e);
			(!t || t.version < e.version) && r.set(e, {
				buffer: e.buffer,
				type: e.type,
				bytesPerElement: e.elementSize,
				version: e.version
			});
			return;
		}
		e.isInterleavedBufferAttribute && (e = e.data);
		let n = r.get(e);
		n === void 0 ? r.set(e, i(e, t)) : n.version < e.version && (a(n.buffer, e, t), n.version = e.version);
	}
	return {
		get: o,
		remove: s,
		update: c
	};
}
var wu = class e extends Ml {
	constructor(e = 1, t = 1, n = 1, r = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		let i = e / 2, a = t / 2, o = Math.floor(n), s = Math.floor(r), c = o + 1, l = s + 1, u = e / o, d = t / s, f = [], p = [], m = [], h = [];
		for (let e = 0; e < l; e++) {
			let t = e * d - a;
			for (let n = 0; n < c; n++) {
				let r = n * u - i;
				p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s);
			}
		}
		for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) {
			let n = t + c * e, r = t + c * (e + 1), i = t + 1 + c * (e + 1), a = t + 1 + c * e;
			f.push(n, r, a), f.push(r, i, a);
		}
		this.setIndex(f), this.setAttribute("position", new wl(p, 3)), this.setAttribute("normal", new wl(m, 3)), this.setAttribute("uv", new wl(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.widthSegments, t.heightSegments);
	}
}, Q = {
	alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
	alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
	alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
	alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	alphatest_fragment: "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif",
	alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
	aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
	aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
	begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
	beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
	bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
	iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
	bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = dFdx( surf_pos.xyz );\n		vec3 vSigmaY = dFdy( surf_pos.xyz );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
	clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif",
	clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
	clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
	clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
	color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
	color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
	color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif",
	color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif",
	common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n	return dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
	cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_v0 0.339\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_v1 0.276\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_v4 0.046\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_v5 0.016\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_v6 0.0038\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
	defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
	displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
	displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
	emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
	emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
	colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	colorspace_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
	envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
	envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
	envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
	fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
	fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
	fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
	fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
	gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
	lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
	lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
	lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
	lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( LEGACY_LIGHTS )\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#else\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
	lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
	lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
	lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
	lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
	lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	anisotropyV /= material.anisotropy;\n	material.anisotropy = saturate( material.anisotropy );\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;\n#endif",
	lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
	lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometry.viewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
	lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
	lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
	logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
	logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",
	logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",
	map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
	map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
	map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
	metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
	morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
	morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif",
	normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 geometryNormal = normal;",
	normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
	normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
	normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
	clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",
	clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
	clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
	iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
	opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
	packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n	return packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}",
	premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
	project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
	dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
	dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
	roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
	roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
	shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",
	shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
	shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
	shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
	skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	uniform int boneTextureSize;\n	mat4 getBoneMatrix( const in float i ) {\n		float j = i * 4.0;\n		float x = mod( j, float( boneTextureSize ) );\n		float y = floor( j / float( boneTextureSize ) );\n		float dx = 1.0 / float( boneTextureSize );\n		float dy = 1.0 / float( boneTextureSize );\n		y = dy * ( y + 0.5 );\n		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n		mat4 bone = mat4( v1, v2, v3, v4 );\n		return bone;\n	}\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
	skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
	specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
	specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
	tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
	tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
	transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
	transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
	uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
	worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
	background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
	background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
	depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}",
	distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
	distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
	equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
	equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
	meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
	meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
	meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
	meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
	meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
	points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}",
	sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
}, $ = {
	common: {
		diffuse: { value: /* @__PURE__ */ new Z(16777215) },
		opacity: { value: 1 },
		map: { value: null },
		mapTransform: { value: /* @__PURE__ */ new Y() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /* @__PURE__ */ new Y() },
		alphaTest: { value: 0 }
	},
	specularmap: {
		specularMap: { value: null },
		specularMapTransform: { value: /* @__PURE__ */ new Y() }
	},
	envmap: {
		envMap: { value: null },
		flipEnvMap: { value: -1 },
		reflectivity: { value: 1 },
		ior: { value: 1.5 },
		refractionRatio: { value: .98 }
	},
	aomap: {
		aoMap: { value: null },
		aoMapIntensity: { value: 1 },
		aoMapTransform: { value: /* @__PURE__ */ new Y() }
	},
	lightmap: {
		lightMap: { value: null },
		lightMapIntensity: { value: 1 },
		lightMapTransform: { value: /* @__PURE__ */ new Y() }
	},
	bumpmap: {
		bumpMap: { value: null },
		bumpMapTransform: { value: /* @__PURE__ */ new Y() },
		bumpScale: { value: 1 }
	},
	normalmap: {
		normalMap: { value: null },
		normalMapTransform: { value: /* @__PURE__ */ new Y() },
		normalScale: { value: /* @__PURE__ */ new J(1, 1) }
	},
	displacementmap: {
		displacementMap: { value: null },
		displacementMapTransform: { value: /* @__PURE__ */ new Y() },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }
	},
	emissivemap: {
		emissiveMap: { value: null },
		emissiveMapTransform: { value: /* @__PURE__ */ new Y() }
	},
	metalnessmap: {
		metalnessMap: { value: null },
		metalnessMapTransform: { value: /* @__PURE__ */ new Y() }
	},
	roughnessmap: {
		roughnessMap: { value: null },
		roughnessMapTransform: { value: /* @__PURE__ */ new Y() }
	},
	gradientmap: { gradientMap: { value: null } },
	fog: {
		fogDensity: { value: 25e-5 },
		fogNear: { value: 1 },
		fogFar: { value: 2e3 },
		fogColor: { value: /* @__PURE__ */ new Z(16777215) }
	},
	lights: {
		ambientLightColor: { value: [] },
		lightProbe: { value: [] },
		directionalLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		directionalLightShadows: {
			value: [],
			properties: {
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMap: { value: [] },
		directionalShadowMatrix: { value: [] },
		spotLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				direction: {},
				distance: {},
				coneCos: {},
				penumbraCos: {},
				decay: {}
			}
		},
		spotLightShadows: {
			value: [],
			properties: {
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: { value: [] },
		spotShadowMap: { value: [] },
		spotLightMatrix: { value: [] },
		pointLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				decay: {},
				distance: {}
			}
		},
		pointLightShadows: {
			value: [],
			properties: {
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMap: { value: [] },
		pointShadowMatrix: { value: [] },
		hemisphereLights: {
			value: [],
			properties: {
				direction: {},
				skyColor: {},
				groundColor: {}
			}
		},
		rectAreaLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				width: {},
				height: {}
			}
		},
		ltc_1: { value: null },
		ltc_2: { value: null }
	},
	points: {
		diffuse: { value: /* @__PURE__ */ new Z(16777215) },
		opacity: { value: 1 },
		size: { value: 1 },
		scale: { value: 1 },
		map: { value: null },
		alphaMap: { value: null },
		alphaMapTransform: { value: /* @__PURE__ */ new Y() },
		alphaTest: { value: 0 },
		uvTransform: { value: /* @__PURE__ */ new Y() }
	},
	sprite: {
		diffuse: { value: /* @__PURE__ */ new Z(16777215) },
		opacity: { value: 1 },
		center: { value: /* @__PURE__ */ new J(.5, .5) },
		rotation: { value: 0 },
		map: { value: null },
		mapTransform: { value: /* @__PURE__ */ new Y() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /* @__PURE__ */ new Y() },
		alphaTest: { value: 0 }
	}
}, Tu = {
	basic: {
		uniforms: /* @__PURE__ */ tu([
			$.common,
			$.specularmap,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.fog
		]),
		vertexShader: Q.meshbasic_vert,
		fragmentShader: Q.meshbasic_frag
	},
	lambert: {
		uniforms: /* @__PURE__ */ tu([
			$.common,
			$.specularmap,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.fog,
			$.lights,
			{ emissive: { value: /* @__PURE__ */ new Z(0) } }
		]),
		vertexShader: Q.meshlambert_vert,
		fragmentShader: Q.meshlambert_frag
	},
	phong: {
		uniforms: /* @__PURE__ */ tu([
			$.common,
			$.specularmap,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.fog,
			$.lights,
			{
				emissive: { value: /* @__PURE__ */ new Z(0) },
				specular: { value: /* @__PURE__ */ new Z(1118481) },
				shininess: { value: 30 }
			}
		]),
		vertexShader: Q.meshphong_vert,
		fragmentShader: Q.meshphong_frag
	},
	standard: {
		uniforms: /* @__PURE__ */ tu([
			$.common,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.roughnessmap,
			$.metalnessmap,
			$.fog,
			$.lights,
			{
				emissive: { value: /* @__PURE__ */ new Z(0) },
				roughness: { value: 1 },
				metalness: { value: 0 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: Q.meshphysical_vert,
		fragmentShader: Q.meshphysical_frag
	},
	toon: {
		uniforms: /* @__PURE__ */ tu([
			$.common,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.gradientmap,
			$.fog,
			$.lights,
			{ emissive: { value: /* @__PURE__ */ new Z(0) } }
		]),
		vertexShader: Q.meshtoon_vert,
		fragmentShader: Q.meshtoon_frag
	},
	matcap: {
		uniforms: /* @__PURE__ */ tu([
			$.common,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.fog,
			{ matcap: { value: null } }
		]),
		vertexShader: Q.meshmatcap_vert,
		fragmentShader: Q.meshmatcap_frag
	},
	points: {
		uniforms: /* @__PURE__ */ tu([$.points, $.fog]),
		vertexShader: Q.points_vert,
		fragmentShader: Q.points_frag
	},
	dashed: {
		uniforms: /* @__PURE__ */ tu([
			$.common,
			$.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		]),
		vertexShader: Q.linedashed_vert,
		fragmentShader: Q.linedashed_frag
	},
	depth: {
		uniforms: /* @__PURE__ */ tu([$.common, $.displacementmap]),
		vertexShader: Q.depth_vert,
		fragmentShader: Q.depth_frag
	},
	normal: {
		uniforms: /* @__PURE__ */ tu([
			$.common,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			{ opacity: { value: 1 } }
		]),
		vertexShader: Q.meshnormal_vert,
		fragmentShader: Q.meshnormal_frag
	},
	sprite: {
		uniforms: /* @__PURE__ */ tu([$.sprite, $.fog]),
		vertexShader: Q.sprite_vert,
		fragmentShader: Q.sprite_frag
	},
	background: {
		uniforms: {
			uvTransform: { value: /* @__PURE__ */ new Y() },
			t2D: { value: null },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: Q.background_vert,
		fragmentShader: Q.background_frag
	},
	backgroundCube: {
		uniforms: {
			envMap: { value: null },
			flipEnvMap: { value: -1 },
			backgroundBlurriness: { value: 0 },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: Q.backgroundCube_vert,
		fragmentShader: Q.backgroundCube_frag
	},
	cube: {
		uniforms: {
			tCube: { value: null },
			tFlip: { value: -1 },
			opacity: { value: 1 }
		},
		vertexShader: Q.cube_vert,
		fragmentShader: Q.cube_frag
	},
	equirect: {
		uniforms: { tEquirect: { value: null } },
		vertexShader: Q.equirect_vert,
		fragmentShader: Q.equirect_frag
	},
	distanceRGBA: {
		uniforms: /* @__PURE__ */ tu([
			$.common,
			$.displacementmap,
			{
				referencePosition: { value: /* @__PURE__ */ new X() },
				nearDistance: { value: 1 },
				farDistance: { value: 1e3 }
			}
		]),
		vertexShader: Q.distanceRGBA_vert,
		fragmentShader: Q.distanceRGBA_frag
	},
	shadow: {
		uniforms: /* @__PURE__ */ tu([
			$.lights,
			$.fog,
			{
				color: { value: /* @__PURE__ */ new Z(0) },
				opacity: { value: 1 }
			}
		]),
		vertexShader: Q.shadow_vert,
		fragmentShader: Q.shadow_frag
	}
};
Tu.physical = {
	uniforms: /* @__PURE__ */ tu([Tu.standard.uniforms, {
		clearcoat: { value: 0 },
		clearcoatMap: { value: null },
		clearcoatMapTransform: { value: /* @__PURE__ */ new Y() },
		clearcoatNormalMap: { value: null },
		clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Y() },
		clearcoatNormalScale: { value: /* @__PURE__ */ new J(1, 1) },
		clearcoatRoughness: { value: 0 },
		clearcoatRoughnessMap: { value: null },
		clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Y() },
		iridescence: { value: 0 },
		iridescenceMap: { value: null },
		iridescenceMapTransform: { value: /* @__PURE__ */ new Y() },
		iridescenceIOR: { value: 1.3 },
		iridescenceThicknessMinimum: { value: 100 },
		iridescenceThicknessMaximum: { value: 400 },
		iridescenceThicknessMap: { value: null },
		iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Y() },
		sheen: { value: 0 },
		sheenColor: { value: /* @__PURE__ */ new Z(0) },
		sheenColorMap: { value: null },
		sheenColorMapTransform: { value: /* @__PURE__ */ new Y() },
		sheenRoughness: { value: 1 },
		sheenRoughnessMap: { value: null },
		sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Y() },
		transmission: { value: 0 },
		transmissionMap: { value: null },
		transmissionMapTransform: { value: /* @__PURE__ */ new Y() },
		transmissionSamplerSize: { value: /* @__PURE__ */ new J() },
		transmissionSamplerMap: { value: null },
		thickness: { value: 0 },
		thicknessMap: { value: null },
		thicknessMapTransform: { value: /* @__PURE__ */ new Y() },
		attenuationDistance: { value: 0 },
		attenuationColor: { value: /* @__PURE__ */ new Z(0) },
		specularColor: { value: /* @__PURE__ */ new Z(1, 1, 1) },
		specularColorMap: { value: null },
		specularColorMapTransform: { value: /* @__PURE__ */ new Y() },
		specularIntensity: { value: 1 },
		specularIntensityMap: { value: null },
		specularIntensityMapTransform: { value: /* @__PURE__ */ new Y() },
		anisotropyVector: { value: /* @__PURE__ */ new J() },
		anisotropyMap: { value: null },
		anisotropyMapTransform: { value: /* @__PURE__ */ new Y() }
	}]),
	vertexShader: Q.meshphysical_vert,
	fragmentShader: Q.meshphysical_frag
};
var Eu = {
	r: 0,
	b: 0,
	g: 0
};
function Du(e, t, n, r, i, a, o) {
	let s = new Z(0), c = a === !0 ? 0 : 1, l, u, d = null, f = 0, p = null;
	function m(a, m) {
		let g = !1, _ = m.isScene === !0 ? m.background : null;
		_ && _.isTexture && (_ = (m.backgroundBlurriness > 0 ? n : t).get(_)), _ === null ? h(s, c) : _ && _.isColor && (h(_, 1), g = !0);
		let v = e.xr.getEnvironmentBlendMode();
		v === "additive" ? r.buffers.color.setClear(0, 0, 0, 1, o) : v === "alpha-blend" && r.buffers.color.setClear(0, 0, 0, 0, o), (e.autoClear || g) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), _ && (_.isCubeTexture || _.mapping === 306) ? (u === void 0 && (u = new Xl(new $l(1, 1, 1), new su({
			name: "BackgroundCubeMaterial",
			uniforms: eu(Tu.backgroundCube.uniforms),
			vertexShader: Tu.backgroundCube.vertexShader,
			fragmentShader: Tu.backgroundCube.fragmentShader,
			side: 1,
			depthTest: !1,
			depthWrite: !1,
			fog: !1
		})), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(e, t, n) {
			this.matrixWorld.copyPosition(n.matrixWorld);
		}, Object.defineProperty(u.material, "envMap", { get: function() {
			return this.uniforms.envMap.value;
		} }), i.update(u)), u.material.uniforms.envMap.value = _, u.material.uniforms.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = m.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = m.backgroundIntensity, u.material.toneMapped = _.colorSpace !== "srgb", (d !== _ || f !== _.version || p !== e.toneMapping) && (u.material.needsUpdate = !0, d = _, f = _.version, p = e.toneMapping), u.layers.enableAll(), a.unshift(u, u.geometry, u.material, 0, 0, null)) : _ && _.isTexture && (l === void 0 && (l = new Xl(new wu(2, 2), new su({
			name: "BackgroundMaterial",
			uniforms: eu(Tu.background.uniforms),
			vertexShader: Tu.background.vertexShader,
			fragmentShader: Tu.background.fragmentShader,
			side: 0,
			depthTest: !1,
			depthWrite: !1,
			fog: !1
		})), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
			return this.uniforms.t2D.value;
		} }), i.update(l)), l.material.uniforms.t2D.value = _, l.material.uniforms.backgroundIntensity.value = m.backgroundIntensity, l.material.toneMapped = _.colorSpace !== "srgb", _.matrixAutoUpdate === !0 && _.updateMatrix(), l.material.uniforms.uvTransform.value.copy(_.matrix), (d !== _ || f !== _.version || p !== e.toneMapping) && (l.material.needsUpdate = !0, d = _, f = _.version, p = e.toneMapping), l.layers.enableAll(), a.unshift(l, l.geometry, l.material, 0, 0, null));
	}
	function h(t, n) {
		t.getRGB(Eu, ru(e)), r.buffers.color.setClear(Eu.r, Eu.g, Eu.b, n, o);
	}
	return {
		getClearColor: function() {
			return s;
		},
		setClearColor: function(e, t = 1) {
			s.set(e), c = t, h(s, c);
		},
		getClearAlpha: function() {
			return c;
		},
		setClearAlpha: function(e) {
			c = e, h(s, c);
		},
		render: m
	};
}
function Ou(e, t, n, r) {
	let i = e.getParameter(e.MAX_VERTEX_ATTRIBS), a = r.isWebGL2 ? null : t.get("OES_vertex_array_object"), o = r.isWebGL2 || a !== null, s = {}, c = g(null), l = c, u = !1;
	function d(t, r, i, a, s) {
		let c = !1;
		if (o) {
			let e = h(a, i, r);
			l !== e && (l = e, p(l.object)), c = _(t, a, i, s), c && v(t, a, i, s);
		} else {
			let e = r.wireframe === !0;
			(l.geometry !== a.id || l.program !== i.id || l.wireframe !== e) && (l.geometry = a.id, l.program = i.id, l.wireframe = e, c = !0);
		}
		s !== null && n.update(s, e.ELEMENT_ARRAY_BUFFER), (c || u) && (u = !1, w(t, r, i, a), s !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, n.get(s).buffer));
	}
	function f() {
		return r.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES();
	}
	function p(t) {
		return r.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t);
	}
	function m(t) {
		return r.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t);
	}
	function h(e, t, n) {
		let r = n.wireframe === !0, i = s[e.id];
		i === void 0 && (i = {}, s[e.id] = i);
		let a = i[t.id];
		a === void 0 && (a = {}, i[t.id] = a);
		let o = a[r];
		return o === void 0 && (o = g(f()), a[r] = o), o;
	}
	function g(e) {
		let t = [], n = [], r = [];
		for (let e = 0; e < i; e++) t[e] = 0, n[e] = 0, r[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: n,
			attributeDivisors: r,
			object: e,
			attributes: {},
			index: null
		};
	}
	function _(e, t, n, r) {
		let i = l.attributes, a = t.attributes, o = 0, s = n.getAttributes();
		for (let t in s) if (s[t].location >= 0) {
			let n = i[t], r = a[t];
			if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
			o++;
		}
		return l.attributesNum !== o || l.index !== r;
	}
	function v(e, t, n, r) {
		let i = {}, a = t.attributes, o = 0, s = n.getAttributes();
		for (let t in s) if (s[t].location >= 0) {
			let n = a[t];
			n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
			let r = {};
			r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, o++;
		}
		l.attributes = i, l.attributesNum = o, l.index = r;
	}
	function y() {
		let e = l.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function b(e) {
		x(e, 0);
	}
	function x(n, i) {
		let a = l.newAttributes, o = l.enabledAttributes, s = l.attributeDivisors;
		a[n] = 1, o[n] === 0 && (e.enableVertexAttribArray(n), o[n] = 1), s[n] !== i && ((r.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[r.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, i), s[n] = i);
	}
	function S() {
		let t = l.newAttributes, n = l.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function C(t, n, r, i, a, o, s) {
		s === !0 ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o);
	}
	function w(i, a, o, s) {
		if (r.isWebGL2 === !1 && (i.isInstancedMesh || s.isInstancedBufferGeometry) && t.get("ANGLE_instanced_arrays") === null) return;
		y();
		let c = s.attributes, l = o.getAttributes(), u = a.defaultAttributeValues;
		for (let t in l) {
			let a = l[t];
			if (a.location >= 0) {
				let o = c[t];
				if (o === void 0 && (t === "instanceMatrix" && i.instanceMatrix && (o = i.instanceMatrix), t === "instanceColor" && i.instanceColor && (o = i.instanceColor)), o !== void 0) {
					let t = o.normalized, c = o.itemSize, l = n.get(o);
					if (l === void 0) continue;
					let u = l.buffer, d = l.type, f = l.bytesPerElement, p = r.isWebGL2 === !0 && (d === e.INT || d === e.UNSIGNED_INT || o.gpuType === 1013);
					if (o.isInterleavedBufferAttribute) {
						let n = o.data, r = n.stride, l = o.offset;
						if (n.isInstancedInterleavedBuffer) {
							for (let e = 0; e < a.locationSize; e++) x(a.location + e, n.meshPerAttribute);
							i.isInstancedMesh !== !0 && s._maxInstanceCount === void 0 && (s._maxInstanceCount = n.meshPerAttribute * n.count);
						} else for (let e = 0; e < a.locationSize; e++) b(a.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, u);
						for (let e = 0; e < a.locationSize; e++) C(a.location + e, c / a.locationSize, d, t, r * f, (l + c / a.locationSize * e) * f, p);
					} else {
						if (o.isInstancedBufferAttribute) {
							for (let e = 0; e < a.locationSize; e++) x(a.location + e, o.meshPerAttribute);
							i.isInstancedMesh !== !0 && s._maxInstanceCount === void 0 && (s._maxInstanceCount = o.meshPerAttribute * o.count);
						} else for (let e = 0; e < a.locationSize; e++) b(a.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, u);
						for (let e = 0; e < a.locationSize; e++) C(a.location + e, c / a.locationSize, d, t, c * f, c / a.locationSize * e * f, p);
					}
				} else if (u !== void 0) {
					let n = u[t];
					if (n !== void 0) switch (n.length) {
						case 2:
							e.vertexAttrib2fv(a.location, n);
							break;
						case 3:
							e.vertexAttrib3fv(a.location, n);
							break;
						case 4:
							e.vertexAttrib4fv(a.location, n);
							break;
						default: e.vertexAttrib1fv(a.location, n);
					}
				}
			}
		}
		S();
	}
	function T() {
		O();
		for (let e in s) {
			let t = s[e];
			for (let e in t) {
				let n = t[e];
				for (let e in n) m(n[e].object), delete n[e];
				delete t[e];
			}
			delete s[e];
		}
	}
	function E(e) {
		if (s[e.id] === void 0) return;
		let t = s[e.id];
		for (let e in t) {
			let n = t[e];
			for (let e in n) m(n[e].object), delete n[e];
			delete t[e];
		}
		delete s[e.id];
	}
	function D(e) {
		for (let t in s) {
			let n = s[t];
			if (n[e.id] === void 0) continue;
			let r = n[e.id];
			for (let e in r) m(r[e].object), delete r[e];
			delete n[e.id];
		}
	}
	function O() {
		k(), u = !0, l !== c && (l = c, p(l.object));
	}
	function k() {
		c.geometry = null, c.program = null, c.wireframe = !1;
	}
	return {
		setup: d,
		reset: O,
		resetDefaultState: k,
		dispose: T,
		releaseStatesOfGeometry: E,
		releaseStatesOfProgram: D,
		initAttributes: y,
		enableAttribute: b,
		disableUnusedAttributes: S
	};
}
function ku(e, t, n, r) {
	let i = r.isWebGL2, a;
	function o(e) {
		a = e;
	}
	function s(t, r) {
		e.drawArrays(a, t, r), n.update(r, a, 1);
	}
	function c(r, o, s) {
		if (s === 0) return;
		let c, l;
		if (i) c = e, l = "drawArraysInstanced";
		else if (c = t.get("ANGLE_instanced_arrays"), l = "drawArraysInstancedANGLE", c === null) {
			console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			return;
		}
		c[l](a, r, o, s), n.update(o, a, s);
	}
	this.setMode = o, this.render = s, this.renderInstances = c;
}
function Au(e, t, n) {
	let r;
	function i() {
		if (r !== void 0) return r;
		if (t.has("EXT_texture_filter_anisotropic") === !0) {
			let n = t.get("EXT_texture_filter_anisotropic");
			r = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else r = 0;
		return r;
	}
	function a(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let o = typeof WebGL2RenderingContext < "u" && e.constructor.name === "WebGL2RenderingContext", s = n.precision === void 0 ? "highp" : n.precision, c = a(s);
	c !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", c, "instead."), s = c);
	let l = o || t.has("WEBGL_draw_buffers"), u = n.logarithmicDepthBuffer === !0, d = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), f = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), p = e.getParameter(e.MAX_TEXTURE_SIZE), m = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), h = e.getParameter(e.MAX_VERTEX_ATTRIBS), g = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), _ = e.getParameter(e.MAX_VARYING_VECTORS), v = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), y = f > 0, b = o || t.has("OES_texture_float"), x = y && b, S = o ? e.getParameter(e.MAX_SAMPLES) : 0;
	return {
		isWebGL2: o,
		drawBuffers: l,
		getMaxAnisotropy: i,
		getMaxPrecision: a,
		precision: s,
		logarithmicDepthBuffer: u,
		maxTextures: d,
		maxVertexTextures: f,
		maxTextureSize: p,
		maxCubemapSize: m,
		maxAttributes: h,
		maxVertexUniforms: g,
		maxVaryings: _,
		maxFragmentUniforms: v,
		vertexTextures: y,
		floatFragmentTextures: b,
		floatVertexTextures: x,
		maxSamples: S
	};
}
function ju(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, o = new vu(), s = new Y(), c = {
		value: null,
		needsUpdate: !1
	};
	this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, u(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = u(e, t, 0);
	}, this.setState = function(t, o, s) {
		let d = t.clippingPlanes, f = t.clipIntersection, p = t.clipShadows, m = e.get(t);
		if (!i || d === null || d.length === 0 || a && !p) a ? u(null) : l();
		else {
			let e = a ? 0 : r, t = e * 4, i = m.clippingState || null;
			c.value = i, i = u(d, o, t, s);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			m.clippingState = i, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
	function l() {
		c.value !== n && (c.value = n, c.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
	}
	function u(e, n, r, i) {
		let a = e === null ? 0 : e.length, l = null;
		if (a !== 0) {
			if (l = c.value, i !== !0 || l === null) {
				let t = r + a * 4, i = n.matrixWorldInverse;
				s.getNormalMatrix(i), (l === null || l.length < t) && (l = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(l, n), l[n + 3] = o.constant;
			}
			c.value = l, c.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, l;
	}
}
function Mu(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function r(r) {
		if (r && r.isTexture && r.isRenderTargetTexture === !1) {
			let a = r.mapping;
			if (a === 303 || a === 304) if (t.has(r)) {
				let e = t.get(r).texture;
				return n(e, r.mapping);
			} else {
				let a = r.image;
				if (a && a.height > 0) {
					let o = new mu(a.height / 2);
					return o.fromEquirectangularTexture(e, r), t.set(r, o), r.addEventListener("dispose", i), n(o.texture, r.mapping);
				} else return null;
			}
		}
		return r;
	}
	function i(e) {
		let n = e.target;
		n.removeEventListener("dispose", i);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function a() {
		t = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: r,
		dispose: a
	};
}
var Nu = class extends cu {
	constructor(e = -1, t = 1, n = 1, r = -1, i = .1, a = 2e3) {
		super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
	}
	setViewOffset(e, t, n, r, i, a) {
		this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t;
		if (this.view !== null && this.view.enabled) {
			let e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			i += e * this.view.offsetX, a = i + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height;
		}
		this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
	}
}, Pu = 4, Fu = [
	.125,
	.215,
	.35,
	.446,
	.526,
	.582
], Iu = 20, Lu = /* @__PURE__ */ new Nu(), Ru = /* @__PURE__ */ new Z(), zu = null, Bu = (1 + Math.sqrt(5)) / 2, Vu = 1 / Bu, Hu = [
	/* @__PURE__ */ new X(1, 1, 1),
	/* @__PURE__ */ new X(-1, 1, 1),
	/* @__PURE__ */ new X(1, 1, -1),
	/* @__PURE__ */ new X(-1, 1, -1),
	/* @__PURE__ */ new X(0, Bu, Vu),
	/* @__PURE__ */ new X(0, Bu, -Vu),
	/* @__PURE__ */ new X(Vu, 0, Bu),
	/* @__PURE__ */ new X(-Vu, 0, Bu),
	/* @__PURE__ */ new X(Bu, Vu, 0),
	/* @__PURE__ */ new X(-Bu, Vu, 0)
], Uu = class {
	constructor(e) {
		this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
	}
	fromScene(e, t = 0, n = .1, r = 100) {
		zu = this._renderer.getRenderTarget(), this._setSize(256);
		let i = this._allocateTargets();
		return i.depthBuffer = !0, this._sceneToCubeUV(e, n, r, i), t > 0 && this._blur(i, 0, 0, t), this._applyPMREM(i), this._cleanup(i), i;
	}
	fromEquirectangular(e, t = null) {
		return this._fromTexture(e, t);
	}
	fromCubemap(e, t = null) {
		return this._fromTexture(e, t);
	}
	compileCubemapShader() {
		this._cubemapMaterial === null && (this._cubemapMaterial = Yu(), this._compileMaterial(this._cubemapMaterial));
	}
	compileEquirectangularShader() {
		this._equirectMaterial === null && (this._equirectMaterial = Ju(), this._compileMaterial(this._equirectMaterial));
	}
	dispose() {
		this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
	}
	_setSize(e) {
		this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = 2 ** this._lodMax;
	}
	_dispose() {
		this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
		for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
	}
	_cleanup(e) {
		this._renderer.setRenderTarget(zu), e.scissorTest = !1, Ku(e, 0, 0, e.width, e.height);
	}
	_fromTexture(e, t) {
		e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), zu = this._renderer.getRenderTarget();
		let n = t || this._allocateTargets();
		return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
	}
	_allocateTargets() {
		let e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
			magFilter: So,
			minFilter: So,
			generateMipmaps: !1,
			type: Oo,
			format: Ao,
			colorSpace: Wo,
			depthBuffer: !1
		}, r = Gu(e, t, n);
		if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
			this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Gu(e, t, n);
			let { _lodMax: r } = this;
			({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = Wu(r)), this._blurMaterial = qu(r, e, t);
		}
		return r;
	}
	_compileMaterial(e) {
		let t = new Xl(this._lodPlanes[0], e);
		this._renderer.compile(t, Lu);
	}
	_sceneToCubeUV(e, t, n, r) {
		let i = new lu(90, 1, t, n), a = [
			1,
			-1,
			1,
			1,
			1,
			1
		], o = [
			1,
			1,
			1,
			-1,
			-1,
			-1
		], s = this._renderer, c = s.autoClear, l = s.toneMapping;
		s.getClearColor(Ru), s.toneMapping = 0, s.autoClear = !1;
		let u = new vl({
			name: "PMREM.Background",
			side: 1,
			depthWrite: !1,
			depthTest: !1
		}), d = new Xl(new $l(), u), f = !1, p = e.background;
		p ? p.isColor && (u.color.copy(p), e.background = null, f = !0) : (u.color.copy(Ru), f = !0);
		for (let t = 0; t < 6; t++) {
			let n = t % 3;
			n === 0 ? (i.up.set(0, a[t], 0), i.lookAt(o[t], 0, 0)) : n === 1 ? (i.up.set(0, 0, a[t]), i.lookAt(0, o[t], 0)) : (i.up.set(0, a[t], 0), i.lookAt(0, 0, o[t]));
			let c = this._cubeSize;
			Ku(r, n * c, t > 2 ? c : 0, c, c), s.setRenderTarget(r), f && s.render(d, i), s.render(e, i);
		}
		d.geometry.dispose(), d.material.dispose(), s.toneMapping = l, s.autoClear = c, e.background = p;
	}
	_textureToCubeUV(e, t) {
		let n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
		r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Yu()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ju());
		let i = r ? this._cubemapMaterial : this._equirectMaterial, a = new Xl(this._lodPlanes[0], i), o = i.uniforms;
		o.envMap.value = e;
		let s = this._cubeSize;
		Ku(t, 0, 0, 3 * s, 2 * s), n.setRenderTarget(t), n.render(a, Lu);
	}
	_applyPMREM(e) {
		let t = this._renderer, n = t.autoClear;
		t.autoClear = !1;
		for (let t = 1; t < this._lodPlanes.length; t++) {
			let n = Math.sqrt(this._sigmas[t] * this._sigmas[t] - this._sigmas[t - 1] * this._sigmas[t - 1]), r = Hu[(t - 1) % Hu.length];
			this._blur(e, t - 1, t, n, r);
		}
		t.autoClear = n;
	}
	_blur(e, t, n, r, i) {
		let a = this._pingPongRenderTarget;
		this._halfBlur(e, a, t, n, r, "latitudinal", i), this._halfBlur(a, e, n, n, r, "longitudinal", i);
	}
	_halfBlur(e, t, n, r, i, a, o) {
		let s = this._renderer, c = this._blurMaterial;
		a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
		let l = new Xl(this._lodPlanes[r], c), u = c.uniforms, d = this._sizeLods[n] - 1, f = isFinite(i) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * Iu - 1), p = i / f, m = isFinite(i) ? 1 + Math.floor(3 * p) : Iu;
		m > Iu && console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Iu}`);
		let h = [], g = 0;
		for (let e = 0; e < Iu; ++e) {
			let t = e / p, n = Math.exp(-t * t / 2);
			h.push(n), e === 0 ? g += n : e < m && (g += 2 * n);
		}
		for (let e = 0; e < h.length; e++) h[e] = h[e] / g;
		u.envMap.value = e.texture, u.samples.value = m, u.weights.value = h, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
		let { _lodMax: _ } = this;
		u.dTheta.value = f, u.mipInt.value = _ - n;
		let v = this._sizeLods[r];
		Ku(t, 3 * v * (r > _ - Pu ? r - _ + Pu : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), s.setRenderTarget(t), s.render(l, Lu);
	}
};
function Wu(e) {
	let t = [], n = [], r = [], i = e, a = e - Pu + 1 + Fu.length;
	for (let o = 0; o < a; o++) {
		let a = 2 ** i;
		n.push(a);
		let s = 1 / a;
		o > e - Pu ? s = Fu[o - e + Pu - 1] : o === 0 && (s = 0), r.push(s);
		let c = 1 / (a - 2), l = -c, u = 1 + c, d = [
			l,
			l,
			u,
			l,
			u,
			u,
			l,
			l,
			u,
			u,
			l,
			u
		], f = new Float32Array(108), p = new Float32Array(72), m = new Float32Array(36);
		for (let e = 0; e < 6; e++) {
			let t = e % 3 * 2 / 3 - 1, n = e > 2 ? 0 : -1, r = [
				t,
				n,
				0,
				t + 2 / 3,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n + 1,
				0
			];
			f.set(r, 18 * e), p.set(d, 12 * e);
			let i = [
				e,
				e,
				e,
				e,
				e,
				e
			];
			m.set(i, 6 * e);
		}
		let h = new Ml();
		h.setAttribute("position", new xl(f, 3)), h.setAttribute("uv", new xl(p, 2)), h.setAttribute("faceIndex", new xl(m, 1)), t.push(h), i > Pu && i--;
	}
	return {
		lodPlanes: t,
		sizeLods: n,
		sigmas: r
	};
}
function Gu(e, t, n) {
	let r = new Js(e, t, n);
	return r.texture.mapping = 306, r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r;
}
function Ku(e, t, n, r, i) {
	e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i);
}
function qu(e, t, n) {
	let r = new Float32Array(Iu), i = new X(0, 1, 0);
	return new su({
		name: "SphericalGaussianBlur",
		defines: {
			n: Iu,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			samples: { value: 1 },
			weights: { value: r },
			latitudinal: { value: !1 },
			dTheta: { value: 0 },
			mipInt: { value: 0 },
			poleAxis: { value: i }
		},
		vertexShader: Xu(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function Ju() {
	return new su({
		name: "EquirectangularToCubeUV",
		uniforms: { envMap: { value: null } },
		vertexShader: Xu(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function Yu() {
	return new su({
		name: "CubemapToCubeUV",
		uniforms: {
			envMap: { value: null },
			flipEnvMap: { value: -1 }
		},
		vertexShader: Xu(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function Xu() {
	return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
}
function Zu(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = null;
	function r(r) {
		if (r && r.isTexture) {
			let o = r.mapping, s = o === 303 || o === 304, c = o === 301 || o === 302;
			if (s || c) if (r.isRenderTargetTexture && r.needsPMREMUpdate === !0) {
				r.needsPMREMUpdate = !1;
				let i = t.get(r);
				return n === null && (n = new Uu(e)), i = s ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i), t.set(r, i), i.texture;
			} else if (t.has(r)) return t.get(r).texture;
			else {
				let o = r.image;
				if (s && o && o.height > 0 || c && o && i(o)) {
					n === null && (n = new Uu(e));
					let i = s ? n.fromEquirectangular(r) : n.fromCubemap(r);
					return t.set(r, i), r.addEventListener("dispose", a), i.texture;
				} else return null;
			}
		}
		return r;
	}
	function i(e) {
		let t = 0;
		for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
		return t === 6;
	}
	function a(e) {
		let n = e.target;
		n.removeEventListener("dispose", a);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function o() {
		t = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
	}
	return {
		get: r,
		dispose: o
	};
}
function Qu(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r;
		switch (n) {
			case "WEBGL_depth_texture":
				r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
				break;
			case "EXT_texture_filter_anisotropic":
				r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
				break;
			case "WEBGL_compressed_texture_s3tc":
				r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
				break;
			case "WEBGL_compressed_texture_pvrtc":
				r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
				break;
			default: r = e.getExtension(n);
		}
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function(e) {
			e.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture");
		},
		get: function(e) {
			let t = n(e);
			return t === null && console.warn("THREE.WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function $u(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap();
	function o(e) {
		let s = e.target;
		s.index !== null && t.remove(s.index);
		for (let e in s.attributes) t.remove(s.attributes[e]);
		for (let e in s.morphAttributes) {
			let n = s.morphAttributes[e];
			for (let e = 0, r = n.length; e < r; e++) t.remove(n[e]);
		}
		s.removeEventListener("dispose", o), delete i[s.id];
		let c = a.get(s);
		c && (t.remove(c), a.delete(s)), r.releaseStatesOfGeometry(s), s.isInstancedBufferGeometry === !0 && delete s._maxInstanceCount, n.memory.geometries--;
	}
	function s(e, t) {
		return i[t.id] === !0 ? t : (t.addEventListener("dispose", o), i[t.id] = !0, n.memory.geometries++, t);
	}
	function c(n) {
		let r = n.attributes;
		for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
		let i = n.morphAttributes;
		for (let n in i) {
			let r = i[n];
			for (let n = 0, i = r.length; n < i; n++) t.update(r[n], e.ARRAY_BUFFER);
		}
	}
	function l(e) {
		let n = [], r = e.index, i = e.attributes.position, o = 0;
		if (r !== null) {
			let e = r.array;
			o = r.version;
			for (let t = 0, r = e.length; t < r; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				n.push(r, i, i, a, a, r);
			}
		} else if (i !== void 0) {
			let e = i.array;
			o = i.version;
			for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
				let e = t + 0, r = t + 1, i = t + 2;
				n.push(e, r, r, i, i, e);
			}
		} else return;
		let s = new (Ts(n) ? Cl : Sl)(n, 1);
		s.version = o;
		let c = a.get(e);
		c && t.remove(c), a.set(e, s);
	}
	function u(e) {
		let t = a.get(e);
		if (t) {
			let n = e.index;
			n !== null && t.version < n.version && l(e);
		} else l(e);
		return a.get(e);
	}
	return {
		get: s,
		update: c,
		getWireframeAttribute: u
	};
}
function ed(e, t, n, r) {
	let i = r.isWebGL2, a;
	function o(e) {
		a = e;
	}
	let s, c;
	function l(e) {
		s = e.type, c = e.bytesPerElement;
	}
	function u(t, r) {
		e.drawElements(a, r, s, t * c), n.update(r, a, 1);
	}
	function d(r, o, l) {
		if (l === 0) return;
		let u, d;
		if (i) u = e, d = "drawElementsInstanced";
		else if (u = t.get("ANGLE_instanced_arrays"), d = "drawElementsInstancedANGLE", u === null) {
			console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			return;
		}
		u[d](a, o, s, r * c, l), n.update(o, a, l);
	}
	this.setMode = o, this.setIndex = l, this.render = u, this.renderInstances = d;
}
function td(e) {
	let t = {
		geometries: 0,
		textures: 0
	}, n = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	function r(t, r, i) {
		switch (n.calls++, r) {
			case e.TRIANGLES:
				n.triangles += t / 3 * i;
				break;
			case e.LINES:
				n.lines += t / 2 * i;
				break;
			case e.LINE_STRIP:
				n.lines += i * (t - 1);
				break;
			case e.LINE_LOOP:
				n.lines += i * t;
				break;
			case e.POINTS:
				n.points += i * t;
				break;
			default:
				console.error("THREE.WebGLInfo: Unknown draw mode:", r);
				break;
		}
	}
	function i() {
		n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
	}
	return {
		memory: t,
		render: n,
		programs: null,
		autoReset: !0,
		reset: i,
		update: r
	};
}
function nd(e, t) {
	return e[0] - t[0];
}
function rd(e, t) {
	return Math.abs(t[1]) - Math.abs(e[1]);
}
function id(e, t, n) {
	let r = {}, i = new Float32Array(8), a = /* @__PURE__ */ new WeakMap(), o = new Ks(), s = [];
	for (let e = 0; e < 8; e++) s[e] = [e, 0];
	function c(c, l, u) {
		let d = c.morphTargetInfluences;
		if (t.isWebGL2 === !0) {
			let r = l.morphAttributes.position || l.morphAttributes.normal || l.morphAttributes.color, i = r === void 0 ? 0 : r.length, s = a.get(l);
			if (s === void 0 || s.count !== i) {
				s !== void 0 && s.texture.dispose();
				let e = l.morphAttributes.position !== void 0, n = l.morphAttributes.normal !== void 0, r = l.morphAttributes.color !== void 0, c = l.morphAttributes.position || [], u = l.morphAttributes.normal || [], d = l.morphAttributes.color || [], f = 0;
				e === !0 && (f = 1), n === !0 && (f = 2), r === !0 && (f = 3);
				let p = l.attributes.position.count * f, m = 1;
				p > t.maxTextureSize && (m = Math.ceil(p / t.maxTextureSize), p = t.maxTextureSize);
				let h = new Float32Array(p * m * 4 * i), g = new Ys(h, p, m, i);
				g.type = Do, g.needsUpdate = !0;
				let _ = f * 4;
				for (let t = 0; t < i; t++) {
					let i = c[t], a = u[t], s = d[t], l = p * m * 4 * t;
					for (let t = 0; t < i.count; t++) {
						let c = t * _;
						e === !0 && (o.fromBufferAttribute(i, t), h[l + c + 0] = o.x, h[l + c + 1] = o.y, h[l + c + 2] = o.z, h[l + c + 3] = 0), n === !0 && (o.fromBufferAttribute(a, t), h[l + c + 4] = o.x, h[l + c + 5] = o.y, h[l + c + 6] = o.z, h[l + c + 7] = 0), r === !0 && (o.fromBufferAttribute(s, t), h[l + c + 8] = o.x, h[l + c + 9] = o.y, h[l + c + 10] = o.z, h[l + c + 11] = s.itemSize === 4 ? o.w : 1);
					}
				}
				s = {
					count: i,
					texture: g,
					size: new J(p, m)
				}, a.set(l, s);
				function v() {
					g.dispose(), a.delete(l), l.removeEventListener("dispose", v);
				}
				l.addEventListener("dispose", v);
			}
			let c = 0;
			for (let e = 0; e < d.length; e++) c += d[e];
			let f = l.morphTargetsRelative ? 1 : 1 - c;
			u.getUniforms().setValue(e, "morphTargetBaseInfluence", f), u.getUniforms().setValue(e, "morphTargetInfluences", d), u.getUniforms().setValue(e, "morphTargetsTexture", s.texture, n), u.getUniforms().setValue(e, "morphTargetsTextureSize", s.size);
		} else {
			let t = d === void 0 ? 0 : d.length, n = r[l.id];
			if (n === void 0 || n.length !== t) {
				n = [];
				for (let e = 0; e < t; e++) n[e] = [e, 0];
				r[l.id] = n;
			}
			for (let e = 0; e < t; e++) {
				let t = n[e];
				t[0] = e, t[1] = d[e];
			}
			n.sort(rd);
			for (let e = 0; e < 8; e++) e < t && n[e][1] ? (s[e][0] = n[e][0], s[e][1] = n[e][1]) : (s[e][0] = 2 ** 53 - 1, s[e][1] = 0);
			s.sort(nd);
			let a = l.morphAttributes.position, o = l.morphAttributes.normal, c = 0;
			for (let e = 0; e < 8; e++) {
				let t = s[e], n = t[0], r = t[1];
				n !== 2 ** 53 - 1 && r ? (a && l.getAttribute("morphTarget" + e) !== a[n] && l.setAttribute("morphTarget" + e, a[n]), o && l.getAttribute("morphNormal" + e) !== o[n] && l.setAttribute("morphNormal" + e, o[n]), i[e] = r, c += r) : (a && l.hasAttribute("morphTarget" + e) === !0 && l.deleteAttribute("morphTarget" + e), o && l.hasAttribute("morphNormal" + e) === !0 && l.deleteAttribute("morphNormal" + e), i[e] = 0);
			}
			let f = l.morphTargetsRelative ? 1 : 1 - c;
			u.getUniforms().setValue(e, "morphTargetBaseInfluence", f), u.getUniforms().setValue(e, "morphTargetInfluences", i);
		}
	}
	return { update: c };
}
function ad(e, t, n, r) {
	let i = /* @__PURE__ */ new WeakMap();
	function a(a) {
		let o = r.render.frame, c = a.geometry, l = t.get(a, c);
		if (i.get(l) !== o && (t.update(l), i.set(l, o)), a.isInstancedMesh && (a.hasEventListener("dispose", s) === !1 && a.addEventListener("dispose", s), i.get(a) !== o && (n.update(a.instanceMatrix, e.ARRAY_BUFFER), a.instanceColor !== null && n.update(a.instanceColor, e.ARRAY_BUFFER), i.set(a, o))), a.isSkinnedMesh) {
			let e = a.skeleton;
			i.get(e) !== o && (e.update(), i.set(e, o));
		}
		return l;
	}
	function o() {
		i = /* @__PURE__ */ new WeakMap();
	}
	function s(e) {
		let t = e.target;
		t.removeEventListener("dispose", s), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: a,
		dispose: o
	};
}
var od = /* @__PURE__ */ new Gs(), sd = /* @__PURE__ */ new Ys(), cd = /* @__PURE__ */ new Xs(), ld = /* @__PURE__ */ new pu(), ud = [], dd = [], fd = new Float32Array(16), pd = new Float32Array(9), md = new Float32Array(4);
function hd(e, t, n) {
	let r = e[0];
	if (r <= 0 || r > 0) return e;
	let i = t * n, a = ud[i];
	if (a === void 0 && (a = new Float32Array(i), ud[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function gd(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function _d(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function vd(e, t) {
	let n = dd[t];
	n === void 0 && (n = new Int32Array(t), dd[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function yd(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function bd(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (gd(n, t)) return;
		e.uniform2fv(this.addr, t), _d(n, t);
	}
}
function xd(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (gd(n, t)) return;
		e.uniform3fv(this.addr, t), _d(n, t);
	}
}
function Sd(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (gd(n, t)) return;
		e.uniform4fv(this.addr, t), _d(n, t);
	}
}
function Cd(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (gd(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), _d(n, t);
	} else {
		if (gd(n, r)) return;
		md.set(r), e.uniformMatrix2fv(this.addr, !1, md), _d(n, r);
	}
}
function wd(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (gd(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), _d(n, t);
	} else {
		if (gd(n, r)) return;
		pd.set(r), e.uniformMatrix3fv(this.addr, !1, pd), _d(n, r);
	}
}
function Td(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (gd(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), _d(n, t);
	} else {
		if (gd(n, r)) return;
		fd.set(r), e.uniformMatrix4fv(this.addr, !1, fd), _d(n, r);
	}
}
function Ed(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function Dd(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (gd(n, t)) return;
		e.uniform2iv(this.addr, t), _d(n, t);
	}
}
function Od(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (gd(n, t)) return;
		e.uniform3iv(this.addr, t), _d(n, t);
	}
}
function kd(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (gd(n, t)) return;
		e.uniform4iv(this.addr, t), _d(n, t);
	}
}
function Ad(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function jd(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (gd(n, t)) return;
		e.uniform2uiv(this.addr, t), _d(n, t);
	}
}
function Md(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (gd(n, t)) return;
		e.uniform3uiv(this.addr, t), _d(n, t);
	}
}
function Nd(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (gd(n, t)) return;
		e.uniform4uiv(this.addr, t), _d(n, t);
	}
}
function Pd(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2D(t || od, i);
}
function Fd(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || cd, i);
}
function Id(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(t || ld, i);
}
function Ld(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || sd, i);
}
function Rd(e) {
	switch (e) {
		case 5126: return yd;
		case 35664: return bd;
		case 35665: return xd;
		case 35666: return Sd;
		case 35674: return Cd;
		case 35675: return wd;
		case 35676: return Td;
		case 5124:
		case 35670: return Ed;
		case 35667:
		case 35671: return Dd;
		case 35668:
		case 35672: return Od;
		case 35669:
		case 35673: return kd;
		case 5125: return Ad;
		case 36294: return jd;
		case 36295: return Md;
		case 36296: return Nd;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return Pd;
		case 35679:
		case 36299:
		case 36307: return Fd;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return Id;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return Ld;
	}
}
function zd(e, t) {
	e.uniform1fv(this.addr, t);
}
function Bd(e, t) {
	let n = hd(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function Vd(e, t) {
	let n = hd(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function Hd(e, t) {
	let n = hd(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function Ud(e, t) {
	let n = hd(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function Wd(e, t) {
	let n = hd(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function Gd(e, t) {
	let n = hd(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function Kd(e, t) {
	e.uniform1iv(this.addr, t);
}
function qd(e, t) {
	e.uniform2iv(this.addr, t);
}
function Jd(e, t) {
	e.uniform3iv(this.addr, t);
}
function Yd(e, t) {
	e.uniform4iv(this.addr, t);
}
function Xd(e, t) {
	e.uniform1uiv(this.addr, t);
}
function Zd(e, t) {
	e.uniform2uiv(this.addr, t);
}
function Qd(e, t) {
	e.uniform3uiv(this.addr, t);
}
function $d(e, t) {
	e.uniform4uiv(this.addr, t);
}
function ef(e, t, n) {
	let r = this.cache, i = t.length, a = vd(n, i);
	gd(r, a) || (e.uniform1iv(this.addr, a), _d(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || od, a[e]);
}
function tf(e, t, n) {
	let r = this.cache, i = t.length, a = vd(n, i);
	gd(r, a) || (e.uniform1iv(this.addr, a), _d(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || cd, a[e]);
}
function nf(e, t, n) {
	let r = this.cache, i = t.length, a = vd(n, i);
	gd(r, a) || (e.uniform1iv(this.addr, a), _d(r, a));
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || ld, a[e]);
}
function rf(e, t, n) {
	let r = this.cache, i = t.length, a = vd(n, i);
	gd(r, a) || (e.uniform1iv(this.addr, a), _d(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || sd, a[e]);
}
function af(e) {
	switch (e) {
		case 5126: return zd;
		case 35664: return Bd;
		case 35665: return Vd;
		case 35666: return Hd;
		case 35674: return Ud;
		case 35675: return Wd;
		case 35676: return Gd;
		case 5124:
		case 35670: return Kd;
		case 35667:
		case 35671: return qd;
		case 35668:
		case 35672: return Jd;
		case 35669:
		case 35673: return Yd;
		case 5125: return Xd;
		case 36294: return Zd;
		case 36295: return Qd;
		case 36296: return $d;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return ef;
		case 35679:
		case 36299:
		case 36307: return tf;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return nf;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return rf;
	}
}
var of = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.setValue = Rd(t.type);
	}
}, sf = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = af(t.type);
	}
}, cf = class {
	constructor(e) {
		this.id = e, this.seq = [], this.map = {};
	}
	setValue(e, t, n) {
		let r = this.seq;
		for (let i = 0, a = r.length; i !== a; ++i) {
			let a = r[i];
			a.setValue(e, t[a.id], n);
		}
	}
}, lf = /(\w+)(\])?(\[|\.)?/g;
function uf(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function df(e, t, n) {
	let r = e.name, i = r.length;
	for (lf.lastIndex = 0;;) {
		let a = lf.exec(r), o = lf.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
		if (c && (s |= 0), l === void 0 || l === "[" && o + 2 === i) {
			uf(n, l === void 0 ? new of(s, e, t) : new sf(s, e, t));
			break;
		} else {
			let e = n.map[s];
			e === void 0 && (e = new cf(s), uf(n, e)), n = e;
		}
	}
}
var ff = class {
	constructor(e, t) {
		this.seq = [], this.map = {};
		let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
		for (let r = 0; r < n; ++r) {
			let n = e.getActiveUniform(t, r);
			df(n, e.getUniformLocation(t, n.name), this);
		}
	}
	setValue(e, t, n, r) {
		let i = this.map[t];
		i !== void 0 && i.setValue(e, n, r);
	}
	setOptional(e, t, n) {
		let r = t[n];
		r !== void 0 && this.setValue(e, n, r);
	}
	static upload(e, t, n, r) {
		for (let i = 0, a = t.length; i !== a; ++i) {
			let a = t[i], o = n[a.id];
			o.needsUpdate !== !1 && a.setValue(e, o.value, r);
		}
	}
	static seqWithValue(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r !== i; ++r) {
			let i = e[r];
			i.id in t && n.push(i);
		}
		return n;
	}
};
function pf(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var mf = 0;
function hf(e, t) {
	let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
	for (let e = i; e < a; e++) {
		let i = e + 1;
		r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
	}
	return r.join("\n");
}
function gf(e) {
	switch (e) {
		case Wo: return ["Linear", "( value )"];
		case Uo: return ["sRGB", "( value )"];
		default: return console.warn("THREE.WebGLProgram: Unsupported color space:", e), ["Linear", "( value )"];
	}
}
function _f(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = e.getShaderInfoLog(t).trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + hf(e.getShaderSource(t), r);
	} else return i;
}
function vf(e, t) {
	let n = gf(t);
	return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
}
function yf(e, t) {
	let n;
	switch (t) {
		case 1:
			n = "Linear";
			break;
		case 2:
			n = "Reinhard";
			break;
		case 3:
			n = "OptimizedCineon";
			break;
		case 4:
			n = "ACESFilmic";
			break;
		case 5:
			n = "Custom";
			break;
		default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), n = "Linear";
	}
	return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
function bf(e) {
	return [
		e.extensionDerivatives || e.envMapCubeUVHeight || e.bumpMap || e.normalMapTangentSpace || e.clearcoatNormalMap || e.flatShading || e.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
		(e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
		e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
		(e.extensionShaderTextureLOD || e.envMap || e.transmission) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
	].filter(Cf).join("\n");
}
function xf(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r !== !1 && t.push("#define " + n + " " + r);
	}
	return t.join("\n");
}
function Sf(e, t) {
	let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < r; i++) {
		let r = e.getActiveAttrib(t, i), a = r.name, o = 1;
		r.type === e.FLOAT_MAT2 && (o = 2), r.type === e.FLOAT_MAT3 && (o = 3), r.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
			type: r.type,
			location: e.getAttribLocation(t, a),
			locationSize: o
		};
	}
	return n;
}
function Cf(e) {
	return e !== "";
}
function wf(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Tf(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var Ef = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Df(e) {
	return e.replace(Ef, kf);
}
var Of = new Map([
	["encodings_fragment", "colorspace_fragment"],
	["encodings_pars_fragment", "colorspace_pars_fragment"],
	["output_fragment", "opaque_fragment"]
]);
function kf(e, t) {
	let n = Q[t];
	if (n === void 0) {
		let e = Of.get(t);
		if (e !== void 0) n = Q[e], console.warn("THREE.WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.", t, e);
		else throw Error("Can not resolve #include <" + t + ">");
	}
	return Df(n);
}
var Af = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function jf(e) {
	return e.replace(Af, Mf);
}
function Mf(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function Nf(e) {
	let t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
function Pf(e) {
	let t = "SHADOWMAP_TYPE_BASIC";
	return e.shadowMapType === 1 ? t = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === 2 ? t = "SHADOWMAP_TYPE_PCF_SOFT" : e.shadowMapType === 3 && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Ff(e) {
	let t = "ENVMAP_TYPE_CUBE";
	if (e.envMap) switch (e.envMapMode) {
		case 301:
		case 302:
			t = "ENVMAP_TYPE_CUBE";
			break;
		case 306:
			t = "ENVMAP_TYPE_CUBE_UV";
			break;
	}
	return t;
}
function If(e) {
	let t = "ENVMAP_MODE_REFLECTION";
	if (e.envMap) switch (e.envMapMode) {
		case 302:
			t = "ENVMAP_MODE_REFRACTION";
			break;
	}
	return t;
}
function Lf(e) {
	let t = "ENVMAP_BLENDING_NONE";
	if (e.envMap) switch (e.combine) {
		case 0:
			t = "ENVMAP_BLENDING_MULTIPLY";
			break;
		case 1:
			t = "ENVMAP_BLENDING_MIX";
			break;
		case 2:
			t = "ENVMAP_BLENDING_ADD";
			break;
	}
	return t;
}
function Rf(e) {
	let t = e.envMapCubeUVHeight;
	if (t === null) return null;
	let n = Math.log2(t) - 2, r = 1 / t;
	return {
		texelWidth: 1 / (3 * Math.max(2 ** n, 112)),
		texelHeight: r,
		maxMip: n
	};
}
function zf(e, t, n, r) {
	let i = e.getContext(), a = n.defines, o = n.vertexShader, s = n.fragmentShader, c = Pf(n), l = Ff(n), u = If(n), d = Lf(n), f = Rf(n), p = n.isWebGL2 ? "" : bf(n), m = xf(a), h = i.createProgram(), g, _, v = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (g = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(Cf).join("\n"), g.length > 0 && (g += "\n"), _ = [
		p,
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(Cf).join("\n"), _.length > 0 && (_ += "\n")) : (g = [
		Nf(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + u : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
		n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
		n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
		n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
		"uniform mat4 modelMatrix;",
		"uniform mat4 modelViewMatrix;",
		"uniform mat4 projectionMatrix;",
		"uniform mat4 viewMatrix;",
		"uniform mat3 normalMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		"#ifdef USE_INSTANCING",
		"	attribute mat4 instanceMatrix;",
		"#endif",
		"#ifdef USE_INSTANCING_COLOR",
		"	attribute vec3 instanceColor;",
		"#endif",
		"attribute vec3 position;",
		"attribute vec3 normal;",
		"attribute vec2 uv;",
		"#ifdef USE_UV1",
		"	attribute vec2 uv1;",
		"#endif",
		"#ifdef USE_UV2",
		"	attribute vec2 uv2;",
		"#endif",
		"#ifdef USE_UV3",
		"	attribute vec2 uv3;",
		"#endif",
		"#ifdef USE_TANGENT",
		"	attribute vec4 tangent;",
		"#endif",
		"#if defined( USE_COLOR_ALPHA )",
		"	attribute vec4 color;",
		"#elif defined( USE_COLOR )",
		"	attribute vec3 color;",
		"#endif",
		"#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
		"	attribute vec3 morphTarget0;",
		"	attribute vec3 morphTarget1;",
		"	attribute vec3 morphTarget2;",
		"	attribute vec3 morphTarget3;",
		"	#ifdef USE_MORPHNORMALS",
		"		attribute vec3 morphNormal0;",
		"		attribute vec3 morphNormal1;",
		"		attribute vec3 morphNormal2;",
		"		attribute vec3 morphNormal3;",
		"	#else",
		"		attribute vec3 morphTarget4;",
		"		attribute vec3 morphTarget5;",
		"		attribute vec3 morphTarget6;",
		"		attribute vec3 morphTarget7;",
		"	#endif",
		"#endif",
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(Cf).join("\n"), _ = [
		p,
		Nf(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + l : "",
		n.envMap ? "#define " + u : "",
		n.envMap ? "#define " + d : "",
		f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
		f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
		f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
		n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : Q.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : yf("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		Q.colorspace_pars_fragment,
		vf("linearToOutputTexel", n.outputColorSpace),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(Cf).join("\n")), o = Df(o), o = wf(o, n), o = Tf(o, n), s = Df(s), s = wf(s, n), s = Tf(s, n), o = jf(o), s = jf(s), n.isWebGL2 && n.isRawShaderMaterial !== !0 && (v = "#version 300 es\n", g = [
		"precision mediump sampler2DArray;",
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + g, _ = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
		"#define gl_FragDepthEXT gl_FragDepth",
		"#define texture2D texture",
		"#define textureCube texture",
		"#define texture2DProj textureProj",
		"#define texture2DLodEXT textureLod",
		"#define texture2DProjLodEXT textureProjLod",
		"#define textureCubeLodEXT textureLod",
		"#define texture2DGradEXT textureGrad",
		"#define texture2DProjGradEXT textureProjGrad",
		"#define textureCubeGradEXT textureGrad"
	].join("\n") + "\n" + _);
	let y = v + g + o, b = v + _ + s, x = pf(i, i.VERTEX_SHADER, y), S = pf(i, i.FRAGMENT_SHADER, b);
	if (i.attachShader(h, x), i.attachShader(h, S), n.index0AttributeName === void 0 ? n.morphTargets === !0 && i.bindAttribLocation(h, 0, "position") : i.bindAttribLocation(h, 0, n.index0AttributeName), i.linkProgram(h), e.debug.checkShaderErrors) {
		let t = i.getProgramInfoLog(h).trim(), n = i.getShaderInfoLog(x).trim(), r = i.getShaderInfoLog(S).trim(), a = !0, o = !0;
		if (i.getProgramParameter(h, i.LINK_STATUS) === !1) if (a = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(i, h, x, S);
		else {
			let e = _f(i, x, "vertex"), n = _f(i, S, "fragment");
			console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(h, i.VALIDATE_STATUS) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + n);
		}
		else t === "" ? (n === "" || r === "") && (o = !1) : console.warn("THREE.WebGLProgram: Program Info Log:", t);
		o && (this.diagnostics = {
			runnable: a,
			programLog: t,
			vertexShader: {
				log: n,
				prefix: g
			},
			fragmentShader: {
				log: r,
				prefix: _
			}
		});
	}
	i.deleteShader(x), i.deleteShader(S);
	let C;
	this.getUniforms = function() {
		return C === void 0 && (C = new ff(i, h)), C;
	};
	let w;
	return this.getAttributes = function() {
		return w === void 0 && (w = Sf(i, h)), w;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), i.deleteProgram(h), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = mf++, this.cacheKey = t, this.usedTimes = 1, this.program = h, this.vertexShader = x, this.fragmentShader = S, this;
}
var Bf = 0, Vf = class {
	constructor() {
		this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
	}
	update(e) {
		let t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), i = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
		return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(i) === !1 && (a.add(i), i.usedTimes++), this;
	}
	remove(e) {
		let t = this.materialCache.get(e);
		for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
		return this.materialCache.delete(e), this;
	}
	getVertexShaderID(e) {
		return this._getShaderStage(e.vertexShader).id;
	}
	getFragmentShaderID(e) {
		return this._getShaderStage(e.fragmentShader).id;
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear();
	}
	_getShaderCacheForMaterial(e) {
		let t = this.materialCache, n = t.get(e);
		return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
	}
	_getShaderStage(e) {
		let t = this.shaderCache, n = t.get(e);
		return n === void 0 && (n = new Hf(e), t.set(e, n)), n;
	}
}, Hf = class {
	constructor(e) {
		this.id = Bf++, this.code = e, this.usedTimes = 0;
	}
};
function Uf(e, t, n, r, i, a, o) {
	let s = new Rc(), c = new Vf(), l = [], u = i.isWebGL2, d = i.logarithmicDepthBuffer, f = i.vertexTextures, p = i.precision, m = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distanceRGBA",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	function h(e) {
		return e === 0 ? "uv" : `uv${e}`;
	}
	function g(a, s, l, g, _) {
		let v = g.fog, y = _.geometry, b = a.isMeshStandardMaterial ? g.environment : null, x = (a.isMeshStandardMaterial ? n : t).get(a.envMap || b), S = x && x.mapping === 306 ? x.image.height : null, C = m[a.type];
		a.precision !== null && (p = i.getMaxPrecision(a.precision), p !== a.precision && console.warn("THREE.WebGLProgram.getParameters:", a.precision, "not supported, using", p, "instead."));
		let w = y.morphAttributes.position || y.morphAttributes.normal || y.morphAttributes.color, T = w === void 0 ? 0 : w.length, E = 0;
		y.morphAttributes.position !== void 0 && (E = 1), y.morphAttributes.normal !== void 0 && (E = 2), y.morphAttributes.color !== void 0 && (E = 3);
		let D, O, k, A;
		if (C) {
			let e = Tu[C];
			D = e.vertexShader, O = e.fragmentShader;
		} else D = a.vertexShader, O = a.fragmentShader, c.update(a), k = c.getVertexShaderID(a), A = c.getFragmentShaderID(a);
		let j = e.getRenderTarget(), M = _.isInstancedMesh === !0, N = !!a.map, ee = !!a.matcap, P = !!x, te = !!a.aoMap, ne = !!a.lightMap, re = !!a.bumpMap, ie = !!a.normalMap, ae = !!a.displacementMap, oe = !!a.emissiveMap, se = !!a.metalnessMap, ce = !!a.roughnessMap, le = a.anisotropy > 0, ue = a.clearcoat > 0, de = a.iridescence > 0, F = a.sheen > 0, fe = a.transmission > 0, I = le && !!a.anisotropyMap, L = ue && !!a.clearcoatMap, R = ue && !!a.clearcoatNormalMap, pe = ue && !!a.clearcoatRoughnessMap, z = de && !!a.iridescenceMap, B = de && !!a.iridescenceThicknessMap, me = F && !!a.sheenColorMap, he = F && !!a.sheenRoughnessMap, ge = !!a.specularMap, _e = !!a.specularColorMap, ve = !!a.specularIntensityMap, V = fe && !!a.transmissionMap, ye = fe && !!a.thicknessMap, be = !!a.gradientMap, xe = !!a.alphaMap, Se = a.alphaTest > 0, H = !!a.alphaHash, Ce = !!a.extensions, we = !!y.attributes.uv1, Te = !!y.attributes.uv2, Ee = !!y.attributes.uv3, De = 0;
		return a.toneMapped && (j === null || j.isXRRenderTarget === !0) && (De = e.toneMapping), {
			isWebGL2: u,
			shaderID: C,
			shaderType: a.type,
			shaderName: a.name,
			vertexShader: D,
			fragmentShader: O,
			defines: a.defines,
			customVertexShaderID: k,
			customFragmentShaderID: A,
			isRawShaderMaterial: a.isRawShaderMaterial === !0,
			glslVersion: a.glslVersion,
			precision: p,
			instancing: M,
			instancingColor: M && _.instanceColor !== null,
			supportsVertexTextures: f,
			outputColorSpace: j === null ? e.outputColorSpace : j.isXRRenderTarget === !0 ? j.texture.colorSpace : Wo,
			map: N,
			matcap: ee,
			envMap: P,
			envMapMode: P && x.mapping,
			envMapCubeUVHeight: S,
			aoMap: te,
			lightMap: ne,
			bumpMap: re,
			normalMap: ie,
			displacementMap: f && ae,
			emissiveMap: oe,
			normalMapObjectSpace: ie && a.normalMapType === 1,
			normalMapTangentSpace: ie && a.normalMapType === 0,
			metalnessMap: se,
			roughnessMap: ce,
			anisotropy: le,
			anisotropyMap: I,
			clearcoat: ue,
			clearcoatMap: L,
			clearcoatNormalMap: R,
			clearcoatRoughnessMap: pe,
			iridescence: de,
			iridescenceMap: z,
			iridescenceThicknessMap: B,
			sheen: F,
			sheenColorMap: me,
			sheenRoughnessMap: he,
			specularMap: ge,
			specularColorMap: _e,
			specularIntensityMap: ve,
			transmission: fe,
			transmissionMap: V,
			thicknessMap: ye,
			gradientMap: be,
			opaque: a.transparent === !1 && a.blending === 1,
			alphaMap: xe,
			alphaTest: Se,
			alphaHash: H,
			combine: a.combine,
			mapUv: N && h(a.map.channel),
			aoMapUv: te && h(a.aoMap.channel),
			lightMapUv: ne && h(a.lightMap.channel),
			bumpMapUv: re && h(a.bumpMap.channel),
			normalMapUv: ie && h(a.normalMap.channel),
			displacementMapUv: ae && h(a.displacementMap.channel),
			emissiveMapUv: oe && h(a.emissiveMap.channel),
			metalnessMapUv: se && h(a.metalnessMap.channel),
			roughnessMapUv: ce && h(a.roughnessMap.channel),
			anisotropyMapUv: I && h(a.anisotropyMap.channel),
			clearcoatMapUv: L && h(a.clearcoatMap.channel),
			clearcoatNormalMapUv: R && h(a.clearcoatNormalMap.channel),
			clearcoatRoughnessMapUv: pe && h(a.clearcoatRoughnessMap.channel),
			iridescenceMapUv: z && h(a.iridescenceMap.channel),
			iridescenceThicknessMapUv: B && h(a.iridescenceThicknessMap.channel),
			sheenColorMapUv: me && h(a.sheenColorMap.channel),
			sheenRoughnessMapUv: he && h(a.sheenRoughnessMap.channel),
			specularMapUv: ge && h(a.specularMap.channel),
			specularColorMapUv: _e && h(a.specularColorMap.channel),
			specularIntensityMapUv: ve && h(a.specularIntensityMap.channel),
			transmissionMapUv: V && h(a.transmissionMap.channel),
			thicknessMapUv: ye && h(a.thicknessMap.channel),
			alphaMapUv: xe && h(a.alphaMap.channel),
			vertexTangents: !!y.attributes.tangent && (ie || le),
			vertexColors: a.vertexColors,
			vertexAlphas: a.vertexColors === !0 && !!y.attributes.color && y.attributes.color.itemSize === 4,
			vertexUv1s: we,
			vertexUv2s: Te,
			vertexUv3s: Ee,
			pointsUvs: _.isPoints === !0 && !!y.attributes.uv && (N || xe),
			fog: !!v,
			useFog: a.fog === !0,
			fogExp2: v && v.isFogExp2,
			flatShading: a.flatShading === !0,
			sizeAttenuation: a.sizeAttenuation === !0,
			logarithmicDepthBuffer: d,
			skinning: _.isSkinnedMesh === !0,
			morphTargets: y.morphAttributes.position !== void 0,
			morphNormals: y.morphAttributes.normal !== void 0,
			morphColors: y.morphAttributes.color !== void 0,
			morphTargetsCount: T,
			morphTextureStride: E,
			numDirLights: s.directional.length,
			numPointLights: s.point.length,
			numSpotLights: s.spot.length,
			numSpotLightMaps: s.spotLightMap.length,
			numRectAreaLights: s.rectArea.length,
			numHemiLights: s.hemi.length,
			numDirLightShadows: s.directionalShadowMap.length,
			numPointLightShadows: s.pointShadowMap.length,
			numSpotLightShadows: s.spotShadowMap.length,
			numSpotLightShadowsWithMaps: s.numSpotLightShadowsWithMaps,
			numClippingPlanes: o.numPlanes,
			numClipIntersection: o.numIntersection,
			dithering: a.dithering,
			shadowMapEnabled: e.shadowMap.enabled && l.length > 0,
			shadowMapType: e.shadowMap.type,
			toneMapping: De,
			useLegacyLights: e._useLegacyLights,
			decodeVideoTexture: N && a.map.isVideoTexture === !0 && a.map.colorSpace === "srgb",
			premultipliedAlpha: a.premultipliedAlpha,
			doubleSided: a.side === 2,
			flipSided: a.side === 1,
			useDepthPacking: a.depthPacking >= 0,
			depthPacking: a.depthPacking || 0,
			index0AttributeName: a.index0AttributeName,
			extensionDerivatives: Ce && a.extensions.derivatives === !0,
			extensionFragDepth: Ce && a.extensions.fragDepth === !0,
			extensionDrawBuffers: Ce && a.extensions.drawBuffers === !0,
			extensionShaderTextureLOD: Ce && a.extensions.shaderTextureLOD === !0,
			rendererExtensionFragDepth: u || r.has("EXT_frag_depth"),
			rendererExtensionDrawBuffers: u || r.has("WEBGL_draw_buffers"),
			rendererExtensionShaderTextureLod: u || r.has("EXT_shader_texture_lod"),
			customProgramCacheKey: a.customProgramCacheKey()
		};
	}
	function _(t) {
		let n = [];
		if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
		return t.isRawShaderMaterial === !1 && (v(n, t), y(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
	}
	function v(e, t) {
		e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
	}
	function y(e, t) {
		s.disableAll(), t.isWebGL2 && s.enable(0), t.supportsVertexTextures && s.enable(1), t.instancing && s.enable(2), t.instancingColor && s.enable(3), t.matcap && s.enable(4), t.envMap && s.enable(5), t.normalMapObjectSpace && s.enable(6), t.normalMapTangentSpace && s.enable(7), t.clearcoat && s.enable(8), t.iridescence && s.enable(9), t.alphaTest && s.enable(10), t.vertexColors && s.enable(11), t.vertexAlphas && s.enable(12), t.vertexUv1s && s.enable(13), t.vertexUv2s && s.enable(14), t.vertexUv3s && s.enable(15), t.vertexTangents && s.enable(16), t.anisotropy && s.enable(17), e.push(s.mask), s.disableAll(), t.fog && s.enable(0), t.useFog && s.enable(1), t.flatShading && s.enable(2), t.logarithmicDepthBuffer && s.enable(3), t.skinning && s.enable(4), t.morphTargets && s.enable(5), t.morphNormals && s.enable(6), t.morphColors && s.enable(7), t.premultipliedAlpha && s.enable(8), t.shadowMapEnabled && s.enable(9), t.useLegacyLights && s.enable(10), t.doubleSided && s.enable(11), t.flipSided && s.enable(12), t.useDepthPacking && s.enable(13), t.dithering && s.enable(14), t.transmission && s.enable(15), t.sheen && s.enable(16), t.opaque && s.enable(17), t.pointsUvs && s.enable(18), t.decodeVideoTexture && s.enable(19), e.push(s.mask);
	}
	function b(e) {
		let t = m[e.type], n;
		if (t) {
			let e = Tu[t];
			n = iu.clone(e.uniforms);
		} else n = e.uniforms;
		return n;
	}
	function x(t, n) {
		let r;
		for (let e = 0, t = l.length; e < t; e++) {
			let t = l[e];
			if (t.cacheKey === n) {
				r = t, ++r.usedTimes;
				break;
			}
		}
		return r === void 0 && (r = new zf(e, n, t, a), l.push(r)), r;
	}
	function S(e) {
		if (--e.usedTimes === 0) {
			let t = l.indexOf(e);
			l[t] = l[l.length - 1], l.pop(), e.destroy();
		}
	}
	function C(e) {
		c.remove(e);
	}
	function w() {
		c.dispose();
	}
	return {
		getParameters: g,
		getProgramCacheKey: _,
		getUniforms: b,
		acquireProgram: x,
		releaseProgram: S,
		releaseShaderCache: C,
		programs: l,
		dispose: w
	};
}
function Wf() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		let n = e.get(t);
		return n === void 0 && (n = {}, e.set(t, n)), n;
	}
	function n(t) {
		e.delete(t);
	}
	function r(t, n, r) {
		e.get(t)[n] = r;
	}
	function i() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: t,
		remove: n,
		update: r,
		dispose: i
	};
}
function Gf(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.z === t.z ? e.id - t.id : e.z - t.z : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function Kf(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function qf() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a() {
		t = 0, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(n, r, i, a, o, s) {
		let c = e[t];
		return c === void 0 ? (c = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			groupOrder: a,
			renderOrder: n.renderOrder,
			z: o,
			group: s
		}, e[t] = c) : (c.id = n.id, c.object = n, c.geometry = r, c.material = i, c.groupOrder = a, c.renderOrder = n.renderOrder, c.z = o, c.group = s), t++, c;
	}
	function s(e, t, a, s, c, l) {
		let u = o(e, t, a, s, c, l);
		a.transmission > 0 ? r.push(u) : a.transparent === !0 ? i.push(u) : n.push(u);
	}
	function c(e, t, a, s, c, l) {
		let u = o(e, t, a, s, c, l);
		a.transmission > 0 ? r.unshift(u) : a.transparent === !0 ? i.unshift(u) : n.unshift(u);
	}
	function l(e, t) {
		n.length > 1 && n.sort(e || Gf), r.length > 1 && r.sort(t || Kf), i.length > 1 && i.sort(t || Kf);
	}
	function u() {
		for (let n = t, r = e.length; n < r; n++) {
			let t = e[n];
			if (t.id === null) break;
			t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
		}
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: a,
		push: s,
		unshift: c,
		finish: u,
		sort: l
	};
}
function Jf() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t, n) {
		let r = e.get(t), i;
		return r === void 0 ? (i = new qf(), e.set(t, [i])) : n >= r.length ? (i = new qf(), r.push(i)) : i = r[n], i;
	}
	function n() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: t,
		dispose: n
	};
}
function Yf() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					direction: new X(),
					color: new Z()
				};
				break;
			case "SpotLight":
				n = {
					position: new X(),
					direction: new X(),
					color: new Z(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new X(),
					color: new Z(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new X(),
					skyColor: new Z(),
					groundColor: new Z()
				};
				break;
			case "RectAreaLight":
				n = {
					color: new Z(),
					position: new X(),
					halfWidth: new X(),
					halfHeight: new X()
				};
				break;
		}
		return e[t.id] = n, n;
	} };
}
function Xf() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new J()
				};
				break;
			case "SpotLight":
				n = {
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new J()
				};
				break;
			case "PointLight":
				n = {
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new J(),
					shadowCameraNear: 1,
					shadowCameraFar: 1e3
				};
				break;
		}
		return e[t.id] = n, n;
	} };
}
var Zf = 0;
function Qf(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function $f(e, t) {
	let n = new Yf(), r = Xf(), i = {
		version: 0,
		hash: {
			directionalLength: -1,
			pointLength: -1,
			spotLength: -1,
			rectAreaLength: -1,
			hemiLength: -1,
			numDirectionalShadows: -1,
			numPointShadows: -1,
			numSpotShadows: -1,
			numSpotMaps: -1
		},
		ambient: [
			0,
			0,
			0
		],
		probe: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotLightMap: [],
		spotShadow: [],
		spotShadowMap: [],
		spotLightMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: [],
		numSpotLightShadowsWithMaps: 0
	};
	for (let e = 0; e < 9; e++) i.probe.push(new X());
	let a = new X(), o = new Dc(), s = new Dc();
	function c(a, o) {
		let s = 0, c = 0, l = 0;
		for (let e = 0; e < 9; e++) i.probe[e].set(0, 0, 0);
		let u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0;
		a.sort(Qf);
		let b = o === !0 ? Math.PI : 1;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e], o = t.color, x = t.intensity, S = t.distance, C = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
			if (t.isAmbientLight) s += o.r * x * b, c += o.g * x * b, l += o.b * x * b;
			else if (t.isLightProbe) for (let e = 0; e < 9; e++) i.probe[e].addScaledVector(t.sh.coefficients[e], x);
			else if (t.isDirectionalLight) {
				let e = n.get(t);
				if (e.color.copy(t.color).multiplyScalar(t.intensity * b), t.castShadow) {
					let e = t.shadow, n = r.get(t);
					n.shadowBias = e.bias, n.shadowNormalBias = e.normalBias, n.shadowRadius = e.radius, n.shadowMapSize = e.mapSize, i.directionalShadow[u] = n, i.directionalShadowMap[u] = C, i.directionalShadowMatrix[u] = t.shadow.matrix, h++;
				}
				i.directional[u] = e, u++;
			} else if (t.isSpotLight) {
				let e = n.get(t);
				e.position.setFromMatrixPosition(t.matrixWorld), e.color.copy(o).multiplyScalar(x * b), e.distance = S, e.coneCos = Math.cos(t.angle), e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra)), e.decay = t.decay, i.spot[f] = e;
				let a = t.shadow;
				if (t.map && (i.spotLightMap[v] = t.map, v++, a.updateMatrices(t), t.castShadow && y++), i.spotLightMatrix[f] = a.matrix, t.castShadow) {
					let e = r.get(t);
					e.shadowBias = a.bias, e.shadowNormalBias = a.normalBias, e.shadowRadius = a.radius, e.shadowMapSize = a.mapSize, i.spotShadow[f] = e, i.spotShadowMap[f] = C, _++;
				}
				f++;
			} else if (t.isRectAreaLight) {
				let e = n.get(t);
				e.color.copy(o).multiplyScalar(x), e.halfWidth.set(t.width * .5, 0, 0), e.halfHeight.set(0, t.height * .5, 0), i.rectArea[p] = e, p++;
			} else if (t.isPointLight) {
				let e = n.get(t);
				if (e.color.copy(t.color).multiplyScalar(t.intensity * b), e.distance = t.distance, e.decay = t.decay, t.castShadow) {
					let e = t.shadow, n = r.get(t);
					n.shadowBias = e.bias, n.shadowNormalBias = e.normalBias, n.shadowRadius = e.radius, n.shadowMapSize = e.mapSize, n.shadowCameraNear = e.camera.near, n.shadowCameraFar = e.camera.far, i.pointShadow[d] = n, i.pointShadowMap[d] = C, i.pointShadowMatrix[d] = t.shadow.matrix, g++;
				}
				i.point[d] = e, d++;
			} else if (t.isHemisphereLight) {
				let e = n.get(t);
				e.skyColor.copy(t.color).multiplyScalar(x * b), e.groundColor.copy(t.groundColor).multiplyScalar(x * b), i.hemi[m] = e, m++;
			}
		}
		p > 0 && (t.isWebGL2 || e.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = $.LTC_FLOAT_1, i.rectAreaLTC2 = $.LTC_FLOAT_2) : e.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = $.LTC_HALF_1, i.rectAreaLTC2 = $.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = s, i.ambient[1] = c, i.ambient[2] = l;
		let x = i.hash;
		(x.directionalLength !== u || x.pointLength !== d || x.spotLength !== f || x.rectAreaLength !== p || x.hemiLength !== m || x.numDirectionalShadows !== h || x.numPointShadows !== g || x.numSpotShadows !== _ || x.numSpotMaps !== v) && (i.directional.length = u, i.spot.length = f, i.rectArea.length = p, i.point.length = d, i.hemi.length = m, i.directionalShadow.length = h, i.directionalShadowMap.length = h, i.pointShadow.length = g, i.pointShadowMap.length = g, i.spotShadow.length = _, i.spotShadowMap.length = _, i.directionalShadowMatrix.length = h, i.pointShadowMatrix.length = g, i.spotLightMatrix.length = _ + v - y, i.spotLightMap.length = v, i.numSpotLightShadowsWithMaps = y, x.directionalLength = u, x.pointLength = d, x.spotLength = f, x.rectAreaLength = p, x.hemiLength = m, x.numDirectionalShadows = h, x.numPointShadows = g, x.numSpotShadows = _, x.numSpotMaps = v, i.version = Zf++);
	}
	function l(e, t) {
		let n = 0, r = 0, c = 0, l = 0, u = 0, d = t.matrixWorldInverse;
		for (let t = 0, f = e.length; t < f; t++) {
			let f = e[t];
			if (f.isDirectionalLight) {
				let e = i.directional[n];
				e.direction.setFromMatrixPosition(f.matrixWorld), a.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(d), n++;
			} else if (f.isSpotLight) {
				let e = i.spot[c];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), e.direction.setFromMatrixPosition(f.matrixWorld), a.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(d), c++;
			} else if (f.isRectAreaLight) {
				let e = i.rectArea[l];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), s.identity(), o.copy(f.matrixWorld), o.premultiply(d), s.extractRotation(o), e.halfWidth.set(f.width * .5, 0, 0), e.halfHeight.set(0, f.height * .5, 0), e.halfWidth.applyMatrix4(s), e.halfHeight.applyMatrix4(s), l++;
			} else if (f.isPointLight) {
				let e = i.point[r];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), r++;
			} else if (f.isHemisphereLight) {
				let e = i.hemi[u];
				e.direction.setFromMatrixPosition(f.matrixWorld), e.direction.transformDirection(d), u++;
			}
		}
	}
	return {
		setup: c,
		setupView: l,
		state: i
	};
}
function ep(e, t) {
	let n = new $f(e, t), r = [], i = [];
	function a() {
		r.length = 0, i.length = 0;
	}
	function o(e) {
		r.push(e);
	}
	function s(e) {
		i.push(e);
	}
	function c(e) {
		n.setup(r, e);
	}
	function l(e) {
		n.setupView(r, e);
	}
	return {
		init: a,
		state: {
			lightsArray: r,
			shadowsArray: i,
			lights: n
		},
		setupLights: c,
		setupLightsView: l,
		pushLight: o,
		pushShadow: s
	};
}
function tp(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	function r(r, i = 0) {
		let a = n.get(r), o;
		return a === void 0 ? (o = new ep(e, t), n.set(r, [o])) : i >= a.length ? (o = new ep(e, t), a.push(o)) : o = a[i], o;
	}
	function i() {
		n = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: r,
		dispose: i
	};
}
var np = class extends fl {
	constructor(e) {
		super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Vo, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
	}
}, rp = class extends fl {
	constructor(e) {
		super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
	}
}, ip = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", ap = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}";
function op(e, t, n) {
	let r = new xu(), i = new J(), a = new J(), o = new Ks(), s = new np({ depthPacking: Ho }), c = new rp(), l = {}, u = n.maxTextureSize, d = {
		0: 1,
		1: 0,
		2: 2
	}, f = new su({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new J() },
			radius: { value: 4 }
		},
		vertexShader: ip,
		fragmentShader: ap
	}), p = f.clone();
	p.defines.HORIZONTAL_PASS = 1;
	let m = new Ml();
	m.setAttribute("position", new xl(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let h = new Xl(m, f), g = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let _ = this.type;
	this.render = function(t, n, s) {
		if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || t.length === 0) return;
		let c = e.getRenderTarget(), l = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), f = e.state;
		f.setBlending(0), f.buffers.color.setClear(1, 1, 1, 1), f.buffers.depth.setTest(!0), f.setScissorTest(!1);
		let p = _ !== 3 && this.type === 3, m = _ === 3 && this.type !== 3;
		for (let c = 0, l = t.length; c < l; c++) {
			let l = t[c], d = l.shadow;
			if (d === void 0) {
				console.warn("THREE.WebGLShadowMap:", l, "has no shadow.");
				continue;
			}
			if (d.autoUpdate === !1 && d.needsUpdate === !1) continue;
			i.copy(d.mapSize);
			let h = d.getFrameExtents();
			if (i.multiply(h), a.copy(d.mapSize), (i.x > u || i.y > u) && (i.x > u && (a.x = Math.floor(u / h.x), i.x = a.x * h.x, d.mapSize.x = a.x), i.y > u && (a.y = Math.floor(u / h.y), i.y = a.y * h.y, d.mapSize.y = a.y)), d.map === null || p === !0 || m === !0) {
				let e = this.type === 3 ? {} : {
					minFilter: yo,
					magFilter: yo
				};
				d.map !== null && d.map.dispose(), d.map = new Js(i.x, i.y, e), d.map.texture.name = l.name + ".shadowMap", d.camera.updateProjectionMatrix();
			}
			e.setRenderTarget(d.map), e.clear();
			let g = d.getViewportCount();
			for (let e = 0; e < g; e++) {
				let t = d.getViewport(e);
				o.set(a.x * t.x, a.y * t.y, a.x * t.z, a.y * t.w), f.viewport(o), d.updateMatrices(l, e), r = d.getFrustum(), b(n, s, d.camera, l, this.type);
			}
			d.isPointLightShadow !== !0 && this.type === 3 && v(d, s), d.needsUpdate = !1;
		}
		_ = this.type, g.needsUpdate = !1, e.setRenderTarget(c, l, d);
	};
	function v(n, r) {
		let a = t.update(h);
		f.defines.VSM_SAMPLES !== n.blurSamples && (f.defines.VSM_SAMPLES = n.blurSamples, p.defines.VSM_SAMPLES = n.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0), n.mapPass === null && (n.mapPass = new Js(i.x, i.y)), f.uniforms.shadow_pass.value = n.map.texture, f.uniforms.resolution.value = n.mapSize, f.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, f, h, null), p.uniforms.shadow_pass.value = n.mapPass.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, p, h, null);
	}
	function y(t, n, r, i) {
		let a = null, o = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial;
		if (o !== void 0) a = o;
		else if (a = r.isPointLight === !0 ? c : s, e.localClippingEnabled && n.clipShadows === !0 && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0) {
			let e = a.uuid, t = n.uuid, r = l[e];
			r === void 0 && (r = {}, l[e] = r);
			let i = r[t];
			i === void 0 && (i = a.clone(), r[t] = i), a = i;
		}
		if (a.visible = n.visible, a.wireframe = n.wireframe, i === 3 ? a.side = n.shadowSide === null ? n.side : n.shadowSide : a.side = n.shadowSide === null ? d[n.side] : n.shadowSide, a.alphaMap = n.alphaMap, a.alphaTest = n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, r.isPointLight === !0 && a.isMeshDistanceMaterial === !0) {
			let t = e.properties.get(a);
			t.light = r;
		}
		return a;
	}
	function b(n, i, a, o, s) {
		if (n.visible === !1) return;
		if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === 3) && (!n.frustumCulled || r.intersectsObject(n))) {
			n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
			let r = t.update(n), i = n.material;
			if (Array.isArray(i)) {
				let t = r.groups;
				for (let c = 0, l = t.length; c < l; c++) {
					let l = t[c], u = i[l.materialIndex];
					if (u && u.visible) {
						let t = y(n, u, o, s);
						e.renderBufferDirect(a, null, r, t, n, l);
					}
				}
			} else if (i.visible) {
				let t = y(n, i, o, s);
				e.renderBufferDirect(a, null, r, t, n, null);
			}
		}
		let c = n.children;
		for (let e = 0, t = c.length; e < t; e++) b(c[e], i, a, o, s);
	}
}
function sp(e, t, n) {
	let r = n.isWebGL2;
	function i() {
		let t = !1, n = new Ks(), r = null, i = new Ks(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r !== n && !t && (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, o, s) {
				s === !0 && (t *= o, r *= o, a *= o), n.set(t, r, a, o), i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}
	function a() {
		let t = !1, n = null, r = null, i = null;
		return {
			setTest: function(t) {
				t ? ce(e.DEPTH_TEST) : le(e.DEPTH_TEST);
			},
			setMask: function(r) {
				n !== r && !t && (e.depthMask(r), n = r);
			},
			setFunc: function(t) {
				if (r !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7:
							e.depthFunc(e.NOTEQUAL);
							break;
						default: e.depthFunc(e.LEQUAL);
					}
					r = t;
				}
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				i !== t && (e.clearDepth(t), i = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null;
			}
		};
	}
	function o() {
		let t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
		return {
			setTest: function(n) {
				t || (n ? ce(e.STENCIL_TEST) : le(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n !== r && !t && (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, o) {
				(r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o), r = t, i = n, a = o);
			},
			setOp: function(t, n, r) {
				(o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r), o = t, s = n, c = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				l !== t && (e.clearStencil(t), l = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
			}
		};
	}
	let s = new i(), c = new a(), l = new o(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), f = {}, p = {}, m = /* @__PURE__ */ new WeakMap(), h = [], g = null, _ = !1, v = null, y = null, b = null, x = null, S = null, C = null, w = null, T = !1, E = null, D = null, O = null, k = null, A = null, j = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), M = !1, N = 0, ee = e.getParameter(e.VERSION);
	ee.indexOf("WebGL") === -1 ? ee.indexOf("OpenGL ES") !== -1 && (N = parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]), M = N >= 2) : (N = parseFloat(/^WebGL (\d)/.exec(ee)[1]), M = N >= 1);
	let P = null, te = {}, ne = e.getParameter(e.SCISSOR_BOX), re = e.getParameter(e.VIEWPORT), ie = new Ks().fromArray(ne), ae = new Ks().fromArray(re);
	function oe(t, n, i, a) {
		let o = new Uint8Array(4), s = e.createTexture();
		e.bindTexture(t, s), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let s = 0; s < i; s++) r && (t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY) ? e.texImage3D(n, 0, e.RGBA, 1, 1, a, 0, e.RGBA, e.UNSIGNED_BYTE, o) : e.texImage2D(n + s, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, o);
		return s;
	}
	let se = {};
	se[e.TEXTURE_2D] = oe(e.TEXTURE_2D, e.TEXTURE_2D, 1), se[e.TEXTURE_CUBE_MAP] = oe(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), r && (se[e.TEXTURE_2D_ARRAY] = oe(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), se[e.TEXTURE_3D] = oe(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1)), s.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), ce(e.DEPTH_TEST), c.setFunc(3), pe(!1), z(1), ce(e.CULL_FACE), L(0);
	function ce(t) {
		f[t] !== !0 && (e.enable(t), f[t] = !0);
	}
	function le(t) {
		f[t] !== !1 && (e.disable(t), f[t] = !1);
	}
	function ue(t, n) {
		return p[t] === n ? !1 : (e.bindFramebuffer(t, n), p[t] = n, r && (t === e.DRAW_FRAMEBUFFER && (p[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (p[e.DRAW_FRAMEBUFFER] = n)), !0);
	}
	function de(r, i) {
		let a = h, o = !1;
		if (r) if (a = m.get(i), a === void 0 && (a = [], m.set(i, a)), r.isWebGLMultipleRenderTargets) {
			let t = r.texture;
			if (a.length !== t.length || a[0] !== e.COLOR_ATTACHMENT0) {
				for (let n = 0, r = t.length; n < r; n++) a[n] = e.COLOR_ATTACHMENT0 + n;
				a.length = t.length, o = !0;
			}
		} else a[0] !== e.COLOR_ATTACHMENT0 && (a[0] = e.COLOR_ATTACHMENT0, o = !0);
		else a[0] !== e.BACK && (a[0] = e.BACK, o = !0);
		o && (n.isWebGL2 ? e.drawBuffers(a) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(a));
	}
	function F(t) {
		return g === t ? !1 : (e.useProgram(t), g = t, !0);
	}
	let fe = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	if (r) fe[103] = e.MIN, fe[104] = e.MAX;
	else {
		let e = t.get("EXT_blend_minmax");
		e !== null && (fe[103] = e.MIN_EXT, fe[104] = e.MAX_EXT);
	}
	let I = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA
	};
	function L(t, n, r, i, a, o, s, c) {
		if (t === 0) {
			_ === !0 && (le(e.BLEND), _ = !1);
			return;
		}
		if (_ === !1 && (ce(e.BLEND), _ = !0), t !== 5) {
			if (t !== v || c !== T) {
				if ((y !== 100 || S !== 100) && (e.blendEquation(e.FUNC_ADD), y = 100, S = 100), c) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA);
						break;
					default:
						console.error("THREE.WebGLState: Invalid blending: ", t);
						break;
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.SRC_ALPHA, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFunc(e.ZERO, e.SRC_COLOR);
						break;
					default:
						console.error("THREE.WebGLState: Invalid blending: ", t);
						break;
				}
				b = null, x = null, C = null, w = null, v = t, T = c;
			}
			return;
		}
		a ||= n, o ||= r, s ||= i, (n !== y || a !== S) && (e.blendEquationSeparate(fe[n], fe[a]), y = n, S = a), (r !== b || i !== x || o !== C || s !== w) && (e.blendFuncSeparate(I[r], I[i], I[o], I[s]), b = r, x = i, C = o, w = s), v = t, T = !1;
	}
	function R(t, n) {
		t.side === 2 ? le(e.CULL_FACE) : ce(e.CULL_FACE);
		let r = t.side === 1;
		n && (r = !r), pe(r), t.blending === 1 && t.transparent === !1 ? L(0) : L(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), c.setFunc(t.depthFunc), c.setTest(t.depthTest), c.setMask(t.depthWrite), s.setMask(t.colorWrite);
		let i = t.stencilWrite;
		l.setTest(i), i && (l.setMask(t.stencilWriteMask), l.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), l.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), me(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), t.alphaToCoverage === !0 ? ce(e.SAMPLE_ALPHA_TO_COVERAGE) : le(e.SAMPLE_ALPHA_TO_COVERAGE);
	}
	function pe(t) {
		E !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), E = t);
	}
	function z(t) {
		t === 0 ? le(e.CULL_FACE) : (ce(e.CULL_FACE), t !== D && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), D = t;
	}
	function B(t) {
		t !== O && (M && e.lineWidth(t), O = t);
	}
	function me(t, n, r) {
		t ? (ce(e.POLYGON_OFFSET_FILL), (k !== n || A !== r) && (e.polygonOffset(n, r), k = n, A = r)) : le(e.POLYGON_OFFSET_FILL);
	}
	function he(t) {
		t ? ce(e.SCISSOR_TEST) : le(e.SCISSOR_TEST);
	}
	function ge(t) {
		t === void 0 && (t = e.TEXTURE0 + j - 1), P !== t && (e.activeTexture(t), P = t);
	}
	function _e(t, n, r) {
		r === void 0 && (r = P === null ? e.TEXTURE0 + j - 1 : P);
		let i = te[r];
		i === void 0 && (i = {
			type: void 0,
			texture: void 0
		}, te[r] = i), (i.type !== t || i.texture !== n) && (P !== r && (e.activeTexture(r), P = r), e.bindTexture(t, n || se[t]), i.type = t, i.texture = n);
	}
	function ve() {
		let t = te[P];
		t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
	}
	function V() {
		try {
			e.compressedTexImage2D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function ye() {
		try {
			e.compressedTexImage3D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function be() {
		try {
			e.texSubImage2D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function xe() {
		try {
			e.texSubImage3D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function Se() {
		try {
			e.compressedTexSubImage2D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function H() {
		try {
			e.compressedTexSubImage3D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function Ce() {
		try {
			e.texStorage2D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function we() {
		try {
			e.texStorage3D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function Te() {
		try {
			e.texImage2D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function Ee() {
		try {
			e.texImage3D.apply(e, arguments);
		} catch (e) {
			console.error("THREE.WebGLState:", e);
		}
	}
	function De(t) {
		ie.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), ie.copy(t));
	}
	function Oe(t) {
		ae.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), ae.copy(t));
	}
	function ke(t, n) {
		let r = d.get(n);
		r === void 0 && (r = /* @__PURE__ */ new WeakMap(), d.set(n, r));
		let i = r.get(t);
		i === void 0 && (i = e.getUniformBlockIndex(n, t.name), r.set(t, i));
	}
	function U(t, n) {
		let r = d.get(n).get(t);
		u.get(n) !== r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex), u.set(n, r));
	}
	function Ae() {
		e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), r === !0 && (e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null)), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), f = {}, P = null, te = {}, p = {}, m = /* @__PURE__ */ new WeakMap(), h = [], g = null, _ = !1, v = null, y = null, b = null, x = null, S = null, C = null, w = null, T = !1, E = null, D = null, O = null, k = null, A = null, ie.set(0, 0, e.canvas.width, e.canvas.height), ae.set(0, 0, e.canvas.width, e.canvas.height), s.reset(), c.reset(), l.reset();
	}
	return {
		buffers: {
			color: s,
			depth: c,
			stencil: l
		},
		enable: ce,
		disable: le,
		bindFramebuffer: ue,
		drawBuffers: de,
		useProgram: F,
		setBlending: L,
		setMaterial: R,
		setFlipSided: pe,
		setCullFace: z,
		setLineWidth: B,
		setPolygonOffset: me,
		setScissorTest: he,
		activeTexture: ge,
		bindTexture: _e,
		unbindTexture: ve,
		compressedTexImage2D: V,
		compressedTexImage3D: ye,
		texImage2D: Te,
		texImage3D: Ee,
		updateUBOMapping: ke,
		uniformBlockBinding: U,
		texStorage2D: Ce,
		texStorage3D: we,
		texSubImage2D: be,
		texSubImage3D: xe,
		compressedTexSubImage2D: Se,
		compressedTexSubImage3D: H,
		scissor: De,
		viewport: Oe,
		reset: Ae
	};
}
function cp(e, t, n, r, i, a, o) {
	let s = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, u = i.maxTextureSize, d = i.maxSamples, f = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, p = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), m = /* @__PURE__ */ new WeakMap(), h, g = /* @__PURE__ */ new WeakMap(), _ = !1;
	try {
		_ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function v(e, t) {
		return _ ? new OffscreenCanvas(e, t) : Es("canvas");
	}
	function y(e, t, n, r) {
		let i = 1;
		if ((e.width > r || e.height > r) && (i = r / Math.max(e.width, e.height)), i < 1 || t === !0) if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let r = t ? ys : Math.floor, a = r(i * e.width), o = r(i * e.height);
			h === void 0 && (h = v(a, o));
			let s = n ? v(a, o) : h;
			return s.width = a, s.height = o, s.getContext("2d").drawImage(e, 0, 0, a, o), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + a + "x" + o + ")."), s;
		} else return "data" in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ")."), e;
		return e;
	}
	function b(e) {
		return _s(e.width) && _s(e.height);
	}
	function x(e) {
		return s ? !1 : e.wrapS !== 1001 || e.wrapT !== 1001 || e.minFilter !== 1003 && e.minFilter !== 1006;
	}
	function S(e, t) {
		return e.generateMipmaps && t && e.minFilter !== 1003 && e.minFilter !== 1006;
	}
	function C(t) {
		e.generateMipmap(t);
	}
	function w(n, r, i, a, o = !1) {
		if (s === !1) return r;
		if (n !== null) {
			if (e[n] !== void 0) return e[n];
			console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
		}
		let c = r;
		return r === e.RED && (i === e.FLOAT && (c = e.R32F), i === e.HALF_FLOAT && (c = e.R16F), i === e.UNSIGNED_BYTE && (c = e.R8)), r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (c = e.R8UI), i === e.UNSIGNED_SHORT && (c = e.R16UI), i === e.UNSIGNED_INT && (c = e.R32UI), i === e.BYTE && (c = e.R8I), i === e.SHORT && (c = e.R16I), i === e.INT && (c = e.R32I)), r === e.RG && (i === e.FLOAT && (c = e.RG32F), i === e.HALF_FLOAT && (c = e.RG16F), i === e.UNSIGNED_BYTE && (c = e.RG8)), r === e.RGBA && (i === e.FLOAT && (c = e.RGBA32F), i === e.HALF_FLOAT && (c = e.RGBA16F), i === e.UNSIGNED_BYTE && (c = a === "srgb" && o === !1 ? e.SRGB8_ALPHA8 : e.RGBA8), i === e.UNSIGNED_SHORT_4_4_4_4 && (c = e.RGBA4), i === e.UNSIGNED_SHORT_5_5_5_1 && (c = e.RGB5_A1)), (c === e.R16F || c === e.R32F || c === e.RG16F || c === e.RG32F || c === e.RGBA16F || c === e.RGBA32F) && t.get("EXT_color_buffer_float"), c;
	}
	function T(e, t, n) {
		return S(e, n) === !0 || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps !== void 0 && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function E(t) {
		return t === 1003 || t === 1004 || t === 1005 ? e.NEAREST : e.LINEAR;
	}
	function D(e) {
		let t = e.target;
		t.removeEventListener("dispose", D), k(t), t.isVideoTexture && m.delete(t);
	}
	function O(e) {
		let t = e.target;
		t.removeEventListener("dispose", O), j(t);
	}
	function k(e) {
		let t = r.get(e);
		if (t.__webglInit === void 0) return;
		let n = e.source, i = g.get(n);
		if (i) {
			let r = i[t.__cacheKey];
			r.usedTimes--, r.usedTimes === 0 && A(e), Object.keys(i).length === 0 && g.delete(n);
		}
		r.remove(e);
	}
	function A(t) {
		let n = r.get(t);
		e.deleteTexture(n.__webglTexture);
		let i = t.source, a = g.get(i);
		delete a[n.__cacheKey], o.memory.textures--;
	}
	function j(t) {
		let n = t.texture, i = r.get(t), a = r.get(n);
		if (a.__webglTexture !== void 0 && (e.deleteTexture(a.__webglTexture), o.memory.textures--), t.depthTexture && t.depthTexture.dispose(), t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) {
			if (Array.isArray(i.__webglFramebuffer[t])) for (let n = 0; n < i.__webglFramebuffer[t].length; n++) e.deleteFramebuffer(i.__webglFramebuffer[t][n]);
			else e.deleteFramebuffer(i.__webglFramebuffer[t]);
			i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer[t]);
		}
		else {
			if (Array.isArray(i.__webglFramebuffer)) for (let t = 0; t < i.__webglFramebuffer.length; t++) e.deleteFramebuffer(i.__webglFramebuffer[t]);
			else e.deleteFramebuffer(i.__webglFramebuffer);
			if (i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer), i.__webglMultisampledFramebuffer && e.deleteFramebuffer(i.__webglMultisampledFramebuffer), i.__webglColorRenderbuffer) for (let t = 0; t < i.__webglColorRenderbuffer.length; t++) i.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(i.__webglColorRenderbuffer[t]);
			i.__webglDepthRenderbuffer && e.deleteRenderbuffer(i.__webglDepthRenderbuffer);
		}
		if (t.isWebGLMultipleRenderTargets) for (let t = 0, i = n.length; t < i; t++) {
			let i = r.get(n[t]);
			i.__webglTexture && (e.deleteTexture(i.__webglTexture), o.memory.textures--), r.remove(n[t]);
		}
		r.remove(n), r.remove(t);
	}
	let M = 0;
	function N() {
		M = 0;
	}
	function ee() {
		let e = M;
		return e >= c && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + c), M += 1, e;
	}
	function P(e) {
		let t = [];
		return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
	}
	function te(t, i) {
		let a = r.get(t);
		if (t.isVideoTexture && ge(t), t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version) {
			let e = t.image;
			if (e === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
			else if (e.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				ue(a, t, i);
				return;
			}
		}
		n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function ne(t, i) {
		let a = r.get(t);
		if (t.version > 0 && a.__version !== t.version) {
			ue(a, t, i);
			return;
		}
		n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i);
	}
	function re(t, i) {
		let a = r.get(t);
		if (t.version > 0 && a.__version !== t.version) {
			ue(a, t, i);
			return;
		}
		n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function ie(t, i) {
		let a = r.get(t);
		if (t.version > 0 && a.__version !== t.version) {
			de(a, t, i);
			return;
		}
		n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture, e.TEXTURE0 + i);
	}
	let ae = {
		[go]: e.REPEAT,
		[_o]: e.CLAMP_TO_EDGE,
		[vo]: e.MIRRORED_REPEAT
	}, oe = {
		[yo]: e.NEAREST,
		[bo]: e.NEAREST_MIPMAP_NEAREST,
		[xo]: e.NEAREST_MIPMAP_LINEAR,
		[So]: e.LINEAR,
		[Co]: e.LINEAR_MIPMAP_NEAREST,
		[wo]: e.LINEAR_MIPMAP_LINEAR
	}, se = {
		512: e.NEVER,
		519: e.ALWAYS,
		513: e.LESS,
		515: e.LEQUAL,
		514: e.EQUAL,
		518: e.GEQUAL,
		516: e.GREATER,
		517: e.NOTEQUAL
	};
	function ce(n, a, o) {
		if (o ? (e.texParameteri(n, e.TEXTURE_WRAP_S, ae[a.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, ae[a.wrapT]), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, ae[a.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, oe[a.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, oe[a.minFilter])) : (e.texParameteri(n, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(n, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, e.CLAMP_TO_EDGE), (a.wrapS !== 1001 || a.wrapT !== 1001) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(n, e.TEXTURE_MAG_FILTER, E(a.magFilter)), e.texParameteri(n, e.TEXTURE_MIN_FILTER, E(a.minFilter)), a.minFilter !== 1003 && a.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), a.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, se[a.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
			let o = t.get("EXT_texture_filter_anisotropic");
			if (a.magFilter === 1003 || a.minFilter !== 1005 && a.minFilter !== 1008 || a.type === 1015 && t.has("OES_texture_float_linear") === !1 || s === !1 && a.type === 1016 && t.has("OES_texture_half_float_linear") === !1) return;
			(a.anisotropy > 1 || r.get(a).__currentAnisotropy) && (e.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy);
		}
	}
	function le(t, n) {
		let r = !1;
		t.__webglInit === void 0 && (t.__webglInit = !0, n.addEventListener("dispose", D));
		let i = n.source, a = g.get(i);
		a === void 0 && (a = {}, g.set(i, a));
		let s = P(n);
		if (s !== t.__cacheKey) {
			a[s] === void 0 && (a[s] = {
				texture: e.createTexture(),
				usedTimes: 0
			}, o.memory.textures++, r = !0), a[s].usedTimes++;
			let i = a[t.__cacheKey];
			i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && A(n)), t.__cacheKey = s, t.__webglTexture = a[s].texture;
		}
		return r;
	}
	function ue(t, i, o) {
		let c = e.TEXTURE_2D;
		(i.isDataArrayTexture || i.isCompressedArrayTexture) && (c = e.TEXTURE_2D_ARRAY), i.isData3DTexture && (c = e.TEXTURE_3D);
		let l = le(t, i), d = i.source;
		n.bindTexture(c, t.__webglTexture, e.TEXTURE0 + o);
		let f = r.get(d);
		if (d.version !== f.__version || l === !0) {
			n.activeTexture(e.TEXTURE0 + o), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, i.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, i.unpackAlignment), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.NONE);
			let t = x(i) && b(i.image) === !1, r = y(i.image, t, !1, u);
			r = _e(i, r);
			let p = b(r) || s, m = a.convert(i.format, i.colorSpace), h = a.convert(i.type), g = w(i.internalFormat, m, h, i.colorSpace, i.isVideoTexture);
			ce(c, i, p);
			let _, v = i.mipmaps, E = s && i.isVideoTexture !== !0, D = f.__version === void 0 || l === !0, O = T(i, r, p);
			if (i.isDepthTexture) g = e.DEPTH_COMPONENT, s ? g = i.type === 1015 ? e.DEPTH_COMPONENT32F : i.type === 1014 ? e.DEPTH_COMPONENT24 : i.type === 1020 ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT16 : i.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === 1026 && g === e.DEPTH_COMPONENT && i.type !== 1012 && i.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = Eo, h = a.convert(i.type)), i.format === 1027 && g === e.DEPTH_COMPONENT && (g = e.DEPTH_STENCIL, i.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = ko, h = a.convert(i.type))), D && (E ? n.texStorage2D(e.TEXTURE_2D, 1, g, r.width, r.height) : n.texImage2D(e.TEXTURE_2D, 0, g, r.width, r.height, 0, m, h, null));
			else if (i.isDataTexture) if (v.length > 0 && p) {
				E && D && n.texStorage2D(e.TEXTURE_2D, O, g, v[0].width, v[0].height);
				for (let t = 0, r = v.length; t < r; t++) _ = v[t], E ? n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, _.width, _.height, m, h, _.data) : n.texImage2D(e.TEXTURE_2D, t, g, _.width, _.height, 0, m, h, _.data);
				i.generateMipmaps = !1;
			} else E ? (D && n.texStorage2D(e.TEXTURE_2D, O, g, r.width, r.height), n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, m, h, r.data)) : n.texImage2D(e.TEXTURE_2D, 0, g, r.width, r.height, 0, m, h, r.data);
			else if (i.isCompressedTexture) if (i.isCompressedArrayTexture) {
				E && D && n.texStorage3D(e.TEXTURE_2D_ARRAY, O, g, v[0].width, v[0].height, r.depth);
				for (let t = 0, a = v.length; t < a; t++) _ = v[t], i.format === 1023 ? E ? n.texSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, 0, _.width, _.height, r.depth, m, h, _.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, t, g, _.width, _.height, r.depth, 0, m, h, _.data) : m === null ? console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : E ? n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, 0, _.width, _.height, r.depth, m, _.data, 0, 0) : n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, t, g, _.width, _.height, r.depth, 0, _.data, 0, 0);
			} else {
				E && D && n.texStorage2D(e.TEXTURE_2D, O, g, v[0].width, v[0].height);
				for (let t = 0, r = v.length; t < r; t++) _ = v[t], i.format === 1023 ? E ? n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, _.width, _.height, m, h, _.data) : n.texImage2D(e.TEXTURE_2D, t, g, _.width, _.height, 0, m, h, _.data) : m === null ? console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : E ? n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, _.width, _.height, m, _.data) : n.compressedTexImage2D(e.TEXTURE_2D, t, g, _.width, _.height, 0, _.data);
			}
			else if (i.isDataArrayTexture) E ? (D && n.texStorage3D(e.TEXTURE_2D_ARRAY, O, g, r.width, r.height, r.depth), n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, r.width, r.height, r.depth, m, h, r.data)) : n.texImage3D(e.TEXTURE_2D_ARRAY, 0, g, r.width, r.height, r.depth, 0, m, h, r.data);
			else if (i.isData3DTexture) E ? (D && n.texStorage3D(e.TEXTURE_3D, O, g, r.width, r.height, r.depth), n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, r.width, r.height, r.depth, m, h, r.data)) : n.texImage3D(e.TEXTURE_3D, 0, g, r.width, r.height, r.depth, 0, m, h, r.data);
			else if (i.isFramebufferTexture) {
				if (D) if (E) n.texStorage2D(e.TEXTURE_2D, O, g, r.width, r.height);
				else {
					let t = r.width, i = r.height;
					for (let r = 0; r < O; r++) n.texImage2D(e.TEXTURE_2D, r, g, t, i, 0, m, h, null), t >>= 1, i >>= 1;
				}
			} else if (v.length > 0 && p) {
				E && D && n.texStorage2D(e.TEXTURE_2D, O, g, v[0].width, v[0].height);
				for (let t = 0, r = v.length; t < r; t++) _ = v[t], E ? n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, m, h, _) : n.texImage2D(e.TEXTURE_2D, t, g, m, h, _);
				i.generateMipmaps = !1;
			} else E ? (D && n.texStorage2D(e.TEXTURE_2D, O, g, r.width, r.height), n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, m, h, r)) : n.texImage2D(e.TEXTURE_2D, 0, g, m, h, r);
			S(i, p) && C(c), f.__version = d.version, i.onUpdate && i.onUpdate(i);
		}
		t.__version = i.version;
	}
	function de(t, i, o) {
		if (i.image.length !== 6) return;
		let c = le(t, i), u = i.source;
		n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + o);
		let d = r.get(u);
		if (u.version !== d.__version || c === !0) {
			n.activeTexture(e.TEXTURE0 + o), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, i.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, i.unpackAlignment), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.NONE);
			let t = i.isCompressedTexture || i.image[0].isCompressedTexture, r = i.image[0] && i.image[0].isDataTexture, f = [];
			for (let e = 0; e < 6; e++) !t && !r ? f[e] = y(i.image[e], !1, !0, l) : f[e] = r ? i.image[e].image : i.image[e], f[e] = _e(i, f[e]);
			let p = f[0], m = b(p) || s, h = a.convert(i.format, i.colorSpace), g = a.convert(i.type), _ = w(i.internalFormat, h, g, i.colorSpace), v = s && i.isVideoTexture !== !0, x = d.__version === void 0 || c === !0, E = T(i, p, m);
			ce(e.TEXTURE_CUBE_MAP, i, m);
			let D;
			if (t) {
				v && x && n.texStorage2D(e.TEXTURE_CUBE_MAP, E, _, p.width, p.height);
				for (let t = 0; t < 6; t++) {
					D = f[t].mipmaps;
					for (let r = 0; r < D.length; r++) {
						let a = D[r];
						i.format === 1023 ? v ? n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, a.width, a.height, h, g, a.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, _, a.width, a.height, 0, h, g, a.data) : h === null ? console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : v ? n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, a.width, a.height, h, a.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, _, a.width, a.height, 0, a.data);
					}
				}
			} else {
				D = i.mipmaps, v && x && (D.length > 0 && E++, n.texStorage2D(e.TEXTURE_CUBE_MAP, E, _, f[0].width, f[0].height));
				for (let t = 0; t < 6; t++) if (r) {
					v ? n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, f[t].width, f[t].height, h, g, f[t].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, _, f[t].width, f[t].height, 0, h, g, f[t].data);
					for (let r = 0; r < D.length; r++) {
						let i = D[r].image[t].image;
						v ? n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, i.width, i.height, h, g, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, _, i.width, i.height, 0, h, g, i.data);
					}
				} else {
					v ? n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, h, g, f[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, _, h, g, f[t]);
					for (let r = 0; r < D.length; r++) {
						let i = D[r];
						v ? n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, h, g, i.image[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, _, h, g, i.image[t]);
					}
				}
			}
			S(i, m) && C(e.TEXTURE_CUBE_MAP), d.__version = u.version, i.onUpdate && i.onUpdate(i);
		}
		t.__version = i.version;
	}
	function F(t, i, o, s, c, l) {
		let u = a.convert(o.format, o.colorSpace), d = a.convert(o.type), p = w(o.internalFormat, u, d, o.colorSpace);
		if (!r.get(i).__hasExternalTextures) {
			let t = Math.max(1, i.width >> l), r = Math.max(1, i.height >> l);
			c === e.TEXTURE_3D || c === e.TEXTURE_2D_ARRAY ? n.texImage3D(c, l, p, t, r, i.depth, 0, u, d, null) : n.texImage2D(c, l, p, t, r, 0, u, d, null);
		}
		n.bindFramebuffer(e.FRAMEBUFFER, t), he(i) ? f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, s, c, r.get(o).__webglTexture, 0, me(i)) : (c === e.TEXTURE_2D || c >= e.TEXTURE_CUBE_MAP_POSITIVE_X && c <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, s, c, r.get(o).__webglTexture, l), n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function fe(t, n, r) {
		if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer && !n.stencilBuffer) {
			let i = e.DEPTH_COMPONENT16;
			if (r || he(n)) {
				let t = n.depthTexture;
				t && t.isDepthTexture && (t.type === 1015 ? i = e.DEPTH_COMPONENT32F : t.type === 1014 && (i = e.DEPTH_COMPONENT24));
				let r = me(n);
				he(n) ? f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, r, i, n.width, n.height) : e.renderbufferStorageMultisample(e.RENDERBUFFER, r, i, n.width, n.height);
			} else e.renderbufferStorage(e.RENDERBUFFER, i, n.width, n.height);
			e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, t);
		} else if (n.depthBuffer && n.stencilBuffer) {
			let i = me(n);
			r && he(n) === !1 ? e.renderbufferStorageMultisample(e.RENDERBUFFER, i, e.DEPTH24_STENCIL8, n.width, n.height) : he(n) ? f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, i, e.DEPTH24_STENCIL8, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, t);
		} else {
			let t = n.isWebGLMultipleRenderTargets === !0 ? n.texture : [n.texture];
			for (let i = 0; i < t.length; i++) {
				let o = t[i], s = a.convert(o.format, o.colorSpace), c = a.convert(o.type), l = w(o.internalFormat, s, c, o.colorSpace), u = me(n);
				r && he(n) === !1 ? e.renderbufferStorageMultisample(e.RENDERBUFFER, u, l, n.width, n.height) : he(n) ? f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, u, l, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, l, n.width, n.height);
			}
		}
		e.bindRenderbuffer(e.RENDERBUFFER, null);
	}
	function I(t, i) {
		if (i && i.isWebGLCubeRenderTarget) throw Error("Depth Texture with cube render targets is not supported");
		if (n.bindFramebuffer(e.FRAMEBUFFER, t), !(i.depthTexture && i.depthTexture.isDepthTexture)) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
		(!r.get(i.depthTexture).__webglTexture || i.depthTexture.image.width !== i.width || i.depthTexture.image.height !== i.height) && (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), te(i.depthTexture, 0);
		let a = r.get(i.depthTexture).__webglTexture, o = me(i);
		if (i.depthTexture.format === 1026) he(i) ? f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, a, 0, o) : e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, a, 0);
		else if (i.depthTexture.format === 1027) he(i) ? f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, a, 0, o) : e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, a, 0);
		else throw Error("Unknown depthTexture format");
	}
	function L(t) {
		let i = r.get(t), a = t.isWebGLCubeRenderTarget === !0;
		if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
			if (a) throw Error("target.depthTexture not supported in Cube render targets");
			I(i.__webglFramebuffer, t);
		} else if (a) {
			i.__webglDepthbuffer = [];
			for (let r = 0; r < 6; r++) n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]), i.__webglDepthbuffer[r] = e.createRenderbuffer(), fe(i.__webglDepthbuffer[r], t, !1);
		} else n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer = e.createRenderbuffer(), fe(i.__webglDepthbuffer, t, !1);
		n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function R(t, n, i) {
		let a = r.get(t);
		n !== void 0 && F(a.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), i !== void 0 && L(t);
	}
	function pe(t) {
		let c = t.texture, l = r.get(t), u = r.get(c);
		t.addEventListener("dispose", O), t.isWebGLMultipleRenderTargets !== !0 && (u.__webglTexture === void 0 && (u.__webglTexture = e.createTexture()), u.__version = c.version, o.memory.textures++);
		let d = t.isWebGLCubeRenderTarget === !0, f = t.isWebGLMultipleRenderTargets === !0, p = b(t) || s;
		if (d) {
			l.__webglFramebuffer = [];
			for (let t = 0; t < 6; t++) if (s && c.mipmaps && c.mipmaps.length > 0) {
				l.__webglFramebuffer[t] = [];
				for (let n = 0; n < c.mipmaps.length; n++) l.__webglFramebuffer[t][n] = e.createFramebuffer();
			} else l.__webglFramebuffer[t] = e.createFramebuffer();
		} else {
			if (s && c.mipmaps && c.mipmaps.length > 0) {
				l.__webglFramebuffer = [];
				for (let t = 0; t < c.mipmaps.length; t++) l.__webglFramebuffer[t] = e.createFramebuffer();
			} else l.__webglFramebuffer = e.createFramebuffer();
			if (f) if (i.drawBuffers) {
				let n = t.texture;
				for (let t = 0, i = n.length; t < i; t++) {
					let i = r.get(n[t]);
					i.__webglTexture === void 0 && (i.__webglTexture = e.createTexture(), o.memory.textures++);
				}
			} else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
			if (s && t.samples > 0 && he(t) === !1) {
				let r = f ? c : [c];
				l.__webglMultisampledFramebuffer = e.createFramebuffer(), l.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, l.__webglMultisampledFramebuffer);
				for (let n = 0; n < r.length; n++) {
					let i = r[n];
					l.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, l.__webglColorRenderbuffer[n]);
					let o = a.convert(i.format, i.colorSpace), s = a.convert(i.type), c = w(i.internalFormat, o, s, i.colorSpace, t.isXRRenderTarget === !0), u = me(t);
					e.renderbufferStorageMultisample(e.RENDERBUFFER, u, c, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, l.__webglColorRenderbuffer[n]);
				}
				e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (l.__webglDepthRenderbuffer = e.createRenderbuffer(), fe(l.__webglDepthRenderbuffer, t, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
			}
		}
		if (d) {
			n.bindTexture(e.TEXTURE_CUBE_MAP, u.__webglTexture), ce(e.TEXTURE_CUBE_MAP, c, p);
			for (let n = 0; n < 6; n++) if (s && c.mipmaps && c.mipmaps.length > 0) for (let r = 0; r < c.mipmaps.length; r++) F(l.__webglFramebuffer[n][r], t, c, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, r);
			else F(l.__webglFramebuffer[n], t, c, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
			S(c, p) && C(e.TEXTURE_CUBE_MAP), n.unbindTexture();
		} else if (f) {
			let i = t.texture;
			for (let a = 0, o = i.length; a < o; a++) {
				let o = i[a], s = r.get(o);
				n.bindTexture(e.TEXTURE_2D, s.__webglTexture), ce(e.TEXTURE_2D, o, p), F(l.__webglFramebuffer, t, o, e.COLOR_ATTACHMENT0 + a, e.TEXTURE_2D, 0), S(o, p) && C(e.TEXTURE_2D);
			}
			n.unbindTexture();
		} else {
			let r = e.TEXTURE_2D;
			if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (s ? r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n.bindTexture(r, u.__webglTexture), ce(r, c, p), s && c.mipmaps && c.mipmaps.length > 0) for (let n = 0; n < c.mipmaps.length; n++) F(l.__webglFramebuffer[n], t, c, e.COLOR_ATTACHMENT0, r, n);
			else F(l.__webglFramebuffer, t, c, e.COLOR_ATTACHMENT0, r, 0);
			S(c, p) && C(r), n.unbindTexture();
		}
		t.depthBuffer && L(t);
	}
	function z(t) {
		let i = b(t) || s, a = t.isWebGLMultipleRenderTargets === !0 ? t.texture : [t.texture];
		for (let o = 0, s = a.length; o < s; o++) {
			let s = a[o];
			if (S(s, i)) {
				let i = t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : e.TEXTURE_2D, a = r.get(s).__webglTexture;
				n.bindTexture(i, a), C(i), n.unbindTexture();
			}
		}
	}
	function B(t) {
		if (s && t.samples > 0 && he(t) === !1) {
			let i = t.isWebGLMultipleRenderTargets ? t.texture : [t.texture], a = t.width, o = t.height, s = e.COLOR_BUFFER_BIT, c = [], l = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, u = r.get(t), d = t.isWebGLMultipleRenderTargets === !0;
			if (d) for (let t = 0; t < i.length; t++) n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
			n.bindFramebuffer(e.READ_FRAMEBUFFER, u.__webglMultisampledFramebuffer), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer);
			for (let n = 0; n < i.length; n++) {
				c.push(e.COLOR_ATTACHMENT0 + n), t.depthBuffer && c.push(l);
				let f = u.__ignoreDepthValues === void 0 ? !1 : u.__ignoreDepthValues;
				if (f === !1 && (t.depthBuffer && (s |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && (s |= e.STENCIL_BUFFER_BIT)), d && e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, u.__webglColorRenderbuffer[n]), f === !0 && (e.invalidateFramebuffer(e.READ_FRAMEBUFFER, [l]), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [l])), d) {
					let t = r.get(i[n]).__webglTexture;
					e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
				}
				e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, e.NEAREST), p && e.invalidateFramebuffer(e.READ_FRAMEBUFFER, c);
			}
			if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), d) for (let t = 0; t < i.length; t++) {
				n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, u.__webglColorRenderbuffer[t]);
				let a = r.get(i[t]).__webglTexture;
				n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, a, 0);
			}
			n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglMultisampledFramebuffer);
		}
	}
	function me(e) {
		return Math.min(d, e.samples);
	}
	function he(e) {
		let n = r.get(e);
		return s && e.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && n.__useRenderToTexture !== !1;
	}
	function ge(e) {
		let t = o.render.frame;
		m.get(e) !== t && (m.set(e, t), e.update());
	}
	function _e(e, n) {
		let r = e.colorSpace, i = e.format, a = e.type;
		return e.isCompressedTexture === !0 || e.isVideoTexture === !0 || e.format === 1035 || r !== "srgb-linear" && r !== "" && (r === "srgb" || r === "display-p3" ? s === !1 ? t.has("EXT_sRGB") === !0 && i === 1023 ? (e.format = Jo, e.minFilter = So, e.generateMipmaps = !1) : n = Bs.sRGBToLinear(n) : (i !== 1023 || a !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", r)), n;
	}
	this.allocateTextureUnit = ee, this.resetTextureUnits = N, this.setTexture2D = te, this.setTexture2DArray = ne, this.setTexture3D = re, this.setTextureCube = ie, this.rebindTextures = R, this.setupRenderTarget = pe, this.updateRenderTargetMipmap = z, this.updateMultisampleRenderTarget = B, this.setupDepthRenderbuffer = L, this.setupFrameBufferTexture = F, this.useMultisampledRTT = he;
}
var lp = 0, up = 1;
function dp(e, t, n) {
	let r = n.isWebGL2;
	function i(n, i = "") {
		let a, o = i === "srgb" || i === "display-p3" ? up : lp;
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return r ? e.HALF_FLOAT : (a = t.get("OES_texture_half_float"), a === null ? null : a.HALF_FLOAT_OES);
		if (n === 1021) return e.ALPHA;
		if (n === 1023) return e.RGBA;
		if (n === 1024) return e.LUMINANCE;
		if (n === 1025) return e.LUMINANCE_ALPHA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1035) return a = t.get("EXT_sRGB"), a === null ? null : a.SRGB_ALPHA_EXT;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) if (o === up) if (a = t.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
			if (n === 33776) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
			if (n === 33777) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
			if (n === 33778) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
			if (n === 33779) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
		} else return null;
		else if (a = t.get("WEBGL_compressed_texture_s3tc"), a !== null) {
			if (n === 33776) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
			if (n === 33777) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
			if (n === 33778) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
			if (n === 33779) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
		} else return null;
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) if (a = t.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
			if (n === 35840) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
			if (n === 35841) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
			if (n === 35842) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
			if (n === 35843) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
		} else return null;
		if (n === 36196) return a = t.get("WEBGL_compressed_texture_etc1"), a === null ? null : a.COMPRESSED_RGB_ETC1_WEBGL;
		if (n === 37492 || n === 37496) if (a = t.get("WEBGL_compressed_texture_etc"), a !== null) {
			if (n === 37492) return o === up ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
			if (n === 37496) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
		} else return null;
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) if (a = t.get("WEBGL_compressed_texture_astc"), a !== null) {
			if (n === 37808) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
			if (n === 37809) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
			if (n === 37810) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
			if (n === 37811) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
			if (n === 37812) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
			if (n === 37813) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
			if (n === 37814) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
			if (n === 37815) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
			if (n === 37816) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
			if (n === 37817) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
			if (n === 37818) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
			if (n === 37819) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
			if (n === 37820) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
			if (n === 37821) return o === up ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
		} else return null;
		if (n === 36492 || n === 36494 || n === 36495) if (a = t.get("EXT_texture_compression_bptc"), a !== null) {
			if (n === 36492) return o === up ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
			if (n === 36494) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
			if (n === 36495) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
		} else return null;
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) if (a = t.get("EXT_texture_compression_rgtc"), a !== null) {
			if (n === 36492) return a.COMPRESSED_RED_RGTC1_EXT;
			if (n === 36284) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
			if (n === 36285) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
			if (n === 36286) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
		} else return null;
		return n === 1020 ? r ? e.UNSIGNED_INT_24_8 : (a = t.get("WEBGL_depth_texture"), a === null ? null : a.UNSIGNED_INT_24_8_WEBGL) : e[n] === void 0 ? null : e[n];
	}
	return { convert: i };
}
var fp = class extends lu {
	constructor(e = []) {
		super(), this.isArrayCamera = !0, this.cameras = e;
	}
}, pp = class extends Qc {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group";
	}
}, mp = { type: "move" }, hp = class {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null;
	}
	getHandSpace() {
		return this._hand === null && (this._hand = new pp(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
	}
	getTargetRaySpace() {
		return this._targetRay === null && (this._targetRay = new pp(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new X(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new X()), this._targetRay;
	}
	getGripSpace() {
		return this._grip === null && (this._grip = new pp(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new X(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new X()), this._grip;
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
	}
	connect(e) {
		if (e && e.hand) {
			let t = this._hand;
			if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
		}
		return this.dispatchEvent({
			type: "connected",
			data: e
		}), this;
	}
	disconnect(e) {
		return this.dispatchEvent({
			type: "disconnected",
			data: e
		}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
	}
	update(e, t, n) {
		let r = null, i = null, a = null, o = this._targetRay, s = this._grip, c = this._hand;
		if (e && t.session.visibilityState !== "visible-blurred") {
			if (c && e.hand) {
				a = !0;
				for (let r of e.hand.values()) {
					let e = t.getJointPose(r, n), i = this._getHandJoint(c, r);
					e !== null && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.rotation, i.scale), i.matrixWorldNeedsUpdate = !0, i.jointRadius = e.radius), i.visible = e !== null;
				}
				let r = c.joints["index-finger-tip"], i = c.joints["thumb-tip"], o = r.position.distanceTo(i.position), s = .02, l = .005;
				c.inputState.pinching && o > s + l ? (c.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: e.handedness,
					target: this
				})) : !c.inputState.pinching && o <= s - l && (c.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: e.handedness,
					target: this
				}));
			} else s !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1));
			o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && i !== null && (r = i), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(mp)));
		}
		return o !== null && (o.visible = r !== null), s !== null && (s.visible = i !== null), c !== null && (c.visible = a !== null), this;
	}
	_getHandJoint(e, t) {
		if (e.joints[t.jointName] === void 0) {
			let n = new pp();
			n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
		}
		return e.joints[t.jointName];
	}
}, gp = class extends Gs {
	constructor(e, t, n, r, i, a, o, s, c, l) {
		if (l = l === void 0 ? jo : l, l !== 1026 && l !== 1027) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		n === void 0 && l === 1026 && (n = Eo), n === void 0 && l === 1027 && (n = ko), super(null, r, i, a, o, s, l, n, c), this.isDepthTexture = !0, this.image = {
			width: e,
			height: t
		}, this.magFilter = o === void 0 ? yo : o, this.minFilter = s === void 0 ? yo : s, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
	}
	copy(e) {
		return super.copy(e), this.compareFunction = e.compareFunction, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
	}
}, _p = class extends Xo {
	constructor(e, t) {
		super();
		let n = this, r = null, i = 1, a = null, o = "local-floor", s = 1, c = null, l = null, u = null, d = null, f = null, p = null, m = t.getContextAttributes(), h = null, g = null, _ = [], v = [], y = new lu();
		y.layers.enable(1), y.viewport = new Ks();
		let b = new lu();
		b.layers.enable(2), b.viewport = new Ks();
		let x = [y, b], S = new fp();
		S.layers.enable(1), S.layers.enable(2);
		let C = null, w = null;
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
			let t = _[e];
			return t === void 0 && (t = new hp(), _[e] = t), t.getTargetRaySpace();
		}, this.getControllerGrip = function(e) {
			let t = _[e];
			return t === void 0 && (t = new hp(), _[e] = t), t.getGripSpace();
		}, this.getHand = function(e) {
			let t = _[e];
			return t === void 0 && (t = new hp(), _[e] = t), t.getHandSpace();
		};
		function T(e) {
			let t = v.indexOf(e.inputSource);
			if (t === -1) return;
			let n = _[t];
			n !== void 0 && (n.update(e.inputSource, e.frame, c || a), n.dispatchEvent({
				type: e.type,
				data: e.inputSource
			}));
		}
		function E() {
			r.removeEventListener("select", T), r.removeEventListener("selectstart", T), r.removeEventListener("selectend", T), r.removeEventListener("squeeze", T), r.removeEventListener("squeezestart", T), r.removeEventListener("squeezeend", T), r.removeEventListener("end", E), r.removeEventListener("inputsourceschange", D);
			for (let e = 0; e < _.length; e++) {
				let t = v[e];
				t !== null && (v[e] = null, _[e].disconnect(t));
			}
			C = null, w = null, e.setRenderTarget(h), f = null, d = null, u = null, r = null, g = null, P.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
		}
		this.setFramebufferScaleFactor = function(e) {
			i = e, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
		}, this.setReferenceSpaceType = function(e) {
			o = e, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
		}, this.getReferenceSpace = function() {
			return c || a;
		}, this.setReferenceSpace = function(e) {
			c = e;
		}, this.getBaseLayer = function() {
			return d === null ? f : d;
		}, this.getBinding = function() {
			return u;
		}, this.getFrame = function() {
			return p;
		}, this.getSession = function() {
			return r;
		}, this.setSession = async function(l) {
			if (r = l, r !== null) {
				if (h = e.getRenderTarget(), r.addEventListener("select", T), r.addEventListener("selectstart", T), r.addEventListener("selectend", T), r.addEventListener("squeeze", T), r.addEventListener("squeezestart", T), r.addEventListener("squeezeend", T), r.addEventListener("end", E), r.addEventListener("inputsourceschange", D), m.xrCompatible !== !0 && await t.makeXRCompatible(), r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
					let n = {
						antialias: r.renderState.layers === void 0 ? m.antialias : !0,
						alpha: !0,
						depth: m.depth,
						stencil: m.stencil,
						framebufferScaleFactor: i
					};
					f = new XRWebGLLayer(r, t, n), r.updateRenderState({ baseLayer: f }), g = new Js(f.framebufferWidth, f.framebufferHeight, {
						format: Ao,
						type: To,
						colorSpace: e.outputColorSpace,
						stencilBuffer: m.stencil
					});
				} else {
					let n = null, a = null, o = null;
					m.depth && (o = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = m.stencil ? Mo : jo, a = m.stencil ? ko : Eo);
					let s = {
						colorFormat: t.RGBA8,
						depthFormat: o,
						scaleFactor: i
					};
					u = new XRWebGLBinding(r, t), d = u.createProjectionLayer(s), r.updateRenderState({ layers: [d] }), g = new Js(d.textureWidth, d.textureHeight, {
						format: Ao,
						type: To,
						depthTexture: new gp(d.textureWidth, d.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
						stencilBuffer: m.stencil,
						colorSpace: e.outputColorSpace,
						samples: m.antialias ? 4 : 0
					});
					let c = e.properties.get(g);
					c.__ignoreDepthValues = d.ignoreDepthValues;
				}
				g.isXRRenderTarget = !0, this.setFoveation(s), c = null, a = await r.requestReferenceSpace(o), P.setContext(r), P.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
			}
		}, this.getEnvironmentBlendMode = function() {
			if (r !== null) return r.environmentBlendMode;
		};
		function D(e) {
			for (let t = 0; t < e.removed.length; t++) {
				let n = e.removed[t], r = v.indexOf(n);
				r >= 0 && (v[r] = null, _[r].disconnect(n));
			}
			for (let t = 0; t < e.added.length; t++) {
				let n = e.added[t], r = v.indexOf(n);
				if (r === -1) {
					for (let e = 0; e < _.length; e++) if (e >= v.length) {
						v.push(n), r = e;
						break;
					} else if (v[e] === null) {
						v[e] = n, r = e;
						break;
					}
					if (r === -1) break;
				}
				let i = _[r];
				i && i.connect(n);
			}
		}
		let O = new X(), k = new X();
		function A(e, t, n) {
			O.setFromMatrixPosition(t.matrixWorld), k.setFromMatrixPosition(n.matrixWorld);
			let r = O.distanceTo(k), i = t.projectionMatrix.elements, a = n.projectionMatrix.elements, o = i[14] / (i[10] - 1), s = i[14] / (i[10] + 1), c = (i[9] + 1) / i[5], l = (i[9] - 1) / i[5], u = (i[8] - 1) / i[0], d = (a[8] + 1) / a[0], f = o * u, p = o * d, m = r / (-u + d), h = m * -u;
			t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(h), e.translateZ(m), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert();
			let g = o + m, _ = s + m, v = f - h, y = p + (r - h), b = c * s / _ * g, x = l * s / _ * g;
			e.projectionMatrix.makePerspective(v, y, b, x, g, _), e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
		}
		function j(e, t) {
			t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
		}
		this.updateCamera = function(e) {
			if (r === null) return;
			S.near = b.near = y.near = e.near, S.far = b.far = y.far = e.far, (C !== S.near || w !== S.far) && (r.updateRenderState({
				depthNear: S.near,
				depthFar: S.far
			}), C = S.near, w = S.far);
			let t = e.parent, n = S.cameras;
			j(S, t);
			for (let e = 0; e < n.length; e++) j(n[e], t);
			n.length === 2 ? A(S, y, b) : S.projectionMatrix.copy(y.projectionMatrix), M(e, S, t);
		};
		function M(e, t, n) {
			n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = es * 2 * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1);
		}
		this.getCamera = function() {
			return S;
		}, this.getFoveation = function() {
			if (!(d === null && f === null)) return s;
		}, this.setFoveation = function(e) {
			s = e, d !== null && (d.fixedFoveation = e), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = e);
		};
		let N = null;
		function ee(t, r) {
			if (l = r.getViewerPose(c || a), p = r, l !== null) {
				let t = l.views;
				f !== null && (e.setRenderTargetFramebuffer(g, f.framebuffer), e.setRenderTarget(g));
				let n = !1;
				t.length !== S.cameras.length && (S.cameras.length = 0, n = !0);
				for (let r = 0; r < t.length; r++) {
					let i = t[r], a = null;
					if (f !== null) a = f.getViewport(i);
					else {
						let t = u.getViewSubImage(d, i);
						a = t.viewport, r === 0 && (e.setRenderTargetTextures(g, t.colorTexture, d.ignoreDepthValues ? void 0 : t.depthStencilTexture), e.setRenderTarget(g));
					}
					let o = x[r];
					o === void 0 && (o = new lu(), o.layers.enable(r), o.viewport = new Ks(), x[r] = o), o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.projectionMatrix.fromArray(i.projectionMatrix), o.projectionMatrixInverse.copy(o.projectionMatrix).invert(), o.viewport.set(a.x, a.y, a.width, a.height), r === 0 && (S.matrix.copy(o.matrix), S.matrix.decompose(S.position, S.quaternion, S.scale)), n === !0 && S.cameras.push(o);
				}
			}
			for (let e = 0; e < _.length; e++) {
				let t = v[e], n = _[e];
				t !== null && n !== void 0 && n.update(t, r, c || a);
			}
			N && N(t, r), r.detectedPlanes && n.dispatchEvent({
				type: "planesdetected",
				data: r
			}), p = null;
		}
		let P = new Su();
		P.setAnimationLoop(ee), this.setAnimationLoop = function(e) {
			N = e;
		}, this.dispose = function() {};
	}
};
function vp(e, t) {
	function n(e, t) {
		e.matrixAutoUpdate === !0 && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(t, n) {
		n.color.getRGB(t.fogColor.value, ru(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
	}
	function i(e, t, n, r, i) {
		t.isMeshBasicMaterial || t.isMeshLambertMaterial ? a(e, t) : t.isMeshToonMaterial ? (a(e, t), d(e, t)) : t.isMeshPhongMaterial ? (a(e, t), u(e, t)) : t.isMeshStandardMaterial ? (a(e, t), f(e, t), t.isMeshPhysicalMaterial && p(e, t, i)) : t.isMeshMatcapMaterial ? (a(e, t), m(e, t)) : t.isMeshDepthMaterial ? a(e, t) : t.isMeshDistanceMaterial ? (a(e, t), h(e, t)) : t.isMeshNormalMaterial ? a(e, t) : t.isLineBasicMaterial ? (o(e, t), t.isLineDashedMaterial && s(e, t)) : t.isPointsMaterial ? c(e, t, n, r) : t.isSpriteMaterial ? l(e, t) : t.isShadowMaterial ? (e.color.value.copy(t.color), e.opacity.value = t.opacity) : t.isShaderMaterial && (t.uniformsNeedUpdate = !1);
	}
	function a(r, i) {
		r.opacity.value = i.opacity, i.color && r.diffuse.value.copy(i.color), i.emissive && r.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), i.map && (r.map.value = i.map, n(i.map, r.mapTransform)), i.alphaMap && (r.alphaMap.value = i.alphaMap, n(i.alphaMap, r.alphaMapTransform)), i.bumpMap && (r.bumpMap.value = i.bumpMap, n(i.bumpMap, r.bumpMapTransform), r.bumpScale.value = i.bumpScale, i.side === 1 && (r.bumpScale.value *= -1)), i.normalMap && (r.normalMap.value = i.normalMap, n(i.normalMap, r.normalMapTransform), r.normalScale.value.copy(i.normalScale), i.side === 1 && r.normalScale.value.negate()), i.displacementMap && (r.displacementMap.value = i.displacementMap, n(i.displacementMap, r.displacementMapTransform), r.displacementScale.value = i.displacementScale, r.displacementBias.value = i.displacementBias), i.emissiveMap && (r.emissiveMap.value = i.emissiveMap, n(i.emissiveMap, r.emissiveMapTransform)), i.specularMap && (r.specularMap.value = i.specularMap, n(i.specularMap, r.specularMapTransform)), i.alphaTest > 0 && (r.alphaTest.value = i.alphaTest);
		let a = t.get(i).envMap;
		if (a && (r.envMap.value = a, r.flipEnvMap.value = a.isCubeTexture && a.isRenderTargetTexture === !1 ? -1 : 1, r.reflectivity.value = i.reflectivity, r.ior.value = i.ior, r.refractionRatio.value = i.refractionRatio), i.lightMap) {
			r.lightMap.value = i.lightMap;
			let t = e._useLegacyLights === !0 ? Math.PI : 1;
			r.lightMapIntensity.value = i.lightMapIntensity * t, n(i.lightMap, r.lightMapTransform);
		}
		i.aoMap && (r.aoMap.value = i.aoMap, r.aoMapIntensity.value = i.aoMapIntensity, n(i.aoMap, r.aoMapTransform));
	}
	function o(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
	}
	function s(e, t) {
		e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
	}
	function c(e, t, r, i) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = i * .5, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function l(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function u(e, t) {
		e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
	}
	function d(e, t) {
		t.gradientMap && (e.gradientMap.value = t.gradientMap);
	}
	function f(e, r) {
		e.metalness.value = r.metalness, r.metalnessMap && (e.metalnessMap.value = r.metalnessMap, n(r.metalnessMap, e.metalnessMapTransform)), e.roughness.value = r.roughness, r.roughnessMap && (e.roughnessMap.value = r.roughnessMap, n(r.roughnessMap, e.roughnessMapTransform)), t.get(r).envMap && (e.envMapIntensity.value = r.envMapIntensity);
	}
	function p(e, t, r) {
		e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
	}
	function m(e, t) {
		t.matcap && (e.matcap.value = t.matcap);
	}
	function h(e, n) {
		let r = t.get(n).light;
		e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
	}
	return {
		refreshFogUniforms: r,
		refreshMaterialUniforms: i
	};
}
function yp(e, t, n, r) {
	let i = {}, a = {}, o = [], s = n.isWebGL2 ? e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
	function c(e, t) {
		let n = t.program;
		r.uniformBlockBinding(e, n);
	}
	function l(e, n) {
		let o = i[e.id];
		o === void 0 && (m(e), o = u(e), i[e.id] = o, e.addEventListener("dispose", g));
		let s = n.program;
		r.updateUBOMapping(e, s);
		let c = t.render.frame;
		a[e.id] !== c && (f(e), a[e.id] = c);
	}
	function u(t) {
		let n = d();
		t.__bindingPointIndex = n;
		let r = e.createBuffer(), i = t.__size, a = t.usage;
		return e.bindBuffer(e.UNIFORM_BUFFER, r), e.bufferData(e.UNIFORM_BUFFER, i, a), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, n, r), r;
	}
	function d() {
		for (let e = 0; e < s; e++) if (o.indexOf(e) === -1) return o.push(e), e;
		return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
	}
	function f(t) {
		let n = i[t.id], r = t.uniforms, a = t.__cache;
		e.bindBuffer(e.UNIFORM_BUFFER, n);
		for (let t = 0, n = r.length; t < n; t++) {
			let n = r[t];
			if (p(n, t, a) === !0) {
				let t = n.__offset, r = Array.isArray(n.value) ? n.value : [n.value], i = 0;
				for (let a = 0; a < r.length; a++) {
					let o = r[a], s = h(o);
					typeof o == "number" ? (n.__data[0] = o, e.bufferSubData(e.UNIFORM_BUFFER, t + i, n.__data)) : o.isMatrix3 ? (n.__data[0] = o.elements[0], n.__data[1] = o.elements[1], n.__data[2] = o.elements[2], n.__data[3] = o.elements[0], n.__data[4] = o.elements[3], n.__data[5] = o.elements[4], n.__data[6] = o.elements[5], n.__data[7] = o.elements[0], n.__data[8] = o.elements[6], n.__data[9] = o.elements[7], n.__data[10] = o.elements[8], n.__data[11] = o.elements[0]) : (o.toArray(n.__data, i), i += s.storage / Float32Array.BYTES_PER_ELEMENT);
				}
				e.bufferSubData(e.UNIFORM_BUFFER, t, n.__data);
			}
		}
		e.bindBuffer(e.UNIFORM_BUFFER, null);
	}
	function p(e, t, n) {
		let r = e.value;
		if (n[t] === void 0) {
			if (typeof r == "number") n[t] = r;
			else {
				let e = Array.isArray(r) ? r : [r], i = [];
				for (let t = 0; t < e.length; t++) i.push(e[t].clone());
				n[t] = i;
			}
			return !0;
		} else if (typeof r == "number") {
			if (n[t] !== r) return n[t] = r, !0;
		} else {
			let e = Array.isArray(n[t]) ? n[t] : [n[t]], i = Array.isArray(r) ? r : [r];
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (n.equals(i[t]) === !1) return n.copy(i[t]), !0;
			}
		}
		return !1;
	}
	function m(e) {
		let t = e.uniforms, n = 0, r = 0;
		for (let e = 0, i = t.length; e < i; e++) {
			let i = t[e], a = {
				boundary: 0,
				storage: 0
			}, o = Array.isArray(i.value) ? i.value : [i.value];
			for (let e = 0, t = o.length; e < t; e++) {
				let t = o[e], n = h(t);
				a.boundary += n.boundary, a.storage += n.storage;
			}
			if (i.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), i.__offset = n, e > 0) {
				r = n % 16;
				let e = 16 - r;
				r !== 0 && e - a.boundary < 0 && (n += 16 - r, i.__offset = n);
			}
			n += a.storage;
		}
		return r = n % 16, r > 0 && (n += 16 - r), e.__size = n, e.__cache = {}, this;
	}
	function h(e) {
		let t = {
			boundary: 0,
			storage: 0
		};
		return typeof e == "number" ? (t.boundary = 4, t.storage = 4) : e.isVector2 ? (t.boundary = 8, t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16, t.storage = 12) : e.isVector4 ? (t.boundary = 16, t.storage = 16) : e.isMatrix3 ? (t.boundary = 48, t.storage = 48) : e.isMatrix4 ? (t.boundary = 64, t.storage = 64) : e.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", e), t;
	}
	function g(t) {
		let n = t.target;
		n.removeEventListener("dispose", g);
		let r = o.indexOf(n.__bindingPointIndex);
		o.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
	}
	function _() {
		for (let t in i) e.deleteBuffer(i[t]);
		o = [], i = {}, a = {};
	}
	return {
		bind: c,
		update: l,
		dispose: _
	};
}
var bp = class {
	constructor(e = {}) {
		let { canvas: t = Ds(), context: n = null, depth: r = !0, stencil: i = !0, alpha: a = !1, antialias: o = !1, premultipliedAlpha: s = !0, preserveDrawingBuffer: c = !1, powerPreference: l = "default", failIfMajorPerformanceCaveat: u = !1 } = e;
		this.isWebGLRenderer = !0;
		let d;
		d = n === null ? a : n.getContextAttributes().alpha;
		let f = new Uint32Array(4), p = new Int32Array(4), m = null, h = null, g = [], _ = [];
		this.domElement = t, this.debug = {
			checkShaderErrors: !0,
			onShaderError: null
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputColorSpace = Uo, this._useLegacyLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
		let v = this, y = !1, b = 0, x = 0, S = null, C = -1, w = null, T = new Ks(), E = new Ks(), D = null, O = new Z(0), k = 0, A = t.width, j = t.height, M = 1, N = null, ee = null, P = new Ks(0, 0, A, j), te = new Ks(0, 0, A, j), ne = !1, re = new xu(), ie = !1, ae = !1, oe = null, se = new Dc(), ce = new J(), le = new X(), ue = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		};
		function de() {
			return S === null ? M : 1;
		}
		let F = n;
		function fe(e, n) {
			for (let r = 0; r < e.length; r++) {
				let i = e[r], a = t.getContext(i, n);
				if (a !== null) return a;
			}
			return null;
		}
		try {
			let e = {
				alpha: !0,
				depth: r,
				stencil: i,
				antialias: o,
				premultipliedAlpha: s,
				preserveDrawingBuffer: c,
				powerPreference: l,
				failIfMajorPerformanceCaveat: u
			};
			if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r156"), t.addEventListener("webglcontextlost", je, !1), t.addEventListener("webglcontextrestored", Me, !1), t.addEventListener("webglcontextcreationerror", Ne, !1), F === null) {
				let t = [
					"webgl2",
					"webgl",
					"experimental-webgl"
				];
				if (v.isWebGL1Renderer === !0 && t.shift(), F = fe(t, e), F === null) throw fe(t) ? Error("Error creating WebGL context with your selected attributes.") : Error("Error creating WebGL context.");
			}
			typeof WebGLRenderingContext < "u" && F instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), F.getShaderPrecisionFormat === void 0 && (F.getShaderPrecisionFormat = function() {
				return {
					rangeMin: 1,
					rangeMax: 1,
					precision: 1
				};
			});
		} catch (e) {
			throw console.error("THREE.WebGLRenderer: " + e.message), e;
		}
		let I, L, R, pe, z, B, me, he, ge, _e, ve, V, ye, be, xe, Se, H, Ce, we, Te, Ee, De, Oe, ke;
		function U() {
			I = new Qu(F), L = new Au(F, I, e), I.init(L), De = new dp(F, I, L), R = new sp(F, I, L), pe = new td(F), z = new Wf(), B = new cp(F, I, R, z, L, De, pe), me = new Mu(v), he = new Zu(v), ge = new Cu(F, L), Oe = new Ou(F, I, ge, L), _e = new $u(F, ge, pe, Oe), ve = new ad(F, _e, ge, pe), we = new id(F, L, B), Se = new ju(z), V = new Uf(v, me, he, I, L, Oe, Se), ye = new vp(v, z), be = new Jf(), xe = new tp(I, L), Ce = new Du(v, me, he, R, ve, d, s), H = new op(v, ve, L), ke = new yp(F, pe, L, R), Te = new ku(F, I, pe, L), Ee = new ed(F, I, pe, L), pe.programs = V.programs, v.capabilities = L, v.extensions = I, v.properties = z, v.renderLists = be, v.shadowMap = H, v.state = R, v.info = pe;
		}
		U();
		let Ae = new _p(v, F);
		this.xr = Ae, this.getContext = function() {
			return F;
		}, this.getContextAttributes = function() {
			return F.getContextAttributes();
		}, this.forceContextLoss = function() {
			let e = I.get("WEBGL_lose_context");
			e && e.loseContext();
		}, this.forceContextRestore = function() {
			let e = I.get("WEBGL_lose_context");
			e && e.restoreContext();
		}, this.getPixelRatio = function() {
			return M;
		}, this.setPixelRatio = function(e) {
			e !== void 0 && (M = e, this.setSize(A, j, !1));
		}, this.getSize = function(e) {
			return e.set(A, j);
		}, this.setSize = function(e, n, r = !0) {
			if (Ae.isPresenting) {
				console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
				return;
			}
			A = e, j = n, t.width = Math.floor(e * M), t.height = Math.floor(n * M), r === !0 && (t.style.width = e + "px", t.style.height = n + "px"), this.setViewport(0, 0, e, n);
		}, this.getDrawingBufferSize = function(e) {
			return e.set(A * M, j * M).floor();
		}, this.setDrawingBufferSize = function(e, n, r) {
			A = e, j = n, M = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n);
		}, this.getCurrentViewport = function(e) {
			return e.copy(T);
		}, this.getViewport = function(e) {
			return e.copy(P);
		}, this.setViewport = function(e, t, n, r) {
			e.isVector4 ? P.set(e.x, e.y, e.z, e.w) : P.set(e, t, n, r), R.viewport(T.copy(P).multiplyScalar(M).floor());
		}, this.getScissor = function(e) {
			return e.copy(te);
		}, this.setScissor = function(e, t, n, r) {
			e.isVector4 ? te.set(e.x, e.y, e.z, e.w) : te.set(e, t, n, r), R.scissor(E.copy(te).multiplyScalar(M).floor());
		}, this.getScissorTest = function() {
			return ne;
		}, this.setScissorTest = function(e) {
			R.setScissorTest(ne = e);
		}, this.setOpaqueSort = function(e) {
			N = e;
		}, this.setTransparentSort = function(e) {
			ee = e;
		}, this.getClearColor = function(e) {
			return e.copy(Ce.getClearColor());
		}, this.setClearColor = function() {
			Ce.setClearColor.apply(Ce, arguments);
		}, this.getClearAlpha = function() {
			return Ce.getClearAlpha();
		}, this.setClearAlpha = function() {
			Ce.setClearAlpha.apply(Ce, arguments);
		}, this.clear = function(e = !0, t = !0, n = !0) {
			let r = 0;
			if (e) {
				let e = !1;
				if (S !== null) {
					let t = S.texture.format;
					e = t === 1033 || t === 1031 || t === 1029;
				}
				if (e) {
					let e = S.texture.type, t = e === 1009 || e === 1014 || e === 1012 || e === 1020 || e === 1017 || e === 1018, n = Ce.getClearColor(), r = Ce.getClearAlpha(), i = n.r, a = n.g, o = n.b;
					t ? (f[0] = i, f[1] = a, f[2] = o, f[3] = r, F.clearBufferuiv(F.COLOR, 0, f)) : (p[0] = i, p[1] = a, p[2] = o, p[3] = r, F.clearBufferiv(F.COLOR, 0, p));
				} else r |= F.COLOR_BUFFER_BIT;
			}
			t && (r |= F.DEPTH_BUFFER_BIT), n && (r |= F.STENCIL_BUFFER_BIT), F.clear(r);
		}, this.clearColor = function() {
			this.clear(!0, !1, !1);
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1);
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0);
		}, this.dispose = function() {
			t.removeEventListener("webglcontextlost", je, !1), t.removeEventListener("webglcontextrestored", Me, !1), t.removeEventListener("webglcontextcreationerror", Ne, !1), be.dispose(), xe.dispose(), z.dispose(), me.dispose(), he.dispose(), ve.dispose(), Oe.dispose(), ke.dispose(), V.dispose(), Ae.dispose(), Ae.removeEventListener("sessionstart", ze), Ae.removeEventListener("sessionend", Be), oe &&= (oe.dispose(), null), Ve.stop();
		};
		function je(e) {
			e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
		}
		function Me() {
			console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
			let e = pe.autoReset, t = H.enabled, n = H.autoUpdate, r = H.needsUpdate, i = H.type;
			U(), pe.autoReset = e, H.enabled = t, H.autoUpdate = n, H.needsUpdate = r, H.type = i;
		}
		function Ne(e) {
			console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
		}
		function Pe(e) {
			let t = e.target;
			t.removeEventListener("dispose", Pe), Fe(t);
		}
		function Fe(e) {
			Ie(e), z.remove(e);
		}
		function Ie(e) {
			let t = z.get(e).programs;
			t !== void 0 && (t.forEach(function(e) {
				V.releaseProgram(e);
			}), e.isShaderMaterial && V.releaseShaderCache(e));
		}
		this.renderBufferDirect = function(e, t, n, r, i, a) {
			t === null && (t = ue);
			let o = i.isMesh && i.matrixWorld.determinant() < 0, s = Ye(e, t, n, r, i);
			R.setMaterial(r, o);
			let c = n.index, l = 1;
			if (r.wireframe === !0) {
				if (c = _e.getWireframeAttribute(n), c === void 0) return;
				l = 2;
			}
			let u = n.drawRange, d = n.attributes.position, f = u.start * l, p = (u.start + u.count) * l;
			a !== null && (f = Math.max(f, a.start * l), p = Math.min(p, (a.start + a.count) * l)), c === null ? d != null && (f = Math.max(f, 0), p = Math.min(p, d.count)) : (f = Math.max(f, 0), p = Math.min(p, c.count));
			let m = p - f;
			if (m < 0 || m === Infinity) return;
			Oe.setup(i, r, s, n, c);
			let h, g = Te;
			if (c !== null && (h = ge.get(c), g = Ee, g.setIndex(h)), i.isMesh) r.wireframe === !0 ? (R.setLineWidth(r.wireframeLinewidth * de()), g.setMode(F.LINES)) : g.setMode(F.TRIANGLES);
			else if (i.isLine) {
				let e = r.linewidth;
				e === void 0 && (e = 1), R.setLineWidth(e * de()), i.isLineSegments ? g.setMode(F.LINES) : i.isLineLoop ? g.setMode(F.LINE_LOOP) : g.setMode(F.LINE_STRIP);
			} else i.isPoints ? g.setMode(F.POINTS) : i.isSprite && g.setMode(F.TRIANGLES);
			if (i.isInstancedMesh) g.renderInstances(f, m, i.count);
			else if (n.isInstancedBufferGeometry) {
				let e = n._maxInstanceCount === void 0 ? Infinity : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
				g.renderInstances(f, m, t);
			} else g.render(f, m);
		}, this.compile = function(e, t) {
			function n(e, t, n) {
				e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1 ? (e.side = 1, e.needsUpdate = !0, qe(e, t, n), e.side = 0, e.needsUpdate = !0, qe(e, t, n), e.side = 2) : qe(e, t, n);
			}
			h = xe.get(e), h.init(), _.push(h), e.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (h.pushLight(e), e.castShadow && h.pushShadow(e));
			}), h.setupLights(v._useLegacyLights), e.traverse(function(t) {
				let r = t.material;
				if (r) if (Array.isArray(r)) for (let i = 0; i < r.length; i++) {
					let a = r[i];
					n(a, e, t);
				}
				else n(r, e, t);
			}), _.pop(), h = null;
		};
		let Le = null;
		function Re(e) {
			Le && Le(e);
		}
		function ze() {
			Ve.stop();
		}
		function Be() {
			Ve.start();
		}
		let Ve = new Su();
		Ve.setAnimationLoop(Re), typeof self < "u" && Ve.setContext(self), this.setAnimationLoop = function(e) {
			Le = e, Ae.setAnimationLoop(e), e === null ? Ve.stop() : Ve.start();
		}, Ae.addEventListener("sessionstart", ze), Ae.addEventListener("sessionend", Be), this.render = function(e, t) {
			if (t !== void 0 && t.isCamera !== !0) {
				console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
				return;
			}
			if (y === !0) return;
			e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(), t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(), Ae.enabled === !0 && Ae.isPresenting === !0 && (Ae.cameraAutoUpdate === !0 && Ae.updateCamera(t), t = Ae.getCamera()), e.isScene === !0 && e.onBeforeRender(v, e, t, S), h = xe.get(e, _.length), h.init(), _.push(h), se.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), re.setFromProjectionMatrix(se), ae = this.localClippingEnabled, ie = Se.init(this.clippingPlanes, ae), m = be.get(e, g.length), m.init(), g.push(m), He(e, t, 0, v.sortObjects), m.finish(), v.sortObjects === !0 && m.sort(N, ee), this.info.render.frame++, ie === !0 && Se.beginShadows();
			let n = h.state.shadowsArray;
			if (H.render(n, e, t), ie === !0 && Se.endShadows(), this.info.autoReset === !0 && this.info.reset(), Ce.render(m, e), h.setupLights(v._useLegacyLights), t.isArrayCamera) {
				let n = t.cameras;
				for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					Ue(m, e, r, r.viewport);
				}
			} else Ue(m, e, t);
			S !== null && (B.updateMultisampleRenderTarget(S), B.updateRenderTargetMipmap(S)), e.isScene === !0 && e.onAfterRender(v, e, t), Oe.resetDefaultState(), C = -1, w = null, _.pop(), h = _.length > 0 ? _[_.length - 1] : null, g.pop(), m = g.length > 0 ? g[g.length - 1] : null;
		};
		function He(e, t, n, r) {
			if (e.visible === !1) return;
			if (e.layers.test(t.layers)) {
				if (e.isGroup) n = e.renderOrder;
				else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
				else if (e.isLight) h.pushLight(e), e.castShadow && h.pushShadow(e);
				else if (e.isSprite) {
					if (!e.frustumCulled || re.intersectsSprite(e)) {
						r && le.setFromMatrixPosition(e.matrixWorld).applyMatrix4(se);
						let t = ve.update(e), i = e.material;
						i.visible && m.push(e, t, i, n, le.z, null);
					}
				} else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || re.intersectsObject(e))) {
					let t = ve.update(e), i = e.material;
					if (r && (e.boundingSphere === void 0 ? (t.boundingSphere === null && t.computeBoundingSphere(), le.copy(t.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), le.copy(e.boundingSphere.center)), le.applyMatrix4(e.matrixWorld).applyMatrix4(se)), Array.isArray(i)) {
						let r = t.groups;
						for (let a = 0, o = r.length; a < o; a++) {
							let o = r[a], s = i[o.materialIndex];
							s && s.visible && m.push(e, t, s, n, le.z, o);
						}
					} else i.visible && m.push(e, t, i, n, le.z, null);
				}
			}
			let i = e.children;
			for (let e = 0, a = i.length; e < a; e++) He(i[e], t, n, r);
		}
		function Ue(e, t, n, r) {
			let i = e.opaque, a = e.transmissive, o = e.transparent;
			h.setupLightsView(n), ie === !0 && Se.setGlobalState(v.clippingPlanes, n), a.length > 0 && We(i, a, t, n), r && R.viewport(T.copy(r)), i.length > 0 && Ge(i, t, n), a.length > 0 && Ge(a, t, n), o.length > 0 && Ge(o, t, n), R.buffers.depth.setTest(!0), R.buffers.depth.setMask(!0), R.buffers.color.setMask(!0), R.setPolygonOffset(!1);
		}
		function We(e, t, n, r) {
			let i = L.isWebGL2;
			oe === null && (oe = new Js(1, 1, {
				generateMipmaps: !0,
				type: I.has("EXT_color_buffer_half_float") ? Oo : To,
				minFilter: wo,
				samples: i ? 4 : 0
			})), v.getDrawingBufferSize(ce), i ? oe.setSize(ce.x, ce.y) : oe.setSize(ys(ce.x), ys(ce.y));
			let a = v.getRenderTarget();
			v.setRenderTarget(oe), v.getClearColor(O), k = v.getClearAlpha(), k < 1 && v.setClearColor(16777215, .5), v.clear();
			let o = v.toneMapping;
			v.toneMapping = 0, Ge(e, n, r), B.updateMultisampleRenderTarget(oe), B.updateRenderTargetMipmap(oe);
			let s = !1;
			for (let e = 0, i = t.length; e < i; e++) {
				let i = t[e], a = i.object, o = i.geometry, c = i.material, l = i.group;
				if (c.side === 2 && a.layers.test(r.layers)) {
					let e = c.side;
					c.side = 1, c.needsUpdate = !0, Ke(a, n, r, o, c, l), c.side = e, c.needsUpdate = !0, s = !0;
				}
			}
			s === !0 && (B.updateMultisampleRenderTarget(oe), B.updateRenderTargetMipmap(oe)), v.setRenderTarget(a), v.setClearColor(O, k), v.toneMapping = o;
		}
		function Ge(e, t, n) {
			let r = t.isScene === !0 ? t.overrideMaterial : null;
			for (let i = 0, a = e.length; i < a; i++) {
				let a = e[i], o = a.object, s = a.geometry, c = r === null ? a.material : r, l = a.group;
				o.layers.test(n.layers) && Ke(o, t, n, s, c, l);
			}
		}
		function Ke(e, t, n, r, i, a) {
			e.onBeforeRender(v, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(v, t, n, r, e, a), i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1 ? (i.side = 1, i.needsUpdate = !0, v.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, v.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : v.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(v, t, n, r, i, a);
		}
		function qe(e, t, n) {
			t.isScene !== !0 && (t = ue);
			let r = z.get(e), i = h.state.lights, a = h.state.shadowsArray, o = i.state.version, s = V.getParameters(e, i.state, a, t, n), c = V.getProgramCacheKey(s), l = r.programs;
			r.environment = e.isMeshStandardMaterial ? t.environment : null, r.fog = t.fog, r.envMap = (e.isMeshStandardMaterial ? he : me).get(e.envMap || r.environment), l === void 0 && (e.addEventListener("dispose", Pe), l = /* @__PURE__ */ new Map(), r.programs = l);
			let u = l.get(c);
			if (u !== void 0) {
				if (r.currentProgram === u && r.lightsStateVersion === o) return Je(e, s), u;
			} else s.uniforms = V.getUniforms(e), e.onBuild(n, s, v), e.onBeforeCompile(s, v), u = V.acquireProgram(s, c), l.set(c, u), r.uniforms = s.uniforms;
			let d = r.uniforms;
			(!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (d.clippingPlanes = Se.uniform), Je(e, s), r.needsLights = Ze(e), r.lightsStateVersion = o, r.needsLights && (d.ambientLightColor.value = i.state.ambient, d.lightProbe.value = i.state.probe, d.directionalLights.value = i.state.directional, d.directionalLightShadows.value = i.state.directionalShadow, d.spotLights.value = i.state.spot, d.spotLightShadows.value = i.state.spotShadow, d.rectAreaLights.value = i.state.rectArea, d.ltc_1.value = i.state.rectAreaLTC1, d.ltc_2.value = i.state.rectAreaLTC2, d.pointLights.value = i.state.point, d.pointLightShadows.value = i.state.pointShadow, d.hemisphereLights.value = i.state.hemi, d.directionalShadowMap.value = i.state.directionalShadowMap, d.directionalShadowMatrix.value = i.state.directionalShadowMatrix, d.spotShadowMap.value = i.state.spotShadowMap, d.spotLightMatrix.value = i.state.spotLightMatrix, d.spotLightMap.value = i.state.spotLightMap, d.pointShadowMap.value = i.state.pointShadowMap, d.pointShadowMatrix.value = i.state.pointShadowMatrix);
			let f = u.getUniforms(), p = ff.seqWithValue(f.seq, d);
			return r.currentProgram = u, r.uniformsList = p, u;
		}
		function Je(e, t) {
			let n = z.get(e);
			n.outputColorSpace = t.outputColorSpace, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
		}
		function Ye(e, t, n, r, i) {
			t.isScene !== !0 && (t = ue), B.resetTextureUnits();
			let a = t.fog, o = r.isMeshStandardMaterial ? t.environment : null, s = S === null ? v.outputColorSpace : S.isXRRenderTarget === !0 ? S.texture.colorSpace : Wo, c = (r.isMeshStandardMaterial ? he : me).get(r.envMap || o), l = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4, u = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), d = !!n.morphAttributes.position, f = !!n.morphAttributes.normal, p = !!n.morphAttributes.color, m = 0;
			r.toneMapped && (S === null || S.isXRRenderTarget === !0) && (m = v.toneMapping);
			let g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, _ = g === void 0 ? 0 : g.length, y = z.get(r), b = h.state.lights;
			if (ie === !0 && (ae === !0 || e !== w)) {
				let t = e === w && r.id === C;
				Se.setState(r, e, t);
			}
			let x = !1;
			r.version === y.__version ? y.needsLights && y.lightsStateVersion !== b.state.version ? x = !0 : y.outputColorSpace === s ? i.isInstancedMesh && y.instancing === !1 || !i.isInstancedMesh && y.instancing === !0 || i.isSkinnedMesh && y.skinning === !1 || !i.isSkinnedMesh && y.skinning === !0 || i.isInstancedMesh && y.instancingColor === !0 && i.instanceColor === null || i.isInstancedMesh && y.instancingColor === !1 && i.instanceColor !== null ? x = !0 : y.envMap === c ? r.fog === !0 && y.fog !== a || y.numClippingPlanes !== void 0 && (y.numClippingPlanes !== Se.numPlanes || y.numIntersection !== Se.numIntersection) ? x = !0 : y.vertexAlphas === l && y.vertexTangents === u && y.morphTargets === d && y.morphNormals === f && y.morphColors === p && y.toneMapping === m ? L.isWebGL2 === !0 && y.morphTargetsCount !== _ && (x = !0) : x = !0 : x = !0 : x = !0 : (x = !0, y.__version = r.version);
			let T = y.currentProgram;
			x === !0 && (T = qe(r, t, i));
			let E = !1, D = !1, O = !1, k = T.getUniforms(), A = y.uniforms;
			if (R.useProgram(T.program) && (E = !0, D = !0, O = !0), r.id !== C && (C = r.id, D = !0), E || w !== e) {
				k.setValue(F, "projectionMatrix", e.projectionMatrix), k.setValue(F, "viewMatrix", e.matrixWorldInverse);
				let t = k.map.cameraPosition;
				t !== void 0 && t.setValue(F, le.setFromMatrixPosition(e.matrixWorld)), L.logarithmicDepthBuffer && k.setValue(F, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && k.setValue(F, "isOrthographic", e.isOrthographicCamera === !0), w !== e && (w = e, D = !0, O = !0);
			}
			if (i.isSkinnedMesh) {
				k.setOptional(F, i, "bindMatrix"), k.setOptional(F, i, "bindMatrixInverse");
				let e = i.skeleton;
				e && (L.floatVertexTextures ? (e.boneTexture === null && e.computeBoneTexture(), k.setValue(F, "boneTexture", e.boneTexture, B), k.setValue(F, "boneTextureSize", e.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
			}
			let N = n.morphAttributes;
			if ((N.position !== void 0 || N.normal !== void 0 || N.color !== void 0 && L.isWebGL2 === !0) && we.update(i, n, T), (D || y.receiveShadow !== i.receiveShadow) && (y.receiveShadow = i.receiveShadow, k.setValue(F, "receiveShadow", i.receiveShadow)), r.isMeshGouraudMaterial && r.envMap !== null && (A.envMap.value = c, A.flipEnvMap.value = c.isCubeTexture && c.isRenderTargetTexture === !1 ? -1 : 1), D && (k.setValue(F, "toneMappingExposure", v.toneMappingExposure), y.needsLights && Xe(A, O), a && r.fog === !0 && ye.refreshFogUniforms(A, a), ye.refreshMaterialUniforms(A, r, M, j, oe), ff.upload(F, y.uniformsList, A, B)), r.isShaderMaterial && r.uniformsNeedUpdate === !0 && (ff.upload(F, y.uniformsList, A, B), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && k.setValue(F, "center", i.center), k.setValue(F, "modelViewMatrix", i.modelViewMatrix), k.setValue(F, "normalMatrix", i.normalMatrix), k.setValue(F, "modelMatrix", i.matrixWorld), r.isShaderMaterial || r.isRawShaderMaterial) {
				let e = r.uniformsGroups;
				for (let t = 0, n = e.length; t < n; t++) if (L.isWebGL2) {
					let n = e[t];
					ke.update(n, T), ke.bind(n, T);
				} else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
			}
			return T;
		}
		function Xe(e, t) {
			e.ambientLightColor.needsUpdate = t, e.lightProbe.needsUpdate = t, e.directionalLights.needsUpdate = t, e.directionalLightShadows.needsUpdate = t, e.pointLights.needsUpdate = t, e.pointLightShadows.needsUpdate = t, e.spotLights.needsUpdate = t, e.spotLightShadows.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t;
		}
		function Ze(e) {
			return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === !0;
		}
		this.getActiveCubeFace = function() {
			return b;
		}, this.getActiveMipmapLevel = function() {
			return x;
		}, this.getRenderTarget = function() {
			return S;
		}, this.setRenderTargetTextures = function(e, t, n) {
			z.get(e.texture).__webglTexture = t, z.get(e.depthTexture).__webglTexture = n;
			let r = z.get(e);
			r.__hasExternalTextures = !0, r.__hasExternalTextures && (r.__autoAllocateDepthBuffer = n === void 0, r.__autoAllocateDepthBuffer || I.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), r.__useRenderToTexture = !1));
		}, this.setRenderTargetFramebuffer = function(e, t) {
			let n = z.get(e);
			n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
		}, this.setRenderTarget = function(e, t = 0, n = 0) {
			S = e, b = t, x = n;
			let r = !0, i = null, a = !1, o = !1;
			if (e) {
				let s = z.get(e);
				s.__useDefaultFramebuffer === void 0 ? s.__webglFramebuffer === void 0 ? B.setupRenderTarget(e) : s.__hasExternalTextures && B.rebindTextures(e, z.get(e.texture).__webglTexture, z.get(e.depthTexture).__webglTexture) : (R.bindFramebuffer(F.FRAMEBUFFER, null), r = !1);
				let c = e.texture;
				(c.isData3DTexture || c.isDataArrayTexture || c.isCompressedArrayTexture) && (o = !0);
				let l = z.get(e).__webglFramebuffer;
				e.isWebGLCubeRenderTarget ? (i = Array.isArray(l[t]) ? l[t][n] : l[t], a = !0) : i = L.isWebGL2 && e.samples > 0 && B.useMultisampledRTT(e) === !1 ? z.get(e).__webglMultisampledFramebuffer : Array.isArray(l) ? l[n] : l, T.copy(e.viewport), E.copy(e.scissor), D = e.scissorTest;
			} else T.copy(P).multiplyScalar(M).floor(), E.copy(te).multiplyScalar(M).floor(), D = ne;
			if (R.bindFramebuffer(F.FRAMEBUFFER, i) && L.drawBuffers && r && R.drawBuffers(e, i), R.viewport(T), R.scissor(E), R.setScissorTest(D), a) {
				let r = z.get(e.texture);
				F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
			} else if (o) {
				let r = z.get(e.texture), i = t || 0;
				F.framebufferTextureLayer(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, r.__webglTexture, n || 0, i);
			}
			C = -1;
		}, this.readRenderTargetPixels = function(e, t, n, r, i, a, o) {
			if (!(e && e.isWebGLRenderTarget)) {
				console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
				return;
			}
			let s = z.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (s = s[o]), s) {
				R.bindFramebuffer(F.FRAMEBUFFER, s);
				try {
					let o = e.texture, s = o.format, c = o.type;
					if (s !== 1023 && De.convert(s) !== F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)) {
						console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
						return;
					}
					let l = c === 1016 && (I.has("EXT_color_buffer_half_float") || L.isWebGL2 && I.has("EXT_color_buffer_float"));
					if (c !== 1009 && De.convert(c) !== F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE) && !(c === 1015 && (L.isWebGL2 || I.has("OES_texture_float") || I.has("WEBGL_color_buffer_float"))) && !l) {
						console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
						return;
					}
					t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && F.readPixels(t, n, r, i, De.convert(s), De.convert(c), a);
				} finally {
					let e = S === null ? null : z.get(S).__webglFramebuffer;
					R.bindFramebuffer(F.FRAMEBUFFER, e);
				}
			}
		}, this.copyFramebufferToTexture = function(e, t, n = 0) {
			let r = 2 ** -n, i = Math.floor(t.image.width * r), a = Math.floor(t.image.height * r);
			B.setTexture2D(t, 0), F.copyTexSubImage2D(F.TEXTURE_2D, n, 0, 0, e.x, e.y, i, a), R.unbindTexture();
		}, this.copyTextureToTexture = function(e, t, n, r = 0) {
			let i = t.image.width, a = t.image.height, o = De.convert(n.format), s = De.convert(n.type);
			B.setTexture2D(n, 0), F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, n.flipY), F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), F.pixelStorei(F.UNPACK_ALIGNMENT, n.unpackAlignment), t.isDataTexture ? F.texSubImage2D(F.TEXTURE_2D, r, e.x, e.y, i, a, o, s, t.image.data) : t.isCompressedTexture ? F.compressedTexSubImage2D(F.TEXTURE_2D, r, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, o, t.mipmaps[0].data) : F.texSubImage2D(F.TEXTURE_2D, r, e.x, e.y, o, s, t.image), r === 0 && n.generateMipmaps && F.generateMipmap(F.TEXTURE_2D), R.unbindTexture();
		}, this.copyTextureToTexture3D = function(e, t, n, r, i = 0) {
			if (v.isWebGL1Renderer) {
				console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
				return;
			}
			let a = e.max.x - e.min.x + 1, o = e.max.y - e.min.y + 1, s = e.max.z - e.min.z + 1, c = De.convert(r.format), l = De.convert(r.type), u;
			if (r.isData3DTexture) B.setTexture3D(r, 0), u = F.TEXTURE_3D;
			else if (r.isDataArrayTexture) B.setTexture2DArray(r, 0), u = F.TEXTURE_2D_ARRAY;
			else {
				console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
				return;
			}
			F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, r.flipY), F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha), F.pixelStorei(F.UNPACK_ALIGNMENT, r.unpackAlignment);
			let d = F.getParameter(F.UNPACK_ROW_LENGTH), f = F.getParameter(F.UNPACK_IMAGE_HEIGHT), p = F.getParameter(F.UNPACK_SKIP_PIXELS), m = F.getParameter(F.UNPACK_SKIP_ROWS), h = F.getParameter(F.UNPACK_SKIP_IMAGES), g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
			F.pixelStorei(F.UNPACK_ROW_LENGTH, g.width), F.pixelStorei(F.UNPACK_IMAGE_HEIGHT, g.height), F.pixelStorei(F.UNPACK_SKIP_PIXELS, e.min.x), F.pixelStorei(F.UNPACK_SKIP_ROWS, e.min.y), F.pixelStorei(F.UNPACK_SKIP_IMAGES, e.min.z), n.isDataTexture || n.isData3DTexture ? F.texSubImage3D(u, i, t.x, t.y, t.z, a, o, s, c, l, g.data) : n.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), F.compressedTexSubImage3D(u, i, t.x, t.y, t.z, a, o, s, c, g.data)) : F.texSubImage3D(u, i, t.x, t.y, t.z, a, o, s, c, l, g), F.pixelStorei(F.UNPACK_ROW_LENGTH, d), F.pixelStorei(F.UNPACK_IMAGE_HEIGHT, f), F.pixelStorei(F.UNPACK_SKIP_PIXELS, p), F.pixelStorei(F.UNPACK_SKIP_ROWS, m), F.pixelStorei(F.UNPACK_SKIP_IMAGES, h), i === 0 && r.generateMipmaps && F.generateMipmap(u), R.unbindTexture();
		}, this.initTexture = function(e) {
			e.isCubeTexture ? B.setTextureCube(e, 0) : e.isData3DTexture ? B.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? B.setTexture2DArray(e, 0) : B.setTexture2D(e, 0), R.unbindTexture();
		}, this.resetState = function() {
			b = 0, x = 0, S = null, R.reset(), Oe.reset();
		}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	get coordinateSystem() {
		return Yo;
	}
	get physicallyCorrectLights() {
		return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
	}
	set physicallyCorrectLights(e) {
		console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
	}
	get outputEncoding() {
		return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === "srgb" ? Bo : zo;
	}
	set outputEncoding(e) {
		console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === 3001 ? Uo : Wo;
	}
	get useLegacyLights() {
		return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
	}
	set useLegacyLights(e) {
		console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
	}
}, xp = class extends bp {};
xp.prototype.isWebGL1Renderer = !0;
var Sp = class extends Qc {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
	}
}, Cp = class {
	constructor(e, t) {
		this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e === void 0 ? 0 : e.length / t, this.usage = qo, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0, this.uuid = ts();
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	copy(e) {
		return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
	}
	copyAt(e, t, n) {
		e *= this.stride, n *= t.stride;
		for (let r = 0, i = this.stride; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	clone(e) {
		e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = ts()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
		let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
		return n.setUsage(this.usage), n;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	toJSON(e) {
		return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = ts()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
			uuid: this.uuid,
			buffer: this.array.buffer._uuid,
			type: this.array.constructor.name,
			stride: this.stride
		};
	}
}, wp = /* @__PURE__ */ new X(), Tp = class e {
	constructor(e, t, n, r = !1) {
		this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r;
	}
	get count() {
		return this.data.count;
	}
	get array() {
		return this.data.array;
	}
	set needsUpdate(e) {
		this.data.needsUpdate = e;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.data.count; t < n; t++) wp.fromBufferAttribute(this, t), wp.applyMatrix4(e), this.setXYZ(t, wp.x, wp.y, wp.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) wp.fromBufferAttribute(this, t), wp.applyNormalMatrix(e), this.setXYZ(t, wp.x, wp.y, wp.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) wp.fromBufferAttribute(this, t), wp.transformDirection(e), this.setXYZ(t, wp.x, wp.y, wp.z);
		return this;
	}
	setX(e, t) {
		return this.normalized && (t = Ss(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
	}
	setY(e, t) {
		return this.normalized && (t = Ss(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
	}
	setZ(e, t) {
		return this.normalized && (t = Ss(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
	}
	setW(e, t) {
		return this.normalized && (t = Ss(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
	}
	getX(e) {
		let t = this.data.array[e * this.data.stride + this.offset];
		return this.normalized && (t = xs(t, this.array)), t;
	}
	getY(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 1];
		return this.normalized && (t = xs(t, this.array)), t;
	}
	getZ(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 2];
		return this.normalized && (t = xs(t, this.array)), t;
	}
	getW(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 3];
		return this.normalized && (t = xs(t, this.array)), t;
	}
	setXY(e, t, n) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = Ss(t, this.array), n = Ss(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = Ss(t, this.array), n = Ss(n, this.array), r = Ss(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = Ss(t, this.array), n = Ss(n, this.array), r = Ss(r, this.array), i = Ss(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this;
	}
	clone(t) {
		if (t === void 0) {
			console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
			let e = [];
			for (let t = 0; t < this.count; t++) {
				let n = t * this.data.stride + this.offset;
				for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
			}
			return new xl(new this.array.constructor(e), this.itemSize, this.normalized);
		} else return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new e(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
	}
	toJSON(e) {
		if (e === void 0) {
			console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
			let e = [];
			for (let t = 0; t < this.count; t++) {
				let n = t * this.data.stride + this.offset;
				for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
			}
			return {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: e,
				normalized: this.normalized
			};
		} else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
			isInterleavedBufferAttribute: !0,
			itemSize: this.itemSize,
			data: this.data.uuid,
			offset: this.offset,
			normalized: this.normalized
		};
	}
}, Ep = class extends fl {
	constructor(e) {
		super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Z(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
	}
}, Dp, Op = /* @__PURE__ */ new X(), kp = /* @__PURE__ */ new X(), Ap = /* @__PURE__ */ new X(), jp = /* @__PURE__ */ new J(), Mp = /* @__PURE__ */ new J(), Np = /* @__PURE__ */ new Dc(), Pp = /* @__PURE__ */ new X(), Fp = /* @__PURE__ */ new X(), Ip = /* @__PURE__ */ new X(), Lp = /* @__PURE__ */ new J(), Rp = /* @__PURE__ */ new J(), zp = /* @__PURE__ */ new J(), Bp = class extends Qc {
	constructor(e) {
		if (super(), this.isSprite = !0, this.type = "Sprite", Dp === void 0) {
			Dp = new Ml();
			let e = new Cp(new Float32Array([
				-.5,
				-.5,
				0,
				0,
				0,
				.5,
				-.5,
				0,
				1,
				0,
				.5,
				.5,
				0,
				1,
				1,
				-.5,
				.5,
				0,
				0,
				1
			]), 5);
			Dp.setIndex([
				0,
				1,
				2,
				0,
				2,
				3
			]), Dp.setAttribute("position", new Tp(e, 3, 0, !1)), Dp.setAttribute("uv", new Tp(e, 2, 3, !1));
		}
		this.geometry = Dp, this.material = e === void 0 ? new Ep() : e, this.center = new J(.5, .5);
	}
	raycast(e, t) {
		e.camera === null && console.error("THREE.Sprite: \"Raycaster.camera\" needs to be set in order to raycast against sprites."), kp.setFromMatrixScale(this.matrixWorld), Np.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Ap.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && kp.multiplyScalar(-Ap.z);
		let n = this.material.rotation, r, i;
		n !== 0 && (i = Math.cos(n), r = Math.sin(n));
		let a = this.center;
		Vp(Pp.set(-.5, -.5, 0), Ap, a, kp, r, i), Vp(Fp.set(.5, -.5, 0), Ap, a, kp, r, i), Vp(Ip.set(.5, .5, 0), Ap, a, kp, r, i), Lp.set(0, 0), Rp.set(1, 0), zp.set(1, 1);
		let o = e.ray.intersectTriangle(Pp, Fp, Ip, !1, Op);
		if (o === null && (Vp(Fp.set(-.5, .5, 0), Ap, a, kp, r, i), Rp.set(0, 1), o = e.ray.intersectTriangle(Pp, Ip, Fp, !1, Op), o === null)) return;
		let s = e.ray.origin.distanceTo(Op);
		s < e.near || s > e.far || t.push({
			distance: s,
			point: Op.clone(),
			uv: ul.getInterpolation(Op, Pp, Fp, Ip, Lp, Rp, zp, new J()),
			face: null,
			object: this
		});
	}
	copy(e, t) {
		return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
	}
};
function Vp(e, t, n, r, i, a) {
	jp.subVectors(e, n).addScalar(.5).multiply(r), i === void 0 ? Mp.copy(jp) : (Mp.x = a * jp.x - i * jp.y, Mp.y = i * jp.x + a * jp.y), e.copy(t), e.x += Mp.x, e.y += Mp.y, e.applyMatrix4(Np);
}
var Hp = class extends Gs {
	constructor(e, t, n, r, i, a, o, s, c) {
		super(e, t, n, r, i, a, o, s, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
	}
}, Up = class extends fl {
	constructor(e) {
		super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Z(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Z(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
};
function Wp(e, t, n) {
	return Kp(e) ? new e.constructor(e.subarray(t, n === void 0 ? e.length : n)) : e.slice(t, n);
}
function Gp(e, t, n) {
	return !e || !n && e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
function Kp(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
var qp = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		validate_interval: {
			seek: {
				let a;
				linear_scan: {
					forward_scan: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break forward_scan;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break seek;
						}
						a = t.length;
						break linear_scan;
					}
					if (!(e >= i)) {
						let o = t[1];
						e < o && (n = 2, i = o);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break seek;
						}
						a = n, n = 0;
						break linear_scan;
					}
					break validate_interval;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("call to abstract method");
	}
	intervalChanged_() {}
}, Jp = class extends qp {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: Io,
			endingEnd: Io
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
		if (o === void 0) switch (this.getSettings_().endingStart) {
			case Lo:
				i = e, o = 2 * t - n;
				break;
			case Ro:
				i = r.length - 2, o = t + r[i] - r[i + 1];
				break;
			default: i = e, o = n;
		}
		if (s === void 0) switch (this.getSettings_().endingEnd) {
			case Lo:
				a = e, s = 2 * n - t;
				break;
			case Ro:
				a = 1, s = n + r[1] - r[0];
				break;
			default: a = e - 1, s = t;
		}
		let c = (n - t) * .5, l = this.valueSize;
		this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
		for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
		return i;
	}
}, Yp = class extends qp {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
		for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
		return i;
	}
}, Xp = class extends qp {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, Zp = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = Gp(t, this.TimeBufferType), this.values = Gp(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: Gp(e.times, Array),
				values: Gp(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t);
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new Xp(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Yp(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new Jp(this.times, this.values, this.getValueSize(), e);
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case No:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case Po:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case Fo:
				t = this.InterpolantFactoryMethodSmooth;
				break;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
			else throw Error(t);
			return console.warn("THREE.KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return No;
			case this.InterpolantFactoryMethodLinear: return Po;
			case this.InterpolantFactoryMethodSmooth: return Fo;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = Wp(n, i, a), this.values = Wp(this.values, i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				console.error("THREE.KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				console.error("THREE.KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && Kp(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				console.error("THREE.KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = Wp(this.times), t = Wp(this.values), n = this.getValueSize(), r = this.getInterpolation() === Fo, i = e.length - 1, a = 1;
		for (let o = 1; o < i; ++o) {
			let i = !1, s = e[o];
			if (s !== e[o + 1] && (o !== 1 || s !== e[0])) if (r) i = !0;
			else {
				let e = o * n, r = e - n, a = e + n;
				for (let o = 0; o !== n; ++o) {
					let n = t[e + o];
					if (n !== t[r + o] || n !== t[a + o]) {
						i = !0;
						break;
					}
				}
			}
			if (i) {
				if (o !== a) {
					e[a] = e[o];
					let r = o * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = Wp(e, 0, a), this.values = Wp(t, 0, a * n)), this;
	}
	clone() {
		let e = Wp(this.times, 0), t = Wp(this.values, 0), n = this.constructor, r = new n(this.name, e, t);
		return r.createInterpolant = this.createInterpolant, r;
	}
};
Zp.prototype.TimeBufferType = Float32Array, Zp.prototype.ValueBufferType = Float32Array, Zp.prototype.DefaultInterpolation = Po;
var Qp = class extends Zp {};
Qp.prototype.ValueTypeName = "bool", Qp.prototype.ValueBufferType = Array, Qp.prototype.DefaultInterpolation = No, Qp.prototype.InterpolantFactoryMethodLinear = void 0, Qp.prototype.InterpolantFactoryMethodSmooth = void 0;
var $p = class extends Zp {};
$p.prototype.ValueTypeName = "color";
var em = class extends Zp {};
em.prototype.ValueTypeName = "number";
var tm = class extends qp {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
		for (let e = c + o; c !== e; c += 4) Zs.slerpFlat(i, 0, a, c - o, a, c, s);
		return i;
	}
}, nm = class extends Zp {
	InterpolantFactoryMethodLinear(e) {
		return new tm(this.times, this.values, this.getValueSize(), e);
	}
};
nm.prototype.ValueTypeName = "quaternion", nm.prototype.DefaultInterpolation = Po, nm.prototype.InterpolantFactoryMethodSmooth = void 0;
var rm = class extends Zp {};
rm.prototype.ValueTypeName = "string", rm.prototype.ValueBufferType = Array, rm.prototype.DefaultInterpolation = No, rm.prototype.InterpolantFactoryMethodLinear = void 0, rm.prototype.InterpolantFactoryMethodSmooth = void 0;
var im = class extends Zp {};
im.prototype.ValueTypeName = "vector";
var am = /* @__PURE__ */ new class {
	constructor(e, t, n) {
		let r = this, i = !1, a = 0, o = 0, s, c = [];
		this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(e) {
			o++, i === !1 && r.onStart !== void 0 && r.onStart(e, a, o), i = !0;
		}, this.itemEnd = function(e) {
			a++, r.onProgress !== void 0 && r.onProgress(e, a, o), a === o && (i = !1, r.onLoad !== void 0 && r.onLoad());
		}, this.itemError = function(e) {
			r.onError !== void 0 && r.onError(e);
		}, this.resolveURL = function(e) {
			return s ? s(e) : e;
		}, this.setURLModifier = function(e) {
			return s = e, this;
		}, this.addHandler = function(e, t) {
			return c.push(e, t), this;
		}, this.removeHandler = function(e) {
			let t = c.indexOf(e);
			return t !== -1 && c.splice(t, 2), this;
		}, this.getHandler = function(e) {
			for (let t = 0, n = c.length; t < n; t += 2) {
				let n = c[t], r = c[t + 1];
				if (n.global && (n.lastIndex = 0), n.test(e)) return r;
			}
			return null;
		};
	}
}(), om = class {
	constructor(e) {
		this.manager = e === void 0 ? am : e, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
	}
	load() {}
	loadAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.load(e, r, t, i);
		});
	}
	parse() {}
	setCrossOrigin(e) {
		return this.crossOrigin = e, this;
	}
	setWithCredentials(e) {
		return this.withCredentials = e, this;
	}
	setPath(e) {
		return this.path = e, this;
	}
	setResourcePath(e) {
		return this.resourcePath = e, this;
	}
	setRequestHeader(e) {
		return this.requestHeader = e, this;
	}
};
om.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var sm = class extends Qc {
	constructor(e, t = 1) {
		super(), this.isLight = !0, this.type = "Light", this.color = new Z(e), this.intensity = t;
	}
	dispose() {}
	copy(e, t) {
		return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
	}
}, cm = /* @__PURE__ */ new Dc(), lm = /* @__PURE__ */ new X(), um = /* @__PURE__ */ new X(), dm = class {
	constructor(e) {
		this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new J(512, 512), this.map = null, this.mapPass = null, this.matrix = new Dc(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new xu(), this._frameExtents = new J(1, 1), this._viewportCount = 1, this._viewports = [new Ks(0, 0, 1, 1)];
	}
	getViewportCount() {
		return this._viewportCount;
	}
	getFrustum() {
		return this._frustum;
	}
	updateMatrices(e) {
		let t = this.camera, n = this.matrix;
		lm.setFromMatrixPosition(e.matrixWorld), t.position.copy(lm), um.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(um), t.updateMatrixWorld(), cm.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(cm), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(cm);
	}
	getViewport(e) {
		return this._viewports[e];
	}
	getFrameExtents() {
		return this._frameExtents;
	}
	dispose() {
		this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
	}
	copy(e) {
		return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		let e = {};
		return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
	}
}, fm = /* @__PURE__ */ new Dc(), pm = /* @__PURE__ */ new X(), mm = /* @__PURE__ */ new X(), hm = class extends dm {
	constructor() {
		super(new lu(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new J(4, 2), this._viewportCount = 6, this._viewports = [
			new Ks(2, 1, 1, 1),
			new Ks(0, 1, 1, 1),
			new Ks(3, 1, 1, 1),
			new Ks(1, 1, 1, 1),
			new Ks(3, 0, 1, 1),
			new Ks(1, 0, 1, 1)
		], this._cubeDirections = [
			new X(1, 0, 0),
			new X(-1, 0, 0),
			new X(0, 0, 1),
			new X(0, 0, -1),
			new X(0, 1, 0),
			new X(0, -1, 0)
		], this._cubeUps = [
			new X(0, 1, 0),
			new X(0, 1, 0),
			new X(0, 1, 0),
			new X(0, 1, 0),
			new X(0, 0, 1),
			new X(0, 0, -1)
		];
	}
	updateMatrices(e, t = 0) {
		let n = this.camera, r = this.matrix, i = e.distance || n.far;
		i !== n.far && (n.far = i, n.updateProjectionMatrix()), pm.setFromMatrixPosition(e.matrixWorld), n.position.copy(pm), mm.copy(n.position), mm.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(mm), n.updateMatrixWorld(), r.makeTranslation(-pm.x, -pm.y, -pm.z), fm.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(fm);
	}
}, gm = class extends sm {
	constructor(e, t, n = 0, r = 2) {
		super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new hm();
	}
	get power() {
		return this.intensity * 4 * Math.PI;
	}
	set power(e) {
		this.intensity = e / (4 * Math.PI);
	}
	dispose() {
		this.shadow.dispose();
	}
	copy(e, t) {
		return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
	}
}, _m = class extends sm {
	constructor(e, t) {
		super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
	}
}, vm = class {
	constructor(e = !0) {
		this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
	}
	start() {
		this.startTime = ym(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
	}
	stop() {
		this.getElapsedTime(), this.running = !1, this.autoStart = !1;
	}
	getElapsedTime() {
		return this.getDelta(), this.elapsedTime;
	}
	getDelta() {
		let e = 0;
		if (this.autoStart && !this.running) return this.start(), 0;
		if (this.running) {
			let t = ym();
			e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
		}
		return e;
	}
};
function ym() {
	return (typeof performance > "u" ? Date : performance).now();
}
var bm = "\\[\\]\\.:\\/", xm = RegExp("[" + bm + "]", "g"), Sm = "[^" + bm + "]", Cm = "[^" + bm.replace("\\.", "") + "]", wm = /* @__PURE__ */ "((?:WC+[\\/:])*)".replace("WC", Sm), Tm = /* @__PURE__ */ "(WCOD+)?".replace("WCOD", Cm), Em = /* @__PURE__ */ "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", Sm), Dm = /* @__PURE__ */ "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", Sm), Om = RegExp("^" + wm + Tm + Em + Dm + "$"), km = [
	"material",
	"materials",
	"bones",
	"map"
], Am = class {
	constructor(e, t, n) {
		let r = n || jm.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, jm = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(xm, "");
	}
	static parseTrackName(e) {
		let t = Om.exec(e);
		if (t === null) throw Error("PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			km.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_fromArray(e, t) {
		this.resolvedProperty.fromArray(e, t);
	}
	_setValue_fromArray_setNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_getValue_unbound(e, t) {
		this.bind(), this.getValue(e, t);
	}
	_setValue_unbound(e, t) {
		this.bind(), this.setValue(e, t);
	}
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
			console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
			return;
		}
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) {
						console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.materials) {
						console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return;
					}
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) {
						console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return;
					}
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) {
						console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.map) {
						console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						return;
					}
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) {
						console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
						return;
					}
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) {
					console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					return;
				}
				t = t[e];
			}
		}
		let o = t[i];
		if (o === void 0) {
			let e = n.nodeName;
			console.error("THREE.PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
			return;
		}
		let s = this.Versioning.None;
		this.targetObject = t, t.needsUpdate === void 0 ? t.matrixWorldNeedsUpdate !== void 0 && (s = this.Versioning.MatrixWorldNeedsUpdate) : s = this.Versioning.NeedsUpdate;
		let c = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) {
					console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return;
				}
				if (!t.geometry.morphAttributes) {
					console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					return;
				}
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
jm.Composite = Am, jm.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, jm.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, jm.prototype.GetterByBindingType = [
	jm.prototype._getValue_direct,
	jm.prototype._getValue_array,
	jm.prototype._getValue_arrayElement,
	jm.prototype._getValue_toArray
], jm.prototype.SetterByBindingTypeAndVersioning = [
	[
		jm.prototype._setValue_direct,
		jm.prototype._setValue_direct_setNeedsUpdate,
		jm.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		jm.prototype._setValue_array,
		jm.prototype._setValue_array_setNeedsUpdate,
		jm.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		jm.prototype._setValue_arrayElement,
		jm.prototype._setValue_arrayElement_setNeedsUpdate,
		jm.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		jm.prototype._setValue_fromArray,
		jm.prototype._setValue_fromArray_setNeedsUpdate,
		jm.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
];
var Mm = class {
	constructor(e = 1, t = 0, n = 0) {
		return this.radius = e, this.phi = t, this.theta = n, this;
	}
	set(e, t, n) {
		return this.radius = e, this.phi = t, this.theta = n, this;
	}
	copy(e) {
		return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
	}
	makeSafe() {
		let e = 1e-6;
		return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, n) {
		return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(ns(t / this.radius, -1, 1))), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
};
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "156" } })), typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "156");
//#endregion
//#region node_modules/skinview3d/libs/model.js
function Nm(e, t, n, r, i, a, o, s) {
	let c = (e, t, n, r) => [
		new J(e / o, 1 - r / s),
		new J(n / o, 1 - r / s),
		new J(n / o, 1 - t / s),
		new J(e / o, 1 - t / s)
	], l = c(t + a, n, t + r + a, n + a), u = c(t + r + a, n, t + r * 2 + a, n + a), d = c(t, n + a, t + a, n + a + i), f = c(t + a, n + a, t + r + a, n + a + i), p = c(t + r + a, n + a, t + r + a * 2, n + i + a), m = c(t + r + a * 2, n + a, t + r * 2 + a * 2, n + i + a), h = e.attributes.uv, g = [
		p[3],
		p[2],
		p[0],
		p[1]
	], _ = [
		d[3],
		d[2],
		d[0],
		d[1]
	], v = [
		l[3],
		l[2],
		l[0],
		l[1]
	], y = [
		u[0],
		u[1],
		u[3],
		u[2]
	], b = [
		f[3],
		f[2],
		f[0],
		f[1]
	], x = [
		m[3],
		m[2],
		m[0],
		m[1]
	], S = [];
	for (let e of [
		g,
		_,
		v,
		y,
		b,
		x
	]) for (let t of e) S.push(t.x, t.y);
	h.set(new Float32Array(S)), h.needsUpdate = !0;
}
function Pm(e, t, n, r, i, a) {
	Nm(e, t, n, r, i, a, 64, 64);
}
function Fm(e, t, n, r, i, a) {
	Nm(e, t, n, r, i, a, 64, 32);
}
var Im = class extends pp {
	constructor(e, t) {
		super(), Object.defineProperty(this, "innerLayer", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: e
		}), Object.defineProperty(this, "outerLayer", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: t
		}), e.name = "inner", t.name = "outer";
	}
}, Lm = class extends pp {
	constructor() {
		super(), Object.defineProperty(this, "head", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "body", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "rightArm", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "leftArm", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "rightLeg", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "leftLeg", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "modelListeners", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: []
		}), Object.defineProperty(this, "slim", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: !1
		}), Object.defineProperty(this, "_map", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: null
		}), Object.defineProperty(this, "layer1Material", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "layer1MaterialBiased", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "layer2Material", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "layer2MaterialBiased", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), this.layer1Material = new Up({ side: 0 }), this.layer2Material = new Up({
			side: 2,
			transparent: !0,
			alphaTest: 1e-5
		}), this.layer1MaterialBiased = this.layer1Material.clone(), this.layer1MaterialBiased.polygonOffset = !0, this.layer1MaterialBiased.polygonOffsetFactor = 1, this.layer1MaterialBiased.polygonOffsetUnits = 1, this.layer2MaterialBiased = this.layer2Material.clone(), this.layer2MaterialBiased.polygonOffset = !0, this.layer2MaterialBiased.polygonOffsetFactor = 1, this.layer2MaterialBiased.polygonOffsetUnits = 1;
		let e = new $l(8, 8, 8);
		Pm(e, 0, 0, 8, 8, 8);
		let t = new Xl(e, this.layer1Material), n = new $l(9, 9, 9);
		Pm(n, 32, 0, 8, 8, 8);
		let r = new Xl(n, this.layer2Material);
		this.head = new Im(t, r), this.head.name = "head", this.head.add(t, r), t.position.y = 4, r.position.y = 4, this.add(this.head);
		let i = new $l(8, 12, 4);
		Pm(i, 16, 16, 8, 12, 4);
		let a = new Xl(i, this.layer1Material), o = new $l(8.5, 12.5, 4.5);
		Pm(o, 16, 32, 8, 12, 4);
		let s = new Xl(o, this.layer2Material);
		this.body = new Im(a, s), this.body.name = "body", this.body.add(a, s), this.body.position.y = -6, this.add(this.body);
		let c = new $l(), l = new Xl(c, this.layer1MaterialBiased);
		this.modelListeners.push(() => {
			l.scale.x = this.slim ? 3 : 4, l.scale.y = 12, l.scale.z = 4, Pm(c, 40, 16, this.slim ? 3 : 4, 12, 4);
		});
		let u = new $l(), d = new Xl(u, this.layer2MaterialBiased);
		this.modelListeners.push(() => {
			d.scale.x = this.slim ? 3.5 : 4.5, d.scale.y = 12.5, d.scale.z = 4.5, Pm(u, 40, 32, this.slim ? 3 : 4, 12, 4);
		});
		let f = new pp();
		f.add(l, d), this.modelListeners.push(() => {
			f.position.x = this.slim ? -.5 : -1;
		}), f.position.y = -4, this.rightArm = new Im(l, d), this.rightArm.name = "rightArm", this.rightArm.add(f), this.rightArm.position.x = -5, this.rightArm.position.y = -2, this.add(this.rightArm);
		let p = new $l(), m = new Xl(p, this.layer1MaterialBiased);
		this.modelListeners.push(() => {
			m.scale.x = this.slim ? 3 : 4, m.scale.y = 12, m.scale.z = 4, Pm(p, 32, 48, this.slim ? 3 : 4, 12, 4);
		});
		let h = new $l(), g = new Xl(h, this.layer2MaterialBiased);
		this.modelListeners.push(() => {
			g.scale.x = this.slim ? 3.5 : 4.5, g.scale.y = 12.5, g.scale.z = 4.5, Pm(h, 48, 48, this.slim ? 3 : 4, 12, 4);
		});
		let _ = new pp();
		_.add(m, g), this.modelListeners.push(() => {
			_.position.x = this.slim ? .5 : 1;
		}), _.position.y = -4, this.leftArm = new Im(m, g), this.leftArm.name = "leftArm", this.leftArm.add(_), this.leftArm.position.x = 5, this.leftArm.position.y = -2, this.add(this.leftArm);
		let v = new $l(4, 12, 4);
		Pm(v, 0, 16, 4, 12, 4);
		let y = new Xl(v, this.layer1MaterialBiased), b = new $l(4.5, 12.5, 4.5);
		Pm(b, 0, 32, 4, 12, 4);
		let x = new Xl(b, this.layer2MaterialBiased), S = new pp();
		S.add(y, x), S.position.y = -6, this.rightLeg = new Im(y, x), this.rightLeg.name = "rightLeg", this.rightLeg.add(S), this.rightLeg.position.x = -1.9, this.rightLeg.position.y = -12, this.rightLeg.position.z = -.1, this.add(this.rightLeg);
		let C = new $l(4, 12, 4);
		Pm(C, 16, 48, 4, 12, 4);
		let w = new Xl(C, this.layer1MaterialBiased), T = new $l(4.5, 12.5, 4.5);
		Pm(T, 0, 48, 4, 12, 4);
		let E = new Xl(T, this.layer2MaterialBiased), D = new pp();
		D.add(w, E), D.position.y = -6, this.leftLeg = new Im(w, E), this.leftLeg.name = "leftLeg", this.leftLeg.add(D), this.leftLeg.position.x = 1.9, this.leftLeg.position.y = -12, this.leftLeg.position.z = -.1, this.add(this.leftLeg), this.modelType = "default";
	}
	get map() {
		return this._map;
	}
	set map(e) {
		this._map = e, this.layer1Material.map = e, this.layer1Material.needsUpdate = !0, this.layer1MaterialBiased.map = e, this.layer1MaterialBiased.needsUpdate = !0, this.layer2Material.map = e, this.layer2Material.needsUpdate = !0, this.layer2MaterialBiased.map = e, this.layer2MaterialBiased.needsUpdate = !0;
	}
	get modelType() {
		return this.slim ? "slim" : "default";
	}
	set modelType(e) {
		this.slim = e === "slim", this.modelListeners.forEach((e) => e());
	}
	getBodyParts() {
		return this.children.filter((e) => e instanceof Im);
	}
	setInnerLayerVisible(e) {
		this.getBodyParts().forEach((t) => t.innerLayer.visible = e);
	}
	setOuterLayerVisible(e) {
		this.getBodyParts().forEach((t) => t.outerLayer.visible = e);
	}
	resetJoints() {
		this.head.rotation.set(0, 0, 0), this.leftArm.rotation.set(0, 0, 0), this.rightArm.rotation.set(0, 0, 0), this.leftLeg.rotation.set(0, 0, 0), this.rightLeg.rotation.set(0, 0, 0), this.body.rotation.set(0, 0, 0), this.head.position.y = 0, this.body.position.y = -6, this.body.position.z = 0, this.rightArm.position.x = -5, this.rightArm.position.y = -2, this.rightArm.position.z = 0, this.leftArm.position.x = 5, this.leftArm.position.y = -2, this.leftArm.position.z = 0, this.rightLeg.position.x = -1.9, this.rightLeg.position.y = -12, this.rightLeg.position.z = -.1, this.leftLeg.position.x = 1.9, this.leftLeg.position.y = -12, this.leftLeg.position.z = -.1;
	}
}, Rm = class extends pp {
	constructor() {
		super(), Object.defineProperty(this, "cape", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "material", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), this.material = new Up({
			side: 2,
			transparent: !0,
			alphaTest: 1e-5
		});
		let e = new $l(10, 16, 1);
		Fm(e, 0, 0, 10, 16, 1), this.cape = new Xl(e, this.material), this.cape.position.y = -8, this.cape.position.z = .5, this.add(this.cape);
	}
	get map() {
		return this.material.map;
	}
	set map(e) {
		this.material.map = e, this.material.needsUpdate = !0;
	}
}, zm = class extends pp {
	constructor() {
		super(), Object.defineProperty(this, "leftWing", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "rightWing", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "material", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), this.material = new Up({
			side: 2,
			transparent: !0,
			alphaTest: 1e-5
		});
		let e = new $l(12, 22, 4);
		Fm(e, 22, 0, 10, 20, 2);
		let t = new Xl(e, this.material);
		t.position.x = -5, t.position.y = -10, t.position.z = -1, this.leftWing = new pp(), this.leftWing.add(t), this.add(this.leftWing);
		let n = new $l(12, 22, 4);
		Fm(n, 22, 0, 10, 20, 2);
		let r = new Xl(n, this.material);
		r.scale.x = -1, r.position.x = 5, r.position.y = -10, r.position.z = -1, this.rightWing = new pp(), this.rightWing.add(r), this.add(this.rightWing), this.leftWing.position.x = 5, this.leftWing.rotation.x = .2617994, this.resetJoints();
	}
	resetJoints() {
		this.leftWing.rotation.y = .01, this.leftWing.rotation.z = .2617994, this.updateRightWing();
	}
	updateRightWing() {
		this.rightWing.position.x = -this.leftWing.position.x, this.rightWing.position.y = this.leftWing.position.y, this.rightWing.rotation.x = this.leftWing.rotation.x, this.rightWing.rotation.y = -this.leftWing.rotation.y, this.rightWing.rotation.z = -this.leftWing.rotation.z;
	}
	get map() {
		return this.material.map;
	}
	set map(e) {
		this.material.map = e, this.material.needsUpdate = !0;
	}
}, Bm = class extends pp {
	constructor() {
		super(), Object.defineProperty(this, "rightEar", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "leftEar", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "material", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), this.material = new Up({ side: 0 });
		let e = new $l(8, 8, 4 / 3);
		Nm(e, 0, 0, 6, 6, 1, 14, 7), this.rightEar = new Xl(e, this.material), this.rightEar.name = "rightEar", this.rightEar.position.x = -6, this.add(this.rightEar), this.leftEar = new Xl(e, this.material), this.leftEar.name = "leftEar", this.leftEar.position.x = 6, this.add(this.leftEar);
	}
	get map() {
		return this.material.map;
	}
	set map(e) {
		this.material.map = e, this.material.needsUpdate = !0;
	}
}, Vm = 10.8 * Math.PI / 180, Hm = class extends pp {
	constructor() {
		super(), Object.defineProperty(this, "skin", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "cape", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "elytra", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "ears", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), this.skin = new Lm(), this.skin.name = "skin", this.skin.position.y = 8, this.add(this.skin), this.cape = new Rm(), this.cape.name = "cape", this.cape.position.y = 8, this.cape.position.z = -2, this.cape.rotation.x = Vm, this.cape.rotation.y = Math.PI, this.add(this.cape), this.elytra = new zm(), this.elytra.name = "elytra", this.elytra.position.y = 8, this.elytra.position.z = -2, this.elytra.visible = !1, this.add(this.elytra), this.ears = new Bm(), this.ears.name = "ears", this.ears.position.y = 10, this.ears.position.z = 2 / 3, this.ears.visible = !1, this.skin.head.add(this.ears);
	}
	get backEquipment() {
		return this.cape.visible ? "cape" : this.elytra.visible ? "elytra" : null;
	}
	set backEquipment(e) {
		this.cape.visible = e === "cape", this.elytra.visible = e === "elytra";
	}
	resetJoints() {
		this.skin.resetJoints(), this.cape.rotation.x = Vm, this.cape.position.y = 8, this.cape.position.z = -2, this.elytra.position.y = 8, this.elytra.position.z = -2, this.elytra.rotation.x = 0, this.elytra.resetJoints();
	}
};
//#endregion
//#region node_modules/skinview-utils/build/types.js
function Um(e) {
	return e instanceof HTMLImageElement || e instanceof HTMLVideoElement || e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas;
}
//#endregion
//#region node_modules/skinview-utils/build/process.js
function Wm(e, t, n, r, i) {
	let a = e.getImageData(t, n, r, i);
	for (let e = 0; e < r; e++) for (let t = 0; t < i; t++) {
		let n = (e + t * r) * 4;
		if (a.data[n + 3] !== 255) return !0;
	}
	return !1;
}
function Gm(e) {
	return e / 64;
}
function Km(e, t, n) {
	if (n) {
		if (Wm(e, 0, 0, t, t)) return;
	} else if (Wm(e, 0, 0, t, t / 2)) return;
	let r = Gm(t), i = (t, n, i, a) => e.clearRect(t * r, n * r, i * r, a * r);
	i(40, 0, 8, 8), i(48, 0, 8, 8), i(32, 8, 8, 8), i(40, 8, 8, 8), i(48, 8, 8, 8), i(56, 8, 8, 8), n && (i(4, 32, 4, 4), i(8, 32, 4, 4), i(0, 36, 4, 12), i(4, 36, 4, 12), i(8, 36, 4, 12), i(12, 36, 4, 12), i(20, 32, 8, 4), i(28, 32, 8, 4), i(16, 36, 4, 12), i(20, 36, 8, 12), i(28, 36, 4, 12), i(32, 36, 8, 12), i(44, 32, 4, 4), i(48, 32, 4, 4), i(40, 36, 4, 12), i(44, 36, 4, 12), i(48, 36, 4, 12), i(52, 36, 12, 12), i(4, 48, 4, 4), i(8, 48, 4, 4), i(0, 52, 4, 12), i(4, 52, 4, 12), i(8, 52, 4, 12), i(12, 52, 4, 12), i(52, 48, 4, 4), i(56, 48, 4, 4), i(48, 52, 4, 12), i(52, 52, 4, 12), i(56, 52, 4, 12), i(60, 52, 4, 12));
}
function qm(e, t) {
	e.save(), e.scale(-1, 1);
	let n = Gm(t), r = (t, r, i, a, o, s) => e.drawImage(e.canvas, t * n, r * n, i * n, a * n, -o * n, s * n, -i * n, a * n);
	r(4, 16, 4, 4, 20, 48), r(8, 16, 4, 4, 24, 48), r(0, 20, 4, 12, 24, 52), r(4, 20, 4, 12, 20, 52), r(8, 20, 4, 12, 16, 52), r(12, 20, 4, 12, 28, 52), r(44, 16, 4, 4, 36, 48), r(48, 16, 4, 4, 40, 48), r(40, 20, 4, 12, 40, 52), r(44, 20, 4, 12, 36, 52), r(48, 20, 4, 12, 32, 52), r(52, 20, 4, 12, 44, 52), e.restore();
}
function Jm(e, t) {
	let n = !1;
	if (t.width !== t.height) if (t.width === 2 * t.height) n = !0;
	else throw Error(`Bad skin size: ${t.width}x${t.height}`);
	let r = e.getContext("2d", { willReadFrequently: !0 });
	if (n) {
		let n = t.width;
		e.width = n, e.height = n, r.clearRect(0, 0, n, n), r.drawImage(t, 0, 0, n, n / 2), qm(r, n), Km(r, e.width, !1);
	} else e.width = t.width, e.height = t.height, r.clearRect(0, 0, t.width, t.height), r.drawImage(t, 0, 0, e.width, e.height), Km(r, e.width, !0);
}
function Ym(e) {
	if (e.width === 2 * e.height) return e.width / 64;
	if (e.width * 17 == e.height * 22) return e.width / 22;
	if (e.width * 11 == e.height * 23) return e.width / 46;
	throw Error(`Bad cape size: ${e.width}x${e.height}`);
}
function Xm(e, t) {
	let n = Ym(t);
	e.width = 64 * n, e.height = 32 * n;
	let r = e.getContext("2d", { willReadFrequently: !0 });
	r.clearRect(0, 0, e.width, e.height), r.drawImage(t, 0, 0, t.width, t.height);
}
function Zm(e, t, n, r, i) {
	let a = e.getImageData(t, n, r, i);
	for (let e = 0; e < r; e++) for (let t = 0; t < i; t++) {
		let n = (e + t * r) * 4;
		if (!(a.data[n + 0] === 0 && a.data[n + 1] === 0 && a.data[n + 2] === 0 && a.data[n + 3] === 255)) return !1;
	}
	return !0;
}
function Qm(e, t, n, r, i) {
	let a = e.getImageData(t, n, r, i);
	for (let e = 0; e < r; e++) for (let t = 0; t < i; t++) {
		let n = (e + t * r) * 4;
		if (!(a.data[n + 0] === 255 && a.data[n + 1] === 255 && a.data[n + 2] === 255 && a.data[n + 3] === 255)) return !1;
	}
	return !0;
}
function $m(e) {
	let t = Gm(e.width), n = e.getContext("2d", { willReadFrequently: !0 }), r = (e, r, i, a) => Wm(n, e * t, r * t, i * t, a * t), i = (e, r, i, a) => Zm(n, e * t, r * t, i * t, a * t), a = (e, r, i, a) => Qm(n, e * t, r * t, i * t, a * t);
	return r(50, 16, 2, 4) || r(54, 20, 2, 12) || r(42, 48, 2, 4) || r(46, 52, 2, 12) || i(50, 16, 2, 4) && i(54, 20, 2, 12) && i(42, 48, 2, 4) && i(46, 52, 2, 12) || a(50, 16, 2, 4) && a(54, 20, 2, 12) && a(42, 48, 2, 4) && a(46, 52, 2, 12) ? "slim" : "default";
}
function eh(e) {
	if (e.width === e.height * 2 && e.height % 7 == 0) return e.height / 7;
	throw Error(`Bad ears size: ${e.width}x${e.height}`);
}
function th(e, t) {
	let n = eh(t);
	e.width = 14 * n, e.height = 7 * n;
	let r = e.getContext("2d", { willReadFrequently: !0 });
	r.clearRect(0, 0, e.width, e.height), r.drawImage(t, 0, 0, t.width, t.height);
}
function nh(e, t) {
	if (t.width !== t.height && t.width !== 2 * t.height) throw Error(`Bad skin size: ${t.width}x${t.height}`);
	let n = Gm(t.width), r = 14 * n, i = 7 * n;
	e.width = r, e.height = i;
	let a = e.getContext("2d", { willReadFrequently: !0 });
	a.clearRect(0, 0, r, i), a.drawImage(t, 24 * n, 0, r, i, 0, 0, r, i);
}
//#endregion
//#region node_modules/skinview-utils/build/load-image.js
async function rh(e) {
	let t = document.createElement("img");
	return new Promise((n, r) => {
		t.onload = () => n(t), t.onerror = r, t.crossOrigin = "anonymous", typeof e == "string" ? t.src = e : (e.crossOrigin !== void 0 && (t.crossOrigin = e.crossOrigin), e.referrerPolicy !== void 0 && (t.referrerPolicy = e.referrerPolicy), t.src = e.src);
	});
}
//#endregion
//#region node_modules/three/examples/jsm/controls/OrbitControls.js
var ih = { type: "change" }, ah = { type: "start" }, oh = { type: "end" }, sh = new Ec(), ch = new vu(), lh = Math.cos(70 * Cs.DEG2RAD), uh = class extends Xo {
	constructor(e, t) {
		super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new X(), this.minDistance = 0, this.maxDistance = Infinity, this.minZoom = 0, this.maxZoom = Infinity, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -Infinity, this.maxAzimuthAngle = Infinity, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
			LEFT: "ArrowLeft",
			UP: "ArrowUp",
			RIGHT: "ArrowRight",
			BOTTOM: "ArrowDown"
		}, this.mouseButtons = {
			LEFT: mo.ROTATE,
			MIDDLE: mo.DOLLY,
			RIGHT: mo.PAN
		}, this.touches = {
			ONE: ho.ROTATE,
			TWO: ho.DOLLY_PAN
		}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
			return o.phi;
		}, this.getAzimuthalAngle = function() {
			return o.theta;
		}, this.getDistance = function() {
			return this.object.position.distanceTo(this.target);
		}, this.listenToKeyEvents = function(e) {
			e.addEventListener("keydown", ve), this._domElementKeyEvents = e;
		}, this.stopListenToKeyEvents = function() {
			this._domElementKeyEvents.removeEventListener("keydown", ve), this._domElementKeyEvents = null;
		}, this.saveState = function() {
			n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
		}, this.reset = function() {
			n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(ih), n.update(), i = r.NONE;
		}, this.update = function() {
			let t = new X(), u = new Zs().setFromUnitVectors(e.up, new X(0, 1, 0)), d = u.clone().invert(), f = new X(), p = new Zs(), m = new X(), h = 2 * Math.PI;
			return function(g = null) {
				let _ = n.object.position;
				t.copy(_).sub(n.target), t.applyQuaternion(u), o.setFromVector3(t), n.autoRotate && i === r.NONE && E(w(g)), n.enableDamping ? (o.theta += s.theta * n.dampingFactor, o.phi += s.phi * n.dampingFactor) : (o.theta += s.theta, o.phi += s.phi);
				let v = n.minAzimuthAngle, S = n.maxAzimuthAngle;
				isFinite(v) && isFinite(S) && (v < -Math.PI ? v += h : v > Math.PI && (v -= h), S < -Math.PI ? S += h : S > Math.PI && (S -= h), v <= S ? o.theta = Math.max(v, Math.min(S, o.theta)) : o.theta = o.theta > (v + S) / 2 ? Math.max(v, o.theta) : Math.min(S, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(l, n.dampingFactor) : n.target.add(l), n.zoomToCursor && x || n.object.isOrthographicCamera ? o.radius = ee(o.radius) : o.radius = ee(o.radius * c), t.setFromSpherical(o), t.applyQuaternion(d), _.copy(n.target).add(t), n.object.lookAt(n.target), n.enableDamping === !0 ? (s.theta *= 1 - n.dampingFactor, s.phi *= 1 - n.dampingFactor, l.multiplyScalar(1 - n.dampingFactor)) : (s.set(0, 0, 0), l.set(0, 0, 0));
				let C = !1;
				if (n.zoomToCursor && x) {
					let r = null;
					if (n.object.isPerspectiveCamera) {
						let e = t.length();
						r = ee(e * c);
						let i = e - r;
						n.object.position.addScaledVector(y, i), n.object.updateMatrixWorld();
					} else if (n.object.isOrthographicCamera) {
						let e = new X(b.x, b.y, 0);
						e.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / c)), n.object.updateProjectionMatrix(), C = !0;
						let i = new X(b.x, b.y, 0);
						i.unproject(n.object), n.object.position.sub(i).add(e), n.object.updateMatrixWorld(), r = t.length();
					} else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1;
					r !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(r).add(n.object.position) : (sh.origin.copy(n.object.position), sh.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(sh.direction)) < lh ? e.lookAt(n.target) : (ch.setFromNormalAndCoplanarPoint(n.object.up, n.target), sh.intersectPlane(ch, n.target))));
				} else n.object.isOrthographicCamera && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / c)), n.object.updateProjectionMatrix(), C = !0);
				return c = 1, x = !1, C || f.distanceToSquared(n.object.position) > a || 8 * (1 - p.dot(n.object.quaternion)) > a || m.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(ih), f.copy(n.object.position), p.copy(n.object.quaternion), m.copy(n.target), C = !1, !0) : !1;
			};
		}(), this.dispose = function() {
			n.domElement.removeEventListener("contextmenu", be), n.domElement.removeEventListener("pointerdown", z), n.domElement.removeEventListener("pointercancel", me), n.domElement.removeEventListener("wheel", _e), n.domElement.removeEventListener("pointermove", B), n.domElement.removeEventListener("pointerup", me), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", ve), n._domElementKeyEvents = null);
		};
		let n = this, r = {
			NONE: -1,
			ROTATE: 0,
			DOLLY: 1,
			PAN: 2,
			TOUCH_ROTATE: 3,
			TOUCH_PAN: 4,
			TOUCH_DOLLY_PAN: 5,
			TOUCH_DOLLY_ROTATE: 6
		}, i = r.NONE, a = 1e-6, o = new Mm(), s = new Mm(), c = 1, l = new X(), u = new J(), d = new J(), f = new J(), p = new J(), m = new J(), h = new J(), g = new J(), _ = new J(), v = new J(), y = new X(), b = new J(), x = !1, S = [], C = {};
		function w(e) {
			return e === null ? 2 * Math.PI / 60 / 60 * n.autoRotateSpeed : 2 * Math.PI / 60 * n.autoRotateSpeed * e;
		}
		function T() {
			return .95 ** n.zoomSpeed;
		}
		function E(e) {
			s.theta -= e;
		}
		function D(e) {
			s.phi -= e;
		}
		let O = function() {
			let e = new X();
			return function(t, n) {
				e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), l.add(e);
			};
		}(), k = function() {
			let e = new X();
			return function(t, r) {
				n.screenSpacePanning === !0 ? e.setFromMatrixColumn(r, 1) : (e.setFromMatrixColumn(r, 0), e.crossVectors(n.object.up, e)), e.multiplyScalar(t), l.add(e);
			};
		}(), A = function() {
			let e = new X();
			return function(t, r) {
				let i = n.domElement;
				if (n.object.isPerspectiveCamera) {
					let a = n.object.position;
					e.copy(a).sub(n.target);
					let o = e.length();
					o *= Math.tan(n.object.fov / 2 * Math.PI / 180), O(2 * t * o / i.clientHeight, n.object.matrix), k(2 * r * o / i.clientHeight, n.object.matrix);
				} else n.object.isOrthographicCamera ? (O(t * (n.object.right - n.object.left) / n.object.zoom / i.clientWidth, n.object.matrix), k(r * (n.object.top - n.object.bottom) / n.object.zoom / i.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
			};
		}();
		function j(e) {
			n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? c /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
		}
		function M(e) {
			n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? c *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
		}
		function N(e) {
			if (!n.zoomToCursor) return;
			x = !0;
			let t = n.domElement.getBoundingClientRect(), r = e.clientX - t.left, i = e.clientY - t.top, a = t.width, o = t.height;
			b.x = r / a * 2 - 1, b.y = -(i / o) * 2 + 1, y.set(b.x, b.y, 1).unproject(n.object).sub(n.object.position).normalize();
		}
		function ee(e) {
			return Math.max(n.minDistance, Math.min(n.maxDistance, e));
		}
		function P(e) {
			u.set(e.clientX, e.clientY);
		}
		function te(e) {
			N(e), g.set(e.clientX, e.clientY);
		}
		function ne(e) {
			p.set(e.clientX, e.clientY);
		}
		function re(e) {
			d.set(e.clientX, e.clientY), f.subVectors(d, u).multiplyScalar(n.rotateSpeed);
			let t = n.domElement;
			E(2 * Math.PI * f.x / t.clientHeight), D(2 * Math.PI * f.y / t.clientHeight), u.copy(d), n.update();
		}
		function ie(e) {
			_.set(e.clientX, e.clientY), v.subVectors(_, g), v.y > 0 ? j(T()) : v.y < 0 && M(T()), g.copy(_), n.update();
		}
		function ae(e) {
			m.set(e.clientX, e.clientY), h.subVectors(m, p).multiplyScalar(n.panSpeed), A(h.x, h.y), p.copy(m), n.update();
		}
		function oe(e) {
			N(e), e.deltaY < 0 ? M(T()) : e.deltaY > 0 && j(T()), n.update();
		}
		function se(e) {
			let t = !1;
			switch (e.code) {
				case n.keys.UP:
					e.ctrlKey || e.metaKey || e.shiftKey ? D(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : A(0, n.keyPanSpeed), t = !0;
					break;
				case n.keys.BOTTOM:
					e.ctrlKey || e.metaKey || e.shiftKey ? D(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : A(0, -n.keyPanSpeed), t = !0;
					break;
				case n.keys.LEFT:
					e.ctrlKey || e.metaKey || e.shiftKey ? E(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : A(n.keyPanSpeed, 0), t = !0;
					break;
				case n.keys.RIGHT:
					e.ctrlKey || e.metaKey || e.shiftKey ? E(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : A(-n.keyPanSpeed, 0), t = !0;
					break;
			}
			t && (e.preventDefault(), n.update());
		}
		function ce() {
			if (S.length === 1) u.set(S[0].pageX, S[0].pageY);
			else {
				let e = .5 * (S[0].pageX + S[1].pageX), t = .5 * (S[0].pageY + S[1].pageY);
				u.set(e, t);
			}
		}
		function le() {
			if (S.length === 1) p.set(S[0].pageX, S[0].pageY);
			else {
				let e = .5 * (S[0].pageX + S[1].pageX), t = .5 * (S[0].pageY + S[1].pageY);
				p.set(e, t);
			}
		}
		function ue() {
			let e = S[0].pageX - S[1].pageX, t = S[0].pageY - S[1].pageY, n = Math.sqrt(e * e + t * t);
			g.set(0, n);
		}
		function de() {
			n.enableZoom && ue(), n.enablePan && le();
		}
		function F() {
			n.enableZoom && ue(), n.enableRotate && ce();
		}
		function fe(e) {
			if (S.length == 1) d.set(e.pageX, e.pageY);
			else {
				let t = Ce(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
				d.set(n, r);
			}
			f.subVectors(d, u).multiplyScalar(n.rotateSpeed);
			let t = n.domElement;
			E(2 * Math.PI * f.x / t.clientHeight), D(2 * Math.PI * f.y / t.clientHeight), u.copy(d);
		}
		function I(e) {
			if (S.length === 1) m.set(e.pageX, e.pageY);
			else {
				let t = Ce(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
				m.set(n, r);
			}
			h.subVectors(m, p).multiplyScalar(n.panSpeed), A(h.x, h.y), p.copy(m);
		}
		function L(e) {
			let t = Ce(e), r = e.pageX - t.x, i = e.pageY - t.y, a = Math.sqrt(r * r + i * i);
			_.set(0, a), v.set(0, (_.y / g.y) ** +n.zoomSpeed), j(v.y), g.copy(_);
		}
		function R(e) {
			n.enableZoom && L(e), n.enablePan && I(e);
		}
		function pe(e) {
			n.enableZoom && L(e), n.enableRotate && fe(e);
		}
		function z(e) {
			n.enabled !== !1 && (S.length === 0 && (n.domElement.setPointerCapture(e.pointerId), n.domElement.addEventListener("pointermove", B), n.domElement.addEventListener("pointerup", me)), xe(e), e.pointerType === "touch" ? V(e) : he(e));
		}
		function B(e) {
			n.enabled !== !1 && (e.pointerType === "touch" ? ye(e) : ge(e));
		}
		function me(e) {
			Se(e), S.length === 0 && (n.domElement.releasePointerCapture(e.pointerId), n.domElement.removeEventListener("pointermove", B), n.domElement.removeEventListener("pointerup", me)), n.dispatchEvent(oh), i = r.NONE;
		}
		function he(e) {
			let t;
			switch (e.button) {
				case 0:
					t = n.mouseButtons.LEFT;
					break;
				case 1:
					t = n.mouseButtons.MIDDLE;
					break;
				case 2:
					t = n.mouseButtons.RIGHT;
					break;
				default: t = -1;
			}
			switch (t) {
				case mo.DOLLY:
					if (n.enableZoom === !1) return;
					te(e), i = r.DOLLY;
					break;
				case mo.ROTATE:
					if (e.ctrlKey || e.metaKey || e.shiftKey) {
						if (n.enablePan === !1) return;
						ne(e), i = r.PAN;
					} else {
						if (n.enableRotate === !1) return;
						P(e), i = r.ROTATE;
					}
					break;
				case mo.PAN:
					if (e.ctrlKey || e.metaKey || e.shiftKey) {
						if (n.enableRotate === !1) return;
						P(e), i = r.ROTATE;
					} else {
						if (n.enablePan === !1) return;
						ne(e), i = r.PAN;
					}
					break;
				default: i = r.NONE;
			}
			i !== r.NONE && n.dispatchEvent(ah);
		}
		function ge(e) {
			switch (i) {
				case r.ROTATE:
					if (n.enableRotate === !1) return;
					re(e);
					break;
				case r.DOLLY:
					if (n.enableZoom === !1) return;
					ie(e);
					break;
				case r.PAN:
					if (n.enablePan === !1) return;
					ae(e);
					break;
			}
		}
		function _e(e) {
			n.enabled === !1 || n.enableZoom === !1 || i !== r.NONE || (e.preventDefault(), n.dispatchEvent(ah), oe(e), n.dispatchEvent(oh));
		}
		function ve(e) {
			n.enabled === !1 || n.enablePan === !1 || se(e);
		}
		function V(e) {
			switch (H(e), S.length) {
				case 1:
					switch (n.touches.ONE) {
						case ho.ROTATE:
							if (n.enableRotate === !1) return;
							ce(), i = r.TOUCH_ROTATE;
							break;
						case ho.PAN:
							if (n.enablePan === !1) return;
							le(), i = r.TOUCH_PAN;
							break;
						default: i = r.NONE;
					}
					break;
				case 2:
					switch (n.touches.TWO) {
						case ho.DOLLY_PAN:
							if (n.enableZoom === !1 && n.enablePan === !1) return;
							de(), i = r.TOUCH_DOLLY_PAN;
							break;
						case ho.DOLLY_ROTATE:
							if (n.enableZoom === !1 && n.enableRotate === !1) return;
							F(), i = r.TOUCH_DOLLY_ROTATE;
							break;
						default: i = r.NONE;
					}
					break;
				default: i = r.NONE;
			}
			i !== r.NONE && n.dispatchEvent(ah);
		}
		function ye(e) {
			switch (H(e), i) {
				case r.TOUCH_ROTATE:
					if (n.enableRotate === !1) return;
					fe(e), n.update();
					break;
				case r.TOUCH_PAN:
					if (n.enablePan === !1) return;
					I(e), n.update();
					break;
				case r.TOUCH_DOLLY_PAN:
					if (n.enableZoom === !1 && n.enablePan === !1) return;
					R(e), n.update();
					break;
				case r.TOUCH_DOLLY_ROTATE:
					if (n.enableZoom === !1 && n.enableRotate === !1) return;
					pe(e), n.update();
					break;
				default: i = r.NONE;
			}
		}
		function be(e) {
			n.enabled !== !1 && e.preventDefault();
		}
		function xe(e) {
			S.push(e);
		}
		function Se(e) {
			delete C[e.pointerId];
			for (let t = 0; t < S.length; t++) if (S[t].pointerId == e.pointerId) {
				S.splice(t, 1);
				return;
			}
		}
		function H(e) {
			let t = C[e.pointerId];
			t === void 0 && (t = new J(), C[e.pointerId] = t), t.set(e.pageX, e.pageY);
		}
		function Ce(e) {
			return C[(e.pointerId === S[0].pointerId ? S[1] : S[0]).pointerId];
		}
		n.domElement.addEventListener("contextmenu", be), n.domElement.addEventListener("pointerdown", z), n.domElement.addEventListener("pointercancel", me), n.domElement.addEventListener("wheel", _e, { passive: !1 }), this.update();
	}
}, dh = {
	name: "CopyShader",
	uniforms: {
		tDiffuse: { value: null },
		opacity: { value: 1 }
	},
	vertexShader: "\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n\n		uniform float opacity;\n\n		uniform sampler2D tDiffuse;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vec4 texel = texture2D( tDiffuse, vUv );\n			gl_FragColor = opacity * texel;\n\n\n		}"
}, fh = class {
	constructor() {
		this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
	}
	setSize() {}
	render() {
		console.error("THREE.Pass: .render() must be implemented in derived pass.");
	}
	dispose() {}
}, ph = new Nu(-1, 1, 1, -1, 0, 1), mh = new Ml();
mh.setAttribute("position", new wl([
	-1,
	3,
	0,
	-1,
	-1,
	0,
	3,
	-1,
	0
], 3)), mh.setAttribute("uv", new wl([
	0,
	2,
	0,
	0,
	2,
	0
], 2));
var hh = class {
	constructor(e) {
		this._mesh = new Xl(mh, e);
	}
	dispose() {
		this._mesh.geometry.dispose();
	}
	render(e) {
		e.render(this._mesh, ph);
	}
	get material() {
		return this._mesh.material;
	}
	set material(e) {
		this._mesh.material = e;
	}
}, gh = class extends fh {
	constructor(e, t) {
		super(), this.textureID = t === void 0 ? "tDiffuse" : t, e instanceof su ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = iu.clone(e.uniforms), this.material = new su({
			name: e.name === void 0 ? "unspecified" : e.name,
			defines: Object.assign({}, e.defines),
			uniforms: this.uniforms,
			vertexShader: e.vertexShader,
			fragmentShader: e.fragmentShader
		})), this.fsQuad = new hh(this.material);
	}
	render(e, t, n) {
		this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
	}
	dispose() {
		this.material.dispose(), this.fsQuad.dispose();
	}
}, _h = class extends fh {
	constructor(e, t) {
		super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
	}
	render(e, t, n) {
		let r = e.getContext(), i = e.state;
		i.buffers.color.setMask(!1), i.buffers.depth.setMask(!1), i.buffers.color.setLocked(!0), i.buffers.depth.setLocked(!0);
		let a, o;
		this.inverse ? (a = 0, o = 1) : (a = 1, o = 0), i.buffers.stencil.setTest(!0), i.buffers.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE), i.buffers.stencil.setFunc(r.ALWAYS, a, 4294967295), i.buffers.stencil.setClear(o), i.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), i.buffers.color.setLocked(!1), i.buffers.depth.setLocked(!1), i.buffers.color.setMask(!0), i.buffers.depth.setMask(!0), i.buffers.stencil.setLocked(!1), i.buffers.stencil.setFunc(r.EQUAL, 1, 4294967295), i.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), i.buffers.stencil.setLocked(!0);
	}
}, vh = class extends fh {
	constructor() {
		super(), this.needsSwap = !1;
	}
	render(e) {
		e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
	}
}, yh = class {
	constructor(e, t) {
		if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
			let n = e.getSize(new J());
			this._width = n.width, this._height = n.height, t = new Js(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: Oo }), t.texture.name = "EffectComposer.rt1";
		} else this._width = t.width, this._height = t.height;
		this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new gh(dh), this.copyPass.material.blending = 0, this.clock = new vm();
	}
	swapBuffers() {
		let e = this.readBuffer;
		this.readBuffer = this.writeBuffer, this.writeBuffer = e;
	}
	addPass(e) {
		this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
	}
	insertPass(e, t) {
		this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
	}
	removePass(e) {
		let t = this.passes.indexOf(e);
		t !== -1 && this.passes.splice(t, 1);
	}
	isLastEnabledPass(e) {
		for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return !1;
		return !0;
	}
	render(e) {
		e === void 0 && (e = this.clock.getDelta());
		let t = this.renderer.getRenderTarget(), n = !1;
		for (let t = 0, r = this.passes.length; t < r; t++) {
			let r = this.passes[t];
			if (r.enabled !== !1) {
				if (r.renderToScreen = this.renderToScreen && this.isLastEnabledPass(t), r.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), r.needsSwap) {
					if (n) {
						let t = this.renderer.getContext(), n = this.renderer.state.buffers.stencil;
						n.setFunc(t.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), n.setFunc(t.EQUAL, 1, 4294967295);
					}
					this.swapBuffers();
				}
				_h !== void 0 && (r instanceof _h ? n = !0 : r instanceof vh && (n = !1));
			}
		}
		this.renderer.setRenderTarget(t);
	}
	reset(e) {
		if (e === void 0) {
			let t = this.renderer.getSize(new J());
			this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
		}
		this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
	}
	setSize(e, t) {
		this._width = e, this._height = t;
		let n = this._width * this._pixelRatio, r = this._height * this._pixelRatio;
		this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r);
		for (let e = 0; e < this.passes.length; e++) this.passes[e].setSize(n, r);
	}
	setPixelRatio(e) {
		this._pixelRatio = e, this.setSize(this._width, this._height);
	}
	dispose() {
		this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
	}
}, bh = class extends fh {
	constructor(e, t, n = null, r = null, i = null) {
		super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = r, this.clearAlpha = i, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new Z();
	}
	render(e, t, n) {
		let r = e.autoClear;
		e.autoClear = !1;
		let i, a;
		this.overrideMaterial !== null && (a = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor)), this.clearAlpha !== null && (i = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == 1 && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(i), this.overrideMaterial !== null && (this.scene.overrideMaterial = a), e.autoClear = r;
	}
}, xh = {
	uniforms: {
		tDiffuse: { value: null },
		resolution: { value: new J(1 / 1024, 1 / 512) }
	},
	vertexShader: "\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n	precision highp float;\n\n	uniform sampler2D tDiffuse;\n\n	uniform vec2 resolution;\n\n	varying vec2 vUv;\n\n	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)\n\n	//----------------------------------------------------------------------------------\n	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag\n	// SDK Version: v3.00\n	// Email:       gameworks@nvidia.com\n	// Site:        http://developer.nvidia.com/\n	//\n	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.\n	//\n	// Redistribution and use in source and binary forms, with or without\n	// modification, are permitted provided that the following conditions\n	// are met:\n	//  * Redistributions of source code must retain the above copyright\n	//    notice, this list of conditions and the following disclaimer.\n	//  * Redistributions in binary form must reproduce the above copyright\n	//    notice, this list of conditions and the following disclaimer in the\n	//    documentation and/or other materials provided with the distribution.\n	//  * Neither the name of NVIDIA CORPORATION nor the names of its\n	//    contributors may be used to endorse or promote products derived\n	//    from this software without specific prior written permission.\n	//\n	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY\n	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\n	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\n	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR\n	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\n	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\n	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\n	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY\n	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n	//\n	//----------------------------------------------------------------------------------\n\n	#ifndef FXAA_DISCARD\n			//\n			// Only valid for PC OpenGL currently.\n			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.\n			//\n			// 1 = Use discard on pixels which don't need AA.\n			//     For APIs which enable concurrent TEX+ROP from same surface.\n			// 0 = Return unchanged color on pixels which don't need AA.\n			//\n			#define FXAA_DISCARD 0\n	#endif\n\n	/*--------------------------------------------------------------------------*/\n	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)\n	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)\n	/*--------------------------------------------------------------------------*/\n\n	#define NUM_SAMPLES 5\n\n	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha\n	float contrast( vec4 a, vec4 b ) {\n			vec4 diff = abs( a - b );\n			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );\n	}\n\n	/*============================================================================\n\n									FXAA3 QUALITY - PC\n\n	============================================================================*/\n\n	/*--------------------------------------------------------------------------*/\n	vec4 FxaaPixelShader(\n			vec2 posM,\n			sampler2D tex,\n			vec2 fxaaQualityRcpFrame,\n			float fxaaQualityEdgeThreshold,\n			float fxaaQualityinvEdgeThreshold\n	) {\n			vec4 rgbaM = FxaaTexTop(tex, posM);\n			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);\n			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);\n			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);\n			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);\n			// . S .\n			// W M E\n			// . N .\n\n			bool earlyExit = max( max( max(\n					contrast( rgbaM, rgbaN ),\n					contrast( rgbaM, rgbaS ) ),\n					contrast( rgbaM, rgbaE ) ),\n					contrast( rgbaM, rgbaW ) )\n					< fxaaQualityEdgeThreshold;\n			// . 0 .\n			// 0 0 0\n			// . 0 .\n\n			#if (FXAA_DISCARD == 1)\n					if(earlyExit) FxaaDiscard;\n			#else\n					if(earlyExit) return rgbaM;\n			#endif\n\n			float contrastN = contrast( rgbaM, rgbaN );\n			float contrastS = contrast( rgbaM, rgbaS );\n			float contrastE = contrast( rgbaM, rgbaE );\n			float contrastW = contrast( rgbaM, rgbaW );\n\n			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );\n			relativeVContrast *= fxaaQualityinvEdgeThreshold;\n\n			bool horzSpan = relativeVContrast > 0.;\n			// . 1 .\n			// 0 0 0\n			// . 1 .\n\n			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar\n			if( abs( relativeVContrast ) < .3 ) {\n					// locate the edge\n					vec2 dirToEdge;\n					dirToEdge.x = contrastE > contrastW ? 1. : -1.;\n					dirToEdge.y = contrastS > contrastN ? 1. : -1.;\n					// . 2 .      . 1 .\n					// 1 0 2  ~=  0 0 1\n					// . 1 .      . 0 .\n\n					// tap 2 pixels and see which ones are \"outside\" the edge, to\n					// determine if the edge is vertical or horizontal\n\n					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);\n					float matchAlongH = contrast( rgbaM, rgbaAlongH );\n					// . 1 .\n					// 0 0 1\n					// . 0 H\n\n					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);\n					float matchAlongV = contrast( rgbaM, rgbaAlongV );\n					// V 1 .\n					// 0 0 1\n					// . 0 .\n\n					relativeVContrast = matchAlongV - matchAlongH;\n					relativeVContrast *= fxaaQualityinvEdgeThreshold;\n\n					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge\n							// 1 1 .\n							// 0 0 1\n							// . 0 1\n\n							// do a simple blur\n							return mix(\n									rgbaM,\n									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,\n									.4\n							);\n					}\n\n					horzSpan = relativeVContrast > 0.;\n			}\n\n			if(!horzSpan) rgbaN = rgbaW;\n			if(!horzSpan) rgbaS = rgbaE;\n			// . 0 .      1\n			// 1 0 1  ->  0\n			// . 0 .      1\n\n			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );\n			if(!pairN) rgbaN = rgbaS;\n\n			vec2 offNP;\n			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;\n			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;\n\n			bool doneN = false;\n			bool doneP = false;\n\n			float nDist = 0.;\n			float pDist = 0.;\n\n			vec2 posN = posM;\n			vec2 posP = posM;\n\n			int iterationsUsed = 0;\n			int iterationsUsedN = 0;\n			int iterationsUsedP = 0;\n			for( int i = 0; i < NUM_SAMPLES; i++ ) {\n					iterationsUsed = i;\n\n					float increment = float(i + 1);\n\n					if(!doneN) {\n							nDist += increment;\n							posN = posM + offNP * nDist;\n							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);\n							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );\n							iterationsUsedN = i;\n					}\n\n					if(!doneP) {\n							pDist += increment;\n							posP = posM - offNP * pDist;\n							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);\n							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );\n							iterationsUsedP = i;\n					}\n\n					if(doneN || doneP) break;\n			}\n\n\n			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge\n\n			float dist = min(\n					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,\n					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.\n			);\n\n			// hacky way of reduces blurriness of mostly diagonal edges\n			// but reduces AA quality\n			dist = pow(dist, .5);\n\n			dist = 1. - dist;\n\n			return mix(\n					rgbaM,\n					rgbaN,\n					dist * .5\n			);\n	}\n\n	void main() {\n			const float edgeDetectionQuality = .2;\n			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;\n\n			gl_FragColor = FxaaPixelShader(\n					vUv,\n					tDiffuse,\n					resolution,\n					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard\n					invEdgeDetectionQuality\n			);\n\n	}\n	"
}, Sh = class {
	constructor() {
		Object.defineProperty(this, "speed", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: 1
		}), Object.defineProperty(this, "paused", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: !1
		}), Object.defineProperty(this, "progress", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: 0
		}), Object.defineProperty(this, "currentId", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: 0
		}), Object.defineProperty(this, "progress0", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: /* @__PURE__ */ new Map()
		}), Object.defineProperty(this, "animationObjects", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: /* @__PURE__ */ new Map()
		});
	}
	update(e, t) {
		if (this.paused) return;
		let n = t * this.speed;
		this.animate(e, n), this.animationObjects.forEach((t, n) => {
			let r = this.progress0.get(n);
			t(e, this.progress - r, n);
		}), this.progress += n;
	}
	addAnimation(e) {
		let t = this.currentId++;
		return this.progress0.set(t, this.progress), this.animationObjects.set(t, e), t;
	}
	removeAnimation(e) {
		e != null && (this.animationObjects.delete(e), this.progress0.delete(e));
	}
}, Ch = class extends Sh {
	animate(e) {
		let t = this.progress * 2, n = Math.PI * .02;
		e.skin.leftArm.rotation.z = Math.cos(t) * .03 + n, e.skin.rightArm.rotation.z = Math.cos(t + Math.PI) * .03 - n;
		let r = Math.PI * .06;
		e.cape.rotation.x = Math.sin(t) * .01 + r;
	}
}, wh = class extends Sh {
	constructor() {
		super(...arguments), Object.defineProperty(this, "headBobbing", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: !0
		});
	}
	animate(e) {
		let t = this.progress * 8;
		e.skin.leftLeg.rotation.x = Math.sin(t) * .5, e.skin.rightLeg.rotation.x = Math.sin(t + Math.PI) * .5, e.skin.leftArm.rotation.x = Math.sin(t + Math.PI) * .5, e.skin.rightArm.rotation.x = Math.sin(t) * .5;
		let n = Math.PI * .02;
		e.skin.leftArm.rotation.z = Math.cos(t) * .03 + n, e.skin.rightArm.rotation.z = Math.cos(t + Math.PI) * .03 - n, this.headBobbing ? (e.skin.head.rotation.y = Math.sin(t / 4) * .2, e.skin.head.rotation.x = Math.sin(t / 5) * .1) : (e.skin.head.rotation.y = 0, e.skin.head.rotation.x = 0);
		let r = Math.PI * .06;
		e.cape.rotation.x = Math.sin(t / 1.5) * .06 + r;
	}
}, Th = class extends Bp {
	constructor(e = "", t = {}) {
		let n = new Ep({
			transparent: !0,
			alphaTest: 1e-5
		});
		super(n), Object.defineProperty(this, "painted", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "text", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "font", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "margin", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "textStyle", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "backgroundStyle", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "height", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "textMaterial", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), this.textMaterial = n, this.text = e, this.font = t.font === void 0 ? "48px Minecraft" : t.font, this.margin = t.margin === void 0 ? [
			5,
			10,
			5,
			10
		] : t.margin, this.textStyle = t.textStyle === void 0 ? "white" : t.textStyle, this.backgroundStyle = t.backgroundStyle === void 0 ? "rgba(0,0,0,.25)" : t.backgroundStyle, this.height = t.height === void 0 ? 4 : t.height, (t.repaintAfterLoaded === void 0 || t.repaintAfterLoaded) && !document.fonts.check(this.font, this.text) ? (this.paint(), this.painted = this.loadAndPaint()) : (this.paint(), this.painted = Promise.resolve());
	}
	async loadAndPaint() {
		await document.fonts.load(this.font, this.text), this.paint();
	}
	paint() {
		let e = document.createElement("canvas"), t = e.getContext("2d");
		t.font = this.font;
		let n = t.measureText(this.text);
		e.width = this.margin[3] + n.actualBoundingBoxLeft + n.actualBoundingBoxRight + this.margin[1], e.height = this.margin[0] + n.actualBoundingBoxAscent + n.actualBoundingBoxDescent + this.margin[2], t = e.getContext("2d"), t.font = this.font, t.fillStyle = this.backgroundStyle, t.fillRect(0, 0, e.width, e.height), t.fillStyle = this.textStyle, t.fillText(this.text, this.margin[3] + n.actualBoundingBoxLeft, this.margin[0] + n.actualBoundingBoxAscent);
		let r = new Hp(e);
		r.magFilter = yo, r.minFilter = yo, this.textMaterial.map = r, this.textMaterial.needsUpdate = !0, this.scale.x = e.width / e.height * this.height, this.scale.y = this.height;
	}
}, Eh = class {
	constructor(e = {}) {
		Object.defineProperty(this, "canvas", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "scene", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "camera", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "renderer", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "controls", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "playerObject", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "playerWrapper", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "globalLight", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: new _m(16777215, 3)
		}), Object.defineProperty(this, "cameraLight", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: new gm(16777215, .6)
		}), Object.defineProperty(this, "composer", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "renderPass", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "fxaaPass", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "skinCanvas", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "capeCanvas", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "earsCanvas", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "skinTexture", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: null
		}), Object.defineProperty(this, "capeTexture", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: null
		}), Object.defineProperty(this, "earsTexture", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: null
		}), Object.defineProperty(this, "backgroundTexture", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: null
		}), Object.defineProperty(this, "_disposed", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: !1
		}), Object.defineProperty(this, "_renderPaused", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: !1
		}), Object.defineProperty(this, "_zoom", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "isUserRotating", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: !1
		}), Object.defineProperty(this, "autoRotate", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: !1
		}), Object.defineProperty(this, "autoRotateSpeed", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: 1
		}), Object.defineProperty(this, "_animation", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "clock", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "animationID", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "onContextLost", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "onContextRestored", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "_pixelRatio", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "devicePixelRatioQuery", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "onDevicePixelRatioChange", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: void 0
		}), Object.defineProperty(this, "_nameTag", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: null
		}), Object.defineProperty(this, "nameTagYOffset", {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: 20
		}), this.canvas = e.canvas === void 0 ? document.createElement("canvas") : e.canvas, this.skinCanvas = document.createElement("canvas"), this.capeCanvas = document.createElement("canvas"), this.earsCanvas = document.createElement("canvas"), this.scene = new Sp(), this.camera = new lu(), this.camera.add(this.cameraLight), this.scene.add(this.camera), this.scene.add(this.globalLight), Rs.enabled = !1, this.renderer = new bp({
			canvas: this.canvas,
			preserveDrawingBuffer: e.preserveDrawingBuffer === !0
		}), this.onDevicePixelRatioChange = () => {
			this.renderer.setPixelRatio(window.devicePixelRatio), this.updateComposerSize(), this._pixelRatio === "match-device" && (this.devicePixelRatioQuery = matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), this.devicePixelRatioQuery.addEventListener("change", this.onDevicePixelRatioChange, { once: !0 }));
		}, e.pixelRatio === void 0 || e.pixelRatio === "match-device" ? (this._pixelRatio = "match-device", this.devicePixelRatioQuery = matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), this.devicePixelRatioQuery.addEventListener("change", this.onDevicePixelRatioChange, { once: !0 }), this.renderer.setPixelRatio(window.devicePixelRatio)) : (this._pixelRatio = e.pixelRatio, this.devicePixelRatioQuery = null, this.renderer.setPixelRatio(e.pixelRatio)), this.renderer.setClearColor(0, 0);
		let t;
		this.renderer.capabilities.isWebGL2 && (t = new Js(0, 0, { depthTexture: new gp(0, 0, Do) })), this.composer = new yh(this.renderer, t), this.renderPass = new bh(this.scene, this.camera), this.fxaaPass = new gh(xh), this.composer.addPass(this.renderPass), this.composer.addPass(this.fxaaPass), this.playerObject = new Hm(), this.playerObject.name = "player", this.playerObject.skin.visible = !1, this.playerObject.cape.visible = !1, this.playerWrapper = new pp(), this.playerWrapper.add(this.playerObject), this.scene.add(this.playerWrapper), this.controls = new uh(this.camera, this.canvas), this.controls.enablePan = !1, this.controls.minDistance = 10, this.controls.maxDistance = 256, e.enableControls === !1 && (this.controls.enabled = !1), e.skin !== void 0 && this.loadSkin(e.skin, {
			model: e.model,
			ears: e.ears === "current-skin"
		}), e.cape !== void 0 && this.loadCape(e.cape), e.ears !== void 0 && e.ears !== "current-skin" && this.loadEars(e.ears.source, { textureType: e.ears.textureType }), e.width !== void 0 && (this.width = e.width), e.height !== void 0 && (this.height = e.height), e.background !== void 0 && (this.background = e.background), e.panorama !== void 0 && this.loadPanorama(e.panorama), e.nameTag !== void 0 && (this.nameTag = e.nameTag), this.camera.position.z = 1, this._zoom = e.zoom === void 0 ? .9 : e.zoom, this.fov = e.fov === void 0 ? 50 : e.fov, this._animation = e.animation === void 0 ? null : e.animation, this.clock = new vm(), e.renderPaused === !0 ? (this._renderPaused = !0, this.animationID = null) : this.animationID = window.requestAnimationFrame(() => this.draw()), this.onContextLost = (e) => {
			e.preventDefault(), this.animationID !== null && (window.cancelAnimationFrame(this.animationID), this.animationID = null);
		}, this.onContextRestored = () => {
			this.renderer.setClearColor(0, 0), !this._renderPaused && !this._disposed && this.animationID === null && (this.animationID = window.requestAnimationFrame(() => this.draw()));
		}, this.canvas.addEventListener("webglcontextlost", this.onContextLost, !1), this.canvas.addEventListener("webglcontextrestored", this.onContextRestored, !1), this.canvas.addEventListener("mousedown", () => {
			this.isUserRotating = !0;
		}, !1), this.canvas.addEventListener("mouseup", () => {
			this.isUserRotating = !1;
		}, !1), this.canvas.addEventListener("touchmove", (e) => {
			e.touches.length === 1 ? this.isUserRotating = !0 : this.isUserRotating = !1;
		}, !1), this.canvas.addEventListener("touchend", () => {
			this.isUserRotating = !1;
		}, !1);
	}
	updateComposerSize() {
		this.composer.setSize(this.width, this.height);
		let e = this.renderer.getPixelRatio();
		this.composer.setPixelRatio(e), this.fxaaPass.material.uniforms.resolution.value.x = 1 / (this.width * e), this.fxaaPass.material.uniforms.resolution.value.y = 1 / (this.height * e);
	}
	recreateSkinTexture() {
		this.skinTexture !== null && this.skinTexture.dispose(), this.skinTexture = new Hp(this.skinCanvas), this.skinTexture.magFilter = yo, this.skinTexture.minFilter = yo, this.playerObject.skin.map = this.skinTexture;
	}
	recreateCapeTexture() {
		this.capeTexture !== null && this.capeTexture.dispose(), this.capeTexture = new Hp(this.capeCanvas), this.capeTexture.magFilter = yo, this.capeTexture.minFilter = yo, this.playerObject.cape.map = this.capeTexture, this.playerObject.elytra.map = this.capeTexture;
	}
	recreateEarsTexture() {
		this.earsTexture !== null && this.earsTexture.dispose(), this.earsTexture = new Hp(this.earsCanvas), this.earsTexture.magFilter = yo, this.earsTexture.minFilter = yo, this.playerObject.ears.map = this.earsTexture;
	}
	loadSkin(e, t = {}) {
		if (e === null) this.resetSkin();
		else if (Um(e)) Jm(this.skinCanvas, e), this.recreateSkinTexture(), t.model === void 0 || t.model === "auto-detect" ? this.playerObject.skin.modelType = $m(this.skinCanvas) : this.playerObject.skin.modelType = t.model, t.makeVisible !== !1 && (this.playerObject.skin.visible = !0), (t.ears === !0 || t.ears == "load-only") && (nh(this.earsCanvas, e), this.recreateEarsTexture(), t.ears === !0 && (this.playerObject.ears.visible = !0, this._nameTag && (this.nameTagYOffset = 25, this._nameTag.position.y = this.nameTagYOffset)));
		else return rh(e).then((e) => this.loadSkin(e, t));
	}
	resetSkin() {
		this.playerObject.skin.visible = !1, this.playerObject.skin.map = null, this.skinTexture !== null && (this.skinTexture.dispose(), this.skinTexture = null);
	}
	loadCape(e, t = {}) {
		if (e === null) this.resetCape();
		else if (Um(e)) Xm(this.capeCanvas, e), this.recreateCapeTexture(), t.makeVisible !== !1 && (this.playerObject.backEquipment = t.backEquipment === void 0 ? "cape" : t.backEquipment);
		else return rh(e).then((e) => this.loadCape(e, t));
	}
	resetCape() {
		this.playerObject.backEquipment = null, this.playerObject.cape.map = null, this.playerObject.elytra.map = null, this.capeTexture !== null && (this.capeTexture.dispose(), this.capeTexture = null);
	}
	loadEars(e, t = {}) {
		if (e === null) this.resetEars();
		else if (Um(e)) t.textureType === "skin" ? nh(this.earsCanvas, e) : th(this.earsCanvas, e), this.recreateEarsTexture(), t.makeVisible !== !1 && (this.playerObject.ears.visible = !0, this._nameTag && (this.nameTagYOffset = 25, this._nameTag.position.y = this.nameTagYOffset));
		else return rh(e).then((e) => this.loadEars(e, t));
	}
	resetEars() {
		this.playerObject.ears.visible = !1, this._nameTag && (this.nameTagYOffset = 20, this._nameTag.position.y = this.nameTagYOffset), this.playerObject.ears.map = null, this.earsTexture !== null && (this.earsTexture.dispose(), this.earsTexture = null);
	}
	loadPanorama(e) {
		return this.loadBackground(e, 303);
	}
	loadBackground(e, t) {
		if (Um(e)) this.backgroundTexture !== null && this.backgroundTexture.dispose(), this.backgroundTexture = new Gs(), this.backgroundTexture.image = e, t !== void 0 && (this.backgroundTexture.mapping = t), this.backgroundTexture.needsUpdate = !0, this.scene.background = this.backgroundTexture;
		else return rh(e).then((e) => this.loadBackground(e, t));
	}
	draw() {
		let e = this.clock.getDelta();
		this._animation !== null && (this._animation.update(this.playerObject, e), this._nameTag && (this._nameTag.position.y = this.playerObject.skin.head.getWorldPosition(new X()).y + this.nameTagYOffset - 8)), this.autoRotate && (this.controls.enableRotate && this.isUserRotating || (this.playerWrapper.rotation.y += e * this.autoRotateSpeed)), this.controls.update(), this.render(), this.animationID = window.requestAnimationFrame(() => this.draw());
	}
	render() {
		this.composer.render();
	}
	setSize(e, t) {
		this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t), this.updateComposerSize();
	}
	dispose() {
		this._disposed = !0, this.canvas.removeEventListener("webglcontextlost", this.onContextLost, !1), this.canvas.removeEventListener("webglcontextrestored", this.onContextRestored, !1), this.devicePixelRatioQuery !== null && (this.devicePixelRatioQuery.removeEventListener("change", this.onDevicePixelRatioChange), this.devicePixelRatioQuery = null), this.animationID !== null && (window.cancelAnimationFrame(this.animationID), this.animationID = null), this.controls.dispose(), this.renderer.dispose(), this.resetSkin(), this.resetCape(), this.resetEars(), this.background = null, this.fxaaPass.fsQuad.dispose();
	}
	get disposed() {
		return this._disposed;
	}
	get renderPaused() {
		return this._renderPaused;
	}
	set renderPaused(e) {
		this._renderPaused = e, this._renderPaused && this.animationID !== null ? (window.cancelAnimationFrame(this.animationID), this.animationID = null, this.clock.stop(), this.clock.autoStart = !0) : !this._renderPaused && !this._disposed && !this.renderer.getContext().isContextLost() && this.animationID == null && (this.animationID = window.requestAnimationFrame(() => this.draw()));
	}
	get width() {
		return this.renderer.getSize(new J()).width;
	}
	set width(e) {
		this.setSize(e, this.height);
	}
	get height() {
		return this.renderer.getSize(new J()).height;
	}
	set height(e) {
		this.setSize(this.width, e);
	}
	get background() {
		return this.scene.background;
	}
	set background(e) {
		e === null || e instanceof Z || e instanceof Gs ? this.scene.background = e : this.scene.background = new Z(e), this.backgroundTexture !== null && e !== this.backgroundTexture && (this.backgroundTexture.dispose(), this.backgroundTexture = null);
	}
	adjustCameraDistance() {
		let e = 4.5 + 16.5 / Math.tan(this.fov / 180 * Math.PI / 2) / this.zoom;
		e < 10 ? e = 10 : e > 256 && (e = 256), this.camera.position.multiplyScalar(e / this.camera.position.length()), this.camera.updateProjectionMatrix();
	}
	resetCameraPose() {
		this.camera.position.set(0, 0, 1), this.camera.rotation.set(0, 0, 0), this.adjustCameraDistance();
	}
	get fov() {
		return this.camera.fov;
	}
	set fov(e) {
		this.camera.fov = e, this.adjustCameraDistance();
	}
	get zoom() {
		return this._zoom;
	}
	set zoom(e) {
		this._zoom = e, this.adjustCameraDistance();
	}
	get pixelRatio() {
		return this._pixelRatio;
	}
	set pixelRatio(e) {
		e === "match-device" ? this._pixelRatio !== "match-device" && (this._pixelRatio = e, this.onDevicePixelRatioChange()) : (this._pixelRatio === "match-device" && this.devicePixelRatioQuery !== null && (this.devicePixelRatioQuery.removeEventListener("change", this.onDevicePixelRatioChange), this.devicePixelRatioQuery = null), this._pixelRatio = e, this.renderer.setPixelRatio(e), this.updateComposerSize());
	}
	get animation() {
		return this._animation;
	}
	set animation(e) {
		this._animation !== e && (this.playerObject.resetJoints(), this.playerObject.position.set(0, 0, 0), this.playerObject.rotation.set(0, 0, 0), this._nameTag && (this._nameTag.position.y = this.nameTagYOffset), this.clock.stop(), this.clock.autoStart = !0), e !== null && (e.progress = 0), this._animation = e;
	}
	get nameTag() {
		return this._nameTag;
	}
	set nameTag(e) {
		this._nameTag !== null && this.playerWrapper.remove(this._nameTag), e !== null && (e instanceof Qc || (e = new Th(e)), this.playerWrapper.add(e), this.nameTagYOffset = this.playerObject.ears.visible ? 25 : 20, e.position.y = this.nameTagYOffset), this._nameTag = e;
	}
}, Dh = "https://textures.minecraft.net/texture/31f477eb1a7beee631c2ca64d06f8f68fa93a3386d04452ab27f43acdf1b60cb";
function Oh({ skinUrl: e, capeUrl: t, slim: n = !1, width: r = 280, height: i = 420, walking: a = !1 }) {
	let o = Me(null), s = Me(null);
	return je(() => {
		if (!o.current || s.current) return;
		let e = new Eh({
			canvas: o.current,
			width: r,
			height: i,
			skin: Dh,
			model: n ? "slim" : "default",
			background: 262921
		});
		return e.controls.enableZoom = !0, e.controls.enableRotate = !0, e.controls.enablePan = !1, e.zoom = .85, e.renderer.setPixelRatio(1), e.fps = 30, s.current = e, () => {
			e.dispose(), s.current = null;
		};
	}, []), je(() => {
		let t = s.current;
		if (!t) return;
		let r = e || Dh;
		t.loadSkin(r, { model: n ? "slim" : "default" }).catch(() => {});
	}, [e, n]), je(() => {
		let e = s.current;
		e && (t ? e.loadCape(t).catch(() => {}) : e.loadCape(null));
	}, [t]), je(() => {
		let e = s.current;
		e && (e.animation = a ? new wh() : new Ch());
	}, [a]), /* @__PURE__ */ q("div", {
		class: "skin-preview-frame inline-block",
		children: /* @__PURE__ */ q("canvas", {
			ref: o,
			style: `display:block;width:${r}px;height:${i}px`
		})
	});
}
//#endregion
//#region src/components/SkinThumbnail2D.tsx
var kh = 16, Ah = 32;
function jh({ url: e, slim: t = !1, width: n = 64, height: r = 128 }) {
	let i = Me(null);
	return je(() => {
		let n = i.current;
		if (!n) return;
		n.width = kh, n.height = Ah;
		let r = n.getContext("2d");
		if (!r) return;
		r.imageSmoothingEnabled = !1;
		let a = new Image();
		a.crossOrigin = "anonymous", a.onload = () => {
			r.clearRect(0, 0, kh, Ah);
			let e = t ? 3 : 4, n = 4 - e;
			r.drawImage(a, 8, 8, 8, 8, 4, 0, 8, 8), r.drawImage(a, 20, 20, 8, 12, 4, 8, 8, 12), r.drawImage(a, 44, 20, e, 12, n, 8, e, 12), r.drawImage(a, 4, 20, 4, 12, 4, 20, 4, 12);
			let i = a.naturalHeight === 32;
			i ? (r.save(), r.translate(12 + e, 8), r.scale(-1, 1), r.drawImage(a, 44, 20, e, 12, 0, 0, e, 12), r.restore(), r.save(), r.translate(12, 20), r.scale(-1, 1), r.drawImage(a, 4, 20, 4, 12, 0, 0, 4, 12), r.restore()) : (r.drawImage(a, 36, 52, e, 12, 12, 8, e, 12), r.drawImage(a, 20, 52, 4, 12, 8, 20, 4, 12)), i || (r.drawImage(a, 40, 8, 8, 8, 4, 0, 8, 8), r.drawImage(a, 20, 36, 8, 12, 4, 8, 8, 12), r.drawImage(a, 44, 36, e, 12, n, 8, e, 12), r.drawImage(a, 52, 52, e, 12, 12, 8, e, 12), r.drawImage(a, 4, 36, 4, 12, 4, 20, 4, 12), r.drawImage(a, 4, 52, 4, 12, 8, 20, 4, 12));
		}, a.onerror = () => {}, a.src = e;
	}, [e, t]), /* @__PURE__ */ q("canvas", {
		ref: i,
		width: kh,
		height: Ah,
		style: `width:${n}px;height:${r}px;image-rendering:pixelated;display:block`
	});
}
//#endregion
//#region src/components/CapeThumbnail2D.tsx
var Mh = 10, Nh = 16;
function Ph({ url: e, width: t = 80, height: n = 128 }) {
	let r = Me(null);
	return je(() => {
		let t = r.current;
		if (!t) return;
		t.width = Mh, t.height = Nh;
		let n = t.getContext("2d");
		if (!n) return;
		n.imageSmoothingEnabled = !1;
		let i = new Image();
		i.crossOrigin = "anonymous", i.onload = () => {
			n.clearRect(0, 0, Mh, Nh);
			let e = i.naturalWidth / 64;
			n.drawImage(i, 11 * e, 1 * e, 10 * e, 16 * e, 0, 0, Mh, Nh);
		}, i.onerror = () => {}, i.src = e;
	}, [e]), /* @__PURE__ */ q("canvas", {
		ref: r,
		width: Mh,
		height: Nh,
		style: `width:${t}px;height:${n}px;image-rendering:pixelated;display:block`
	});
}
//#endregion
//#region src/components/PresetCards.tsx
function Fh({ sb: e, user: t, t: n, kind: r, items: i, thumbWidth: a = 64, thumbHeight: o = 64, onApplied: s }) {
	let [c, l] = U(null), [u, d] = U("");
	async function f(t) {
		d(""), l(t.name);
		try {
			let n = await fetch(t.url);
			if (!n.ok) throw Error(`fetch ${n.status}`);
			let i = await n.arrayBuffer();
			await s(t, await lo(e, r, new Uint8Array(i), { slim: t.model === "slim" }));
		} catch (e) {
			d(`${n.errUploadFailed} ${e?.message ?? String(e)}`);
		} finally {
			l(null);
		}
	}
	return /* @__PURE__ */ q("div", {
		class: "space-y-3",
		children: [/* @__PURE__ */ q("div", {
			class: "grid grid-cols-3 gap-3",
			children: i.map((e) => {
				let t = c === e.name;
				return /* @__PURE__ */ q("button", {
					type: "button",
					disabled: !!c,
					onClick: () => f(e),
					class: "group flex flex-col items-center gap-2 p-3 rounded-2xl border border-brand-500/25 bg-brand-500/5 hover:bg-brand-500/12 hover:border-brand-400/55 transition disabled:opacity-50 disabled:cursor-wait",
					children: [/* @__PURE__ */ q("div", {
						class: "rounded-lg overflow-hidden border border-brand-500/20 flex items-center justify-center",
						style: `width:${a * 2}px;height:${o * 2}px;background:#0d0a1c`,
						children: r === "skin" ? /* @__PURE__ */ q(jh, {
							url: e.url,
							slim: e.model === "slim",
							width: o,
							height: o * 2
						}) : r === "cape" ? /* @__PURE__ */ q(Ph, {
							url: e.url,
							width: Math.round(o * 1.25),
							height: o * 2
						}) : /* @__PURE__ */ q("img", {
							src: e.url,
							alt: e.name,
							width: a * 2,
							height: o * 2,
							style: "image-rendering:pixelated;width:100%;height:100%;object-fit:cover",
							referrerpolicy: "no-referrer"
						})
					}), /* @__PURE__ */ q("div", {
						class: "text-center",
						children: [/* @__PURE__ */ q("div", {
							class: "text-sm font-bold text-white group-hover:text-brand-200",
							children: t ? n.uploading : e.name
						}), e.caption && /* @__PURE__ */ q("div", {
							class: "text-[10px] text-gray-400 leading-tight",
							children: e.caption
						})]
					})]
				});
			})
		}), u && /* @__PURE__ */ q("p", {
			class: "text-xs text-rose-400 text-center",
			children: u
		})]
	});
}
//#endregion
//#region src/components/ExternalLinks.tsx
function Ih({ items: e, title: t }) {
	return /* @__PURE__ */ q("div", {
		class: "space-y-2",
		children: [/* @__PURE__ */ q("h3", {
			class: "text-xs font-semibold uppercase tracking-wider text-gray-400",
			children: t
		}), /* @__PURE__ */ q("div", {
			class: "grid grid-cols-2 gap-2",
			children: e.map((e) => /* @__PURE__ */ q("a", {
				href: e.url,
				target: "_blank",
				rel: "noopener noreferrer",
				class: "group flex items-start gap-2 p-3 rounded-xl border border-brand-500/15 bg-brand-500/5 hover:bg-brand-500/10 hover:border-brand-400/35 transition",
				children: [/* @__PURE__ */ q("svg", {
					class: "w-4 h-4 text-brand-300 flex-shrink-0 mt-0.5",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ q("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M14 3l7 7m0 0l-7 7m7-7H3"
					})
				}), /* @__PURE__ */ q("div", {
					class: "min-w-0",
					children: [/* @__PURE__ */ q("div", {
						class: "text-sm font-semibold text-white group-hover:text-brand-200",
						children: e.name
					}), /* @__PURE__ */ q("div", {
						class: "text-[11px] text-gray-400 leading-snug",
						children: e.hint
					})]
				})]
			}))
		})]
	});
}
//#endregion
//#region src/lib/rates.ts
var Lh = "aw-payments-rates", Rh = 1440 * 60 * 1e3;
function zh() {
	if (typeof localStorage > "u") return null;
	try {
		let e = localStorage.getItem(Lh);
		if (!e) return null;
		let t = JSON.parse(e);
		return typeof t?.USD != "number" || typeof t?.RUB != "number" ? null : t;
	} catch {
		return null;
	}
}
function Bh(e) {
	if (!(typeof localStorage > "u")) try {
		localStorage.setItem(Lh, JSON.stringify(e));
	} catch {}
}
function Vh(e) {
	return !!e && Date.now() - e.fetchedAt < Rh;
}
async function Hh() {
	let e = await fetch("https://open.er-api.com/v6/latest/UAH");
	if (!e.ok) throw Error(`rates http ${e.status}`);
	let t = await e.json();
	if (t.result !== "success" || !t.rates) throw Error("rates api failure");
	let n = t.rates.USD, r = t.rates.RUB;
	if (typeof n != "number" || typeof r != "number") throw Error("rates missing USD/RUB");
	let i = {
		USD: n,
		RUB: r,
		fetchedAt: Date.now()
	};
	return Bh(i), i;
}
//#endregion
//#region src/components/UnlockCard.tsx
var Uh = "https://vitmostovoy-rgb.github.io/minecraft/#donate", Wh = "https://t.me/AnubisWorld_Support", Gh = "@AnubisWorld_Support";
function Kh({ t: e, kind: t }) {
	let n = t === "cape" ? e.lockCapeTitle : e.lockHdSkinTitle, r = t === "cape" ? e.lockCapeBody : e.lockHdSkinBody, i = t === "cape" ? e.lockPriceCape : e.lockPriceHdSkin, [a, o] = U(() => zh());
	je(() => {
		if (Vh(a)) return;
		let e = !1;
		return Hh().then((t) => {
			e || o(t);
		}).catch(() => {}), () => {
			e = !0;
		};
	}, []);
	let s = a ? (i * a.USD).toFixed(2) : null, c = a ? Math.round(i * a.RUB) : null;
	return /* @__PURE__ */ q("div", {
		class: "rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-amber-500/0 p-6 sm:p-7 space-y-4",
		children: [
			/* @__PURE__ */ q("div", {
				class: "flex items-start gap-3",
				children: [/* @__PURE__ */ q("div", {
					class: "w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0",
					children: /* @__PURE__ */ q("svg", {
						class: "w-5 h-5 text-amber-300",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ q("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M12 15v2m-6 4h12a2 2 0 002-2v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v4h8z"
						})
					})
				}), /* @__PURE__ */ q("div", {
					class: "flex-1 min-w-0",
					children: [/* @__PURE__ */ q("h3", {
						class: "text-base font-bold text-white",
						children: n
					}), /* @__PURE__ */ q("p", {
						class: "text-sm text-gray-300 leading-relaxed mt-1",
						children: r
					})]
				})]
			}),
			/* @__PURE__ */ q("div", {
				class: "text-center py-3",
				children: [/* @__PURE__ */ q("div", {
					class: "text-3xl font-bold gold-text leading-none",
					children: [i, " ₴"]
				}), s && c && /* @__PURE__ */ q("div", {
					class: "text-sm text-gray-300 mt-2 flex items-center justify-center gap-2 flex-wrap",
					children: [
						/* @__PURE__ */ q("span", { children: [
							"≈\xA0",
							c,
							"\xA0₽"
						] }),
						/* @__PURE__ */ q("span", {
							class: "text-brand-400/40",
							children: "/"
						}),
						/* @__PURE__ */ q("span", { children: ["≈\xA0$", s] })
					]
				})]
			}),
			/* @__PURE__ */ q("button", {
				type: "button",
				onClick: () => {
					let e = {}, t = new CustomEvent("anubis-open-donate", {
						detail: e,
						bubbles: !0,
						composed: !0
					});
					document.dispatchEvent(t), e.handled || window.open(Uh, "_blank", "noopener,noreferrer");
				},
				class: "btn-glow w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-semibold px-5 py-3 rounded-xl text-sm shadow-lg shadow-brand-600/30",
				children: [e.lockBuyCta, /* @__PURE__ */ q("svg", {
					class: "w-3.5 h-3.5",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2.4",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ q("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M14 5l7 7m0 0l-7 7m7-7H3"
					})
				})]
			}),
			/* @__PURE__ */ q("div", {
				class: "text-center text-xs text-gray-500",
				children: [
					e.lockSupportPrefix,
					" ",
					/* @__PURE__ */ q("a", {
						href: Wh,
						target: "_blank",
						rel: "noopener noreferrer",
						class: "text-brand-300 hover:text-brand-200 font-mono",
						children: Gh
					})
				]
			})
		]
	});
}
//#endregion
//#region src/presets.ts
var qh = [
	{
		name: "Steve",
		model: "default",
		url: "https://textures.minecraft.net/texture/31f477eb1a7beee631c2ca64d06f8f68fa93a3386d04452ab27f43acdf1b60cb",
		caption: "Classic"
	},
	{
		name: "Alex",
		model: "slim",
		url: "https://textures.minecraft.net/texture/3b60a1f6d562f52aaebbf1434f1de147933a3affe0e764fa49ea057536623cd3",
		caption: "Slim model"
	},
	{
		name: "Zuri",
		model: "default",
		url: "https://textures.minecraft.net/texture/f5dddb41dcafef616e959c2817808e0be741c89ffbfed39134a13e75b811863d",
		caption: "Default"
	}
], Jh = [
	{
		name: "Migrator",
		url: "https://textures.minecraft.net/texture/2340c0e03dd24a11b15a8b33c2a7e9e32abb2051b2481d0ba7defd635ca7a933",
		caption: "Mojang account migration"
	},
	{
		name: "MineCon 2011",
		url: "https://textures.minecraft.net/texture/953cac8b779fe41383e675ee2b86071a71658f2180f56fbce8aa315ea70e2ed6",
		caption: "Convention attendee"
	},
	{
		name: "MineCon 2016",
		url: "https://textures.minecraft.net/texture/9e507afc56359978a3eb3e32367042b853cddd0995d17d0da995662913fb00f7",
		caption: "Convention attendee"
	}
], Yh = [
	{
		name: "NameMC",
		url: "https://namemc.com/skins",
		hint: "Search any player's skin by nick"
	},
	{
		name: "minecraftskins.com",
		url: "https://www.minecraftskins.com",
		hint: "600k+ community skins"
	},
	{
		name: "Planet Minecraft",
		url: "https://www.planetminecraft.com/skins/",
		hint: "Curated community uploads"
	},
	{
		name: "NovaSkin Editor",
		url: "https://minecraft.novaskin.me",
		hint: "Edit your own in-browser"
	}
], Xh = {
	capeUnlocked: !1,
	hdSkinUnlocked: !1
};
function Zh(e, t) {
	let [n, r] = U(Xh), [i, a] = U(!0), o = async () => {
		let { data: n } = await e.from("entitlements").select("cape_unlocked, hd_skin_unlocked").eq("user_id", t.id).maybeSingle();
		r({
			capeUnlocked: !!n?.cape_unlocked,
			hdSkinUnlocked: !!n?.hd_skin_unlocked
		}), a(!1);
	};
	return je(() => {
		o();
	}, [e, t.id]), {
		ent: n,
		loading: i,
		refresh: o
	};
}
//#endregion
//#region src/pages/SkinPage.tsx
function Qh({ sb: e, user: t, t: n }) {
	let [r, i] = U(null), [a, o] = U(null), [s, c] = U(!1), [l, u] = U(!1), { ent: d } = Zh(e, t), f = Pe(async () => {
		let { data: n } = await e.from("skins").select("skin_sha, cape_sha, slim_model").eq("user_id", t.id).maybeSingle();
		i(n?.skin_sha ?? null), o(n?.cape_sha ?? null), c(!!n?.slim_model);
	}, [e, t.id]);
	je(() => {
		f();
	}, [f]);
	let p = e.supabaseUrl, m = r ? `${p}/storage/v1/object/public/textures/${t.id}/${r}.png` : null, h = a ? `${p}/storage/v1/object/public/textures/${t.id}/${a}.png` : null;
	async function g(e) {
		u(!1), await f();
	}
	async function _() {
		await e.from("skins").update({
			skin_sha: null,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("user_id", t.id), await f();
	}
	return /* @__PURE__ */ q("div", {
		class: "space-y-5",
		children: [
			/* @__PURE__ */ q("h2", {
				class: "text-lg font-bold text-white",
				children: n.skinTitle
			}),
			/* @__PURE__ */ q("div", {
				class: "grid gap-5 md:grid-cols-[1fr_280px]",
				children: [/* @__PURE__ */ q("div", {
					class: "space-y-3",
					children: l ? /* @__PURE__ */ q(Kh, {
						t: n,
						kind: "hdSkin"
					}) : /* @__PURE__ */ q(S, { children: [
						!d.hdSkinUnlocked && /* @__PURE__ */ q(tg, { t: n }),
						/* @__PURE__ */ q(po, {
							sb: e,
							user: t,
							t: n,
							kind: "skin",
							slim: s,
							accept: "image/png",
							validateImage: (e) => $h(e.w, e.h),
							paywallCheck: (e) => eg(e.w, e.h) && !d.hdSkinUnlocked,
							onPaywall: () => u(!0),
							onUploaded: g,
							label: r ? n.skinReplace : n.skinUpload,
							hint: n.skinHint
						}),
						r && /* @__PURE__ */ q("button", {
							type: "button",
							onClick: _,
							class: "block mx-auto text-xs text-rose-400 hover:text-rose-300 hover:underline",
							children: n.skinRemove
						}),
						/* @__PURE__ */ q("p", {
							class: "text-[11px] text-gray-500",
							children: s ? n.skinModelSlim : n.skinModelDefault
						})
					] })
				}), /* @__PURE__ */ q("div", {
					class: "flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ q(Oh, {
						skinUrl: m,
						capeUrl: h,
						slim: s
					}), /* @__PURE__ */ q("p", {
						class: "text-[11px] text-gray-500 text-center",
						children: n.skinPreviewHint
					})]
				})]
			}),
			/* @__PURE__ */ q("div", {
				class: "pt-5 border-t border-brand-500/15 space-y-3",
				children: [/* @__PURE__ */ q("h3", {
					class: "text-xs font-semibold uppercase tracking-wider text-gray-400",
					children: n.presetsTitle
				}), /* @__PURE__ */ q(Fh, {
					sb: e,
					user: t,
					t: n,
					kind: "skin",
					items: qh,
					onApplied: async () => {
						await f();
					}
				})]
			}),
			/* @__PURE__ */ q("div", {
				class: "pt-5 border-t border-brand-500/15",
				children: /* @__PURE__ */ q(Ih, {
					items: Yh,
					title: n.externalSkinSites
				})
			})
		]
	});
}
function $h(e, t) {
	return e === 64 && t === 64 || e === 64 && t === 32 || e === 128 && t === 128 || e === 128 && t === 64;
}
function eg(e, t) {
	return e >= 128 || t >= 128;
}
function tg({ t: e }) {
	let [t, n] = U(() => zh());
	je(() => {
		if (Vh(t)) return;
		let e = !1;
		return Hh().then((t) => {
			e || n(t);
		}).catch(() => {}), () => {
			e = !0;
		};
	}, []);
	let r = t ? (e.lockPriceHdSkin * t.USD).toFixed(2) : null, i = t ? Math.round(e.lockPriceHdSkin * t.RUB) : null;
	return /* @__PURE__ */ q("div", {
		class: "flex items-center gap-3 px-4 py-2.5 rounded-xl border border-amber-500/30 bg-amber-500/5 text-xs",
		children: [
			/* @__PURE__ */ q("svg", {
				class: "w-4 h-4 text-amber-300 flex-shrink-0",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ q("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M12 15v2m-6 4h12a2 2 0 002-2v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v4h8z"
				})
			}),
			/* @__PURE__ */ q("div", {
				class: "flex-1 text-gray-300",
				children: [
					/* @__PURE__ */ q("span", {
						class: "font-semibold text-white",
						children: e.lockHdSkinTitle
					}),
					/* @__PURE__ */ q("span", {
						class: "text-gray-400",
						children: [
							" · ",
							e.lockPriceHdSkin,
							" ₴"
						]
					}),
					r && i && /* @__PURE__ */ q("span", {
						class: "text-gray-500",
						children: [
							" · ≈\xA0",
							i,
							"\xA0₽ / ≈\xA0$",
							r
						]
					})
				]
			}),
			/* @__PURE__ */ q("button", {
				type: "button",
				onClick: () => {
					let e = {}, t = new CustomEvent("anubis-open-donate", {
						detail: e,
						bubbles: !0,
						composed: !0
					});
					document.dispatchEvent(t), e.handled || window.open("https://vitmostovoy-rgb.github.io/minecraft/#donate", "_blank", "noopener,noreferrer");
				},
				class: "text-amber-200 hover:text-amber-100 font-semibold whitespace-nowrap",
				children: [e.lockBuyCta, " →"]
			})
		]
	});
}
//#endregion
//#region src/pages/CapePage.tsx
function ng({ sb: e, user: t, t: n }) {
	let [r, i] = U(null), [a, o] = U(null), [s, c] = U(!1), { ent: l, loading: u } = Zh(e, t), d = Pe(async () => {
		let { data: n } = await e.from("skins").select("skin_sha, cape_sha, slim_model").eq("user_id", t.id).maybeSingle();
		i(n?.skin_sha ?? null), o(n?.cape_sha ?? null), c(!!n?.slim_model);
	}, [e, t.id]);
	je(() => {
		d();
	}, [d]);
	let f = e.supabaseUrl, p = r ? `${f}/storage/v1/object/public/textures/${t.id}/${r}.png` : null, m = a ? `${f}/storage/v1/object/public/textures/${t.id}/${a}.png` : null;
	async function h(e) {
		await d();
	}
	async function g() {
		await e.from("skins").update({
			cape_sha: null,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("user_id", t.id), await d();
	}
	let _ = !u && !l.capeUnlocked && !a;
	return /* @__PURE__ */ q("div", {
		class: "space-y-5",
		children: [
			/* @__PURE__ */ q("h2", {
				class: "text-lg font-bold text-white",
				children: n.capeTitle
			}),
			/* @__PURE__ */ q("div", {
				class: "grid gap-5 md:grid-cols-[1fr_280px]",
				children: [/* @__PURE__ */ q("div", {
					class: "space-y-3",
					children: _ ? /* @__PURE__ */ q(Kh, {
						t: n,
						kind: "cape"
					}) : /* @__PURE__ */ q(S, { children: [/* @__PURE__ */ q(po, {
						sb: e,
						user: t,
						t: n,
						kind: "cape",
						accept: "image/png",
						validateImage: (e) => rg(e.w, e.h),
						onUploaded: h,
						label: a ? n.capeReplace : n.capeUpload,
						hint: n.capeHint
					}), a && /* @__PURE__ */ q("button", {
						type: "button",
						onClick: g,
						class: "block mx-auto text-xs text-rose-400 hover:text-rose-300 hover:underline",
						children: n.capeRemove
					})] })
				}), /* @__PURE__ */ q("div", {
					class: "flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ q(Oh, {
						skinUrl: p,
						capeUrl: m,
						slim: s,
						walking: !0
					}), /* @__PURE__ */ q("p", {
						class: "text-[11px] text-gray-500 text-center",
						children: n.skinPreviewHint
					})]
				})]
			}),
			/* @__PURE__ */ q("div", {
				class: "pt-5 border-t border-brand-500/15 space-y-3",
				children: [/* @__PURE__ */ q("h3", {
					class: "text-xs font-semibold uppercase tracking-wider text-gray-400",
					children: n.presetsTitle
				}), /* @__PURE__ */ q(Fh, {
					sb: e,
					user: t,
					t: n,
					kind: "cape",
					items: Jh,
					onApplied: async () => {
						await d();
					}
				})]
			})
		]
	});
}
function rg(e, t) {
	return e === 64 && t === 32 || e === 128 && t === 64;
}
//#endregion
//#region src/pages/PasswordPage.tsx
function ig({ sb: e, t }) {
	let [n, r] = U(""), [i, a] = U(""), [o, s] = U(!1), [c, l] = U(""), [u, d] = U(!1);
	async function f(o) {
		if (o.preventDefault(), l(""), d(!1), n.length < 6) {
			l(t.passwordWeak);
			return;
		}
		if (n !== i) {
			l(t.passwordMismatch);
			return;
		}
		s(!0);
		let { error: c } = await e.auth.updateUser({ password: n });
		if (s(!1), c) {
			l(c.message);
			return;
		}
		r(""), a(""), d(!0), setTimeout(() => d(!1), 2500);
	}
	let p = "w-full px-4 py-3 bg-brand-500/10 border border-brand-500/30 rounded-xl text-white placeholder-gray-500 focus:border-brand-400 focus:bg-brand-500/15 focus:outline-none transition";
	return /* @__PURE__ */ q("form", {
		onSubmit: f,
		class: "space-y-4 max-w-sm",
		children: [
			/* @__PURE__ */ q("h2", {
				class: "text-lg font-bold text-white",
				children: t.passwordTitle
			}),
			/* @__PURE__ */ q("label", {
				class: "block",
				children: [/* @__PURE__ */ q("span", {
					class: "text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5 block",
					children: t.passwordNew
				}), /* @__PURE__ */ q("input", {
					type: "password",
					required: !0,
					minLength: 6,
					autoComplete: "new-password",
					value: n,
					onInput: (e) => r(e.target.value),
					class: p,
					placeholder: "6+"
				})]
			}),
			/* @__PURE__ */ q("label", {
				class: "block",
				children: [/* @__PURE__ */ q("span", {
					class: "text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5 block",
					children: t.passwordConfirm
				}), /* @__PURE__ */ q("input", {
					type: "password",
					required: !0,
					minLength: 6,
					autoComplete: "new-password",
					value: i,
					onInput: (e) => a(e.target.value),
					class: p,
					placeholder: "6+"
				})]
			}),
			c && /* @__PURE__ */ q("p", {
				class: "text-xs text-rose-400",
				children: c
			}),
			u && /* @__PURE__ */ q("p", {
				class: "text-xs text-emerald-400",
				children: t.passwordChanged
			}),
			/* @__PURE__ */ q("button", {
				type: "submit",
				disabled: o,
				class: "btn-glow w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-brand-600/30 disabled:opacity-50 disabled:pointer-events-none",
				children: o ? t.saving : t.passwordSubmit
			})
		]
	});
}
//#endregion
//#region src/CabinetWidget.tsx
function ag(e, t) {
	if (typeof document > "u") return e && t ? eo(e, t, { auth: {
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
	let i = eo(e, t, { auth: {
		persistSession: !0,
		autoRefreshToken: !0,
		detectSessionInUrl: !0
	} });
	return document.addEventListener("anubis-need-supabase", (e) => {
		let t = e.detail;
		t && !t.client && (t.client = i);
	}), i;
}
function og({ supabaseUrl: e, supabaseKey: t, lang: n, mode: r }) {
	let i = ro(n), a = r === "launcher", o = Me(null);
	o.current ||= ag(e, t);
	let s = o.current, [c, l] = U(null), [u, d] = U(!0), [f, p] = U("profile");
	return je(() => {
		if (!s) {
			d(!1);
			return;
		}
		s.auth.getSession().then(({ data: e }) => {
			l(e.session), d(!1);
		});
		let { data: e } = s.auth.onAuthStateChange((e, t) => l(t));
		return () => e.subscription.unsubscribe();
	}, [s]), s ? u ? /* @__PURE__ */ q("div", {
		class: "aw-cabinet-scope flex items-center justify-center p-12 text-gray-400",
		children: /* @__PURE__ */ q("div", { class: "w-6 h-6 rounded-full border-2 border-brand-500/30 border-t-brand-400 animate-spin" })
	}) : c?.user ? /* @__PURE__ */ q("div", {
		class: "aw-cabinet-scope",
		children: /* @__PURE__ */ q(sg, {
			sb: s,
			user: c.user,
			t: i,
			page: f,
			onPage: p,
			inLauncher: a,
			onSignOut: async () => {
				await s.auth.signOut();
			}
		})
	}) : /* @__PURE__ */ q("div", {
		class: "aw-cabinet-scope p-8 text-center text-gray-400 text-sm",
		children: i.errSignInRequired
	}) : /* @__PURE__ */ q("div", {
		class: "aw-cabinet-scope p-4 text-sm text-rose-400",
		children: "missing supabase-url / supabase-key"
	});
}
function sg({ sb: e, user: t, t: n, page: r, onPage: i, inLauncher: a, onSignOut: o }) {
	let [s, c] = U(null);
	je(() => {
		e.from("profiles").select("minecraft_nick").eq("id", t.id).maybeSingle().then(({ data: e }) => c(e?.minecraft_nick ?? null));
	}, [e, t.id]);
	let l = Ne(() => [
		{
			id: "profile",
			label: n.navProfile,
			icon: /* @__PURE__ */ q(cg, {})
		},
		{
			id: "skin",
			label: n.navSkin,
			icon: /* @__PURE__ */ q(lg, {})
		},
		{
			id: "cape",
			label: n.navCape,
			icon: /* @__PURE__ */ q(ug, {})
		},
		{
			id: "password",
			label: n.navPassword,
			icon: /* @__PURE__ */ q(dg, {})
		}
	], [n]);
	return /* @__PURE__ */ q("div", {
		class: "w-full mx-auto max-w-5xl text-gray-100",
		children: [
			/* @__PURE__ */ q("header", {
				class: "flex items-center justify-between mb-6 gap-4 flex-wrap",
				children: [/* @__PURE__ */ q("div", { children: [/* @__PURE__ */ q("h1", {
					class: "text-2xl font-bold tracking-tight",
					children: /* @__PURE__ */ q("span", {
						class: "gold-text",
						children: n.title
					})
				}), /* @__PURE__ */ q("p", {
					class: "text-xs text-gray-400 mt-1",
					children: [
						n.signedInAs,
						" ",
						/* @__PURE__ */ q("span", {
							class: "font-mono text-brand-300",
							children: s ?? t.email
						})
					]
				})] }), !a && /* @__PURE__ */ q("button", {
					type: "button",
					onClick: o,
					class: "px-4 py-2 text-xs font-semibold rounded-xl bg-brand-500/10 hover:bg-rose-500/15 border border-brand-500/30 hover:border-rose-500/45 text-gray-300 hover:text-rose-200 transition",
					children: n.signOut
				})]
			}),
			/* @__PURE__ */ q("nav", {
				class: "glass rounded-2xl p-1.5 mb-4 flex flex-wrap gap-1",
				role: "tablist",
				children: l.map((e) => {
					let t = r === e.id;
					return /* @__PURE__ */ q("button", {
						type: "button",
						role: "tab",
						"aria-selected": t,
						onClick: () => i(e.id),
						class: `flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition ${t ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-md shadow-brand-600/30" : "text-gray-300 hover:text-white hover:bg-brand-500/10"}`,
						children: [/* @__PURE__ */ q("span", {
							class: t ? "text-white" : "text-brand-300",
							children: e.icon
						}), /* @__PURE__ */ q("span", { children: e.label })]
					});
				})
			}),
			/* @__PURE__ */ q("main", {
				class: "glass rounded-2xl p-5 md:p-7 min-h-[420px]",
				children: [
					r === "profile" && /* @__PURE__ */ q(ao, {
						sb: e,
						user: t,
						t: n,
						nick: s
					}),
					r === "skin" && /* @__PURE__ */ q(Qh, {
						sb: e,
						user: t,
						t: n,
						nick: s
					}),
					r === "cape" && /* @__PURE__ */ q(ng, {
						sb: e,
						user: t,
						t: n
					}),
					r === "password" && /* @__PURE__ */ q(ig, {
						sb: e,
						t: n
					})
				]
			})
		]
	});
}
var cg = () => /* @__PURE__ */ q("svg", {
	class: "w-4 h-4",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ q("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
	})
}), lg = () => /* @__PURE__ */ q("svg", {
	class: "w-4 h-4",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ q("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M16 3l-4 4-4-4M5 6l3-3h8l3 3v4l-3 1v10H8V11L5 10V6z"
	})
}), ug = () => /* @__PURE__ */ q("svg", {
	class: "w-4 h-4",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ q("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M6 4h12l2 6-3 11H7L4 10z"
	})
}), dg = () => /* @__PURE__ */ q("svg", {
	class: "w-4 h-4",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ q("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M12 15v2m0 4a9 9 0 110-18 9 9 0 010 18zM7.5 11V7a4.5 4.5 0 119 0v4"
	})
}), fg = ".aw-cabinet-scope,.aw-cabinet-scope :before,.aw-cabinet-scope :after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.aw-cabinet-scope ::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.aw-cabinet-scope .sr-only{clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.aw-cabinet-scope .visible{visibility:visible}.aw-cabinet-scope .fixed{position:fixed}.aw-cabinet-scope .absolute{position:absolute}.aw-cabinet-scope .relative{position:relative}.aw-cabinet-scope .left-\\[3px\\]{left:3px}.aw-cabinet-scope .top-\\[3px\\]{top:3px}.aw-cabinet-scope .mx-auto{margin-left:auto;margin-right:auto}.aw-cabinet-scope .mb-1\\.5{margin-bottom:.375rem}.aw-cabinet-scope .mb-4{margin-bottom:1rem}.aw-cabinet-scope .mb-6{margin-bottom:1.5rem}.aw-cabinet-scope .mt-0\\.5{margin-top:.125rem}.aw-cabinet-scope .mt-1{margin-top:.25rem}.aw-cabinet-scope .mt-1\\.5{margin-top:.375rem}.aw-cabinet-scope .mt-2{margin-top:.5rem}.aw-cabinet-scope .block{display:block}.aw-cabinet-scope .inline-block{display:inline-block}.aw-cabinet-scope .inline{display:inline}.aw-cabinet-scope .flex{display:flex}.aw-cabinet-scope .inline-flex{display:inline-flex}.aw-cabinet-scope .table{display:table}.aw-cabinet-scope .grid{display:grid}.aw-cabinet-scope .h-10{height:2.5rem}.aw-cabinet-scope .h-3\\.5{height:.875rem}.aw-cabinet-scope .h-4{height:1rem}.aw-cabinet-scope .h-5{height:1.25rem}.aw-cabinet-scope .h-6{height:1.5rem}.aw-cabinet-scope .h-8{height:2rem}.aw-cabinet-scope .min-h-\\[420px\\]{min-height:420px}.aw-cabinet-scope .w-10{width:2.5rem}.aw-cabinet-scope .w-3\\.5{width:.875rem}.aw-cabinet-scope .w-4{width:1rem}.aw-cabinet-scope .w-5{width:1.25rem}.aw-cabinet-scope .w-6{width:1.5rem}.aw-cabinet-scope .w-8{width:2rem}.aw-cabinet-scope .w-full{width:100%}.aw-cabinet-scope .min-w-0{min-width:0}.aw-cabinet-scope .max-w-5xl{max-width:64rem}.aw-cabinet-scope .max-w-sm{max-width:24rem}.aw-cabinet-scope .max-w-xs{max-width:20rem}.aw-cabinet-scope .flex-1{flex:1}.aw-cabinet-scope .flex-shrink-0{flex-shrink:0}@keyframes spin{to{transform:rotate(360deg)}}.aw-cabinet-scope .animate-spin{animation:1s linear infinite spin}.aw-cabinet-scope .cursor-pointer{cursor:pointer}.aw-cabinet-scope .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.aw-cabinet-scope .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.aw-cabinet-scope .flex-col{flex-direction:column}.aw-cabinet-scope .flex-wrap{flex-wrap:wrap}.aw-cabinet-scope .items-start{align-items:flex-start}.aw-cabinet-scope .items-center{align-items:center}.aw-cabinet-scope .justify-center{justify-content:center}.aw-cabinet-scope .justify-between{justify-content:space-between}.aw-cabinet-scope .gap-1{gap:.25rem}.aw-cabinet-scope .gap-2{gap:.5rem}.aw-cabinet-scope .gap-3{gap:.75rem}.aw-cabinet-scope .gap-4{gap:1rem}.aw-cabinet-scope .gap-5{gap:1.25rem}.aw-cabinet-scope :is(.space-y-2>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.aw-cabinet-scope :is(.space-y-3>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.aw-cabinet-scope :is(.space-y-4>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.aw-cabinet-scope :is(.space-y-5>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.aw-cabinet-scope .overflow-hidden{overflow:hidden}.aw-cabinet-scope .whitespace-nowrap{white-space:nowrap}.aw-cabinet-scope .rounded-2xl{border-radius:1rem}.aw-cabinet-scope .rounded-full{border-radius:9999px}.aw-cabinet-scope .rounded-lg{border-radius:.5rem}.aw-cabinet-scope .rounded-xl{border-radius:.75rem}.aw-cabinet-scope .border{border-width:1px}.aw-cabinet-scope .border-2{border-width:2px}.aw-cabinet-scope .border-t{border-top-width:1px}.aw-cabinet-scope .border-dashed{border-style:dashed}.aw-cabinet-scope .border-amber-500\\/30{border-color:#f59e0b4d}.aw-cabinet-scope .border-brand-500\\/15{border-color:#8b5cf626}.aw-cabinet-scope .border-brand-500\\/20{border-color:#8b5cf633}.aw-cabinet-scope .border-brand-500\\/25{border-color:#8b5cf640}.aw-cabinet-scope .border-brand-500\\/30{border-color:#8b5cf64d}.aw-cabinet-scope .border-t-brand-400{--tw-border-opacity:1;border-top-color:rgb(167 139 250/var(--tw-border-opacity,1))}.aw-cabinet-scope .bg-amber-500\\/15{background-color:#f59e0b26}.aw-cabinet-scope .bg-amber-500\\/5{background-color:#f59e0b0d}.aw-cabinet-scope .bg-brand-500\\/10{background-color:#8b5cf61a}.aw-cabinet-scope .bg-brand-500\\/15{background-color:#8b5cf626}.aw-cabinet-scope .bg-brand-500\\/5{background-color:#8b5cf60d}.aw-cabinet-scope .bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.aw-cabinet-scope .bg-gradient-to-br{background-image:linear-gradient(to bottom right, var(--tw-gradient-stops))}.aw-cabinet-scope .bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.aw-cabinet-scope .from-amber-500\\/10{--tw-gradient-from:#f59e0b1a var(--tw-gradient-from-position);--tw-gradient-to:#f59e0b00 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.aw-cabinet-scope .from-brand-600{--tw-gradient-from:#7c3aed var(--tw-gradient-from-position);--tw-gradient-to:#7c3aed00 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.aw-cabinet-scope .to-amber-500\\/0{--tw-gradient-to:#f59e0b00 var(--tw-gradient-to-position)}.aw-cabinet-scope .to-brand-500{--tw-gradient-to:#8b5cf6 var(--tw-gradient-to-position)}.aw-cabinet-scope .p-1\\.5{padding:.375rem}.aw-cabinet-scope .p-12{padding:3rem}.aw-cabinet-scope .p-3{padding:.75rem}.aw-cabinet-scope .p-4{padding:1rem}.aw-cabinet-scope .p-5{padding:1.25rem}.aw-cabinet-scope .p-6{padding:1.5rem}.aw-cabinet-scope .p-8{padding:2rem}.aw-cabinet-scope .px-3{padding-left:.75rem;padding-right:.75rem}.aw-cabinet-scope .px-4{padding-left:1rem;padding-right:1rem}.aw-cabinet-scope .px-5{padding-left:1.25rem;padding-right:1.25rem}.aw-cabinet-scope .px-6{padding-left:1.5rem;padding-right:1.5rem}.aw-cabinet-scope .py-2{padding-top:.5rem;padding-bottom:.5rem}.aw-cabinet-scope .py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.aw-cabinet-scope .py-3{padding-top:.75rem;padding-bottom:.75rem}.aw-cabinet-scope .py-6{padding-top:1.5rem;padding-bottom:1.5rem}.aw-cabinet-scope .pt-2{padding-top:.5rem}.aw-cabinet-scope .pt-5{padding-top:1.25rem}.aw-cabinet-scope .text-center{text-align:center}.aw-cabinet-scope .font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.aw-cabinet-scope .text-2xl{font-size:1.5rem;line-height:2rem}.aw-cabinet-scope .text-3xl{font-size:1.875rem;line-height:2.25rem}.aw-cabinet-scope .text-\\[10px\\]{font-size:10px}.aw-cabinet-scope .text-\\[11px\\]{font-size:11px}.aw-cabinet-scope .text-base{font-size:1rem;line-height:1.5rem}.aw-cabinet-scope .text-lg{font-size:1.125rem;line-height:1.75rem}.aw-cabinet-scope .text-sm{font-size:.875rem;line-height:1.25rem}.aw-cabinet-scope .text-xs{font-size:.75rem;line-height:1rem}.aw-cabinet-scope .font-bold{font-weight:700}.aw-cabinet-scope .font-medium{font-weight:500}.aw-cabinet-scope .font-semibold{font-weight:600}.aw-cabinet-scope .uppercase{text-transform:uppercase}.aw-cabinet-scope .leading-none{line-height:1}.aw-cabinet-scope .leading-relaxed{line-height:1.625}.aw-cabinet-scope .leading-snug{line-height:1.375}.aw-cabinet-scope .leading-tight{line-height:1.25}.aw-cabinet-scope .tracking-tight{letter-spacing:-.025em}.aw-cabinet-scope .tracking-wider{letter-spacing:.05em}.aw-cabinet-scope .text-amber-200{--tw-text-opacity:1;color:rgb(253 230 138/var(--tw-text-opacity,1))}.aw-cabinet-scope .text-amber-300{--tw-text-opacity:1;color:rgb(252 211 77/var(--tw-text-opacity,1))}.aw-cabinet-scope .text-brand-400\\/40{color:#a78bfa66}.aw-cabinet-scope .text-emerald-400{--tw-text-opacity:1;color:rgb(52 211 153/var(--tw-text-opacity,1))}.aw-cabinet-scope .text-gray-100{--tw-text-opacity:1;color:rgb(243 244 246/var(--tw-text-opacity,1))}.aw-cabinet-scope .text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity,1))}.aw-cabinet-scope .text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1))}.aw-cabinet-scope .text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.aw-cabinet-scope .text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.aw-cabinet-scope .text-rose-400{--tw-text-opacity:1;color:rgb(251 113 133/var(--tw-text-opacity,1))}.aw-cabinet-scope .text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.aw-cabinet-scope .placeholder-gray-500::placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity,1))}.aw-cabinet-scope .shadow{--tw-shadow:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.aw-cabinet-scope .shadow-lg{--tw-shadow:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.aw-cabinet-scope .shadow-md{--tw-shadow:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.aw-cabinet-scope .shadow-brand-600\\/30{--tw-shadow-color:#7c3aed4d;--tw-shadow:var(--tw-shadow-colored)}.aw-cabinet-scope .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter,backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.aw-cabinet-scope .glass{-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);background:#8b5cf60f;border:1px solid #8b5cf62e}.aw-cabinet-scope .btn-glow{position:relative;overflow:hidden}.aw-cabinet-scope .btn-glow:after{content:\"\";pointer-events:none;background:linear-gradient(90deg,#0000,#ffffff2e,#0000);transition:transform .5s;position:absolute;inset:0;transform:translate(-100%)}.aw-cabinet-scope .btn-glow:hover:after{transform:translate(100%)}.aw-cabinet-scope .gold-text{color:#0000;background:linear-gradient(135deg,#c084fc 0%,#a855f7 50%,#22d3ee 100%);-webkit-background-clip:text;background-clip:text}.aw-cabinet-scope .dropzone{transition:border-color .15s,background .15s}.aw-cabinet-scope .dropzone.is-active{background:#7c3aed1a;border-color:#a855f799}.aw-cabinet-scope .skin-preview-frame{background:radial-gradient(at 50% 30%,#7c3aed2e,#070612f2 65%);border:1px solid #a855f738;border-radius:1rem;overflow:hidden}.aw-cabinet-scope .hover\\:border-brand-400\\/35:hover{border-color:#a78bfa59}.aw-cabinet-scope .hover\\:border-brand-400\\/55:hover{border-color:#a78bfa8c}.aw-cabinet-scope .hover\\:border-rose-500\\/45:hover{border-color:#f43f5e73}.aw-cabinet-scope .hover\\:bg-brand-500\\/10:hover{background-color:#8b5cf61a}.aw-cabinet-scope .hover\\:bg-rose-500\\/15:hover{background-color:#f43f5e26}.aw-cabinet-scope .hover\\:from-brand-700:hover{--tw-gradient-from:#6d28d9 var(--tw-gradient-from-position);--tw-gradient-to:#6d28d900 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.aw-cabinet-scope .hover\\:to-brand-600:hover{--tw-gradient-to:#7c3aed var(--tw-gradient-to-position)}.aw-cabinet-scope .hover\\:text-amber-100:hover{--tw-text-opacity:1;color:rgb(254 243 199/var(--tw-text-opacity,1))}.aw-cabinet-scope .hover\\:text-rose-200:hover{--tw-text-opacity:1;color:rgb(254 205 211/var(--tw-text-opacity,1))}.aw-cabinet-scope .hover\\:text-rose-300:hover{--tw-text-opacity:1;color:rgb(253 164 175/var(--tw-text-opacity,1))}.aw-cabinet-scope .hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.aw-cabinet-scope .hover\\:underline:hover{text-decoration-line:underline}.aw-cabinet-scope .focus\\:border-brand-400:focus{--tw-border-opacity:1;border-color:rgb(167 139 250/var(--tw-border-opacity,1))}.aw-cabinet-scope .focus\\:bg-brand-500\\/15:focus{background-color:#8b5cf626}.aw-cabinet-scope .focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.aw-cabinet-scope .disabled\\:pointer-events-none:disabled{pointer-events:none}.aw-cabinet-scope .disabled\\:cursor-wait:disabled{cursor:wait}.aw-cabinet-scope .disabled\\:opacity-50:disabled{opacity:.5}.aw-cabinet-scope :is(.peer:checked~.peer-checked\\:translate-x-4){--tw-translate-x:1rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.aw-cabinet-scope :is(.peer:checked~.peer-checked\\:bg-brand-500\\/45){background-color:#8b5cf673}@media (min-width:640px){.aw-cabinet-scope .sm\\:flex-none{flex:none}.aw-cabinet-scope .sm\\:p-7{padding:1.75rem}}@media (min-width:768px){.aw-cabinet-scope .md\\:grid-cols-\\[1fr_280px\\]{grid-template-columns:1fr 280px}.aw-cabinet-scope .md\\:p-7{padding:1.75rem}}", pg = "anubis-cabinet-styles";
if (typeof document < "u" && !document.getElementById(pg)) {
	let e = document.createElement("style");
	e.id = pg, e.textContent = fg, document.head.appendChild(e);
}
R(og, "anubis-cabinet", [
	"supabase-url",
	"supabase-key",
	"lang",
	"mode"
], { shadow: !1 });
//#endregion
