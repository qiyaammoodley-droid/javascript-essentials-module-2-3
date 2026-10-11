/*
  JavaScript Essentials 1: Modules 2 and 3 Combined Project
  Student: Qiyaam Moodley
  Note: This file uses beginner-friendly examples and comments to explain the results.
  Run with Node.js. Challenge 10 is in challenge10.html because it needs a browser.
*/

console.log('\n================ CHALLENGE 1: VARIABLES, TYPES AND TYPEOF ================');
// A string stores text. const is suitable because my name will not change in this example.
const fullName = 'Qiyaam Moodley';
// A number stores a whole-number age. const is suitable because this example does not update it.
const age = 21;
// A boolean stores true or false. const is suitable because the example answer stays the same.
const enjoysJavaScript = true;
// A number can also store decimals. const is suitable because this sample temperature is fixed.
const favouriteTemperature = 23.5;
// Number('not a number') creates NaN, a special numeric value. const keeps this test value fixed.
const notANumber = Number('not a number');
// Infinity is a number value representing an unbounded result. const is appropriate for this test.
const infiniteValue = 1 / 0;
// MAX_SAFE_INTEGER is the largest integer JavaScript can safely represent. const keeps it unchanged.
const maximumSafeInteger = Number.MAX_SAFE_INTEGER;
// null explicitly means no value. const is suitable because this example will not be reassigned.
const emptyValue = null;
// undefined is explicitly assigned here to demonstrate the type. let allows reassignment if needed.
let missingValue = undefined;
// A template literal combines existing values into a string. const is suitable for this fixed message.
const introduction = `Hi, I'm ${fullName}, I'm ${age}, and I enjoy JavaScript: ${enjoysJavaScript}.`;

const challenge1Values = { fullName, age, enjoysJavaScript, favouriteTemperature, notANumber, infiniteValue, maximumSafeInteger, emptyValue, missingValue, introduction };
for (const [name, value] of Object.entries(challenge1Values)) console.log(`typeof ${name}:`, typeof value);
console.log('typeof null:', typeof null); // Prediction: object. This is a long-standing JavaScript bug kept for compatibility.
console.log('typeof NaN:', typeof NaN); // Prediction: number. NaN is a special numeric value, not a separate type.
console.log('typeof undefined:', typeof undefined); // 'undefined'
console.log('typeof "42":', typeof '42'); // 'string'
console.log('typeof (typeof 42):', typeof (typeof 42)); // 'string', because typeof returns text.
console.log('typeof [1, 2, 3]:', typeof [1, 2, 3]); // 'object'; arrays are objects.
console.log('typeof function() {}:', typeof function () {}); // 'function'
/* typeof null returns 'object' because of an old implementation detail in JavaScript's original type tagging.
   It is a historical bug, and changing it could break existing websites. typeof NaN returns 'number'
   because NaN is defined as a special value within JavaScript's numeric type. */

