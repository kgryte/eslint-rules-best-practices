'use strict';

var rules = {};

/**
* RULE: accessor-pairs
*	Never allow a setter to be defined without a paired getter. See [accessor-pairs]{@link http://eslint.org/docs/rules/accessor-pairs}.
*/
rules[ 'accessor-pairs' ] = 2;

/**
* RULE: block-scope-var
*	Never allow variables to be used outside of the block in which they were defined. See [block-scoped-var]{@link http://eslint.org/docs/rules/block-scoped-var}.
*/
rules[ 'block-scope-var' ] = 2;

/**
* RULE: complexity
*	Disable cyclomatic complexity. See [complexity]{@link http://eslint.org/docs/rules/complexity}.
*/
rules[ 'complexity' ] = 0;

/**
* RULE: consistent-return
*	Enforce consistent returns. See [consistent-return]{@link http://eslint.org/docs/rules/consistent-return}.
*/
rules[ 'consistent-return' ] = 2;

/**
* RULE: curly
*	Always require curly braces. See [curly]{@link http://eslint.org/docs/rules/curly}.
*/
rules[ 'curly' ] = 2;

/**
* RULE: default-case
*	Always require a `default` case in `switch` statements. See [default-case]{@link http://eslint.org/docs/rules/default-case}.
*/
rules[ 'default-case' ] = 2;

/**
* RULE: dot-notation
*	Enforce using dot notation over square-bracket notation. See [dot-notation]{@link http://eslint.org/docs/rules/dot-notation}.
*/
rules[ 'dot-notation' ] = 2;

/**
* RULE: dot-location
*	Require that a dot be on the same line as a property. See [dot-location]{@link http://eslint.org/docs/rules/dot-location}.
*/
rules[ 'dot-location' ] = [ 2, 'property' ];

/**
* RULE: eqeqeq
*	Always require `===` over `==`. See [eqeqeq]{@link http://eslint.org/docs/rules/eqeqeq}.
*/
rules[ 'eqeqeq' ] = 2;

/**
* RULE: guard-for-in
*	A `for-in` loop should always filter results using an `if` statement. See [guard-for-in]{@link http://eslint.org/docs/rules/guard-for-in}.
*/
rules[ 'guard-for-in' ] = 2;

/**
* RULE: no-alert
*	Never allow `alert`, `confirm`, or `prompt`. See [no-alert]{@link http://eslint.org/docs/rules/no-alert}.
*/
rules[ 'no-alert' ] = 2;

/**
* RULE: no-caller
*	Never allow `arguments.caller` or `arguments.callee` to be used, as they are deprecated. See [no-caller]{@link http://eslint.org/docs/rules/no-caller}.
*/
rules[ 'no-caller' ] = 2;

/**
* RULE: no-div-regex
*	Always require regex literals to escape division operators. See [no-div-regex]{@link http://eslint.org/docs/rules/no-div-regex}.
*/
rules[ 'no-div-regex' ] = 2;

/**
* RULE: no-else-return
*	Prevent unnecessary `else` blocks when an `if` contains a `return` statement. See [no-else-return]{@link http://eslint.org/docs/rules/no-else-return}.
*/
rules[ 'no-else-return' ] = 2;

/**
* RULE: no-empty-label
*	Never allow an empty label. See [no-empty-label]{@link http://eslint.org/docs/rules/no-empty-label}.
*/
rules[ 'no-empty-label' ] = 2;

/**
* RULE: no-eq-null
*	Never allow `null` comparisons. See [no-eq-null]{@link http://eslint.org/docs/rules/no-eq-null}.
*/
rules[ 'no-eq-null' ] = 2;

/**
* RULE: no-eval
*	Never allow the use of `eval`. See [no-eval]{@link http://eslint.org/docs/rules/no-eval}.
*/
rules[ 'no-eval' ] = 2;

/**
* RULE: no-extend-native
*	Never allow extending native prototypes. See [no-extend-native]{@link http://eslint.org/docs/rules/no-extend-native}.
*/
rules[ 'no-extend-native' ] = 2;

/**
* RULE: no-extra-bind
*	Prevent function binding when a function does not use `this`. See [no-extra-bind]{@link http://eslint.org/docs/rules/no-extra-bind}.
*/
rules[ 'no-extra-bind' ] = 2;

