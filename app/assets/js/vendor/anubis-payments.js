//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, a) => (a = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), l, u, d, f, p, m, h, g, _, v, y, b, x, S, C = {}, ee = [], te = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ne = Array.isArray;
function w(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function re(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function T(e, t, n) {
	var r, i, a, o = {};
	for (a in t) a == "key" ? r = t[a] : a == "ref" ? i = t[a] : o[a] = t[a];
	if (arguments.length > 2 && (o.children = arguments.length > 3 ? l.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
	return E(e, o, r, i, null);
}
function E(e, t, n, r, i) {
	var a = {
		type: e,
		props: t,
		key: n,
		ref: r,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: i ?? ++d,
		__i: -1,
		__u: 0
	};
	return i == null && u.vnode != null && u.vnode(a), a;
}
function ie(e) {
	return e.children;
}
function ae(e, t) {
	this.props = e, this.context = t;
}
function oe(e, t) {
	if (t == null) return e.__ ? oe(e.__, e.__i + 1) : null;
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? oe(e) : null;
}
function se(e) {
	if (e.__P && e.__d) {
		var t = e.__v, n = t.__e, r = [], i = [], a = w({}, t);
		a.__v = t.__v + 1, u.vnode && u.vnode(a), ve(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? oe(t), !!(32 & t.__u), i), a.__v = t.__v, a.__.__k[a.__i] = a, be(r, a, i), t.__e = t.__ = null, a.__e != n && ce(a);
	}
}
function ce(e) {
	if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
		if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
	}), ce(e);
}
function le(e) {
	(!e.__d && (e.__d = !0) && f.push(e) && !ue.__r++ || p != u.debounceRendering) && ((p = u.debounceRendering) || m)(ue);
}
function ue() {
	try {
		for (var e, t = 1; f.length;) f.length > t && f.sort(h), e = f.shift(), t = f.length, se(e);
	} finally {
		f.length = ue.__r = 0;
	}
}
function de(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, h, g, _, v = r && r.__k || ee, y = t.length;
	for (c = fe(n, t, v, c, y), d = 0; d < y; d++) (p = n.__k[d]) != null && (f = p.__i != -1 && v[p.__i] || C, p.__i = d, g = ve(e, p, f, i, a, o, s, c, l, u), m = p.__e, p.ref && f.ref != p.ref && (f.ref && Ce(f.ref, null, p), u.push(p.ref, p.__c || m, p)), h == null && m != null && (h = m), (_ = !!(4 & p.__u)) || f.__k === p.__k ? (c = pe(p, c, e, _), _ && f.__e && (f.__e = null)) : typeof p.type == "function" && g !== void 0 ? c = g : m && (c = m.nextSibling), p.__u &= -7);
	return n.__e = h, c;
}
function fe(e, t, n, r, i) {
	var a, o, s, c, l, u = n.length, d = u, f = 0;
	for (e.__k = Array(i), a = 0; a < i; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = E(null, o, null, null, null) : ne(o) ? o = e.__k[a] = E(ie, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = E(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, c = a + f, o.__ = e, o.__b = e.__b + 1, s = null, (l = o.__i = me(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (i > u ? f-- : i < u && f++), typeof o.type != "function" && (o.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, o.__u |= 4))) : e.__k[a] = null;
	if (d) for (a = 0; a < u; a++) (s = n[a]) != null && !(2 & s.__u) && (s.__e == r && (r = oe(s)), we(s, s));
	return r;
}
function pe(e, t, n, r) {
	var i, a;
	if (typeof e.type == "function") {
		for (i = e.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = e, t = pe(i[a], t, n, r));
		return t;
	}
	e.__e != t && (r && (t && e.type && !t.parentNode && (t = oe(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
	do
		t &&= t.nextSibling;
	while (t != null && t.nodeType == 8);
	return t;
}
function me(e, t, n, r) {
	var i, a, o, s = e.key, c = e.type, l = t[n], u = l != null && (2 & l.__u) == 0;
	if (l === null && s == null || u && s == l.key && c == l.type) return n;
	if (r > +!!u) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length;) if ((l = t[o = i >= 0 ? i-- : a++]) != null && !(2 & l.__u) && s == l.key && c == l.type) return o;
	}
	return -1;
}
function he(e, t, n) {
	t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || te.test(t) ? n : n + "px";
}
function ge(e, t, n, r, i) {
	var a, o;
	n: if (t == "style") if (typeof n == "string") e.style.cssText = n;
	else {
		if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || he(e.style, t, "");
		if (n) for (t in n) r && n[t] == r[t] || he(e.style, t, n[t]);
	}
	else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(y, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l ||= {}, e.l[t + a] = n, n ? r ? n[v] = r[v] : (n[v] = b, e.addEventListener(t, a ? S : x, a)) : e.removeEventListener(t, a ? S : x, a);
	else {
		if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
			e[t] = n ?? "";
			break n;
		} catch {}
		typeof n == "function" || (n == null || !1 === n && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
	}
}
function _e(e) {
	return function(t) {
		if (this.l) {
			var n = this.l[t.type + e];
			if (t[_] == null) t[_] = b++;
			else if (t[_] < n[v]) return;
			return n(u.event ? u.event(t) : t);
		}
	};
}
function ve(e, t, n, r, i, a, o, s, c, l) {
	var d, f, p, m, h, g, _, v, y, b, x, S, C, te, T, E = t.type;
	if (t.constructor !== void 0) return null;
	128 & n.__u && (c = !!(32 & n.__u), a = [s = t.__e = n.__e]), (d = u.__b) && d(t);
	n: if (typeof E == "function") try {
		if (v = t.props, y = E.prototype && E.prototype.render, b = (d = E.contextType) && r[d.__c], x = d ? b ? b.props.value : d.__ : r, n.__c ? _ = (f = t.__c = n.__c).__ = f.__E : (y ? t.__c = f = new E(v, x) : (t.__c = f = new ae(v, x), f.constructor = E, f.render = Te), b && b.sub(f), f.state ||= {}, f.__n = r, p = f.__d = !0, f.__h = [], f._sb = []), y && f.__s == null && (f.__s = f.state), y && E.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = w({}, f.__s)), w(f.__s, E.getDerivedStateFromProps(v, f.__s))), m = f.props, h = f.state, f.__v = t, p) y && E.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), y && f.componentDidMount != null && f.__h.push(f.componentDidMount);
		else {
			if (y && E.getDerivedStateFromProps == null && v !== m && f.componentWillReceiveProps != null && f.componentWillReceiveProps(v, x), t.__v == n.__v || !f.__e && f.shouldComponentUpdate != null && !1 === f.shouldComponentUpdate(v, f.__s, x)) {
				t.__v != n.__v && (f.props = v, f.state = f.__s, f.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(e) {
					e && (e.__ = t);
				}), ee.push.apply(f.__h, f._sb), f._sb = [], f.__h.length && o.push(f);
				break n;
			}
			f.componentWillUpdate != null && f.componentWillUpdate(v, f.__s, x), y && f.componentDidUpdate != null && f.__h.push(function() {
				f.componentDidUpdate(m, h, g);
			});
		}
		if (f.context = x, f.props = v, f.__P = e, f.__e = !1, S = u.__r, C = 0, y) f.state = f.__s, f.__d = !1, S && S(t), d = f.render(f.props, f.state, f.context), ee.push.apply(f.__h, f._sb), f._sb = [];
		else do
			f.__d = !1, S && S(t), d = f.render(f.props, f.state, f.context), f.state = f.__s;
		while (f.__d && ++C < 25);
		f.state = f.__s, f.getChildContext != null && (r = w(w({}, r), f.getChildContext())), y && !p && f.getSnapshotBeforeUpdate != null && (g = f.getSnapshotBeforeUpdate(m, h)), te = d != null && d.type === ie && d.key == null ? xe(d.props.children) : d, s = de(e, ne(te) ? te : [te], t, n, r, i, a, o, s, c, l), f.base = t.__e, t.__u &= -161, f.__h.length && o.push(f), _ && (f.__E = f.__ = null);
	} catch (e) {
		if (t.__v = null, c || a != null) if (e.then) {
			for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling;) s = s.nextSibling;
			a[a.indexOf(s)] = null, t.__e = s;
		} else {
			for (T = a.length; T--;) re(a[T]);
			ye(t);
		}
		else t.__e = n.__e, t.__k = n.__k, e.then || ye(t);
		u.__e(e, t, n);
	}
	else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = Se(n.__e, t, n, r, i, a, o, c, l);
	return (d = u.diffed) && d(t), 128 & t.__u ? void 0 : s;
}
function ye(e) {
	e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(ye));
}
function be(e, t, n) {
	for (var r = 0; r < n.length; r++) Ce(n[r], n[++r], n[++r]);
	u.__c && u.__c(t, e), e.some(function(t) {
		try {
			e = t.__h, t.__h = [], e.some(function(e) {
				e.call(t);
			});
		} catch (e) {
			u.__e(e, t.__v);
		}
	});
}
function xe(e) {
	return typeof e != "object" || !e || e.__b > 0 ? e : ne(e) ? e.map(xe) : w({}, e);
}
function Se(e, t, n, r, i, a, o, s, c) {
	var d, f, p, m, h, g, _, v = n.props || C, y = t.props, b = t.type;
	if (b == "svg" ? i = "http://www.w3.org/2000/svg" : b == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i ||= "http://www.w3.org/1999/xhtml", a != null) {
		for (d = 0; d < a.length; d++) if ((h = a[d]) && "setAttribute" in h == !!b && (b ? h.localName == b : h.nodeType == 3)) {
			e = h, a[d] = null;
			break;
		}
	}
	if (e == null) {
		if (b == null) return document.createTextNode(y);
		e = document.createElementNS(i, b, y.is && y), s &&= (u.__m && u.__m(t, a), !1), a = null;
	}
	if (b == null) v === y || s && e.data == y || (e.data = y);
	else {
		if (a &&= l.call(e.childNodes), !s && a != null) for (v = {}, d = 0; d < e.attributes.length; d++) v[(h = e.attributes[d]).name] = h.value;
		for (d in v) h = v[d], d == "dangerouslySetInnerHTML" ? p = h : d == "children" || d in y || d == "value" && "defaultValue" in y || d == "checked" && "defaultChecked" in y || ge(e, d, null, h, i);
		for (d in y) h = y[d], d == "children" ? m = h : d == "dangerouslySetInnerHTML" ? f = h : d == "value" ? g = h : d == "checked" ? _ = h : s && typeof h != "function" || v[d] === h || ge(e, d, h, v[d], i);
		if (f) s || p && (f.__html == p.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
		else if (p && (e.innerHTML = ""), de(t.type == "template" ? e.content : e, ne(m) ? m : [m], t, n, r, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, o, a ? a[0] : n.__k && oe(n, 0), s, c), a != null) for (d = a.length; d--;) re(a[d]);
		s || (d = "value", b == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[d] || b == "progress" && !g || b == "option" && g != v[d]) && ge(e, d, g, v[d], i), d = "checked", _ != null && _ != e[d] && ge(e, d, _, v[d], i));
	}
	return e;
}
function Ce(e, t, n) {
	try {
		if (typeof e == "function") {
			var r = typeof e.__u == "function";
			r && e.__u(), r && t == null || (e.__u = e(t));
		} else e.current = t;
	} catch (e) {
		u.__e(e, n);
	}
}
function we(e, t, n) {
	var r, i;
	if (u.unmount && u.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || Ce(r, null, t)), (r = e.__c) != null) {
		if (r.componentWillUnmount) try {
			r.componentWillUnmount();
		} catch (e) {
			u.__e(e, t);
		}
		r.base = r.__P = null;
	}
	if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && we(r[i], t, n || typeof e.type != "function");
	n || re(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Te(e, t, n) {
	return this.constructor(e, n);
}
function Ee(e, t, n) {
	var r, i, a, o;
	t == document && (t = document.documentElement), u.__ && u.__(e, t), i = (r = typeof n == "function") ? null : n && n.__k || t.__k, a = [], o = [], ve(t, e = (!r && n || t).__k = T(ie, null, [e]), i || C, C, t.namespaceURI, !r && n ? [n] : i ? null : t.firstChild ? l.call(t.childNodes) : null, a, !r && n ? n : i ? i.__e : t.firstChild, r, o), be(a, e, o);
}
function De(e, t) {
	Ee(e, t, De);
}
function Oe(e, t, n) {
	var r, i, a, o, s = w({}, e.props);
	for (a in e.type && e.type.defaultProps && (o = e.type.defaultProps), t) a == "key" ? r = t[a] : a == "ref" ? i = t[a] : s[a] = t[a] === void 0 && o != null ? o[a] : t[a];
	return arguments.length > 2 && (s.children = arguments.length > 3 ? l.call(arguments, 2) : n), E(e.type, s, r || e.key, i || e.ref, null);
}
l = ee.slice, u = { __e: function(e, t, n, r) {
	for (var i, a, o; t = t.__;) if ((i = t.__c) && !i.__) try {
		if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
	} catch (t) {
		e = t;
	}
	throw e;
} }, d = 0, ae.prototype.setState = function(e, t) {
	var n = this.__s != null && this.__s != this.state ? this.__s : this.__s = w({}, this.state);
	typeof e == "function" && (e = e(w({}, n), this.props)), e && w(n, e), e != null && this.__v && (t && this._sb.push(t), le(this));
}, ae.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), le(this));
}, ae.prototype.render = ie, f = [], m = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, h = function(e, t) {
	return e.__v.__b - t.__v.__b;
}, ue.__r = 0, g = Math.random().toString(8), _ = "__d" + g, v = "__a" + g, y = /(PointerCapture)$|Capture$/i, b = 0, x = _e(!1), S = _e(!0);
//#endregion
//#region node_modules/preact-custom-element/dist/preact-custom-element.esm.js
function ke() {
	return ke = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ke.apply(this, arguments);
}
function Ae(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
var je = ["context", "children"], Me = ["useFragment"];
function Ne(e, t, n, r) {
	function i() {
		var t, n = Reflect.construct(HTMLElement, [], i);
		return n._vdomComponent = e, r && r.shadow ? (n._root = n.attachShadow({
			mode: r.mode || "open",
			serializable: (t = r.serializable) != null && t
		}), r.adoptedStyleSheets && (n._root.adoptedStyleSheets = r.adoptedStyleSheets)) : n._root = n, n;
	}
	return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = function() {
		Fe.call(this, r);
	}, i.prototype.attributeChangedCallback = Le, i.prototype.disconnectedCallback = Re, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), i.observedAttributes = n, e.formAssociated && (i.formAssociated = !0), n.forEach(function(e) {
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
function Pe(e) {
	this.getChildContext = function() {
		return e.context;
	};
	var t = e.children;
	return Oe(t, Ae(e, je));
}
function Fe(e) {
	var t = new CustomEvent("_preact", {
		detail: {},
		bubbles: !0,
		cancelable: !0
	});
	this.dispatchEvent(t), this._vdom = T(Pe, ke({}, this._props, { context: t.detail.context }), Be(this, this._vdomComponent, e)), (this.hasAttribute("hydrate") ? De : Ee)(this._vdom, this._root);
}
function Ie(e) {
	return e.replace(/-(\w)/g, function(e, t) {
		return t ? t.toUpperCase() : "";
	});
}
function Le(e, t, n) {
	if (this._vdom) {
		var r = {};
		r[e] = n ??= void 0, r[Ie(e)] = n, this._vdom = Oe(this._vdom, r), Ee(this._vdom, this._root);
	}
}
function Re() {
	Ee(this._vdom = null, this._root);
}
function ze(e, t) {
	var n = this, r = e.useFragment, i = Ae(e, Me);
	return T(r ? ie : "slot", ke({}, i, { ref: function(e) {
		e ? (n.ref = e, n._listener || (n._listener = function(e) {
			e.stopPropagation(), e.detail.context = t;
		}, e.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
	} }));
}
function Be(e, t, n) {
	if (e.nodeType === 3) return e.data;
	if (e.nodeType !== 1) return null;
	var r = [], i = {}, a = 0, o = e.attributes, s = e.childNodes;
	for (a = o.length; a--;) o[a].name !== "slot" && (i[o[a].name] = o[a].value, i[Ie(o[a].name)] = o[a].value);
	for (a = s.length; a--;) {
		var c = Be(s[a], null, n), l = s[a].slot;
		l ? i[l] = T(ze, { name: l }, c) : r[a] = c;
	}
	var u = !(!n || !n.shadow), d = t ? T(ze, { useFragment: !u }, r) : r;
	return !u && t && (e.innerHTML = ""), T(t || e.nodeName.toLowerCase(), i, d);
}
//#endregion
//#region node_modules/preact/hooks/dist/hooks.module.js
var Ve, D, He, Ue, We = 0, Ge = [], O = u, Ke = O.__b, qe = O.__r, Je = O.diffed, Ye = O.__c, Xe = O.unmount, Ze = O.__;
function Qe(e, t) {
	O.__h && O.__h(D, e, We || t), We = 0;
	var n = D.__H ||= {
		__: [],
		__h: []
	};
	return e >= n.__.length && n.__.push({}), n.__[e];
}
function $e(e) {
	return We = 1, et(ut, e);
}
function et(e, t, n) {
	var r = Qe(Ve++, 2);
	if (r.t = e, !r.__c && (r.__ = [n ? n(t) : ut(void 0, t), function(e) {
		var t = r.__N ? r.__N[0] : r.__[0], n = r.t(t, e);
		t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}));
	}], r.__c = D, !D.__f)) {
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
		D.__f = !0;
		var a = D.shouldComponentUpdate, o = D.componentWillUpdate;
		D.componentWillUpdate = function(e, t, n) {
			if (this.__e) {
				var r = a;
				a = void 0, i(e, t, n), a = r;
			}
			o && o.call(this, e, t, n);
		}, D.shouldComponentUpdate = i;
	}
	return r.__N || r.__;
}
function tt(e, t) {
	var n = Qe(Ve++, 3);
	!O.__s && lt(n.__H, t) && (n.__ = e, n.u = t, D.__H.__h.push(n));
}
function nt(e) {
	return We = 5, rt(function() {
		return { current: e };
	}, []);
}
function rt(e, t) {
	var n = Qe(Ve++, 7);
	return lt(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function it() {
	for (var e; e = Ge.shift();) {
		var t = e.__H;
		if (e.__P && t) try {
			t.__h.some(st), t.__h.some(ct), t.__h = [];
		} catch (n) {
			t.__h = [], O.__e(n, e.__v);
		}
	}
}
O.__b = function(e) {
	D = null, Ke && Ke(e);
}, O.__ = function(e, t) {
	e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ze && Ze(e, t);
}, O.__r = function(e) {
	qe && qe(e), Ve = 0;
	var t = (D = e.__c).__H;
	t && (He === D ? (t.__h = [], D.__h = [], t.__.some(function(e) {
		e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
	})) : (t.__h.some(st), t.__h.some(ct), t.__h = [], Ve = 0)), He = D;
}, O.diffed = function(e) {
	Je && Je(e);
	var t = e.__c;
	t && t.__H && (t.__H.__h.length && (Ge.push(t) !== 1 && Ue === O.requestAnimationFrame || ((Ue = O.requestAnimationFrame) || ot)(it)), t.__H.__.some(function(e) {
		e.u && (e.__H = e.u), e.u = void 0;
	})), He = D = null;
}, O.__c = function(e, t) {
	t.some(function(e) {
		try {
			e.__h.some(st), e.__h = e.__h.filter(function(e) {
				return !e.__ || ct(e);
			});
		} catch (n) {
			t.some(function(e) {
				e.__h &&= [];
			}), t = [], O.__e(n, e.__v);
		}
	}), Ye && Ye(e, t);
}, O.unmount = function(e) {
	Xe && Xe(e);
	var t, n = e.__c;
	n && n.__H && (n.__H.__.some(function(e) {
		try {
			st(e);
		} catch (e) {
			t = e;
		}
	}), n.__H = void 0, t && O.__e(t, n.__v));
};
var at = typeof requestAnimationFrame == "function";
function ot(e) {
	var t, n = function() {
		clearTimeout(r), at && cancelAnimationFrame(t), setTimeout(e);
	}, r = setTimeout(n, 35);
	at && (t = requestAnimationFrame(n));
}
function st(e) {
	var t = D, n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), D = t;
}
function ct(e) {
	var t = D;
	e.__c = e.__(), D = t;
}
function lt(e, t) {
	return !e || e.length !== t.length || t.some(function(t, n) {
		return t !== e[n];
	});
}
function ut(e, t) {
	return typeof t == "function" ? t(e) : t;
}
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
function dt(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function ft(e, t, n, r) {
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
var pt = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), mt = class extends Error {
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
}, ht = class extends mt {
	constructor(e) {
		super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
	}
}, gt = class extends mt {
	constructor(e) {
		super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
	}
}, _t = class extends mt {
	constructor(e) {
		super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
	}
}, vt;
(function(e) {
	e.Any = "any", e.ApNortheast1 = "ap-northeast-1", e.ApNortheast2 = "ap-northeast-2", e.ApSouth1 = "ap-south-1", e.ApSoutheast1 = "ap-southeast-1", e.ApSoutheast2 = "ap-southeast-2", e.CaCentral1 = "ca-central-1", e.EuCentral1 = "eu-central-1", e.EuWest1 = "eu-west-1", e.EuWest2 = "eu-west-2", e.EuWest3 = "eu-west-3", e.SaEast1 = "sa-east-1", e.UsEast1 = "us-east-1", e.UsWest1 = "us-west-1", e.UsWest2 = "us-west-2";
})(vt ||= {});
//#endregion
//#region node_modules/@supabase/functions-js/dist/module/FunctionsClient.js
var yt = class {
	constructor(e, { headers: t = {}, customFetch: n, region: r = vt.Any } = {}) {
		this.url = e, this.headers = t, this.region = r, this.fetch = pt(n);
	}
	setAuth(e) {
		this.headers.Authorization = `Bearer ${e}`;
	}
	invoke(e) {
		return ft(this, arguments, void 0, function* (e, t = {}) {
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
					throw new ht(e);
				}), h = m.headers.get("x-relay-error");
				if (h && h === "true") throw new gt(m);
				if (!m.ok) throw new _t(m);
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
					response: e instanceof _t || e instanceof gt ? e.context : void 0
				};
			} finally {
				n && clearTimeout(n);
			}
		});
	}
}, bt = 3, xt = (e) => Math.min(1e3 * 2 ** e, 3e4), St = [520, 503], Ct = [
	"GET",
	"HEAD",
	"OPTIONS"
], wt = class extends Error {
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
function Tt(e, t) {
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
function Et(e, t, n, r) {
	return !(!r || n >= bt || !Ct.includes(e) || !St.includes(t));
}
var Dt = class {
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
					if (t?.name === "AbortError" || t?.code === "ABORT_ERR" || !Ct.includes(n.method)) throw t;
					if (n.retryEnabled && e < bt) {
						let t = xt(e);
						e++, await Tt(t, n.signal);
						continue;
					}
					throw t;
				}
				if (Et(n.method, i.status, e, n.retryEnabled)) {
					let t = i.headers?.get("Retry-After") ?? null, r = t === null ? xt(e) : Math.max(0, parseInt(t, 10) || 0) * 1e3;
					await i.text(), e++, await Tt(r, n.signal);
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
			if (n && t.shouldThrowOnError) throw new wt(n);
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
}, Ot = class extends Dt {
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
}, kt = /* @__PURE__ */ RegExp("[,()]"), At = class extends Ot {
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
		let n = Array.from(new Set(t)).map((e) => typeof e == "string" && kt.test(e) ? `"${e}"` : `${e}`).join(",");
		return this.url.searchParams.append(e, `in.(${n})`), this;
	}
	notIn(e, t) {
		let n = Array.from(new Set(t)).map((e) => typeof e == "string" && kt.test(e) ? `"${e}"` : `${e}`).join(",");
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
}, jt = class {
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
		return s.searchParams.set("select", o), r && c.append("Prefer", `count=${r}`), new At({
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
		return new At({
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
		return new At({
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
		return t && r.append("Prefer", `count=${t}`), new At({
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
		return e && n.append("Prefer", `count=${e}`), new At({
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
function Mt(e) {
	"@babel/helpers - typeof";
	return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Mt(e);
}
function Nt(e, t) {
	if (Mt(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Mt(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Pt(e) {
	var t = Nt(e, "string");
	return Mt(t) == "symbol" ? t : t + "";
}
function Ft(e, t, n) {
	return (t = Pt(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function It(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Lt(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? It(Object(n), !0).forEach(function(t) {
			Ft(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Rt = class e {
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
				return a.addEventListener("abort", i, { once: !0 }), s(e, Lt(Lt({}, t), {}, { signal: n.signal })).finally(() => {
					clearTimeout(r), a.removeEventListener("abort", i);
				});
			}
			return s(e, Lt(Lt({}, t), {}, { signal: n.signal })).finally(() => clearTimeout(r));
		} : this.fetch = s, this.retry = o;
	}
	from(e) {
		if (!e || typeof e != "string" || e.trim() === "") throw Error("Invalid relation name: relation must be a non-empty string.");
		return new jt(new URL(`${this.url}/${e}`), {
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
		return l ? u.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal") : i && u.set("Prefer", `count=${i}`), new At({
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
}, zt = class {
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
}, Bt = "realtime-js/2.105.4", Vt = "1.0.0", Ht = "2.0.0", Ut = Ht, Wt = 1e4, k = {
	closed: "closed",
	errored: "errored",
	joined: "joined",
	joining: "joining",
	leaving: "leaving"
}, Gt = {
	close: "phx_close",
	error: "phx_error",
	join: "phx_join",
	reply: "phx_reply",
	leave: "phx_leave",
	access_token: "access_token"
}, Kt = {
	connecting: "connecting",
	open: "open",
	closing: "closing",
	closed: "closed"
}, qt = class {
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
}, A;
(function(e) {
	e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange";
})(A ||= {});
var Jt = (e, t, n = {}) => {
	let r = n.skipTypes ?? [];
	return t ? Object.keys(t).reduce((n, i) => (n[i] = Yt(i, e, t, r), n), {}) : {};
}, Yt = (e, t, n, r) => {
	let i = t.find((t) => t.name === e)?.type, a = n[e];
	return i && !r.includes(i) ? Xt(i, a) : Zt(a);
}, Xt = (e, t) => {
	if (e.charAt(0) === "_") return tn(t, e.slice(1, e.length));
	switch (e) {
		case A.bool: return Qt(t);
		case A.float4:
		case A.float8:
		case A.int2:
		case A.int4:
		case A.int8:
		case A.numeric:
		case A.oid: return $t(t);
		case A.json:
		case A.jsonb: return en(t);
		case A.timestamp: return nn(t);
		case A.abstime:
		case A.date:
		case A.daterange:
		case A.int4range:
		case A.int8range:
		case A.money:
		case A.reltime:
		case A.text:
		case A.time:
		case A.timestamptz:
		case A.timetz:
		case A.tsrange:
		case A.tstzrange: return Zt(t);
		default: return Zt(t);
	}
}, Zt = (e) => e, Qt = (e) => {
	switch (e) {
		case "t": return !0;
		case "f": return !1;
		default: return e;
	}
}, $t = (e) => {
	if (typeof e == "string") {
		let t = parseFloat(e);
		if (!Number.isNaN(t)) return t;
	}
	return e;
}, en = (e) => {
	if (typeof e == "string") try {
		return JSON.parse(e);
	} catch {
		return e;
	}
	return e;
}, tn = (e, t) => {
	if (typeof e != "string") return e;
	let n = e.length - 1, r = e[n];
	if (e[0] === "{" && r === "}") {
		let r, i = e.slice(1, n);
		try {
			r = JSON.parse("[" + i + "]");
		} catch {
			r = i ? i.split(",") : [];
		}
		return r.map((e) => Xt(t, e));
	}
	return e;
}, nn = (e) => typeof e == "string" ? e.replace(" ", "T") : e, rn = (e) => {
	let t = new URL(e);
	return t.protocol = t.protocol.replace(/^ws/i, "http"), t.pathname = t.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), t.pathname === "" || t.pathname === "/" ? t.pathname = "/api/broadcast" : t.pathname += "/api/broadcast", t.href;
}, an = (e) => typeof e == "function" ? e : function() {
	return e;
}, on = typeof self < "u" ? self : null, sn = typeof window < "u" ? window : null, j = on || sn || globalThis, cn = "2.0.0", ln = 1e4, un = 1e3, M = {
	connecting: 0,
	open: 1,
	closing: 2,
	closed: 3
}, N = {
	closed: "closed",
	errored: "errored",
	joined: "joined",
	joining: "joining",
	leaving: "leaving"
}, P = {
	close: "phx_close",
	error: "phx_error",
	join: "phx_join",
	reply: "phx_reply",
	leave: "phx_leave"
}, dn = {
	longpoll: "longpoll",
	websocket: "websocket"
}, fn = { complete: 4 }, pn = "base64url.bearer.phx.", mn = class {
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
}, hn = class {
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
}, gn = class {
	constructor(e, t, n) {
		this.state = N.closed, this.topic = e, this.params = an(t || {}), this.socket = n, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new mn(this, P.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new hn(() => {
			this.socket.isConnected() && this.rejoin();
		}, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(this.socket.onOpen(() => {
			this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
		})), this.joinPush.receive("ok", () => {
			this.state = N.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((e) => e.send()), this.pushBuffer = [];
		}), this.joinPush.receive("error", (e) => {
			this.state = N.errored, this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, e), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
		}), this.onClose(() => {
			this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`), this.state = N.closed, this.socket.remove(this);
		}), this.onError((e) => {
			this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, e), this.isJoining() && this.joinPush.reset(), this.state = N.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
		}), this.joinPush.receive("timeout", () => {
			this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), new mn(this, P.leave, an({}), this.timeout).send(), this.state = N.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
		}), this.on(P.reply, (e, t) => {
			this.trigger(this.replyEventName(t), e);
		});
	}
	join(e = this.timeout) {
		if (this.joinedOnce) throw Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
		return this.timeout = e, this.joinedOnce = !0, this.rejoin(), this.joinPush;
	}
	teardown() {
		this.pushBuffer.forEach((e) => e.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = N.closed, this.bindings = [];
	}
	onClose(e) {
		this.on(P.close, e);
	}
	onError(e) {
		return this.on(P.error, (t) => e(t));
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
		let r = new mn(this, e, function() {
			return t;
		}, n);
		return this.canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r;
	}
	leave(e = this.timeout) {
		this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = N.leaving;
		let t = () => {
			this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(P.close, "leave");
		}, n = new mn(this, P.leave, an({}), e);
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
		this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = N.joining, this.joinPush.resend(e));
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
		return this.state === N.closed;
	}
	isErrored() {
		return this.state === N.errored;
	}
	isJoined() {
		return this.state === N.joined;
	}
	isJoining() {
		return this.state === N.joining;
	}
	isLeaving() {
		return this.state === N.leaving;
	}
}, _n = class {
	static request(e, t, n, r, i, a, o) {
		if (j.XDomainRequest) {
			let n = new j.XDomainRequest();
			return this.xdomainRequest(n, e, t, r, i, a, o);
		} else if (j.XMLHttpRequest) {
			let s = new j.XMLHttpRequest();
			return this.xhrRequest(s, e, t, n, r, i, a, o);
		} else if (j.fetch && j.AbortController) return this.fetchRequest(e, t, n, r, i, a, o);
		else throw Error("No suitable XMLHttpRequest implementation found");
	}
	static fetchRequest(e, t, n, r, i, a, o) {
		let s = {
			method: e,
			headers: n,
			body: r
		}, c = null;
		return i && (c = new AbortController(), setTimeout(() => c.abort(), i), s.signal = c.signal), j.fetch(t, s).then((e) => e.text()).then((e) => this.parseJSON(e)).then((e) => o && o(e)).catch((e) => {
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
			e.readyState === fn.complete && s && s(this.parseJSON(e.responseText));
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
}, vn = (e) => {
	let t = "", n = new Uint8Array(e), r = n.byteLength;
	for (let e = 0; e < r; e++) t += String.fromCharCode(n[e]);
	return btoa(t);
}, yn = class {
	constructor(e, t) {
		t && t.length === 2 && t[1].startsWith(pn) && (this.authToken = atob(t[1].slice(pn.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = /* @__PURE__ */ new Set(), this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {}, this.onerror = function() {}, this.onmessage = function() {}, this.onclose = function() {}, this.pollEndpoint = this.normalizeEndpoint(e), this.readyState = M.connecting, setTimeout(() => this.poll(), 0);
	}
	normalizeEndpoint(e) {
		return e.replace("ws://", "http://").replace("wss://", "https://").replace(RegExp("(.*)/" + dn.websocket), "$1/" + dn.longpoll);
	}
	endpointURL() {
		return _n.appendParams(this.pollEndpoint, { token: this.token });
	}
	closeAndRetry(e, t, n) {
		this.close(e, t, n), this.readyState = M.connecting;
	}
	ontimeout() {
		this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1);
	}
	isActive() {
		return this.readyState === M.open || this.readyState === M.connecting;
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
					this.readyState = M.open, this.onopen({}), this.poll();
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
		typeof e != "string" && (e = vn(e)), this.currentBatch ? this.currentBatch.push(e) : this.awaitingBatchAck ? this.batchBuffer.push(e) : (this.currentBatch = [e], this.currentBatchTimer = setTimeout(() => {
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
		this.readyState = M.closed;
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
		a = _n.request(e, this.endpointURL(), t, n, this.timeout, () => {
			this.reqs.delete(a), r();
		}, (e) => {
			this.reqs.delete(a), this.isActive() && i(e);
		}), this.reqs.add(a);
	}
}, bn = class e {
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
}, xn = {
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
			event: P.reply,
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
}, Sn = class {
	constructor(e, t = {}) {
		this.stateChangeCallbacks = {
			open: [],
			close: [],
			error: [],
			message: []
		}, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = t.timeout || ln, this.transport = t.transport || j.WebSocket || yn, this.conn = void 0, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = t.longPollFallbackMs, this.fallbackTimer = null;
		let n = null;
		try {
			n = j && j.sessionStorage;
		} catch {}
		this.sessionStore = t.sessionStorage || n, this.establishedConnections = 0, this.defaultEncoder = xn.encode.bind(xn), this.defaultDecoder = xn.decode.bind(xn), this.closeWasClean = !0, this.disconnecting = !1, this.binaryType = t.binaryType || "arraybuffer", this.connectClock = 1, this.pageHidden = !1, this.encode = void 0, this.decode = void 0, this.transport === yn ? (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder) : (this.encode = t.encode || this.defaultEncoder, this.decode = t.decode || this.defaultDecoder);
		let r = null;
		sn && sn.addEventListener && (sn.addEventListener("pagehide", (e) => {
			this.conn && (this.disconnect(), r = this.connectClock);
		}), sn.addEventListener("pageshow", (e) => {
			r === this.connectClock && (r = null, this.connect());
		}), sn.addEventListener("visibilitychange", () => {
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
		}), this.longpollerTimeout = t.longpollerTimeout || 2e4, this.params = an(t.params || {}), this.endPoint = `${e}/${dn.websocket}`, this.vsn = t.vsn || cn, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new hn(() => {
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
		return yn;
	}
	replaceTransport(e) {
		this.connectClock++, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn &&= (this.conn.close(), null), this.transport = e;
	}
	protocol() {
		return location.protocol.match(/^https/) ? "wss" : "ws";
	}
	endPointURL() {
		let e = _n.appendParams(_n.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
		return e.charAt(0) === "/" ? e.charAt(1) === "/" ? `${this.protocol()}:${e}` : `${this.protocol()}://${location.host}${e}` : e;
	}
	disconnect(e, t, n) {
		this.connectClock++, this.disconnecting = !0, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.teardown(() => {
			this.disconnecting = !1, e && e();
		}, t, n);
	}
	connect(e) {
		e && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = an(e)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== yn ? this.connectWithFallback(yn, this.longPollFallbackMs) : this.transportConnect());
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
			case yn: return "LongPoll";
			default: return e.name;
		}
	}
	transportConnect() {
		this.connectClock++, this.closeWasClean = !1;
		let e;
		this.authToken && (e = ["phoenix", `${pn}${btoa(this.authToken).replace(/=/g, "")}`]), this.conn = new this.transport(this.endPointURL(), e), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = () => this.onConnOpen(), this.conn.onerror = (e) => this.onConnError(e), this.conn.onmessage = (e) => this.onConnMessage(e), this.conn.onclose = (e) => this.onConnClose(e);
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
			this.triggerChanError(/* @__PURE__ */ Error("heartbeat timeout")), this.closeWasClean = !1, this.teardown(() => this.reconnectTimer.scheduleTimeout(), un, "heartbeat timeout");
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
		if (n === 5 || e.readyState === M.closed) {
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
			t.isErrored() || t.isLeaving() || t.isClosed() || t.trigger(P.error, e);
		});
	}
	connectionState() {
		switch (this.conn && this.conn.readyState) {
			case M.connecting: return "connecting";
			case M.open: return "open";
			case M.closing: return "closing";
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
		let n = new gn(e, t, this);
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
}, Cn = class e {
	constructor(t, n) {
		let r = En(n);
		this.presence = new bn(t.getChannel(), r), this.presence.onJoin((n, r, i) => {
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
		return e = Tn(e), Object.getOwnPropertyNames(e).reduce((t, n) => {
			let r = e[n];
			return t[n] = wn(r), t;
		}, {});
	}
	static onJoinPayload(e, t, n) {
		return {
			event: "join",
			key: e,
			currentPresences: Dn(t),
			newPresences: wn(n)
		};
	}
	static onLeavePayload(e, t, n) {
		return {
			event: "leave",
			key: e,
			currentPresences: Dn(t),
			leftPresences: wn(n)
		};
	}
};
function wn(e) {
	return e.metas.map((e) => (e.presence_ref = e.phx_ref, delete e.phx_ref, delete e.phx_ref_prev, e));
}
function Tn(e) {
	return JSON.parse(JSON.stringify(e));
}
function En(e) {
	return e?.events && { events: e.events };
}
function Dn(e) {
	return e?.metas ? wn(e) : [];
}
//#endregion
//#region node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js
var On;
(function(e) {
	e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave";
})(On ||= {});
var kn = class {
	get state() {
		return this.presenceAdapter.state;
	}
	constructor(e, t) {
		this.channel = e, this.presenceAdapter = new Cn(this.channel.channelAdapter, t);
	}
};
//#endregion
//#region node_modules/@supabase/realtime-js/dist/module/lib/normalizeChannelError.js
function An(e) {
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
var jn = class {
	constructor(e, t, n) {
		let r = Mn(n);
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
		return this.socket.isConnected() && this.state === k.joined;
	}
	isJoined() {
		return this.state === k.joined;
	}
	isJoining() {
		return this.state === k.joining;
	}
	isClosed() {
		return this.state === k.closed;
	}
	isLeaving() {
		return this.state === k.leaving;
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
function Mn(e) {
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
var Nn;
(function(e) {
	e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE";
})(Nn ||= {});
var Pn;
(function(e) {
	e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes", e.SYSTEM = "system";
})(Pn ||= {});
var F;
(function(e) {
	e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR";
})(F ||= {});
var Fn = class e {
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
		}, t.config), this.channelAdapter = new jn(this.socket.socketAdapter, e, this.params), this.presence = new kn(this), this._onClose(() => {
			this.socket._remove(this);
		}), this._updateFilterTransform(), this.broadcastEndpointURL = rn(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || !1, !this.private && this.params.config?.broadcast?.replay) throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
	}
	subscribe(e, t = this.timeout) {
		if (this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed()) {
			let { config: { broadcast: n, presence: r, private: i } } = this.params, a = this.bindings.postgres_changes?.map((e) => e.filter) ?? [], o = !!this.bindings[Pn.PRESENCE] && this.bindings[Pn.PRESENCE].length > 0 || this.params.config.presence?.enabled === !0, s = {}, c = {
				broadcast: n,
				presence: Object.assign(Object.assign({}, r), { enabled: o }),
				postgres_changes: a,
				private: i
			};
			this.socket.accessTokenValue && (s.access_token = this.socket.accessTokenValue), this._onError((t) => {
				e?.(F.CHANNEL_ERROR, An(t));
			}), this._onClose(() => e?.(F.CLOSED)), this.updateJoinPayload(Object.assign({ config: c }, s)), this._updateFilterMessage(), this.channelAdapter.subscribe(t).receive("ok", async ({ postgres_changes: t }) => {
				if (this.socket._isManualToken() || this.socket.setAuth(), t === void 0) {
					e?.(F.SUBSCRIBED);
					return;
				}
				this._updatePostgresBindings(t, e);
			}).receive("error", (t) => {
				this.state = k.errored;
				let n = Object.values(t).join(", ") || "error";
				e?.(F.CHANNEL_ERROR, Error(n, { cause: t }));
			}).receive("timeout", () => {
				e?.(F.TIMED_OUT);
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
				this.unsubscribe(), this.state = k.errored, n?.(F.CHANNEL_ERROR, /* @__PURE__ */ Error("mismatch between server and client bindings for postgres changes"));
				return;
			}
		}
		this.bindings.postgres_changes = a, this.state != k.errored && n && n(F.SUBSCRIBED);
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
		let r = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(), i = e === Pn.PRESENCE || e === Pn.POSTGRES_CHANGES;
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
		let { close: n, error: r, leave: i, join: a } = Gt;
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
		return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = Jt(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = Jt(e.columns, e.old_record)), t;
	}
}, In = class {
	constructor(e, t) {
		this.socket = new Sn(e, t);
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
		return this.socket.connectionState() == Kt.connecting;
	}
	isDisconnecting() {
		return this.socket.connectionState() == Kt.closing;
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
}, Ln = {
	HEARTBEAT_INTERVAL: 25e3,
	RECONNECT_DELAY: 10,
	HEARTBEAT_TIMEOUT_FALLBACK: 100
}, Rn = [
	1e3,
	2e3,
	5e3,
	1e4
], zn = 1e4;
function Bn() {
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
function Vn() {
	try {
		if (typeof globalThis < "u" && globalThis.sessionStorage) return globalThis.sessionStorage;
	} catch {}
	return Bn();
}
var Hn = "\n  addEventListener(\"message\", (e) => {\n    if (e.data.event === \"start\") {\n      setInterval(() => postMessage({ event: \"keepAlive\" }), e.data.interval);\n    }\n  });", Un = class {
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
		if (this.channels = [], this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = "", this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new qt(), this._manuallySetToken = !1, this._authPromise = null, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._pendingDisconnectTimer = null, this._disconnectOnEmptyChannelsAfterMs = 0, this._resolveFetch = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), !t?.params?.apikey) throw Error("API key is required to connect to Realtime");
		this.apiKey = t.params.apikey;
		let n = this._initializeOptions(t);
		this.socketAdapter = new In(e, n), this.httpEndpoint = rn(e), this.fetch = this._resolveFetch(t?.fetch);
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
		return this.socketAdapter.connectionState() || Kt.closed;
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
			let n = new Fn(`realtime:${e}`, t, this);
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
				version: Bt
			};
			t && e.updateJoinPayload(n), e.joinedOnce && e.channelAdapter.isJoined() && e.channelAdapter.push(Gt.access_token, { access_token: t });
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
			let e = new Blob([Hn], { type: "application/javascript" });
			t = URL.createObjectURL(e);
		}
		return t;
	}
	_initializeOptions(e) {
		this.worker = e?.worker ?? !1, this.accessToken = e?.accessToken ?? null;
		let t = {};
		t.timeout = e?.timeout ?? Wt, t.heartbeatIntervalMs = e?.heartbeatIntervalMs ?? Ln.HEARTBEAT_INTERVAL, this._disconnectOnEmptyChannelsAfterMs = e?.disconnectOnEmptyChannelsAfterMs ?? 2 * (e?.heartbeatIntervalMs ?? Ln.HEARTBEAT_INTERVAL), t.transport = e?.transport ?? zt.getWebSocketConstructor(), t.params = e?.params, t.logger = e?.logger, t.heartbeatCallback = this._wrapHeartbeatCallback(e?.heartbeatCallback), t.sessionStorage = e?.sessionStorage ?? Vn(), t.reconnectAfterMs = e?.reconnectAfterMs ?? ((e) => Rn[e - 1] || zn);
		let n, r, i = e?.vsn ?? Ut;
		switch (i) {
			case Vt:
				n = (e, t) => t(JSON.stringify(e)), r = (e, t) => t(JSON.parse(e));
				break;
			case Ht:
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
}, Wn = class extends Error {
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
function Gn(e, t, n) {
	let r = new URL(t, e);
	if (n) for (let [e, t] of Object.entries(n)) t !== void 0 && r.searchParams.set(e, t);
	return r.toString();
}
async function Kn(e) {
	return !e || e.type === "none" ? {} : e.type === "bearer" ? { Authorization: `Bearer ${e.token}` } : e.type === "header" ? { [e.name]: e.value } : e.type === "custom" ? await e.getHeaders() : {};
}
function qn(e) {
	let t = e.fetchImpl ?? globalThis.fetch;
	return { async request({ method: n, path: r, query: i, body: a, headers: o }) {
		let s = Gn(e.baseUrl, r, i), c = await Kn(e.auth), l = await t(s, {
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
			throw new Wn(t?.message ?? `Request failed with status ${l.status}`, {
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
function Jn(e) {
	return e.join("");
}
var Yn = class {
	constructor(e, t = "") {
		this.client = e, this.prefix = t;
	}
	async listNamespaces(e) {
		let t = e ? { parent: Jn(e.namespace) } : void 0;
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
			path: `${this.prefix}/namespaces/${Jn(e.namespace)}`
		});
	}
	async loadNamespaceMetadata(e) {
		return { properties: (await this.client.request({
			method: "GET",
			path: `${this.prefix}/namespaces/${Jn(e.namespace)}`
		})).data.properties };
	}
	async namespaceExists(e) {
		try {
			return await this.client.request({
				method: "HEAD",
				path: `${this.prefix}/namespaces/${Jn(e.namespace)}`
			}), !0;
		} catch (e) {
			if (e instanceof Wn && e.status === 404) return !1;
			throw e;
		}
	}
	async createNamespaceIfNotExists(e, t) {
		try {
			return await this.createNamespace(e, t);
		} catch (e) {
			if (e instanceof Wn && e.status === 409) return;
			throw e;
		}
	}
};
function Xn(e) {
	return e.join("");
}
var Zn = class {
	constructor(e, t = "", n) {
		this.client = e, this.prefix = t, this.accessDelegation = n;
	}
	async listTables(e) {
		return (await this.client.request({
			method: "GET",
			path: `${this.prefix}/namespaces/${Xn(e.namespace)}/tables`
		})).data.identifiers;
	}
	async createTable(e, t) {
		let n = {};
		return this.accessDelegation && (n["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
			method: "POST",
			path: `${this.prefix}/namespaces/${Xn(e.namespace)}/tables`,
			body: t,
			headers: n
		})).data.metadata;
	}
	async updateTable(e, t) {
		let n = await this.client.request({
			method: "POST",
			path: `${this.prefix}/namespaces/${Xn(e.namespace)}/tables/${e.name}`,
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
			path: `${this.prefix}/namespaces/${Xn(e.namespace)}/tables/${e.name}`,
			query: { purgeRequested: String(t?.purge ?? !1) }
		});
	}
	async loadTable(e) {
		let t = {};
		return this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
			method: "GET",
			path: `${this.prefix}/namespaces/${Xn(e.namespace)}/tables/${e.name}`,
			headers: t
		})).data.metadata;
	}
	async tableExists(e) {
		let t = {};
		this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
		try {
			return await this.client.request({
				method: "HEAD",
				path: `${this.prefix}/namespaces/${Xn(e.namespace)}/tables/${e.name}`,
				headers: t
			}), !0;
		} catch (e) {
			if (e instanceof Wn && e.status === 404) return !1;
			throw e;
		}
	}
	async createTableIfNotExists(e, t) {
		try {
			return await this.createTable(e, t);
		} catch (n) {
			if (n instanceof Wn && n.status === 409) return await this.loadTable({
				namespace: e.namespace,
				name: t.name
			});
			throw n;
		}
	}
}, Qn = class {
	constructor(e) {
		let t = "v1";
		e.catalogName && (t += `/${e.catalogName}`);
		let n = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
		this.client = qn({
			baseUrl: n,
			auth: e.auth,
			fetchImpl: e.fetch
		}), this.accessDelegation = e.accessDelegation?.join(","), this.namespaceOps = new Yn(this.client, t), this.tableOps = new Zn(this.client, t, this.accessDelegation);
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
function $n(e) {
	"@babel/helpers - typeof";
	return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, $n(e);
}
function er(e, t) {
	if ($n(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if ($n(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function tr(e) {
	var t = er(e, "string");
	return $n(t) == "symbol" ? t : t + "";
}
function nr(e, t, n) {
	return (t = tr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function rr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function I(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? rr(Object(n), !0).forEach(function(t) {
			nr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var ir = class extends Error {
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
function ar(e) {
	return typeof e == "object" && !!e && "__isStorageError" in e;
}
var or = class extends ir {
	constructor(e, t, n, r = "storage") {
		super(e, r, t, n), this.name = r === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = t, this.statusCode = n;
	}
	toJSON() {
		return I({}, super.toJSON());
	}
}, sr = class extends ir {
	constructor(e, t, n = "storage") {
		super(e, n), this.name = n === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = t;
	}
};
function cr(e, t, n) {
	let r = I({}, e), i = t.toLowerCase();
	for (let e of Object.keys(r)) e.toLowerCase() === i && delete r[e];
	return r[i] = n, r;
}
function lr(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n.toLowerCase()] = r;
	return t;
}
var ur = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), dr = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, fr = (e) => {
	if (Array.isArray(e)) return e.map((e) => fr(e));
	if (typeof e == "function" || e !== Object(e)) return e;
	let t = {};
	return Object.entries(e).forEach(([e, n]) => {
		let r = e.replace(/([-_][a-z])/gi, (e) => e.toUpperCase().replace(/[-_]/g, ""));
		t[r] = fr(n);
	}), t;
}, pr = (e) => !e || typeof e != "string" || e.length === 0 || e.length > 100 || e.trim() !== e || e.includes("/") || e.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e), mr = (e) => {
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
}, hr = async (e, t, n, r) => {
	if (typeof e == "object" && e && "json" in e && typeof e.json == "function") {
		let n = e, i = parseInt(String(n.status), 10);
		Number.isFinite(i) || (i = 500), n.json().then((e) => {
			let n = e?.statusCode || e?.code || i + "";
			t(new or(mr(e), i, n, r));
		}).catch(() => {
			let e = i + "";
			t(new or(n.statusText || `HTTP ${i} error`, i, e, r));
		});
	} else t(new sr(mr(e), e, r));
}, gr = (e, t, n, r) => {
	let i = {
		method: e,
		headers: t?.headers || {}
	};
	if (e === "GET" || e === "HEAD" || !r) return I(I({}, i), n);
	if (dr(r)) {
		let e = t?.headers || {}, n;
		for (let [t, r] of Object.entries(e)) t.toLowerCase() === "content-type" && (n = r);
		i.headers = cr(e, "Content-Type", n ?? "application/json"), i.body = JSON.stringify(r);
	} else i.body = r;
	return t?.duplex && (i.duplex = t.duplex), I(I({}, i), n);
};
async function _r(e, t, n, r, i, a, o) {
	return new Promise((s, c) => {
		e(n, gr(t, r, i, a)).then((e) => {
			if (!e.ok) throw e;
			if (r?.noResolveJson) return e;
			if (o === "vectors") {
				let t = e.headers.get("content-type");
				if (e.headers.get("content-length") === "0" || e.status === 204 || !t || !t.includes("application/json")) return {};
			}
			return e.json();
		}).then((e) => s(e)).catch((e) => hr(e, c, r, o));
	});
}
function vr(e = "storage") {
	return {
		get: async (t, n, r, i) => _r(t, "GET", n, r, i, void 0, e),
		post: async (t, n, r, i, a) => _r(t, "POST", n, i, a, r, e),
		put: async (t, n, r, i, a) => _r(t, "PUT", n, i, a, r, e),
		head: async (t, n, r, i) => _r(t, "HEAD", n, I(I({}, r), {}, { noResolveJson: !0 }), i, void 0, e),
		remove: async (t, n, r, i, a) => _r(t, "DELETE", n, i, a, r, e)
	};
}
var { get: yr, post: L, put: br, head: xr, remove: Sr } = vr("storage"), R = vr("vectors"), Cr = class {
	constructor(e, t = {}, n, r = "storage") {
		this.shouldThrowOnError = !1, this.url = e, this.headers = lr(t), this.fetch = ur(n), this.namespace = r;
	}
	throwOnError() {
		return this.shouldThrowOnError = !0, this;
	}
	setHeader(e, t) {
		return this.headers = cr(this.headers, e, t), this;
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
			if (ar(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
}, wr = class {
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
			if (ar(t)) return {
				data: null,
				error: t
			};
			throw t;
		}
	}
}, Tr = Symbol.toStringTag, Er = class {
	constructor(e, t) {
		this.downloadFn = e, this.shouldThrowOnError = t, this[Tr] = "BlobDownloadBuilder", this.promise = null;
	}
	asStream() {
		return new wr(this.downloadFn, this.shouldThrowOnError);
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
			if (ar(t)) return {
				data: null,
				error: t
			};
			throw t;
		}
	}
}, Dr = {
	limit: 100,
	offset: 0,
	sortBy: {
		column: "name",
		order: "asc"
	}
}, Or = {
	cacheControl: "3600",
	contentType: "text/plain;charset=UTF-8",
	upsert: !1
}, kr = class extends Cr {
	constructor(e, t = {}, n, r) {
		super(e, t, r, "storage"), this.bucketId = n;
	}
	async uploadOrUpdate(e, t, n, r) {
		var i = this;
		return i.handleOperation(async () => {
			let a, o = I(I({}, Or), r), s = I(I({}, i.headers), e === "POST" && { "x-upsert": String(o.upsert) }), c = o.metadata;
			if (typeof Blob < "u" && n instanceof Blob ? (a = new FormData(), a.append("cacheControl", o.cacheControl), c && a.append("metadata", i.encodeMetadata(c)), a.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (a = n, a.has("cacheControl") || a.append("cacheControl", o.cacheControl), c && !a.has("metadata") && a.append("metadata", i.encodeMetadata(c))) : (a = n, s["cache-control"] = `max-age=${o.cacheControl}`, s["content-type"] = o.contentType, c && (s["x-metadata"] = i.toBase64(i.encodeMetadata(c))), (typeof ReadableStream < "u" && a instanceof ReadableStream || a && typeof a == "object" && "pipe" in a && typeof a.pipe == "function") && !o.duplex && (o.duplex = "half")), r?.headers) for (let [e, t] of Object.entries(r.headers)) s = cr(s, e, t);
			let l = i._removeEmptyFolders(t), u = i._getFinalPath(l), d = await (e == "PUT" ? br : L)(i.fetch, `${i.url}/object/${u}`, a, I({ headers: s }, o?.duplex ? { duplex: o.duplex } : {}));
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
			let e, t = I(I({}, Or), r), o = I(I({}, i.headers), { "x-upsert": String(t.upsert) }), c = t.metadata;
			if (typeof Blob < "u" && n instanceof Blob ? (e = new FormData(), e.append("cacheControl", t.cacheControl), c && e.append("metadata", i.encodeMetadata(c)), e.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (e = n, e.has("cacheControl") || e.append("cacheControl", t.cacheControl), c && !e.has("metadata") && e.append("metadata", i.encodeMetadata(c))) : (e = n, o["cache-control"] = `max-age=${t.cacheControl}`, o["content-type"] = t.contentType, c && (o["x-metadata"] = i.toBase64(i.encodeMetadata(c))), (typeof ReadableStream < "u" && e instanceof ReadableStream || e && typeof e == "object" && "pipe" in e && typeof e.pipe == "function") && !t.duplex && (t.duplex = "half")), r?.headers) for (let [e, t] of Object.entries(r.headers)) o = cr(o, e, t);
			return {
				path: a,
				fullPath: (await br(i.fetch, s.toString(), e, I({ headers: o }, t?.duplex ? { duplex: t.duplex } : {}))).Key
			};
		});
	}
	async createSignedUploadUrl(e, t) {
		var n = this;
		return n.handleOperation(async () => {
			let r = n._getFinalPath(e), i = I({}, n.headers);
			t?.upsert && (i["x-upsert"] = "true");
			let a = await L(n.fetch, `${n.url}/object/upload/sign/${r}`, {}, { headers: i }), o = new URL(n.url + a.url), s = o.searchParams.get("token");
			if (!s) throw new ir("No token returned by API");
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
		return r.handleOperation(async () => await L(r.fetch, `${r.url}/object/move`, {
			bucketId: r.bucketId,
			sourceKey: e,
			destinationKey: t,
			destinationBucket: n?.destinationBucket
		}, { headers: r.headers }));
	}
	async copy(e, t, n) {
		var r = this;
		return r.handleOperation(async () => ({ path: (await L(r.fetch, `${r.url}/object/copy`, {
			bucketId: r.bucketId,
			sourceKey: e,
			destinationKey: t,
			destinationBucket: n?.destinationBucket
		}, { headers: r.headers })).Key }));
	}
	async createSignedUrl(e, t, n) {
		var r = this;
		return r.handleOperation(async () => {
			let i = r._getFinalPath(e), a = typeof n?.transform == "object" && n.transform !== null && Object.keys(n.transform).length > 0, o = await L(r.fetch, `${r.url}/object/sign/${i}`, I({ expiresIn: t }, a ? { transform: n.transform } : {}), { headers: r.headers }), s = new URLSearchParams();
			n?.download && s.set("download", n.download === !0 ? "" : n.download), n?.cacheNonce != null && s.set("cacheNonce", String(n.cacheNonce));
			let c = s.toString();
			return { signedUrl: encodeURI(`${r.url}${o.signedURL}${c ? `&${c}` : ""}`) };
		});
	}
	async createSignedUrls(e, t, n) {
		var r = this;
		return r.handleOperation(async () => {
			let i = await L(r.fetch, `${r.url}/object/sign/${r.bucketId}`, {
				expiresIn: t,
				paths: e
			}, { headers: r.headers }), a = new URLSearchParams();
			n?.download && a.set("download", n.download === !0 ? "" : n.download), n?.cacheNonce != null && a.set("cacheNonce", String(n.cacheNonce));
			let o = a.toString();
			return i.map((e) => I(I({}, e), {}, { signedUrl: e.signedURL ? encodeURI(`${r.url}${e.signedURL}${o ? `&${o}` : ""}`) : null }));
		});
	}
	download(e, t, n) {
		let r = typeof t?.transform == "object" && t.transform !== null && Object.keys(t.transform).length > 0 ? "render/image/authenticated" : "object", i = new URLSearchParams();
		t?.transform && this.applyTransformOptsToQuery(i, t.transform), t?.cacheNonce != null && i.set("cacheNonce", String(t.cacheNonce));
		let a = i.toString(), o = this._getFinalPath(e);
		return new Er(() => yr(this.fetch, `${this.url}/${r}/${o}${a ? `?${a}` : ""}`, {
			headers: this.headers,
			noResolveJson: !0
		}, n), this.shouldThrowOnError);
	}
	async info(e) {
		var t = this;
		let n = t._getFinalPath(e);
		return t.handleOperation(async () => fr(await yr(t.fetch, `${t.url}/object/info/${n}`, { headers: t.headers })));
	}
	async exists(e) {
		var t = this;
		let n = t._getFinalPath(e);
		try {
			return await xr(t.fetch, `${t.url}/object/${n}`, { headers: t.headers }), {
				data: !0,
				error: null
			};
		} catch (e) {
			if (t.shouldThrowOnError) throw e;
			if (ar(e)) {
				let t = e instanceof or ? e.status : e instanceof sr ? e.originalError?.status : void 0;
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
		return t.handleOperation(async () => await Sr(t.fetch, `${t.url}/object/${t.bucketId}`, { prefixes: e }, { headers: t.headers }));
	}
	async list(e, t, n) {
		var r = this;
		return r.handleOperation(async () => {
			let i = I(I(I({}, Dr), t), {}, { prefix: e || "" });
			return await L(r.fetch, `${r.url}/object/list/${r.bucketId}`, i, { headers: r.headers }, n);
		});
	}
	async listV2(e, t) {
		var n = this;
		return n.handleOperation(async () => {
			let r = I({}, e);
			return await L(n.fetch, `${n.url}/object/list-v2/${n.bucketId}`, r, { headers: n.headers }, t);
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
}, Ar = { "X-Client-Info": "storage-js/2.105.4" }, jr = class extends Cr {
	constructor(e, t = {}, n, r) {
		let i = new URL(e);
		r?.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase."));
		let a = i.href.replace(/\/$/, ""), o = I(I({}, Ar), t);
		super(a, o, n, "storage");
	}
	async listBuckets(e) {
		var t = this;
		return t.handleOperation(async () => {
			let n = t.listBucketOptionsToQueryString(e);
			return await yr(t.fetch, `${t.url}/bucket${n}`, { headers: t.headers });
		});
	}
	async getBucket(e) {
		var t = this;
		return t.handleOperation(async () => await yr(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }));
	}
	async createBucket(e, t = { public: !1 }) {
		var n = this;
		return n.handleOperation(async () => await L(n.fetch, `${n.url}/bucket`, {
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
		return n.handleOperation(async () => await br(n.fetch, `${n.url}/bucket/${e}`, {
			id: e,
			name: e,
			public: t.public,
			file_size_limit: t.fileSizeLimit,
			allowed_mime_types: t.allowedMimeTypes
		}, { headers: n.headers }));
	}
	async emptyBucket(e) {
		var t = this;
		return t.handleOperation(async () => await L(t.fetch, `${t.url}/bucket/${e}/empty`, {}, { headers: t.headers }));
	}
	async deleteBucket(e) {
		var t = this;
		return t.handleOperation(async () => await Sr(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
	}
	listBucketOptionsToQueryString(e) {
		let t = {};
		return e && ("limit" in e && (t.limit = String(e.limit)), "offset" in e && (t.offset = String(e.offset)), e.search && (t.search = e.search), e.sortColumn && (t.sortColumn = e.sortColumn), e.sortOrder && (t.sortOrder = e.sortOrder)), Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : "";
	}
}, Mr = class extends Cr {
	constructor(e, t = {}, n) {
		let r = e.replace(/\/$/, ""), i = I(I({}, Ar), t);
		super(r, i, n, "storage");
	}
	async createBucket(e) {
		var t = this;
		return t.handleOperation(async () => await L(t.fetch, `${t.url}/bucket`, { name: e }, { headers: t.headers }));
	}
	async listBuckets(e) {
		var t = this;
		return t.handleOperation(async () => {
			let n = new URLSearchParams();
			e?.limit !== void 0 && n.set("limit", e.limit.toString()), e?.offset !== void 0 && n.set("offset", e.offset.toString()), e?.sortColumn && n.set("sortColumn", e.sortColumn), e?.sortOrder && n.set("sortOrder", e.sortOrder), e?.search && n.set("search", e.search);
			let r = n.toString(), i = r ? `${t.url}/bucket?${r}` : `${t.url}/bucket`;
			return await yr(t.fetch, i, { headers: t.headers });
		});
	}
	async deleteBucket(e) {
		var t = this;
		return t.handleOperation(async () => await Sr(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }));
	}
	from(e) {
		var t = this;
		if (!pr(e)) throw new ir("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
		let n = new Qn({
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
}, Nr = class extends Cr {
	constructor(e, t = {}, n) {
		let r = e.replace(/\/$/, ""), i = I(I({}, Ar), {}, { "Content-Type": "application/json" }, t);
		super(r, i, n, "vectors");
	}
	async createIndex(e) {
		var t = this;
		return t.handleOperation(async () => await R.post(t.fetch, `${t.url}/CreateIndex`, e, { headers: t.headers }) || {});
	}
	async getIndex(e, t) {
		var n = this;
		return n.handleOperation(async () => await R.post(n.fetch, `${n.url}/GetIndex`, {
			vectorBucketName: e,
			indexName: t
		}, { headers: n.headers }));
	}
	async listIndexes(e) {
		var t = this;
		return t.handleOperation(async () => await R.post(t.fetch, `${t.url}/ListIndexes`, e, { headers: t.headers }));
	}
	async deleteIndex(e, t) {
		var n = this;
		return n.handleOperation(async () => await R.post(n.fetch, `${n.url}/DeleteIndex`, {
			vectorBucketName: e,
			indexName: t
		}, { headers: n.headers }) || {});
	}
}, Pr = class extends Cr {
	constructor(e, t = {}, n) {
		let r = e.replace(/\/$/, ""), i = I(I({}, Ar), {}, { "Content-Type": "application/json" }, t);
		super(r, i, n, "vectors");
	}
	async putVectors(e) {
		var t = this;
		if (e.vectors.length < 1 || e.vectors.length > 500) throw Error("Vector batch size must be between 1 and 500 items");
		return t.handleOperation(async () => await R.post(t.fetch, `${t.url}/PutVectors`, e, { headers: t.headers }) || {});
	}
	async getVectors(e) {
		var t = this;
		return t.handleOperation(async () => await R.post(t.fetch, `${t.url}/GetVectors`, e, { headers: t.headers }));
	}
	async listVectors(e) {
		var t = this;
		if (e.segmentCount !== void 0) {
			if (e.segmentCount < 1 || e.segmentCount > 16) throw Error("segmentCount must be between 1 and 16");
			if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)) throw Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`);
		}
		return t.handleOperation(async () => await R.post(t.fetch, `${t.url}/ListVectors`, e, { headers: t.headers }));
	}
	async queryVectors(e) {
		var t = this;
		return t.handleOperation(async () => await R.post(t.fetch, `${t.url}/QueryVectors`, e, { headers: t.headers }));
	}
	async deleteVectors(e) {
		var t = this;
		if (e.keys.length < 1 || e.keys.length > 500) throw Error("Keys batch size must be between 1 and 500 items");
		return t.handleOperation(async () => await R.post(t.fetch, `${t.url}/DeleteVectors`, e, { headers: t.headers }) || {});
	}
}, Fr = class extends Cr {
	constructor(e, t = {}, n) {
		let r = e.replace(/\/$/, ""), i = I(I({}, Ar), {}, { "Content-Type": "application/json" }, t);
		super(r, i, n, "vectors");
	}
	async createBucket(e) {
		var t = this;
		return t.handleOperation(async () => await R.post(t.fetch, `${t.url}/CreateVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
	}
	async getBucket(e) {
		var t = this;
		return t.handleOperation(async () => await R.post(t.fetch, `${t.url}/GetVectorBucket`, { vectorBucketName: e }, { headers: t.headers }));
	}
	async listBuckets(e = {}) {
		var t = this;
		return t.handleOperation(async () => await R.post(t.fetch, `${t.url}/ListVectorBuckets`, e, { headers: t.headers }));
	}
	async deleteBucket(e) {
		var t = this;
		return t.handleOperation(async () => await R.post(t.fetch, `${t.url}/DeleteVectorBucket`, { vectorBucketName: e }, { headers: t.headers }) || {});
	}
}, Ir = class extends Fr {
	constructor(e, t = {}) {
		super(e, t.headers || {}, t.fetch);
	}
	from(e) {
		return new Lr(this.url, this.headers, e, this.fetch);
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
}, Lr = class extends Nr {
	constructor(e, t, n, r) {
		super(e, t, r), this.vectorBucketName = n;
	}
	async createIndex(e) {
		var t = () => super.createIndex, n = this;
		return t().call(n, I(I({}, e), {}, { vectorBucketName: n.vectorBucketName }));
	}
	async listIndexes(e = {}) {
		var t = () => super.listIndexes, n = this;
		return t().call(n, I(I({}, e), {}, { vectorBucketName: n.vectorBucketName }));
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
		return new Rr(this.url, this.headers, this.vectorBucketName, e, this.fetch);
	}
}, Rr = class extends Pr {
	constructor(e, t, n, r, i) {
		super(e, t, i), this.vectorBucketName = n, this.indexName = r;
	}
	async putVectors(e) {
		var t = () => super.putVectors, n = this;
		return t().call(n, I(I({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
	async getVectors(e) {
		var t = () => super.getVectors, n = this;
		return t().call(n, I(I({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
	async listVectors(e = {}) {
		var t = () => super.listVectors, n = this;
		return t().call(n, I(I({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
	async queryVectors(e) {
		var t = () => super.queryVectors, n = this;
		return t().call(n, I(I({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
	async deleteVectors(e) {
		var t = () => super.deleteVectors, n = this;
		return t().call(n, I(I({}, e), {}, {
			vectorBucketName: n.vectorBucketName,
			indexName: n.indexName
		}));
	}
}, zr = class extends jr {
	constructor(e, t = {}, n, r) {
		super(e, t, n, r);
	}
	from(e) {
		return new kr(this.url, this.headers, e, this.fetch);
	}
	get vectors() {
		return new Ir(this.url + "/vector", {
			headers: this.headers,
			fetch: this.fetch
		});
	}
	get analytics() {
		return new Mr(this.url + "/iceberg", this.headers, this.fetch);
	}
}, Br = "2.105.4", Vr = 30 * 1e3, Hr = 3 * Vr, Ur = "http://localhost:9999", Wr = "supabase.auth.token", Gr = { "X-Client-Info": `gotrue-js/${Br}` }, Kr = "X-Supabase-Api-Version", qr = { "2024-01-01": {
	timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
	name: "2024-01-01"
} }, Jr = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Yr = class extends Error {
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
function z(e) {
	return typeof e == "object" && !!e && "__isAuthError" in e;
}
var Xr = class extends Yr {
	constructor(e, t, n) {
		super(e, t, n), this.name = "AuthApiError", this.status = t, this.code = n;
	}
};
function Zr(e) {
	return z(e) && e.name === "AuthApiError";
}
var B = class extends Yr {
	constructor(e, t) {
		super(e), this.name = "AuthUnknownError", this.originalError = t;
	}
}, V = class extends Yr {
	constructor(e, t, n, r) {
		super(e, n, r), this.name = t, this.status = n;
	}
}, H = class extends V {
	constructor() {
		super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
	}
};
function Qr(e) {
	return z(e) && e.name === "AuthSessionMissingError";
}
var $r = class extends V {
	constructor() {
		super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
	}
}, ei = class extends V {
	constructor(e) {
		super(e, "AuthInvalidCredentialsError", 400, void 0);
	}
}, ti = class extends V {
	constructor(e, t = null) {
		super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t;
	}
	toJSON() {
		return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
	}
};
function ni(e) {
	return z(e) && e.name === "AuthImplicitGrantRedirectError";
}
var ri = class extends V {
	constructor(e, t = null) {
		super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t;
	}
	toJSON() {
		return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
	}
}, ii = class extends V {
	constructor() {
		super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
	}
}, ai = class extends V {
	constructor(e, t) {
		super(e, "AuthRetryableFetchError", t, void 0);
	}
};
function oi(e) {
	return z(e) && e.name === "AuthRetryableFetchError";
}
var si = class extends V {
	constructor(e, t, n) {
		super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = n;
	}
	toJSON() {
		return Object.assign(Object.assign({}, super.toJSON()), { reasons: this.reasons });
	}
}, ci = class extends V {
	constructor(e) {
		super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
	}
}, li = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), ui = " 	\n\r=".split(""), di = (() => {
	let e = Array(128);
	for (let t = 0; t < e.length; t += 1) e[t] = -1;
	for (let t = 0; t < ui.length; t += 1) e[ui[t].charCodeAt(0)] = -2;
	for (let t = 0; t < li.length; t += 1) e[li[t].charCodeAt(0)] = t;
	return e;
})();
function fi(e, t, n) {
	if (e !== null) for (t.queue = t.queue << 8 | e, t.queuedBits += 8; t.queuedBits >= 6;) n(li[t.queue >> t.queuedBits - 6 & 63]), t.queuedBits -= 6;
	else if (t.queuedBits > 0) for (t.queue <<= 6 - t.queuedBits, t.queuedBits = 6; t.queuedBits >= 6;) n(li[t.queue >> t.queuedBits - 6 & 63]), t.queuedBits -= 6;
}
function pi(e, t, n) {
	let r = di[e];
	if (r > -1) for (t.queue = t.queue << 6 | r, t.queuedBits += 6; t.queuedBits >= 8;) n(t.queue >> t.queuedBits - 8 & 255), t.queuedBits -= 8;
	else if (r === -2) return;
	else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
}
function mi(e) {
	let t = [], n = (e) => {
		t.push(String.fromCodePoint(e));
	}, r = {
		utf8seq: 0,
		codepoint: 0
	}, i = {
		queue: 0,
		queuedBits: 0
	}, a = (e) => {
		_i(e, r, n);
	};
	for (let t = 0; t < e.length; t += 1) pi(e.charCodeAt(t), i, a);
	return t.join("");
}
function hi(e, t) {
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
function gi(e, t) {
	for (let n = 0; n < e.length; n += 1) {
		let r = e.charCodeAt(n);
		if (r > 55295 && r <= 56319) {
			let t = (r - 55296) * 1024 & 65535;
			r = (e.charCodeAt(n + 1) - 56320 & 65535 | t) + 65536, n += 1;
		}
		hi(r, t);
	}
}
function _i(e, t, n) {
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
function vi(e) {
	let t = [], n = {
		queue: 0,
		queuedBits: 0
	}, r = (e) => {
		t.push(e);
	};
	for (let t = 0; t < e.length; t += 1) pi(e.charCodeAt(t), n, r);
	return new Uint8Array(t);
}
function yi(e) {
	let t = [];
	return gi(e, (e) => t.push(e)), new Uint8Array(t);
}
function bi(e) {
	let t = [], n = {
		queue: 0,
		queuedBits: 0
	}, r = (e) => {
		t.push(e);
	};
	return e.forEach((e) => fi(e, n, r)), fi(null, n, r), t.join("");
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/helpers.js
function xi(e) {
	return Math.round(Date.now() / 1e3) + e;
}
function Si() {
	return Symbol("auth-callback");
}
var U = () => typeof window < "u" && typeof document < "u", Ci = {
	tested: !1,
	writable: !1
}, wi = () => {
	if (!U()) return !1;
	try {
		if (typeof globalThis.localStorage != "object") return !1;
	} catch {
		return !1;
	}
	if (Ci.tested) return Ci.writable;
	let e = `lswt-${Math.random()}${Math.random()}`;
	try {
		globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), Ci.tested = !0, Ci.writable = !0;
	} catch {
		Ci.tested = !0, Ci.writable = !1;
	}
	return Ci.writable;
};
function Ti(e) {
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
var Ei = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), Di = (e) => typeof e == "object" && !!e && "status" in e && "ok" in e && "json" in e && typeof e.json == "function", Oi = async (e, t, n) => {
	await e.setItem(t, JSON.stringify(n));
}, ki = async (e, t) => {
	let n = await e.getItem(t);
	if (!n) return null;
	try {
		return JSON.parse(n);
	} catch {
		return null;
	}
}, W = async (e, t) => {
	await e.removeItem(t);
}, Ai = class e {
	constructor() {
		this.promise = new e.promiseConstructor((e, t) => {
			this.resolve = e, this.reject = t;
		});
	}
};
Ai.promiseConstructor = Promise;
function ji(e) {
	let t = e.split(".");
	if (t.length !== 3) throw new ci("Invalid JWT structure");
	for (let e = 0; e < t.length; e++) if (!Jr.test(t[e])) throw new ci("JWT not in base64url format");
	return {
		header: JSON.parse(mi(t[0])),
		payload: JSON.parse(mi(t[1])),
		signature: vi(t[2]),
		raw: {
			header: t[0],
			payload: t[1]
		}
	};
}
async function Mi(e) {
	return await new Promise((t) => {
		setTimeout(() => t(null), e);
	});
}
function Ni(e, t) {
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
function Pi(e) {
	return ("0" + e.toString(16)).substr(-2);
}
function Fi() {
	let e = new Uint32Array(56);
	if (typeof crypto > "u") {
		let e = "";
		for (let t = 0; t < 56; t++) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~".charAt(Math.floor(Math.random() * 66));
		return e;
	}
	return crypto.getRandomValues(e), Array.from(e, Pi).join("");
}
async function Ii(e) {
	let t = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", t), r = new Uint8Array(n);
	return Array.from(r).map((e) => String.fromCharCode(e)).join("");
}
async function Li(e) {
	if (!(typeof crypto < "u" && crypto.subtle !== void 0 && typeof TextEncoder < "u")) return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
	let t = await Ii(e);
	return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Ri(e, t, n = !1) {
	let r = Fi(), i = r;
	n && (i += "/recovery"), await Oi(e, `${t}-code-verifier`, i);
	let a = await Li(r);
	return [a, r === a ? "plain" : "s256"];
}
var zi = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Bi(e) {
	let t = e.headers.get(Kr);
	if (!t || !t.match(zi)) return null;
	try {
		return /* @__PURE__ */ new Date(`${t}T00:00:00.0Z`);
	} catch {
		return null;
	}
}
function Vi(e) {
	if (!e) throw Error("Missing exp claim");
	if (e <= Math.floor(Date.now() / 1e3)) throw Error("JWT has expired");
}
function Hi(e) {
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
var Ui = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function G(e) {
	if (!Ui.test(e)) throw Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function K(e) {
	if (!e.passkey) throw Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).");
}
function Wi() {
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
function Gi(e, t) {
	return new Proxy(e, { get: (e, n, r) => {
		if (n === "__isInsecureUserWarningProxy") return !0;
		if (typeof n == "symbol") {
			let t = n.toString();
			if (t === "Symbol(Symbol.toPrimitive)" || t === "Symbol(Symbol.toStringTag)" || t === "Symbol(util.inspect.custom)" || t === "Symbol(nodejs.util.inspect.custom)") return Reflect.get(e, n, r);
		}
		return !t.value && typeof n == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), t.value = !0), Reflect.get(e, n, r);
	} });
}
function Ki(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/fetch.js
var qi = (e) => {
	if (typeof e == "object" && e) {
		let t = e;
		if (typeof t.msg == "string") return t.msg;
		if (typeof t.message == "string") return t.message;
		if (typeof t.error_description == "string") return t.error_description;
		if (typeof t.error == "string") return t.error;
	}
	return JSON.stringify(e);
}, Ji = [
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
async function Yi(e) {
	if (!Di(e)) throw new ai(qi(e), 0);
	if (Ji.includes(e.status)) throw new ai(qi(e), e.status);
	let t;
	try {
		t = await e.json();
	} catch (e) {
		throw new B(qi(e), e);
	}
	let n, r = Bi(e);
	if (r && r.getTime() >= qr["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? n = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (n = t.error_code), !n) {
		if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((e, t) => e && typeof t == "string", !0)) throw new si(qi(t), e.status, t.weak_password.reasons);
	} else if (n === "weak_password") throw new si(qi(t), e.status, t.weak_password?.reasons || []);
	else if (n === "session_not_found") throw new H();
	throw new Xr(qi(t), e.status || 500, n);
}
var Xi = (e, t, n, r) => {
	let i = {
		method: e,
		headers: t?.headers || {}
	};
	return e === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, t?.headers), i.body = JSON.stringify(r), Object.assign(Object.assign({}, i), n));
};
async function q(e, t, n, r) {
	let i = Object.assign({}, r?.headers);
	i["X-Supabase-Api-Version"] || (i[Kr] = qr["2024-01-01"].name), r?.jwt && (i.Authorization = `Bearer ${r.jwt}`);
	let a = r?.query ?? {};
	r?.redirectTo && (a.redirect_to = r.redirectTo);
	let o = await Zi(e, t, n + (Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : ""), {
		headers: i,
		noResolveJson: r?.noResolveJson
	}, {}, r?.body);
	return r?.xform ? r?.xform(o) : {
		data: Object.assign({}, o),
		error: null
	};
}
async function Zi(e, t, n, r, i, a) {
	let o = Xi(t, r, i, a), s;
	try {
		s = await e(n, Object.assign({}, o));
	} catch (e) {
		throw console.error(e), new ai(qi(e), 0);
	}
	if (s.ok || await Yi(s), r?.noResolveJson) return s;
	try {
		return await s.json();
	} catch (e) {
		await Yi(e);
	}
}
function J(e) {
	let t = null;
	na(e) && (t = Object.assign({}, e), e.expires_at || (t.expires_at = xi(e.expires_in)));
	let n = e.user ?? e;
	return {
		data: {
			session: t,
			user: n
		},
		error: null
	};
}
function Qi(e) {
	let t = J(e);
	return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce((e, t) => e && typeof t == "string", !0) && (t.data.weak_password = e.weak_password), t;
}
function Y(e) {
	return {
		data: { user: e.user ?? e },
		error: null
	};
}
function $i(e) {
	return {
		data: e,
		error: null
	};
}
function ea(e) {
	let { action_link: t, email_otp: n, hashed_token: r, redirect_to: i, verification_type: a } = e, o = dt(e, [
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
function ta(e) {
	return e;
}
function na(e) {
	return !!e.access_token && !!e.refresh_token && !!e.expires_in;
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/types.js
var ra = [
	"global",
	"local",
	"others"
], ia = class {
	constructor({ url: e = "", headers: t = {}, fetch: n, experimental: r }) {
		this.url = e, this.headers = t, this.fetch = Ei(n), this.experimental = r ?? {}, this.mfa = {
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
	async signOut(e, t = ra[0]) {
		if (ra.indexOf(t) < 0) throw Error(`@supabase/auth-js: Parameter scope must be one of ${ra.join(", ")}`);
		try {
			return await q(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
				headers: this.headers,
				jwt: e,
				noResolveJson: !0
			}), {
				data: null,
				error: null
			};
		} catch (e) {
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async inviteUserByEmail(e, t = {}) {
		try {
			return await q(this.fetch, "POST", `${this.url}/invite`, {
				body: {
					email: e,
					data: t.data
				},
				headers: this.headers,
				redirectTo: t.redirectTo,
				xform: Y
			});
		} catch (e) {
			if (z(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async generateLink(e) {
		try {
			let { options: t } = e, n = dt(e, ["options"]), r = Object.assign(Object.assign({}, n), t);
			return "newEmail" in n && (r.new_email = n?.newEmail, delete r.newEmail), await q(this.fetch, "POST", `${this.url}/admin/generate_link`, {
				body: r,
				headers: this.headers,
				xform: ea,
				redirectTo: t?.redirectTo
			});
		} catch (e) {
			if (z(e)) return {
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
			return await q(this.fetch, "POST", `${this.url}/admin/users`, {
				body: e,
				headers: this.headers,
				xform: Y
			});
		} catch (e) {
			if (z(e)) return {
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
			}, n = await q(this.fetch, "GET", `${this.url}/admin/users`, {
				headers: this.headers,
				noResolveJson: !0,
				query: {
					page: (e?.page)?.toString() ?? "",
					per_page: (e?.perPage)?.toString() ?? ""
				},
				xform: ta
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
			if (z(e)) return {
				data: { users: [] },
				error: e
			};
			throw e;
		}
	}
	async getUserById(e) {
		G(e);
		try {
			return await q(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
				headers: this.headers,
				xform: Y
			});
		} catch (e) {
			if (z(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async updateUserById(e, t) {
		G(e);
		try {
			return await q(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
				body: t,
				headers: this.headers,
				xform: Y
			});
		} catch (e) {
			if (z(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async deleteUser(e, t = !1) {
		G(e);
		try {
			return await q(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
				headers: this.headers,
				body: { should_soft_delete: t },
				xform: Y
			});
		} catch (e) {
			if (z(e)) return {
				data: { user: null },
				error: e
			};
			throw e;
		}
	}
	async _listFactors(e) {
		G(e.userId);
		try {
			let { data: t, error: n } = await q(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
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
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _deleteFactor(e) {
		G(e.userId), G(e.id);
		try {
			return {
				data: await q(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, { headers: this.headers }),
				error: null
			};
		} catch (e) {
			if (z(e)) return {
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
			}, n = await q(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
				headers: this.headers,
				noResolveJson: !0,
				query: {
					page: (e?.page)?.toString() ?? "",
					per_page: (e?.perPage)?.toString() ?? ""
				},
				xform: ta
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
			if (z(e)) return {
				data: { clients: [] },
				error: e
			};
			throw e;
		}
	}
	async _createOAuthClient(e) {
		try {
			return await q(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
				body: e,
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _getOAuthClient(e) {
		try {
			return await q(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _updateOAuthClient(e, t) {
		try {
			return await q(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${e}`, {
				body: t,
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _deleteOAuthClient(e) {
		try {
			return await q(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
				headers: this.headers,
				noResolveJson: !0
			}), {
				data: null,
				error: null
			};
		} catch (e) {
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _regenerateOAuthClientSecret(e) {
		try {
			return await q(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _listCustomProviders(e) {
		try {
			let t = {};
			return e?.type && (t.type = e.type), await q(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
				headers: this.headers,
				query: t,
				xform: (e) => ({
					data: { providers: e?.providers ?? [] },
					error: null
				})
			});
		} catch (e) {
			if (z(e)) return {
				data: { providers: [] },
				error: e
			};
			throw e;
		}
	}
	async _createCustomProvider(e) {
		try {
			return await q(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
				body: e,
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _getCustomProvider(e) {
		try {
			return await q(this.fetch, "GET", `${this.url}/admin/custom-providers/${e}`, {
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _updateCustomProvider(e, t) {
		try {
			return await q(this.fetch, "PUT", `${this.url}/admin/custom-providers/${e}`, {
				body: t,
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _deleteCustomProvider(e) {
		try {
			return await q(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${e}`, {
				headers: this.headers,
				noResolveJson: !0
			}), {
				data: null,
				error: null
			};
		} catch (e) {
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _adminListPasskeys(e) {
		K(this.experimental), G(e.userId);
		try {
			return await q(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/passkeys`, {
				headers: this.headers,
				xform: (e) => ({
					data: e,
					error: null
				})
			});
		} catch (e) {
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
	async _adminDeletePasskey(e) {
		K(this.experimental), G(e.userId), G(e.passkeyId);
		try {
			return await q(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`, {
				headers: this.headers,
				noResolveJson: !0
			}), {
				data: null,
				error: null
			};
		} catch (e) {
			if (z(e)) return {
				data: null,
				error: e
			};
			throw e;
		}
	}
};
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/local-storage.js
function aa(e = {}) {
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
var X = { debug: !!(globalThis && wi() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true") }, oa = class extends Error {
	constructor(e) {
		super(e), this.isAcquireTimeout = !0;
	}
}, sa = class extends oa {};
async function ca(e, t, n) {
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
			} else if (t === 0) throw X.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new sa(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
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
		if (t > 0 && clearTimeout(i), typeof a == "object" && a && "name" in a && a.name === "AbortError" && t > 0) {
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
			throw X.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", e), new sa(`Lock "${e}" was released because another request stole it`);
		}
		throw a;
	}
}
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/lib/polyfills.js
function la() {
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
function ua(e) {
	if (!/^0x[a-fA-F0-9]{40}$/.test(e)) throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);
	return e.toLowerCase();
}
function da(e) {
	return parseInt(e, 16);
}
function fa(e) {
	let t = new TextEncoder().encode(e);
	return "0x" + Array.from(t, (e) => e.toString(16).padStart(2, "0")).join("");
}
function pa(e) {
	let { chainId: t, domain: n, expirationTime: r, issuedAt: i = /* @__PURE__ */ new Date(), nonce: a, notBefore: o, requestId: s, resources: c, scheme: l, uri: u, version: d } = e;
	if (!Number.isInteger(t)) throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);
	if (!n) throw Error("@supabase/auth-js: Invalid SIWE message field \"domain\". Domain must be provided.");
	if (a && a.length < 8) throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);
	if (!u) throw Error("@supabase/auth-js: Invalid SIWE message field \"uri\". URI must be provided.");
	if (d !== "1") throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);
	if (e.statement?.includes("\n")) throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);
	let f = ua(e.address), p = `${l ? `${l}://${n}` : n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement ? `${e.statement}\n` : ""}`, m = `URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a ? `\nNonce: ${a}` : ""}\nIssued At: ${i.toISOString()}`;
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
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			code: this.code
		};
	}
}, ma = class extends Z {
	constructor(e, t) {
		super({
			code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
			cause: t,
			message: e
		}), this.name = "WebAuthnUnknownError", this.originalError = t;
	}
};
function ha({ error: e, options: t }) {
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
		if (!Sa(t)) return new Z({
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
function ga({ error: e, options: t }) {
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
		if (!Sa(t)) return new Z({
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
var _a = new class {
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
function va(e) {
	if (!e) throw Error("Credential creation options are required");
	if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function") return PublicKeyCredential.parseCreationOptionsFromJSON(e);
	let { challenge: t, user: n, excludeCredentials: r } = e, i = dt(e, [
		"challenge",
		"user",
		"excludeCredentials"
	]), a = vi(t).buffer, o = Object.assign(Object.assign({}, n), { id: vi(n.id).buffer }), s = Object.assign(Object.assign({}, i), {
		challenge: a,
		user: o
	});
	if (r && r.length > 0) {
		s.excludeCredentials = Array(r.length);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			s.excludeCredentials[e] = Object.assign(Object.assign({}, t), {
				id: vi(t.id).buffer,
				type: t.type || "public-key",
				transports: t.transports
			});
		}
	}
	return s;
}
function ya(e) {
	if (!e) throw Error("Credential request options are required");
	if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function") return PublicKeyCredential.parseRequestOptionsFromJSON(e);
	let { challenge: t, allowCredentials: n } = e, r = dt(e, ["challenge", "allowCredentials"]), i = vi(t).buffer, a = Object.assign(Object.assign({}, r), { challenge: i });
	if (n && n.length > 0) {
		a.allowCredentials = Array(n.length);
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			a.allowCredentials[e] = Object.assign(Object.assign({}, t), {
				id: vi(t.id).buffer,
				type: t.type || "public-key",
				transports: t.transports
			});
		}
	}
	return a;
}
function ba(e) {
	if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
	let t = e;
	return {
		id: e.id,
		rawId: e.id,
		response: {
			attestationObject: bi(new Uint8Array(e.response.attestationObject)),
			clientDataJSON: bi(new Uint8Array(e.response.clientDataJSON))
		},
		type: "public-key",
		clientExtensionResults: e.getClientExtensionResults(),
		authenticatorAttachment: t.authenticatorAttachment ?? void 0
	};
}
function xa(e) {
	if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
	let t = e, n = e.getClientExtensionResults(), r = e.response;
	return {
		id: e.id,
		rawId: e.id,
		response: {
			authenticatorData: bi(new Uint8Array(r.authenticatorData)),
			clientDataJSON: bi(new Uint8Array(r.clientDataJSON)),
			signature: bi(new Uint8Array(r.signature)),
			userHandle: r.userHandle ? bi(new Uint8Array(r.userHandle)) : void 0
		},
		type: "public-key",
		clientExtensionResults: n,
		authenticatorAttachment: t.authenticatorAttachment ?? void 0
	};
}
function Sa(e) {
	return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function Ca() {
	return !!(U() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof (navigator == null ? void 0 : navigator.credentials)?.create == "function" && typeof (navigator == null ? void 0 : navigator.credentials)?.get == "function");
}
async function wa(e) {
	try {
		let t = await navigator.credentials.create(e);
		return t ? t instanceof PublicKeyCredential ? {
			data: t,
			error: null
		} : {
			data: null,
			error: new ma("Browser returned unexpected credential type", t)
		} : {
			data: null,
			error: new ma("Empty credential response", t)
		};
	} catch (t) {
		return {
			data: null,
			error: ha({
				error: t,
				options: e
			})
		};
	}
}
async function Ta(e) {
	try {
		let t = await navigator.credentials.get(e);
		return t ? t instanceof PublicKeyCredential ? {
			data: t,
			error: null
		} : {
			data: null,
			error: new ma("Browser returned unexpected credential type", t)
		} : {
			data: null,
			error: new ma("Empty credential response", t)
		};
	} catch (t) {
		return {
			data: null,
			error: ga({
				error: t,
				options: e
			})
		};
	}
}
var Ea = {
	hints: ["security-key"],
	authenticatorSelection: {
		authenticatorAttachment: "cross-platform",
		requireResidentKey: !1,
		userVerification: "preferred",
		residentKey: "discouraged"
	},
	attestation: "direct"
}, Da = {
	userVerification: "preferred",
	hints: ["security-key"],
	attestation: "direct"
};
function Oa(...e) {
	let t = (e) => typeof e == "object" && !!e && !Array.isArray(e), n = (e) => e instanceof ArrayBuffer || ArrayBuffer.isView(e), r = {};
	for (let i of e) if (i) for (let e in i) {
		let a = i[e];
		if (a !== void 0) if (Array.isArray(a)) r[e] = a;
		else if (n(a)) r[e] = a;
		else if (t(a)) {
			let n = r[e];
			t(n) ? r[e] = Oa(n, a) : r[e] = Oa(a);
		} else r[e] = a;
	}
	return r;
}
function ka(e, t) {
	return Oa(Ea, e, t || {});
}
function Aa(e, t) {
	return Oa(Da, e, t || {});
}
var ja = class {
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
			let s = r ?? _a.createNewAbortSignal();
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
					let { data: t, error: n } = await wa({
						publicKey: ka(a.webauthn.credential_options.publicKey, i?.create),
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
					let t = Aa(a.webauthn.credential_options.publicKey, i?.request), { data: n, error: r } = await Ta(Object.assign(Object.assign({}, a.webauthn.credential_options), {
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
			return z(e) ? {
				data: null,
				error: e
			} : {
				data: null,
				error: new B("Unexpected error in challenge", e)
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
			error: new Yr("rpId is required for WebAuthn authentication")
		};
		try {
			if (!Ca()) return {
				data: null,
				error: new B("Browser does not support WebAuthn", null)
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
			return z(e) ? {
				data: null,
				error: e
			} : {
				data: null,
				error: new B("Unexpected error in authenticate", e)
			};
		}
	}
	async _register({ friendlyName: e, webauthn: { rpId: t = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: r } = {} }, i) {
		if (!t) return {
			data: null,
			error: new Yr("rpId is required for WebAuthn registration")
		};
		try {
			if (!Ca()) return {
				data: null,
				error: new B("Browser does not support WebAuthn", null)
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
			return z(e) ? {
				data: null,
				error: e
			} : {
				data: null,
				error: new B("Unexpected error in register", e)
			};
		}
	}
};
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/GoTrueClient.js
la();
var Ma = {
	url: Ur,
	storageKey: Wr,
	autoRefreshToken: !0,
	persistSession: !0,
	detectSessionInUrl: !0,
	headers: Gr,
	flowType: "implicit",
	debug: !1,
	hasCustomAuthorizationHeader: !1,
	throwOnError: !1,
	lockAcquireTimeout: 5e3,
	skipAutoInitialize: !1,
	experimental: {}
};
async function Na(e, t, n) {
	return await n();
}
var Pa = {}, Fa = class e {
	get jwks() {
		return Pa[this.storageKey]?.jwks ?? { keys: [] };
	}
	set jwks(e) {
		Pa[this.storageKey] = Object.assign(Object.assign({}, Pa[this.storageKey]), { jwks: e });
	}
	get jwks_cached_at() {
		return Pa[this.storageKey]?.cachedAt ?? -(2 ** 53 - 1);
	}
	set jwks_cached_at(e) {
		Pa[this.storageKey] = Object.assign(Object.assign({}, Pa[this.storageKey]), { cachedAt: e });
	}
	constructor(t) {
		var n;
		this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
		let r = Object.assign(Object.assign({}, Ma), t);
		if (this.storageKey = r.storageKey, this.instanceID = e.nextInstanceID[this.storageKey] ?? 0, e.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!r.debug, typeof r.debug == "function" && (this.logger = r.debug), this.instanceID > 0 && U()) {
			let e = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
			console.warn(e), this.logDebugMessages && console.trace(e);
		}
		if (this.persistSession = r.persistSession, this.autoRefreshToken = r.autoRefreshToken, this.experimental = r.experimental ?? {}, this.admin = new ia({
			url: r.url,
			headers: r.headers,
			fetch: r.fetch,
			experimental: this.experimental
		}), this.url = r.url, this.headers = r.headers, this.fetch = Ei(r.fetch), this.lock = r.lock || Na, this.detectSessionInUrl = r.detectSessionInUrl, this.flowType = r.flowType, this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader, this.throwOnError = r.throwOnError, this.lockAcquireTimeout = r.lockAcquireTimeout, r.lock ? this.lock = r.lock : this.persistSession && U() && (globalThis == null ? void 0 : globalThis.navigator)?.locks ? this.lock = ca : this.lock = Na, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = -(2 ** 53 - 1)), this.mfa = {
			verify: this._verify.bind(this),
			enroll: this._enroll.bind(this),
			unenroll: this._unenroll.bind(this),
			challenge: this._challenge.bind(this),
			listFactors: this._listFactors.bind(this),
			challengeAndVerify: this._challengeAndVerify.bind(this),
			getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
			webauthn: new ja(this)
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
		}, this.persistSession ? (r.storage ? this.storage = r.storage : wi() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = aa(this.memoryStorage)), r.userStorage && (this.userStorage = r.userStorage)) : (this.memoryStorage = {}, this.storage = aa(this.memoryStorage)), U() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
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
		return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Br}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
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
			if (U() && (e = Ti(window.location.href), this._isImplicitGrantCallback(e) ? t = "implicit" : await this._isPKCECallback(e) && (t = "pkce")), U() && this.detectSessionInUrl && t !== "none") {
				let { data: n, error: r } = await this._getSessionFromURL(e, t);
				if (r) {
					if (this._debug("#_initialize()", "error detecting session from URL", r), ni(r)) {
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
			return z(e) ? this._returnResult({ error: e }) : this._returnResult({ error: new B("Unexpected error during initialization", e) });
		} finally {
			await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
		}
	}
	async signInAnonymously(e) {
		try {
			let { data: t, error: n } = await q(this.fetch, "POST", `${this.url}/signup`, {
				headers: this.headers,
				body: {
					data: e?.options?.data ?? {},
					gotrue_meta_security: { captcha_token: e?.options?.captchaToken }
				},
				xform: J
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
			if (z(e)) return this._returnResult({
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
				this.flowType === "pkce" && ([a, o] = await Ri(this.storage, this.storageKey)), t = await q(this.fetch, "POST", `${this.url}/signup`, {
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
					xform: J
				});
			} else if ("phone" in e) {
				let { phone: n, password: r, options: i } = e;
				t = await q(this.fetch, "POST", `${this.url}/signup`, {
					headers: this.headers,
					body: {
						phone: n,
						password: r,
						data: i?.data ?? {},
						channel: i?.channel ?? "sms",
						gotrue_meta_security: { captcha_token: i?.captchaToken }
					},
					xform: J
				});
			} else throw new ei("You must provide either an email or phone number and a password");
			let { data: n, error: r } = t;
			if (r || !n) return await W(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({
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
			if (await W(this.storage, `${this.storageKey}-code-verifier`), z(e)) return this._returnResult({
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
				t = await q(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
					headers: this.headers,
					body: {
						email: n,
						password: r,
						gotrue_meta_security: { captcha_token: i?.captchaToken }
					},
					xform: Qi
				});
			} else if ("phone" in e) {
				let { phone: n, password: r, options: i } = e;
				t = await q(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
					headers: this.headers,
					body: {
						phone: n,
						password: r,
						gotrue_meta_security: { captcha_token: i?.captchaToken }
					},
					xform: Qi
				});
			} else throw new ei("You must provide either an email or phone number and a password");
			let { data: n, error: r } = t;
			if (r) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: r
			});
			if (!n || !n.session || !n.user) {
				let e = new $r();
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
			if (z(e)) return this._returnResult({
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
			if (!U()) {
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
			let u = ua(l[0]), d = o?.signInWithEthereum?.chainId;
			d ||= da(await s.request({ method: "eth_chainId" })), t = pa({
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
				params: [fa(t), u]
			});
		}
		try {
			let { data: r, error: i } = await q(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
				headers: this.headers,
				body: Object.assign({
					chain: "ethereum",
					message: t,
					signature: n
				}, e.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e.options?.captchaToken } } : null),
				xform: J
			});
			if (i) throw i;
			if (!r || !r.session || !r.user) {
				let e = new $r();
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
			if (z(e)) return this._returnResult({
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
			if (!U()) {
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
			let { data: r, error: i } = await q(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
				headers: this.headers,
				body: Object.assign({
					chain: "solana",
					message: t,
					signature: bi(n)
				}, e.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e.options?.captchaToken } } : null),
				xform: J
			});
			if (i) throw i;
			if (!r || !r.session || !r.user) {
				let e = new $r();
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
			if (z(e)) return this._returnResult({
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
		let [t, n] = (await ki(this.storage, `${this.storageKey}-code-verifier`) ?? "").split("/");
		try {
			if (!t && this.flowType === "pkce") throw new ii();
			let { data: r, error: i } = await q(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
				headers: this.headers,
				body: {
					auth_code: e,
					code_verifier: t
				},
				xform: J
			});
			if (await W(this.storage, `${this.storageKey}-code-verifier`), i) throw i;
			if (!r || !r.session || !r.user) {
				let e = new $r();
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
			if (await W(this.storage, `${this.storageKey}-code-verifier`), z(e)) return this._returnResult({
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
			let { options: t, provider: n, token: r, access_token: i, nonce: a } = e, { data: o, error: s } = await q(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
				headers: this.headers,
				body: {
					provider: n,
					id_token: r,
					access_token: i,
					nonce: a,
					gotrue_meta_security: { captcha_token: t?.captchaToken }
				},
				xform: J
			});
			if (s) return this._returnResult({
				data: {
					user: null,
					session: null
				},
				error: s
			});
			if (!o || !o.session || !o.user) {
				let e = new $r();
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
			if (z(e)) return this._returnResult({
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
				this.flowType === "pkce" && ([r, i] = await Ri(this.storage, this.storageKey));
				let { error: a } = await q(this.fetch, "POST", `${this.url}/otp`, {
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
				let { phone: t, options: n } = e, { data: r, error: i } = await q(this.fetch, "POST", `${this.url}/otp`, {
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
			throw new ei("You must provide either an email or phone number.");
		} catch (e) {
			if (await W(this.storage, `${this.storageKey}-code-verifier`), z(e)) return this._returnResult({
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
			let { data: r, error: i } = await q(this.fetch, "POST", `${this.url}/verify`, {
				headers: this.headers,
				body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: n } }),
				redirectTo: t,
				xform: J
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
			if (z(e)) return this._returnResult({
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
			this.flowType === "pkce" && ([t, n] = await Ri(this.storage, this.storageKey));
			let r = await q(this.fetch, "POST", `${this.url}/sso`, {
				body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: e.options?.redirectTo ?? void 0 }), e?.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), {
					skip_http_redirect: !0,
					code_challenge: t,
					code_challenge_method: n
				}),
				headers: this.headers,
				xform: $i
			});
			return r.data?.url && U() && !e.options?.skipBrowserRedirect && window.location.assign(r.data.url), this._returnResult(r);
		} catch (e) {
			if (await W(this.storage, `${this.storageKey}-code-verifier`), z(e)) return this._returnResult({
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
				if (!t) throw new H();
				let { error: r } = await q(this.fetch, "GET", `${this.url}/reauthenticate`, {
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
			if (z(e)) return this._returnResult({
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
				let { email: n, type: r, options: i } = e, { error: a } = await q(this.fetch, "POST", t, {
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
				let { phone: n, type: r, options: i } = e, { data: a, error: o } = await q(this.fetch, "POST", t, {
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
			throw new ei("You must provide either an email or phone number and a type");
		} catch (e) {
			if (z(e)) return this._returnResult({
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
			let e = null, t = await ki(this.storage, this.storageKey);
			if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e) return {
				data: { session: null },
				error: null
			};
			let n = e.expires_at ? e.expires_at * 1e3 - Date.now() < Hr : !1;
			if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", e.expires_at), !n) {
				if (this.userStorage) {
					let t = await ki(this.userStorage, this.storageKey + "-user");
					t?.user ? e.user = t.user : e.user = Wi();
				}
				if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
					let t = { value: this.suppressGetSessionWarning };
					e.user = Gi(e.user, t), t.value && (this.suppressGetSessionWarning = !0);
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
			return e ? await q(this.fetch, "GET", `${this.url}/user`, {
				headers: this.headers,
				jwt: e,
				xform: Y
			}) : await this._useSession(async (e) => {
				let { data: t, error: n } = e;
				if (n) throw n;
				return !t.session?.access_token && !this.hasCustomAuthorizationHeader ? {
					data: { user: null },
					error: new H()
				} : await q(this.fetch, "GET", `${this.url}/user`, {
					headers: this.headers,
					jwt: t.session?.access_token ?? void 0,
					xform: Y
				});
			});
		} catch (e) {
			if (z(e)) return Qr(e) && (await this._removeSession(), await W(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({
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
				if (!r.session) throw new H();
				let a = r.session, o = null, s = null;
				this.flowType === "pkce" && e.email != null && ([o, s] = await Ri(this.storage, this.storageKey));
				let { data: c, error: l } = await q(this.fetch, "PUT", `${this.url}/user`, {
					headers: this.headers,
					redirectTo: t?.emailRedirectTo,
					body: Object.assign(Object.assign({}, e), {
						code_challenge: o,
						code_challenge_method: s
					}),
					jwt: a.access_token,
					xform: Y
				});
				if (l) throw l;
				return a.user = c.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), this._returnResult({
					data: { user: a.user },
					error: null
				});
			});
		} catch (e) {
			if (await W(this.storage, `${this.storageKey}-code-verifier`), z(e)) return this._returnResult({
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
			if (!e.access_token || !e.refresh_token) throw new H();
			let t = Date.now() / 1e3, n = t, r = !0, i = null, { payload: a } = ji(e.access_token);
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
			if (z(e)) return this._returnResult({
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
				if (!e?.refresh_token) throw new H();
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
			if (z(e)) return this._returnResult({
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
			if (!U()) throw new ti("No browser detected.");
			if (e.error || e.error_description || e.error_code) throw new ti(e.error_description || "Error in URL with unspecified error_description", {
				error: e.error || "unspecified_error",
				code: e.error_code || "unspecified_code"
			});
			switch (t) {
				case "implicit":
					if (this.flowType === "pkce") throw new ri("Not a valid PKCE flow url.");
					break;
				case "pkce":
					if (this.flowType === "implicit") throw new ti("Not a valid implicit grant flow url.");
					break;
				default:
			}
			if (t === "pkce") {
				if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code) throw new ri("No code detected.");
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
			if (!i || !o || !a || !c) throw new ti("No session defined in URL");
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
			if (z(e)) return this._returnResult({
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
		let t = await ki(this.storage, `${this.storageKey}-code-verifier`);
		return !!(e.code && t);
	}
	async signOut(e = { scope: "global" }) {
		return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e));
	}
	async _signOut({ scope: e } = { scope: "global" }) {
		return await this._useSession(async (t) => {
			let { data: n, error: r } = t;
			if (r && !Qr(r)) return this._returnResult({ error: r });
			let i = n.session?.access_token;
			if (i) {
				let { error: t } = await this.admin.signOut(i, e);
				if (t && !(Zr(t) && (t.status === 404 || t.status === 401 || t.status === 403) || Qr(t))) return this._returnResult({ error: t });
			}
			return e !== "others" && (await this._removeSession(), await W(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
		});
	}
	onAuthStateChange(e) {
		let t = Si(), n = {
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
				await this.stateChangeEmitters.get(e)?.callback("INITIAL_SESSION", null), this._debug("INITIAL_SESSION", "callback id", e, "error", t), Qr(t) ? console.warn(t) : console.error(t);
			}
		});
	}
	async resetPasswordForEmail(e, t = {}) {
		let n = null, r = null;
		this.flowType === "pkce" && ([n, r] = await Ri(this.storage, this.storageKey, !0));
		try {
			return await q(this.fetch, "POST", `${this.url}/recover`, {
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
			if (await W(this.storage, `${this.storageKey}-code-verifier`), z(e)) return this._returnResult({
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
			if (z(e)) return this._returnResult({
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
				return await q(this.fetch, "GET", i, {
					headers: this.headers,
					jwt: n.session?.access_token ?? void 0
				});
			});
			if (n) throw n;
			return U() && !e.options?.skipBrowserRedirect && window.location.assign(t?.url), this._returnResult({
				data: {
					provider: e.provider,
					url: t?.url
				},
				error: null
			});
		} catch (t) {
			if (z(t)) return this._returnResult({
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
				let { options: i, provider: a, token: o, access_token: s, nonce: c } = e, { data: l, error: u } = await q(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
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
					xform: J
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
					error: new $r()
				}) : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("USER_UPDATED", l.session)), this._returnResult({
					data: l,
					error: u
				}));
			} catch (e) {
				if (await W(this.storage, `${this.storageKey}-code-verifier`), z(e)) return this._returnResult({
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
				return await q(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
					headers: this.headers,
					jwt: n.session?.access_token ?? void 0
				});
			});
		} catch (e) {
			if (z(e)) return this._returnResult({
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
			return await Ni(async (n) => (n > 0 && await Mi(200 * 2 ** (n - 1)), this._debug(t, "refreshing attempt", n), await q(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
				body: { refresh_token: e },
				headers: this.headers,
				xform: J
			})), (e, t) => {
				let r = 200 * 2 ** e;
				return t && oi(t) && Date.now() + r - n < 3e4;
			});
		} catch (e) {
			if (this._debug(t, "error", e), z(e)) return this._returnResult({
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
		return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", n), U() && !t.skipBrowserRedirect && window.location.assign(n), {
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
			let t = await ki(this.storage, this.storageKey);
			if (t && this.userStorage) {
				let e = await ki(this.userStorage, this.storageKey + "-user");
				!this.storage.isServer && Object.is(this.storage, this.userStorage) && !e && (e = { user: t.user }, await Oi(this.userStorage, this.storageKey + "-user", e)), t.user = e?.user ?? Wi();
			} else if (t && !t.user && !t.user) {
				let e = await ki(this.storage, this.storageKey + "-user");
				e && e?.user ? (t.user = e.user, await W(this.storage, this.storageKey + "-user"), await Oi(this.storage, this.storageKey, t)) : t.user = Wi();
			}
			if (this._debug(e, "session from storage", t), !this._isValidSession(t)) {
				this._debug(e, "session is not valid"), t !== null && await this._removeSession();
				return;
			}
			let n = (t.expires_at ?? Infinity) * 1e3 - Date.now() < Hr;
			if (this._debug(e, `session has${n ? "" : " not"} expired with margin of ${Hr}s`), n) {
				if (this.autoRefreshToken && t.refresh_token) {
					let { error: n } = await this._callRefreshToken(t.refresh_token);
					n && (console.error(n), oi(n) || (this._debug(e, "refresh failed with a non-retryable error, removing the session", n), await this._removeSession()));
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
		if (!e) throw new H();
		if (this.refreshingDeferred) return this.refreshingDeferred.promise;
		let r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
		this._debug(r, "begin");
		try {
			this.refreshingDeferred = new Ai();
			let { data: t, error: n } = await this._refreshAccessToken(e);
			if (n) throw n;
			if (!t.session) throw new H();
			await this._saveSession(t.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
			let r = {
				data: t.session,
				error: null
			};
			return this.refreshingDeferred.resolve(r), r;
		} catch (e) {
			if (this._debug(r, "error", e), z(e)) {
				let n = {
					data: null,
					error: e
				};
				return oi(e) || await this._removeSession(), (t = this.refreshingDeferred) == null || t.resolve(n), n;
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
		this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await W(this.storage, `${this.storageKey}-code-verifier`);
		let t = Object.assign({}, e), n = t.user && t.user.__isUserNotAvailableProxy === !0;
		if (this.userStorage) {
			!n && t.user && await Oi(this.userStorage, this.storageKey + "-user", { user: t.user });
			let e = Object.assign({}, t);
			delete e.user;
			let r = Ki(e);
			await Oi(this.storage, this.storageKey, r);
		} else {
			let e = Ki(t);
			await Oi(this.storage, this.storageKey, e);
		}
	}
	async _removeSession() {
		this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await W(this.storage, this.storageKey), await W(this.storage, this.storageKey + "-code-verifier"), await W(this.storage, this.storageKey + "-user"), this.userStorage && await W(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
	}
	_removeVisibilityChangedCallback() {
		this._debug("#_removeVisibilityChangedCallback()");
		let e = this.visibilityChangedCallback;
		this.visibilityChangedCallback = null;
		try {
			e && U() && window != null && window.removeEventListener && window.removeEventListener("visibilitychange", e);
		} catch (e) {
			console.error("removing visibilitychange callback failed", e);
		}
	}
	async _startAutoRefresh() {
		await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
		let e = setInterval(() => this._autoRefreshTokenTick(), Vr);
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
							let r = Math.floor((n.expires_at * 1e3 - e) / Vr);
							this._debug("#_autoRefreshTokenTick()", `access token expires in ${r} ticks, a tick lasts ${Vr}ms, refresh threshold is 3 ticks`), r <= 3 && await this._callRefreshToken(n.refresh_token);
						});
					} catch (e) {
						console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
					}
				} finally {
					this._debug("#_autoRefreshTokenTick()", "end");
				}
			});
		} catch (e) {
			if (e instanceof oa) this._debug("auto refresh token tick lock not available");
			else throw e;
		}
	}
	async _handleVisibilityChange() {
		if (this._debug("#_handleVisibilityChange()"), !U() || !(window != null && window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1;
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
			let [e, t] = await Ri(this.storage, this.storageKey), n = new URLSearchParams({
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
				}) : await q(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
					headers: this.headers,
					jwt: n?.session?.access_token
				});
			});
		} catch (e) {
			if (z(e)) return this._returnResult({
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
				}, e.factorType === "phone" ? { phone: e.phone } : e.factorType === "totp" ? { issuer: e.issuer } : {}), { data: a, error: o } = await q(this.fetch, "POST", `${this.url}/factors`, {
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
			if (z(e)) return this._returnResult({
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
					let i = Object.assign({ challenge_id: e.challengeId }, "webauthn" in e ? { webauthn: Object.assign(Object.assign({}, e.webauthn), { credential_response: e.webauthn.type === "create" ? ba(e.webauthn.credential_response) : xa(e.webauthn.credential_response) }) } : { code: e.code }), { data: a, error: o } = await q(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
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
				if (z(e)) return this._returnResult({
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
					let i = await q(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
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
							data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: va(a.webauthn.credential_options.publicKey) }) }) }),
							error: null
						};
						case "request": return {
							data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: ya(a.webauthn.credential_options.publicKey) }) }) }),
							error: null
						};
					}
				});
			} catch (e) {
				if (z(e)) return this._returnResult({
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
			let { payload: t } = ji(e), n = null;
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
			if (z(e)) return this._returnResult({
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
		let { payload: r } = ji(t.access_token), i = null;
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
				}) : n ? await q(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
					headers: this.headers,
					jwt: n.access_token,
					xform: (e) => ({
						data: e,
						error: null
					})
				}) : this._returnResult({
					data: null,
					error: new H()
				});
			});
		} catch (e) {
			if (z(e)) return this._returnResult({
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
					error: new H()
				});
				let a = await q(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
					headers: this.headers,
					jwt: r.access_token,
					body: { action: "approve" },
					xform: (e) => ({
						data: e,
						error: null
					})
				});
				return a.data && a.data.redirect_url && U() && !t?.skipBrowserRedirect && window.location.assign(a.data.redirect_url), a;
			});
		} catch (e) {
			if (z(e)) return this._returnResult({
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
					error: new H()
				});
				let a = await q(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
					headers: this.headers,
					jwt: r.access_token,
					body: { action: "deny" },
					xform: (e) => ({
						data: e,
						error: null
					})
				});
				return a.data && a.data.redirect_url && U() && !t?.skipBrowserRedirect && window.location.assign(a.data.redirect_url), a;
			});
		} catch (e) {
			if (z(e)) return this._returnResult({
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
				}) : t ? await q(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
					headers: this.headers,
					jwt: t.access_token,
					xform: (e) => ({
						data: e,
						error: null
					})
				}) : this._returnResult({
					data: null,
					error: new H()
				});
			});
		} catch (e) {
			if (z(e)) return this._returnResult({
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
				}) : n ? (await q(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
					headers: this.headers,
					jwt: n.access_token,
					query: { client_id: e.clientId },
					noResolveJson: !0
				}), {
					data: {},
					error: null
				}) : this._returnResult({
					data: null,
					error: new H()
				});
			});
		} catch (e) {
			if (z(e)) return this._returnResult({
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
		let { data: i, error: a } = await q(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, { headers: this.headers });
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
			let { header: r, payload: i, signature: a, raw: { header: o, payload: s } } = ji(n);
			t?.allowExpired || Vi(i.exp);
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
			let l = Hi(r.alg), u = await crypto.subtle.importKey("jwk", c, l, !0, ["verify"]);
			if (!await crypto.subtle.verify(l, u, a, yi(`${o}.${s}`))) throw new ci("Invalid JWT signature");
			return {
				data: {
					claims: i,
					header: r,
					signature: a
				},
				error: null
			};
		} catch (e) {
			if (z(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async signInWithPasskey(e) {
		K(this.experimental);
		try {
			if (!Ca()) return this._returnResult({
				data: null,
				error: new B("Browser does not support WebAuthn", null)
			});
			let { data: t, error: n } = await this._startPasskeyAuthentication({ options: { captchaToken: e?.options?.captchaToken } });
			if (n || !t) return this._returnResult({
				data: null,
				error: n
			});
			let { data: r, error: i } = await Ta({
				publicKey: ya(t.options),
				signal: e?.options?.signal ?? _a.createNewAbortSignal()
			});
			if (i || !r) return this._returnResult({
				data: null,
				error: i ?? new B("WebAuthn ceremony failed", null)
			});
			let a = xa(r);
			return this._verifyPasskeyAuthentication({
				challengeId: t.challenge_id,
				credential: a
			});
		} catch (e) {
			if (z(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async registerPasskey(e) {
		K(this.experimental);
		try {
			if (!Ca()) return this._returnResult({
				data: null,
				error: new B("Browser does not support WebAuthn", null)
			});
			let { data: t, error: n } = await this._startPasskeyRegistration();
			if (n || !t) return this._returnResult({
				data: null,
				error: n
			});
			let { data: r, error: i } = await wa({
				publicKey: va(t.options),
				signal: e?.options?.signal ?? _a.createNewAbortSignal()
			});
			if (i || !r) return this._returnResult({
				data: null,
				error: i ?? new B("WebAuthn ceremony failed", null)
			});
			let a = ba(r);
			return this._verifyPasskeyRegistration({
				challengeId: t.challenge_id,
				credential: a
			});
		} catch (e) {
			if (z(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _startPasskeyRegistration() {
		K(this.experimental);
		try {
			return await this._useSession(async (e) => {
				let { data: { session: t }, error: n } = e;
				if (n) return this._returnResult({
					data: null,
					error: n
				});
				if (!t) return this._returnResult({
					data: null,
					error: new H()
				});
				let { data: r, error: i } = await q(this.fetch, "POST", `${this.url}/passkeys/registration/options`, {
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
			if (z(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _verifyPasskeyRegistration(e) {
		K(this.experimental);
		try {
			return await this._useSession(async (t) => {
				let { data: { session: n }, error: r } = t;
				if (r) return this._returnResult({
					data: null,
					error: r
				});
				if (!n) return this._returnResult({
					data: null,
					error: new H()
				});
				let { data: i, error: a } = await q(this.fetch, "POST", `${this.url}/passkeys/registration/verify`, {
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
			if (z(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _startPasskeyAuthentication(e) {
		K(this.experimental);
		try {
			let { data: t, error: n } = await q(this.fetch, "POST", `${this.url}/passkeys/authentication/options`, {
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
			if (z(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _verifyPasskeyAuthentication(e) {
		K(this.experimental);
		try {
			let { data: t, error: n } = await q(this.fetch, "POST", `${this.url}/passkeys/authentication/verify`, {
				headers: this.headers,
				body: {
					challenge_id: e.challengeId,
					credential: e.credential
				},
				xform: J
			});
			return n ? this._returnResult({
				data: null,
				error: n
			}) : (t.session && (await this._saveSession(t.session), await this._notifyAllSubscribers("SIGNED_IN", t.session)), this._returnResult({
				data: t,
				error: null
			}));
		} catch (e) {
			if (z(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _listPasskeys() {
		K(this.experimental);
		try {
			return await this._useSession(async (e) => {
				let { data: { session: t }, error: n } = e;
				if (n) return this._returnResult({
					data: null,
					error: n
				});
				if (!t) return this._returnResult({
					data: null,
					error: new H()
				});
				let { data: r, error: i } = await q(this.fetch, "GET", `${this.url}/passkeys`, {
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
			if (z(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _updatePasskey(e) {
		K(this.experimental);
		try {
			return await this._useSession(async (t) => {
				let { data: { session: n }, error: r } = t;
				if (r) return this._returnResult({
					data: null,
					error: r
				});
				if (!n) return this._returnResult({
					data: null,
					error: new H()
				});
				let { data: i, error: a } = await q(this.fetch, "PATCH", `${this.url}/passkeys/${e.passkeyId}`, {
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
			if (z(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
	async _deletePasskey(e) {
		K(this.experimental);
		try {
			return await this._useSession(async (t) => {
				let { data: { session: n }, error: r } = t;
				if (r) return this._returnResult({
					data: null,
					error: r
				});
				if (!n) return this._returnResult({
					data: null,
					error: new H()
				});
				let { error: i } = await q(this.fetch, "DELETE", `${this.url}/passkeys/${e.passkeyId}`, {
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
			if (z(e)) return this._returnResult({
				data: null,
				error: e
			});
			throw e;
		}
	}
};
Fa.nextInstanceID = {};
//#endregion
//#region node_modules/@supabase/auth-js/dist/module/AuthClient.js
var Ia = Fa, La = "2.105.4", Ra = "";
Ra = typeof Deno < "u" ? "deno" : typeof document < "u" ? "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? "react-native" : "node";
var za = { headers: { "X-Client-Info": `supabase-js-${Ra}/${La}` } }, Ba = { schema: "public" }, Va = {
	autoRefreshToken: !0,
	persistSession: !0,
	detectSessionInUrl: !0,
	flowType: "implicit"
}, Ha = {};
function Ua(e) {
	"@babel/helpers - typeof";
	return Ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ua(e);
}
function Wa(e, t) {
	if (Ua(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ua(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ga(e) {
	var t = Wa(e, "string");
	return Ua(t) == "symbol" ? t : t + "";
}
function Ka(e, t, n) {
	return (t = Ga(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function qa(e, t) {
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
		t % 2 ? qa(Object(n), !0).forEach(function(t) {
			Ka(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qa(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Ja = (e) => e ? (...t) => e(...t) : (...e) => fetch(...e), Ya = () => Headers, Xa = (e, t, n) => {
	let r = Ja(n), i = Ya();
	return async (n, a) => {
		let o = await t() ?? e, s = new i(a?.headers);
		return s.has("apikey") || s.set("apikey", e), s.has("Authorization") || s.set("Authorization", `Bearer ${o}`), r(n, Q(Q({}, a), {}, { headers: s }));
	};
};
function Za(e) {
	return e.endsWith("/") ? e : e + "/";
}
function Qa(e, t) {
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
function $a(e) {
	let t = e?.trim();
	if (!t) throw Error("supabaseUrl is required.");
	if (!t.match(/^https?:\/\//i)) throw Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
	try {
		return new URL(Za(t));
	} catch {
		throw Error("Invalid supabaseUrl: Provided URL is malformed.");
	}
}
var eo = class extends Ia {
	constructor(e) {
		super(e);
	}
}, to = class {
	constructor(e, t, n) {
		this.supabaseUrl = e, this.supabaseKey = t;
		let r = $a(e);
		if (!t) throw Error("supabaseKey is required.");
		this.realtimeUrl = new URL("realtime/v1", r), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", r), this.storageUrl = new URL("storage/v1", r), this.functionsUrl = new URL("functions/v1", r);
		let i = `sb-${r.hostname.split(".")[0]}-auth-token`, a = {
			db: Ba,
			realtime: Ha,
			auth: Q(Q({}, Va), {}, { storageKey: i }),
			global: za
		}, o = Qa(n ?? {}, a);
		this.storageKey = o.auth.storageKey ?? "", this.headers = o.global.headers ?? {}, o.accessToken ? (this.accessToken = o.accessToken, this.auth = new Proxy({}, { get: (e, t) => {
			throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`);
		} })) : this.auth = this._initSupabaseAuthClient(o.auth ?? {}, this.headers, o.global.fetch), this.fetch = Xa(t, this._getAccessToken.bind(this), o.global.fetch), this.realtime = this._initRealtimeClient(Q({
			headers: this.headers,
			accessToken: this._getAccessToken.bind(this),
			fetch: this.fetch
		}, o.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((e) => this.realtime.setAuth(e)).catch((e) => console.warn("Failed to set initial Realtime auth token:", e)), this.rest = new Rt(new URL("rest/v1", r).href, {
			headers: this.headers,
			schema: o.db.schema,
			fetch: this.fetch,
			timeout: o.db.timeout,
			urlLengthLimit: o.db.urlLengthLimit
		}), this.storage = new zr(this.storageUrl.href, this.headers, this.fetch, n?.storage), o.accessToken || this._listenForAuthEvents();
	}
	get functions() {
		return new yt(this.functionsUrl.href, {
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
		return new eo({
			url: this.authUrl.href,
			headers: Q(Q({}, h), p),
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
		return new Un(this.realtimeUrl.href, Q(Q({}, e), {}, { params: Q(Q({}, { apikey: this.supabaseKey }), e?.params) }));
	}
	_listenForAuthEvents() {
		return this.auth.onAuthStateChange((e, t) => {
			this._handleTokenChanged(e, "CLIENT", t?.access_token);
		});
	}
	_handleTokenChanged(e, t, n) {
		(e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== n ? (this.changedAccessToken = n, this.realtime.setAuth(n)) : e === "SIGNED_OUT" && (this.realtime.setAuth(), t == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
	}
}, no = (e, t, n) => new to(e, t, n);
function ro() {
	if (typeof window < "u") return !1;
	let e = globalThis.process;
	if (!e) return !1;
	let t = e.version;
	if (t == null) return !1;
	let n = t.match(/^v(\d+)\./);
	return n ? parseInt(n[1], 10) <= 18 : !1;
}
ro() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
//#endregion
//#region node_modules/qrcode/lib/can-promise.js
var io = /* @__PURE__ */ o(((e, t) => {
	t.exports = function() {
		return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
	};
})), ao = /* @__PURE__ */ o(((e) => {
	var t, n = [
		0,
		26,
		44,
		70,
		100,
		134,
		172,
		196,
		242,
		292,
		346,
		404,
		466,
		532,
		581,
		655,
		733,
		815,
		901,
		991,
		1085,
		1156,
		1258,
		1364,
		1474,
		1588,
		1706,
		1828,
		1921,
		2051,
		2185,
		2323,
		2465,
		2611,
		2761,
		2876,
		3034,
		3196,
		3362,
		3532,
		3706
	];
	e.getSymbolSize = function(e) {
		if (!e) throw Error("\"version\" cannot be null or undefined");
		if (e < 1 || e > 40) throw Error("\"version\" should be in range from 1 to 40");
		return e * 4 + 17;
	}, e.getSymbolTotalCodewords = function(e) {
		return n[e];
	}, e.getBCHDigit = function(e) {
		let t = 0;
		for (; e !== 0;) t++, e >>>= 1;
		return t;
	}, e.setToSJISFunction = function(e) {
		if (typeof e != "function") throw Error("\"toSJISFunc\" is not a valid function.");
		t = e;
	}, e.isKanjiModeEnabled = function() {
		return t !== void 0;
	}, e.toSJIS = function(e) {
		return t(e);
	};
})), oo = /* @__PURE__ */ o(((e) => {
	e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 };
	function t(t) {
		if (typeof t != "string") throw Error("Param is not a string");
		switch (t.toLowerCase()) {
			case "l":
			case "low": return e.L;
			case "m":
			case "medium": return e.M;
			case "q":
			case "quartile": return e.Q;
			case "h":
			case "high": return e.H;
			default: throw Error("Unknown EC Level: " + t);
		}
	}
	e.isValid = function(e) {
		return e && e.bit !== void 0 && e.bit >= 0 && e.bit < 4;
	}, e.from = function(n, r) {
		if (e.isValid(n)) return n;
		try {
			return t(n);
		} catch {
			return r;
		}
	};
})), so = /* @__PURE__ */ o(((e, t) => {
	function n() {
		this.buffer = [], this.length = 0;
	}
	n.prototype = {
		get: function(e) {
			let t = Math.floor(e / 8);
			return (this.buffer[t] >>> 7 - e % 8 & 1) == 1;
		},
		put: function(e, t) {
			for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) == 1);
		},
		getLengthInBits: function() {
			return this.length;
		},
		putBit: function(e) {
			let t = Math.floor(this.length / 8);
			this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
		}
	}, t.exports = n;
})), co = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0");
		this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
	}
	n.prototype.set = function(e, t, n, r) {
		let i = e * this.size + t;
		this.data[i] = n, r && (this.reservedBit[i] = !0);
	}, n.prototype.get = function(e, t) {
		return this.data[e * this.size + t];
	}, n.prototype.xor = function(e, t, n) {
		this.data[e * this.size + t] ^= n;
	}, n.prototype.isReserved = function(e, t) {
		return this.reservedBit[e * this.size + t];
	}, t.exports = n;
})), lo = /* @__PURE__ */ o(((e) => {
	var t = ao().getSymbolSize;
	e.getRowColCoords = function(e) {
		if (e === 1) return [];
		let n = Math.floor(e / 7) + 2, r = t(e), i = r === 145 ? 26 : Math.ceil((r - 13) / (2 * n - 2)) * 2, a = [r - 7];
		for (let e = 1; e < n - 1; e++) a[e] = a[e - 1] - i;
		return a.push(6), a.reverse();
	}, e.getPositions = function(t) {
		let n = [], r = e.getRowColCoords(t), i = r.length;
		for (let e = 0; e < i; e++) for (let t = 0; t < i; t++) e === 0 && t === 0 || e === 0 && t === i - 1 || e === i - 1 && t === 0 || n.push([r[e], r[t]]);
		return n;
	};
})), uo = /* @__PURE__ */ o(((e) => {
	var t = ao().getSymbolSize, n = 7;
	e.getPositions = function(e) {
		let r = t(e);
		return [
			[0, 0],
			[r - n, 0],
			[0, r - n]
		];
	};
})), fo = /* @__PURE__ */ o(((e) => {
	e.Patterns = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	};
	var t = {
		N1: 3,
		N2: 3,
		N3: 40,
		N4: 10
	};
	e.isValid = function(e) {
		return e != null && e !== "" && !isNaN(e) && e >= 0 && e <= 7;
	}, e.from = function(t) {
		return e.isValid(t) ? parseInt(t, 10) : void 0;
	}, e.getPenaltyN1 = function(e) {
		let n = e.size, r = 0, i = 0, a = 0, o = null, s = null;
		for (let c = 0; c < n; c++) {
			i = a = 0, o = s = null;
			for (let l = 0; l < n; l++) {
				let n = e.get(c, l);
				n === o ? i++ : (i >= 5 && (r += t.N1 + (i - 5)), o = n, i = 1), n = e.get(l, c), n === s ? a++ : (a >= 5 && (r += t.N1 + (a - 5)), s = n, a = 1);
			}
			i >= 5 && (r += t.N1 + (i - 5)), a >= 5 && (r += t.N1 + (a - 5));
		}
		return r;
	}, e.getPenaltyN2 = function(e) {
		let n = e.size, r = 0;
		for (let t = 0; t < n - 1; t++) for (let i = 0; i < n - 1; i++) {
			let n = e.get(t, i) + e.get(t, i + 1) + e.get(t + 1, i) + e.get(t + 1, i + 1);
			(n === 4 || n === 0) && r++;
		}
		return r * t.N2;
	}, e.getPenaltyN3 = function(e) {
		let n = e.size, r = 0, i = 0, a = 0;
		for (let t = 0; t < n; t++) {
			i = a = 0;
			for (let o = 0; o < n; o++) i = i << 1 & 2047 | e.get(t, o), o >= 10 && (i === 1488 || i === 93) && r++, a = a << 1 & 2047 | e.get(o, t), o >= 10 && (a === 1488 || a === 93) && r++;
		}
		return r * t.N3;
	}, e.getPenaltyN4 = function(e) {
		let n = 0, r = e.data.length;
		for (let t = 0; t < r; t++) n += e.data[t];
		return Math.abs(Math.ceil(n * 100 / r / 5) - 10) * t.N4;
	};
	function n(t, n, r) {
		switch (t) {
			case e.Patterns.PATTERN000: return (n + r) % 2 == 0;
			case e.Patterns.PATTERN001: return n % 2 == 0;
			case e.Patterns.PATTERN010: return r % 3 == 0;
			case e.Patterns.PATTERN011: return (n + r) % 3 == 0;
			case e.Patterns.PATTERN100: return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
			case e.Patterns.PATTERN101: return n * r % 2 + n * r % 3 == 0;
			case e.Patterns.PATTERN110: return (n * r % 2 + n * r % 3) % 2 == 0;
			case e.Patterns.PATTERN111: return (n * r % 3 + (n + r) % 2) % 2 == 0;
			default: throw Error("bad maskPattern:" + t);
		}
	}
	e.applyMask = function(e, t) {
		let r = t.size;
		for (let i = 0; i < r; i++) for (let a = 0; a < r; a++) t.isReserved(a, i) || t.xor(a, i, n(e, a, i));
	}, e.getBestMask = function(t, n) {
		let r = Object.keys(e.Patterns).length, i = 0, a = Infinity;
		for (let o = 0; o < r; o++) {
			n(o), e.applyMask(o, t);
			let r = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
			e.applyMask(o, t), r < a && (a = r, i = o);
		}
		return i;
	};
})), po = /* @__PURE__ */ o(((e) => {
	var t = oo(), n = [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		2,
		2,
		1,
		2,
		2,
		4,
		1,
		2,
		4,
		4,
		2,
		4,
		4,
		4,
		2,
		4,
		6,
		5,
		2,
		4,
		6,
		6,
		2,
		5,
		8,
		8,
		4,
		5,
		8,
		8,
		4,
		5,
		8,
		11,
		4,
		8,
		10,
		11,
		4,
		9,
		12,
		16,
		4,
		9,
		16,
		16,
		6,
		10,
		12,
		18,
		6,
		10,
		17,
		16,
		6,
		11,
		16,
		19,
		6,
		13,
		18,
		21,
		7,
		14,
		21,
		25,
		8,
		16,
		20,
		25,
		8,
		17,
		23,
		25,
		9,
		17,
		23,
		34,
		9,
		18,
		25,
		30,
		10,
		20,
		27,
		32,
		12,
		21,
		29,
		35,
		12,
		23,
		34,
		37,
		12,
		25,
		34,
		40,
		13,
		26,
		35,
		42,
		14,
		28,
		38,
		45,
		15,
		29,
		40,
		48,
		16,
		31,
		43,
		51,
		17,
		33,
		45,
		54,
		18,
		35,
		48,
		57,
		19,
		37,
		51,
		60,
		19,
		38,
		53,
		63,
		20,
		40,
		56,
		66,
		21,
		43,
		59,
		70,
		22,
		45,
		62,
		74,
		24,
		47,
		65,
		77,
		25,
		49,
		68,
		81
	], r = [
		7,
		10,
		13,
		17,
		10,
		16,
		22,
		28,
		15,
		26,
		36,
		44,
		20,
		36,
		52,
		64,
		26,
		48,
		72,
		88,
		36,
		64,
		96,
		112,
		40,
		72,
		108,
		130,
		48,
		88,
		132,
		156,
		60,
		110,
		160,
		192,
		72,
		130,
		192,
		224,
		80,
		150,
		224,
		264,
		96,
		176,
		260,
		308,
		104,
		198,
		288,
		352,
		120,
		216,
		320,
		384,
		132,
		240,
		360,
		432,
		144,
		280,
		408,
		480,
		168,
		308,
		448,
		532,
		180,
		338,
		504,
		588,
		196,
		364,
		546,
		650,
		224,
		416,
		600,
		700,
		224,
		442,
		644,
		750,
		252,
		476,
		690,
		816,
		270,
		504,
		750,
		900,
		300,
		560,
		810,
		960,
		312,
		588,
		870,
		1050,
		336,
		644,
		952,
		1110,
		360,
		700,
		1020,
		1200,
		390,
		728,
		1050,
		1260,
		420,
		784,
		1140,
		1350,
		450,
		812,
		1200,
		1440,
		480,
		868,
		1290,
		1530,
		510,
		924,
		1350,
		1620,
		540,
		980,
		1440,
		1710,
		570,
		1036,
		1530,
		1800,
		570,
		1064,
		1590,
		1890,
		600,
		1120,
		1680,
		1980,
		630,
		1204,
		1770,
		2100,
		660,
		1260,
		1860,
		2220,
		720,
		1316,
		1950,
		2310,
		750,
		1372,
		2040,
		2430
	];
	e.getBlocksCount = function(e, r) {
		switch (r) {
			case t.L: return n[(e - 1) * 4 + 0];
			case t.M: return n[(e - 1) * 4 + 1];
			case t.Q: return n[(e - 1) * 4 + 2];
			case t.H: return n[(e - 1) * 4 + 3];
			default: return;
		}
	}, e.getTotalCodewordsCount = function(e, n) {
		switch (n) {
			case t.L: return r[(e - 1) * 4 + 0];
			case t.M: return r[(e - 1) * 4 + 1];
			case t.Q: return r[(e - 1) * 4 + 2];
			case t.H: return r[(e - 1) * 4 + 3];
			default: return;
		}
	};
})), mo = /* @__PURE__ */ o(((e) => {
	var t = new Uint8Array(512), n = new Uint8Array(256);
	(function() {
		let e = 1;
		for (let r = 0; r < 255; r++) t[r] = e, n[e] = r, e <<= 1, e & 256 && (e ^= 285);
		for (let e = 255; e < 512; e++) t[e] = t[e - 255];
	})(), e.log = function(e) {
		if (e < 1) throw Error("log(" + e + ")");
		return n[e];
	}, e.exp = function(e) {
		return t[e];
	}, e.mul = function(e, r) {
		return e === 0 || r === 0 ? 0 : t[n[e] + n[r]];
	};
})), ho = /* @__PURE__ */ o(((e) => {
	var t = mo();
	e.mul = function(e, n) {
		let r = new Uint8Array(e.length + n.length - 1);
		for (let i = 0; i < e.length; i++) for (let a = 0; a < n.length; a++) r[i + a] ^= t.mul(e[i], n[a]);
		return r;
	}, e.mod = function(e, n) {
		let r = new Uint8Array(e);
		for (; r.length - n.length >= 0;) {
			let e = r[0];
			for (let i = 0; i < n.length; i++) r[i] ^= t.mul(n[i], e);
			let i = 0;
			for (; i < r.length && r[i] === 0;) i++;
			r = r.slice(i);
		}
		return r;
	}, e.generateECPolynomial = function(n) {
		let r = new Uint8Array([1]);
		for (let i = 0; i < n; i++) r = e.mul(r, new Uint8Array([1, t.exp(i)]));
		return r;
	};
})), go = /* @__PURE__ */ o(((e, t) => {
	var n = ho();
	function r(e) {
		this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
	}
	r.prototype.initialize = function(e) {
		this.degree = e, this.genPoly = n.generateECPolynomial(this.degree);
	}, r.prototype.encode = function(e) {
		if (!this.genPoly) throw Error("Encoder not initialized");
		let t = new Uint8Array(e.length + this.degree);
		t.set(e);
		let r = n.mod(t, this.genPoly), i = this.degree - r.length;
		if (i > 0) {
			let e = new Uint8Array(this.degree);
			return e.set(r, i), e;
		}
		return r;
	}, t.exports = r;
})), _o = /* @__PURE__ */ o(((e) => {
	e.isValid = function(e) {
		return !isNaN(e) && e >= 1 && e <= 40;
	};
})), vo = /* @__PURE__ */ o(((e) => {
	var t = "[0-9]+", n = "[A-Z $%*+\\-./:]+", r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
	r = r.replace(/u/g, "\\u");
	var i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
	e.KANJI = new RegExp(r, "g"), e.BYTE_KANJI = /* @__PURE__ */ RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = new RegExp(i, "g"), e.NUMERIC = new RegExp(t, "g"), e.ALPHANUMERIC = new RegExp(n, "g");
	var a = RegExp("^" + r + "$"), o = RegExp("^" + t + "$"), s = /* @__PURE__ */ RegExp("^[A-Z0-9 $%*+\\-./:]+$");
	e.testKanji = function(e) {
		return a.test(e);
	}, e.testNumeric = function(e) {
		return o.test(e);
	}, e.testAlphanumeric = function(e) {
		return s.test(e);
	};
})), yo = /* @__PURE__ */ o(((e) => {
	var t = _o(), n = vo();
	e.NUMERIC = {
		id: "Numeric",
		bit: 1,
		ccBits: [
			10,
			12,
			14
		]
	}, e.ALPHANUMERIC = {
		id: "Alphanumeric",
		bit: 2,
		ccBits: [
			9,
			11,
			13
		]
	}, e.BYTE = {
		id: "Byte",
		bit: 4,
		ccBits: [
			8,
			16,
			16
		]
	}, e.KANJI = {
		id: "Kanji",
		bit: 8,
		ccBits: [
			8,
			10,
			12
		]
	}, e.MIXED = { bit: -1 }, e.getCharCountIndicator = function(e, n) {
		if (!e.ccBits) throw Error("Invalid mode: " + e);
		if (!t.isValid(n)) throw Error("Invalid version: " + n);
		return n >= 1 && n < 10 ? e.ccBits[0] : n < 27 ? e.ccBits[1] : e.ccBits[2];
	}, e.getBestModeForData = function(t) {
		return n.testNumeric(t) ? e.NUMERIC : n.testAlphanumeric(t) ? e.ALPHANUMERIC : n.testKanji(t) ? e.KANJI : e.BYTE;
	}, e.toString = function(e) {
		if (e && e.id) return e.id;
		throw Error("Invalid mode");
	}, e.isValid = function(e) {
		return e && e.bit && e.ccBits;
	};
	function r(t) {
		if (typeof t != "string") throw Error("Param is not a string");
		switch (t.toLowerCase()) {
			case "numeric": return e.NUMERIC;
			case "alphanumeric": return e.ALPHANUMERIC;
			case "kanji": return e.KANJI;
			case "byte": return e.BYTE;
			default: throw Error("Unknown mode: " + t);
		}
	}
	e.from = function(t, n) {
		if (e.isValid(t)) return t;
		try {
			return r(t);
		} catch {
			return n;
		}
	};
})), bo = /* @__PURE__ */ o(((e) => {
	var t = ao(), n = po(), r = oo(), i = yo(), a = _o(), o = 7973, s = t.getBCHDigit(o);
	function c(t, n, r) {
		for (let i = 1; i <= 40; i++) if (n <= e.getCapacity(i, r, t)) return i;
	}
	function l(e, t) {
		return i.getCharCountIndicator(e, t) + 4;
	}
	function u(e, t) {
		let n = 0;
		return e.forEach(function(e) {
			let r = l(e.mode, t);
			n += r + e.getBitsLength();
		}), n;
	}
	function d(t, n) {
		for (let r = 1; r <= 40; r++) if (u(t, r) <= e.getCapacity(r, n, i.MIXED)) return r;
	}
	e.from = function(e, t) {
		return a.isValid(e) ? parseInt(e, 10) : t;
	}, e.getCapacity = function(e, r, o) {
		if (!a.isValid(e)) throw Error("Invalid QR Code version");
		o === void 0 && (o = i.BYTE);
		let s = (t.getSymbolTotalCodewords(e) - n.getTotalCodewordsCount(e, r)) * 8;
		if (o === i.MIXED) return s;
		let c = s - l(o, e);
		switch (o) {
			case i.NUMERIC: return Math.floor(c / 10 * 3);
			case i.ALPHANUMERIC: return Math.floor(c / 11 * 2);
			case i.KANJI: return Math.floor(c / 13);
			case i.BYTE:
			default: return Math.floor(c / 8);
		}
	}, e.getBestVersionForData = function(e, t) {
		let n, i = r.from(t, r.M);
		if (Array.isArray(e)) {
			if (e.length > 1) return d(e, i);
			if (e.length === 0) return 1;
			n = e[0];
		} else n = e;
		return c(n.mode, n.getLength(), i);
	}, e.getEncodedBits = function(e) {
		if (!a.isValid(e) || e < 7) throw Error("Invalid QR Code version");
		let n = e << 12;
		for (; t.getBCHDigit(n) - s >= 0;) n ^= o << t.getBCHDigit(n) - s;
		return e << 12 | n;
	};
})), xo = /* @__PURE__ */ o(((e) => {
	var t = ao(), n = 1335, r = 21522, i = t.getBCHDigit(n);
	e.getEncodedBits = function(e, a) {
		let o = e.bit << 3 | a, s = o << 10;
		for (; t.getBCHDigit(s) - i >= 0;) s ^= n << t.getBCHDigit(s) - i;
		return (o << 10 | s) ^ r;
	};
})), So = /* @__PURE__ */ o(((e, t) => {
	var n = yo();
	function r(e) {
		this.mode = n.NUMERIC, this.data = e.toString();
	}
	r.getBitsLength = function(e) {
		return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
	}, r.prototype.getLength = function() {
		return this.data.length;
	}, r.prototype.getBitsLength = function() {
		return r.getBitsLength(this.data.length);
	}, r.prototype.write = function(e) {
		let t, n, r;
		for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), r = parseInt(n, 10), e.put(r, 10);
		let i = this.data.length - t;
		i > 0 && (n = this.data.substr(t), r = parseInt(n, 10), e.put(r, i * 3 + 1));
	}, t.exports = r;
})), Co = /* @__PURE__ */ o(((e, t) => {
	var n = yo(), r = /* @__PURE__ */ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");
	function i(e) {
		this.mode = n.ALPHANUMERIC, this.data = e;
	}
	i.getBitsLength = function(e) {
		return 11 * Math.floor(e / 2) + e % 2 * 6;
	}, i.prototype.getLength = function() {
		return this.data.length;
	}, i.prototype.getBitsLength = function() {
		return i.getBitsLength(this.data.length);
	}, i.prototype.write = function(e) {
		let t;
		for (t = 0; t + 2 <= this.data.length; t += 2) {
			let n = r.indexOf(this.data[t]) * 45;
			n += r.indexOf(this.data[t + 1]), e.put(n, 11);
		}
		this.data.length % 2 && e.put(r.indexOf(this.data[t]), 6);
	}, t.exports = i;
})), wo = /* @__PURE__ */ o(((e, t) => {
	var n = yo();
	function r(e) {
		this.mode = n.BYTE, typeof e == "string" ? this.data = new TextEncoder().encode(e) : this.data = new Uint8Array(e);
	}
	r.getBitsLength = function(e) {
		return e * 8;
	}, r.prototype.getLength = function() {
		return this.data.length;
	}, r.prototype.getBitsLength = function() {
		return r.getBitsLength(this.data.length);
	}, r.prototype.write = function(e) {
		for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8);
	}, t.exports = r;
})), To = /* @__PURE__ */ o(((e, t) => {
	var n = yo(), r = ao();
	function i(e) {
		this.mode = n.KANJI, this.data = e;
	}
	i.getBitsLength = function(e) {
		return e * 13;
	}, i.prototype.getLength = function() {
		return this.data.length;
	}, i.prototype.getBitsLength = function() {
		return i.getBitsLength(this.data.length);
	}, i.prototype.write = function(e) {
		let t;
		for (t = 0; t < this.data.length; t++) {
			let n = r.toSJIS(this.data[t]);
			if (n >= 33088 && n <= 40956) n -= 33088;
			else if (n >= 57408 && n <= 60351) n -= 49472;
			else throw Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
			n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13);
		}
	}, t.exports = i;
})), Eo = /* @__PURE__ */ o(((e, t) => {
	var n = {
		single_source_shortest_paths: function(e, t, r) {
			var i = {}, a = {};
			a[t] = 0;
			var o = n.PriorityQueue.make();
			o.push(t, 0);
			for (var s, c, l, u, d, f, p, m, h; !o.empty();) for (l in s = o.pop(), c = s.value, u = s.cost, d = e[c] || {}, d) d.hasOwnProperty(l) && (f = d[l], p = u + f, m = a[l], h = a[l] === void 0, (h || m > p) && (a[l] = p, o.push(l, p), i[l] = c));
			if (r !== void 0 && a[r] === void 0) {
				var g = [
					"Could not find a path from ",
					t,
					" to ",
					r,
					"."
				].join("");
				throw Error(g);
			}
			return i;
		},
		extract_shortest_path_from_predecessor_list: function(e, t) {
			for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
			return n.reverse(), n;
		},
		find_path: function(e, t, r) {
			var i = n.single_source_shortest_paths(e, t, r);
			return n.extract_shortest_path_from_predecessor_list(i, r);
		},
		PriorityQueue: {
			make: function(e) {
				var t = n.PriorityQueue, r = {}, i;
				for (i in e ||= {}, t) t.hasOwnProperty(i) && (r[i] = t[i]);
				return r.queue = [], r.sorter = e.sorter || t.default_sorter, r;
			},
			default_sorter: function(e, t) {
				return e.cost - t.cost;
			},
			push: function(e, t) {
				var n = {
					value: e,
					cost: t
				};
				this.queue.push(n), this.queue.sort(this.sorter);
			},
			pop: function() {
				return this.queue.shift();
			},
			empty: function() {
				return this.queue.length === 0;
			}
		}
	};
	t !== void 0 && (t.exports = n);
})), Do = /* @__PURE__ */ o(((e) => {
	var t = yo(), n = So(), r = Co(), i = wo(), a = To(), o = vo(), s = ao(), c = Eo();
	function l(e) {
		return unescape(encodeURIComponent(e)).length;
	}
	function u(e, t, n) {
		let r = [], i;
		for (; (i = e.exec(n)) !== null;) r.push({
			data: i[0],
			index: i.index,
			mode: t,
			length: i[0].length
		});
		return r;
	}
	function d(e) {
		let n = u(o.NUMERIC, t.NUMERIC, e), r = u(o.ALPHANUMERIC, t.ALPHANUMERIC, e), i, a;
		return s.isKanjiModeEnabled() ? (i = u(o.BYTE, t.BYTE, e), a = u(o.KANJI, t.KANJI, e)) : (i = u(o.BYTE_KANJI, t.BYTE, e), a = []), n.concat(r, i, a).sort(function(e, t) {
			return e.index - t.index;
		}).map(function(e) {
			return {
				data: e.data,
				mode: e.mode,
				length: e.length
			};
		});
	}
	function f(e, o) {
		switch (o) {
			case t.NUMERIC: return n.getBitsLength(e);
			case t.ALPHANUMERIC: return r.getBitsLength(e);
			case t.KANJI: return a.getBitsLength(e);
			case t.BYTE: return i.getBitsLength(e);
		}
	}
	function p(e) {
		return e.reduce(function(e, t) {
			let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
			return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e);
		}, []);
	}
	function m(e) {
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			switch (i.mode) {
				case t.NUMERIC:
					n.push([
						i,
						{
							data: i.data,
							mode: t.ALPHANUMERIC,
							length: i.length
						},
						{
							data: i.data,
							mode: t.BYTE,
							length: i.length
						}
					]);
					break;
				case t.ALPHANUMERIC:
					n.push([i, {
						data: i.data,
						mode: t.BYTE,
						length: i.length
					}]);
					break;
				case t.KANJI:
					n.push([i, {
						data: i.data,
						mode: t.BYTE,
						length: l(i.data)
					}]);
					break;
				case t.BYTE: n.push([{
					data: i.data,
					mode: t.BYTE,
					length: l(i.data)
				}]);
			}
		}
		return n;
	}
	function h(e, n) {
		let r = {}, i = { start: {} }, a = ["start"];
		for (let o = 0; o < e.length; o++) {
			let s = e[o], c = [];
			for (let e = 0; e < s.length; e++) {
				let l = s[e], u = "" + o + e;
				c.push(u), r[u] = {
					node: l,
					lastCount: 0
				}, i[u] = {};
				for (let e = 0; e < a.length; e++) {
					let o = a[e];
					r[o] && r[o].node.mode === l.mode ? (i[o][u] = f(r[o].lastCount + l.length, l.mode) - f(r[o].lastCount, l.mode), r[o].lastCount += l.length) : (r[o] && (r[o].lastCount = l.length), i[o][u] = f(l.length, l.mode) + 4 + t.getCharCountIndicator(l.mode, n));
				}
			}
			a = c;
		}
		for (let e = 0; e < a.length; e++) i[a[e]].end = 0;
		return {
			map: i,
			table: r
		};
	}
	function g(e, o) {
		let c, l = t.getBestModeForData(e);
		if (c = t.from(o, l), c !== t.BYTE && c.bit < l.bit) throw Error("\"" + e + "\" cannot be encoded with mode " + t.toString(c) + ".\n Suggested mode is: " + t.toString(l));
		switch (c === t.KANJI && !s.isKanjiModeEnabled() && (c = t.BYTE), c) {
			case t.NUMERIC: return new n(e);
			case t.ALPHANUMERIC: return new r(e);
			case t.KANJI: return new a(e);
			case t.BYTE: return new i(e);
		}
	}
	e.fromArray = function(e) {
		return e.reduce(function(e, t) {
			return typeof t == "string" ? e.push(g(t, null)) : t.data && e.push(g(t.data, t.mode)), e;
		}, []);
	}, e.fromString = function(t, n) {
		let r = h(m(d(t, s.isKanjiModeEnabled())), n), i = c.find_path(r.map, "start", "end"), a = [];
		for (let e = 1; e < i.length - 1; e++) a.push(r.table[i[e]].node);
		return e.fromArray(p(a));
	}, e.rawSplit = function(t) {
		return e.fromArray(d(t, s.isKanjiModeEnabled()));
	};
})), Oo = /* @__PURE__ */ o(((e) => {
	var t = ao(), n = oo(), r = so(), i = co(), a = lo(), o = uo(), s = fo(), c = po(), l = go(), u = bo(), d = xo(), f = yo(), p = Do();
	function m(e, t) {
		let n = e.size, r = o.getPositions(t);
		for (let t = 0; t < r.length; t++) {
			let i = r[t][0], a = r[t][1];
			for (let t = -1; t <= 7; t++) if (!(i + t <= -1 || n <= i + t)) for (let r = -1; r <= 7; r++) a + r <= -1 || n <= a + r || (t >= 0 && t <= 6 && (r === 0 || r === 6) || r >= 0 && r <= 6 && (t === 0 || t === 6) || t >= 2 && t <= 4 && r >= 2 && r <= 4 ? e.set(i + t, a + r, !0, !0) : e.set(i + t, a + r, !1, !0));
		}
	}
	function h(e) {
		let t = e.size;
		for (let n = 8; n < t - 8; n++) {
			let t = n % 2 == 0;
			e.set(n, 6, t, !0), e.set(6, n, t, !0);
		}
	}
	function g(e, t) {
		let n = a.getPositions(t);
		for (let t = 0; t < n.length; t++) {
			let r = n[t][0], i = n[t][1];
			for (let t = -2; t <= 2; t++) for (let n = -2; n <= 2; n++) t === -2 || t === 2 || n === -2 || n === 2 || t === 0 && n === 0 ? e.set(r + t, i + n, !0, !0) : e.set(r + t, i + n, !1, !0);
		}
	}
	function _(e, t) {
		let n = e.size, r = u.getEncodedBits(t), i, a, o;
		for (let t = 0; t < 18; t++) i = Math.floor(t / 3), a = t % 3 + n - 8 - 3, o = (r >> t & 1) == 1, e.set(i, a, o, !0), e.set(a, i, o, !0);
	}
	function v(e, t, n) {
		let r = e.size, i = d.getEncodedBits(t, n), a, o;
		for (a = 0; a < 15; a++) o = (i >> a & 1) == 1, a < 6 ? e.set(a, 8, o, !0) : a < 8 ? e.set(a + 1, 8, o, !0) : e.set(r - 15 + a, 8, o, !0), a < 8 ? e.set(8, r - a - 1, o, !0) : a < 9 ? e.set(8, 15 - a - 1 + 1, o, !0) : e.set(8, 15 - a - 1, o, !0);
		e.set(r - 8, 8, 1, !0);
	}
	function y(e, t) {
		let n = e.size, r = -1, i = n - 1, a = 7, o = 0;
		for (let s = n - 1; s > 0; s -= 2) for (s === 6 && s--;;) {
			for (let n = 0; n < 2; n++) if (!e.isReserved(i, s - n)) {
				let r = !1;
				o < t.length && (r = (t[o] >>> a & 1) == 1), e.set(i, s - n, r), a--, a === -1 && (o++, a = 7);
			}
			if (i += r, i < 0 || n <= i) {
				i -= r, r = -r;
				break;
			}
		}
	}
	function b(e, n, i) {
		let a = new r();
		i.forEach(function(t) {
			a.put(t.mode.bit, 4), a.put(t.getLength(), f.getCharCountIndicator(t.mode, e)), t.write(a);
		});
		let o = (t.getSymbolTotalCodewords(e) - c.getTotalCodewordsCount(e, n)) * 8;
		for (a.getLengthInBits() + 4 <= o && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(0);
		let s = (o - a.getLengthInBits()) / 8;
		for (let e = 0; e < s; e++) a.put(e % 2 ? 17 : 236, 8);
		return x(a, e, n);
	}
	function x(e, n, r) {
		let i = t.getSymbolTotalCodewords(n), a = i - c.getTotalCodewordsCount(n, r), o = c.getBlocksCount(n, r), s = o - i % o, u = Math.floor(i / o), d = Math.floor(a / o), f = d + 1, p = u - d, m = new l(p), h = 0, g = Array(o), _ = Array(o), v = 0, y = new Uint8Array(e.buffer);
		for (let e = 0; e < o; e++) {
			let t = e < s ? d : f;
			g[e] = y.slice(h, h + t), _[e] = m.encode(g[e]), h += t, v = Math.max(v, t);
		}
		let b = new Uint8Array(i), x = 0, S, C;
		for (S = 0; S < v; S++) for (C = 0; C < o; C++) S < g[C].length && (b[x++] = g[C][S]);
		for (S = 0; S < p; S++) for (C = 0; C < o; C++) b[x++] = _[C][S];
		return b;
	}
	function S(e, n, r, a) {
		let o;
		if (Array.isArray(e)) o = p.fromArray(e);
		else if (typeof e == "string") {
			let t = n;
			if (!t) {
				let n = p.rawSplit(e);
				t = u.getBestVersionForData(n, r);
			}
			o = p.fromString(e, t || 40);
		} else throw Error("Invalid data");
		let c = u.getBestVersionForData(o, r);
		if (!c) throw Error("The amount of data is too big to be stored in a QR Code");
		if (!n) n = c;
		else if (n < c) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + c + ".\n");
		let l = b(n, r, o), d = new i(t.getSymbolSize(n));
		return m(d, n), h(d), g(d, n), v(d, r, 0), n >= 7 && _(d, n), y(d, l), isNaN(a) && (a = s.getBestMask(d, v.bind(null, d, r))), s.applyMask(a, d), v(d, r, a), {
			modules: d,
			version: n,
			errorCorrectionLevel: r,
			maskPattern: a,
			segments: o
		};
	}
	e.create = function(e, r) {
		if (e === void 0 || e === "") throw Error("No input text");
		let i = n.M, a, o;
		return r !== void 0 && (i = n.from(r.errorCorrectionLevel, n.M), a = u.from(r.version), o = s.from(r.maskPattern), r.toSJISFunc && t.setToSJISFunction(r.toSJISFunc)), S(e, a, i, o);
	};
})), ko = /* @__PURE__ */ o(((e) => {
	function t(e) {
		if (typeof e == "number" && (e = e.toString()), typeof e != "string") throw Error("Color should be defined as hex string");
		let t = e.slice().replace("#", "").split("");
		if (t.length < 3 || t.length === 5 || t.length > 8) throw Error("Invalid hex color: " + e);
		(t.length === 3 || t.length === 4) && (t = Array.prototype.concat.apply([], t.map(function(e) {
			return [e, e];
		}))), t.length === 6 && t.push("F", "F");
		let n = parseInt(t.join(""), 16);
		return {
			r: n >> 24 & 255,
			g: n >> 16 & 255,
			b: n >> 8 & 255,
			a: n & 255,
			hex: "#" + t.slice(0, 6).join("")
		};
	}
	e.getOptions = function(e) {
		e ||= {}, e.color ||= {};
		let n = e.margin === void 0 || e.margin === null || e.margin < 0 ? 4 : e.margin, r = e.width && e.width >= 21 ? e.width : void 0, i = e.scale || 4;
		return {
			width: r,
			scale: r ? 4 : i,
			margin: n,
			color: {
				dark: t(e.color.dark || "#000000ff"),
				light: t(e.color.light || "#ffffffff")
			},
			type: e.type,
			rendererOpts: e.rendererOpts || {}
		};
	}, e.getScale = function(e, t) {
		return t.width && t.width >= e + t.margin * 2 ? t.width / (e + t.margin * 2) : t.scale;
	}, e.getImageWidth = function(t, n) {
		let r = e.getScale(t, n);
		return Math.floor((t + n.margin * 2) * r);
	}, e.qrToImageData = function(t, n, r) {
		let i = n.modules.size, a = n.modules.data, o = e.getScale(i, r), s = Math.floor((i + r.margin * 2) * o), c = r.margin * o, l = [r.color.light, r.color.dark];
		for (let e = 0; e < s; e++) for (let n = 0; n < s; n++) {
			let u = (e * s + n) * 4, d = r.color.light;
			if (e >= c && n >= c && e < s - c && n < s - c) {
				let t = Math.floor((e - c) / o), r = Math.floor((n - c) / o);
				d = l[+!!a[t * i + r]];
			}
			t[u++] = d.r, t[u++] = d.g, t[u++] = d.b, t[u] = d.a;
		}
	};
})), Ao = /* @__PURE__ */ o(((e) => {
	var t = ko();
	function n(e, t, n) {
		e.clearRect(0, 0, t.width, t.height), t.style ||= {}, t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px";
	}
	function r() {
		try {
			return document.createElement("canvas");
		} catch {
			throw Error("You need to specify a canvas element");
		}
	}
	e.render = function(e, i, a) {
		let o = a, s = i;
		o === void 0 && (!i || !i.getContext) && (o = i, i = void 0), i || (s = r()), o = t.getOptions(o);
		let c = t.getImageWidth(e.modules.size, o), l = s.getContext("2d"), u = l.createImageData(c, c);
		return t.qrToImageData(u.data, e, o), n(l, s, c), l.putImageData(u, 0, 0), s;
	}, e.renderToDataURL = function(t, n, r) {
		let i = r;
		i === void 0 && (!n || !n.getContext) && (i = n, n = void 0), i ||= {};
		let a = e.render(t, n, i), o = i.type || "image/png", s = i.rendererOpts || {};
		return a.toDataURL(o, s.quality);
	};
})), jo = /* @__PURE__ */ o(((e) => {
	var t = ko();
	function n(e, t) {
		let n = e.a / 255, r = t + "=\"" + e.hex + "\"";
		return n < 1 ? r + " " + t + "-opacity=\"" + n.toFixed(2).slice(1) + "\"" : r;
	}
	function r(e, t, n) {
		let r = e + t;
		return n !== void 0 && (r += " " + n), r;
	}
	function i(e, t, n) {
		let i = "", a = 0, o = !1, s = 0;
		for (let c = 0; c < e.length; c++) {
			let l = Math.floor(c % t), u = Math.floor(c / t);
			!l && !o && (o = !0), e[c] ? (s++, c > 0 && l > 0 && e[c - 1] || (i += o ? r("M", l + n, .5 + u + n) : r("m", a, 0), a = 0, o = !1), l + 1 < t && e[c + 1] || (i += r("h", s), s = 0)) : a++;
		}
		return i;
	}
	e.render = function(e, r, a) {
		let o = t.getOptions(r), s = e.modules.size, c = e.modules.data, l = s + o.margin * 2, u = o.color.light.a ? "<path " + n(o.color.light, "fill") + " d=\"M0 0h" + l + "v" + l + "H0z\"/>" : "", d = "<path " + n(o.color.dark, "stroke") + " d=\"" + i(c, s, o.margin) + "\"/>", f = "viewBox=\"0 0 " + l + " " + l + "\"", p = "<svg xmlns=\"http://www.w3.org/2000/svg\" " + (o.width ? "width=\"" + o.width + "\" height=\"" + o.width + "\" " : "") + f + " shape-rendering=\"crispEdges\">" + u + d + "</svg>\n";
		return typeof a == "function" && a(null, p), p;
	};
})), Mo = /* @__PURE__ */ c((/* @__PURE__ */ o(((e) => {
	var t = io(), n = Oo(), r = Ao(), i = jo();
	function a(e, r, i, a, o) {
		let s = [].slice.call(arguments, 1), c = s.length, l = typeof s[c - 1] == "function";
		if (!l && !t()) throw Error("Callback required as last argument");
		if (l) {
			if (c < 2) throw Error("Too few arguments provided");
			c === 2 ? (o = i, i = r, r = a = void 0) : c === 3 && (r.getContext && o === void 0 ? (o = a, a = void 0) : (o = a, a = i, i = r, r = void 0));
		} else {
			if (c < 1) throw Error("Too few arguments provided");
			return c === 1 ? (i = r, r = a = void 0) : c === 2 && !r.getContext && (a = i, i = r, r = void 0), new Promise(function(t, o) {
				try {
					t(e(n.create(i, a), r, a));
				} catch (e) {
					o(e);
				}
			});
		}
		try {
			let t = n.create(i, a);
			o(null, e(t, r, a));
		} catch (e) {
			o(e);
		}
	}
	e.create = n.create, e.toCanvas = a.bind(null, r.render), e.toDataURL = a.bind(null, r.renderToDataURL), e.toString = a.bind(null, function(e, t, n) {
		return i.render(e, n);
	});
})))(), 1), No = {
	en: {
		title: "Support the server",
		subtitle: "Pick a tier that fits, then send the donation through any method below.",
		signInRequired: "Sign in to view donation tiers and payment links.",
		loading: "Loading…",
		tierVipName: "VIP",
		tierVipPrice: "29 ₴",
		tierPremiumName: "Premium",
		tierPremiumPrice: "99 ₴",
		tierUltraName: "Ultra",
		tierUltraPrice: "199 ₴",
		tierMostPopular: "Most popular",
		perkPrivates: (e) => `${e} land claim${e === 1 ? "" : "s"}`,
		perkHomes: (e) => `${e} home points`,
		perkKitVip: "VIP kit",
		perkKitPremium: "Premium kit",
		perkKitUltra: "Ultra kit",
		perkWarp: "Create your own warp",
		perkRtp: "Improved random teleport",
		afterPaymentTitle: "After paying",
		afterPaymentBody: "Send a screenshot of the payment with your Minecraft nickname to our Telegram or Discord — the role is granted within 24 hours.",
		methodsTitle: "Payment methods",
		methodMonoLabel: "Mono jar (UAH)",
		methodMonoHint: "Send any amount in hryvnia",
		methodDonatelloLabel: "Donatello",
		methodDonatelloHint: "UAH · cards · Apple Pay",
		methodDonatePayLabel: "DonatePay",
		methodDonatePayHint: "RUB · cards · YooMoney",
		openLink: "Open",
		scanQr: "Scan QR code",
		supportPrefix: "Issues or questions? Reach us on Telegram —"
	},
	ru: {
		title: "Поддержать сервер",
		subtitle: "Выбери удобный уровень и отправь донат любым из способов ниже.",
		signInRequired: "Войди, чтобы увидеть тарифы и ссылки для оплаты.",
		loading: "Загрузка…",
		tierVipName: "VIP",
		tierVipPrice: "29 ₴",
		tierPremiumName: "Премиум",
		tierPremiumPrice: "99 ₴",
		tierUltraName: "Ультра",
		tierUltraPrice: "199 ₴",
		tierMostPopular: "Популярный",
		perkPrivates: (e) => e === 1 ? "1 приват" : `${e} привата`,
		perkHomes: (e) => `${e} ${e === 1 ? "точка" : "точки"} дома`,
		perkKitVip: "Кит VIP",
		perkKitPremium: "Кит премиума",
		perkKitUltra: "Кит ультра",
		perkWarp: "Возможность создать варп",
		perkRtp: "Улучшенный RTP",
		afterPaymentTitle: "После оплаты",
		afterPaymentBody: "Отправь скриншот платежа со своим Minecraft-ником нам в Telegram или Discord — выдача роли в течение 24 часов.",
		methodsTitle: "Способы оплаты",
		methodMonoLabel: "Mono-банка (грн)",
		methodMonoHint: "Любая сумма в гривне",
		methodDonatelloLabel: "Donatello",
		methodDonatelloHint: "UAH · карты · Apple Pay",
		methodDonatePayLabel: "DonatePay",
		methodDonatePayHint: "RUB · карты · ЮMoney",
		openLink: "Открыть",
		scanQr: "Скан QR-кода",
		supportPrefix: "По всем сложностям и вопросам пиши в Telegram —"
	},
	uk: {
		title: "Підтримати сервер",
		subtitle: "Обери зручний рівень і надішли донат будь-яким зі способів нижче.",
		signInRequired: "Увійди, щоб побачити тарифи та посилання для оплати.",
		loading: "Завантаження…",
		tierVipName: "VIP",
		tierVipPrice: "29 ₴",
		tierPremiumName: "Преміум",
		tierPremiumPrice: "99 ₴",
		tierUltraName: "Ультра",
		tierUltraPrice: "199 ₴",
		tierMostPopular: "Популярний",
		perkPrivates: (e) => e === 1 ? "1 приват" : `${e} привати`,
		perkHomes: (e) => `${e} ${e === 1 ? "точка" : "точки"} дому`,
		perkKitVip: "Кіт VIP",
		perkKitPremium: "Кіт преміуму",
		perkKitUltra: "Кіт ультра",
		perkWarp: "Можливість створити варп",
		perkRtp: "Покращений RTP",
		afterPaymentTitle: "Після оплати",
		afterPaymentBody: "Надішли скрін платежу зі своїм Minecraft-ніком нам у Telegram або Discord — видача ролі протягом 24 годин.",
		methodsTitle: "Способи оплати",
		methodMonoLabel: "Mono-банка (грн)",
		methodMonoHint: "Будь-яка сума в гривні",
		methodDonatelloLabel: "Donatello",
		methodDonatelloHint: "UAH · карти · Apple Pay",
		methodDonatePayLabel: "DonatePay",
		methodDonatePayHint: "RUB · картки · ЮMoney",
		openLink: "Відкрити",
		scanQr: "Скан QR-коду",
		supportPrefix: "З усіма складнощами та питаннями — у Telegram до"
	},
	de: {
		title: "Server unterstützen",
		subtitle: "Wähle einen Rang, der zu dir passt, und schicke die Spende über eine der Methoden unten.",
		signInRequired: "Melde dich an, um Spendenränge und Zahlungs-Links zu sehen.",
		loading: "Lädt…",
		tierVipName: "VIP",
		tierVipPrice: "29 ₴",
		tierPremiumName: "Premium",
		tierPremiumPrice: "99 ₴",
		tierUltraName: "Ultra",
		tierUltraPrice: "199 ₴",
		tierMostPopular: "Am beliebtesten",
		perkPrivates: (e) => `${e} ${e === 1 ? "Schutzgebiet" : "Schutzgebiete"}`,
		perkHomes: (e) => `${e} Home-Punkte`,
		perkKitVip: "VIP-Kit",
		perkKitPremium: "Premium-Kit",
		perkKitUltra: "Ultra-Kit",
		perkWarp: "Eigenen Warp erstellen",
		perkRtp: "Verbesserter Random-TP",
		afterPaymentTitle: "Nach der Zahlung",
		afterPaymentBody: "Schick uns einen Screenshot der Zahlung mit deinem Minecraft-Nick auf Telegram oder Discord — der Rang wird innerhalb von 24 Stunden vergeben.",
		methodsTitle: "Zahlungsmethoden",
		methodMonoLabel: "Mono-Glas (UAH)",
		methodMonoHint: "Beliebiger Betrag in Hrywnja",
		methodDonatelloLabel: "Donatello",
		methodDonatelloHint: "UAH · Karten · Apple Pay",
		methodDonatePayLabel: "DonatePay",
		methodDonatePayHint: "RUB · Karten · YooMoney",
		openLink: "Öffnen",
		scanQr: "QR-Code scannen",
		supportPrefix: "Probleme oder Fragen? Schreib uns auf Telegram —"
	},
	pl: {
		title: "Wesprzyj serwer",
		subtitle: "Wybierz pasujący poziom i wyślij darowiznę dowolną z poniższych metod.",
		signInRequired: "Zaloguj się, aby zobaczyć poziomy i linki płatności.",
		loading: "Ładowanie…",
		tierVipName: "VIP",
		tierVipPrice: "29 ₴",
		tierPremiumName: "Premium",
		tierPremiumPrice: "99 ₴",
		tierUltraName: "Ultra",
		tierUltraPrice: "199 ₴",
		tierMostPopular: "Najpopularniejszy",
		perkPrivates: (e) => `${e} ${e === 1 ? "prywatka" : "prywatki"}`,
		perkHomes: (e) => `${e} ${e === 1 ? "punkt" : "punkty"} domu`,
		perkKitVip: "Zestaw VIP",
		perkKitPremium: "Zestaw Premium",
		perkKitUltra: "Zestaw Ultra",
		perkWarp: "Stwórz własny warp",
		perkRtp: "Ulepszony RTP",
		afterPaymentTitle: "Po opłaceniu",
		afterPaymentBody: "Wyślij zrzut ekranu płatności z nickiem Minecraft na nasz Telegram lub Discord — rola zostaje przyznana w ciągu 24 godzin.",
		methodsTitle: "Metody płatności",
		methodMonoLabel: "Mono-słoik (UAH)",
		methodMonoHint: "Dowolna kwota w hrywnach",
		methodDonatelloLabel: "Donatello",
		methodDonatelloHint: "UAH · karty · Apple Pay",
		methodDonatePayLabel: "DonatePay",
		methodDonatePayHint: "RUB · karty · YooMoney",
		openLink: "Otwórz",
		scanQr: "Zeskanuj QR",
		supportPrefix: "Pytania lub problemy? Napisz na Telegrama —"
	}
};
function Po(e) {
	return No[(e || "").slice(0, 2).toLowerCase()] ?? No.en;
}
//#endregion
//#region src/lib/rates.ts
var Fo = "aw-payments-rates", Io = 1440 * 60 * 1e3;
function Lo() {
	if (typeof localStorage > "u") return null;
	try {
		let e = localStorage.getItem(Fo);
		if (!e) return null;
		let t = JSON.parse(e);
		return typeof t?.USD != "number" || typeof t?.RUB != "number" ? null : t;
	} catch {
		return null;
	}
}
function Ro(e) {
	if (!(typeof localStorage > "u")) try {
		localStorage.setItem(Fo, JSON.stringify(e));
	} catch {}
}
function zo(e) {
	return !!e && Date.now() - e.fetchedAt < Io;
}
async function Bo() {
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
	return Ro(i), i;
}
//#endregion
//#region src/assets/qr-donatello.jpg
var Vo = "data:image/jpeg;base64,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", Ho = "data:image/jpeg;base64,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vnlXzyr55V88q+eVfPKvnlXzyr55V88q+eVfPKvnlXzyr55V88q+eVfPKvnlXzyr55V88q+eVfPKvnlXzyr55V88q+eVfPKvnlXzyjogFoBMEE6f+of/2gAMAwEAAgADAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAEEBAAKACAIIAAAOAAAAAAFAAAAAAKKAAAAAEBAAAAKAIAIKAKBAAAAFFAAAAAAKPAAEAAAEAEMMIAAAAIIKFEAAAFFAAAAAAKPAAAAAAAAAGAOMJGIAAAFAAAAFFAAAAAAKPAAAAAABMIACKAAEAKIAFAAAAFFAAAAAAKJDDDDAACAAHLJCADABAKFDDDDHFAAAAAAKAAAAAAAEAAKAICABALAIAAAAAAFAAAAAAAAAAAAABAAAKACACAALLAAAAAAABAAAAAAKBAEAADBFABAAKDAACAGFABAAAFFAAAAAAKPAABECFDDBIAACCAAALDAABADHEAAAAAAJNABCBCACAADDKCAAAKEGAAAFDHBAAAAAABIAFDBDFHAADCBAAACAALEAADCEEAAAAAAKDKGCDCBDBCIAKAADCBDKDAACADCAAAAAAKEIDNHMMICAAOJDDDCKLIFAMFAAFAAAAAAENAFENMMIEIFEOIMAAKKMIMMEIFMAAAAAAAOOEAEAAFAMCIKAEAAGFBAAAFAFAAAAAAAAKKFAAAAEAAIAKAAAIIEFAAAAAFAAAAAAAODIFAEMIAAAAGAAMIAABFAAAJEIAAAAAAAMNEJMAMMJAAJKAAAAAOGMAMIFAAAAAAAAAAKAFAEABEAEAKAIAIACAAAAEEAAAAAAAAAAMIAMEMMMIIAEMMMMMIAGMIAAAMNAAAAAAOMMMMMMENEJDDEHIMMMAOJAABMAPAAAAAAKCAAAAAAFAAAAAAAIBDAIEBAHFFGAAAAAAKPAAAAAAGDAFDAAAAADCBDABHDBCAAAAAAKPAAAAAAFAAHKIAAAAKAHABAFBFFAAAAAAKOAABAAAAAAKBIDAADIAKABDGBHFAAAAAAKIAAAAAAFAALAKAAAAAAFAAAFAFAAAAAAALDDDDDDADDDGAADCABDDGAAAABGAAAAAAAAAAAAAAAAA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", Uo = 0;
Array.isArray;
function $(e, t, n, r, i, a) {
	t ||= {};
	var o, s, c = t;
	if ("ref" in c) for (s in c = {}, t) s == "ref" ? o = t[s] : c[s] = t[s];
	var l = {
		type: e,
		props: c,
		key: n,
		ref: o,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --Uo,
		__i: -1,
		__u: 0,
		__source: i,
		__self: a
	};
	if (typeof e == "function" && (o = e.defaultProps)) for (s in o) c[s] === void 0 && (c[s] = o[s]);
	return u.vnode && u.vnode(l), l;
}
//#endregion
//#region src/PaymentsWidget.tsx
function Wo(e, t) {
	if (typeof document > "u") return e && t ? no(e, t, { auth: {
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
	let i = no(e, t, { auth: {
		persistSession: !0,
		autoRefreshToken: !0,
		detectSessionInUrl: !0
	} });
	return document.addEventListener("anubis-need-supabase", (e) => {
		let t = e.detail;
		t && !t.client && (t.client = i);
	}), i;
}
var Go = "https://send.monobank.ua/jar/75xtF3s12M", Ko = "https://donatello.to/AnubisWorld", qo = "https://donatepay.ru/don/AnubisWorld", Jo = [
	{
		id: "vip",
		nameKey: "tierVipName",
		priceUAH: 29,
		privates: 1,
		homes: 2,
		kitKey: "perkKitVip",
		extras: ["warp"]
	},
	{
		id: "premium",
		nameKey: "tierPremiumName",
		priceUAH: 99,
		privates: 2,
		homes: 3,
		kitKey: "perkKitPremium",
		extras: ["warp"],
		popular: !0
	},
	{
		id: "ultra",
		nameKey: "tierUltraName",
		priceUAH: 199,
		privates: 3,
		homes: 4,
		kitKey: "perkKitUltra",
		extras: ["warp", "rtp"]
	}
];
function Yo({ supabaseUrl: e, supabaseKey: t, lang: n }) {
	let r = Po(n), i = nt(null);
	i.current ||= Wo(e, t);
	let a = i.current, [o, s] = $e(null), [c, l] = $e(!0);
	return tt(() => {
		if (!a) {
			l(!1);
			return;
		}
		a.auth.getSession().then(({ data: e }) => {
			s(e.session), l(!1);
		});
		let { data: e } = a.auth.onAuthStateChange((e, t) => s(t));
		return () => e.subscription.unsubscribe();
	}, [a]), c ? /* @__PURE__ */ $("div", {
		class: "aw-payments-scope flex items-center justify-center p-12 text-gray-400",
		children: /* @__PURE__ */ $("div", { class: "w-6 h-6 rounded-full border-2 border-brand-500/30 border-t-brand-400 animate-spin" })
	}) : o?.user ? /* @__PURE__ */ $("div", {
		class: "aw-payments-scope",
		children: /* @__PURE__ */ $(Xo, { t: r })
	}) : /* @__PURE__ */ $("div", {
		class: "aw-payments-scope p-8 text-center text-gray-400 text-sm",
		children: r.signInRequired
	});
}
function Xo({ t: e }) {
	let [t, n] = $e(() => Lo());
	return tt(() => {
		if (zo(t)) return;
		let e = !1;
		return Bo().then((t) => {
			e || n(t);
		}).catch(() => {}), () => {
			e = !0;
		};
	}, []), /* @__PURE__ */ $("div", {
		class: "w-full mx-auto max-w-5xl text-gray-100 space-y-8",
		children: [
			/* @__PURE__ */ $("div", {
				class: "text-center",
				children: [/* @__PURE__ */ $("h2", {
					class: "text-2xl sm:text-3xl font-bold tracking-tight mb-2",
					children: /* @__PURE__ */ $("span", {
						class: "gold-text",
						children: e.title
					})
				}), /* @__PURE__ */ $("p", {
					class: "text-sm text-gray-400 max-w-xl mx-auto",
					children: e.subtitle
				})]
			}),
			/* @__PURE__ */ $("div", {
				class: "grid gap-4 md:grid-cols-3",
				children: Jo.map((n) => /* @__PURE__ */ $(Zo, {
					tier: n,
					t: e,
					rates: t
				}, n.id))
			}),
			/* @__PURE__ */ $("div", {
				class: "glass rounded-2xl p-5 space-y-2",
				children: [/* @__PURE__ */ $("h3", {
					class: "text-sm font-semibold text-brand-300",
					children: e.afterPaymentTitle
				}), /* @__PURE__ */ $("p", {
					class: "text-sm text-gray-400 leading-relaxed",
					children: e.afterPaymentBody
				})]
			}),
			/* @__PURE__ */ $("div", {
				class: "space-y-3",
				children: [/* @__PURE__ */ $("h3", {
					class: "text-xs font-semibold uppercase tracking-wider text-gray-400",
					children: e.methodsTitle
				}), /* @__PURE__ */ $("div", {
					class: "grid gap-3 md:grid-cols-3",
					children: [
						/* @__PURE__ */ $(Qo, {
							label: e.methodMonoLabel,
							hint: e.methodMonoHint,
							url: Go,
							qrSource: "generate",
							t: e,
							accent: "from-amber-400/20 to-amber-400/5",
							icon: /* @__PURE__ */ $(es, {})
						}),
						/* @__PURE__ */ $(Qo, {
							label: e.methodDonatelloLabel,
							hint: e.methodDonatelloHint,
							url: Ko,
							qrSource: Vo,
							t: e,
							accent: "from-blue-500/20 to-blue-500/5",
							icon: /* @__PURE__ */ $(ts, {})
						}),
						/* @__PURE__ */ $(Qo, {
							label: e.methodDonatePayLabel,
							hint: e.methodDonatePayHint,
							url: qo,
							qrSource: Ho,
							t: e,
							accent: "from-emerald-500/20 to-emerald-500/5",
							icon: /* @__PURE__ */ $(ns, {})
						})
					]
				})]
			}),
			/* @__PURE__ */ $("div", {
				class: "pt-2 text-center text-xs text-gray-500",
				children: [
					e.supportPrefix,
					" ",
					/* @__PURE__ */ $("a", {
						href: "https://t.me/AnubisWorld_Support",
						target: "_blank",
						rel: "noopener noreferrer",
						class: "text-brand-300 hover:text-brand-200 font-mono",
						children: "@AnubisWorld_Support"
					})
				]
			})
		]
	});
}
function Zo({ tier: e, t, rates: n }) {
	let r = e.popular, i = n ? (e.priceUAH * n.USD).toFixed(2) : null, a = n ? Math.round(e.priceUAH * n.RUB) : null;
	return /* @__PURE__ */ $("div", {
		class: `relative rounded-2xl p-5 ${r ? "tier-card-pop" : "glass"} flex flex-col gap-4`,
		children: [
			r && /* @__PURE__ */ $("span", {
				class: "absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-500 to-violet-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full",
				children: t.tierMostPopular
			}),
			/* @__PURE__ */ $("div", {
				class: "text-center",
				children: [
					/* @__PURE__ */ $("div", {
						class: "text-xs uppercase tracking-widest text-brand-300 mb-1",
						children: t[e.nameKey]
					}),
					/* @__PURE__ */ $("div", {
						class: "text-3xl font-bold gold-text leading-none",
						children: [e.priceUAH, " ₴"]
					}),
					i && a && /* @__PURE__ */ $("div", {
						class: "text-sm text-gray-300 mt-2 flex items-center justify-center gap-2 flex-wrap",
						children: [
							/* @__PURE__ */ $("span", { children: [
								"≈\xA0",
								a,
								"\xA0₽"
							] }),
							/* @__PURE__ */ $("span", {
								class: "text-brand-400/40",
								children: "/"
							}),
							/* @__PURE__ */ $("span", { children: ["≈\xA0$", i] })
						]
					})
				]
			}),
			/* @__PURE__ */ $("ul", {
				class: "space-y-2 text-sm",
				children: [
					/* @__PURE__ */ $("li", {
						class: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ $($o, {}),
							" ",
							t.perkPrivates(e.privates)
						]
					}),
					/* @__PURE__ */ $("li", {
						class: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ $($o, {}),
							" ",
							t.perkHomes(e.homes)
						]
					}),
					/* @__PURE__ */ $("li", {
						class: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ $($o, {}),
							" ",
							t[e.kitKey]
						]
					}),
					e.extras.includes("warp") && /* @__PURE__ */ $("li", {
						class: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ $($o, {}),
							" ",
							t.perkWarp
						]
					}),
					e.extras.includes("rtp") && /* @__PURE__ */ $("li", {
						class: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ $($o, {}),
							" ",
							t.perkRtp
						]
					})
				]
			})
		]
	});
}
function Qo({ label: e, hint: t, url: n, qrSource: r, t: i, accent: a, icon: o }) {
	let [s, c] = $e(null);
	return tt(() => {
		r !== "generate" || s || Mo.toString(n, {
			type: "svg",
			errorCorrectionLevel: "H",
			margin: 1,
			color: {
				dark: "#070612",
				light: "#ffffff"
			}
		}).then((e) => c(e)).catch(() => {});
	}, [
		r,
		n,
		s
	]), /* @__PURE__ */ $("div", {
		class: `glass rounded-2xl p-4 flex flex-col gap-3 bg-gradient-to-br ${a}`,
		children: [
			/* @__PURE__ */ $("div", {
				class: "flex items-center gap-3",
				children: [/* @__PURE__ */ $("div", {
					class: "w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0",
					children: o
				}), /* @__PURE__ */ $("div", {
					class: "flex-1 min-w-0",
					children: [/* @__PURE__ */ $("div", {
						class: "font-bold text-sm text-white truncate",
						children: e
					}), /* @__PURE__ */ $("div", {
						class: "text-[11px] text-gray-400 truncate",
						children: t
					})]
				})]
			}),
			/* @__PURE__ */ $("div", {
				class: "rounded-xl overflow-hidden bg-white p-2 flex items-center justify-center",
				style: "min-height:140px",
				children: r === "generate" ? s ? /* @__PURE__ */ $("div", {
					class: "w-full max-w-[180px]",
					dangerouslySetInnerHTML: { __html: s }
				}) : /* @__PURE__ */ $("div", {
					class: "text-xs text-gray-400",
					children: i.loading
				}) : /* @__PURE__ */ $("img", {
					src: r,
					alt: e,
					class: "max-w-[180px] w-full h-auto"
				})
			}),
			/* @__PURE__ */ $("a", {
				href: n,
				target: "_blank",
				rel: "noopener noreferrer",
				class: "btn-glow inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-semibold px-4 py-2 rounded-xl text-xs shadow-md shadow-brand-600/30",
				children: [i.openLink, /* @__PURE__ */ $("svg", {
					class: "w-3.5 h-3.5",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ $("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M14 5l7 7m0 0l-7 7m7-7H3"
					})
				})]
			})
		]
	});
}
var $o = () => /* @__PURE__ */ $("svg", {
	class: "w-4 h-4 text-egypt-400 flex-shrink-0",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2.5",
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ $("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M5 13l4 4L19 7"
	})
}), es = () => /* @__PURE__ */ $("svg", {
	class: "w-5 h-5 text-amber-400",
	fill: "currentColor",
	viewBox: "0 0 24 24",
	children: [/* @__PURE__ */ $("circle", {
		cx: "12",
		cy: "12",
		r: "10",
		stroke: "currentColor",
		"stroke-width": "1.5",
		fill: "none"
	}), /* @__PURE__ */ $("text", {
		x: "12",
		y: "16",
		"text-anchor": "middle",
		"font-size": "11",
		"font-weight": "bold",
		fill: "currentColor",
		children: "₴"
	})]
}), ts = () => /* @__PURE__ */ $("svg", {
	class: "w-5 h-5 text-blue-400",
	fill: "currentColor",
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ $("text", {
		x: "12",
		y: "17",
		"text-anchor": "middle",
		"font-size": "14",
		"font-weight": "900",
		fill: "currentColor",
		children: "D"
	})
}), ns = () => /* @__PURE__ */ $("svg", {
	class: "w-5 h-5 text-emerald-400",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2.2",
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ $("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M12 4v16m4-12H10a2 2 0 100 4h4a2 2 0 010 4H8"
	})
}), rs = ".aw-payments-scope,.aw-payments-scope :before,.aw-payments-scope :after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.aw-payments-scope ::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.aw-payments-scope .absolute{position:absolute}.aw-payments-scope .relative{position:relative}.aw-payments-scope .-top-3{top:-.75rem}.aw-payments-scope .left-1\\/2{left:50%}.aw-payments-scope .mx-auto{margin-left:auto;margin-right:auto}.aw-payments-scope .mb-1{margin-bottom:.25rem}.aw-payments-scope .mb-2{margin-bottom:.5rem}.aw-payments-scope .mt-2{margin-top:.5rem}.aw-payments-scope .block{display:block}.aw-payments-scope .inline{display:inline}.aw-payments-scope .flex{display:flex}.aw-payments-scope .inline-flex{display:inline-flex}.aw-payments-scope .grid{display:grid}.aw-payments-scope .h-10{height:2.5rem}.aw-payments-scope .h-3\\.5{height:.875rem}.aw-payments-scope .h-4{height:1rem}.aw-payments-scope .h-5{height:1.25rem}.aw-payments-scope .h-6{height:1.5rem}.aw-payments-scope .h-auto{height:auto}.aw-payments-scope .w-10{width:2.5rem}.aw-payments-scope .w-3\\.5{width:.875rem}.aw-payments-scope .w-4{width:1rem}.aw-payments-scope .w-5{width:1.25rem}.aw-payments-scope .w-6{width:1.5rem}.aw-payments-scope .w-full{width:100%}.aw-payments-scope .min-w-0{min-width:0}.aw-payments-scope .max-w-5xl{max-width:64rem}.aw-payments-scope .max-w-\\[180px\\]{max-width:180px}.aw-payments-scope .max-w-xl{max-width:36rem}.aw-payments-scope .flex-1{flex:1}.aw-payments-scope .flex-shrink-0{flex-shrink:0}.aw-payments-scope .-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(360deg)}}.aw-payments-scope .animate-spin{animation:1s linear infinite spin}.aw-payments-scope .flex-col{flex-direction:column}.aw-payments-scope .flex-wrap{flex-wrap:wrap}.aw-payments-scope .items-center{align-items:center}.aw-payments-scope .justify-center{justify-content:center}.aw-payments-scope .gap-2{gap:.5rem}.aw-payments-scope .gap-3{gap:.75rem}.aw-payments-scope .gap-4{gap:1rem}.aw-payments-scope :is(.space-y-2>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.aw-payments-scope :is(.space-y-3>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.aw-payments-scope :is(.space-y-8>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.aw-payments-scope .overflow-hidden{overflow:hidden}.aw-payments-scope .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.aw-payments-scope .rounded-2xl{border-radius:1rem}.aw-payments-scope .rounded-full{border-radius:9999px}.aw-payments-scope .rounded-xl{border-radius:.75rem}.aw-payments-scope .border-2{border-width:2px}.aw-payments-scope .border-brand-500\\/30{border-color:#8b5cf64d}.aw-payments-scope .border-t-brand-400{--tw-border-opacity:1;border-top-color:rgb(167 139 250/var(--tw-border-opacity,1))}.aw-payments-scope .bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.aw-payments-scope .bg-gradient-to-br{background-image:linear-gradient(to bottom right, var(--tw-gradient-stops))}.aw-payments-scope .bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.aw-payments-scope .from-amber-400\\/20{--tw-gradient-from:#fbbf2433 var(--tw-gradient-from-position);--tw-gradient-to:#fbbf2400 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.aw-payments-scope .from-blue-500\\/20{--tw-gradient-from:#3b82f633 var(--tw-gradient-from-position);--tw-gradient-to:#3b82f600 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.aw-payments-scope .from-brand-500{--tw-gradient-from:#8b5cf6 var(--tw-gradient-from-position);--tw-gradient-to:#8b5cf600 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.aw-payments-scope .from-brand-600{--tw-gradient-from:#7c3aed var(--tw-gradient-from-position);--tw-gradient-to:#7c3aed00 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.aw-payments-scope .from-emerald-500\\/20{--tw-gradient-from:#10b98133 var(--tw-gradient-from-position);--tw-gradient-to:#10b98100 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.aw-payments-scope .to-amber-400\\/5{--tw-gradient-to:#fbbf240d var(--tw-gradient-to-position)}.aw-payments-scope .to-blue-500\\/5{--tw-gradient-to:#3b82f60d var(--tw-gradient-to-position)}.aw-payments-scope .to-brand-500{--tw-gradient-to:#8b5cf6 var(--tw-gradient-to-position)}.aw-payments-scope .to-emerald-500\\/5{--tw-gradient-to:#10b9810d var(--tw-gradient-to-position)}.aw-payments-scope .to-violet-500{--tw-gradient-to:#a855f7 var(--tw-gradient-to-position)}.aw-payments-scope .p-12{padding:3rem}.aw-payments-scope .p-2{padding:.5rem}.aw-payments-scope .p-4{padding:1rem}.aw-payments-scope .p-5{padding:1.25rem}.aw-payments-scope .p-8{padding:2rem}.aw-payments-scope .px-3{padding-left:.75rem;padding-right:.75rem}.aw-payments-scope .px-4{padding-left:1rem;padding-right:1rem}.aw-payments-scope .py-1{padding-top:.25rem;padding-bottom:.25rem}.aw-payments-scope .py-2{padding-top:.5rem;padding-bottom:.5rem}.aw-payments-scope .pt-2{padding-top:.5rem}.aw-payments-scope .text-center{text-align:center}.aw-payments-scope .font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.aw-payments-scope .text-2xl{font-size:1.5rem;line-height:2rem}.aw-payments-scope .text-3xl{font-size:1.875rem;line-height:2.25rem}.aw-payments-scope .text-\\[10px\\]{font-size:10px}.aw-payments-scope .text-\\[11px\\]{font-size:11px}.aw-payments-scope .text-sm{font-size:.875rem;line-height:1.25rem}.aw-payments-scope .text-xs{font-size:.75rem;line-height:1rem}.aw-payments-scope .font-bold{font-weight:700}.aw-payments-scope .font-semibold{font-weight:600}.aw-payments-scope .uppercase{text-transform:uppercase}.aw-payments-scope .leading-none{line-height:1}.aw-payments-scope .leading-relaxed{line-height:1.625}.aw-payments-scope .tracking-tight{letter-spacing:-.025em}.aw-payments-scope .tracking-wider{letter-spacing:.05em}.aw-payments-scope .tracking-widest{letter-spacing:.1em}.aw-payments-scope .text-amber-400{--tw-text-opacity:1;color:rgb(251 191 36/var(--tw-text-opacity,1))}.aw-payments-scope .text-blue-400{--tw-text-opacity:1;color:rgb(96 165 250/var(--tw-text-opacity,1))}.aw-payments-scope .text-brand-400\\/40{color:#a78bfa66}.aw-payments-scope .text-egypt-400{--tw-text-opacity:1;color:rgb(34 211 238/var(--tw-text-opacity,1))}.aw-payments-scope .text-emerald-400{--tw-text-opacity:1;color:rgb(52 211 153/var(--tw-text-opacity,1))}.aw-payments-scope .text-gray-100{--tw-text-opacity:1;color:rgb(243 244 246/var(--tw-text-opacity,1))}.aw-payments-scope .text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1))}.aw-payments-scope .text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.aw-payments-scope .text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.aw-payments-scope .text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.aw-payments-scope .shadow{--tw-shadow:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.aw-payments-scope .shadow-md{--tw-shadow:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow)}.aw-payments-scope .shadow-brand-600\\/30{--tw-shadow-color:#7c3aed4d;--tw-shadow:var(--tw-shadow-colored)}.aw-payments-scope .glass{-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);background:#8b5cf60f;border:1px solid #8b5cf62e}.aw-payments-scope .btn-glow{position:relative;overflow:hidden}.aw-payments-scope .btn-glow:after{content:\"\";pointer-events:none;background:linear-gradient(90deg,#0000,#ffffff2e,#0000);transition:transform .5s;position:absolute;inset:0;transform:translate(-100%)}.aw-payments-scope .btn-glow:hover:after{transform:translate(100%)}.aw-payments-scope .gold-text{color:#0000;background:linear-gradient(135deg,#c084fc 0%,#a855f7 50%,#22d3ee 100%);-webkit-background-clip:text;background-clip:text}.aw-payments-scope .tier-card-pop{background:linear-gradient(#7c3aed26 0%,#22d3ee0d 100%);border:1px solid #a855f773;box-shadow:0 8px 32px #7c3aed2e}.aw-payments-scope .hover\\:from-brand-700:hover{--tw-gradient-from:#6d28d9 var(--tw-gradient-from-position);--tw-gradient-to:#6d28d900 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.aw-payments-scope .hover\\:to-brand-600:hover{--tw-gradient-to:#7c3aed var(--tw-gradient-to-position)}@media (min-width:640px){.aw-payments-scope .sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}@media (min-width:768px){.aw-payments-scope .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}", is = "anubis-payments-styles";
if (typeof document < "u" && !document.getElementById(is)) {
	let e = document.createElement("style");
	e.id = is, e.textContent = rs, document.head.appendChild(e);
}
Ne(Yo, "anubis-payments", [
	"supabase-url",
	"supabase-key",
	"lang",
	"mode"
], { shadow: !1 });
//#endregion