console.log('\n================ CHALLENGE 2: TYPE CONVERSION ================');
const startingValues = [
  ['"123"', '123'], ['"3.14"', '3.14'], ['"hello"', 'hello'], ['"42abc"', '42abc'],
  ['empty string', ''], ['zero', 0], ['null', null], ['undefined', undefined]
];
for (const [label, value] of startingValues) {
  console.log(`\nStarting value ${label}:`, value, '| typeof:', typeof value);
  for (const [methodName, convert] of [
    ['Number', Number], ['parseInt', (v) => parseInt(v, 10)], ['parseFloat', parseFloat], ['Boolean', Boolean], ['String', String]
  ]) {
    const converted = convert(value);
    console.log(`${methodName}:`, converted, '| typeof:', typeof converted);
  }
}
// Implicit coercion predictions and explanations:
const coercionTests = [
  ['"5" + 3', '5' + 3, 'The + operator joins a string and a number into text.'],
  ['"5" - 3', '5' - 3, 'Subtraction converts the numeric string to a number.'],
  ['"5" * "2"', '5' * '2', 'Multiplication converts both strings to numbers.'],
  ['true + 1', true + 1, 'true becomes 1 during numeric addition.'],
  ['true + "1"', true + '1', 'The string causes + to concatenate after true becomes text.'],
  ['false + null', false + null, 'false and null both become 0 in this numeric operation.'],
  ['null + undefined', null + undefined, 'undefined converts to NaN, so the result is NaN.'],
  ['1 / 0', 1 / 0, 'Dividing a positive number by zero gives Infinity.'],
  ['0 / 0', 0 / 0, 'Zero divided by zero is undefined mathematically, so JavaScript returns NaN.'],
  ['"abc" - 1', 'abc' - 1, 'The text cannot convert to a number, so the result is NaN.'],
  ['[] + []', [] + [], 'Both arrays become empty strings, so the result is an empty string.'],
  ['[1] + [2]', [1] + [2], 'Arrays become strings, so the result is the text 12.']
];
for (const [expression, result, explanation] of coercionTests) console.log(`${expression} =>`, result, '| typeof:', typeof result, '|', explanation);
/* Number('42abc') returns NaN because the whole string must be a valid number; parseInt('42abc') returns 42
   because parseInt reads the integer at the beginning and stops at the first invalid character.
   Use parseFloat when decimal places matter, for example reading a product price such as '19.95'.
   Number('') returns 0, which can accidentally make an empty required amount field look like a valid zero. */

console.log('\n================ CHALLENGE 3: OPERATORS MASTERCLASS ================');
// Arithmetic: calculate monthly net salary after tax, UIF and medical aid.
const grossSalary = 45000;
const salaryTax = grossSalary * 0.25;
const uif = grossSalary * 0.01;
const medicalAid = 2500;
const netSalary = grossSalary - salaryTax - uif - medicalAid;
console.log('Net salary:', netSalary, '| 7 % 2 gives remainder:', 7 % 2);
// Assignment: update a cart total using compound assignment operators.
let cartTotal = 0;
cartTotal += 150; cartTotal += 85; cartTotal += 220;
cartTotal *= 0.90; // subtracts a 10% discount
cartTotal *= 1.15; // adds 15% VAT
console.log('Cart total after discount and VAT:', cartTotal);
// Comparison: check the signup fields against the requirements.
const signupAge = 21, signupPassword = 'securePass', typedEmail = 'user@example.com', confirmedEmail = 'user@example.com';
console.log('Signup valid:', signupAge >= 18 && signupPassword.length >= 8 && confirmedEmail === typedEmail);
// Logical: admin access is allowed even when the normal login checks are false.
const loggedIn = true, emailVerified = true, isAdmin = false;
console.log('Premium dashboard access:', (loggedIn && emailVerified) || isAdmin);
// Unary: convert text to a number and flip a boolean.
const formAge = +'25';
let isDarkMode = false; isDarkMode = !isDarkMode;
console.log('Converted age:', formAge, '| dark mode:', isDarkMode);
// Ternary: choose the membership label.
const membershipType = 'premium';
const membershipBadge = membershipType === 'premium' ? 'Premium Member' : membershipType === 'trial' ? 'Trial Member' : 'Free Member';
console.log(membershipBadge);
// Build the same greeting with concatenation and a template literal.
const greetingPlus = 'Welcome back ' + 'Thabo Nkosi' + ', you are ' + 28 + ' years old.';
const greetingTemplate = `Welcome back Thabo Nkosi, you are ${28} years old.`;
console.log(greetingPlus); console.log(greetingTemplate);
/* Prefix ++x changes x first and returns the new value; postfix x++ returns the old value first.
   Example: let x = 4; console.log(++x); // 5. let y = 4; console.log(y++); // 4, then y becomes 5.
   Modulo is useful for checking even/odd numbers, running an action every N items (index % 5 === 0),
   and wrapping a circular index back to the start (index % array.length).
   Nested ternaries are okay for a short, simple choice, but avoid them when the conditions become hard to read.
   Template literals are usually clearer for multi-part messages because variables are easy to spot. */