/**
* RULE: no-fallthrough
*	Prevent unintentional fall throughs in `switch` statements. See [no-fallthrough]{@link http://eslint.org/docs/rules/no-fallthrough}.
*/
rules[ 'no-fallthrough' ] = 2;

/**
* RULE: no-floating-decimal
*	Prevent floating decimals; e.g., `2.`. See [no-floating-decimal]{@link http://eslint.org/docs/rules/no-floating-decimal}.
*/
rules[ 'no-floating-decimal' ] = 2;

/**
* RULE: no-implicit-coercion
*	Allow implicit type coercion. See [no-implicit-coercion]{@link http://eslint.org/docs/rules/no-implicit-coercion}.
*/
rules[ 'no-implicit-coercion' ] = 0;

/**
* RULE: no-implied-eval
*	Never allow implied use of `eval` with `setTimeout`, `setInterval`, and `execScript`. See [no-implied-eval]{@link http://eslint.org/docs/rules/no-implied-eval}.
*/
rules[ 'no-implied-eval' ] = 2;

/**
* RULE: no-invalid-this
*	Never allow the use of `this` outside of classes. See [no-invalid-this]{@link http://eslint.org/docs/rules/no-invalid-this}.
*/
rules[ 'no-invalid-this' ] = 2;

/**
* RULE: no-iterator
*	Never allow the use of the deprecated `__iterator__` property. See [no-iterator]{@link http://eslint.org/docs/rules/no-iterator}.
*/
rules[ 'no-iterator' ] = 2;

/**
* RULE: no-labels
*	Never allow the user of `labels`. See [no-labels]{@link http://eslint.org/docs/rules/no-labels}.
*/
rules[ 'no-labels' ] = 2;

/**
* RULE: no-lone-blocks
*	Never allow standalone code blocks delimited by curly braces. See [no-line-blocks]{@link http://eslint.org/docs/rules/no-lone-blocks}.
*/
rules[ 'no-lone-blocks' ] = 2;

/**
* RULE: no-loop-func
*	Never allow functions to be created within a loop. See [no-loop-func]{@link http://eslint.org/docs/rules/no-loop-func}.
*/
rules[ 'no-loop-func' ] = 2;

/**
* RULE: no-multi-spaces
*	Never allow multiple whitespace characters in expressions. See [no-multi-spaces]{@link http://eslint.org/docs/rules/no-multi-spaces}.
*/
rules[ 'no-multi-spaces' ] = 2;

/**
* RULE: no-multi-str
*	Never allow using a `\` character to create multi-line strings. See [no-multi-str]{@link http://eslint.org/docs/rules/no-multi-str}.
*/
rules[ 'no-multi-str' ] = 2;

/**
* RULE: no-native-reassign
*	Never allow built-in native objects to be reassigned. See [no-native-reassign]{@link http://eslint.org/docs/rules/no-native-reassign}.
*/
rules[ 'no-native-reassign' ] = 2;

/**
* RULE: no-new-func
*	Never allow using the `Function` constructor to create functions. See [no-new-func]{@link http://eslint.org/docs/rules/no-new-func}.
*/
rules[ 'no-new-func' ] = 2;

/**
* RULE: no-new-wrappers
*	Never allow using `String`, `Number`, and `Boolean` in place of primitives. See [no-new-wrappers]{@link http://eslint.org/docs/rules/no-new-wrappers}.
*/
rules[ 'no-new-wrappers' ] = 2;

/**
* RULE: no-new
*	Never allow use the `new` operator without assignment. See [no-new]{@link http://eslint.org/docs/rules/no-new}.
*/
rules[ 'no-new' ] = 2;

/**
* RULE: no-octal-escape
*	Never allow octal escape sequences, which are deprecated. See [no-octal-escape]{@link http://eslint.org/docs/rules/no-octal-escape}.
*/
rules[ 'no-octal-escape' ] = 2;

/**
* RULE: no-octal
*	Never allow octal literals that begin with a leading zero; e.g., 071 (=> 57). See [no-octal]{@link http://eslint.org/docs/rules/no-octal}.
*/
rules[ 'no-octal' ] = 2;

/**
* RULE: no-param-reassign
*	Allow parameter reassignment (although bugs can arise when doing so). See [no-param-reassign]{@link http://eslint.org/docs/rules/no-param-reassign}.
*/
rules[ 'no-param-reassign' ] = 0;

