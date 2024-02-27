var F = Object.defineProperty
var G = (t, e, n) =>
	e in t
		? F(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
		: (t[e] = n)
var g = (t, e, n) => (G(t, typeof e != 'symbol' ? e + '' : e, n), n)
;(function () {
	const e = document.createElement('link').relList
	if (e && e.supports && e.supports('modulepreload')) return
	for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s)
	new MutationObserver((s) => {
		for (const o of s)
			if (o.type === 'childList')
				for (const l of o.addedNodes)
					l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(s) {
		const o = {}
		return (
			s.integrity && (o.integrity = s.integrity),
			s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
			s.crossOrigin === 'use-credentials'
				? (o.credentials = 'include')
				: s.crossOrigin === 'anonymous'
				? (o.credentials = 'omit')
				: (o.credentials = 'same-origin'),
			o
		)
	}
	function r(s) {
		if (s.ep) return
		s.ep = !0
		const o = n(s)
		fetch(s.href, o)
	}
})()
function c() {}
function I(t) {
	return t()
}
function P() {
	return Object.create(null)
}
function b(t) {
	t.forEach(I)
}
function L(t) {
	return typeof t == 'function'
}
function N(t, e) {
	return t != t
		? e == e
		: t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
function K(t) {
	return Object.keys(t).length === 0
}
function A(t, e, n) {
	t.insertBefore(e, n || null)
}
function v(t) {
	t.parentNode && t.parentNode.removeChild(t)
}
function j(t) {
	return document.createElement(t)
}
function T(t, e, n) {
	n == null
		? t.removeAttribute(e)
		: t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function V(t) {
	return Array.from(t.childNodes)
}
let w
function p(t) {
	w = t
}
const d = [],
	k = []
let f = []
const C = [],
	z = Promise.resolve()
let _ = !1
function J() {
	_ || ((_ = !0), z.then(M))
}
function $(t) {
	f.push(t)
}
const y = new Set()
let u = 0
function M() {
	if (u !== 0) return
	const t = w
	do {
		try {
			for (; u < d.length; ) {
				const e = d[u]
				u++, p(e), Q(e.$$)
			}
		} catch (e) {
			throw ((d.length = 0), (u = 0), e)
		}
		for (p(null), d.length = 0, u = 0; k.length; ) k.pop()()
		for (let e = 0; e < f.length; e += 1) {
			const n = f[e]
			y.has(n) || (y.add(n), n())
		}
		f.length = 0
	} while (d.length)
	for (; C.length; ) C.pop()()
	;(_ = !1), y.clear(), p(t)
}
function Q(t) {
	if (t.fragment !== null) {
		t.update(), b(t.before_update)
		const e = t.dirty
		;(t.dirty = [-1]),
			t.fragment && t.fragment.p(t.ctx, e),
			t.after_update.forEach($)
	}
}
function W(t) {
	const e = [],
		n = []
	f.forEach((r) => (t.indexOf(r) === -1 ? e.push(r) : n.push(r))),
		n.forEach((r) => r()),
		(f = e)
}
const h = new Set()
let X
function R(t, e) {
	t && t.i && (h.delete(t), t.i(e))
}
function Y(t, e, n, r) {
	if (t && t.o) {
		if (h.has(t)) return
		h.add(t),
			X.c.push(() => {
				h.delete(t), r && (n && t.d(1), r())
			}),
			t.o(e)
	} else r && r()
}
function Z(t) {
	t && t.c()
}
function B(t, e, n) {
	const { fragment: r, after_update: s } = t.$$
	r && r.m(e, n),
		$(() => {
			const o = t.$$.on_mount.map(I).filter(L)
			t.$$.on_destroy ? t.$$.on_destroy.push(...o) : b(o), (t.$$.on_mount = [])
		}),
		s.forEach($)
}
function U(t, e) {
	const n = t.$$
	n.fragment !== null &&
		(W(n.after_update),
		b(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []))
}
function tt(t, e) {
	t.$$.dirty[0] === -1 && (d.push(t), J(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function D(t, e, n, r, s, o, l = null, q = [-1]) {
	const m = w
	p(t)
	const a = (t.$$ = {
		fragment: null,
		ctx: [],
		props: o,
		update: c,
		not_equal: s,
		bound: P(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (m ? m.$$.context : [])),
		callbacks: P(),
		dirty: q,
		skip_bound: !1,
		root: e.target || m.$$.root
	})
	l && l(a.root)
	let x = !1
	if (
		((a.ctx = n
			? n(t, e.props || {}, (i, S, ...E) => {
					const O = E.length ? E[0] : S
					return (
						a.ctx &&
							s(a.ctx[i], (a.ctx[i] = O)) &&
							(!a.skip_bound && a.bound[i] && a.bound[i](O), x && tt(t, i)),
						S
					)
			  })
			: []),
		a.update(),
		(x = !0),
		b(a.before_update),
		(a.fragment = r ? r(a.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			const i = V(e.target)
			a.fragment && a.fragment.l(i), i.forEach(v)
		} else a.fragment && a.fragment.c()
		e.intro && R(t.$$.fragment), B(t, e.target, e.anchor), M()
	}
	p(m)
}
class H {
	constructor() {
		g(this, '$$')
		g(this, '$$set')
	}
	$destroy() {
		U(this, 1), (this.$destroy = c)
	}
	$on(e, n) {
		if (!L(n)) return c
		const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
		return (
			r.push(n),
			() => {
				const s = r.indexOf(n)
				s !== -1 && r.splice(s, 1)
			}
		)
	}
	$set(e) {
		this.$$set &&
			!K(e) &&
			((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
	}
}
const et = '4'
typeof window < 'u' &&
	(window.__svelte || (window.__svelte = { v: new Set() })).v.add(et)
function nt(t) {
	let e
	return {
		c() {
			;(e = j('section')),
				(e.innerHTML = `<article class="content"><header class="space-y-4"><h1 class="font-semibold text-6xl">Pure CSS Game</h1> <h5 class="font-light text-xl">daisyUI adds component class names to Tailwind CSS so you can make
					beautiful websites faster than ever.</h5></header></article> <article class="content"><div><div class="p-4"><button class="btn btn-primary">primary</button> <button class="btn btn-secondary">secondary</button> <button class="btn btn-accent">accent</button></div> <div class="p-4" data-theme="cupcake"><button class="btn btn-primary">primary</button> <button class="btn btn-secondary">secondary</button> <button class="btn btn-accent">accent</button></div> <div class="p-4 tabs"><button class="tab tab-lifted">Tab 1</button> <button class="tab tab-lifted tab-active">Tab 2</button> <button class="tab tab-lifted">Tab 3</button></div> <div class="p-4"><input type="checkbox" class="toggle toggle-primary"/> <input type="checkbox" class="toggle toggle-secondary"/> <input type="checkbox" class="toggle toggle-accent"/></div> <div class="card shadow-2xl w-80 m-4"><figure><img src="https://picsum.photos/id/1005/500/250"/></figure> <div class="card-body"><h2 class="card-title">DaisyUI Card</h2> <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
							Sit sit necessitatibus.</p></div></div> <details class="dropdown m-4"><summary class="m-1 btn">open / close</summary> <ul class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul></details> <button class="btn" onclick="my_modal_1.showModal()">open modal</button> <dialog id="my_modal_1" class="modal"><form method="dialog" class="modal-box"><p class="py-4">Press ESC key or click the button below to close</p> <div class="modal-action"><button class="btn">Close</button></div></form></dialog> <ul class="steps my-4 w-full"><li class="step step-primary">Register</li> <li class="step step-primary">Choose plan</li> <li class="step">Purchase</li> <li class="step">Receive Product</li></ul> <div class="chat chat-start m-4"><div class="chat-image avatar"><div class="w-10 rounded-full"><img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/></div></div> <div class="chat-bubble">see all components <a class="link" target="_blank" href="https://daisyui.com/components">Here</a></div></div></div></article>`),
				T(e, 'class', 'layer')
		},
		m(n, r) {
			A(n, e, r)
		},
		p: c,
		i: c,
		o: c,
		d(n) {
			n && v(e)
		}
	}
}
class st extends H {
	constructor(e) {
		super(), D(this, e, null, nt, N, {})
	}
}
function rt(t) {
	let e, n, r
	return (
		(n = new st({})),
		{
			c() {
				;(e = j('main')), Z(n.$$.fragment), T(e, 'class', 'main')
			},
			m(s, o) {
				A(s, e, o), B(n, e, null), (r = !0)
			},
			p: c,
			i(s) {
				r || (R(n.$$.fragment, s), (r = !0))
			},
			o(s) {
				Y(n.$$.fragment, s), (r = !1)
			},
			d(s) {
				s && v(e), U(n)
			}
		}
	)
}
class ot extends H {
	constructor(e) {
		super(), D(this, e, null, rt, N, {})
	}
}
new ot({ target: document.getElementById('app') })