console.log('\n================ CHALLENGE 4: EQUALITY DEEP DIVE ================');
const equalityTests = [
  ['0 == false', 0 == false, 'true', 'Loose equality converts false to 0.'],
  ['0 === false', 0 === false, 'false', 'Strict equality does not convert number to boolean.'],
  ['"" == 0', '' == 0, 'true', 'An empty string converts to 0 in loose equality.'],
  ['"" === 0', '' === 0, 'false', 'String and number are different types.'],
  ['"0" == 0', '0' == 0, 'true', 'Loose equality converts the numeric string to 0.'],
  ['"0" === 0', '0' === 0, 'false', 'Strict equality compares both type and value.'],
  ['null == undefined', null == undefined, 'true', 'Loose equality treats null and undefined as equal to each other.'],
  ['null === undefined', null === undefined, 'false', 'Null and undefined are different types.'],
  ['null == 0', null == 0, 'false', 'The special null rule does not make null equal to zero.'],
  ['null >= 0', null >= 0, 'true', 'Relational comparison converts null to 0.'],
  ['null > 0', null > 0, 'false', 'After conversion to 0, zero is not greater than zero.'],
  ['NaN == NaN', NaN == NaN, 'false', 'NaN is unequal to every value, including itself.'],
  ['NaN === NaN', NaN === NaN, 'false', 'Strict equality also treats NaN as unequal to itself.'],
  ['Object.is(NaN, NaN)', Object.is(NaN, NaN), 'true', 'Object.is treats NaN as the same value as itself.'],
  ['+0 === -0', +0 === -0, 'true', 'Strict equality treats positive and negative zero as equal.'],
  ['Object.is(+0, -0)', Object.is(+0, -0), 'false', 'Object.is distinguishes positive zero from negative zero.'],
  ['[1,2,3] == "1,2,3"', [1,2,3] == '1,2,3', 'true', 'The array converts to the string 1,2,3.'],
  ['[] == false', [] == false, 'true', 'The array becomes an empty string, then 0, matching false after conversion.'],
  ['[] == 0', [] == 0, 'true', 'The empty array converts to an empty string and then to 0.'],
  ['[0] == false', [0] == false, 'true', 'The array converts to the string 0, then numeric 0, matching false.']
];
for (const [expression, result, prediction, reason] of equalityTests) {
  console.log(`Prediction before running: ${expression} => ${prediction}; verified result: ${result}; ${reason}`);
}
// The expressions above use loose equality only where the brief asks us to investigate its behaviour.
// Password-reset validation uses strict equality to avoid type conversion during comparison.
function validateReset(data) {
  const checks = {
    'Passwords match exactly': data.newPassword === data.confirmPassword,
    'Emails match exactly': data.currentEmail === data.confirmEmail,
    'Password is not the current email': data.newPassword !== data.currentEmail,
    'Password has at least 8 characters': typeof data.newPassword === 'string' && data.newPassword.length >= 8
  };
  for (const [label, passed] of Object.entries(checks)) console.log(`${passed ? 'PASS' : 'FAIL'}: ${label}`);
  return Object.values(checks).every(Boolean);
}
console.log('Reset test case 1 (should pass):');
validateReset({ newPassword: 'StrongPass9', confirmPassword: 'StrongPass9', currentEmail: 'lerato@example.com', confirmEmail: 'lerato@example.com' });
console.log('Reset test case 2 (should fail):');
validateReset({ newPassword: 'lerato@example.com', confirmPassword: 'different', currentEmail: 'lerato@example.com', confirmEmail: 'wrong@example.com' });