/**
* RULE: no-process-env
*	Warn when using `process.env` to prevent it being littered throughout a code base. See [no-process-env]{@link http://eslint.org/docs/rules/no-process-env}.
*/
rules[ 'no-process-env' ] = 1;

/**
* RULE: no-proto
*	Never allow using deprecated `__proto__` property. See [no-proto]{@link http://eslint.org/docs/rules/no-proto}.
*/
rules[ 'no-proto' ] = 2;

/**
* RULE: no-redeclare
*	Never allow a variable to be declared multiple times within the same scope or for built-in globals to be redeclared. See [no-redeclare]{@link http://eslint.org/docs/rules/no-redeclare}.
*/
rules[ 'no-redeclare' ] = [ 2, {
	'builtinGlobals': true
}];

/**
* RULE: no-return-assign
*	Never allow assignment in `return` statements. See [no-return-assign]{@link http://eslint.org/docs/rules/no-return-assign}.
*/
rules[ 'no-return-assign' ] = [ 2, 'always' ];

/**
* RULE: no-script-url
*	Never allow using `javascript:` in urls. See [no-script-url]{@link http://eslint.org/docs/rules/no-script-url}.
*/
rules[ 'no-script-url' ] = 2;

/**
* RULE: no-self-compare
*	Allow self-comparison (NaN check). See [no-self-compare]{@link http://eslint.org/docs/rules/no-self-compare}.
*/
rules[ 'no-self-compare' ] = 0;

/**
* RULE: no-sequences
*	Never allow using a comma operator to separate multiple expressions where only a single expression is expected. See [no-sequences]{@link http://eslint.org/docs/rules/no-sequences}.
*/
rules[ 'no-sequences' ] = 2;

/**
* RULE: no-throw-literal
*	Encourage only `Error` objects to be thrown. See [no-throw-literal]{@link http://eslint.org/docs/rules/no-throw-literal}.
*/
rules[ 'no-throw-literal' ] = 2;

/**
* RULE: no-unused-expressions
*	Never allow unused expressions. See [no-unused-expressions]{@link http://eslint.org/docs/rules/no-unused-expressions}.
*/
rules[ 'no-unused-expressions' ] = 2;

/**
* RULE: no-useless-call
*	Never allow using `call` or `apply` when a normal function invocation will suffice. See [no-useless-call]{@link http://eslint.org/docs/rules/no-useless-call}.
*/
rules[ 'no-useless-call' ] = 2;

/**
* RULE: no-useless-concat
*	Never allow concatenation of two string literals which can be combined as a single literal. See [no-useless-concat]{@link http://eslint.org/docs/rules/no-useless-concat}.
*/
rules[ 'no-useless-concat' ] = 2;

/**
* RULE: no-void
*	Allow using the `void` operator. See [no-void]{@link http://eslint.org/docs/rules/no-void}.
*/
rules[ 'no-void' ] = 0;

/**
* RULE: no-warning-comments
*	Warn when source contains warning comments. See [no-warning-comments]{@link http://eslint.org/docs/rules/no-warning-comments}.
*/
rules[ 'no-warning-comments' ] = [ 1, {
	'terms': [
		'todo',
		'warning',
		'fixme',
		'hack',
		'xxx'
	],
	'location': 'start'
}];

/**
* RULE: no-with
*	Never allow using the `with` statement. See [no-with]{@link http://eslint.org/docs/rules/no-with}.
*/
rules[ 'no-with' ] = 2;

/**
* RULE: radix
*	Always require a `radix` parameter to `parseInt()`. See [radix]{@link http://eslint.org/docs/rules/radix}.
*/
rules[ 'radix' ] = 2;

/**
* RULE: vars-on-top
*	Always declare variables at the top of their scope to represent hoisting. See [vars-on-top]{@link http://eslint.org/docs/rules/vars-on-top}.
*/
rules[ 'vars-on-top' ] = 2;

/**
* RULE: wrap-iife
*	Always require an immediately invoked function expression (IIFE) to be wrapped. See [wrap-iife]{@link http://eslint.org/docs/rules/wrap-iife}.
*/
rules[ 'wrap-iife' ] = [ 2, 'inside' ];

/**
* RULE: yoda
*	Require that literals come after variables in conditions, except for ranges. See [yoda]{@link http://eslint.org/docs/rules/yoda}.
*/
rules[ 'yoda' ] = [ 2, 'never', {
	'exceptRange': true
}];


// EXPORTS //

module.exports = rules;
