(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{58:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"变量和类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量和类型"}},[t._v("#")]),t._v(" 变量和类型")]),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("h3",{attrs:{id:"什么是变量？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是变量？"}},[t._v("#")]),t._v(" 什么是变量？")]),t._v(" "),a("p",[t._v("变量来源于数学，在计算机语言中是指能储存计算结果或能表示值的抽象概念。我们在程序中常常需要保存和处理数据，当程序中需要使用数据时，可以定义某种类型的变量，通过变量名来访问存储这段数据的内存。所以，从本质上看，变量代表了一段可操作的内存，也可以认为变量是内存的符号化表示。")]),t._v(" "),a("h3",{attrs:{id:"javascript-中有几种数据类型？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-中有几种数据类型？"}},[t._v("#")]),t._v(" JavaScript 中有几种数据类型？")]),t._v(" "),a("h4",{attrs:{id:"_7种基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7种基本数据类型"}},[t._v("#")]),t._v(" 7种基本数据类型")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Undefined")]),t._v(" ———— 未定义类型")]),t._v(" "),a("li",[a("strong",[t._v("Null")]),t._v(" ———— 空类型")]),t._v(" "),a("li",[a("strong",[t._v("Boolean")]),t._v(" ———— 布尔类型")]),t._v(" "),a("li",[a("strong",[t._v("Number")]),t._v(" ———— 数字类型")]),t._v(" "),a("li",[a("strong",[t._v("String")]),t._v(" ———— 字符串类型")]),t._v(" "),a("li",[a("strong",[t._v("Symbol")]),t._v(" ———— 表示独一无二的值")]),t._v(" "),a("li",[a("strong",[t._v("BigInt")]),t._v(" ———— 任意精度整数类型")])]),t._v(" "),a("h4",{attrs:{id:"_1种引用数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1种引用数据类型"}},[t._v("#")]),t._v(" 1种引用数据类型")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Object")]),t._v(" ———— 对象类型\n"),a("ul",[a("li",[t._v("Function")]),t._v(" "),a("li",[t._v("Array")]),t._v(" "),a("li",[t._v("Class")]),t._v(" "),a("li",[t._v("Date")]),t._v(" "),a("li",[t._v("RegExp")]),t._v(" "),a("li",[t._v("Math")]),t._v(" "),a("li",[t._v("JSON")]),t._v(" "),a("li",[t._v("Error")])])])]),t._v(" "),a("h3",{attrs:{id:"变量在内存中的具体存储形式？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量在内存中的具体存储形式？"}},[t._v("#")]),t._v(" 变量在内存中的具体存储形式？")]),t._v(" "),a("ul",[a("li",[t._v("基本类型保存在栈内存中，值有固定大小，通过按值访问。")]),t._v(" "),a("li",[t._v("引用类型保存在堆内存中，值的大小不固定。栈内存中存放该对象的访问地址指针，指向堆内存中的对象。JavaScript 中不允许直接访问堆内存中的位置。因此操作对象时，实际操作的是对象的引用。")])]),t._v(" "),a("h2",{attrs:{id:"基本数据类型常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型常见问题"}},[t._v("#")]),t._v(" 基本数据类型常见问题")]),t._v(" "),a("h3",{attrs:{id:"如何理解-undefinde-和-null-？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何理解-undefinde-和-null-？"}},[t._v("#")]),t._v(" 如何理解 undefinde 和 null ？")]),t._v(" "),a("ul",[a("li",[t._v("undefined 表示一个变量未初始化。若一个变量声明时未进行初始化（赋值），则为 undefined。")]),t._v(" "),a("li",[t._v("null 表示一个对象不存在，若一个变量或一段函数返回的结果期望为一个对象，则在该对象尚未存在时访问它就会返回为 null。")]),t._v(" "),a("li",[t._v("即：undefined 表示空变量，null 表示空对象。")])]),t._v(" "),a("h3",{attrs:{id:"symbol-在实际开发中的作用？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol-在实际开发中的作用？"}},[t._v("#")]),t._v(" Symbol 在实际开发中的作用？")]),t._v(" "),a("p",[t._v("首先需要理解 Symbol 是一种无法被重建的基本类型。看一个例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" s2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" s3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" s4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" s3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" s4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" s4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("p",[t._v("我们可以看到 Symbol 虽然是一种基本数据类型，但是该类型的变量除了与自身相等外，和其余变量皆互不相等，有点类似于对象创建的实例互不相等的情况。所以这种独特的特性就给 Symbol 带来了独特的应用场景。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("用来代替常量")]),a("br"),t._v("\n在实际业务中，我们常常定义一组常量来代表一种业务逻辑下的几种不同类型，而这几个常量之间需要保证唯一性，为了保证这一点，我们需要为每个常量赋一个唯一的值，而现在可以直接使用 Symbol 来为这些常量赋值。")]),t._v(" "),a("li",[a("strong",[t._v("作为对象的属性")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("阻止对象属性名冲突")]),t._v("\n在不知道对象原有属性名的情况下，可用来扩展对象的属性。\n例如当两个不同的库要读取对象的一些原始属性时，可以在初始化时生成其所需的 symbols ，然后在对象上任意赋值。")]),t._v(" "),a("li",[a("strong",[t._v("模拟私有属性")]),t._v("\n使用 Symbol 作为属性名的对象，在序列化器中该属性会被隐藏。在形如 "),a("code",[t._v("Object.keys()")]),t._v(" 或 "),a("code",[t._v("for...in")]),t._v(" 的操作中，并不会获取到 symbols ，"),a("code",[t._v("JSON.stringify()")]),t._v(" 的输出也不会包含 symbols 。但是可以通过 "),a("code",[t._v("Reflect.ownKeys()")]),t._v(" 来获取。\n但一般情况下如果对 Symbol 属性没有直接的引用，则无法访问到该属性的值。所以可以用来定义类的私有属性/方法。")])])]),t._v(" "),a("li",[a("strong",[t._v("注册和获取全局 Symbol")]),a("br"),t._v("\n使用 "),a("code",[t._v("Symbol.for()")]),t._v(" 可以注册或获取一个 windows 间全局的 Symbol 实例。")])]),t._v(" "),a("h3",{attrs:{id:"手动实现一个-symbol-？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动实现一个-symbol-？"}},[t._v("#")]),t._v(" 手动实现一个 symbol ？")]),t._v(" "),a("h4",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),a("p",[t._v("如果需要模拟实现一个 Symbol 的话，需要构建一个 Symbol 函数，然后直接返回一个独一无二的值。首先让我们看看 Symbol 的特性：")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("通过 Symbol 函数生成。")]),t._v(" "),a("li",[t._v("Symbol 函数前不能使用 new 命令，否则会报错。")]),t._v(" "),a("li",[t._v('typeof 的结果为"Symbol"，instanceof 的结果为 false。')]),t._v(" "),a("li",[t._v("Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。")]),t._v(" "),a("li",[t._v("如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，将其转为字符串，然后才生成一个 Symbol 值。")]),t._v(" "),a("li",[t._v("Symbol 函数的参数只是表示对当前 Symbol 值的描述，相同参数的 Symbol 函数的返回值是不相等的。")]),t._v(" "),a("li",[t._v("Symbol 值不能与其他类型的值进行运算，会报错。")]),t._v(" "),a("li",[t._v("Symbol 值可以显式转为字符串。")]),t._v(" "),a("li",[t._v("Symbol 值可以作为标识符，用于对象的属性名，可以保证不会出现同名的属性。")]),t._v(" "),a("li",[t._v("Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名。")]),t._v(" "),a("li",[t._v("如果我们希望使用同一个 Symbol 值，可以使用 Symbol.for。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。")]),t._v(" "),a("li",[t._v("Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key。")])])]),t._v(" "),a("p",[t._v("再来看看调用 Symbol 时会发生什么：")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("如果使用 new , 就报错")]),t._v(" "),a("li",[t._v("如果 description 是 undefined，让 descString 为 undefined")]),t._v(" "),a("li",[t._v("否则，让 descString 为 ToString")]),t._v(" "),a("li",[t._v("如果报错，就返回")]),t._v(" "),a("li",[t._v("返回一个新的唯一的 Symbol 值，它的内部属性 [[Description]] 值为 descString")])])]),t._v(" "),a("h4",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" demo")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" generateName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" postfix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("descString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      postfix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@@'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" descString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" postfix\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("SymbolPolyfill")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现特性第 2 点：Symbol 函数前不能使用 new 命令")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instanceof "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SymbolPolyfill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TypeError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Symbol is not a constructor'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现特性第 5 点：如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，将其转为字符串，然后才生成一个 Symbol 值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" descString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" description "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" symbol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__Name__\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现特性第 8 点：Symbol 值可以显式转为字符串。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// // return 'Symbol(' + this.__Description__ + ')'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__Description__'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" descString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        writable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        enumerable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        configurable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__Name__'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("descString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        writable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        enumerable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        configurable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" symbol\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" forMap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SymbolPolyfill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'for'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" descString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" description "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" forMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("descString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" forMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("descString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" forMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("descString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SymbolPolyfill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("descString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      writable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      enumerable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      configurable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keyFor'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" forMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("forMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" key\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      writable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      enumerable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      configurable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SymbolPolyfill "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SymbolPolyfill\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"引用数据类型常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用数据类型常见问题"}},[t._v("#")]),t._v(" 引用数据类型常见问题")]),t._v(" "),a("h3",{attrs:{id:"对象的深拷贝和浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的深拷贝和浅拷贝"}},[t._v("#")]),t._v(" 对象的深拷贝和浅拷贝")]),t._v(" "),a("p",[t._v("首先要弄明白 JavaScript 是如何复制引用类型的。看如下例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eg1")]),t._v("\nobj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { a: 2 }")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { a: 2 }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eg2")]),t._v("\nobj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { a: 3 }")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { a: 3 }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eg3")]),t._v("\nobj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// {a: 3, b: "b"}')]),t._v("\n")])])]),a("p",[t._v("eg1 中只修改了 obj2 中的 a 属性，obj1 中的 a 属性却同时改变了。eg2 中修改了 obj1 中的 a 属性，obj2 中的 a 属性也同时改变了。eg3 中给 obj2 新增了一个 b 属性，obj1 中也增加了 b 属性。看起来，obj1 和 obj2 所指向的是同一个对象。")]),t._v(" "),a("p",[t._v("这就要从对象的底层存储来分析了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/base-1-1-1.png",alt:"保存在栈中的变量和堆内存中对象的关系"}})]),t._v(" "),a("h4",{attrs:{id:"浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝"}},[t._v("#")]),t._v(" 浅拷贝")]),t._v(" "),a("p",[t._v("对浅拷贝的定义可以理解为：")]),t._v(" "),a("blockquote",[a("p",[t._v("当创建一个对象的时候，该对象有着对原始对象属性值的一份精确拷贝，拷贝的值始终是栈内存中的值。由于基本类型在栈内存中存放的就是属性值，则拷贝时拷贝的就是基本数据类型的值。由于引用类型栈内存中存放的是指向堆内存中的对象的值的指针，所以拷贝的就是其内存地址，因此其中一个对象的值修改的时候，就会影响到另一个对象。")])]),t._v(" "),a("h4",{attrs:{id:"深拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝"}},[t._v("#")]),t._v(" 深拷贝")]),t._v(" "),a("p",[t._v("由于在实际应用中，我们在操作对象时，往往不希望拷贝出来的对象对原始对象造成污染。因此对于引用类型，我们希望在对内存中开辟一块新的内存地址用于存放复制的对象，并将原始对象的值复制过来。所以对于"),a("strong",[t._v("对象")]),t._v("，我们需要深拷贝，即：")]),t._v(" "),a("blockquote",[a("p",[t._v("将一个对象从内存中完整的拷贝一份出来，从堆内存中开辟一个新的区域存放新对象，且修改新对象不会影响原对象。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);