console.log('\n================ CHALLENGE 5: OPERATOR PRECEDENCE ================');
const precedenceTests = [
  ['2 + 3 * 4 - 1', 2 + 3 * 4 - 1, 'Multiplication first, then addition, then subtraction.'],
  ['(2 + 3) * (4 - 1)', (2 + 3) * (4 - 1), 'Parentheses evaluate each addition/subtraction before multiplication.'],
  ['10 - 4 - 2', 10 - 4 - 2, 'Subtraction is left-associative: (10 - 4) - 2.'],
  ['2 ** 3 ** 2', 2 ** 3 ** 2, 'Exponentiation is right-associative: 2 ** (3 ** 2).'],
  ['10 % 3 * 2 + 1', 10 % 3 * 2 + 1, 'Modulo, then multiplication, then addition.'],
  ['100 / 4 / 5', 100 / 4 / 5, 'Division is left-associative: (100 / 4) / 5.'],
  ['5 + 2 > 6 && 3 < 4', 5 + 2 > 6 && 3 < 4, 'Addition, comparisons, then logical AND.'],
  ['true && false || true && true', true && false || true && true, 'AND groups first, then OR.'],
  ['!false && !!0', !false && !!0, 'Unary NOT operators first, then AND.'],
  ['5 > 3 && 10 < 20 || !(2 === "2")', 5 > 3 && 10 < 20 || !(2 === '2'), 'Comparisons and strict equality, NOT, AND, then OR.'],
  ['1000 * 1.15 * 0.9', 1000 * 1.15 * 0.9, 'Multiplication runs left to right.'],
  ['typeof 5 + 1', typeof 5 + 1, 'typeof runs first and returns the string "number", then + concatenates 1.'],
  ['typeof (5 + 1)', typeof (5 + 1), 'Parentheses calculate 6 first, then typeof returns "number".'],
  ['"5" + 3 * 2', '5' + 3 * 2, 'Multiplication runs first, then + concatenates.'],
  ['"5" - 3 + 2', '5' - 3 + 2, 'Subtraction converts text to a number, then addition runs.']
];
for (const [expression, result, order] of precedenceTests) console.log(`${expression} =>`, result, '| order:', order);
/* Parentheses are useful even when not required because they show the developer's intention and make reviews easier.
   They are especially helpful in financial calculations, where a readable expression is safer than relying on memory. */

console.log('\n================ CHALLENGE 6: TERNARY AND SHORT-CIRCUIT ================');
const gradeFor = (percentage) => percentage >= 90 ? 'A' : percentage >= 80 ? 'B' : percentage >= 70 ? 'C' : percentage >= 60 ? 'D' : percentage >= 50 ? 'E' : 'F';
for (const percentage of [95, 82, 73, 65, 54, 42, 0, 100]) console.log(`${percentage}% => ${gradeFor(percentage)}`);
const profiles = [
  {},
  { displayName: 'Thabo', theme: '', maxResults: 0, lastLogin: null, notificationCount: 0 }
];
for (const profile of profiles) {
  const displayName = profile.displayName || 'Guest User';
  const theme = profile.theme || 'light';
  const maxResults = profile.maxResults || 10;
  const lastLogin = profile.lastLogin ?? 'Never';
  const notificationCount = profile.notificationCount ?? 0;
  console.log({ displayName, theme, maxResults, lastLogin, notificationCount });
}
/* || uses the fallback for every falsy value, including 0 and ''. ?? only uses the fallback for null or undefined,
   so a notificationCount of 0 remains 0 with ??, while maxResults of 0 becomes 10 with ||. */
const cityUsers = [
  { name: 'A', address: { city: 'Johannesburg' } },
  { name: 'B' },
  null
];
for (const user of cityUsers) {
  const guardedCity = user && user.address && user.address.city;
  const optionalCity = user?.address?.city;
  const cityWithDefault = user?.address?.city ?? 'Unknown city';
  console.log({ guardedCity, optionalCity, cityWithDefault });
}
const shortCircuitTests = [
  ['null || undefined || 0 || "" || "finally"', null || undefined || 0 || '' || 'finally'],
  ['null ?? undefined ?? 0 ?? "" ?? "finally"', null ?? undefined ?? 0 ?? '' ?? 'finally'],
  ['0 || "first truthy"', 0 || 'first truthy'], ['0 ?? "first non-nullish"', 0 ?? 'first non-nullish'],
  ['true && false && "never reached"', true && false && 'never reached'], ['"first" && "second" && "third"', 'first' && 'second' && 'third'],
  ['false || (true && "yes")', false || (true && 'yes')], ['(false || true) && "yes"', (false || true) && 'yes'],
  ['1 && 2 && 3', 1 && 2 && 3], ['null?.foo?.bar?.baz', null?.foo?.bar?.baz]
];
for (const [expression, result] of shortCircuitTests) console.log(expression, '=>', result, '| typeof:', typeof result);

console.log('\n================ CHALLENGE 7: TYPEOF, INSTANCEOF, DELETE ================');
const typeofTests = [
  ['typeof 42', typeof 42], ['typeof "hello"', typeof 'hello'], ['typeof true', typeof true], ['typeof undefined', typeof undefined],
  ['typeof null', typeof null], ['typeof {}', typeof {}], ['typeof []', typeof []], ['typeof function() {}', typeof function () {}], ['typeof NaN', typeof NaN]
];
for (const [expression, result] of typeofTests) console.log(expression, '=>', result);
console.log('typeof undeclaredVariable:', typeof undeclaredVariable); // typeof on an undeclared identifier safely returns 'undefined'.
console.log('Array check:', Array.isArray([1, 2, 3])); // Array.isArray reliably distinguishes arrays from plain objects.
console.log('instanceof tests:', {
  arrayIsArray: [] instanceof Array, arrayIsObject: [] instanceof Object, objectIsObject: ({} instanceof Object),
  primitiveString: 'hello' instanceof String, boxedString: new String('hello') instanceof String,
  primitiveNumber: 42 instanceof Number, date: new Date() instanceof Date, regexp: /abc/ instanceof RegExp
});
/* typeof is right for primitive checks, e.g. typeof 'hello' === 'string'; instanceof is wrong for primitive strings.
   instanceof is right for checking a Date object, while typeof new Date() only says 'object'. */
const user = { name: 'Lerato', age: 25, role: 'student' };
console.log('Before delete:', user); delete user.role; console.log('After delete:', user);
// In a strict-mode ES module, deleting an unqualified variable such as x is a syntax error; do not run delete x.
let x = 5; console.log('delete on a variable property is not valid in strict mode; x remains:', x);
const arr = [1, 2, 3, 4]; delete arr[1]; console.log('After deleting array index:', arr, '| length:', arr.length, '| index 1:', arr[1]);
console.log('delete Math.PI:', delete Math.PI, '| Math.PI:', Math.PI); // false because it is non-configurable.
/* delete on an array leaves an empty slot and does not shorten the array. Use splice(index, 1) to remove an item
   and shift later items down. A non-configurable property cannot be deleted; Math.PI is one example. */

console.log('\n================ CHALLENGE 8: BITWISE PERMISSIONS ================');
const READ = 1; // binary 0001
const WRITE = 2; // binary 0010
const DELETE = 4; // binary 0100
const ADMIN = 8; // binary 1000
let firstUserPermissions = READ | WRITE;
const adminPermissions = READ | WRITE | DELETE | ADMIN;
console.log('First user READ + WRITE flags:', firstUserPermissions);
console.log('Admin has all permissions:', adminPermissions);
console.log('First user has READ?', (firstUserPermissions & READ) !== 0 ? 'Yes' : 'No');
console.log('First user has DELETE?', (firstUserPermissions & DELETE) !== 0 ? 'Yes' : 'No');
firstUserPermissions |= DELETE; console.log('After granting DELETE:', firstUserPermissions);
firstUserPermissions &= ~WRITE; console.log('After revoking WRITE:', firstUserPermissions);
let toggleUserPermissions = READ;
toggleUserPermissions ^= ADMIN; console.log('ADMIN toggled on:', toggleUserPermissions);
toggleUserPermissions ^= ADMIN; console.log('ADMIN toggled off:', toggleUserPermissions);
const SUPER_ADMIN = ADMIN << 1; console.log('SUPER_ADMIN flag:', SUPER_ADMIN);
/* Bitwise flags store many yes/no permissions in one compact integer and make checks/combination fast.
   They are less suitable when permissions need descriptive names, more than 32 flags, or complex rules.
   & and | operate on bits; && and || work with truthiness and short-circuiting. Confusing them can make a permission
   check return an unexpected integer or boolean, potentially granting or denying access incorrectly. */

console.log('\n================ CHALLENGE 9: PAYROLL AND BANKING ================');
const formatZAR = (amount) => 'R ' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const formatUSD = (amount) => '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function calculatePayroll(gross) {
  const paye = gross * 0.25;
  const payrollUif = Math.min(gross * 0.01, 177.12);
  const payrollMedical = 2500;
  const pension = gross * 0.075;
  const deductions = paye + payrollUif + payrollMedical + pension;
  return { gross, paye, uif: payrollUif, medicalAid: payrollMedical, pension, deductions, net: gross - deductions };
}
const payroll = calculatePayroll(45000);
console.log('Payroll:', Object.fromEntries(Object.entries(payroll).map(([key, value]) => [key, formatZAR(value)])));
const grossSalaryInput = '45000';
const convertedGrossSalary = Number(grossSalaryInput);
if (!Number.isNaN(convertedGrossSalary) && convertedGrossSalary > 0) console.log('Validated form salary net:', formatZAR(calculatePayroll(convertedGrossSalary).net));
else console.log('Invalid gross salary input');

const principal = 25000, annualRate = 0.075, compoundsPerYear = 12, years = 3;
const finalBalance = principal * (1 + annualRate / compoundsPerYear) ** (compoundsPerYear * years);
const interestEarned = finalBalance - principal;
const effectiveAnnualRate = ((1 + annualRate / compoundsPerYear) ** compoundsPerYear - 1) * 100;
const monthlyFeeFor = (balance) => balance >= 25000 ? 0 : balance >= 5000 ? 75 : balance >= 1000 ? 50 : 25;
console.log('Savings final balance:', formatZAR(finalBalance));
console.log('Total interest earned:', formatZAR(interestEarned));
console.log('Effective annual rate:', effectiveAnnualRate.toFixed(2) + '%');
for (const balance of [500, 1500, 10000, 50000]) {
  const monthlyFee = monthlyFeeFor(balance);
  console.log(`Balance ${formatZAR(balance)}: monthly fee ${formatZAR(monthlyFee)}, annual fee ${formatZAR(monthlyFee * 12)}`);
}
const transferZAR = 15750.33, exchangeRate = 18.42, commissionRate = 0.025;
const commissionZAR = transferZAR * commissionRate;
const afterCommissionZAR = transferZAR - commissionZAR;
const receivedUSD = afterCommissionZAR / exchangeRate;
console.log('Transfer commission:', formatZAR(commissionZAR));
console.log('ZAR after commission:', formatZAR(afterCommissionZAR));
console.log('USD received:', formatUSD(receivedUSD));
/* Floating-point values can show small precision errors, for example 0.1 + 0.2 is not exactly 0.3 in JavaScript.
   I format displayed values to two decimals and would round at the correct business step. Real banking systems commonly
   store money as integer cents or use decimal/fixed-point types, rather than relying on binary floating-point alone. */

console.log('\n================ CHALLENGE 11: BUG HUNT ================');
/* At least 12 issues in the original script:
   1. item1Price is a string, not a numeric price, so convert it before arithmetic.
   2. item2Price is also a string and needs conversion.
   3. quantity is a string, which makes the code harder to validate and reason about.
   4. isLoggedIn is the string "true", not the boolean true; non-empty strings are truthy even when they say "false".
   5. customerAge is null, which means the age is unknown, not a verified numeric age.
   6. item1Price + item2Price concatenates strings instead of adding prices.
   7. The subtotal expression mixes string concatenation and multiplication due to operator behaviour.
   8. discountCode == "SAVE10" uses loose equality; strict equality is clearer and safer.
   9. The checkout rule does not validate that customerAge is a real number.
   10. null > 18 becomes false, but that is not a proper missing-age validation.
   11. seniorDiscount is null when the customer is not a senior.
   12. total - seniorDiscount converts null to 0 silently; use an explicit zero fallback.
   13. The original code does not validate prices or quantity before calculating.
   14. It calculates currency using floating-point without rounding the business values deliberately.
   15. Checkout eligibility should require a boolean login value and a valid age rule.
*/
const item1PriceFixed = Number('199.99');
const item2PriceFixed = Number('49.50');
const item3PriceFixed = 125;
const quantityFixed = Number('2');
const discountCodeFixed = 'SAVE10';
const isLoggedInFixed = true;
const customerAgeFixed = 25; // Test age; in a real form this would be converted and validated first.
const subtotalFixed = item1PriceFixed + item2PriceFixed + item3PriceFixed * quantityFixed;
const discountFixed = discountCodeFixed === 'SAVE10' ? 0.10 : 0;
const discountAmountFixed = subtotalFixed * discountFixed;
const afterDiscountFixed = subtotalFixed - discountAmountFixed;
const vatFixed = afterDiscountFixed * 0.15;
const totalFixed = afterDiscountFixed + vatFixed;
const canCheckoutFixed = isLoggedInFixed === true && Number.isFinite(customerAgeFixed) && customerAgeFixed >= 18;
const seniorDiscountFixed = customerAgeFixed >= 60 ? totalFixed * 0.05 : 0;
const finalTotalFixed = totalFixed - seniorDiscountFixed;
console.log('Corrected subtotal:', formatZAR(subtotalFixed));
console.log('Can checkout?', canCheckoutFixed);
console.log('Corrected total:', formatZAR(finalTotalFixed));

/* ================= CHALLENGE 12: SELF-REFLECTION =================
1. The most important thing I learned is that JavaScript values have types and operators can convert them automatically.
   For example, adding two strings joins them instead of doing normal arithmetic, which can break a price calculation.
2. I think === is safer because it compares values without first converting their types. For example, 0 == false is true,
   which could accidentally treat a numeric value and a boolean as the same input.
3. I prefer ?? when zero or an empty string is a real value that should be kept. For example, 0 ?? 10 returns 0,
   while 0 || 10 returns 10 because zero is falsy.
4. typeof null returns 'object' because of a historical JavaScript implementation mistake that was kept for compatibility.
   I can check a value with value === null to test specifically for null.
5. If an API sends a price or quantity as text and I forget to convert it, an arithmetic expression may concatenate strings
   or produce NaN. The result could be wrong even though the page still loads.
6. 0.1 + 0.2 does not exactly equal 0.3 because these decimal fractions cannot be represented exactly in binary floating point.
   For real money I would use integer cents or a decimal/fixed-point money library and round according to the business rules.
7. & and | work on the binary bits of numbers, while && and || use truthiness and can stop evaluating early. Confusing them in
   a permissions check could return a number instead of a boolean and lead to an incorrect access decision.
8. The hardest concept for me was implicit type conversion, because JavaScript can treat the same value differently depending
   on the operator. Testing each expression with console.log and checking typeof helped me understand what was happening.
*/
